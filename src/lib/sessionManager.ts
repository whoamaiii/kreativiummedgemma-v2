import { TrackingEntry, EmotionEntry, SensoryEntry, EnvironmentalEntry } from '@/types/student';
import { dataStorage } from '@/lib/dataStorage';
import { analyticsManager } from '@/lib/analyticsManager';
import { logger } from '@/lib/logger';

/**
 * Session metadata for tracking and recovery
 */
export interface SessionMetadata {
  id: string;
  studentId: string;
  startTime: Date;
  endTime?: Date;
  duration: number;
  dataPoints: number;
  status: 'active' | 'paused' | 'completed' | 'abandoned';
  autoSaved: boolean;
  quality: SessionQuality;
}

/**
 * Session quality assessment
 */
export interface SessionQuality {
  score: number; // 0-100
  completeness: number; // 0-100
  consistency: number; // 0-100
  richness: number; // 0-100
  issues: string[];
  recommendations: string[];
}

/**
 * Session recovery data
 */
export interface SessionRecoveryData {
  sessionId: string;
  studentId: string;
  timestamp: Date;
  data: {
    emotions: Omit<EmotionEntry, 'id' | 'timestamp'>[];
    sensoryInputs: Omit<SensoryEntry, 'id' | 'timestamp'>[];
    environmentalData: Omit<EnvironmentalEntry, 'id' | 'timestamp'> | null;
    notes: string;
  };
  metadata: SessionMetadata;
}

/**
 * Session validation rules
 */
export interface SessionValidationRules {
  minEmotions?: number;
  minSensoryInputs?: number;
  requireEnvironmental?: boolean;
  minDuration?: number; // milliseconds
  maxDuration?: number; // milliseconds
  requireNotes?: boolean;
  customValidators?: Array<(session: SessionRecoveryData) => { isValid: boolean; error?: string }>;
}

/**
 * Session statistics
 */
export interface SessionStatistics {
  totalSessions: number;
  completedSessions: number;
  abandonedSessions: number;
  averageDuration: number;
  averageDataPoints: number;
  averageQuality: number;
  mostCommonIssues: Array<{ issue: string; count: number }>;
}

/**
 * SessionManager class
 * Handles session lifecycle, persistence, validation, and recovery
 */
export class SessionManager {
  private static instance: SessionManager;
  private activeSessions: Map<string, SessionRecoveryData> = new Map();
  private sessionHistory: SessionMetadata[] = [];
  private validationRules: SessionValidationRules = {
    minEmotions: 0,
    minSensoryInputs: 0,
    requireEnvironmental: false,
    minDuration: 60000, // 1 minute
    maxDuration: 2 * 60 * 60 * 1000, // 2 hours
    requireNotes: false,
  };

  private constructor() {
    this.loadSessionHistory();
    this.checkForAbandonedSessions();
  }

  /**
   * Get singleton instance
   */
  static getInstance(): SessionManager {
    if (!SessionManager.instance) {
      SessionManager.instance = new SessionManager();
    }
    return SessionManager.instance;
  }

  /**
   * Create a new session
   */
  createSession(studentId: string): string {
    const sessionId = crypto.randomUUID();
    const now = new Date();

    const sessionData: SessionRecoveryData = {
      sessionId,
      studentId,
      timestamp: now,
      data: {
        emotions: [],
        sensoryInputs: [],
        environmentalData: null,
        notes: '',
      },
      metadata: {
        id: sessionId,
        studentId,
        startTime: now,
        duration: 0,
        dataPoints: 0,
        status: 'active',
        autoSaved: false,
        quality: {
          score: 0,
          completeness: 0,
          consistency: 0,
          richness: 0,
          issues: [],
          recommendations: ['Start by recording emotions', 'Add sensory observations'],
        },
      },
    };

    this.activeSessions.set(sessionId, sessionData);
    this.persistSession(sessionData);

    logger.info('[SessionManager] Created new session', { sessionId, studentId });
    return sessionId;
  }

  /**
   * Update session data
   */
  updateSession(
    sessionId: string,
    updates: Partial<{
      emotions: Omit<EmotionEntry, 'id' | 'timestamp'>[];
      sensoryInputs: Omit<SensoryEntry, 'id' | 'timestamp'>[];
      environmentalData: Omit<EnvironmentalEntry, 'id' | 'timestamp'> | null;
      notes: string;
    }>
  ): boolean {
    const session = this.activeSessions.get(sessionId);
    if (!session) {
      logger.warn('[SessionManager] Session not found', { sessionId });
      return false;
    }

    // Update data
    if (updates.emotions) session.data.emotions = updates.emotions;
    if (updates.sensoryInputs) session.data.sensoryInputs = updates.sensoryInputs;
    if (updates.environmentalData !== undefined) session.data.environmentalData = updates.environmentalData;
    if (updates.notes !== undefined) session.data.notes = updates.notes;

    // Update metadata
    session.metadata.duration = Date.now() - session.metadata.startTime.getTime();
    session.metadata.dataPoints = 
      session.data.emotions.length + 
      session.data.sensoryInputs.length + 
      (session.data.environmentalData ? 1 : 0);

    // Assess quality
    session.metadata.quality = this.assessQuality(session);

    // Persist changes
    this.persistSession(session);

    logger.debug('[SessionManager] Updated session', { sessionId, updates });
    return true;
  }

