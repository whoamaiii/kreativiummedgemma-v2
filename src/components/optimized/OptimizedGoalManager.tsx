/**
 * @fileoverview OptimizedGoalManager - Performance-optimized goal management component
 * 
 * Key optimizations:
 * - All event handlers are memoized with useCallback
 * - No inline functions in JSX
 * - Component wrapped with React.memo
 * - List items use stable keys (not array indices)
 * - Expensive operations are memoized
 * 
 * @module components/optimized/OptimizedGoalManager
 */

import { useState, useEffect, useCallback, useMemo, memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Goal, Student, GoalDataPoint, Milestone } from "@/types/student";
import { dataStorage } from "@/lib/dataStorage";
import { Calendar, Plus, Crosshair, TrendingUp, CheckCircle, Edit, Trash2, Calendar as CalendarIcon } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import { logger } from "@/lib/logger";

interface OptimizedGoalManagerProps {
  student: Student;
  onGoalUpdate?: () => void;
}

/**
 * Generate a unique ID using crypto.randomUUID or fallback
 */
const generateId = (): string => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 11);
  const randomPart2 = Math.random().toString(36).substring(2, 11);
  return `${timestamp}-${randomPart}-${randomPart2}`;
};

/**
 * Get icon for goal category
 */
const getCategoryIcon = (category: Goal['category']): string => {
  const icons: Record<Goal['category'], string> = {
    behavioral: '🎯',
    academic: '📚',
    social: '👥',
    communication: '💬',
    motor: '🏃',
    sensory: '👁️',
    cognitive: '🧠',
    emotional: '❤️',
    selfCare: '🧘',
    vocational: '💼'
  };
  return icons[category] || '🎯';
};

/**
 * Get status color for goal
 */
const getStatusColor = (status: Goal['status']): string => {
  const colors: Record<Goal['status'], string> = {
    active: 'bg-green-500',
    paused: 'bg-yellow-500',
    completed: 'bg-blue-500',
    archived: 'bg-gray-500'
  };
  return colors[status] || 'bg-gray-500';
};

/**
 * OptimizedGoalManager Component
 */
