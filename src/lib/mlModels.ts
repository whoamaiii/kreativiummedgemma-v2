import * as tf from '@tensorflow/tfjs';
import { Student, TrackingEntry, EmotionEntry, SensoryEntry } from '../types/student';
import { ValidationResults } from '../types/ml';
import { analyticsConfig } from '@/lib/analyticsConfig';

// Model versioning and metadata
export interface ModelMetadata {
  name: string;
  version: string;
  createdAt: Date;
  lastTrainedAt: Date;
  accuracy?: number;
  loss?: number;
  inputShape: number[];
  outputShape: number[];
  architecture: string;
  epochs: number;
  dataPoints: number;
  validationResults?: ValidationResults;
}

// ML Model types
export type ModelType = 'emotion-prediction' | 'sensory-response' | 'baseline-clustering';

// Model storage interface
export interface StoredModel {
  model: tf.LayersModel | tf.Sequential;
  metadata: ModelMetadata;
}

/**
 * Session-like interface for ML training, capturing the state
 * of a student in various sensory and emotional dimensions.
 */
export interface MLSession {
  /**
   * Unique session identifier.
   */
  id: string;
  /**
   * Identifier of the student associated with the session.
   */
  studentId: string;
  /**
   * Date of the session in ISO string format.
   */
  date: string;
  emotion: {
    /**
     * Average intensity values for each emotional state.
     * Ranges from 0 (none) to 10 (very intense).
     */
    happy?: number;
    sad?: number;
    angry?: number;
    anxious?: number;
    calm?: number;
    energetic?: number;
    frustrated?: number;
  };
  sensory: {
    /**
     * Sensory response types, categorized as seeking, avoiding, or neutral.
     */
    visual?: 'seeking' | 'avoiding' | 'neutral';
    auditory?: 'seeking' | 'avoiding' | 'neutral';
    tactile?: 'seeking' | 'avoiding' | 'neutral';
    vestibular?: 'seeking' | 'avoiding' | 'neutral';
    proprioceptive?: 'seeking' | 'avoiding' | 'neutral';
  };
  environment: {
    /**
     * Environmental conditions affecting the session.
     */
    lighting?: 'bright' | 'dim' | 'moderate';
    noise?: 'loud' | 'moderate' | 'quiet';
    temperature?: 'hot' | 'cold' | 'comfortable';
    crowded?: 'very' | 'moderate' | 'not';
    smells?: boolean;  // Presence of specific smells
    textures?: boolean;  // Presence of notable textures
  };
  /**
   * Activities performed during the session.
   */
  activities: string[];
  /**
   * Additional notes and observations.
   */
  notes: string;
}

// ML prediction results
export interface EmotionPrediction {
  date: Date;
  emotions: {
    happy: number;
    sad: number;
    angry: number;
    anxious: number;
    calm: number;
    energetic: number;
    frustrated: number;
  };
  confidence: number;
  confidenceInterval: {
    lower: number;
    upper: number;
  };
}

export interface SensoryPrediction {
  sensoryResponse: {
    visual: { seeking: number; avoiding: number; neutral: number };
    auditory: { seeking: number; avoiding: number; neutral: number };
    tactile: { seeking: number; avoiding: number; neutral: number };
    vestibular: { seeking: number; avoiding: number; neutral: number };
    proprioceptive: { seeking: number; avoiding: number; neutral: number };
  };
  environmentalTriggers: {
    trigger: string;
    probability: number;
  }[];
  confidence: number;
}

export interface BaselineCluster {
  clusterId: number;
  centroid: number[];
  description: string;
  anomalyScore: number;
  isNormal: boolean;
}

// Model storage class using IndexedDB
/**
 * Class for managing model storage using IndexedDB.
 * Handles model serialization and deserialization.
 */
class ModelStorage {
  private dbName = 'sensory-compass-ml';
  private storeName = 'models';
  private db: IDBDatabase | null = null;

/**
 * Initialize the IndexedDB database connection.
 * Sets up the object store if it does not already exist.
 */
async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };
      
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: 'name' });
        }
      };
    });
  }

