import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

interface ProfileErrorStateProps {
  message?: string;
  onRetry?: () => void;
  fullScreen?: boolean;
}

/**
 * @component ProfileErrorState
 * @description Provides consistent error state UI for profile pages
 * 
 * Features:
 * - Clear error messaging
 * - Optional retry functionality
 * - Full screen or inline display
 * - Internationalization support
 * - Accessible error announcements
 */
export function ProfileErrorState({ 
  message, 
  onRetry,
  fullScreen = true 
}: ProfileErrorStateProps) {
  const { t, tCommon } = useTranslation();
  
  const containerClass = fullScreen 
    ? 'h-screen w-full flex items-center justify-center'
    : 'flex items-center justify-center py-8';
  
  return (
    <div className={containerClass} role="alert" aria-live="assertive">
      <div className="flex flex-col items-center gap-4 text-center max-w-md">
        <AlertCircle className="h-10 w-10 text-destructive" aria-hidden="true" />
        <div className="space-y-2">
          <p className="text-destructive font-medium">
            {message || t('student_not_found')}
          </p>
          {onRetry && (
            <p className="text-sm text-muted-foreground">
              {t('error_try_again')}
            </p>
          )}
        </div>
        {onRetry && (
          <Button 
            onClick={onRetry}
            variant="outline"
            aria-label={tCommon('aria.retry_loading')}
          >
            {tCommon('buttons.retry')}
          </Button>
        )}
      </div>
    </div>
  );
}
