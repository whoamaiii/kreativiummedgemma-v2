import { useRef, useCallback, useState, useEffect } from 'react';
import { TrackingEntry } from '@/types/student';
import { ModelType, mlModels } from '@/lib/mlModels';
import { getRuntimeAnalyticsConfig } from '@/config/analytics.config';
import type { EarlyStoppingConfig } from '@/types/ml';
import MLTrainingWorker from '@/workers/mlTraining.worker?worker';
import type { TrainingRequest, TrainingProgress, TrainingResult } from '@/workers/mlTraining.worker';
import { logger } from '@/lib/logger';

interface TrainingStatus {
  isTraining: boolean;
  modelType?: ModelType;
  progress?: number;
  epoch?: number;
  totalEpochs?: number;
  loss?: number;
  accuracy?: number;
  error?: string;
}

interface UseMLTrainingWorkerReturn {
  trainModel: (
    modelType: ModelType,
    trackingEntries: TrackingEntry[],
    options?: { epochs?: number; batchSize?: number; validationSplit?: number; earlyStopping?: EarlyStoppingConfig }
  ) => Promise<void>;
  trainingStatus: TrainingStatus;
  cancelTraining: () => void;
}

export const useMLTrainingWorker = (): UseMLTrainingWorkerReturn => {
  const workerRef = useRef<Worker | null>(null);
  const isMountedRef = useRef(true);
  const [trainingStatus, setTrainingStatus] = useState<TrainingStatus>({
    isTraining: false
  });

  const createWorker = useCallback(() => {
    // Terminate any existing worker before creating a new one to avoid leaks
    if (workerRef.current) {
      try {
        workerRef.current.terminate();
      } catch {
        // ignore
      }
      workerRef.current = null;
    }

    const worker = new MLTrainingWorker();

    worker.onmessage = async (e: MessageEvent<TrainingProgress | TrainingResult>) => {
      if (!isMountedRef.current) return; // Guard against race conditions
      
      const message = e.data;

      if (message.type === 'progress') {
        const safeTotal = Math.max(1, message.totalEpochs || 1);
        const clampedEpoch = Math.min(message.epoch ?? 0, safeTotal);
        setTrainingStatus(prev => ({
          ...prev,
          epoch: clampedEpoch,
          totalEpochs: safeTotal,
          loss: message.loss,
          accuracy: message.accuracy,
          progress: (clampedEpoch / safeTotal) * 100
        }));
      } else if (message.type === 'complete') {
        try {
          await mlModels.init();
          setTrainingStatus({
            isTraining: false,
            modelType: message.modelType,
            progress: 100
          });
        } catch (error) {
          logger.error('Failed to save trained model:', error);
          setTrainingStatus({
            isTraining: false,
            error: 'Failed to save trained model'
          });
        }
      } else if (message.type === 'error') {
        setTrainingStatus({
          isTraining: false,
          error: message.error
        });
      }
    };

    worker.onerror = (error) => {
      logger.error('ML training worker error:', error);
      setTrainingStatus({
        isTraining: false,
        error: 'Training worker encountered an error'
      });
    };

    workerRef.current = worker;
    return worker;
  }, []);

  const trainModel = useCallback(async (
    modelType: ModelType,
    trackingEntries: TrackingEntry[],
    options?: { epochs?: number; batchSize?: number; validationSplit?: number; earlyStopping?: EarlyStoppingConfig }
  ): Promise<void> => {
    // Create or reuse worker
    const worker = workerRef.current || createWorker();

    // Resolve defaults from runtime config
    const runtime = getRuntimeAnalyticsConfig();
    const defaultTraining = runtime.ml.models.find(m => m.provider === 'tfjs' && m.training)?.training;
    const defaultEpochs = options?.epochs ?? defaultTraining?.epochs ?? 50;
    const defaultBatch = options?.batchSize ?? defaultTraining?.batchSize ?? 32;
    const defaultValSplit = options?.validationSplit ?? defaultTraining?.validationSplit ?? 0.2;

    // Set training status
    setTrainingStatus({
      isTraining: true,
      modelType,
      progress: 0,
      epoch: 0,
      totalEpochs: defaultEpochs
    });

    // Prepare training request
    let trainingType: TrainingRequest['type'];
    switch (modelType) {
      case 'emotion-prediction':
        trainingType = 'train-emotion';
        break;
      case 'sensory-response':
        trainingType = 'train-sensory';
        break;
      case 'baseline-clustering':
        trainingType = 'train-baseline';
        break;
      default:
        throw new Error(`Unknown model type: ${modelType}`);
    }

    const request: TrainingRequest = {
      type: trainingType,
      data: {
        trackingEntries
      },
      config: {
        epochs: defaultEpochs,
        batchSize: defaultBatch,
        validationSplit: defaultValSplit,
        earlyStopping: options?.earlyStopping
      }
    };

    // Send training request to worker
    worker.postMessage(request);
  }, [createWorker]);

  const cancelTraining = useCallback(() => {
    if (workerRef.current) {
      workerRef.current.terminate();
      workerRef.current = null;
      setTrainingStatus({
        isTraining: false,
        error: 'Training cancelled'
      });
    }
  }, []);

  // Cleanup effect to ensure worker is terminated on unmount
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      if (workerRef.current) {
        logger.debug('[useMLTrainingWorker] Terminating ML training worker on unmount');
        workerRef.current.terminate();
        workerRef.current = null;
      }
    };
  }, []);

  return {
    trainModel,
    trainingStatus,
    cancelTraining
  };
};