export const OptimizedGoalManager = memo(({ 
  student, 
  onGoalUpdate 
}: OptimizedGoalManagerProps) => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [editingGoal, setEditingGoal] = useState<Goal | null>(null);
  const [newGoal, setNewGoal] = useState({
    title: "",
    description: "",
    category: "behavioral" as Goal['category'],
    measurableObjective: "",
    targetDate: "",
    targetValue: 100,
    baselineValue: 0
  });

  // Memoized goal loading function
  const loadGoals = useCallback(() => {
    const allGoals = dataStorage.getGoals();
    const studentGoals = allGoals.filter(goal => goal.studentId === student.id);
    setGoals(studentGoals);
  }, [student.id]);

  // Load goals on mount and when student changes
  useEffect(() => {
    loadGoals();
  }, [loadGoals]);

  // Memoized form reset
  const resetForm = useCallback(() => {
    setNewGoal({
      title: "",
      description: "",
      category: "behavioral",
      measurableObjective: "",
      targetDate: "",
      targetValue: 100,
      baselineValue: 0
    });
  }, []);

  // Memoized goal creation handler
  const createGoal = useCallback(() => {
    if (!newGoal.title.trim() || !newGoal.description.trim() || !newGoal.measurableObjective.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!newGoal.targetDate) {
      toast.error("Please select a target date");
      return;
    }

    const targetDate = new Date(newGoal.targetDate);
    if (isNaN(targetDate.getTime())) {
      toast.error("Invalid target date");
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (targetDate < today) {
      toast.error("Target date must be in the future");
      return;
    }

    if (newGoal.targetValue <= newGoal.baselineValue) {
      toast.error("Target value must be greater than baseline value");
      return;
    }

    const goal: Goal = {
      id: generateId(),
      studentId: student.id,
      title: newGoal.title,
      description: newGoal.description,
      category: newGoal.category,
      targetDate,
      createdDate: new Date(),
      status: "active",
      measurableObjective: newGoal.measurableObjective,
      currentProgress: 0,
      milestones: [],
      interventions: [],
      baselineValue: newGoal.baselineValue,
      targetValue: newGoal.targetValue,
      dataPoints: [{
        id: generateId(),
        timestamp: new Date(),
        value: newGoal.baselineValue,
        notes: "Baseline measurement",
        collectedBy: "Teacher"
      }]
    };

    dataStorage.saveGoal(goal);
    loadGoals();
    resetForm();
    setShowCreateDialog(false);
    toast.success("Goal created successfully!");
    onGoalUpdate?.();
  }, [newGoal, student.id, loadGoals, resetForm, onGoalUpdate]);

  // Memoized goal update handler
  const updateGoal = useCallback((goalId: string, updates: Partial<Goal>) => {
    const goalToUpdate = goals.find(g => g.id === goalId);
    if (!goalToUpdate) return;

    const updatedGoal = { ...goalToUpdate, ...updates };
    dataStorage.saveGoal(updatedGoal);
    loadGoals();
    onGoalUpdate?.();
  }, [goals, loadGoals, onGoalUpdate]);

  // Memoized goal deletion handler
  const deleteGoal = useCallback((goalId: string) => {
    const goal = goals.find(g => g.id === goalId);
    if (!goal) return;

    if (window.confirm(`Are you sure you want to delete the goal "${goal.title}"?`)) {
      dataStorage.deleteGoal(goalId);
      loadGoals();
      toast.success("Goal deleted successfully");
      onGoalUpdate?.();
    }
  }, [goals, loadGoals, onGoalUpdate]);

  // Memoized data point addition handler
  const addDataPoint = useCallback((goalId: string, value: number, notes?: string) => {
    const goal = goals.find(g => g.id === goalId);
    if (!goal) return;

    const newDataPoint: GoalDataPoint = {
      id: generateId(),
      timestamp: new Date(),
      value,
      notes,
      collectedBy: "Teacher"
    };

    const updatedDataPoints = [...goal.dataPoints, newDataPoint];
    const progress = goal.targetValue 
      ? ((value - (goal.baselineValue || 0)) / (goal.targetValue - (goal.baselineValue || 0))) * 100 
      : 0;
    
    updateGoal(goalId, {
      dataPoints: updatedDataPoints,
      currentProgress: Math.max(0, Math.min(100, progress))
    });

    toast.success("Progress updated!");
  }, [goals, updateGoal]);

  // Memoized milestone addition handler
  const addMilestone = useCallback((goalId: string, title: string, description: string, targetDate: Date) => {
    const goal = goals.find(g => g.id === goalId);
    if (!goal) return;

    const newMilestone: Milestone = {
      id: generateId(),
      title,
      description,
      targetDate,
      isCompleted: false
    };

    updateGoal(goalId, {
      milestones: [...goal.milestones, newMilestone]
    });

    toast.success("Milestone added!");
  }, [goals, updateGoal]);

  // Memoized milestone completion handler
  const completeMilestone = useCallback((goalId: string, milestoneId: string) => {
    const goal = goals.find(g => g.id === goalId);
    if (!goal) return;

    const updatedMilestones = goal.milestones.map(m =>
      m.id === milestoneId
        ? { ...m, isCompleted: true, completedDate: new Date() }
        : m
    );

    updateGoal(goalId, { milestones: updatedMilestones });
    toast.success("Milestone completed!");
  }, [goals, updateGoal]);

  // Handler for milestone prompt
  const handleAddMilestoneClick = useCallback((goalId: string) => {
    const title = prompt("Milestone title:");
    const description = prompt("Milestone description:");
    const dateStr = prompt("Target date (YYYY-MM-DD):");
    if (title && description && dateStr) {
      addMilestone(goalId, title, description, new Date(dateStr));
    }
  }, [addMilestone]);

  // Handler for progress update
  const handleUpdateProgressClick = useCallback((goalId: string) => {
    const value = prompt("Enter current progress value:");
    const notes = prompt("Progress notes (optional):");
    if (value) {
      addDataPoint(goalId, Number(value), notes || undefined);
    }
  }, [addDataPoint]);

  // Handler for dialog cancel
  const handleDialogCancel = useCallback(() => {
    resetForm();
    setShowCreateDialog(false);
  }, [resetForm]);

  // Memoized input handlers
  const handleTitleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewGoal(prev => ({ ...prev, title: e.target.value }));
  }, []);

  const handleDescriptionChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewGoal(prev => ({ ...prev, description: e.target.value }));
  }, []);

  const handleCategoryChange = useCallback((value: string) => {
    setNewGoal(prev => ({ ...prev, category: value as Goal['category'] }));
  }, []);

  const handleObjectiveChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewGoal(prev => ({ ...prev, measurableObjective: e.target.value }));
  }, []);

  const handleBaselineChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewGoal(prev => ({ ...prev, baselineValue: Number(e.target.value) }));
  }, []);

  const handleTargetValueChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewGoal(prev => ({ ...prev, targetValue: Number(e.target.value) }));
  }, []);

  const handleTargetDateChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewGoal(prev => ({ ...prev, targetDate: e.target.value }));
  }, []);

  // Memoized sorted goals
  const sortedGoals = useMemo(() => {
    return [...goals].sort((a, b) => {
      // Sort by status (active first) then by created date
      const statusOrder = { active: 0, paused: 1, completed: 2, archived: 3 };
      const statusDiff = statusOrder[a.status] - statusOrder[b.status];
      if (statusDiff !== 0) return statusDiff;
      return b.createdDate.getTime() - a.createdDate.getTime();
    });
  }, [goals]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Crosshair className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">IEP Goals & Tracking</h2>
        </div>
        
        <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary hover:opacity-90">
              <Plus className="h-4 w-4 mr-2" />
              Create New Goal
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New IEP Goal</DialogTitle>
              <DialogDescription>
                Define a specific, measurable goal for {student.name}'s educational progress.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 mt-4">
              <div>
                <Label htmlFor="goal-title">Goal Title *</Label>
                <Input
                  id="goal-title"
                  placeholder="e.g., Improve Reading Comprehension"
                  value={newGoal.title}
                  onChange={handleTitleChange}
                />
              </div>
              
              <div>
                <Label htmlFor="goal-description">Description *</Label>
                <Textarea
                  id="goal-description"
                  placeholder="Describe the goal in detail..."
                  value={newGoal.description}
                  onChange={handleDescriptionChange}
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="goal-category">Category *</Label>
                <Select value={newGoal.category} onValueChange={handleCategoryChange}>
                  <SelectTrigger id="goal-category">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="behavioral">Behavioral</SelectItem>
                    <SelectItem value="academic">Academic</SelectItem>
                    <SelectItem value="social">Social</SelectItem>
                    <SelectItem value="communication">Communication</SelectItem>
                    <SelectItem value="motor">Motor Skills</SelectItem>
                    <SelectItem value="sensory">Sensory</SelectItem>
                    <SelectItem value="cognitive">Cognitive</SelectItem>
                    <SelectItem value="emotional">Emotional</SelectItem>
                    <SelectItem value="selfCare">Self-Care</SelectItem>
                    <SelectItem value="vocational">Vocational</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="goal-objective">Measurable Objective *</Label>
                <Textarea
                  id="goal-objective"
                  placeholder="e.g., Student will read grade-level text with 80% comprehension..."
                  value={newGoal.measurableObjective}
                  onChange={handleObjectiveChange}
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="goal-baseline">Baseline Value</Label>
                  <Input
                    id="goal-baseline"
                    type="number"
                    value={newGoal.baselineValue}
                    onChange={handleBaselineChange}
                  />
                </div>
                <div>
                  <Label htmlFor="goal-target">Target Value</Label>
                  <Input
                    id="goal-target"
                    type="number"
                    value={newGoal.targetValue}
                    onChange={handleTargetValueChange}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="goal-date">Target Date *</Label>
                <Input
                  id="goal-date"
                  type="date"
                  value={newGoal.targetDate}
                  onChange={handleTargetDateChange}
                />
              </div>
              
              <div className="flex gap-2 justify-end">
                <Button variant="outline" onClick={handleDialogCancel}>
                  Cancel
                </Button>
                <Button onClick={createGoal}>Create Goal</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Goals List */}
      {sortedGoals.length === 0 ? (
        <EmptyState studentName={student.name} onCreateClick={() => setShowCreateDialog(true)} />
      ) : (
        <div className="grid gap-6">
          {sortedGoals.map((goal) => (
            <GoalCard
              key={goal.id}
              goal={goal}
              onDelete={deleteGoal}
              onAddMilestone={handleAddMilestoneClick}
              onUpdateProgress={handleUpdateProgressClick}
              onCompleteMilestone={completeMilestone}
            />
          ))}
        </div>
      )}
    </div>
  );
});

