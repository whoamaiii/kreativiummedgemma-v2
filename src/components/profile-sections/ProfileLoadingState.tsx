import { Loader } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface ProfileLoadingStateProps {
  message?: string;
  fullScreen?: boolean;
}

/**
 * @component ProfileLoadingState
 * @description Provides consistent loading state UI for profile pages
 * 
 * Features:
 * - Animated loading spinner
 * - Customizable loading message
 * - Full screen or inline display
 * - Internationalization support
 */
export function ProfileLoadingState({ 
  message, 
  fullScreen = true 
}: ProfileLoadingStateProps) {
  const { t } = useTranslation();
  
  const containerClass = fullScreen 
    ? 'h-screen w-full flex items-center justify-center'
    : 'flex items-center justify-center py-8';
  
  return (
    <div className={containerClass} role="status" aria-live="polite">
      <div className="flex items-center gap-2">
        <Loader className="h-5 w-5 animate-spin" aria-hidden="true" />
        <p className="text-muted-foreground">
          {message || t('loading_student_data')}
        </p>
      </div>
    </div>
  );
}
