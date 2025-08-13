import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { POC_MODE } from "@/lib/env";
if (!POC_MODE) {
  await import("@/lib/analyticsConfigOverride");
}
import { ThemeProvider } from "next-themes";

const Dashboard = lazy(() => import("./pages/Dashboard").then(m => ({ default: m.Dashboard })));
const AddStudent = lazy(() => import("./pages/AddStudent").then(m => ({ default: m.AddStudent })));
const StudentProfile = lazy(() => import("./pages/StudentProfile").then(m => ({ default: m.StudentProfile })));
const TrackStudent = lazy(() => import("./pages/TrackStudent").then(m => ({ default: m.TrackStudent })));
const NotFound = lazy(() => import("./pages/NotFound").then(m => ({ default: m.NotFound })));
const InteractiveVizTest = import.meta.env.MODE !== 'production'
  ? lazy(() => import('./pages/InteractiveVizTest').then(m => ({ default: m.default })))
  : null as unknown as React.LazyExoticComponent<() => JSX.Element>;
const EnvironmentalCorrelationsTest = !POC_MODE
  ? lazy(() => import("./pages/EnvironmentalCorrelationsTest"))
  : null as unknown as React.LazyExoticComponent<() => JSX.Element>;
import { ErrorWrapper } from "./components/ErrorWrapper";

const queryClient = new QueryClient();

const App = () => (
  <ErrorWrapper>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/add-student" element={<AddStudent />} />
                <Route path="/student/:studentId" element={<StudentProfile />} />
                <Route path="/track/:studentId" element={<TrackStudent />} />
                {!POC_MODE && EnvironmentalCorrelationsTest && (
                  <Route path="/environmental-correlations-test" element={<EnvironmentalCorrelationsTest />} />
                )}
                {import.meta.env.MODE !== 'production' && InteractiveVizTest && (
                  <Route path="/e2e/interactive-viz" element={<InteractiveVizTest />} />
                )}
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </ErrorWrapper>
);

export { App };
