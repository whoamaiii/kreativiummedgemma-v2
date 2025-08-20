import { useEffect, useRef, useState } from 'react';
import { dataStorage } from '@/lib/dataStorage';
import { seedMinimalDemoData } from '@/lib/mockData';
import { logger } from '@/lib/logger';
import { toast } from 'sonner';

interface UseMockDataSeedingOptions {
  studentId?: string;
  onDataLoaded?: () => void;
  enabled?: boolean;
}

/**
 * @hook useMockDataSeeding
 * @description Handles automatic seeding of mock data for demo/testing purposes
 * 
 * Features:
 * - Auto-detects mock routes (routes starting with 'mock_')
 * - Prevents duplicate seeding
 * - Creates minimal demo data when needed
 * - Provides loading state and error handling
 * 
 * @param options - Configuration options for mock data seeding
 * @returns Object with seeding state and manual trigger function
 */
export function useMockDataSeeding({
  studentId,
  onDataLoaded,
  enabled = true,
}: UseMockDataSeedingOptions) {
  const seedingRef = useRef(false);
  const [isSeeding, setIsSeeding] = useState(false);
  const [seedingError, setSeedingError] = useState<string | null>(null);

  /**
   * Manually trigger mock data seeding
   */
  const seedMockData = async () => {
    if (!studentId || seedingRef.current) {
      return;
    }

    seedingRef.current = true;
    setIsSeeding(true);
    setSeedingError(null);

    try {
      logger.info('Manually seeding mock data', { studentId });
      
      await seedMinimalDemoData(studentId);
      
      // Dispatch custom event to notify other components
      window.dispatchEvent(new CustomEvent('mockDataLoaded'));
      
      toast.success('Demo data created successfully', {
        description: 'Sample data has been generated for demonstration purposes',
      });
      
      if (onDataLoaded) {
        onDataLoaded();
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to seed mock data';
      logger.error('Failed to seed mock data', { error, studentId });
      setSeedingError(errorMessage);
      toast.error('Failed to create demo data', {
        description: 'Please try loading mock data manually',
      });
    } finally {
      setIsSeeding(false);
      seedingRef.current = false;
    }
  };

  /**
   * Auto-seed effect for mock student routes
   */
  useEffect(() => {
    if (!enabled || !studentId?.startsWith('mock_')) {
      return;
    }

    const autoSeedIfNeeded = async () => {
      // Prevent duplicate seeding
      if (seedingRef.current) {
        return;
      }

      // Check if seeding is needed
      const existingStudents = dataStorage.getStudents();
      const hasAnyStudents = existingStudents.length > 0;
      const mockStudentExists = !!dataStorage.getStudentById(studentId);
      const existingEntriesForMock = dataStorage.getEntriesForStudent(studentId) || [];
      const needsSeeding = !hasAnyStudents || (mockStudentExists && existingEntriesForMock.length < 8);
      
      if (!needsSeeding) {
        logger.debug('Mock data seeding not needed', { 
          studentId, 
          hasAnyStudents, 
          mockStudentExists, 
          entriesCount: existingEntriesForMock.length 
        });
        return;
      }

      // Set the guard to prevent re-runs
      seedingRef.current = true;
      setIsSeeding(true);
      setSeedingError(null);

      try {
        logger.info('Auto-seeding minimal demo data for mock route', { studentId });
        
        await seedMinimalDemoData(studentId);
        
        // Dispatch custom event to notify other components
        window.dispatchEvent(new CustomEvent('mockDataLoaded'));
        
        // Show non-intrusive success message
        toast.success('Demo data created successfully', {
          description: 'Sample data has been generated for demonstration purposes',
        });
        
        if (onDataLoaded) {
          onDataLoaded();
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to auto-seed mock data';
        logger.error('Failed to auto-seed mock data', { error, studentId });
        setSeedingError(errorMessage);
        toast.error('Failed to create demo data', {
          description: 'Please try loading mock data manually',
        });
      } finally {
        setIsSeeding(false);
        // Don't reset the ref here to prevent re-runs on the same mount
      }
    };

    autoSeedIfNeeded();
  }, [studentId, onDataLoaded, enabled]);

  /**
   * Reset the seeding ref on unmount
   */
  useEffect(() => {
    return () => {
      seedingRef.current = false;
    };
  }, []);

  return {
    isSeeding,
    seedingError,
    seedMockData,
  };
}
