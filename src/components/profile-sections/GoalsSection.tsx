import { memo } from 'react';
import { GoalManager } from '@/components/GoalManager';
import { Student } from '@/types/student';
import { useTranslation } from '@/hooks/useTranslation';

interface GoalsSectionProps {
  student: Student;
  onGoalUpdate?: () => void;
}

/**
 * @component GoalsSection
 * @description Renders the goals management section for a student profile
 * 
 * This component provides:
 * - Section header with title and description
 * - Goal management interface via GoalManager component
 * - Proper internationalization support
 */
const GoalsSection = memo(({ student, onGoalUpdate }: GoalsSectionProps) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">{t('goals_title')}</h2>
        <p className="text-muted-foreground">
          {t('goals_description', { name: student.name })}
        </p>
      </div>
      <GoalManager student={student} onGoalUpdate={onGoalUpdate} />
    </div>
  );
});

GoalsSection.displayName = 'GoalsSection';

export { GoalsSection };
