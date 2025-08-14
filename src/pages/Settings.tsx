import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { useNavigate } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

const Settings = (): JSX.Element => {
  const { tSettings, tCommon } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <header className="space-y-2">
          <Breadcrumbs
            items={[
              { label: tCommon('buttons.home'), href: '/' },
              { label: tSettings('title'), current: true },
            ]}
          />
          <h1 className="text-3xl font-bold text-foreground">{tSettings('title')}</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <aside className="md:col-span-1 space-y-2" aria-label="Settings navigation">
            <ul className="text-sm">
              <li>
<Button variant="outline" className="w-full justify-start" onClick={() => navigate('/reports')} data-testid="settings-link-reports">
                  {String(tSettings('data.export'))}
                </Button>
              </li>
            </ul>
          </aside>

          <section className="md:col-span-3 space-y-4">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-semibold">{tSettings('data.title')}</h2>
            <p className="text-sm text-muted-foreground">{tSettings('dataExport.description')}</p>
            <div>
              <Button variant="outline" onClick={() => navigate('/reports')} aria-label={tSettings('data.export')}>
                <FileText className="h-4 w-4 mr-2" />
                {String(tSettings('data.export'))}
              </Button>
            </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;