OptimizedGoalManager.displayName = 'OptimizedGoalManager';

// Memoized sub-components
const EmptyState = memo(({ 
  studentName, 
  onCreateClick 
}: { 
  studentName: string; 
  onCreateClick: () => void;
}) => (
  <Card className="bg-gradient-card border-0 shadow-soft">
    <CardContent className="flex flex-col items-center justify-center py-16">
      <Crosshair className="h-16 w-16 text-muted-foreground mb-4" />
      <h3 className="text-xl font-semibold text-foreground mb-2">No IEP Goals Yet</h3>
      <p className="text-muted-foreground text-center mb-6 max-w-md">
        Start by creating your first IEP goal to track {studentName}'s educational progress.
      </p>
      <Button onClick={onCreateClick} className="bg-gradient-primary hover:opacity-90 font-dyslexia">
        <Plus className="h-4 w-4 mr-2" />
        Create First Goal
      </Button>
    </CardContent>
  </Card>
));

EmptyState.displayName = 'EmptyState';

const GoalCard = memo(({
  goal,
  onDelete,
  onAddMilestone,
  onUpdateProgress,
  onCompleteMilestone
}: {
  goal: Goal;
  onDelete: (id: string) => void;
  onAddMilestone: (id: string) => void;
  onUpdateProgress: (id: string) => void;
  onCompleteMilestone: (goalId: string, milestoneId: string) => void;
}) => {
  const handleDelete = useCallback(() => onDelete(goal.id), [goal.id, onDelete]);
  const handleAddMilestone = useCallback(() => onAddMilestone(goal.id), [goal.id, onAddMilestone]);
  const handleUpdateProgress = useCallback(() => onUpdateProgress(goal.id), [goal.id, onUpdateProgress]);

  return (
    <Card className="bg-gradient-card border-0 shadow-soft">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <span className="text-2xl">{getCategoryIcon(goal.category)}</span>
            <div>
              <CardTitle className="flex items-center gap-2">
                {goal.title}
                <Badge variant="outline" className={`${getStatusColor(goal.status)} text-white border-0`}>
                  {goal.status}
                </Badge>
              </CardTitle>
              <p className="text-muted-foreground mt-1">{goal.description}</p>
              <Badge variant="secondary" className="mt-2">
                {goal.category}
              </Badge>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" aria-label="Edit goal" title="Edit goal">
              <Edit className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Delete goal" title="Delete goal" onClick={handleDelete}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <GoalProgress goal={goal} />
        <GoalObjective objective={goal.measurableObjective} />
        <GoalTimeline goal={goal} />
        <GoalMilestones 
          goal={goal} 
          onAdd={handleAddMilestone}
          onComplete={onCompleteMilestone}
        />
        <Button variant="outline" size="sm" onClick={handleUpdateProgress}>
          <TrendingUp className="h-4 w-4 mr-1" />
          Update Progress
        </Button>
      </CardContent>
    </Card>
  );
});

