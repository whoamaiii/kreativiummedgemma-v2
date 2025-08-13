import React, { memo } from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullScreen?: boolean;
  message?: string;
}

// Move static data outside component to prevent recreating on each render
const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-8 w-8',
  lg: 'h-12 w-12',
  xl: 'h-16 w-16'
} as const;

export const LoadingSpinner = memo<LoadingSpinnerProps>(({ 
  size = 'md', 
  fullScreen = false,
  message = 'Loading...'
}) => {

  const spinner = (
    <div className="flex flex-col items-center justify-center gap-4">
      <Loader2 className={`${sizeClasses[size]} animate-spin text-primary`} />
      {message && (
        <p className="text-sm text-muted-foreground animate-pulse">{message}</p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
});

LoadingSpinner.displayName = 'LoadingSpinner';

// Also memoize other exported spinner variants
export const PageLoadingSpinner = memo(() => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner size="lg" message="Loading page..." />
  </div>
));

PageLoadingSpinner.displayName = 'PageLoadingSpinner';

export const ComponentLoadingSpinner = memo<{ message?: string }>(({ message }) => (
  <div className="p-8 flex items-center justify-center">
    <LoadingSpinner size="md" message={message} />
  </div>
));

ComponentLoadingSpinner.displayName = 'ComponentLoadingSpinner';

export const InlineLoadingSpinner = memo(() => (
  <LoadingSpinner size="sm" message="" />
));

InlineLoadingSpinner.displayName = 'InlineLoadingSpinner';