/**
 * Save a model to IndexedDB with its metadata.
 * Handles model artifacts serialization with a custom handler.
 *
 * @param name - Unique name for the model type.
 * @param model - The model to be saved.
 * @param metadata - Metadata associated with the model.
 */
async saveModel(name: ModelType, model: tf.LayersModel, metadata: ModelMetadata): Promise<void> {
    if (!this.db) await this.init();
    
    // Save model to IndexedDB
    const modelData = await model.save(tf.io.withSaveHandler(async (artifacts) => {
      const transaction = this.db!.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      
      await new Promise<void>((resolve, reject) => {
        const request = store.put({
          name,
          artifacts,
          metadata,
          timestamp: new Date()
        });
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      });
      
      return { modelArtifactsInfo: { dateSaved: new Date(), modelTopologyType: 'JSON' } };
    }));
  }

/**
 * Load a model from IndexedDB using its name.
 * Deserializes model artifacts and reconstructs the TensorFlow.js model.
 *
 * @param name - Unique name for the model type to be loaded.
 * @returns The stored model along with its metadata, or null if not found.
 */
async loadModel(name: ModelType): Promise<StoredModel | null> {
    if (!this.db) await this.init();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.storeName], 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.get(name);
      
      request.onsuccess = async () => {
        const data = request.result;
        if (!data) {
          resolve(null);
          return;
        }
        
        // Load model from stored artifacts
        const model = await tf.loadLayersModel(tf.io.fromMemory(data.artifacts));
        resolve({
          model,
          metadata: data.metadata
        });
      };
      
      request.onerror = () => reject(request.error);
    });
  }

/**
 * Delete a model from IndexedDB by its name.
 *
 * @param name - The model type identifier to delete.
 */
async deleteModel(name: ModelType): Promise<void> {
    if (!this.db) await this.init();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.delete(name);
      
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

/**
 * List all models stored in IndexedDB.
 *
 * @returns An array of metadata for all stored models.
 */
async listModels(): Promise<ModelMetadata[]> {
    if (!this.db) await this.init();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.storeName], 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.getAll();
      
      request.onsuccess = () => {
        const models = request.result.map(item => item.metadata);
        resolve(models);
      };
      
      request.onerror = () => reject(request.error);
    });
  }
}

// Data preprocessing utilities
/**
 * @deprecated DataPreprocessor is deprecated. Use the preprocessing facade from @/lib/preprocessing/facade instead.
 * This class will be removed in a future version.
 * Utility class for preprocessing data related to ML models.
 */
export class DataPreprocessor {
  /**
   * @deprecated Use normalizeData from @/lib/preprocessing/facade instead.
   * Normalize an array of numbers to a 0-1 range based on defined min and max.
   *
   * @param data - The array of numbers to normalize.
   * @param min - Optional minimum value for normalization. Defaults to min of data.
   * @param max - Optional maximum value for normalization. Defaults to max of data.
   * @returns Normalized array of numbers.
   */
  static normalizeData(data: number[], min?: number, max?: number): number[] {
    // Import lazy-loaded to avoid circular dependency
    const { deprecate } = require('@/lib/deprecation');
    const { normalizeData: newNormalizeData } = require('@/lib/preprocessing/facade');
    
    deprecate(
      'DataPreprocessor.normalizeData',
      'normalizeData from @/lib/preprocessing/facade',
      'This provides the same functionality with enhanced pipeline integration options.'
    );
    
    return newNormalizeData(data, min, max);
  }