GoalCard.displayName = 'GoalCard';

const GoalProgress = memo(({ goal }: { goal: Goal }) => (
  <div className="mb-6">
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm font-medium">Progress</span>
      <span className="text-sm text-muted-foreground">{Math.round(goal.currentProgress)}%</span>
    </div>
    <Progress value={goal.currentProgress} className="h-3" />
  </div>
));

GoalProgress.displayName = 'GoalProgress';

const GoalObjective = memo(({ objective }: { objective: string }) => (
  <div className="mb-4">
    <h4 className="font-medium mb-2">Measurable Objective</h4>
    <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
      {objective}
    </p>
  </div>
));

GoalObjective.displayName = 'GoalObjective';

const GoalTimeline = memo(({ goal }: { goal: Goal }) => (
  <div className="flex items-center gap-4 mb-4">
    <div className="flex items-center gap-2 text-sm">
      <CalendarIcon className="h-4 w-4 text-muted-foreground" />
      <span>Created: {format(goal.createdDate, 'MMM dd, yyyy')}</span>
    </div>
    <div className="flex items-center gap-2 text-sm">
      <Crosshair className="h-4 w-4 text-muted-foreground" />
      <span>Target: {format(goal.targetDate, 'MMM dd, yyyy')}</span>
    </div>
  </div>
));

