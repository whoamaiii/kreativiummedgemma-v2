import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

export const LoadingFallback: React.FC = () => {
  const { tCommon } = useTranslation();
  
  return (
    <div role="status" aria-live="polite" className="p-4">
      {tCommon('loading')}
    </div>
  );
};