  /**
   * @deprecated Use extractTimeFeatures from @/lib/preprocessing/facade instead.
   * Extract cyclically encoded time features from a date.
   * Applies sine and cosine transformations for cyclic representation.
   *
   * @param date - The date from which to extract features.
   * @returns Array of encoded time features.
   */
  static extractTimeFeatures(date: Date): number[] {
    // Import lazy-loaded to avoid circular dependency
    const { deprecate } = require('@/lib/deprecation');
    const { extractTimeFeatures: newExtractTimeFeatures } = require('@/lib/preprocessing/facade');
    
    deprecate(
      'DataPreprocessor.extractTimeFeatures',
      'extractTimeFeatures from @/lib/preprocessing/facade',
      'This provides the same functionality with enhanced pipeline integration options.'
    );
    
    return newExtractTimeFeatures(date);
  }

  /**
   * @deprecated Use convertTrackingEntriesToSessions from @/lib/preprocessing/facade instead.
   * Converts tracking entries into ML-compatible session format.
   *
   * @param entries - Array of raw tracking entries from the database.
   * @returns Array of MLSession objects with normalized data.
   * @example
   * const sessions = DataPreprocessor.convertTrackingEntriesToSessions(trackingEntries);
   * // Returns sessions with averaged emotions, categorized sensory responses, and environmental data.
   */
  static convertTrackingEntriesToSessions(entries: TrackingEntry[]): MLSession[] {
    // Import lazy-loaded to avoid circular dependency
    const { deprecate } = require('@/lib/deprecation');
    const { convertTrackingEntriesToSessions: newConvertTrackingEntriesToSessions } = require('@/lib/preprocessing/facade');
    
    deprecate(
      'DataPreprocessor.convertTrackingEntriesToSessions',
      'convertTrackingEntriesToSessions from @/lib/preprocessing/facade',
      'This provides the same functionality with enhanced pipeline integration options.'
    );
    
    return newConvertTrackingEntriesToSessions(entries);
  }

  /**
   * @deprecated Use prepareEmotionData from @/lib/preprocessing/facade instead.
   * Prepare emotion data for LSTM training.
   * Sequences are created with recent sessions, preparing for predictions.
   *
   * @param sessions - Array of MLSession objects containing emotion data.
   * @param sequenceLength - Optional sequence length for training, default is 7.
   * @returns Object containing normalized inputs and outputs for training.
   */
  static prepareEmotionData(sessions: MLSession[], sequenceLength: number = 7): {
    inputs: tf.Tensor3D;
    outputs: tf.Tensor2D;
    normalizers: { min: number; max: number };
  } {
    // Import lazy-loaded to avoid circular dependency
    const { deprecate } = require('@/lib/deprecation');
    const { prepareEmotionData: newPrepareEmotionData } = require('@/lib/preprocessing/facade');
    
    deprecate(
      'DataPreprocessor.prepareEmotionData',
      'prepareEmotionData from @/lib/preprocessing/facade',
      'The new version supports pipeline configuration options for enhanced preprocessing.'
    );
    
    return newPrepareEmotionData(sessions, { sequenceLength });
  }

  /**
   * @deprecated Use prepareSensoryData from @/lib/preprocessing/facade instead.
   * Prepare sensory data for training.
   */
  static prepareSensoryData(sessions: MLSession[]): {
    inputs: tf.Tensor2D;
    outputs: tf.Tensor2D;
  } {
    // Import lazy-loaded to avoid circular dependency
    const { deprecate } = require('@/lib/deprecation');
    const { prepareSensoryData: newPrepareSensoryData } = require('@/lib/preprocessing/facade');
    
    deprecate(
      'DataPreprocessor.prepareSensoryData',
      'prepareSensoryData from @/lib/preprocessing/facade',
      'The new version supports pipeline configuration options for enhanced preprocessing.'
    );
    
    return newPrepareSensoryData(sessions);
  }
}

// Main ML Models class
export class MLModels {
  private storage: ModelStorage;
  private models: Map<ModelType, StoredModel>;
  private isInitialized: boolean = false;

  constructor() {
    this.storage = new ModelStorage();
    this.models = new Map();
  }

