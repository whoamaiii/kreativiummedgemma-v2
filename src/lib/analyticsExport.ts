// Dynamic imports to keep initial bundle smaller
let __jsPDF: any | null = null;
let __html2canvas: any | null = null;
async function getJsPDF() {
  if (!__jsPDF) {
    const mod = await import('jspdf');
    __jsPDF = (mod as any).default || mod;
  }
  return __jsPDF;
}
async function getHtml2Canvas() {
  if (!__html2canvas) {
    const mod = await import('html2canvas');
    __html2canvas = (mod as any).default || mod;
  }
  return __html2canvas;
}
import { format } from 'date-fns';
import { Student, TrackingEntry, EmotionEntry, SensoryEntry } from '@/types/student';
import type { ExportFormat } from '@/types/analytics';
import { PatternResult, CorrelationResult } from '@/lib/patternAnalysis';
import { PredictiveInsight, AnomalyDetection } from '@/lib/enhancedPatternAnalysis';
import { logger } from '@/lib/logger';
import { downloadBlob } from '@/lib/utils';


export interface AnalyticsExportData {
  student: Student;
  dateRange: {
    start: Date;
    end: Date;
  };
  data: {
    entries: TrackingEntry[];
    emotions: EmotionEntry[];
    sensoryInputs: SensoryEntry[];
  };
  analytics: {
    patterns: PatternResult[];
    correlations: CorrelationResult[];
    insights: string[];
    predictiveInsights?: PredictiveInsight[];
    anomalies?: AnomalyDetection[];
  };
  charts?: {
    element: HTMLElement;
    title: string;
  }[];
  chartExports?: {
    title: string;
    type?: string;
    dataURL?: string;
    svgString?: string;
  }[];
}

class AnalyticsExport {
  /**
   * Unified export entrypoint used by dashboards; delegates to format-specific methods.
   */
  async exportTo(format: ExportFormat, exportData: AnalyticsExportData, options?: { pdf?: { chartQuality?: 'standard' | 'high' | 'print' } }): Promise<void> {
    switch (format) {
      case 'pdf':
        await this.exportToPDF(exportData, options?.pdf);
        return;
      case 'csv':
        this.exportToCSV(exportData);
        return;
      case 'json':
        this.exportToJSON(exportData);
        return;
      default:
        throw new Error(`Unsupported export format: ${String(format)}`);
    }
  }

