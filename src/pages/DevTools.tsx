import React, { lazy, Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { TestingToolsSection } from '@/components/TestingToolsSection';
import { IS_PROD, POC_MODE } from '@/lib/env';
import { Database, Wrench } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { useTranslation } from '@/hooks/useTranslation';

const StorageManager = lazy(() => import('@/components/StorageManager').then(m => ({ default: m.StorageManager })));

/**
 * Developer Tools page - centralizes non user-facing utilities
 * Gated to non-production or POC modes via routing in App.tsx
 */
const DevTools = (): JSX.Element => {
  // Extra guard to avoid accidental exposure if route misconfigured
  if (IS_PROD && !POC_MODE) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle>Developer Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">This section is not available in production.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const { tCommon } = useTranslation();
  return (
    <div className="relative z-10 min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="space-y-2">
          <Breadcrumbs
            items={[
              { label: tCommon('buttons.home'), href: '/' },
              { label: 'Developer Tools', current: true },
            ]}
          />
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Wrench className="h-6 w-6 text-primary" />
            Developer Tools
          </h1>
        </header>

        {/* Reuse existing TestingToolsSection which already includes MockDataLoader */}
        <TestingToolsSection />

        {/* Storage Management */}
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              Storage Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Inspect and manage local data storage. Clear old or non-essential data safely.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full">
                  <Database className="h-4 w-4 mr-2" />
                  Open Storage Manager
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Storage Management</DialogTitle>
                </DialogHeader>
                <Suspense fallback={<div className="p-4 text-sm text-muted-foreground">Loading…</div>}>
                  <StorageManager />
                </Suspense>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DevTools;
