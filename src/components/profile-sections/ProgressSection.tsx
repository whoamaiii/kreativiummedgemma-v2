import { memo } from 'react';
import { ProgressDashboard } from '@/components/ProgressDashboard';
import { Student, Goal } from '@/types/student';
import { useTranslation } from '@/hooks/useTranslation';

interface ProgressSectionProps {
  student: Student;
  goals: Goal[];
}

/**
 * @component ProgressSection
 * @description Renders the progress tracking section for a student profile
 * 
 * This component provides:
 * - Section header with title and description
 * - Progress visualization via ProgressDashboard component
 * - Goal-based progress tracking
 */
const ProgressSection = memo(({ student, goals }: ProgressSectionProps) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">{t('progress_title')}</h2>
        <p className="text-muted-foreground">
          {t('progress_description', { name: student.name })}
        </p>
      </div>
      <ProgressDashboard student={student} goals={goals} />
    </div>
  );
});

ProgressSection.displayName = 'ProgressSection';

export { ProgressSection };