  /**
   * Export analytics data to PDF format
   */
  async exportToPDF(exportData: AnalyticsExportData, opts?: { chartQuality?: 'standard' | 'high' | 'print' }): Promise<void> {
    const jsPDF = await getJsPDF();
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.width;
    const pageHeight = pdf.internal.pageSize.height;
    const margin = 20;
    let currentY = margin;

    const pixelRatio = (() => {
      switch (opts?.chartQuality) {
        case 'standard': return 2;
        case 'print': return 4;
        case 'high':
        default:
          return 3;
      }
    })();

    // Header
    pdf.setFontSize(20);
    pdf.text(`Analytics Report - ${exportData.student.name}`, margin, currentY);
    currentY += 10;

    pdf.setFontSize(12);
    pdf.text(
      `Date Range: ${format(exportData.dateRange.start, 'MMM dd, yyyy')} - ${format(exportData.dateRange.end, 'MMM dd, yyyy')}`,
      margin,
      currentY
    );
    currentY += 10;

    pdf.text(`Generated: ${format(new Date(), 'MMM dd, yyyy HH:mm')}`, margin, currentY);
    currentY += 15;

    // Summary Section
    pdf.setFontSize(16);
    pdf.text('Summary', margin, currentY);
    currentY += 10;

    pdf.setFontSize(11);
    const summaryData = [
      `Total Sessions: ${exportData.data.entries.length}`,
      `Emotions Tracked: ${exportData.data.emotions.length}`,
      `Sensory Inputs: ${exportData.data.sensoryInputs.length}`,
      `Patterns Found: ${exportData.analytics.patterns.length}`,
      `Correlations: ${exportData.analytics.correlations.length}`
    ];

    summaryData.forEach(line => {
      pdf.text(line, margin, currentY);
      currentY += 7;
    });
    currentY += 10;

    // Patterns Section
    if (exportData.analytics.patterns.length > 0) {
      if (currentY > pageHeight - 50) {
        pdf.addPage();
        currentY = margin;
      }

      pdf.setFontSize(16);
      pdf.text('Behavioral Patterns', margin, currentY);
      currentY += 10;

      pdf.setFontSize(11);
      exportData.analytics.patterns.forEach((pattern, index) => {
        if (currentY > pageHeight - 40) {
          pdf.addPage();
          currentY = margin;
        }

        pdf.setFont(undefined, 'bold');
        pdf.text(`${index + 1}. ${pattern.pattern.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}`, margin, currentY);
        currentY += 7;

        pdf.setFont(undefined, 'normal');
        pdf.text(`Type: ${pattern.type} | Confidence: ${Math.round(pattern.confidence * 100)}%`, margin + 5, currentY);
        currentY += 7;

        pdf.text(`Description: ${pattern.description}`, margin + 5, currentY);
        currentY += 7;

        if (pattern.recommendations && pattern.recommendations.length > 0) {
          pdf.text('Recommendations:', margin + 5, currentY);
          currentY += 7;

          pattern.recommendations.forEach(rec => {
            const lines = pdf.splitTextToSize(`• ${rec}`, pageWidth - margin * 2 - 10);
            lines.forEach(line => {
              if (currentY > pageHeight - 20) {
                pdf.addPage();
                currentY = margin;
              }
              pdf.text(line, margin + 10, currentY);
              currentY += 6;
            });
          });
        }
        currentY += 5;
      });
    }

    // Correlations Section
    if (exportData.analytics.correlations.length > 0) {
      if (currentY > pageHeight - 50) {
        pdf.addPage();
        currentY = margin;
      }

      pdf.setFontSize(16);
      pdf.text('Environmental Correlations', margin, currentY);
      currentY += 10;

      pdf.setFontSize(11);
      exportData.analytics.correlations.forEach((correlation, index) => {
        if (currentY > pageHeight - 30) {
          pdf.addPage();
          currentY = margin;
        }

        pdf.setFont(undefined, 'bold');
        pdf.text(`${index + 1}. ${correlation.factor1} <-> ${correlation.factor2}`, margin, currentY);
        currentY += 7;

        pdf.setFont(undefined, 'normal');
        pdf.text(`Correlation: r = ${correlation.correlation.toFixed(3)} | Significance: ${correlation.significance}`, margin + 5, currentY);
        currentY += 7;

        pdf.text(`Description: ${correlation.description}`, margin + 5, currentY);
        currentY += 10;
      });
    }

    // Predictive Insights Section
    if (exportData.analytics.predictiveInsights && exportData.analytics.predictiveInsights.length > 0) {
      if (currentY > pageHeight - 50) {
        pdf.addPage();
        currentY = margin;
      }

      pdf.setFontSize(16);
      pdf.text('Predictive Insights', margin, currentY);
      currentY += 10;

      pdf.setFontSize(11);
      exportData.analytics.predictiveInsights.forEach((insight, index) => {
        if (currentY > pageHeight - 40) {
          pdf.addPage();
          currentY = margin;
        }

        pdf.setFont(undefined, 'bold');
        pdf.text(`${index + 1}. ${insight.title}`, margin, currentY);
        currentY += 7;

        pdf.setFont(undefined, 'normal');
        pdf.text(`Confidence: ${Math.round(insight.confidence * 100)}% | Severity: ${insight.severity || 'N/A'}`, margin + 5, currentY);
        currentY += 7;

        const descLines = pdf.splitTextToSize(insight.description, pageWidth - margin * 2 - 10);
        descLines.forEach(line => {
          if (currentY > pageHeight - 20) {
            pdf.addPage();
            currentY = margin;
          }
          pdf.text(line, margin + 5, currentY);
          currentY += 6;
        });

        if (insight.prediction) {
          pdf.text(`Prediction: ${insight.prediction.trend} trend`, margin + 5, currentY);
          currentY += 7;
        }

        currentY += 5;
      });
    }

    // AI-Generated Insights Section
    if (exportData.analytics.insights.length > 0) {
      if (currentY > pageHeight - 50) {
        pdf.addPage();
        currentY = margin;
      }

      pdf.setFontSize(16);
      pdf.text('AI-Generated Insights', margin, currentY);
      currentY += 10;

      pdf.setFontSize(11);
      exportData.analytics.insights.forEach((insight, index) => {
        if (currentY > pageHeight - 30) {
          pdf.addPage();
          currentY = margin;
        }

        const lines = pdf.splitTextToSize(`${index + 1}. ${insight}`, pageWidth - margin * 2);
        lines.forEach(line => {
          pdf.text(line, margin, currentY);
          currentY += 7;
        });
        currentY += 3;
      });
    }

    // Charts (two-column layout when using chartExports; fallback to element capture)
    if (exportData.chartExports && exportData.chartExports.length > 0) {
      const gutter = 8; // mm
      const colWidth = (pageWidth - margin * 2 - gutter) / 2;
      let colIndex = 0;
      let rowMaxHeight = 0;

      const getImage = async (chart: NonNullable<AnalyticsExportData['chartExports']>[number]): Promise<{ dataURL: string; width: number; height: number }> => {
        if (chart.svgString) {
          const svgBlob = new Blob([chart.svgString], { type: 'image/svg+xml;charset=utf-8' });
          const url = URL.createObjectURL(svgBlob);
          try {
            const img = await new Promise<HTMLImageElement>((resolve, reject) => {
              const i = new Image();
              i.onload = () => resolve(i);
              i.onerror = reject;
              i.src = url;
            });
            const aspect = img.height / img.width;
            return { dataURL: chart.svgString as unknown as string, width: colWidth, height: colWidth * aspect };
          } finally {
            URL.revokeObjectURL(url);
          }
        }
        if (chart.dataURL) {
          const natural = await new Promise<{ w: number; h: number }>((resolve) => {
            const i = new Image();
            i.onload = () => resolve({ w: i.width, h: i.height });
            i.src = chart.dataURL!;
          });
          const aspect = natural.h / natural.w;
          return { dataURL: chart.dataURL, width: colWidth, height: colWidth * aspect };
        }
        throw new Error('Missing chart image data');
      };

      for (const c of exportData.chartExports) {
        try {
          if (currentY > pageHeight - 50) {
            pdf.addPage();
            currentY = margin;
            colIndex = 0;
            rowMaxHeight = 0;
          }

          const img = await getImage(c);
          const x = margin + (colIndex === 0 ? 0 : colWidth + gutter);
          const titleHeight = 6;
          pdf.setFontSize(12);
          pdf.text(c.title, x, currentY);
          const yImage = currentY + titleHeight;

          pdf.addImage(img.dataURL, 'PNG', x, yImage, img.width, img.height);

          rowMaxHeight = Math.max(rowMaxHeight, titleHeight + img.height + 6);
          if (colIndex === 1) {
            currentY += rowMaxHeight;
            rowMaxHeight = 0;
            colIndex = 0;
          } else {
            colIndex = 1;
          }
        } catch (e) {
          logger.error('Error adding chart export to PDF:', e);
        }
      }
    } else if (exportData.charts && exportData.charts.length > 0) {
      for (const chart of exportData.charts) {
        try {
          pdf.addPage();
          currentY = margin;
          pdf.setFontSize(16);
          pdf.text(chart.title, margin, currentY);
          currentY += 10;

          const html2canvas = await getHtml2Canvas();
          const canvas = await html2canvas(chart.element, {
            scale: pixelRatio,
            backgroundColor: '#ffffff',
            logging: false
          });

          const imgWidth = pageWidth - margin * 2;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          const imgData = canvas.toDataURL('image/png');
          pdf.addImage(imgData, 'PNG', margin, currentY, imgWidth, imgHeight);
        } catch (error) {
          logger.error('Error adding chart to PDF:', error);
        }
      }
    }

    // Save the PDF
    pdf.save(`analytics-report-${exportData.student.name.replace(/\s+/g, '-').toLowerCase()}-${format(new Date(), 'yyyy-MM-dd')}.pdf`);
  }

