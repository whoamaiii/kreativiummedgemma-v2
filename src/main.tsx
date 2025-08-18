import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { logger, LogLevel } from '@/lib/logger'
import { POC_MODE } from '@/lib/env'
import './index.css'
import { i18n, initI18n } from './i18n'
import { I18nextProvider } from 'react-i18next'

// Ensure i18n is initialized before rendering
await initI18n();

createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);

// Configure logger for POC mode to minimize console noise
if (POC_MODE) {
  logger.configure({ level: LogLevel.ERROR, enableConsole: true });
}