  /**
   * Complete a session
   */
  async completeSession(sessionId: string): Promise<TrackingEntry | null> {
    const session = this.activeSessions.get(sessionId);
    if (!session) {
      logger.warn('[SessionManager] Session not found', { sessionId });
      return null;
    }

    // Validate session
    const validation = this.validateSession(session);
    if (!validation.isValid) {
      logger.warn('[SessionManager] Session validation failed', { 
        sessionId, 
        errors: validation.errors 
      });
      return null;
    }

    // Create tracking entry
    const timestamp = new Date();
    const trackingEntry: TrackingEntry = {
      id: crypto.randomUUID(),
      studentId: session.studentId,
      timestamp,
      emotions: session.data.emotions.map(e => ({
        ...e,
        id: crypto.randomUUID(),
        timestamp,
      })),
      sensoryInputs: session.data.sensoryInputs.map(s => ({
        ...s,
        id: crypto.randomUUID(),
        timestamp,
      })),
      environmentalData: session.data.environmentalData ? {
        ...session.data.environmentalData,
        id: crypto.randomUUID(),
        timestamp,
      } : undefined,
      notes: session.data.notes || undefined,
      generalNotes: session.data.notes || undefined,
      version: 1,
    };

    // Save to storage
    dataStorage.saveTrackingEntry(trackingEntry);

    // Update session metadata
    session.metadata.endTime = timestamp;
    session.metadata.status = 'completed';
    this.sessionHistory.push(session.metadata);
    this.saveSessionHistory();

    // Remove from active sessions
    this.activeSessions.delete(sessionId);
    this.clearPersistedSession(sessionId);

    // Trigger analytics
    const student = dataStorage.getStudentById(session.studentId);
    if (student) {
      await analyticsManager.triggerAnalyticsForStudent(student);
    }

    logger.info('[SessionManager] Completed session', { 
      sessionId, 
      entryId: trackingEntry.id 
    });

    return trackingEntry;
  }

  /**
   * Abandon a session
   */
  abandonSession(sessionId: string): void {
    const session = this.activeSessions.get(sessionId);
    if (!session) return;

    session.metadata.endTime = new Date();
    session.metadata.status = 'abandoned';
    this.sessionHistory.push(session.metadata);
    this.saveSessionHistory();

    this.activeSessions.delete(sessionId);
    this.clearPersistedSession(sessionId);

    logger.info('[SessionManager] Abandoned session', { sessionId });
  }

  /**
   * Pause a session
   */
  pauseSession(sessionId: string): boolean {
    const session = this.activeSessions.get(sessionId);
    if (!session || session.metadata.status !== 'active') return false;

    session.metadata.status = 'paused';
    this.persistSession(session);

    logger.info('[SessionManager] Paused session', { sessionId });
    return true;
  }

  /**
   * Resume a session
   */
  resumeSession(sessionId: string): boolean {
    const session = this.activeSessions.get(sessionId);
    if (!session || session.metadata.status !== 'paused') return false;

    session.metadata.status = 'active';
    this.persistSession(session);

    logger.info('[SessionManager] Resumed session', { sessionId });
    return true;
  }

  /**
   * Recover sessions from localStorage
   */
  recoverSessions(): SessionRecoveryData[] {
    const recovered: SessionRecoveryData[] = [];
    const keys = Object.keys(localStorage).filter(k => 
      k.startsWith('sensoryTracker_session_')
    );

    for (const key of keys) {
      try {
        const data = localStorage.getItem(key);
        if (data) {
          const session = JSON.parse(data) as SessionRecoveryData;
          // Convert date strings back to Date objects
          session.timestamp = new Date(session.timestamp);
          session.metadata.startTime = new Date(session.metadata.startTime);
          if (session.metadata.endTime) {
            session.metadata.endTime = new Date(session.metadata.endTime);
          }
          
          // Check if session is not too old (24 hours)
          const age = Date.now() - session.metadata.startTime.getTime();
          if (age < 24 * 60 * 60 * 1000) {
            this.activeSessions.set(session.sessionId, session);
            recovered.push(session);
          } else {
            // Mark as abandoned and clean up
            session.metadata.status = 'abandoned';
            this.sessionHistory.push(session.metadata);
            localStorage.removeItem(key);
          }
        }
      } catch (error) {
        logger.error('[SessionManager] Failed to recover session', { key, error });
        localStorage.removeItem(key);
      }
    }

    if (recovered.length > 0) {
      this.saveSessionHistory();
      logger.info('[SessionManager] Recovered sessions', { count: recovered.length });
    }

    return recovered;
  }