  async init(): Promise<void> {
    if (this.isInitialized) return;
    
    await this.storage.init();
    
    // Load existing models
    const modelTypes: ModelType[] = ['emotion-prediction', 'sensory-response', 'baseline-clustering'];
    for (const type of modelTypes) {
      const model = await this.storage.loadModel(type);
      if (model) {
        this.models.set(type, model);
      }
    }
    
    this.isInitialized = true;
  }

  // Create emotion prediction model
  createEmotionModel(): tf.Sequential {
    const model = tf.sequential({
      layers: [
        tf.layers.lstm({
          units: 64,
          returnSequences: true,
          inputShape: [7, 13] // 7 days, 13 features (7 emotions + 6 time features)
        }),
        tf.layers.dropout({ rate: 0.2 }),
        tf.layers.lstm({
          units: 32,
          returnSequences: false
        }),
        tf.layers.dropout({ rate: 0.2 }),
        tf.layers.dense({
          units: 16,
          activation: 'relu'
        }),
        tf.layers.dense({
          units: 7,
          activation: 'sigmoid' // Output emotions normalized to 0-1
        })
      ]
    });
    
    model.compile({
      optimizer: tf.train.adam(0.001),
      loss: 'meanSquaredError',
      metrics: ['mse', 'mae']
    });
    
    return model;
  }

  // Create sensory response model
  createSensoryModel(): tf.Sequential {
    const model = tf.sequential({
      layers: [
        tf.layers.dense({
          units: 32,
          activation: 'relu',
          inputShape: [12] // 6 environment + 6 time features
        }),
        tf.layers.dropout({ rate: 0.2 }),
        tf.layers.dense({
          units: 16,
          activation: 'relu'
        }),
        tf.layers.dropout({ rate: 0.2 }),
        tf.layers.dense({
          units: 15,
          activation: 'softmax' // 5 senses × 3 responses (seeking/avoiding/neutral)
        })
      ]
    });
    
    model.compile({
      optimizer: tf.train.adam(0.001),
      loss: 'categoricalCrossentropy',
      metrics: ['accuracy']
    });
    
    return model;
  }

  // Train emotion model
  async trainEmotionModel(
    trackingEntries: TrackingEntry[],
    epochs: number = 50,
    callbacks?: tf.CustomCallbackArgs
  ): Promise<void> {
    const sessions = DataPreprocessor.convertTrackingEntriesToSessions(trackingEntries);
    const model = this.createEmotionModel();
    const { inputs, outputs, normalizers } = DataPreprocessor.prepareEmotionData(sessions);
    
    const history = await model.fit(inputs, outputs, {
      epochs,
      batchSize: 32,
      validationSplit: 0.2,
      callbacks,
      shuffle: true
    });
    
    // Save model with metadata
    const metadata: ModelMetadata = {
      name: 'emotion-prediction',
      version: '1.0.0',
      createdAt: new Date(),
      lastTrainedAt: new Date(),
      accuracy: history.history.val_mse ? 
        history.history.val_mse[history.history.val_mse.length - 1] as number : 
        undefined,
      loss: history.history.loss[history.history.loss.length - 1] as number,
      inputShape: [7, 13],
      outputShape: [7],
      architecture: 'LSTM',
      epochs,
      dataPoints: trackingEntries.length
    };
    
    await this.storage.saveModel('emotion-prediction', model, metadata);
    this.models.set('emotion-prediction', { model, metadata });
    
    // Clean up tensors
    inputs.dispose();
    outputs.dispose();
  }