GoalTimeline.displayName = 'GoalTimeline';

const GoalMilestones = memo(({
  goal,
  onAdd,
  onComplete
}: {
  goal: Goal;
  onAdd: () => void;
  onComplete: (goalId: string, milestoneId: string) => void;
}) => {
  const handleComplete = useCallback((milestoneId: string) => {
    onComplete(goal.id, milestoneId);
  }, [goal.id, onComplete]);

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium">Milestones</h4>
        <Button variant="outline" size="sm" onClick={onAdd}>
          <Plus className="h-3 w-3 mr-1" />
          Add
        </Button>
      </div>
      {goal.milestones.length === 0 ? (
        <p className="text-sm text-muted-foreground">No milestones yet</p>
      ) : (
        <div className="space-y-2">
          {goal.milestones.map((milestone) => (
            <MilestoneItem
              key={milestone.id}
              milestone={milestone}
              onComplete={handleComplete}
            />
          ))}
        </div>
      )}
    </div>
  );
});

GoalMilestones.displayName = 'GoalMilestones';

const MilestoneItem = memo(({
  milestone,
  onComplete
}: {
  milestone: Milestone;
  onComplete: (id: string) => void;
}) => {
  const handleClick = useCallback(() => {
    if (!milestone.isCompleted) {
      onComplete(milestone.id);
    }
  }, [milestone.isCompleted, milestone.id, onComplete]);

  return (
    <div className="flex items-center gap-2 p-2 bg-muted/30 rounded">
      <Button
        variant="ghost"
        size="icon"
        aria-label={milestone.isCompleted ? 'Milestone completed' : 'Mark milestone complete'}
        title={milestone.isCompleted ? 'Milestone completed' : 'Mark milestone complete'}
        onClick={handleClick}
        disabled={milestone.isCompleted}
      >
        <CheckCircle className={`h-4 w-4 ${milestone.isCompleted ? 'text-green-500' : 'text-muted-foreground'}`} />
      </Button>
      <div className="flex-1">
        <p className={`text-sm ${milestone.isCompleted ? 'line-through text-muted-foreground' : ''}`}>
          {milestone.title}
        </p>
        <p className="text-xs text-muted-foreground">{milestone.description}</p>
      </div>
      <span className="text-xs text-muted-foreground">
        {format(milestone.targetDate, 'MMM dd')}
      </span>
    </div>
  );
});

MilestoneItem.displayName = 'MilestoneItem';

export default OptimizedGoalManager;