  /**
   * Export analytics data to CSV format
   */
  exportToCSV(exportData: AnalyticsExportData): void {
    const csvSections: string[] = [];

    // Header Information
    csvSections.push('Analytics Report');
    csvSections.push(`Student Name,${exportData.student.name}`);
    csvSections.push(`Date Range,"${format(exportData.dateRange.start, 'MMM dd, yyyy')} - ${format(exportData.dateRange.end, 'MMM dd, yyyy')}"`);
    csvSections.push(`Generated,${format(new Date(), 'MMM dd, yyyy HH:mm')}`);
    csvSections.push('');

    // Summary
    csvSections.push('Summary');
    csvSections.push(`Total Sessions,${exportData.data.entries.length}`);
    csvSections.push(`Emotions Tracked,${exportData.data.emotions.length}`);
    csvSections.push(`Sensory Inputs,${exportData.data.sensoryInputs.length}`);
    csvSections.push(`Patterns Found,${exportData.analytics.patterns.length}`);
    csvSections.push(`Correlations,${exportData.analytics.correlations.length}`);
    csvSections.push('');

    // Emotion Data
    if (exportData.data.emotions.length > 0) {
      csvSections.push('Emotion Data');
      csvSections.push('Date,Time,Emotion,Intensity,Triggers,Notes');
      exportData.data.emotions.forEach(emotion => {
        csvSections.push(
          `${format(emotion.timestamp, 'yyyy-MM-dd')},${format(emotion.timestamp, 'HH:mm')},"${emotion.emotion}",${emotion.intensity},"${(emotion.triggers || []).join('; ')}","${emotion.notes || ''}"`
        );
      });
      csvSections.push('');
    }

    // Sensory Data
    if (exportData.data.sensoryInputs.length > 0) {
      csvSections.push('Sensory Input Data');
      csvSections.push('Date,Time,Type,Response,Intensity,Context,Notes');
      exportData.data.sensoryInputs.forEach(sensory => {
        const contextVal = (sensory as unknown as { context?: string }).context ?? '';
        const intensityVal = typeof sensory.intensity === 'number' ? sensory.intensity : '';
        csvSections.push(
          `${format(sensory.timestamp, 'yyyy-MM-dd')},${format(sensory.timestamp, 'HH:mm')},"${sensory.sensoryType}","${sensory.response}",${intensityVal},"${contextVal}","${sensory.notes || ''}"`
        );
      });
      csvSections.push('');
    }

    // Patterns
    if (exportData.analytics.patterns.length > 0) {
      csvSections.push('Behavioral Patterns');
      csvSections.push('Pattern,Type,Confidence,Frequency,Data Points,Description,Recommendations');
      exportData.analytics.patterns.forEach(pattern => {
        csvSections.push(
          `"${pattern.pattern}","${pattern.type}",${(pattern.confidence * 100).toFixed(1)}%,${pattern.frequency},${pattern.dataPoints},"${pattern.description}","${(pattern.recommendations || []).join('; ')}"`
        );
      });
      csvSections.push('');
    }

    // Correlations
    if (exportData.analytics.correlations.length > 0) {
      csvSections.push('Environmental Correlations');
      csvSections.push('Factor 1,Factor 2,Correlation,Significance,Description,Recommendations');
      exportData.analytics.correlations.forEach(correlation => {
        csvSections.push(
          `"${correlation.factor1}","${correlation.factor2}",${correlation.correlation.toFixed(3)},"${correlation.significance}","${correlation.description}","${(correlation.recommendations || []).join('; ')}"`
        );
      });
      csvSections.push('');
    }

    // Predictive Insights
    if (exportData.analytics.predictiveInsights && exportData.analytics.predictiveInsights.length > 0) {
      csvSections.push('Predictive Insights');
      csvSections.push('Title,Confidence,Severity,Description,Trend,Recommendations');
      exportData.analytics.predictiveInsights.forEach(insight => {
        csvSections.push(
          `"${insight.title}",${(insight.confidence * 100).toFixed(1)}%,"${insight.severity || 'N/A'}","${insight.description}","${insight.prediction?.trend || 'N/A'}","${(insight.recommendations || []).join('; ')}"`
        );
      });
    }

    // Create and download CSV
    const csvContent = csvSections.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const filename = `analytics-report-${exportData.student.name.replace(/\s+/g, '-').toLowerCase()}-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    
    downloadBlob(blob, filename);
  }

  /**
   * Export analytics data to JSON format
   */
  exportToJSON(exportData: AnalyticsExportData): void {
    const jsonData = {
      metadata: {
        studentName: exportData.student.name,
        studentId: exportData.student.id,
        dateRange: {
          start: exportData.dateRange.start.toISOString(),
          end: exportData.dateRange.end.toISOString()
        },
        generatedAt: new Date().toISOString(),
        version: '1.0.0'
      },
      summary: {
        totalSessions: exportData.data.entries.length,
        totalEmotions: exportData.data.emotions.length,
        totalSensoryInputs: exportData.data.sensoryInputs.length,
        totalPatterns: exportData.analytics.patterns.length,
        totalCorrelations: exportData.analytics.correlations.length
      },
      data: {
        emotions: exportData.data.emotions.map(emotion => ({
          id: emotion.id,
          timestamp: emotion.timestamp.toISOString(),
          emotion: emotion.emotion,
          intensity: emotion.intensity,
          triggers: emotion.triggers || [],
          notes: emotion.notes || null
        })),
        sensoryInputs: exportData.data.sensoryInputs.map(sensory => {
          const withOptional = sensory as unknown as { context?: string; intensity?: number | null };
          return {
            id: sensory.id,
            timestamp: sensory.timestamp.toISOString(),
            sensoryType: sensory.sensoryType,
            response: sensory.response,
            intensity: typeof sensory.intensity === 'number' ? sensory.intensity : null,
            context: withOptional.context ?? null,
            notes: sensory.notes || null
          };
        }),
        trackingEntries: exportData.data.entries.map(entry => ({
          id: entry.id,
          timestamp: entry.timestamp.toISOString(),
          emotionCount: entry.emotions.length,
          sensoryCount: entry.sensoryInputs.length,
          environmentalData: entry.environmentalData || null
        }))
      },
      analytics: {
        patterns: exportData.analytics.patterns.map(pattern => ({
          pattern: pattern.pattern,
          type: pattern.type,
          confidence: pattern.confidence,
          frequency: pattern.frequency,
          dataPoints: pattern.dataPoints,
          description: pattern.description,
          recommendations: pattern.recommendations || []
        })),
        correlations: exportData.analytics.correlations.map(correlation => ({
          factor1: correlation.factor1,
          factor2: correlation.factor2,
          correlation: correlation.correlation,
          significance: correlation.significance,
          description: correlation.description,
          recommendations: correlation.recommendations || []
        })),
        insights: exportData.analytics.insights,
        predictiveInsights: exportData.analytics.predictiveInsights?.map(insight => ({
          title: insight.title,
          description: insight.description,
          confidence: insight.confidence,
          severity: insight.severity || null,
          prediction: insight.prediction ? {
            trend: insight.prediction.trend,
            accuracy: insight.prediction.accuracy || null
          } : null,
          recommendations: insight.recommendations || []
        })) || [],
        anomalies: exportData.analytics.anomalies?.map(anomaly => ({
          type: anomaly.type,
          severity: anomaly.severity,
          timestamp: anomaly.timestamp.toISOString(),
          description: anomaly.description || null
        })) || []
      }
    };

    // Create and download JSON
    const jsonString = JSON.stringify(jsonData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8;' });
    const filename = `analytics-report-${exportData.student.name.replace(/\s+/g, '-').toLowerCase()}-${format(new Date(), 'yyyy-MM-dd')}.json`;
    
    downloadBlob(blob, filename);
  }
}

export const analyticsExport = new AnalyticsExport();