  /**
   * Get active sessions for a student
   */
  getActiveSessionsForStudent(studentId: string): SessionRecoveryData[] {
    return Array.from(this.activeSessions.values()).filter(
      session => session.studentId === studentId && session.metadata.status === 'active'
    );
  }

  /**
   * Get session statistics
   */
  getStatistics(studentId?: string): SessionStatistics {
    const relevantHistory = studentId 
      ? this.sessionHistory.filter(s => s.studentId === studentId)
      : this.sessionHistory;

    const completed = relevantHistory.filter(s => s.status === 'completed');
    const abandoned = relevantHistory.filter(s => s.status === 'abandoned');

    // Count issues
    const issueCount = new Map<string, number>();
    relevantHistory.forEach(session => {
      session.quality.issues.forEach(issue => {
        issueCount.set(issue, (issueCount.get(issue) || 0) + 1);
      });
    });

    const mostCommonIssues = Array.from(issueCount.entries())
      .map(([issue, count]) => ({ issue, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    return {
      totalSessions: relevantHistory.length,
      completedSessions: completed.length,
      abandonedSessions: abandoned.length,
      averageDuration: completed.length > 0
        ? completed.reduce((sum, s) => sum + s.duration, 0) / completed.length
        : 0,
      averageDataPoints: completed.length > 0
        ? completed.reduce((sum, s) => sum + s.dataPoints, 0) / completed.length
        : 0,
      averageQuality: completed.length > 0
        ? completed.reduce((sum, s) => sum + s.quality.score, 0) / completed.length
        : 0,
      mostCommonIssues,
    };
  }

  /**
   * Validate a session
   */
  private validateSession(session: SessionRecoveryData): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    const rules = this.validationRules;

    // Check minimum data requirements
    if (rules.minEmotions && session.data.emotions.length < rules.minEmotions) {
      errors.push(`At least ${rules.minEmotions} emotion(s) required`);
    }

    if (rules.minSensoryInputs && session.data.sensoryInputs.length < rules.minSensoryInputs) {
      errors.push(`At least ${rules.minSensoryInputs} sensory input(s) required`);
    }

    if (rules.requireEnvironmental && !session.data.environmentalData) {
      errors.push('Environmental data is required');
    }

    if (rules.requireNotes && !session.data.notes.trim()) {
      errors.push('Notes are required');
    }

    // Check duration
    const duration = Date.now() - session.metadata.startTime.getTime();
    if (rules.minDuration && duration < rules.minDuration) {
      errors.push(`Session too short (minimum ${rules.minDuration / 1000} seconds)`);
    }

    if (rules.maxDuration && duration > rules.maxDuration) {
      errors.push(`Session too long (maximum ${rules.maxDuration / 1000} seconds)`);
    }

    // Custom validators
    if (rules.customValidators) {
      for (const validator of rules.customValidators) {
        const result = validator(session);
        if (!result.isValid && result.error) {
          errors.push(result.error);
        }
      }
    }

    // Require at least some data
    const totalData = session.data.emotions.length + session.data.sensoryInputs.length;
    if (totalData === 0) {
      errors.push('Session must contain at least one data point');
    }

    return { isValid: errors.length === 0, errors };
  }

  /**
   * Assess session quality
   */
  private assessQuality(session: SessionRecoveryData): SessionQuality {
    const issues: string[] = [];
    const recommendations: string[] = [];

    // Calculate completeness
    let completeness = 0;
    if (session.data.emotions.length > 0) completeness += 30;
    if (session.data.sensoryInputs.length > 0) completeness += 30;
    if (session.data.environmentalData) completeness += 20;
    if (session.data.notes.length > 20) completeness += 20;

    // Calculate consistency
    const consistency = this.calculateConsistency(session);

    // Calculate richness
    const richness = this.calculateRichness(session);

    // Overall score
    const score = (completeness * 0.4 + consistency * 0.3 + richness * 0.3);

    // Generate issues and recommendations
    if (session.data.emotions.length === 0) {
      issues.push('No emotions recorded');
      recommendations.push('Record at least one emotion');
    }

    if (session.data.sensoryInputs.length === 0) {
      issues.push('No sensory inputs recorded');
      recommendations.push('Add sensory observations');
    }

    if (!session.data.environmentalData) {
      issues.push('No environmental data');
      recommendations.push('Record environmental conditions');
    }

    if (session.data.notes.length < 10) {
      issues.push('Minimal or no notes');
      recommendations.push('Add descriptive notes about the session');
    }

    const duration = Date.now() - session.metadata.startTime.getTime();
    if (duration < 2 * 60 * 1000) { // Less than 2 minutes
      issues.push('Very short session');
      recommendations.push('Spend more time observing and recording');
    }

    return {
      score,
      completeness,
      consistency,
      richness,
      issues,
      recommendations,
    };
  }

  /**
   * Calculate consistency score
   */
  private calculateConsistency(session: SessionRecoveryData): number {
    // Check for variety in emotion intensities
    const emotionIntensities = session.data.emotions.map(e => e.intensity);
    const uniqueIntensities = new Set(emotionIntensities).size;
    const emotionConsistency = uniqueIntensities > 1 ? 
      (uniqueIntensities / Math.max(emotionIntensities.length, 1)) * 100 : 0;

    // Check for variety in sensory responses
    const sensoryResponses = session.data.sensoryInputs.map(s => s.response);
    const uniqueResponses = new Set(sensoryResponses).size;
    const sensoryConsistency = uniqueResponses > 1 ? 
      (uniqueResponses / Math.max(sensoryResponses.length, 1)) * 100 : 0;

    return (emotionConsistency + sensoryConsistency) / 2;
  }

  /**
   * Calculate richness score
   */
  private calculateRichness(session: SessionRecoveryData): number {
    let richness = 0;

    // Emotion diversity
    const emotionTypes = new Set(session.data.emotions.map(e => e.emotion)).size;
    richness += Math.min(emotionTypes * 10, 30);

    // Sensory diversity
    const sensoryTypes = new Set(session.data.sensoryInputs.map(s => s.sensoryType || s.type)).size;
    richness += Math.min(sensoryTypes * 10, 30);

    // Notes length
    if (session.data.notes.length > 50) richness += 20;
    else if (session.data.notes.length > 20) richness += 10;

    // Environmental data completeness
    if (session.data.environmentalData) {
      const env = session.data.environmentalData as any;
      if (env.classroom || env.roomConditions) richness += 20;
    }

    return Math.min(richness, 100);
  }

  /**
   * Persist session to localStorage
   */
  private persistSession(session: SessionRecoveryData): void {
    try {
      const key = `sensoryTracker_session_${session.sessionId}`;
      localStorage.setItem(key, JSON.stringify(session));
    } catch (error) {
      logger.error('[SessionManager] Failed to persist session', { 
        sessionId: session.sessionId, 
        error 
      });
    }
  }

  /**
   * Clear persisted session
   */
  private clearPersistedSession(sessionId: string): void {
    const key = `sensoryTracker_session_${sessionId}`;
    localStorage.removeItem(key);
  }

  /**
   * Load session history
   */
  private loadSessionHistory(): void {
    try {
      const data = localStorage.getItem('sensoryTracker_sessionHistory');
      if (data) {
        this.sessionHistory = JSON.parse(data).map((s: any) => ({
          ...s,
          startTime: new Date(s.startTime),
          endTime: s.endTime ? new Date(s.endTime) : undefined,
        }));
      }
    } catch (error) {
      logger.error('[SessionManager] Failed to load session history', { error });
      this.sessionHistory = [];
    }
  }

  /**
   * Save session history
   */
  private saveSessionHistory(): void {
    try {
      localStorage.setItem('sensoryTracker_sessionHistory', JSON.stringify(this.sessionHistory));
    } catch (error) {
      logger.error('[SessionManager] Failed to save session history', { error });
    }
  }

  /**
   * Check for abandoned sessions on startup
   */
  private checkForAbandonedSessions(): void {
    const recovered = this.recoverSessions();
    const now = Date.now();

    recovered.forEach(session => {
      const age = now - session.metadata.startTime.getTime();
      // Auto-abandon sessions older than 2 hours
      if (age > 2 * 60 * 60 * 1000) {
        this.abandonSession(session.sessionId);
      }
    });
  }

  /**
   * Update validation rules
   */
  updateValidationRules(rules: Partial<SessionValidationRules>): void {
    this.validationRules = { ...this.validationRules, ...rules };
    logger.info('[SessionManager] Updated validation rules', { rules });
  }

  /**
   * Get validation rules
   */
  getValidationRules(): SessionValidationRules {
    return { ...this.validationRules };
  }

  /**
   * Clear all session data (for testing/reset)
   */
  clearAllSessions(): void {
    this.activeSessions.clear();
    this.sessionHistory = [];
    
    // Clear from localStorage
    const keys = Object.keys(localStorage).filter(k => 
      k.startsWith('sensoryTracker_session_') || 
      k === 'sensoryTracker_sessionHistory'
    );
    keys.forEach(key => localStorage.removeItem(key));

    logger.info('[SessionManager] Cleared all sessions');
  }
}

// Export singleton instance
export const sessionManager = SessionManager.getInstance();