  // Train sensory model
  async trainSensoryModel(
    trackingEntries: TrackingEntry[],
    epochs: number = 50,
    callbacks?: tf.CustomCallbackArgs
  ): Promise<void> {
    const sessions = DataPreprocessor.convertTrackingEntriesToSessions(trackingEntries);
    const model = this.createSensoryModel();
    const { inputs, outputs } = DataPreprocessor.prepareSensoryData(sessions);
    
    const history = await model.fit(inputs, outputs, {
      epochs,
      batchSize: 32,
      validationSplit: 0.2,
      callbacks,
      shuffle: true
    });
    
    // Save model with metadata
    const metadata: ModelMetadata = {
      name: 'sensory-response',
      version: '1.0.0',
      createdAt: new Date(),
      lastTrainedAt: new Date(),
      accuracy: history.history.acc ? 
        history.history.acc[history.history.acc.length - 1] as number : 
        undefined,
      loss: history.history.loss[history.history.loss.length - 1] as number,
      inputShape: [12],
      outputShape: [15],
      architecture: 'Dense',
      epochs,
      dataPoints: trackingEntries.length
    };
    
    await this.storage.saveModel('sensory-response', model, metadata);
    this.models.set('sensory-response', { model, metadata });
    
    // Clean up tensors
    inputs.dispose();
    outputs.dispose();
  }

  // Predict emotions for next 7 days
  async predictEmotions(
    recentEntries: TrackingEntry[],
    daysToPredict: number = 7
  ): Promise<EmotionPrediction[]> {
    const recentSessions = DataPreprocessor.convertTrackingEntriesToSessions(recentEntries);
    const model = this.models.get('emotion-prediction');
    if (!model) {
      throw new Error('Emotion prediction model not found');
    }
    
    const predictions: EmotionPrediction[] = [];
    const currentSessions = [...recentSessions];
    
    for (let day = 0; day < daysToPredict; day++) {
      const { inputs, normalizers } = DataPreprocessor.prepareEmotionData(
        currentSessions.slice(-7),
        7
      );
      
      if (inputs.shape[0] === 0) {
        inputs.dispose();
        break;
      }
      
      const prediction = model.model.predict(inputs.slice([0, 0, 0], [1, -1, -1])) as tf.Tensor;
      const values = await prediction.array() as number[][];
      
      const predictedDate = new Date(currentSessions[currentSessions.length - 1].date);
      predictedDate.setDate(predictedDate.getDate() + 1);
      
      // Denormalize predictions
      const emotionValues = values[0].map(v => v * 10); // Convert back to 0-10 scale
      
      // Simple dispersion-based confidence: inverse of variance across outputs
      const variance = (() => {
        const mean = emotionValues.reduce((s, v) => s + v, 0) / emotionValues.length;
        const varSum = emotionValues.reduce((s, v) => s + Math.pow(v - mean, 2), 0) / emotionValues.length;
        return varSum;
      })();
      const confidence = Math.max(0.0, Math.min(1.0, 1 / (1 + variance)));

      predictions.push({
        date: predictedDate,
        emotions: {
          happy: emotionValues[0],
          sad: emotionValues[1],
          angry: emotionValues[2],
          anxious: emotionValues[3],
          calm: emotionValues[4],
          energetic: emotionValues[5],
          frustrated: emotionValues[6]
        },
        confidence,
        confidenceInterval: {
          lower: Math.max(0, confidence - 0.1),
          upper: Math.min(1, confidence + 0.1)
        }
      });
      
      // Add prediction as a new session for next iteration
      currentSessions.push({
        id: `predicted-${day}`,
        studentId: currentSessions[0].studentId,
        date: predictedDate.toISOString(),
        emotion: {
          happy: emotionValues[0],
          sad: emotionValues[1],
          angry: emotionValues[2],
          anxious: emotionValues[3],
          calm: emotionValues[4],
          energetic: emotionValues[5],
          frustrated: emotionValues[6]
        },
        sensory: currentSessions[currentSessions.length - 1].sensory,
        environment: currentSessions[currentSessions.length - 1].environment,
        activities: [],
        notes: ''
      });
      
      // Clean up
      inputs.dispose();
      prediction.dispose();
    }
    
    return predictions;
  }

