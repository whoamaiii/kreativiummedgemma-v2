import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { EmotionTracker } from "@/components/EmotionTracker";
import { SensoryTracker } from "@/components/SensoryTracker";
import { EnvironmentalTracker } from "@/components/EnvironmentalTracker";
import { Student, EmotionEntry, SensoryEntry, TrackingEntry, EnvironmentalEntry } from "@/types/student";
import { ArrowLeft, Save, User, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "@/hooks/useTranslation";
import { LanguageSettings } from "@/components/LanguageSettings";
import { analyticsManager } from "@/lib/analyticsManager";
import { logger } from "@/lib/logger";
import { ENABLE_BIGSTIAN_AI } from "@/lib/env";
import { generateCoachingPlan } from "@/lib/ai/bigstian/orchestrator";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const TrackStudent = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState<Student | null>(null);
  const [emotions, setEmotions] = useState<Omit<EmotionEntry, 'id' | 'timestamp'>[]>([]);
  const [sensoryInputs, setSensoryInputs] = useState<Omit<SensoryEntry, 'id' | 'timestamp'>[]>([]);
  const [environmentalData, setEnvironmentalData] = useState<Omit<EnvironmentalEntry, 'id' | 'timestamp'> | null>(null);
  const [generalNotes, setGeneralNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { tTracking, tCommon } = useTranslation();
  const [coachOpen, setCoachOpen] = useState(false);
  const [coachLoading, setCoachLoading] = useState(false);
  const [coachText, setCoachText] = useState('');

  useEffect(() => {
    if (!studentId) return;

    // Load student data
    const storedStudents = localStorage.getItem('sensoryTracker_students');
    if (storedStudents) {
      const students = JSON.parse(storedStudents);
      const foundStudent = students.find((s: Student) => s.id === studentId);
      if (foundStudent) {
        setStudent({
          ...foundStudent,
          createdAt: new Date(foundStudent.createdAt)
        });
      } else {
        toast.error(String(tTracking('session.validationError')));
        navigate('/');
      }
    }
  }, [studentId, navigate, tTracking]);

  const handleEmotionAdd = (emotion: Omit<EmotionEntry, 'id' | 'timestamp'>) => {
    setEmotions([...emotions, emotion]);
    toast.success("Emotion recorded!");
  };

  const handleSensoryAdd = (sensory: Omit<SensoryEntry, 'id' | 'timestamp'>) => {
    setSensoryInputs([...sensoryInputs, sensory]);
    toast.success("Sensory input recorded!");
  };

  const handleEnvironmentalAdd = (environmental: Omit<EnvironmentalEntry, 'id' | 'timestamp'>) => {
    setEnvironmentalData(environmental);
    toast.success("Environmental conditions recorded!");
  };

  const handleSaveSession = async () => {
    if (!student) return;
    
    if (emotions.length === 0 && sensoryInputs.length === 0) {
      toast.error(String(tTracking('session.validationError')));
      return;
    }

    setIsLoading(true);
    try {
      const timestamp = new Date();
      
      // Create the tracking entry
      const trackingEntry: TrackingEntry = {
        id: crypto.randomUUID(),
        studentId: student.id,
        timestamp,
        emotions: emotions.map(e => ({
          ...e,
          id: crypto.randomUUID(),
          timestamp
        })),
        sensoryInputs: sensoryInputs.map(s => ({
          ...s,
          id: crypto.randomUUID(),
          timestamp
        })),
        environmentalData: environmentalData ? {
          ...environmentalData,
          id: crypto.randomUUID(),
          timestamp
        } : undefined,
        notes: generalNotes.trim() || undefined
      };

      // Save using dataStorage for consistency
      const storedEntries = localStorage.getItem('sensoryTracker_entries');
      const entries = storedEntries ? JSON.parse(storedEntries) : [];
      entries.push(trackingEntry);
      localStorage.setItem('sensoryTracker_entries', JSON.stringify(entries));

      // Trigger analytics update for this student
      await analyticsManager.triggerAnalyticsForStudent(student);

      toast.success(String(tTracking('session.sessionSaved')));
      navigate(`/student/${student.id}`);
    } catch (error) {
      logger.error('Failed to save tracking session', { error });
      toast.error(String(tTracking('session.saveError')));
    } finally {
      setIsLoading(false);
    }
  };

  if (!student) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">{String(tCommon('status.loading'))}...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-dyslexia">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              onClick={() => navigate(`/student/${student.id}`)}
              className="font-dyslexia"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {String(tCommon('buttons.back'))}
            </Button>
            <LanguageSettings />
          </div>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-lg">
              {student.name.split(' ').map(n => n[0]).join('').toUpperCase()}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                {String(tTracking('session.title')).replace('{{studentName}}', student.name)}
              </h1>
            </div>
          </div>
          
          <p className="text-muted-foreground">
            Record emotions and sensory responses for this session
          </p>
        </div>

        {/* Session Summary */}
        <div className="mb-6 p-4 bg-primary-soft rounded-lg border border-primary/20">
          <h3 className="text-lg font-semibold text-primary-foreground mb-2">
            {String(tTracking('session.summary'))}
          </h3>
          <div className="flex items-center gap-4 text-sm text-primary-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{String(tTracking('session.emotionsRecorded')).replace('{{count}}', emotions.length.toString())}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{String(tTracking('session.sensoryInputsRecorded')).replace('{{count}}', sensoryInputs.length.toString())}</span>
            </div>
          </div>
        </div>

        {/* Tracking Forms */}
        <div className="space-y-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <EmotionTracker 
              onEmotionAdd={handleEmotionAdd}
              studentId={student.id}
            />
            <SensoryTracker 
              onSensoryAdd={handleSensoryAdd}
              studentId={student.id}
            />
          </div>
          
          {/* Environmental Tracking */}
          <div className="w-full">
            <EnvironmentalTracker 
              onEnvironmentalAdd={handleEnvironmentalAdd}
              studentId={student.id}
            />
          </div>
        </div>

        {/* General Notes */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            {String(tTracking('session.generalNotes'))}
          </h3>
          <textarea
            value={generalNotes}
            onChange={(e) => setGeneralNotes(e.target.value)}
            placeholder={String(tTracking('session.generalNotesPlaceholder'))}
            className="w-full p-4 border border-border rounded-lg font-dyslexia bg-input focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
            rows={4}
          />
        </div>

        {/* Live Coaching (optional) */}
        {ENABLE_BIGSTIAN_AI && (
          <div className="mb-8 p-4 rounded-lg border bg-muted/40">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-foreground">Live Coaching</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={async () => {
                  setCoachOpen(true);
                  setCoachLoading(true);
                  setCoachText('');
                  try {
                    const stateSummary = `Emotions: ${emotions.length}, Sensory inputs: ${sensoryInputs.length}`;
                    const env = environmentalData ? JSON.stringify({
                      room: environmentalData?.roomConditions || {},
                      context: environmentalData?.context || {}
                    }) : 'n/a';
                    const plan = await generateCoachingPlan({
                      stateSummary,
                      environment: env,
                      recentWindow: 'last 10 minutes',
                    });
                    const text = [
                      `Rationale: ${plan.rationale}`,
                      ...plan.suggestions.map(s => `\n${s.tier.toUpperCase()}: ${s.title}\n- ${s.steps.join('\n- ')}`)
                    ].join('\n');
                    setCoachText(text);
                  } catch (e) {
                    setCoachText('Failed to load coaching suggestions');
                  } finally {
                    setCoachLoading(false);
                  }
                }}
              >
                <Sparkles className="h-4 w-4 mr-1" /> Suggest actions
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">Get tiered, classroom-safe suggestions based on the most recent session context.</p>
          </div>
        )}

        {/* Save Session */}
        <div className="flex gap-4">
          <Button
            variant="ghost"
            onClick={() => navigate(`/student/${student.id}`)}
            className="flex-1 font-dyslexia"
          >
            {String(tTracking('session.cancelSession'))}
          </Button>
          <Button
            onClick={handleSaveSession}
            disabled={isLoading || (emotions.length === 0 && sensoryInputs.length === 0)}
            className="flex-1 font-dyslexia bg-gradient-primary hover:opacity-90 transition-all duration-200"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                {String(tCommon('status.saving'))}
              </div>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                {String(tTracking('session.saveSession'))}
              </>
            )}
          </Button>
        </div>
      </div>
      <Dialog open={coachOpen} onOpenChange={setCoachOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Live coaching suggestions</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            {coachLoading ? (
              <div className="text-sm text-muted-foreground">Generating…</div>
            ) : (
              <pre className="whitespace-pre-wrap text-sm bg-muted/50 p-3 rounded">{coachText}</pre>
            )}
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setCoachOpen(false)}>Close</Button>
              <Button onClick={() => { try { navigator.clipboard?.writeText?.(coachText); toast.success('Copied'); } catch {} }}>Copy</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TrackStudent;
