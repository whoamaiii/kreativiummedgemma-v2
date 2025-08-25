import { useState, useEffect, useCallback } from 'react';
import { ENABLE_BIGSTIAN_AI } from '@/lib/env';

const AI_STORAGE_KEY = 'sensoryTracker_enableAISections';

/**
 * Centralized hook for managing AI feature state across the application.
 * Provides consistent state management and localStorage persistence.
 */
export function useAIState() {
  const [aiEnabled, setAiEnabled] = useState<boolean>(() => {
    if (!ENABLE_BIGSTIAN_AI) return false;
    
    try {
      const stored = localStorage.getItem(AI_STORAGE_KEY);
      if (stored === '1') return true;
      if (stored === '0') return false;
    } catch {
      // localStorage unavailable
    }
    
    return ENABLE_BIGSTIAN_AI;
  });

  // Persist changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(AI_STORAGE_KEY, aiEnabled ? '1' : '0');
    } catch {
      // localStorage unavailable - fail silently
    }
  }, [aiEnabled]);

  // Ensure AI is disabled if feature flag is off
  useEffect(() => {
    if (!ENABLE_BIGSTIAN_AI && aiEnabled) {
      setAiEnabled(false);
    }
  }, [aiEnabled]);

  const toggleAI = useCallback(() => {
    if (ENABLE_BIGSTIAN_AI) {
      setAiEnabled(prev => !prev);
    }
  }, []);

  const setAI = useCallback((enabled: boolean) => {
    if (ENABLE_BIGSTIAN_AI || !enabled) {
      setAiEnabled(enabled);
    }
  }, []);

  return {
    aiEnabled,
    setAiEnabled: setAI,
    toggleAI,
    featureFlagEnabled: ENABLE_BIGSTIAN_AI,
  };
}