  // Predict sensory responses
  async predictSensoryResponse(
    environment: MLSession['environment'],
    date: Date
  ): Promise<SensoryPrediction> {
    const model = this.models.get('sensory-response');
    if (!model) {
      throw new Error('Sensory response model not found');
    }
    
    // Prepare input
    const environmentFeatures = [
      environment.lighting === 'bright' ? 1 : environment.lighting === 'dim' ? 0.5 : 0,
      environment.noise === 'loud' ? 1 : environment.noise === 'moderate' ? 0.5 : 0,
      environment.temperature === 'hot' ? 1 : environment.temperature === 'cold' ? 0 : 0.5,
      environment.crowded === 'very' ? 1 : environment.crowded === 'moderate' ? 0.5 : 0,
      environment.smells ? 1 : 0,
      environment.textures ? 1 : 0
    ];
    
    const timeFeatures = DataPreprocessor.extractTimeFeatures(date);
    const input = tf.tensor2d([[...environmentFeatures, ...timeFeatures]]);
    
    const prediction = model.model.predict(input) as tf.Tensor;
    const values = await prediction.array() as number[][];
    
    // Parse predictions
    const senses = ['visual', 'auditory', 'tactile', 'vestibular', 'proprioceptive'];
    const sensoryResponse: SensoryPrediction['sensoryResponse'] = {
      visual: { seeking: 0, avoiding: 0, neutral: 0 },
      auditory: { seeking: 0, avoiding: 0, neutral: 0 },
      tactile: { seeking: 0, avoiding: 0, neutral: 0 },
      vestibular: { seeking: 0, avoiding: 0, neutral: 0 },
      proprioceptive: { seeking: 0, avoiding: 0, neutral: 0 }
    };
    
    senses.forEach((sense, i) => {
      const baseIdx = i * 3;
      sensoryResponse[sense as keyof typeof sensoryResponse] = {
        seeking: values[0][baseIdx],
        avoiding: values[0][baseIdx + 1],
        neutral: values[0][baseIdx + 2]
      };
    });
    
    // Identify environmental triggers
    const triggers = [];
    const cfg = analyticsConfig.getConfig();
    const triggerCutoff = cfg.patternAnalysis.concernFrequencyThreshold; // reuse configured frequency threshold as cutoff
    if (environment.noise === 'loud' && sensoryResponse.auditory.avoiding > triggerCutoff) {
      triggers.push({ trigger: 'Loud noise', probability: sensoryResponse.auditory.avoiding });
    }
    if (environment.lighting === 'bright' && sensoryResponse.visual.avoiding > triggerCutoff) {
      triggers.push({ trigger: 'Bright lights', probability: sensoryResponse.visual.avoiding });
    }
    if (environment.crowded === 'very' && sensoryResponse.tactile.avoiding > triggerCutoff) {
      triggers.push({ trigger: 'Crowded spaces', probability: sensoryResponse.tactile.avoiding });
    }
    
    // Clean up
    input.dispose();
    prediction.dispose();
    
    // Confidence heuristic: sharper softmax => higher confidence
    const flat = values[0];
    const maxP = Math.max(...flat);
    const entropy = -flat.reduce((s, p) => s + (p > 0 ? p * Math.log(p) : 0), 0);
    const normEntropy = entropy / Math.log(flat.length || 1);
    const confidence = Math.max(0, Math.min(1, (maxP * 0.6) + (1 - normEntropy) * 0.4));

    return {
      sensoryResponse,
      environmentalTriggers: triggers.sort((a, b) => b.probability - a.probability),
      confidence
    };
  }

  // Get model status
  async getModelStatus(): Promise<Map<ModelType, ModelMetadata | null>> {
    const status = new Map<ModelType, ModelMetadata | null>();
    const types: ModelType[] = ['emotion-prediction', 'sensory-response', 'baseline-clustering'];
    
    for (const type of types) {
      const model = this.models.get(type);
      status.set(type, model?.metadata || null);
    }
    
    return status;
  }

  // Delete a model
  async deleteModel(type: ModelType): Promise<void> {
    await this.storage.deleteModel(type);
    this.models.delete(type);
  }

  // Export model for external use
  async exportModel(type: ModelType, path: string): Promise<void> {
    const model = this.models.get(type);
    if (!model) {
      throw new Error(`Model ${type} not found`);
    }
    
    await model.model.save(`file://${path}`);
  }

  // Baseline clustering using K-means
  async performBaselineClustering(
    trackingEntries: TrackingEntry[],
    numClusters: number = 3
  ): Promise<BaselineCluster[]> {
    if (trackingEntries.length < numClusters) {
      throw new Error('Not enough data points for clustering');
    }

    // Extract features for clustering
    const features = trackingEntries.map(entry => {
      const avgEmotionIntensity = entry.emotions.length > 0
        ? entry.emotions.reduce((sum, e) => sum + e.intensity, 0) / entry.emotions.length
        : 0;
      
      const cfg = analyticsConfig.getConfig();
      const positiveSet = new Set((cfg.taxonomy?.positiveEmotions || []).map(e => e.toLowerCase()));
      const positiveEmotionRatio = entry.emotions.length > 0
        ? entry.emotions.filter(e => positiveSet.has(e.emotion.toLowerCase())).length / entry.emotions.length
        : 0;
      
      const sensorySeekingRatio = entry.sensoryInputs.length > 0
        ? entry.sensoryInputs.filter(s => s.response.toLowerCase().includes('seeking')).length / entry.sensoryInputs.length
        : 0;
      
      const sensoryAvoidingRatio = entry.sensoryInputs.length > 0
        ? entry.sensoryInputs.filter(s => s.response.toLowerCase().includes('avoiding')).length / entry.sensoryInputs.length
        : 0;
      
      return [
        avgEmotionIntensity / 5, // Normalize to 0-1
        positiveEmotionRatio,
        sensorySeekingRatio,
        sensoryAvoidingRatio
      ];
    });

    // Normalize features
    const normalizedFeatures = this.normalizeFeatures(features);
    
    // Perform K-means clustering
    const { centroids, assignments } = await this.kMeansClustering(normalizedFeatures, numClusters);
    
    // Calculate anomaly scores
    const clusters: BaselineCluster[] = [];
    for (let i = 0; i < numClusters; i++) {
      const clusterPoints = normalizedFeatures.filter((_, idx) => assignments[idx] === i);
      const avgDistance = clusterPoints.length > 0
        ? clusterPoints.reduce((sum, point) => sum + this.euclideanDistance(point, centroids[i]), 0) / clusterPoints.length
        : 0;
      
      // Determine cluster characteristics
      const description = this.describeCluster(centroids[i]);
      
      clusters.push({
        clusterId: i,
        centroid: centroids[i],
        description,
        anomalyScore: avgDistance,
        isNormal: avgDistance < 0.5 // Threshold for normal behavior
      });
    }
    
    return clusters;
  }

  // K-means clustering implementation
  private async kMeansClustering(
    data: number[][],
    k: number,
    maxIterations: number = 100
  ): Promise<{ centroids: number[][]; assignments: number[] }> {
    const n = data.length;
    const dimensions = data[0].length;
    
    // Initialize centroids randomly
    const centroids = this.initializeCentroids(data, k);
    const assignments = new Array(n).fill(0);
    let previousAssignments = new Array(n).fill(-1);
    
    for (let iter = 0; iter < maxIterations; iter++) {
      // Assignment step
      for (let i = 0; i < n; i++) {
        let minDistance = Infinity;
        let closestCentroid = 0;
        
        for (let j = 0; j < k; j++) {
          const distance = this.euclideanDistance(data[i], centroids[j]);
          if (distance < minDistance) {
            minDistance = distance;
            closestCentroid = j;
          }
        }
        
        assignments[i] = closestCentroid;
      }
      
      // Check for convergence
      if (assignments.every((val, idx) => val === previousAssignments[idx])) {
        break;
      }
      
      previousAssignments = [...assignments];
      
      // Update step
      for (let j = 0; j < k; j++) {
        const clusterPoints = data.filter((_, idx) => assignments[idx] === j);
        if (clusterPoints.length > 0) {
          centroids[j] = new Array(dimensions).fill(0).map((_, dim) =>
            clusterPoints.reduce((sum, point) => sum + point[dim], 0) / clusterPoints.length
          );
        }
      }
    }
    
    return { centroids, assignments };
  }

  // Initialize centroids using K-means++
  private initializeCentroids(data: number[][], k: number): number[][] {
    const centroids: number[][] = [];
    const n = data.length;
    
    // Choose first centroid randomly
    centroids.push([...data[Math.floor(Math.random() * n)]]);
    
    // Choose remaining centroids
    for (let i = 1; i < k; i++) {
      const distances = data.map(point => {
        const minDist = centroids.reduce((min, centroid) =>
          Math.min(min, this.euclideanDistance(point, centroid)), Infinity);
        return minDist * minDist;
      });
      
      // Choose next centroid with probability proportional to squared distance
      const totalDist = distances.reduce((sum, d) => sum + d, 0);
      let randomValue = Math.random() * totalDist;
      let selectedIndex = 0;
      
      for (let j = 0; j < n; j++) {
        randomValue -= distances[j];
        if (randomValue <= 0) {
          selectedIndex = j;
          break;
        }
      }
      
      centroids.push([...data[selectedIndex]]);
    }
    
    return centroids;
  }

  // Calculate Euclidean distance
  private euclideanDistance(point1: number[], point2: number[]): number {
    return Math.sqrt(
      point1.reduce((sum, val, i) => sum + Math.pow(val - point2[i], 2), 0)
    );
  }

  // Normalize features to 0-1 range
  private normalizeFeatures(features: number[][]): number[][] {
    const dimensions = features[0].length;
    const mins = new Array(dimensions).fill(Infinity);
    const maxs = new Array(dimensions).fill(-Infinity);
    
    // Find min and max for each dimension
    features.forEach(feature => {
      feature.forEach((val, i) => {
        mins[i] = Math.min(mins[i], val);
        maxs[i] = Math.max(maxs[i], val);
      });
    });
    
    // Normalize
    return features.map(feature =>
      feature.map((val, i) => {
        const range = maxs[i] - mins[i];
        return range === 0 ? 0 : (val - mins[i]) / range;
      })
    );
  }

  // Describe cluster characteristics
  private describeCluster(centroid: number[]): string {
    const [emotionIntensity, positiveRatio, seekingRatio, avoidingRatio] = centroid;
    const cfg = analyticsConfig.getConfig();

    // Derive normalized intensity bounds from configured thresholds (assumes 0-5 app scale in features)
    const highIntensityNorm = Math.min(1, cfg.patternAnalysis.highIntensityThreshold / 5);
    const lowIntensityNorm = Math.max(0, (cfg.patternAnalysis.highIntensityThreshold - 2) / 5);

    // Valence thresholds from insights config
    const positiveValence = cfg.insights.POSITIVE_EMOTION_TREND_THRESHOLD;
    const negativeValence = cfg.insights.NEGATIVE_EMOTION_TREND_THRESHOLD;

    // Sensory dominance threshold reuse concern frequency
    const sensoryDominance = cfg.patternAnalysis.concernFrequencyThreshold;

    let description = '';

    // Emotion characteristics
    if (emotionIntensity > highIntensityNorm) {
      description += 'High emotional intensity';
    } else if (emotionIntensity < lowIntensityNorm) {
      description += 'Low emotional intensity';
    } else {
      description += 'Moderate emotional intensity';
    }

    // Emotional valence
    if (positiveRatio > positiveValence) {
      description += ', predominantly positive emotions';
    } else if (positiveRatio < negativeValence) {
      description += ', predominantly challenging emotions';
    } else {
      description += ', mixed emotional states';
    }

    // Sensory patterns
    if (seekingRatio > sensoryDominance) {
      description += ', high sensory seeking';
    } else if (avoidingRatio > sensoryDominance) {
      description += ', high sensory avoiding';
    } else {
      description += ', balanced sensory responses';
    }

    return description;
  }
}

// Singleton instance
export const mlModels = new MLModels();