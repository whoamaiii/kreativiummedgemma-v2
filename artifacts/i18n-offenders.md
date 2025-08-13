# i18n Offenders Report

Generated: 8/13/2025, 6:50:46 AM

Found 1022 potential offenders across 86 files.

Key convention: feature.section.purpose — prefer nouns and verbs in present tense.

## Namespace: analytics

### src/components/AnalyticsConfigTest.tsx
- [243:11] (JSXText) `Analytics Configuration Tests` → key: `analytics.analyticsconfigtest.analytics_configuration_tests` — Static JSX text node
  - context: `"flex items-center gap-2"> <Settings className="h-5 w-5" /> Analytics Configuration Tests </CardTitle> <CardDescription>`
- [246:11] (JSXText) `Verify that configuration changes and cache invalidation work correctly` → key: `analytics.analyticsconfigtest.verify_that_configuration_changes_and` — Static JSX text node
  - context: `cs Configuration Tests </CardTitle> <CardDescription> Verify that configuration changes and cache invalidation work correctly`
- [252:58] (JSXText) `Current Configuration` → key: `analytics.analyticsconfigtest.current_configuration` — Static JSX text node
  - context: `className="space-y-1"> <p className="text-sm text-muted-foreground">Current Configuration</p> <div className="flex gap-2">`
- [255:17] (JSXText) `Alert Level:` → key: `analytics.analyticsconfigtest.alert_level` — Static JSX text node
  - context: `className="flex gap-2"> <Badge variant="outline"> Alert Level: {currentConfig.alertSensitivity.level} </Badge>`
- [258:17] (JSXText) `Min Data Points:` → key: `analytics.analyticsconfigtest.min_data_points` — Static JSX text node
  - context: `</Badge> <Badge variant="outline"> Min Data Points: {currentConfig.patternAnalysis.minDataPoints} </B`
- [261:17] (JSXText) `Cache Size:` → key: `analytics.analyticsconfigtest.cache_size` — Static JSX text node
  - context: `</Badge> <Badge variant="outline"> Cache Size: {cacheSize} </Badge> </div> </di`
- [267:13] (JSXText) `Run Tests` → key: `analytics.analyticsconfigtest.run_tests` — Static JSX text node
  - context: `items-center gap-2"> <RefreshCw className="h-4 w-4" /> Run Tests </Button> </div> {testResults.length > 0 &&`
- [273:49] (JSXText) `Test Results` → key: `analytics.analyticsconfigtest.test_results` — Static JSX text node
  - context: `<div className="space-y-2"> <h4 className="text-sm font-medium">Test Results</h4> {testResults.map((result, index) => (`
- [293:61] (JSXText) `Quick Actions` → key: `analytics.analyticsconfigtest.quick_actions` — Static JSX text node
  - context: `me="pt-4 border-t"> <p className="text-sm text-muted-foreground mb-2">Quick Actions</p> <div className="flex flex-wrap gap-2"> <`
- [300:15] (JSXText) `Set Conservative` → key: `analytics.analyticsconfigtest.set_conservative` — Static JSX text node
  - context: `k={() => analyticsConfig.setPreset('conservative')} > Set Conservative </Button> <Button size="s`
- [307:15] (JSXText) `Set Sensitive` → key: `analytics.analyticsconfigtest.set_sensitive` — Static JSX text node
  - context: `lick={() => analyticsConfig.setPreset('sensitive')} > Set Sensitive </Button> <Button size="sm"`
- [314:15] (JSXText) `Reset to Defaults` → key: `analytics.analyticsconfigtest.reset_to_defaults` — Static JSX text node
  - context: `onClick={() => analyticsConfig.resetToDefaults()} > Reset to Defaults </Button> <Button size="`
- [321:15] (JSXText) `Clear Cache` → key: `analytics.analyticsconfigtest.clear_cache` — Static JSX text node
  - context: `ariant="outline" onClick={clearCache} > Clear Cache </Button> </div> </div> </CardCo`

### src/components/AnalyticsDashboard.tsx
- [97:24] (MessageAPI) `Error coercing timestamp:` → key: `analytics.analyticsdashboard.error_coercing_timestamp` — Message API call: error()
  - context: `} return new Date(); } catch (error) { logger.error('Error coercing timestamp:', v, error); return new Date(); }`
- [109:22] (MessageAPI) `Error normalizing filteredData:` → key: `analytics.analyticsdashboard.error_normalizing_filtereddata` — Message API call: error()
  - context: `oerce(s.timestamp) })), }; } catch (error) { logger.error('Error normalizing filteredData:', error); return { entries: [`
- [184:25] (MessageAPI) `PDF report exported successfully` → key: `analytics.analyticsdashboard.pdf_report_exported_successfully` — Message API call: success()
  - context: `await analyticsExport.exportToPDF(exportData); toast.success('PDF report exported successfully'); break; case 'csv':`
- [184:25] (MessageAPI) `PDF report exported successfully` → key: `analytics.analyticsdashboard.pdf_report_exported_successfully` — sonner toast.success()
  - context: `await analyticsExport.exportToPDF(exportData); toast.success('PDF report exported successfully'); break; case 'csv':`
- [188:25] (MessageAPI) `CSV data exported successfully` → key: `analytics.analyticsdashboard.csv_data_exported_successfully` — Message API call: success()
  - context: `sv': analyticsExport.exportToCSV(exportData); toast.success('CSV data exported successfully'); break; case 'json':`
- [188:25] (MessageAPI) `CSV data exported successfully` → key: `analytics.analyticsdashboard.csv_data_exported_successfully` — sonner toast.success()
  - context: `sv': analyticsExport.exportToCSV(exportData); toast.success('CSV data exported successfully'); break; case 'json':`
- [192:25] (MessageAPI) `JSON data exported successfully` → key: `analytics.analyticsdashboard.json_data_exported_successfully` — Message API call: success()
  - context: `n': analyticsExport.exportToJSON(exportData); toast.success('JSON data exported successfully'); break; } } catch (error)`
- [192:25] (MessageAPI) `JSON data exported successfully` → key: `analytics.analyticsdashboard.json_data_exported_successfully` — sonner toast.success()
  - context: `n': analyticsExport.exportToJSON(exportData); toast.success('JSON data exported successfully'); break; } } catch (error)`
- [196:20] (MessageAPI) `Export failed:` → key: `analytics.analyticsdashboard.export_failed` — Message API call: error()
  - context: `ccessfully'); break; } } catch (error) { logger.error('Export failed:', error); toast.error('Failed to export analytics data');`
- [197:19] (MessageAPI) `Failed to export analytics data` → key: `analytics.analyticsdashboard.failed_to_export_analytics_data` — Message API call: error()
  - context: `catch (error) { logger.error('Export failed:', error); toast.error('Failed to export analytics data'); } finally { setIsExporting(false);`
- [197:19] (MessageAPI) `Failed to export analytics data` → key: `analytics.analyticsdashboard.failed_to_export_analytics_data` — sonner toast.error()
  - context: `catch (error) { logger.error('Export failed:', error); toast.error('Failed to export analytics data'); } finally { setIsExporting(false);`
- [228:22] (JSXText) `Analytics Dashboard -` → key: `analytics.analyticsdashboard.analytics_dashboard` — Static JSX text node
  - context: `er className="flex flex-row items-center justify-between"> <CardTitle>Analytics Dashboard - {student.name}</CardTitle> <div className="flex`
- [251:19] (JSXText) `Export as PDF` → key: `analytics.analyticsdashboard.export_as_pdf` — Static JSX text node
  - context: `> <FileText className="h-4 w-4 mr-2" /> Export as PDF </DropdownMenuItem> <DropdownMenuI`
- [258:19] (JSXText) `Export as CSV` → key: `analytics.analyticsdashboard.export_as_csv` — Static JSX text node
  - context: `<FileSpreadsheet className="h-4 w-4 mr-2" /> Export as CSV </DropdownMenuItem> <DropdownMenuI`
- [265:19] (JSXText) `Export as JSON` → key: `analytics.analyticsdashboard.export_as_json` — Static JSX text node
  - context: `> <FileJson className="h-4 w-4 mr-2" /> Export as JSON </DropdownMenuItem> </DropdownMenuC`
- [279:74] (JSXText) `Total Sessions` → key: `analytics.analyticsdashboard.total_sessions` — Static JSX text node
  - context: `<div> <p className="text-sm font-medium text-muted-foreground">Total Sessions</p> <p className="text-2xl font-bold">{filteredDa`
- [315:74] (JSXText) `Patterns Found` → key: `analytics.analyticsdashboard.patterns_found` — Static JSX text node
  - context: `<div> <p className="text-sm font-medium text-muted-foreground">Patterns Found</p> <p className="text-2xl font-bold">{patterns.l`
- [327:58] (JSXAttribute) `Charts tab` → key: `analytics.analyticsdashboard.charts_tab` — Static aria-label attribute
  - context: `d w-full grid-cols-4"> <TabsTrigger value="visualizations" aria-label="Charts tab">Charts</TabsTrigger> <TabsTrigger value="patterns">Patter`
- [335:111] (JSXAttribute) `Loading visualization` → key: `analytics.analyticsdashboard.loading_visualization` — Static aria-label attribute
  - context: `={<div className="h-[360px] rounded-xl border bg-card animate-pulse" aria-label="Loading visualization" /> }> <LazyInteractiveDataVisualization`
- [349:26] (JSXText) `Behavioral Patterns` → key: `analytics.analyticsdashboard.behavioral_patterns` — Static JSX text node
  - context: `lassName="flex flex-row items-center justify-between"> <CardTitle>Behavioral Patterns</CardTitle> <Button variant="`
- [363:23] (JSXText) `Analyzing data...` → key: `analytics.analyticsdashboard.analyzing_data` — Static JSX text node
  - context: `sName="h-12 w-12 mx-auto mb-4 animate-spin opacity-50" /> <p>Analyzing data...</p> </div> )} {!i`
- [374:22] (JSXText) `No significant patterns detected yet.` → key: `analytics.analyticsdashboard.no_significant_patterns_detected_yet` — Static JSX text node
  - context: `<Clock className="h-12 w-12 mx-auto mb-4 opacity-50" /> <p>No significant patterns detected yet.</p> <p className="text-s`
- [375:42] (JSXText) `More data may be needed for pattern analysis.` → key: `analytics.analyticsdashboard.more_data_may_be_needed` — Static JSX text node
  - context: `significant patterns detected yet.</p> <p className="text-sm">More data may be needed for pattern analysis.</p> </div>`
- [396:48] (JSXAttribute) `Vis forklaringen` → key: `analytics.analyticsdashboard.vis_forklaringen` — Static aria-label attribute
  - context: `<button aria-label="Vis forklaringen" className="inline-flex it`
- [400:37] (JSXText) `Vis forklaringen` → key: `analytics.analyticsdashboard.vis_forklaringen` — Static JSX text node
  - context: `<Info className="h-3 w-3" /> Vis forklaringen </button>`
- [404:67] (JSXText) `Hva betyr dette mønsteret?` → key: `analytics.analyticsdashboard.hva_betyr_dette_m_nsteret` — Static JSX text node
  - context: `ing-relaxed"> <p className="mb-1 font-medium">Hva betyr dette mønsteret?</p> <p className="t`
- [409:37] (JSXText) `Tolk alltid sammen med kontekst og pedagogisk vurdering.` → key: `analytics.analyticsdashboard.tolk_alltid_sammen_med_kontekst` — Static JSX text node
  - context: `me="mt-2 text-xs text-muted-foreground/80"> Tolk alltid sammen med kontekst og pedagogisk vurdering.`
- [423:72] (JSXText) `•` → key: `analytics.analyticsdashboard.` — Static JSX text node
  - context: `gap-2"> <span className="text-primary">•</span> <span>{rec}</span>`
- [434:69] (JSXText) `% confidence` → key: `analytics.analyticsdashboard.confidence` — Static JSX text node
  - context: `nfidence)}> {Math.round(pattern.confidence * 100)}% confidence </Badge> <p`
- [437:52] (JSXText) `data points` → key: `analytics.analyticsdashboard.data_points` — Static JSX text node
  - context: `text-muted-foreground mt-1"> {pattern.dataPoints} data points </p> </div>`
- [452:26] (JSXText) `AI-Generated Insights` → key: `analytics.analyticsdashboard.ai_generated_insights` — Static JSX text node
  - context: `Section */} <Card> <CardHeader> <CardTitle>AI-Generated Insights</CardTitle> </CardHeader> <CardCon`
- [455:68] (JSXText) `Generating insights...` → key: `analytics.analyticsdashboard.generating_insights` — Static JSX text node
  - context: `CardContent> {isAnalyzing && <p className="text-muted-foreground">Generating insights...</p>} {!isAnalyzing && insights.length === 0`
- [457:54] (JSXText) `No insights available yet.` → key: `analytics.analyticsdashboard.no_insights_available_yet` — Static JSX text node
  - context: `insights.length === 0 && ( <p className="text-muted-foreground">No insights available yet.</p> )} {!isAnalyzing && i`
- [476:75] (JSXText) `Correlation Heatmap` → key: `analytics.analyticsdashboard.correlation_heatmap` — Static JSX text node
  - context: `<div> <CardTitle data-testid="environmental-correlations-title">Correlation Heatmap</CardTitle> <p className="text-sm text-muted`
- [477:62] (JSXText) `Strength of relationships between tracked factors (−1 to 1)` → key: `analytics.analyticsdashboard.strength_of_relationships_between_tracked` — Static JSX text node
  - context: `eatmap</CardTitle> <p className="text-sm text-muted-foreground">Strength of relationships between tracked factors (−1 to 1)</p> </`
- [481:38] (JSXAttribute) `Hvordan lese varmekartet` → key: `analytics.analyticsdashboard.hvordan_lese_varmekartet` — Static aria-label attribute
  - context: `<HoverCardTrigger asChild> <button aria-label="Hvordan lese varmekartet" className="inline-flex items-center gap-2 rounded-ful`
- [483:21] (JSXText) `Hvordan lese varmekartet` → key: `analytics.analyticsdashboard.hvordan_lese_varmekartet` — Static JSX text node
  - context: `ccent/30"> <Info className="h-4 w-4" /> Hvordan lese varmekartet </button> </HoverCard`
- [488:21] (JSXText) `Farger viser korrelasjon: grønn = positiv sammenheng, rød = negativ. Tall nær 1 eller −1 betyr sterkere samband.
                    Akser viser faktorer. Hold musepekeren over en celle for detaljer og signifikans.` → key: `analytics.analyticsdashboard.farger_viser_korrelasjon_gr_nn` — Static JSX text node
  - context: `sName="w-80 text-sm leading-relaxed"> <p> Farger viser korrelasjon: grønn = positiv sammenheng, rød = negativ. Tall nær 1`
- [498:22] (JSXText) `Analyzing correlations...` → key: `analytics.analyticsdashboard.analyzing_correlations` — Static JSX text node
  - context: `ssName="h-12 w-12 mx-auto mb-4 animate-spin opacity-50" /> <p>Analyzing correlations...</p> </div> )}`
- [535:26] (JSXText) `No significant correlations found.` → key: `analytics.analyticsdashboard.no_significant_correlations_found` — Static JSX text node
  - context: `hart3 className="h-12 w-12 mx-auto mb-4 opacity-50" /> <p>No significant correlations found.</p> <p className="text-`
- [536:46] (JSXText) `More varied environmental data may be needed.` → key: `analytics.analyticsdashboard.more_varied_environmental_data_may` — Static JSX text node
  - context: `ignificant correlations found.</p> <p className="text-sm">More varied environmental data may be needed.</p> </div>`
- [548:55] (JSXText) `↔` → key: `analytics.analyticsdashboard.` — Static JSX text node
  - context: `-medium text-foreground"> {correlation.factor1} ↔ {correlation.factor2} </h4>`
- [559:33] (JSXText) `r =` → key: `analytics.analyticsdashboard.r` — Static JSX text node
  - context: `className="text-xs text-muted-foreground mt-1"> r = {typeof (correlation as CorrelationResult & {correlation?: number}).correlat`
- [619:23] (MessageAPI) `Error comparing timestamps in AnalyticsDashboard memo:` → key: `analytics.analyticsdashboard.error_comparing_timestamps_in_analyticsdashboard` — Message API call: error()
  - context: `return prevTime === nextTime; } catch (error) { logger.error('Error comparing timestamps in AnalyticsDashboard memo:', error); retur`

### src/components/AnalyticsSettings.tsx
- [73:20] (MessageAPI) `Failed to load ML model status` → key: `analytics.analyticssettings.failed_to_load_ml_model` — Message API call: error()
  - context: `tatus(); setModelStatus(status); } catch (error) { logger.error('Failed to load ML model status', { error }); toast.error("Failed to load`
- [74:19] (MessageAPI) `Failed to load ML models: Could not retrieve model status. Some features may be unavailable.` → key: `analytics.analyticssettings.failed_to_load_ml_models` — Message API call: error()
  - context: `logger.error('Failed to load ML model status', { error }); toast.error("Failed to load ML models: Could not retrieve model status. Some features may be`
- [74:19] (MessageAPI) `Failed to load ML models: Could not retrieve model status. Some features may be unavailable.` → key: `analytics.analyticssettings.failed_to_load_ml_models` — sonner toast.error()
  - context: `logger.error('Failed to load ML model status', { error }); toast.error("Failed to load ML models: Could not retrieve model status. Some features may be`
- [129:19] (MessageAPI) `Analytics configuration has been updated` → key: `analytics.analyticssettings.analytics_configuration_has_been_updated` — Message API call: success()
  - context: `Config.updateConfig(config); setHasUnsavedChanges(false); toast.success("Analytics configuration has been updated"); }; const handleReset = () => {`
- [129:19] (MessageAPI) `Analytics configuration has been updated` → key: `analytics.analyticssettings.analytics_configuration_has_been_updated` — sonner toast.success()
  - context: `Config.updateConfig(config); setHasUnsavedChanges(false); toast.success("Analytics configuration has been updated"); }; const handleReset = () => {`
- [136:19] (MessageAPI) `Settings have been reset to defaults` → key: `analytics.analyticssettings.settings_have_been_reset_to` — Message API call: success()
  - context: `tSelectedPreset('balanced'); setHasUnsavedChanges(false); toast.success("Settings have been reset to defaults"); }; const handleExport = () => {`
- [136:19] (MessageAPI) `Settings have been reset to defaults` → key: `analytics.analyticssettings.settings_have_been_reset_to` — sonner toast.success()
  - context: `tSelectedPreset('balanced'); setHasUnsavedChanges(false); toast.success("Settings have been reset to defaults"); }; const handleExport = () => {`
- [151:19] (MessageAPI) `Configuration saved to analytics-config.json` → key: `analytics.analyticssettings.configuration_saved_to_analytics_config` — Message API call: success()
  - context: `ument.body.removeChild(a); URL.revokeObjectURL(url); toast.success("Configuration saved to analytics-config.json"); }; const handleImport = (e`
- [151:19] (MessageAPI) `Configuration saved to analytics-config.json` → key: `analytics.analyticssettings.configuration_saved_to_analytics_config` — sonner toast.success()
  - context: `ument.body.removeChild(a); URL.revokeObjectURL(url); toast.success("Configuration saved to analytics-config.json"); }; const handleImport = (e`
- [164:25] (MessageAPI) `Successfully imported configuration` → key: `analytics.analyticssettings.successfully_imported_configuration` — Message API call: success()
  - context: `nfig(content)) { setHasUnsavedChanges(false); toast.success("Successfully imported configuration"); } else { toast.error("`
- [164:25] (MessageAPI) `Successfully imported configuration` → key: `analytics.analyticssettings.successfully_imported_configuration` — sonner toast.success()
  - context: `nfig(content)) { setHasUnsavedChanges(false); toast.success("Successfully imported configuration"); } else { toast.error("`
- [166:23] (MessageAPI) `Invalid configuration file` → key: `analytics.analyticssettings.invalid_configuration_file` — Message API call: error()
  - context: `("Successfully imported configuration"); } else { toast.error("Invalid configuration file"); } } catch (_error) { toast.`
- [166:23] (MessageAPI) `Invalid configuration file` → key: `analytics.analyticssettings.invalid_configuration_file` — sonner toast.error()
  - context: `("Successfully imported configuration"); } else { toast.error("Invalid configuration file"); } } catch (_error) { toast.`
- [169:21] (MessageAPI) `Failed to read configuration file` → key: `analytics.analyticssettings.failed_to_read_configuration_file` — Message API call: error()
  - context: `id configuration file"); } } catch (_error) { toast.error("Failed to read configuration file"); } }; reader.readAsText(file)`
- [169:21] (MessageAPI) `Failed to read configuration file` → key: `analytics.analyticssettings.failed_to_read_configuration_file` — sonner toast.error()
  - context: `id configuration file"); } } catch (_error) { toast.error("Failed to read configuration file"); } }; reader.readAsText(file)`
- [197:19] (MessageAPI) `Failed to delete model` → key: `analytics.analyticssettings.failed_to_delete_model` — Message API call: error()
  - context: `${modelType} model has been removed\`); } catch (_error) { toast.error("Failed to delete model"); } finally { setIsDeletingModel(null); }`
- [197:19] (MessageAPI) `Failed to delete model` → key: `analytics.analyticssettings.failed_to_delete_model` — sonner toast.error()
  - context: `${modelType} model has been removed\`); } catch (_error) { toast.error("Failed to delete model"); } finally { setIsDeletingModel(null); }`
- [241:13] (JSXText) `Analytics Configuration` → key: `analytics.analyticssettings.analytics_configuration` — Static JSX text node
  - context: `x items-center gap-2"> <Settings className="h-5 w-5" /> Analytics Configuration </DialogTitle> <DialogDescription>`
- [244:13] (JSXText) `Customize analytics parameters to adjust sensitivity and thresholds` → key: `analytics.analyticssettings.customize_analytics_parameters_to_adjust` — Static JSX text node
  - context: `onfiguration </DialogTitle> <DialogDescription> Customize analytics parameters to adjust sensitivity and thresholds </`
- [252:46] (JSXText) `Preset Configurations` → key: `analytics.analyticssettings.preset_configurations` — Static JSX text node
  - context: `<Card> <CardHeader> <CardTitle className="text-lg">Preset Configurations</CardTitle> <CardDescription>`
- [254:17] (JSXText) `Choose a preset configuration or customize your own` → key: `analytics.analyticssettings.choose_a_preset_configuration_or` — Static JSX text node
  - context: `eset Configurations</CardTitle> <CardDescription> Choose a preset configuration or customize your own </CardDescript`
- [270:23] (JSXText) `Higher thresholds, fewer alerts` → key: `analytics.analyticssettings.higher_thresholds_fewer_alerts` — Static JSX text node
  - context: `<p className="text-sm text-muted-foreground"> Higher thresholds, fewer alerts </p> </Lab`
- [284:23] (JSXText) `Default settings, balanced sensitivity` → key: `analytics.analyticssettings.default_settings_balanced_sensitivity` — Static JSX text node
  - context: `<p className="text-sm text-muted-foreground"> Default settings, balanced sensitivity </p>`
- [298:23] (JSXText) `Lower thresholds, more alerts` → key: `analytics.analyticssettings.lower_thresholds_more_alerts` — Static JSX text node
  - context: `<p className="text-sm text-muted-foreground"> Lower thresholds, more alerts </p> </Label`
- [311:48] (JSXText) `Time Windows` → key: `analytics.analyticssettings.time_windows` — Static JSX text node
  - context: `ivity">Sensitivity</TabsTrigger> <TabsTrigger value="timewindows">Time Windows</TabsTrigger> <TabsTrigger value="mlmodels">ML Models`
- [312:45] (JSXText) `ML Models` → key: `analytics.analyticssettings.ml_models` — Static JSX text node
  - context: `windows">Time Windows</TabsTrigger> <TabsTrigger value="mlmodels">ML Models</TabsTrigger> <TabsTrigger value="advanced">Advanced</Ta`
- [319:52] (JSXText) `Pattern Analysis Thresholds` → key: `analytics.analyticssettings.pattern_analysis_thresholds` — Static JSX text node
  - context: `<CardHeader> <CardTitle className="text-base">Pattern Analysis Thresholds</CardTitle> <CardDescription>`
- [321:21] (JSXText) `Adjust minimum requirements and thresholds for pattern detection` → key: `analytics.analyticssettings.adjust_minimum_requirements_and_thresholds` — Static JSX text node
  - context: `Thresholds</CardTitle> <CardDescription> Adjust minimum requirements and thresholds for pattern detection`
- [327:54] (JSXText) `Minimum Data Points` → key: `analytics.analyticssettings.minimum_data_points` — Static JSX text node
  - context: `sName="flex items-center"> <Label htmlFor="minDataPoints">Minimum Data Points</Label> {renderTooltip("Minimum number`
- [346:61] (JSXText) `Correlation Threshold` → key: `analytics.analyticssettings.correlation_threshold` — Static JSX text node
  - context: `flex items-center"> <Label htmlFor="correlationThreshold">Correlation Threshold</Label> {renderTooltip("Minimum corr`
- [365:57] (JSXText) `Concern Frequency Threshold` → key: `analytics.analyticssettings.concern_frequency_threshold` — Static JSX text node
  - context: `me="flex items-center"> <Label htmlFor="concernFrequency">Concern Frequency Threshold</Label> {renderTooltip("Percen`
- [386:52] (JSXText) `Enhanced Analysis Thresholds` → key: `analytics.analyticssettings.enhanced_analysis_thresholds` — Static JSX text node
  - context: `<CardHeader> <CardTitle className="text-base">Enhanced Analysis Thresholds</CardTitle> <CardDescription>`
- [388:21] (JSXText) `Configure advanced pattern detection and anomaly thresholds` → key: `analytics.analyticssettings.configure_advanced_pattern_detection_and` — Static JSX text node
  - context: `Thresholds</CardTitle> <CardDescription> Configure advanced pattern detection and anomaly thresholds </`
- [394:57] (JSXText) `Anomaly Detection Sensitivity` → key: `analytics.analyticssettings.anomaly_detection_sensitivity` — Static JSX text node
  - context: `me="flex items-center"> <Label htmlFor="anomalyThreshold">Anomaly Detection Sensitivity</Label> {renderTooltip("Numb`
- [407:110] (JSXText) `σ` → key: `analytics.analyticssettings.` — Static JSX text node
  - context: `lassName="w-12 text-right">{config.enhancedAnalysis.anomalyThreshold.toFixed(2)}σ</span> </div> </div>`
- [413:54] (JSXText) `Minimum Sample Size` → key: `analytics.analyticssettings.minimum_sample_size` — Static JSX text node
  - context: `sName="flex items-center"> <Label htmlFor="minSampleSize">Minimum Sample Size</Label> {renderTooltip("Minimum data p`
- [436:52] (JSXText) `Alert Sensitivity` → key: `analytics.analyticssettings.alert_sensitivity` — Static JSX text node
  - context: `<CardHeader> <CardTitle className="text-base">Alert Sensitivity</CardTitle> <CardDescription>`
- [438:21] (JSXText) `Control how sensitive the system is to potential issues` → key: `analytics.analyticssettings.control_how_sensitive_the_system` — Static JSX text node
  - context: `Sensitivity</CardTitle> <CardDescription> Control how sensitive the system is to potential issues </Card`
- [450:54] (JSXText) `Low Sensitivity` → key: `analytics.analyticssettings.low_sensitivity` — Static JSX text node
  - context: `<div> <p className="font-medium">Low Sensitivity</p> <p className="text-sm text-muted-f`
- [452:29] (JSXText) `Only alert for significant patterns with high confidence` → key: `analytics.analyticssettings.only_alert_for_significant_patterns` — Static JSX text node
  - context: `<p className="text-sm text-muted-foreground"> Only alert for significant patterns with high confidence`
- [460:54] (JSXText) `Medium Sensitivity` → key: `analytics.analyticssettings.medium_sensitivity` — Static JSX text node
  - context: `<div> <p className="font-medium">Medium Sensitivity</p> <p className="text-sm text-mute`
- [462:29] (JSXText) `Balanced approach to pattern detection and alerts` → key: `analytics.analyticssettings.balanced_approach_to_pattern_detection` — Static JSX text node
  - context: `<p className="text-sm text-muted-foreground"> Balanced approach to pattern detection and alerts </p>`
- [470:54] (JSXText) `High Sensitivity` → key: `analytics.analyticssettings.high_sensitivity` — Static JSX text node
  - context: `<div> <p className="font-medium">High Sensitivity</p> <p className="text-sm text-muted-`
- [472:29] (JSXText) `Alert for subtle patterns and potential concerns early` → key: `analytics.analyticssettings.alert_for_subtle_patterns_and` — Static JSX text node
  - context: `<p className="text-sm text-muted-foreground"> Alert for subtle patterns and potential concerns early`
- [480:78] (JSXText) `Current Multipliers:` → key: `analytics.analyticssettings.current_multipliers` — Static JSX text node
  - context: `"> <p className="text-sm font-medium text-muted-foreground">Current Multipliers:</p> <div className="grid grid-cols-3 ga`
- [494:52] (JSXText) `Analysis Time Windows` → key: `analytics.analyticssettings.analysis_time_windows` — Static JSX text node
  - context: `<CardHeader> <CardTitle className="text-base">Analysis Time Windows</CardTitle> <CardDescription>`
- [496:21] (JSXText) `Configure the time periods used for different analyses` → key: `analytics.analyticssettings.configure_the_time_periods_used` — Static JSX text node
  - context: `ime Windows</CardTitle> <CardDescription> Configure the time periods used for different analyses </CardD`
- [502:56] (JSXText) `Default Analysis Period` → key: `analytics.analyticssettings.default_analysis_period` — Static JSX text node
  - context: `ame="flex items-center"> <Label htmlFor="defaultAnalysis">Default Analysis Period</Label> {renderTooltip("Standard t`
- [521:51] (JSXText) `Recent Data Window` → key: `analytics.analyticssettings.recent_data_window` — Static JSX text node
  - context: `lassName="flex items-center"> <Label htmlFor="recentData">Recent Data Window</Label> {renderTooltip("Time window for`
- [540:49] (JSXText) `Long-term Analysis Window` → key: `analytics.analyticssettings.long_term_analysis_window` — Static JSX text node
  - context: `className="flex items-center"> <Label htmlFor="longTerm">Long-term Analysis Window</Label> {renderTooltip("Extended`
- [566:23] (JSXText) `Machine Learning Models` → key: `analytics.analyticssettings.machine_learning_models` — Static JSX text node
  - context: `p-2"> <Brain className="h-4 w-4" /> Machine Learning Models </span> <div cla`
- [569:83] (JSXText) `Enable ML` → key: `analytics.analyticssettings.enable_ml` — Static JSX text node
  - context: `<Label htmlFor="ml-enabled" className="text-sm font-normal">Enable ML</Label> <Switch id="ml-e`
- [578:21] (JSXText) `Manage AI-powered prediction models for enhanced analytics` → key: `analytics.analyticssettings.manage_ai_powered_prediction_models` — Static JSX text node
  - context: `</CardTitle> <CardDescription> Manage AI-powered prediction models for enhanced analytics </C`
- [586:68] (JSXText) `Loading ML models...` → key: `analytics.analyticssettings.loading_ml_models` — Static JSX text node
  - context: `reground" /> <span className="ml-2 text-muted-foreground">Loading ML models...</span> </div> ) : (`
- [615:70] (JSXText) `Last Trained` → key: `analytics.analyticssettings.last_trained` — Static JSX text node
  - context: `<div> <p className="text-muted-foreground">Last Trained</p> <p className="font-medium">`
- [627:70] (JSXText) `Data Points` → key: `analytics.analyticssettings.data_points` — Static JSX text node
  - context: `<div> <p className="text-muted-foreground">Data Points</p> <p className="font-medium">{mode`
- [635:75] (JSXText) `Model Performance` → key: `analytics.analyticssettings.model_performance` — Static JSX text node
  - context: `-sm"> <span className="text-muted-foreground">Model Performance</span> <span>{(model.accurac`
- [681:31] (JSXText) `No model trained yet. Model will be trained automatically when sufficient data is available.` → key: `analytics.analyticssettings.no_model_trained_yet_model` — Static JSX text node
  - context: `p className="text-sm text-muted-foreground mb-3"> No model trained yet. Model will be trained automatically when sufficient data i`
- [697:35] (JSXText) `Train Model` → key: `analytics.analyticssettings.train_model` — Static JSX text node
  - context: `<Brain className="h-3 w-3 mr-1" /> Train Model </> )}`
- [711:23] (JSXText) `About Machine Learning` → key: `analytics.analyticssettings.about_machine_learning` — Static JSX text node
  - context: `ap-2"> <Info className="h-4 w-4" /> About Machine Learning </h5> <p classNam`
- [714:23] (JSXText) `ML models enhance predictions by learning from historical patterns. They require:` → key: `analytics.analyticssettings.ml_models_enhance_predictions_by` — Static JSX text node
  - context: `<p className="text-sm text-muted-foreground"> ML models enhance predictions by learning from historical patterns. They require`
- [717:27] (JSXText) `• Emotion prediction: 7+ days of data` → key: `analytics.analyticssettings.emotion_prediction_7_days_of` — Static JSX text node
  - context: `sName="text-sm text-muted-foreground space-y-1 ml-4"> <li>• Emotion prediction: 7+ days of data</li> <li>• Sensory r`
- [718:27] (JSXText) `• Sensory response: 10+ tracking sessions` → key: `analytics.analyticssettings.sensory_response_10_tracking_sessions` — Static JSX text node
  - context: `<li>• Emotion prediction: 7+ days of data</li> <li>• Sensory response: 10+ tracking sessions</li> <li>• Basel`
- [719:27] (JSXText) `• Baseline clustering: 10+ tracking entries` → key: `analytics.analyticssettings.baseline_clustering_10_tracking_entries` — Static JSX text node
  - context: `<li>• Sensory response: 10+ tracking sessions</li> <li>• Baseline clustering: 10+ tracking entries</li> </ul>`
- [722:23] (JSXText) `Models are trained locally in your browser and improve over time as more data is collected.` → key: `analytics.analyticssettings.models_are_trained_locally_in` — Static JSX text node
  - context: `<p className="text-sm text-muted-foreground"> Models are trained locally in your browser and improve over time as more data is`
- [734:52] (JSXText) `Cache Settings` → key: `analytics.analyticssettings.cache_settings` — Static JSX text node
  - context: `<CardHeader> <CardTitle className="text-base">Cache Settings</CardTitle> <CardDescription>`
- [736:21] (JSXText) `Configure performance optimization settings` → key: `analytics.analyticssettings.configure_performance_optimization_settings` — Static JSX text node
  - context: `he Settings</CardTitle> <CardDescription> Configure performance optimization settings </CardDescription>`
- [742:49] (JSXText) `Cache Duration` → key: `analytics.analyticssettings.cache_duration` — Static JSX text node
  - context: `className="flex items-center"> <Label htmlFor="cacheTTL">Cache Duration</Label> {renderTooltip("How long to keep ca`
- [761:30] (JSXText) `Invalidate cache on config change` → key: `analytics.analyticssettings.invalidate_cache_on_config_change` — Static JSX text node
  - context: `<div className="flex items-center"> <Label>Invalidate cache on config change</Label> {renderTooltip("`
- [773:52] (JSXText) `Import/Export Configuration` → key: `analytics.analyticssettings.import_export_configuration` — Static JSX text node
  - context: `<CardHeader> <CardTitle className="text-base">Import/Export Configuration</CardTitle> <CardDescription>`
- [775:21] (JSXText) `Save and share your configuration settings` → key: `analytics.analyticssettings.save_and_share_your_configuration` — Static JSX text node
  - context: `nfiguration</CardTitle> <CardDescription> Save and share your configuration settings </CardDescription>`
- [785:21] (JSXText) `Export Config` → key: `analytics.analyticssettings.export_config` — Static JSX text node
  - context: `> <Download className="h-4 w-4" /> Export Config </Button> <`
- [796:25] (JSXText) `Import Config` → key: `analytics.analyticssettings.import_config` — Static JSX text node
  - context: `<Upload className="h-4 w-4" /> Import Config </span> </Button>`
- [820:15] (JSXText) `Reset to Defaults` → key: `analytics.analyticssettings.reset_to_defaults` — Static JSX text node
  - context: `-2" > <RotateCcw className="h-4 w-4" /> Reset to Defaults </Button> <div className=`
- [827:19] (JSXText) `Unsaved changes` → key: `analytics.analyticssettings.unsaved_changes` — Static JSX text node
  - context: `r-4"> <AlertTriangle className="h-4 w-4" /> Unsaved changes </p> )}`
- [844:17] (JSXText) `Save Changes` → key: `analytics.analyticssettings.save_changes` — Static JSX text node
  - context: `2" > <Save className="h-4 w-4" /> Save Changes </Button> </div> </div>`

### src/components/AnalyticsStatusIndicator.tsx
- [103:20] (MessageAPI) `Error refreshing analytics` → key: `analytics.analyticsstatusindicator.error_refreshing_analytics` — Message API call: error()
  - context: `; } loadAnalyticsStatus(); } catch (error) { logger.error('Error refreshing analytics', error); } finally { setIsRefreshing(fals`
- [155:13] (JSXText) `Analytics Status` → key: `analytics.analyticsstatusindicator.analytics_status` — Static JSX text node
  - context: `flex items-center gap-2"> <Brain className="h-5 w-5" /> Analytics Status {studentId && \` - ${analyticsStatus[0]?.studentName`
- [173:16] (JSXText) `No analytics data available` → key: `analytics.analyticsstatusindicator.no_analytics_data_available` — Static JSX text node
  - context: `<Activity className="h-8 w-8 mx-auto mb-2 opacity-50" /> <p>No analytics data available</p> </div> ) : ( <div cl`
- [192:27] (JSXText) `Data Available` → key: `analytics.analyticsstatusindicator.data_available` — Static JSX text node
  - context: `<BarChart3 className="h-3 w-3 mr-1" /> Data Available </Badge> ) : (`
- [197:27] (JSXText) `Collecting Data` → key: `analytics.analyticsstatusindicator.collecting_data` — Static JSX text node
  - context: `<Clock className="h-3 w-3 mr-1" /> Collecting Data </Badge> )}`
- [207:25] (JSXText) `Last updated:` → key: `analytics.analyticsstatusindicator.last_updated` — Static JSX text node
  - context: `{status.lastAnalyzed ? ( <> Last updated:<br /> {formatDistanceToNow(status.lastAnal`
- [220:66] (JSXText) `Active Analytics Systems:` → key: `analytics.analyticsstatusindicator.active_analytics_systems` — Static JSX text node
  - context: `order-border"> <h4 className="font-medium text-foreground mb-3">Active Analytics Systems:</h4> <div className="grid grid-cols-2`
- [224:21] (JSXText) `Pattern Analysis` → key: `analytics.analyticsstatusindicator.pattern_analysis` — Static JSX text node
  - context: `<CheckCircle className="h-4 w-4 text-green-600" /> Pattern Analysis </div> <div className="flex`
- [228:21] (JSXText) `Correlation Analysis` → key: `analytics.analyticsstatusindicator.correlation_analysis` — Static JSX text node
  - context: `<CheckCircle className="h-4 w-4 text-green-600" /> Correlation Analysis </div> <div className="`
- [232:21] (JSXText) `Predictive Insights` → key: `analytics.analyticsstatusindicator.predictive_insights` — Static JSX text node
  - context: `<CheckCircle className="h-4 w-4 text-green-600" /> Predictive Insights </div> <div className="f`
- [236:21] (JSXText) `Anomaly Detection` → key: `analytics.analyticsstatusindicator.anomaly_detection` — Static JSX text node
  - context: `<CheckCircle className="h-4 w-4 text-green-600" /> Anomaly Detection </div> <div className="fle`
- [240:21] (JSXText) `Alert System` → key: `analytics.analyticsstatusindicator.alert_system` — Static JSX text node
  - context: `<CheckCircle className="h-4 w-4 text-green-600" /> Alert System </div> <div className="flex ite`

### src/components/DataQualityFeedback.tsx
- [219:13] (JSXText) `Ingen data tilgjengelig for kvalitetsvurdering` → key: `analytics.dataqualityfeedback.ingen_data_tilgjengelig_for_kvalitetsvurdering` — Static JSX text node
  - context: `uted-foreground" /> <p className="text-muted-foreground"> Ingen data tilgjengelig for kvalitetsvurdering </p> </CardCont`
- [235:61] (JSXText) `Samlet score:` → key: `analytics.dataqualityfeedback.samlet_score` — Static JSX text node
  - context: `tems-center gap-2"> <span className="text-sm text-muted-foreground">Samlet score:</span> <Badge variant={overallScore >= 80 ? 'default'`
- [267:23] (JSXText) `•` → key: `analytics.dataqualityfeedback.` — Static JSX text node
  - context: `<p key={index} className="text-xs opacity-90"> • {rec} </p> ))} </div>`
- [278:44] (JSXText) `Samlet vurdering` → key: `analytics.dataqualityfeedback.samlet_vurdering` — Static JSX text node
  - context: `/20 dark:to-blue-950/20 rounded-lg"> <h4 className="font-medium mb-2">Samlet vurdering</h4> <p className="text-sm text-muted-foreground mb-3`
- [289:51] (JSXText) `Prioriterte forbedringer:` → key: `analytics.dataqualityfeedback.prioriterte_forbedringer` — Static JSX text node
  - context: `<div className="space-y-2"> <h5 className="text-sm font-medium">Prioriterte forbedringer:</h5> {qualityMetrics .fi`

### src/components/PatternDetectionEmptyState.tsx
- [86:47] (JSXText) `Krav for mønstergjenkjenning:` → key: `analytics.patterndetectionemptystate.krav_for_m_nstergjenkjenning` — Static JSX text node
  - context: `<div className="space-y-3"> <h4 className="text-sm font-medium">Krav for mønstergjenkjenning:</h4> {requirements.map((req, index) => (`
- [103:13] (JSXText) `Tips for bedre mønstergjenkjenning:` → key: `analytics.patterndetectionemptystate.tips_for_bedre_m_nstergjenkjenning` — Static JSX text node
  - context: `ssName="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2"> Tips for bedre mønstergjenkjenning: </h4> <ul className="tex`
- [106:17] (JSXText) `• Registrer data på samme tid hver dag` → key: `analytics.patterndetectionemptystate.registrer_data_p_samme_tid` — Static JSX text node
  - context: `className="text-sm text-blue-800 dark:text-blue-200 space-y-1"> <li>• Registrer data på samme tid hver dag</li> <li>• Inkluder både føle`
- [107:17] (JSXText) `• Inkluder både følelser og sensoriske opplevelser` → key: `analytics.patterndetectionemptystate.inkluder_b_de_f_lelser` — Static JSX text node
  - context: `1"> <li>• Registrer data på samme tid hver dag</li> <li>• Inkluder både følelser og sensoriske opplevelser</li> <li>• Legg m`
- [108:17] (JSXText) `• Legg merke til miljøfaktorer (støy, lys, aktivitet)` → key: `analytics.patterndetectionemptystate.legg_merke_til_milj_faktorer` — Static JSX text node
  - context: `<li>• Inkluder både følelser og sensoriske opplevelser</li> <li>• Legg merke til miljøfaktorer (støy, lys, aktivitet)</li> <li>• Vær`
- [109:17] (JSXText) `• Vær konsistent i minst 2-3 uker` → key: `analytics.patterndetectionemptystate.v_r_konsistent_i_minst` — Static JSX text node
  - context: `<li>• Legg merke til miljøfaktorer (støy, lys, aktivitet)</li> <li>• Vær konsistent i minst 2-3 uker</li> </ul> </div> {`

### src/components/ProgressDashboard.tsx
- [220:56] (JSXText) `Total Goals` → key: `analytics.progressdashboard.total_goals` — Static JSX text node
  - context: `between space-y-0 pb-2"> <CardTitle className="text-sm font-medium">Total Goals</CardTitle> <Crosshair className="h-4 w-4 text-muted-for`
- [228:45] (JSXText) `active,` → key: `analytics.progressdashboard.active` — Static JSX text node
  - context: `me="text-xs text-muted-foreground"> {progressMetrics.activeGoals} active, {progressMetrics.achievedGoals} achieved </p> </Ca`
- [235:56] (JSXText) `Overall Progress` → key: `analytics.progressdashboard.overall_progress` — Static JSX text node
  - context: `between space-y-0 pb-2"> <CardTitle className="text-sm font-medium">Overall Progress</CardTitle> <TrendingUp className="h-4 w-4 text-mut`
- [248:56] (JSXText) `On Track` → key: `analytics.progressdashboard.on_track` — Static JSX text node
  - context: `between space-y-0 pb-2"> <CardTitle className="text-sm font-medium">On Track</CardTitle> <CheckCircle className="h-4 w-4 text-green-500"`
- [256:15] (JSXText) `goals meeting expectations` → key: `analytics.progressdashboard.goals_meeting_expectations` — Static JSX text node
  - context: `</div> <p className="text-xs text-muted-foreground"> goals meeting expectations </p> </CardContent> </C`
- [263:56] (JSXText) `At Risk` → key: `analytics.progressdashboard.at_risk` — Static JSX text node
  - context: `between space-y-0 pb-2"> <CardTitle className="text-sm font-medium">At Risk</CardTitle> <Clock className="h-4 w-4 text-red-500" />`
- [271:15] (JSXText) `goals needing attention` → key: `analytics.progressdashboard.goals_needing_attention` — Static JSX text node
  - context: `</div> <p className="text-xs text-muted-foreground"> goals needing attention </p> </CardContent> </Card`
- [289:26] (JSXText) `Progress Trends (Last 3 Months)` → key: `analytics.progressdashboard.progress_trends_last_3_months` — Static JSX text node
  - context: `t-card border-0 shadow-soft"> <CardHeader> <CardTitle>Progress Trends (Last 3 Months)</CardTitle> </CardHeader>`
- [293:33] (JSXAttribute) `Loading trends chart` → key: `analytics.progressdashboard.loading_trends_chart` — Static aria-label attribute
  - context: `rdContent> {isAnalyzingTrends ? ( <div aria-label="Loading trends chart" className="h-[300px] w-full"> <div clas`
- [320:81] (JSXAttribute) `Progress trends line chart` → key: `analytics.progressdashboard.progress_trends_line_chart` — Static aria-label attribute
  - context: `return <EChartContainer option={option} height={300} aria-label="Progress trends line chart" />; })()} </CardContent>`
- [328:26] (JSXText) `Recent Goal Updates` → key: `analytics.progressdashboard.recent_goal_updates` — Static JSX text node
  - context: `t-card border-0 shadow-soft"> <CardHeader> <CardTitle>Recent Goal Updates</CardTitle> </CardHeader> <CardConte`
- [366:26] (JSXText) `Goal Completion Trends` → key: `analytics.progressdashboard.goal_completion_trends` — Static JSX text node
  - context: `t-card border-0 shadow-soft"> <CardHeader> <CardTitle>Goal Completion Trends</CardTitle> </CardHeader> <CardCo`
- [390:81] (JSXAttribute) `Goal completion by category bar chart` → key: `analytics.progressdashboard.goal_completion_by_category_bar` — Static aria-label attribute
  - context: `return <EChartContainer option={option} height={300} aria-label="Goal completion by category bar chart" />; })()} </Ca`
- [400:28] (JSXText) `Progress by Category` → key: `analytics.progressdashboard.progress_by_category` — Static JSX text node
  - context: `rd border-0 shadow-soft"> <CardHeader> <CardTitle>Progress by Category</CardTitle> </CardHeader> <Card`
- [426:83] (JSXAttribute) `Progress by category donut chart` → key: `analytics.progressdashboard.progress_by_category_donut_chart` — Static aria-label attribute
  - context: `return <EChartContainer option={option} height={250} aria-label="Progress by category donut chart" />; })()} </Car`
- [433:28] (JSXText) `Category Breakdown` → key: `analytics.progressdashboard.category_breakdown` — Static JSX text node
  - context: `rd border-0 shadow-soft"> <CardHeader> <CardTitle>Category Breakdown</CardTitle> </CardHeader> <CardCo`
- [445:50] (JSXText) `% average progress` → key: `analytics.progressdashboard.average_progress` — Static JSX text node
  - context: `ext-xs text-muted-foreground"> <span>{category.progress}% average progress</span> <span>{category.achieved} achi`
- [459:26] (JSXText) `Priority Goals Requiring Attention` → key: `analytics.progressdashboard.priority_goals_requiring_attention` — Static JSX text node
  - context: `t-card border-0 shadow-soft"> <CardHeader> <CardTitle>Priority Goals Requiring Attention</CardTitle> </CardHeader>`
- [485:25] (JSXText) `⚠️ This goal is past its target date and may need review or extension.` → key: `analytics.progressdashboard.this_goal_is_past_its` — Static JSX text node
  - context: `50 border border-red-200 rounded text-sm text-red-700"> ⚠️ This goal is past its target date and may need review or extension.`
- [490:25] (JSXText) `📈 Consider increasing intervention intensity to meet target date.` → key: `analytics.progressdashboard.consider_increasing_intervention_intensity_to` — Static JSX text node
  - context: `der border-yellow-200 rounded text-sm text-yellow-700"> 📈 Consider increasing intervention intensity to meet target date.`
- [498:71] (JSXText) `All goals are on track!` → key: `analytics.progressdashboard.all_goals_are_on_track` — Static JSX text node
  - context: `mb-2" /> <p className="text-lg font-medium text-green-600">All goals are on track!</p> <p className="text-muted-foregro`
- [499:58] (JSXText) `Great work keeping` → key: `analytics.progressdashboard.great_work_keeping` — Static JSX text node
  - context: `oals are on track!</p> <p className="text-muted-foreground">Great work keeping {student.name}'s progress moving forward.</p>`
- [499:91] (JSXText) `'s progress moving forward.` → key: `analytics.progressdashboard.s_progress_moving_forward` — Static JSX text node
  - context: `<p className="text-muted-foreground">Great work keeping {student.name}'s progress moving forward.</p> </div> )}`

### src/components/ReportBuilder.tsx
- [103:19] (MessageAPI) `Invalid date range selected` → key: `analytics.reportbuilder.invalid_date_range_selected` — Message API call: error()
  - context: `if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) { toast.error('Invalid date range selected'); return null; } if (startDate`
- [103:19] (MessageAPI) `Invalid date range selected` → key: `analytics.reportbuilder.invalid_date_range_selected` — sonner toast.error()
  - context: `if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) { toast.error('Invalid date range selected'); return null; } if (startDate`
- [108:19] (MessageAPI) `Start date must be before end date` → key: `analytics.reportbuilder.start_date_must_be_before` — Message API call: error()
  - context: `return null; } if (startDate > endDate) { toast.error('Start date must be before end date'); return null; } // Filter d`
- [108:19] (MessageAPI) `Start date must be before end date` → key: `analytics.reportbuilder.start_date_must_be_before` — sonner toast.error()
  - context: `return null; } if (startDate > endDate) { toast.error('Start date must be before end date'); return null; } // Filter d`
- [411:19] (MessageAPI) `Report generated successfully!` → key: `analytics.reportbuilder.report_generated_successfully` — Message API call: success()
  - context: `setTimeout(() => { printWindow.print(); }, 1000); toast.success("Report generated successfully!"); }; const exportCSV = () => { const r`
- [411:19] (MessageAPI) `Report generated successfully!` → key: `analytics.reportbuilder.report_generated_successfully` — sonner toast.success()
  - context: `setTimeout(() => { printWindow.print(); }, 1000); toast.success("Report generated successfully!"); }; const exportCSV = () => { const r`
- [458:19] (MessageAPI) `CSV exported successfully!` → key: `analytics.reportbuilder.csv_exported_successfully` — Message API call: success()
  - context: `ace(/\s+/g, '_')}_${format(new Date(), 'yyyy-MM-dd')}.csv\`); toast.success("CSV exported successfully!"); }; return ( <div className="space-y-4">`
- [458:19] (MessageAPI) `CSV exported successfully!` → key: `analytics.reportbuilder.csv_exported_successfully` — sonner toast.success()
  - context: `ace(/\s+/g, '_')}_${format(new Date(), 'yyyy-MM-dd')}.csv\`); toast.success("CSV exported successfully!"); }; return ( <div className="space-y-4">`
- [465:49] (JSXText) `Reports & Documentation` → key: `analytics.reportbuilder.reports_documentation` — Static JSX text node
  - context: `justify-between"> <div> <h3 className="text-lg font-semibold">Reports & Documentation</h3> <p className="text-muted-foreground">Gene`
- [466:48] (JSXText) `Generate comprehensive reports for IEP meetings and progress tracking` → key: `analytics.reportbuilder.generate_comprehensive_reports_for_iep` — Static JSX text node
  - context: `ld">Reports & Documentation</h3> <p className="text-muted-foreground">Generate comprehensive reports for IEP meetings and progress tracking</p>`
- [472:15] (JSXText) `Create Report` → key: `analytics.reportbuilder.create_report` — Static JSX text node
  - context: `nt-dyslexia"> <FileText className="h-4 w-4 mr-2" /> Create Report </Button> </DialogTrigger> <Dialog`
- [477:28] (JSXText) `Report Builder` → key: `analytics.reportbuilder.report_builder` — Static JSX text node
  - context: `-[80vh] overflow-y-auto"> <DialogHeader> <DialogTitle>Report Builder</DialogTitle> </DialogHeader>`
- [483:24] (JSXText) `Report Template` → key: `analytics.reportbuilder.report_template` — Static JSX text node
  - context: `{/* Template Selection */} <div> <Label>Report Template</Label> <Select value={selectedTemplate} onValue`
- [504:48] (JSXText) `Report Title` → key: `analytics.reportbuilder.report_title` — Static JSX text node
  - context: `-2 gap-4"> <div> <Label htmlFor="reportTitle">Report Title</Label> <Input id="reportTitl`
- [512:44] (JSXText) `Reporting Teacher` → key: `analytics.reportbuilder.reporting_teacher` — Static JSX text node
  - context: `</div> <div> <Label htmlFor="teacher">Reporting Teacher</Label> <Input id="teach`
- [517:33] (JSXAttribute) `Teacher name` → key: `analytics.reportbuilder.teacher_name` — Static placeholder attribute
  - context: `...prev, reportingTeacher: e.target.value }))} placeholder="Teacher name" /> </div> </div>`
- [524:24] (JSXText) `Report Period` → key: `analytics.reportbuilder.report_period` — Static JSX text node
  - context: `v> {/* Date Range */} <div> <Label>Report Period</Label> <div className="grid grid-cols-2 gap-4 mt-`
- [527:68] (JSXText) `Start Date` → key: `analytics.reportbuilder.start_date` — Static JSX text node
  - context: `<div> <Label htmlFor="startDate" className="text-sm">Start Date</Label> <Input id="startDat`
- [539:66] (JSXText) `End Date` → key: `analytics.reportbuilder.end_date` — Static JSX text node
  - context: `<div> <Label htmlFor="endDate" className="text-sm">End Date</Label> <Input id="endDate"`
- [555:24] (JSXText) `Report Sections` → key: `analytics.reportbuilder.report_sections` — Static JSX text node
  - context: `div> {/* Sections */} <div> <Label>Report Sections</Label> <div className="grid grid-cols-2 gap-2 m`
- [596:50] (JSXText) `Include charts and visualizations` → key: `analytics.reportbuilder.include_charts_and_visualizations` — Static JSX text node
  - context: `cked }))} /> <Label htmlFor="includeCharts">Include charts and visualizations</Label> </div>`
- [604:51] (JSXText) `Include raw data tables` → key: `analytics.reportbuilder.include_raw_data_tables` — Static JSX text node
  - context: `ked }))} /> <Label htmlFor="includeRawData">Include raw data tables</Label> </div> </div>`
- [610:46] (JSXText) `Additional Notes` → key: `analytics.reportbuilder.additional_notes` — Static JSX text node
  - context: `stom Notes */} <div> <Label htmlFor="customNotes">Additional Notes</Label> <Textarea id="customN`
- [615:31] (JSXAttribute) `Add any additional observations or notes...` → key: `analytics.reportbuilder.add_any_additional_observations_or` — Static placeholder attribute
  - context: `v => ({ ...prev, customNotes: e.target.value }))} placeholder="Add any additional observations or notes..." rows={3}`
- [624:19] (JSXText) `Export CSV` → key: `analytics.reportbuilder.export_csv` — Static JSX text node
  - context: `CSV}> <Download className="h-4 w-4 mr-2" /> Export CSV </Button> <Button onClick={generatePD`
- [628:19] (JSXText) `Generate PDF` → key: `analytics.reportbuilder.generate_pdf` — Static JSX text node
  - context: `ePDF}> <Printer className="h-4 w-4 mr-2" /> Generate PDF </Button> </div> </div>`

### src/components/charts/EChartContainer.tsx
- [336:22] (MessageAPI) `[EChartContainer] Option normalization failed` → key: `analytics.echartcontainer.echartcontainer_option_normalization_failed` — Message API call: error()
  - context: `tion; } catch (e) { if (import.meta?.env?.DEV) { logger.error("[EChartContainer] Option normalization failed", { error: e }); } re`
- [449:22] (MessageAPI) `[EChartContainer] Theme merge failed` → key: `analytics.echartcontainer.echartcontainer_theme_merge_failed` — Message API call: error()
  - context: `tion; } catch (e) { if (import.meta?.env?.DEV) { logger.error("[EChartContainer] Theme merge failed", { error: e, optionP`

### src/components/charts/TrendsChart.tsx
- [34:16] (JSXText) `No data available for selected time range` → key: `analytics.trendschart.no_data_available_for_selected` — Static JSX text node
  - context: `<Activity className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>No data available for selected time range</p> <p className="text-xs`
- [35:41] (JSXText) `Try expanding the time range or adjusting filters` → key: `analytics.trendschart.try_expanding_the_time_range` — Static JSX text node
  - context: `a available for selected time range</p> <p className="text-xs mt-1">Try expanding the time range or adjusting filters</p> </div> <`
- [77:18] (MessageAPI) `TrendsChart.renderChart failed` → key: `analytics.trendschart.trendschart_renderchart_failed` — Message API call: error()
  - context: `ontainer option={option} height={400} />; } catch (error) { logger.error("TrendsChart.renderChart failed", { error }); return ( <div className=`
- [82:14] (JSXText) `Could not render chart` → key: `analytics.trendschart.could_not_render_chart` — Static JSX text node
  - context: `<Activity className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>Could not render chart</p> <p className="text-xs mt-1">An internal err`
- [83:39] (JSXText) `An internal error occurred while building the chart` → key: `analytics.trendschart.an_internal_error_occurred_while` — Static JSX text node
  - context: `> <p>Could not render chart</p> <p className="text-xs mt-1">An internal error occurred while building the chart</p> </div> </d`

### src/components/profile-sections/AnalyticsSection.tsx
- [62:18] (JSXText) `Analytics data is not available` → key: `analytics.analyticssection.analytics_data_is_not_available` — Static JSX text node
  - context: `<AlertCircle className="h-8 w-8 mx-auto mb-2" /> <p>Analytics data is not available</p> <p className="text-sm mt-2">`
- [64:17] (JSXText) `The required data for this section is missing or still loading. Please try again later.` → key: `analytics.analyticssection.the_required_data_for_this` — Static JSX text node
  - context: `is not available</p> <p className="text-sm mt-2"> The required data for this section is missing or still loading. Please try again`
- [96:11] (JSXText) `Avansert analyse av` → key: `analytics.analyticssection.avansert_analyse_av` — Static JSX text node
  - context: `-bold">Dataanalyse</h2> <p className="text-muted-foreground"> Avansert analyse av {student.name}s mønstre og trender </p> </div>`
- [96:45] (JSXText) `s mønstre og trender` → key: `analytics.analyticssection.s_m_nstre_og_trender` — Static JSX text node
  - context: `className="text-muted-foreground"> Avansert analyse av {student.name}s mønstre og trender </p> </div> {/* Systemforklaring (Norw`
- [107:13] (JSXText) `Denne siden sammenfatter elevens data for å gi et oversiktlig bilde av
            emosjoner, sanseinntrykk og miljøfaktorer over tid. Systemet bruker
            statistiske metoder for å finne mønstre, beregne korrelasjoner og gi
            anbefalinger. Korrelasjonskartet (varmekart) viser styrken på
            sammenhenger mellom faktorer fra −1 (sterk negativ) til 1 (sterk
            positiv). Bare tydeligere sammenhenger merkes med tall for å holde
            visningen ryddig.` → key: `analytics.analyticssection.denne_siden_sammenfatter_elevens_data` — Static JSX text node
  - context: `e-y-3 text-sm leading-relaxed text-muted-foreground"> <p> Denne siden sammenfatter elevens data for å gi et oversiktlig bilde av`
- [116:13] (JSXText) `Innsiktene genereres lokalt i nettleseren og tunge beregninger kjøres i en
            web‑arbeider for å bevare ytelse. Ingen persondata sendes til en server.
            Resultatene bør tolkes som støtte for faglig vurdering, ikke som fasit.` → key: `analytics.analyticssection.innsiktene_genereres_lokalt_i_nettleseren` — Static JSX text node
  - context: `å holde visningen ryddig. </p> <p> Innsiktene genereres lokalt i nettleseren og tunge beregninger kjøres i en`
- [121:13] (JSXText) `Tips: Hold musepekeren over celler i varmekartet for detaljer som
            korrelasjonsverdi og signifikans. Bruk filtrene over diagrammene for
            å justere tidsrom og se hvordan mønstrene endrer seg.` → key: `analytics.analyticssection.tips_hold_musepekeren_over_celler` — Static JSX text node
  - context: `</p> <p className="text-xs text-muted-foreground/80"> Tips: Hold musepekeren over celler i varmekartet for detaljer som ko`
- [141:13] (JSXText) `Analysetillit og datakvalitet` → key: `analytics.analyticssection.analysetillit_og_datakvalitet` — Static JSX text node
  - context: `tems-center gap-2"> <AlertCircle className="h-5 w-5" /> Analysetillit og datakvalitet </CardTitle> </CardHeader>`
- [166:13] (JSXText) `Interaktiv datavisualisering` → key: `analytics.analyticssection.interaktiv_datavisualisering` — Static JSX text node
  - context: `items-center gap-2"> <BarChart3 className="h-5 w-5" /> Interaktiv datavisualisering </CardTitle> </CardHeader>`
- [187:16] (JSXText) `Laster innsikter...` → key: `analytics.analyticssection.laster_innsikter` — Static JSX text node
  - context: `p-2"> <Loader className="h-5 w-5 animate-spin" /> Laster innsikter... </CardTitle> </CardHeader>`
- [191:51] (JSXText) `Analyserer data...` → key: `analytics.analyticssection.analyserer_data` — Static JSX text node
  - context: `items-center justify-center"> <p className="text-muted-foreground">Analyserer data...</p> </CardContent> </Card> ) : insi`
- [199:15] (JSXText) `Detaljerte innsikter` → key: `analytics.analyticssection.detaljerte_innsikter` — Static JSX text node
  - context: `s-center gap-2"> <TrendingUp className="h-5 w-5" /> Detaljerte innsikter </CardTitle> </CardHeader>`
- [206:54] (JSXText) `Oppdagede mønstre:` → key: `analytics.analyticssection.oppdagede_m_nstre` — Static JSX text node
  - context: `&& ( <div> <h4 className="font-semibold mb-2">Oppdagede mønstre:</h4> <div className="space-y-2">`
- [213:74] (JSXText) `% sikkerhet` → key: `analytics.analyticssection.sikkerhet` — Static JSX text node
  - context: `nded"> {Math.round((pattern.confidence || 0) * 100)}% sikkerhet </span> </div>`
- [222:45] (JSXText) `•` → key: `analytics.analyticssection.` — Static JSX text node
  - context: `).map((rec: string, i: number) => ( <li key={i}>• {rec}</li> ))} </ul>`
- [240:84] (JSXText) `↔` → key: `analytics.analyticssection.` — Static JSX text node
  - context: `<p className="text-sm font-medium">{correlation.factor1} ↔ {correlation.factor2}</p> <span className="text-xs p`
- [242:29] (JSXText) `r =` → key: `analytics.analyticssection.r` — Static JSX text node
  - context: `xs px-2 py-1 bg-blue-500/20 text-blue-600 rounded"> r = {correlation.correlation?.toFixed(2) || 'N/A'} </s`

## Namespace: common

### src/components/AdvancedFilterPanel.tsx
- [194:13] (JSXText) `Advanced Filters` → key: `common.advancedfilterpanel.advanced_filters` — Static JSX text node
  - context: `lex items-center gap-2"> <Filter className="h-5 w-5" /> Advanced Filters {activeFilters > 0 && ( <Badge varian`
- [222:40] (JSXText) `Saved (` → key: `common.advancedfilterpanel.saved` — Static JSX text node
  - context: `er value="presets">Presets</TabsTrigger> <TabsTrigger value="saved">Saved ({savedFilters.length})</TabsTrigger> </TabsList> <Ta`
- [232:21] (JSXText) `Date Range` → key: `common.advancedfilterpanel.date_range` — Static JSX text node
  - context: `"> <CalendarIcon className="h-4 w-4" /> Date Range {(criteria.dateRange.start || criteria.dateRange.`
- [241:30] (JSXText) `Start Date` → key: `common.advancedfilterpanel.start_date` — Static JSX text node
  - context: `grid grid-cols-2 gap-4"> <div> <Label>Start Date</Label> <Popover> <Popo`
- [255:37] (JSXText) `Pick a date` → key: `common.advancedfilterpanel.pick_a_date` — Static JSX text node
  - context: `t, "PPP") ) : ( <span>Pick a date</span> )} </Bu`
- [272:30] (JSXText) `End Date` → key: `common.advancedfilterpanel.end_date` — Static JSX text node
  - context: `</div> <div> <Label>End Date</Label> <Popover> <Popove`
- [286:37] (JSXText) `Pick a date` → key: `common.advancedfilterpanel.pick_a_date` — Static JSX text node
  - context: `d, "PPP") ) : ( <span>Pick a date</span> )} </Bu`
- [311:23] (JSXText) `Last 7 days` → key: `common.advancedfilterpanel.last_7_days` — Static JSX text node
  - context: `Date() } })} > Last 7 days </Button> <Button`
- [320:23] (JSXText) `Last 30 days` → key: `common.advancedfilterpanel.last_30_days` — Static JSX text node
  - context: `Date() } })} > Last 30 days </Button> </div>`
- [341:28] (JSXText) `Emotion Types` → key: `common.advancedfilterpanel.emotion_types` — Static JSX text node
  - context: `ntent className="space-y-4"> <div> <Label>Emotion Types</Label> <div className="grid grid-cols-2 gap-2`
- [369:28] (JSXText) `Intensity Range:` → key: `common.advancedfilterpanel.intensity_range` — Static JSX text node
  - context: `v> </div> <div> <Label>Intensity Range: {criteria.emotions.intensityRange[0]} - {criteria.emotions.inte`
- [383:28] (JSXText) `Include Triggers` → key: `common.advancedfilterpanel.include_triggers` — Static JSX text node
  - context: `/> </div> <div> <Label>Include Triggers</Label> <Select value`
- [394:50] (JSXAttribute) `Select triggers to include` → key: `common.advancedfilterpanel.select_triggers_to_include` — Static placeholder attribute
  - context: `<SelectTrigger> <SelectValue placeholder="Select triggers to include" /> </SelectTrigger>`
- [422:28] (JSXText) `Sensory Types` → key: `common.advancedfilterpanel.sensory_types` — Static JSX text node
  - context: `ntent className="space-y-4"> <div> <Label>Sensory Types</Label> <div className="grid grid-cols-2 gap-2`
- [478:28] (JSXText) `Intensity Range:` → key: `common.advancedfilterpanel.intensity_range` — Static JSX text node
  - context: `v> </div> <div> <Label>Intensity Range: {criteria.sensory.intensityRange[0]} - {criteria.sensory.intens`
- [535:28] (JSXText) `Weather Conditions` → key: `common.advancedfilterpanel.weather_conditions` — Static JSX text node
  - context: `v> </div> <div> <Label>Weather Conditions</Label> <div className="grid grid-cols-2`
- [563:28] (JSXText) `Noise Level:` → key: `common.advancedfilterpanel.noise_level` — Static JSX text node
  - context: `v> </div> <div> <Label>Noise Level: {criteria.environmental.conditions.noiseLevel[0]} - {criteria.envir`
- [589:21] (JSXText) `Patterns & Analysis` → key: `common.advancedfilterpanel.patterns_analysis` — Static JSX text node
  - context: `r gap-2"> <Clock className="h-4 w-4" /> Patterns & Analysis {(criteria.patterns.anomaliesOnly ||`
- [605:48] (JSXText) `Show anomalies only` → key: `common.advancedfilterpanel.show_anomalies_only` — Static JSX text node
  - context: `})} /> <Label htmlFor="anomalies">Show anomalies only</Label> </div> <div>`
- [609:28] (JSXText) `Minimum Confidence:` → key: `common.advancedfilterpanel.minimum_confidence` — Static JSX text node
  - context: `l> </div> <div> <Label>Minimum Confidence: {criteria.patterns.minConfidence}%</Label>`
- [623:28] (JSXText) `Pattern Types` → key: `common.advancedfilterpanel.pattern_types` — Static JSX text node
  - context: `/> </div> <div> <Label>Pattern Types</Label> <div className="grid grid-cols-2 gap-2`
- [657:43] (JSXText) `Real-time Updates` → key: `common.advancedfilterpanel.real_time_updates` — Static JSX text node
  - context: `<Clock className="h-4 w-4" /> <Label htmlFor="realtime">Real-time Updates</Label> </div> <Switch`
- [692:31] (JSXAttribute) `Filter name...` → key: `common.advancedfilterpanel.filter_name` — Static placeholder attribute
  - context: `<input type="text" placeholder="Filter name..." value={filterName} onChange`
- [699:19] (JSXText) `Save Current` → key: `common.advancedfilterpanel.save_current` — Static JSX text node
  - context: `terName}> <Save className="h-4 w-4 mr-1" /> Save Current </Button> </div> )}`
- [707:20] (JSXText) `No saved filters yet` → key: `common.advancedfilterpanel.no_saved_filters_yet` — Static JSX text node
  - context: `<Filter className="h-12 w-12 mx-auto mb-4 opacity-50" /> <p>No saved filters yet</p> <p className="text-sm">Save your curren`
- [708:40] (JSXText) `Save your current filter configuration for quick access` → key: `common.advancedfilterpanel.save_your_current_filter_configuration` — Static JSX text node
  - context: `<p>No saved filters yet</p> <p className="text-sm">Save your current filter configuration for quick access</p> </div>`
- [722:39] (JSXText) `filters configured` → key: `common.advancedfilterpanel.filters_configured` — Static JSX text node
  - context: `gify(criteria[k as keyof FilterCriteria]) ).length} filters configured </p> </div>`

### src/components/AdvancedSearch.tsx
- [463:93] (JSXText) `students,` → key: `common.advancedsearch.students` — Static JSX text node
  - context: `{String(tCommon('interface.results'))}: {filteredResults.students.length} students, {filteredResults.emotions.length} emotions, {filteredResults.sensoryIn`
- [463:137] (JSXText) `emotions,` → key: `common.advancedsearch.emotions` — Static JSX text node
  - context: `: {filteredResults.students.length} students, {filteredResults.emotions.length} emotions, {filteredResults.sensoryInputs.length} sensory inputs, {filteredResult`
- [463:186] (JSXText) `sensory inputs,` → key: `common.advancedsearch.sensory_inputs` — Static JSX text node
  - context: `lteredResults.emotions.length} emotions, {filteredResults.sensoryInputs.length} sensory inputs, {filteredResults.goals.length} goals </span>`

### src/components/AlertManager.tsx
- [54:19] (MessageAPI) `Alert marked as viewed` → key: `common.alertmanager.alert_marked_as_viewed` — Message API call: success()
  - context: `alertSystem.markAlertAsViewed(alertId); loadAlerts(); toast.success('Alert marked as viewed'); }; /** * Handle alert resolution with proper`
- [54:19] (MessageAPI) `Alert marked as viewed` → key: `common.alertmanager.alert_marked_as_viewed` — sonner toast.success()
  - context: `alertSystem.markAlertAsViewed(alertId); loadAlerts(); toast.success('Alert marked as viewed'); }; /** * Handle alert resolution with proper`
- [77:21] (MessageAPI) `Alert resolved successfully` → key: `common.alertmanager.alert_resolved_successfully` — Message API call: success()
  - context: `Alert(null); setResolveNotes(''); loadAlerts(); toast.success('Alert resolved successfully'); } catch (error) { logger.error('Failed`
- [77:21] (MessageAPI) `Alert resolved successfully` → key: `common.alertmanager.alert_resolved_successfully` — sonner toast.success()
  - context: `Alert(null); setResolveNotes(''); loadAlerts(); toast.success('Alert resolved successfully'); } catch (error) { logger.error('Failed`
- [79:20] (MessageAPI) `Failed to resolve alert` → key: `common.alertmanager.failed_to_resolve_alert` — Message API call: error()
  - context: `uccess('Alert resolved successfully'); } catch (error) { logger.error('Failed to resolve alert', error); toast.error('Failed to resolve alert. P`
- [80:19] (MessageAPI) `Failed to resolve alert. Please try again.` → key: `common.alertmanager.failed_to_resolve_alert_please` — Message API call: error()
  - context: `rror) { logger.error('Failed to resolve alert', error); toast.error('Failed to resolve alert. Please try again.'); } finally { setIsResolv`
- [80:19] (MessageAPI) `Failed to resolve alert. Please try again.` → key: `common.alertmanager.failed_to_resolve_alert_please` — sonner toast.error()
  - context: `rror) { logger.error('Failed to resolve alert', error); toast.error('Failed to resolve alert. Please try again.'); } finally { setIsResolv`
- [154:57] (JSXText) `data points` → key: `common.alertmanager.data_points` — Static JSX text node
  - context: `aleDateString()}</span> <span>{alertEntry.alert.dataPoints} data points</span> {alertEntry.resolved && (`
- [195:38] (JSXText) `Resolve Alert` → key: `common.alertmanager.resolve_alert` — Static JSX text node
  - context: `tent> <DialogHeader> <DialogTitle>Resolve Alert</DialogTitle> </DialogHeader>`
- [199:60] (JSXText) `Alert Details` → key: `common.alertmanager.alert_details` — Static JSX text node
  - context: `<div> <h4 className="font-medium mb-2">Alert Details</h4> <p className="text-sm text-muted-fo`
- [210:68] (JSXText) `•` → key: `common.alertmanager.` — Static JSX text node
  - context: `tart gap-2"> <span className="text-primary">•</span> <span>{rec}</span>`
- [221:29] (JSXText) `Resolution Notes (Optional)` → key: `common.alertmanager.resolution_notes_optional` — Static JSX text node
  - context: `<label className="text-sm font-medium mb-2 block"> Resolution Notes (Optional) </label>`
- [226:41] (JSXAttribute) `Describe actions taken or observations...` → key: `common.alertmanager.describe_actions_taken_or_observations` — Static placeholder attribute
  - context: `(e) => setResolveNotes(e.target.value)} placeholder="Describe actions taken or observations..." rows={3}`
- [254:19] (JSXText) `Recommended Actions:` → key: `common.alertmanager.recommended_actions` — Static JSX text node
  - context: `<h4 className="text-sm font-medium mb-2 text-foreground"> Recommended Actions: </h4> <ul className="text-s`
- [259:54] (JSXText) `•` → key: `common.alertmanager.` — Static JSX text node
  - context: `="flex items-start gap-2"> <span className="text-primary">•</span> <span>{recommendation}</span>`
- [269:21] (JSXText) `Resolution Notes:` → key: `common.alertmanager.resolution_notes` — Static JSX text node
  - context: `<h5 className="text-sm font-medium text-green-800 mb-1"> Resolution Notes: </h5> <p className="text-s`
- [273:21] (JSXText) `Resolved by` → key: `common.alertmanager.resolved_by` — Static JSX text node
  - context: `<p className="text-xs text-green-600 mt-1"> Resolved by {alertEntry.resolvedBy} on {alertEntry.resolvedAt?.toLocaleDateStrin`

### src/components/ConfidenceIndicator.tsx
- [104:19] (JSXText) `•` → key: `common.confidenceindicator.` — Static JSX text node
  - context: `<div key={index} className="text-xs text-muted-foreground"> • {explanation} </div> ))} </div>`

### src/components/DataCollectionRoadmap.tsx
- [149:13] (JSXText) `Start datainnsamlingen for å se ditt fremgangskart mot høyere sikkerhetsnivåer.` → key: `common.datacollectionroadmap.start_datainnsamlingen_for_se_ditt` — Static JSX text node
  - context: `foreground" /> <p className="text-muted-foreground mb-4"> Start datainnsamlingen for å se ditt fremgangskart mot høyere sikkerhetsnivåer.`
- [164:11] (JSXText) `Fremgang mot høyere sikkerhetsnivå gjennom systematisk datainnsamling` → key: `common.datacollectionroadmap.fremgang_mot_h_yere_sikkerhetsniv` — Static JSX text node
  - context: `</CardTitle> <div className="text-sm text-muted-foreground"> Fremgang mot høyere sikkerhetsnivå gjennom systematisk datainnsamling </`
- [171:43] (JSXText) `Din fremgang` → key: `common.datacollectionroadmap.din_fremgang` — Static JSX text node
  - context: `x items-center justify-between mb-2"> <span className="font-medium">Din fremgang</span> <Badge variant="outline"> {milesto`
- [173:82] (JSXText) `milepæler` → key: `common.datacollectionroadmap.milep_ler` — Static JSX text node
  - context: `{milestones.filter(m => m.achieved).length} av {milestones.length} milepæler </Badge> </div> <div className="grid g`
- [196:45] (JSXText) `Neste mål:` → key: `common.datacollectionroadmap.neste_m_l` — Static JSX text node
  - context: `</div> <div> <h4 className="font-medium">Neste mål: {nextMilestone.title}</h4> <p className="text-sm text`
- [220:17] (JSXText) `Estimert ferdigdato:` → key: `common.datacollectionroadmap.estimert_ferdigdato` — Static JSX text node
  - context: `"> <Calendar className="h-4 w-4 inline mr-1" /> Estimert ferdigdato: {formatDate(nextMilestone.estimatedDate)} </d`
- [228:39] (JSXText) `Komplett veikart` → key: `common.datacollectionroadmap.komplett_veikart` — Static JSX text node
  - context: `e */} <div className="space-y-4"> <h4 className="font-medium">Komplett veikart</h4> <div className="relative"> {/* Timel`

### src/components/DataRequirementsCalculator.tsx
- [140:13] (JSXText) `Datakrav for sikkerhetsnivå` → key: `common.datarequirementscalculator.datakrav_for_sikkerhetsniv` — Static JSX text node
  - context: `lex items-center gap-2"> <Target className="h-5 w-5" /> Datakrav for sikkerhetsnivå </CardTitle> </CardHeader>`
- [146:13] (JSXText) `Ingen data registrert ennå. Start med å samle data for å se fremgang mot sikkerhetsnivåer.` → key: `common.datarequirementscalculator.ingen_data_registrert_enn_start` — Static JSX text node
  - context: `foreground" /> <p className="text-muted-foreground mb-4"> Ingen data registrert ennå. Start med å samle data for å se fremgang mot sikkerh`
- [149:13] (JSXText) `Start datainnsamling` → key: `common.datarequirementscalculator.start_datainnsamling` — Static JSX text node
  - context: `kkerhetsnivåer. </p> <Button variant="outline"> Start datainnsamling </Button> </CardContent> </Card>`
- [161:11] (JSXText) `Datakrav for sikkerhetsnivå` → key: `common.datarequirementscalculator.datakrav_for_sikkerhetsniv` — Static JSX text node
  - context: `e="flex items-center gap-2"> <Target className="h-5 w-5" /> Datakrav for sikkerhetsnivå </CardTitle> <div className="flex it`
- [164:44] (JSXText) `datapunkter samlet` → key: `common.datarequirementscalculator.datapunkter_samlet` — Static JSX text node
  - context: `ap-4 text-sm text-muted-foreground"> <span>{currentStatus.dataPoints} datapunkter samlet</span> <span>{currentStatus.daysSpan} dager med dat`
- [165:42] (JSXText) `dager med data` → key: `common.datarequirementscalculator.dager_med_data` — Static JSX text node
  - context: `.dataPoints} datapunkter samlet</span> <span>{currentStatus.daysSpan} dager med data</span> </div> </CardHeader> <CardContent clas`
- [172:40] (JSXText) `Nåværende sikkerhetsnivå` → key: `common.datarequirementscalculator.n_v_rende_sikkerhetsniv` — Static JSX text node
  - context: `bg-muted/50 rounded-lg"> <div> <p className="font-medium">Nåværende sikkerhetsnivå</p> <p className="text-sm text-muted-foregr`
- [189:43] (JSXText) `Fremgang mot` → key: `common.datarequirementscalculator.fremgang_mot` — Static JSX text node
  - context: `="flex items-center justify-between"> <h4 className="font-medium">Fremgang mot {nextTarget.requirement.description}</h4> <span class`
- [191:50] (JSXText) `% fullført` → key: `common.datarequirementscalculator.fullf_rt` — Static JSX text node
  - context: `ext-sm text-muted-foreground"> {Math.round(nextTarget.progress)}% fullført </span> </div> <Pr`
- [206:52] (JSXText) `flere datapunkter trengs` → key: `common.datarequirementscalculator.flere_datapunkter_trengs` — Static JSX text node
  - context: `t-xs text-muted-foreground"> {nextTarget.dataPoints.needed} flere datapunkter trengs </p> )}`
- [219:46] (JSXText) `flere dager trengs` → key: `common.datarequirementscalculator.flere_dager_trengs` — Static JSX text node
  - context: `e="text-xs text-muted-foreground"> {nextTarget.days.needed} flere dager trengs </p> )} </div`
- [232:44] (JSXText) `datapunkt(er) per dag vil du nå` → key: `common.datarequirementscalculator.datapunkt_er_per_dag_vil` — Static JSX text node
  - context: `m text-blue-800 dark:text-blue-200"> Med {getRecommendedRate()} datapunkt(er) per dag vil du nå{' '} <span className="font-mediu`
- [243:39] (JSXText) `Alle sikkerhetsnivåer` → key: `common.datarequirementscalculator.alle_sikkerhetsniv_er` — Static JSX text node
  - context: `w */} <div className="space-y-3"> <h4 className="font-medium">Alle sikkerhetsnivåer</h4> {progressCalculations.map((calc) => (`
- [261:54] (JSXText) `datapunkter over` → key: `common.datarequirementscalculator.datapunkter_over` — Static JSX text node
  - context: `xs text-muted-foreground"> {calc.requirement.minDataPoints} datapunkter over {calc.requirement.minDays} dager </p>`
- [271:42] (JSXText) `dager igjen` → key: `common.datarequirementscalculator.dager_igjen` — Static JSX text node
  - context: `="text-xs text-muted-foreground mt-1"> ~{calc.daysToTarget} dager igjen </p> )} </div>`
- [287:19] (JSXText) `• Samle` → key: `common.datarequirementscalculator.samle` — Static JSX text node
  - context: `ame="text-sm text-purple-800 dark:text-purple-200 space-y-1"> <li>• Samle {getRecommendedRate()} datapunkt(er) per dag for optimal fremgang</li>`
- [287:50] (JSXText) `datapunkt(er) per dag for optimal fremgang` → key: `common.datarequirementscalculator.datapunkt_er_per_dag_for` — Static JSX text node
  - context: `rk:text-purple-200 space-y-1"> <li>• Samle {getRecommendedRate()} datapunkt(er) per dag for optimal fremgang</li> <li>• Registrer da`
- [288:19] (JSXText) `• Registrer data konsekvent for bedre mønstergjenkjenning` → key: `common.datarequirementscalculator.registrer_data_konsekvent_for_bedre` — Static JSX text node
  - context: `mendedRate()} datapunkt(er) per dag for optimal fremgang</li> <li>• Registrer data konsekvent for bedre mønstergjenkjenning</li> <li`
- [289:19] (JSXText) `• Inkluder både følelser og sensoriske opplevelser i hver økt` → key: `common.datarequirementscalculator.inkluder_b_de_f_lelser` — Static JSX text node
  - context: `Registrer data konsekvent for bedre mønstergjenkjenning</li> <li>• Inkluder både følelser og sensoriske opplevelser i hver økt</li>`
- [290:19] (JSXText) `• Noter miljøfaktorer for å identifisere sammenhenger` → key: `common.datarequirementscalculator.noter_milj_faktorer_for_identifisere` — Static JSX text node
  - context: `luder både følelser og sensoriske opplevelser i hver økt</li> <li>• Noter miljøfaktorer for å identifisere sammenhenger</li> </ul>`

### src/components/DateRangeSelector.tsx
- [122:36] (JSXAttribute) `Quick select` → key: `common.daterangeselector.quick_select` — Static placeholder attribute
  - context: `lassName="w-[160px] bg-input border-border"> <SelectValue placeholder="Quick select" /> </SelectTrigger> <SelectContent> {pr`
- [154:21] (JSXText) `Pick a date range` → key: `common.daterangeselector.pick_a_date_range` — Static JSX text node
  - context: `eRange.from, "LLL dd, y") ) ) : ( <span>Pick a date range</span> )} <ChevronDown className="ml-a`

### src/components/DetailedConfidenceExplanation.tsx
- [208:17] (JSXText) `R² =` → key: `common.detailedconfidenceexplanation.r` — Static JSX text node
  - context: `> <div className="text-xs text-muted-foreground"> R² = {rSquared.toFixed(3)} </div> </div> </d`

### src/components/ErrorBoundary.tsx
- [95:18] (MessageAPI) `[ErrorBoundary] Component error caught` → key: `common.errorboundary.errorboundary_component_error_caught` — Message API call: error()
  - context: `ronment configuration and doesn't log to console in production logger.error('[ErrorBoundary] Component error caught', { error: { message: erro`
- [129:21] (MessageAPI) `An unexpected error occurred` → key: `common.errorboundary.an_unexpected_error_occurred` — Message API call: error()
  - context: `ble; also emit a dev-only minimal toast payload try { toast.error('An unexpected error occurred', { description: import.meta.env.DEV &&`
- [129:21] (MessageAPI) `An unexpected error occurred` → key: `common.errorboundary.an_unexpected_error_occurred` — sonner toast.error()
  - context: `ble; also emit a dev-only minimal toast payload try { toast.error('An unexpected error occurred', { description: import.meta.env.DEV &&`
- [159:13] (MessageAPI) `Page automatically refreshed after multiple errors` → key: `common.errorboundary.page_automatically_refreshed_after_multiple` — Message API call: toast()
  - context: `this.resetTimeoutId = setTimeout(() => { this.handleRetry(); toast('Page automatically refreshed after multiple errors'); }, 5000); }; /**`
- [159:13] (MessageAPI) `Page automatically refreshed after multiple errors` → key: `common.errorboundary.page_automatically_refreshed_after_multiple` — sonner toast()
  - context: `this.resetTimeoutId = setTimeout(() => { this.handleRetry(); toast('Page automatically refreshed after multiple errors'); }, 5000); }; /**`
- [204:21] (MessageAPI) `App data cleared` → key: `common.errorboundary.app_data_cleared` — Message API call: success()
  - context: `ch { // Ignore removal errors } }); toast.success('App data cleared'); } catch (e) { // best-effort only logger.wa`
- [204:21] (MessageAPI) `App data cleared` → key: `common.errorboundary.app_data_cleared` — sonner toast.success()
  - context: `ch { // Ignore removal errors } }); toast.success('App data cleared'); } catch (e) { // best-effort only logger.wa`
- [236:17] (JSXText) `Something went wrong` → key: `common.errorboundary.something_went_wrong` — Static JSX text node
  - context: `<AlertTriangle className="h-5 w-5" aria-hidden="true" /> Something went wrong </CardTitle> </CardHeader>`
- [241:17] (JSXText) `An unexpected error occurred. The application may not be working correctly.` → key: `common.errorboundary.an_unexpected_error_occurred_the` — Static JSX text node
  - context: `="error-description" className="text-sm text-muted-foreground"> An unexpected error occurred. The application may not be working correctly.`
- [250:67] (JSXText) `Error Details` → key: `common.errorboundary.error_details` — Static JSX text node
  - context: `me="text-xs"> <summary className="cursor-pointer font-medium">Error Details</summary> <pre className="mt-2 p-2 bg-muted roun`
- [271:30] (JSXAttribute) `Try again - attempt to recover from the error` → key: `common.errorboundary.try_again_attempt_to_recover` — Static aria-label attribute
  - context: `.handleRetry} variant="default" aria-label="Try again - attempt to recover from the error" >`
- [274:19] (JSXText) `Try Again` → key: `common.errorboundary.try_again` — Static JSX text node
  - context: `<RefreshCw className="h-4 w-4 mr-2" aria-hidden="true" /> Try Again </Button> <Button o`
- [279:30] (JSXAttribute) `Reload page - refresh the entire application` → key: `common.errorboundary.reload_page_refresh_the_entire` — Static aria-label attribute
  - context: `handleReload} variant="outline" aria-label="Reload page - refresh the entire application" >`
- [282:19] (JSXText) `Reload Page` → key: `common.errorboundary.reload_page` — Static JSX text node
  - context: `<RefreshCw className="h-4 w-4 mr-2" aria-hidden="true" /> Reload Page </Button> <Button`
- [287:25] (JSXAttribute) `Clear App Data removes only Sensory Compass app data (keys starting with sensoryTracker_ and keys containing sensory-compass-analytics)` → key: `common.errorboundary.clear_app_data_removes_only` — Static title attribute
  - context: `handleClearAppData} variant="outline" title="Clear App Data removes only Sensory Compass app data (keys starting with sensor`
- [288:30] (JSXAttribute) `Clear app data - removes only Sensory Compass data from browser storage` → key: `common.errorboundary.clear_app_data_removes_only` — Static aria-label attribute
  - context: `r_ and keys containing sensory-compass-analytics)" aria-label="Clear app data - removes only Sensory Compass data from browser storage"`
- [290:19] (JSXText) `Clear App Data` → key: `common.errorboundary.clear_app_data` — Static JSX text node
  - context: `Sensory Compass data from browser storage" > Clear App Data </Button> <Button`
- [295:30] (JSXAttribute) `Go home - navigate to the application home page` → key: `common.errorboundary.go_home_navigate_to_the` — Static aria-label attribute
  - context: `handleGoHome} variant="outline" aria-label="Go home - navigate to the application home page" >`
- [298:19] (JSXText) `Go Home` → key: `common.errorboundary.go_home` — Static JSX text node
  - context: `<Home className="h-4 w-4 mr-2" aria-hidden="true" /> Go Home </Button> </div>`
- [304:19] (JSXText) `Auto-refreshing in 5 seconds...` → key: `common.errorboundary.auto_refreshing_in_5_seconds` — Static JSX text node
  - context: `<p className="text-xs text-muted-foreground"> Auto-refreshing in 5 seconds... </p> )}`

### src/components/ErrorWrapper.tsx
- [16:15] (JSXText) `Something went wrong loading this component` → key: `common.errorwrapper.something_went_wrong_loading_this` — Static JSX text node
  - context: `text-destructive"> <AlertTriangle className="h-5 w-5" /> <span>Something went wrong loading this component</span> </div> </CardConten`

### src/components/GoalManager.tsx
- [97:19] (MessageAPI) `Please fill in all required fields` → key: `common.goalmanager.please_fill_in_all_required` — Message API call: error()
  - context: `.description.trim() || !newGoal.measurableObjective.trim()) { toast.error("Please fill in all required fields"); return; } // Validate targ`
- [97:19] (MessageAPI) `Please fill in all required fields` → key: `common.goalmanager.please_fill_in_all_required` — sonner toast.error()
  - context: `.description.trim() || !newGoal.measurableObjective.trim()) { toast.error("Please fill in all required fields"); return; } // Validate targ`
- [103:19] (MessageAPI) `Please select a target date` → key: `common.goalmanager.please_select_a_target_date` — Message API call: error()
  - context: `} // Validate target date if (!newGoal.targetDate) { toast.error("Please select a target date"); return; } const targetDate = new`
- [103:19] (MessageAPI) `Please select a target date` → key: `common.goalmanager.please_select_a_target_date` — sonner toast.error()
  - context: `} // Validate target date if (!newGoal.targetDate) { toast.error("Please select a target date"); return; } const targetDate = new`
- [109:19] (MessageAPI) `Invalid target date` → key: `common.goalmanager.invalid_target_date` — Message API call: error()
  - context: `e(newGoal.targetDate); if (isNaN(targetDate.getTime())) { toast.error("Invalid target date"); return; } // Ensure target date is in the`
- [109:19] (MessageAPI) `Invalid target date` → key: `common.goalmanager.invalid_target_date` — sonner toast.error()
  - context: `e(newGoal.targetDate); if (isNaN(targetDate.getTime())) { toast.error("Invalid target date"); return; } // Ensure target date is in the`
- [117:19] (MessageAPI) `Target date must be in the future` → key: `common.goalmanager.target_date_must_be_in` — Message API call: error()
  - context: `today.setHours(0, 0, 0, 0); if (targetDate < today) { toast.error("Target date must be in the future"); return; } // Validate basel`
- [117:19] (MessageAPI) `Target date must be in the future` → key: `common.goalmanager.target_date_must_be_in` — sonner toast.error()
  - context: `today.setHours(0, 0, 0, 0); if (targetDate < today) { toast.error("Target date must be in the future"); return; } // Validate basel`
- [123:19] (MessageAPI) `Target value must be greater than baseline value` → key: `common.goalmanager.target_value_must_be_greater` — Message API call: error()
  - context: `alues if (newGoal.targetValue <= newGoal.baselineValue) { toast.error("Target value must be greater than baseline value"); return; } co`
- [123:19] (MessageAPI) `Target value must be greater than baseline value` → key: `common.goalmanager.target_value_must_be_greater` — sonner toast.error()
  - context: `alues if (newGoal.targetValue <= newGoal.baselineValue) { toast.error("Target value must be greater than baseline value"); return; } co`
- [155:19] (MessageAPI) `Goal created successfully!` → key: `common.goalmanager.goal_created_successfully` — Message API call: success()
  - context: `loadGoals(); resetForm(); setShowCreateDialog(false); toast.success("Goal created successfully!"); onGoalUpdate?.(); }; const updateGoal =`
- [155:19] (MessageAPI) `Goal created successfully!` → key: `common.goalmanager.goal_created_successfully` — sonner toast.success()
  - context: `loadGoals(); resetForm(); setShowCreateDialog(false); toast.success("Goal created successfully!"); onGoalUpdate?.(); }; const updateGoal =`
- [189:19] (MessageAPI) `Progress updated!` → key: `common.goalmanager.progress_updated` — Message API call: success()
  - context: `urrentProgress: Math.max(0, Math.min(100, progress)) }); toast.success("Progress updated!"); }; const addMilestone = (goalId: string, title: strin`
- [189:19] (MessageAPI) `Progress updated!` → key: `common.goalmanager.progress_updated` — sonner toast.success()
  - context: `urrentProgress: Math.max(0, Math.min(100, progress)) }); toast.success("Progress updated!"); }; const addMilestone = (goalId: string, title: strin`
- [208:19] (MessageAPI) `Milestone added!` → key: `common.goalmanager.milestone_added` — Message API call: success()
  - context: `milestones: [...goal.milestones, newMilestone] }); toast.success("Milestone added!"); }; const completeMilestone = (goalId: string, mileston`
- [208:19] (MessageAPI) `Milestone added!` → key: `common.goalmanager.milestone_added` — sonner toast.success()
  - context: `milestones: [...goal.milestones, newMilestone] }); toast.success("Milestone added!"); }; const completeMilestone = (goalId: string, mileston`
- [222:19] (MessageAPI) `Milestone completed! 🎉` → key: `common.goalmanager.milestone_completed` — Message API call: success()
  - context: `; updateGoal(goalId, { milestones: updatedMilestones }); toast.success("Milestone completed! 🎉"); }; /** * Delete a goal with proper confirmat`
- [222:19] (MessageAPI) `Milestone completed! 🎉` → key: `common.goalmanager.milestone_completed` — sonner toast.success()
  - context: `; updateGoal(goalId, { milestones: updatedMilestones }); toast.success("Milestone completed! 🎉"); }; /** * Delete a goal with proper confirmat`
- [244:23] (MessageAPI) `Goal deleted` → key: `common.goalmanager.goal_deleted` — Message API call: success()
  - context: `dataStorage.saveGoal(updatedGoal); loadGoals(); toast.success("Goal deleted"); onGoalUpdate?.(); } } catch (error) { l`
- [244:23] (MessageAPI) `Goal deleted` → key: `common.goalmanager.goal_deleted` — sonner toast.success()
  - context: `dataStorage.saveGoal(updatedGoal); loadGoals(); toast.success("Goal deleted"); onGoalUpdate?.(); } } catch (error) { l`
- [248:20] (MessageAPI) `Failed to delete goal` → key: `common.goalmanager.failed_to_delete_goal` — Message API call: error()
  - context: `d"); onGoalUpdate?.(); } } catch (error) { logger.error('Failed to delete goal', error); toast.error('Failed to delete goal. Pleas`
- [249:19] (MessageAPI) `Failed to delete goal. Please try again.` → key: `common.goalmanager.failed_to_delete_goal_please` — Message API call: error()
  - context: `(error) { logger.error('Failed to delete goal', error); toast.error('Failed to delete goal. Please try again.'); } }; const resetForm = ()`
- [249:19] (MessageAPI) `Failed to delete goal. Please try again.` → key: `common.goalmanager.failed_to_delete_goal_please` — sonner toast.error()
  - context: `(error) { logger.error('Failed to delete goal', error); toast.error('Failed to delete goal. Please try again.'); } }; const resetForm = ()`
- [292:62] (JSXText) `IEP Goals` → key: `common.goalmanager.iep_goals` — Static JSX text node
  - context: `en"> <div> <h2 className="text-2xl font-bold text-foreground">IEP Goals</h2> <p className="text-muted-foreground">Track and monitor`
- [293:48] (JSXText) `Track and monitor` → key: `common.goalmanager.track_and_monitor` — Static JSX text node
  - context: `text-foreground">IEP Goals</h2> <p className="text-muted-foreground">Track and monitor {student.name}'s progress toward educational objectives</p>`
- [293:80] (JSXText) `'s progress toward educational objectives` → key: `common.goalmanager.s_progress_toward_educational_objectives` — Static JSX text node
  - context: `<p className="text-muted-foreground">Track and monitor {student.name}'s progress toward educational objectives</p> </div> <Dialog ope`
- [299:15] (JSXText) `New Goal` → key: `common.goalmanager.new_goal` — Static JSX text node
  - context: `0 font-dyslexia"> <Plus className="h-4 w-4 mr-2" /> New Goal </Button> </DialogTrigger> <DialogConte`
- [304:28] (JSXText) `Create New IEP Goal` → key: `common.goalmanager.create_new_iep_goal` — Static JSX text node
  - context: `nt className="max-w-2xl"> <DialogHeader> <DialogTitle>Create New IEP Goal</DialogTitle> </DialogHeader> <div c`
- [308:40] (JSXText) `Goal Title *` → key: `common.goalmanager.goal_title` — Static JSX text node
  - context: `assName="space-y-4"> <div> <Label htmlFor="title">Goal Title *</Label> <Input id="title"`
- [313:31] (JSXAttribute) `e.g., Improve emotional regulation during transitions` → key: `common.goalmanager.e_g_improve_emotional_regulation` — Static placeholder attribute
  - context: `al(prev => ({ ...prev, title: e.target.value }))} placeholder="e.g., Improve emotional regulation during transitions" />`
- [332:46] (JSXText) `Description *` → key: `common.goalmanager.description` — Static JSX text node
  - context: `</div> <div> <Label htmlFor="description">Description *</Label> <Textarea id="descriptio`
- [337:31] (JSXAttribute) `Detailed description of what the student will achieve...` → key: `common.goalmanager.detailed_description_of_what_the` — Static placeholder attribute
  - context: `v => ({ ...prev, description: e.target.value }))} placeholder="Detailed description of what the student will achieve..." />`
- [341:45] (JSXText) `Measurable Objective *` → key: `common.goalmanager.measurable_objective` — Static JSX text node
  - context: `</div> <div> <Label htmlFor="measurable">Measurable Objective *</Label> <Textarea id="m`
- [346:31] (JSXAttribute) `How will progress be measured? Include specific criteria...` → key: `common.goalmanager.how_will_progress_be_measured` — Static placeholder attribute
  - context: `...prev, measurableObjective: e.target.value }))} placeholder="How will progress be measured? Include specific criteria..." />`
- [351:45] (JSXText) `Baseline Value` → key: `common.goalmanager.baseline_value` — Static JSX text node
  - context: `ols-2 gap-4"> <div> <Label htmlFor="baseline">Baseline Value</Label> <Input id="baseline`
- [360:43] (JSXText) `Target Value` → key: `common.goalmanager.target_value` — Static JSX text node
  - context: `</div> <div> <Label htmlFor="target">Target Value</Label> <Input id="target"`
- [370:45] (JSXText) `Target Date` → key: `common.goalmanager.target_date` — Static JSX text node
  - context: `</div> <div> <Label htmlFor="targetDate">Target Date</Label> <Input id="targetDate"`
- [382:46] (JSXText) `Create Goal` → key: `common.goalmanager.create_goal` — Static JSX text node
  - context: `Cancel </Button> <Button onClick={createGoal}>Create Goal</Button> </div> </div> </DialogC`
- [394:72] (JSXText) `No IEP Goals Yet` → key: `common.goalmanager.no_iep_goals_yet` — Static JSX text node
  - context: `mb-4" /> <h3 className="text-xl font-semibold text-foreground mb-2">No IEP Goals Yet</h3> <p className="text-muted-foreground text-cente`
- [396:15] (JSXText) `Start by creating your first IEP goal to track` → key: `common.goalmanager.start_by_creating_your_first` — Static JSX text node
  - context: `<p className="text-muted-foreground text-center mb-6 max-w-md"> Start by creating your first IEP goal to track {student.name}'s educational prog`
- [396:76] (JSXText) `'s educational progress.` → key: `common.goalmanager.s_educational_progress` — Static JSX text node
  - context: `md"> Start by creating your first IEP goal to track {student.name}'s educational progress. </p> <Button onClick={() => set`
- [400:15] (JSXText) `Create First Goal` → key: `common.goalmanager.create_first_goal` — Static JSX text node
  - context: `0 font-dyslexia"> <Plus className="h-4 w-4 mr-2" /> Create First Goal </Button> </CardContent> </Card>`
- [447:52] (JSXText) `Measurable Objective` → key: `common.goalmanager.measurable_objective` — Static JSX text node
  - context: `<div className="mb-4"> <h4 className="font-medium mb-2">Measurable Objective</h4> <p className="text-sm text-muted-for`
- [473:46] (MessageAPI) `Milestone title:` → key: `common.goalmanager.milestone_title` — Message API call: prompt()
  - context: `onClick={() => { const title = prompt("Milestone title:"); const description = prompt("Milesto`
- [474:52] (MessageAPI) `Milestone description:` → key: `common.goalmanager.milestone_description` — Message API call: prompt()
  - context: `prompt("Milestone title:"); const description = prompt("Milestone description:"); const dateStr = prompt("Targe`
- [475:48] (MessageAPI) `Target date (YYYY-MM-DD):` → key: `common.goalmanager.target_date_yyyy_mm_dd` — Message API call: prompt()
  - context: `rompt("Milestone description:"); const dateStr = prompt("Target date (YYYY-MM-DD):"); if (title && description &`
- [486:66] (JSXText) `No milestones yet` → key: `common.goalmanager.no_milestones_yet` — Static JSX text node
  - context: `ngth === 0 ? ( <p className="text-sm text-muted-foreground">No milestones yet</p> ) : ( <div className`
- [520:44] (MessageAPI) `Enter current progress value:` → key: `common.goalmanager.enter_current_progress_value` — Message API call: prompt()
  - context: `onClick={() => { const value = prompt("Enter current progress value:"); const notes = prompt("Pr`
- [521:44] (MessageAPI) `Progress notes (optional):` → key: `common.goalmanager.progress_notes_optional` — Message API call: prompt()
  - context: `pt("Enter current progress value:"); const notes = prompt("Progress notes (optional):"); if (value) {`
- [528:21] (JSXText) `Update Progress` → key: `common.goalmanager.update_progress` — Static JSX text node
  - context: `<TrendingUp className="h-4 w-4 mr-1" /> Update Progress </Button> </div>`

### src/components/HelpAndSupport.tsx
- [17:11] (JSXText) `Hjelp & Støtte` → key: `common.helpandsupport.hjelp_st_tte` — Static JSX text node
  - context: `lassName="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" /> Hjelp & Støtte </Button> </DialogTrigger> <DialogContent>`
- [22:24] (JSXText) `Help & Support` → key: `common.helpandsupport.help_support` — Static JSX text node
  - context: `logTrigger> <DialogContent> <DialogHeader> <DialogTitle>Help & Support</DialogTitle> </DialogHeader> <div> <p>`
- [25:14] (JSXText) `If you need help or support, please contact us at:` → key: `common.helpandsupport.if_you_need_help_or` — Static JSX text node
  - context: `Help & Support</DialogTitle> </DialogHeader> <div> <p>If you need help or support, please contact us at:</p> <a href="mailto`
- [27:13] (JSXText) `support@example.com` → key: `common.helpandsupport.support_example_com` — Static JSX text node
  - context: `<a href="mailto:support@example.com" className="text-primary"> support@example.com </a> </div> </DialogContent> </D`

### src/components/InteractiveDataVisualization.tsx
- [175:20] (MessageAPI) `Export failed` → key: `common.interactivedatavisualization.export_failed` — Message API call: error()
  - context: `oUpperCase()} exported successfully\`); } catch (error) { logger.error('Export failed', { error }); toast.error('Failed to export interactive ana`
- [176:19] (MessageAPI) `Failed to export interactive analytics data` → key: `common.interactivedatavisualization.failed_to_export_interactive_analytics` — Message API call: error()
  - context: `tch (error) { logger.error('Export failed', { error }); toast.error('Failed to export interactive analytics data'); } finally { setIsExpor`
- [176:19] (MessageAPI) `Failed to export interactive analytics data` → key: `common.interactivedatavisualization.failed_to_export_interactive_analytics` — sonner toast.error()
  - context: `tch (error) { logger.error('Export failed', { error }); toast.error('Failed to export interactive analytics data'); } finally { setIsExpor`

### src/components/MockDataLoader.tsx
- [74:21] (MessageAPI) `Mock data loaded successfully!` → key: `common.mockdataloader.mock_data_loaded_successfully` — Message API call: success()
  - context: `olve, 300); }); setLoadingProgress(100); toast.success('Mock data loaded successfully!', { description: \`Loaded ${result.studen`
- [74:21] (MessageAPI) `Mock data loaded successfully!` → key: `common.mockdataloader.mock_data_loaded_successfully` — sonner toast.success()
  - context: `olve, 300); }); setLoadingProgress(100); toast.success('Mock data loaded successfully!', { description: \`Loaded ${result.studen`
- [87:19] (MessageAPI) `Failed to load mock data` → key: `common.mockdataloader.failed_to_load_mock_data` — Message API call: error()
  - context: `{ clearInterval(progressIntervalRef.current); } toast.error('Failed to load mock data', { description: error instanceof Error ? erro`
- [87:19] (MessageAPI) `Failed to load mock data` → key: `common.mockdataloader.failed_to_load_mock_data` — sonner toast.error()
  - context: `{ clearInterval(progressIntervalRef.current); } toast.error('Failed to load mock data', { description: error instanceof Error ? erro`
- [105:21] (MessageAPI) `Mock data cleared successfully!` → key: `common.mockdataloader.mock_data_cleared_successfully` — Message API call: success()
  - context: `clearMockData function await clearMockData(); toast.success('Mock data cleared successfully!'); // Dispatch a custom event to f`
- [105:21] (MessageAPI) `Mock data cleared successfully!` → key: `common.mockdataloader.mock_data_cleared_successfully` — sonner toast.success()
  - context: `clearMockData function await clearMockData(); toast.success('Mock data cleared successfully!'); // Dispatch a custom event to f`
- [111:19] (MessageAPI) `Failed to clear mock data` → key: `common.mockdataloader.failed_to_clear_mock_data` — Message API call: error()
  - context: `CustomEvent('mockDataLoaded')); } catch (error) { toast.error('Failed to clear mock data', { description: error instanceof Error ? err`
- [111:19] (MessageAPI) `Failed to clear mock data` → key: `common.mockdataloader.failed_to_clear_mock_data` — sonner toast.error()
  - context: `CustomEvent('mockDataLoaded')); } catch (error) { toast.error('Failed to clear mock data', { description: error instanceof Error ? err`
- [129:11] (JSXText) `Mock Data for Testing` → key: `common.mockdataloader.mock_data_for_testing` — Static JSX text node
  - context: `enter gap-2"> <Database className="h-5 w-5 text-primary" /> Mock Data for Testing </CardTitle> </CardHeader> <CardConten`
- [134:11] (JSXText) `Load realistic test data to explore pattern analysis and correlation features.
          Mock data includes 3 students with 3-6 months of tracking data each.` → key: `common.mockdataloader.load_realistic_test_data_to` — Static JSX text node
  - context: `="space-y-4"> <div className="text-sm text-muted-foreground"> Load realistic test data to explore pattern analysis and correlation features.`
- [141:48] (JSXText) `Students to be created:` → key: `common.mockdataloader.students_to_be_created` — Static JSX text node
  - context: `<div className="space-y-2"> <div className="text-sm font-medium">Students to be created:</div> <div className="space-y-1">`
- [155:50] (JSXText) `Current Data:` → key: `common.mockdataloader.current_data` — Static JSX text node
  - context: `uted/50 rounded-lg space-y-1"> <div className="text-sm font-medium">Current Data:</div> <div className="text-xs text-muted-foreground sp`
- [157:20] (JSXText) `•` → key: `common.mockdataloader.` — Static JSX text node
  - context: `<div className="text-xs text-muted-foreground space-y-1"> <div>• {currentStats.studentsCount} students</div> <div>• {currentStats`
- [158:20] (JSXText) `•` → key: `common.mockdataloader.` — Static JSX text node
  - context: `<div>• {currentStats.studentsCount} students</div> <div>• {currentStats.entriesCount} tracking entries</div> {hasMockData`
- [158:50] (JSXText) `tracking entries` → key: `common.mockdataloader.tracking_entries` — Static JSX text node
  - context: `.studentsCount} students</div> <div>• {currentStats.entriesCount} tracking entries</div> {hasMockData && <div className="text-orange`
- [159:64] (JSXText) `• Contains mock data` → key: `common.mockdataloader.contains_mock_data` — Static JSX text node
  - context: `ng entries</div> {hasMockData && <div className="text-orange-600">• Contains mock data</div>} </div> </div> )}`
- [167:60] (JSXText) `Loading mock data...` → key: `common.mockdataloader.loading_mock_data` — Static JSX text node
  - context: `assName="space-y-2"> <div className="text-sm text-muted-foreground">Loading mock data...</div> <Progress value={loadingProgress} classNa`
- [180:13] (JSXText) `Load Mock Data` → key: `common.mockdataloader.load_mock_data` — Static JSX text node
  - context: `Data} > <Database className="h-4 w-4 mr-2" /> Load Mock Data </Button> {hasMockData && ( <Ale`
- [192:19] (JSXText) `Clear All` → key: `common.mockdataloader.clear_all` — Static JSX text node
  - context: `> <Trash2 className="h-4 w-4 mr-2" /> Clear All </Button> </AlertDialogTrigger>`
- [197:37] (JSXText) `Clear All Data?` → key: `common.mockdataloader.clear_all_data` — Static JSX text node
  - context: `ontent> <AlertDialogHeader> <AlertDialogTitle>Clear All Data?</AlertDialogTitle> <AlertDialogDescription>`
- [199:21] (JSXText) `This will permanently delete all student data and tracking entries. 
                    This action cannot be undone.` → key: `common.mockdataloader.this_will_permanently_delete_all` — Static JSX text node
  - context: `lertDialogTitle> <AlertDialogDescription> This will permanently delete all student data and tracking entries.`
- [207:21] (JSXText) `Clear All Data` → key: `common.mockdataloader.clear_all_data` — Static JSX text node
  - context: `e"> <Trash2 className="h-4 w-4 mr-2" /> Clear All Data </AlertDialogAction> </AlertDia`
- [217:53] (JSXText) `Features you can test:` → key: `common.mockdataloader.features_you_can_test` — Static JSX text node
  - context: `-3 border-t border-border"> <div className="text-sm font-medium mb-2">Features you can test:</div> <div className="text-xs text-muted-foregr`
- [219:18] (JSXText) `• Emotion pattern recognition` → key: `common.mockdataloader.emotion_pattern_recognition` — Static JSX text node
  - context: `<div className="text-xs text-muted-foreground space-y-1"> <div>• Emotion pattern recognition</div> <div>• Sensory input correlation`
- [220:18] (JSXText) `• Sensory input correlations` → key: `common.mockdataloader.sensory_input_correlations` — Static JSX text node
  - context: `ace-y-1"> <div>• Emotion pattern recognition</div> <div>• Sensory input correlations</div> <div>• Environmental factor analy`
- [221:18] (JSXText) `• Environmental factor analysis` → key: `common.mockdataloader.environmental_factor_analysis` — Static JSX text node
  - context: `tion</div> <div>• Sensory input correlations</div> <div>• Environmental factor analysis</div> <div>• Predictive insights & t`
- [222:18] (JSXText) `• Predictive insights & trends` → key: `common.mockdataloader.predictive_insights_trends` — Static JSX text node
  - context: `s</div> <div>• Environmental factor analysis</div> <div>• Predictive insights & trends</div> <div>• Interactive data visuali`
- [223:18] (JSXText) `• Interactive data visualization` → key: `common.mockdataloader.interactive_data_visualization` — Static JSX text node
  - context: `is</div> <div>• Predictive insights & trends</div> <div>• Interactive data visualization</div> <div>• Alert system & anomaly`
- [224:18] (JSXText) `• Alert system & anomaly detection` → key: `common.mockdataloader.alert_system_anomaly_detection` — Static JSX text node
  - context: `</div> <div>• Interactive data visualization</div> <div>• Alert system & anomaly detection</div> </div> </div> <`

### src/components/PaginatedSessionsList.tsx
- [60:14] (JSXText) `No sessions available in the selected period.` → key: `common.paginatedsessionslist.no_sessions_available_in_the` — Static JSX text node
  - context: `<CardContent className="py-16 text-center text-muted-foreground"> <p>No sessions available in the selected period.</p> </CardContent> <`
- [93:13] (JSXText) `Loading sessions...` → key: `common.paginatedsessionslist.loading_sessions` — Static JSX text node
  - context: `( <div className="text-center p-8 text-muted-foreground"> Loading sessions... </div> ) : ( <div> {`
- [114:27] (JSXText) `Environmental data` → key: `common.paginatedsessionslist.environmental_data` — Static JSX text node
  - context: `<Badge variant="outline" className="text-xs"> Environmental data </Badge> )}`

### src/components/PeriodComparison.tsx
- [210:19] (JSXText) `Most common changed from` → key: `common.periodcomparison.most_common_changed_from` — Static JSX text node
  - context: `dge> <span className="text-muted-foreground"> Most common changed from <span className="font-medium">{comparisonStats.mostComm`
- [220:19] (JSXText) `Average intensity` → key: `common.periodcomparison.average_intensity` — Static JSX text node
  - context: `dge> <span className="text-muted-foreground"> Average intensity{" "} {currentStats.avgEmotionIntensity > com`
- [233:19] (JSXText) `Sensory seeking behavior` → key: `common.periodcomparison.sensory_seeking_behavior` — Static JSX text node
  - context: `dge> <span className="text-muted-foreground"> Sensory seeking behavior{" "} {currentStats.seekingRatio > com`

### src/components/StorageManager.tsx
- [33:21] (MessageAPI) `Old data cleared successfully` → key: `common.storagemanager.old_data_cleared_successfully` — Message API call: success()
  - context: `=> { try { storageUtils.clearOldTrackingData(30); toast.success('Old data cleared successfully'); refreshStats(); } catch (error) {`
- [33:21] (MessageAPI) `Old data cleared successfully` → key: `common.storagemanager.old_data_cleared_successfully` — sonner toast.success()
  - context: `=> { try { storageUtils.clearOldTrackingData(30); toast.success('Old data cleared successfully'); refreshStats(); } catch (error) {`
- [36:20] (MessageAPI) `Failed to clear old tracking data` → key: `common.storagemanager.failed_to_clear_old_tracking` — Message API call: error()
  - context: `successfully'); refreshStats(); } catch (error) { logger.error('Failed to clear old tracking data', error); toast.error('Failed to clear`
- [37:19] (MessageAPI) `Failed to clear old data` → key: `common.storagemanager.failed_to_clear_old_data` — Message API call: error()
  - context: `logger.error('Failed to clear old tracking data', error); toast.error('Failed to clear old data'); } }; const handleClearNonEssential = () =>`
- [37:19] (MessageAPI) `Failed to clear old data` → key: `common.storagemanager.failed_to_clear_old_data` — sonner toast.error()
  - context: `logger.error('Failed to clear old tracking data', error); toast.error('Failed to clear old data'); } }; const handleClearNonEssential = () =>`
- [44:21] (MessageAPI) `Non-essential data cleared` → key: `common.storagemanager.non_essential_data_cleared` — Message API call: success()
  - context: `=> { try { storageUtils.clearNonEssentialData(); toast.success('Non-essential data cleared'); refreshStats(); } catch (error) {`
- [44:21] (MessageAPI) `Non-essential data cleared` → key: `common.storagemanager.non_essential_data_cleared` — sonner toast.success()
  - context: `=> { try { storageUtils.clearNonEssentialData(); toast.success('Non-essential data cleared'); refreshStats(); } catch (error) {`
- [47:20] (MessageAPI) `Failed to clear non-essential data` → key: `common.storagemanager.failed_to_clear_non_essential` — Message API call: error()
  - context: `data cleared'); refreshStats(); } catch (error) { logger.error('Failed to clear non-essential data', error); toast.error('Failed to clear`
- [48:19] (MessageAPI) `Failed to clear non-essential data` → key: `common.storagemanager.failed_to_clear_non_essential` — Message API call: error()
  - context: `logger.error('Failed to clear non-essential data', error); toast.error('Failed to clear non-essential data'); } }; /** * Handle clearing al`
- [48:19] (MessageAPI) `Failed to clear non-essential data` → key: `common.storagemanager.failed_to_clear_non_essential` — sonner toast.error()
  - context: `logger.error('Failed to clear non-essential data', error); toast.error('Failed to clear non-essential data'); } }; /** * Handle clearing al`
- [60:40] (MessageAPI) `Are you sure you want to clear ALL data? This cannot be undone!` → key: `common.storagemanager.are_you_sure_you_want` — Message API call: confirm()
  - context: `using a custom modal component try { const confirmed = window.confirm('Are you sure you want to clear ALL data? This cannot be undone!'); if (co`
- [64:25] (MessageAPI) `All data cleared` → key: `common.storagemanager.all_data_cleared` — Message API call: success()
  - context: `) { try { dataStorage.clearAllData(); toast.success('All data cleared'); // Use window.location.replace for better history`
- [64:25] (MessageAPI) `All data cleared` → key: `common.storagemanager.all_data_cleared` — sonner toast.success()
  - context: `) { try { dataStorage.clearAllData(); toast.success('All data cleared'); // Use window.location.replace for better history`
- [68:24] (MessageAPI) `Failed to clear all data` → key: `common.storagemanager.failed_to_clear_all_data` — Message API call: error()
  - context: `window.location.replace('/'); } catch (error) { logger.error('Failed to clear all data', error); toast.error('Failed to clear all d`
- [69:23] (MessageAPI) `Failed to clear all data` → key: `common.storagemanager.failed_to_clear_all_data` — Message API call: error()
  - context: `logger.error('Failed to clear all data', error); toast.error('Failed to clear all data'); } } } catch (error) { // Ha`
- [69:23] (MessageAPI) `Failed to clear all data` → key: `common.storagemanager.failed_to_clear_all_data` — sonner toast.error()
  - context: `logger.error('Failed to clear all data', error); toast.error('Failed to clear all data'); } } } catch (error) { // Ha`
- [74:20] (MessageAPI) `Confirmation dialog failed` → key: `common.storagemanager.confirmation_dialog_failed` — Message API call: error()
  - context: `s where confirm might fail (e.g., in some test environments) logger.error('Confirmation dialog failed', error); toast.error('Could not show confirma`
- [75:19] (MessageAPI) `Could not show confirmation dialog` → key: `common.storagemanager.could_not_show_confirmation_dialog` — Message API call: error()
  - context: `nts) logger.error('Confirmation dialog failed', error); toast.error('Could not show confirmation dialog'); } }; const formatBytes = (bytes:`
- [75:19] (MessageAPI) `Could not show confirmation dialog` → key: `common.storagemanager.could_not_show_confirmation_dialog` — sonner toast.error()
  - context: `nts) logger.error('Confirmation dialog failed', error); toast.error('Could not show confirmation dialog'); } }; const formatBytes = (bytes:`
- [94:11] (JSXText) `Storage Management` → key: `common.storagemanager.storage_management` — Static JSX text node
  - context: `"flex items-center gap-2"> <Database className="h-5 w-5" /> Storage Management </CardTitle> <CardDescription> Mana`
- [97:11] (JSXText) `Manage your local storage to ensure smooth operation` → key: `common.storagemanager.manage_your_local_storage_to` — Static JSX text node
  - context: `Storage Management </CardTitle> <CardDescription> Manage your local storage to ensure smooth operation </CardDescription>`
- [103:44] (JSXText) `Storage Usage` → key: `common.storagemanager.storage_usage` — Static JSX text node
  - context: `{/* Storage Usage */} <div> <h3 className="font-medium mb-2">Storage Usage</h3> <div className="space-y-2"> <div classN`
- [107:53] (JSXText) `/ ~5 MB` → key: `common.storagemanager.5_mb` — Static JSX text node
  - context: `<span>Used</span> <span>{formatBytes(storageInfo.used)} / ~5 MB</span> </div> <div className="w-full bg-gray-200`
- [123:44] (JSXText) `Data Statistics` → key: `common.storagemanager.data_statistics` — Static JSX text node
  - context: `{/* Storage Stats */} <div> <h3 className="font-medium mb-2">Data Statistics</h3> <div className="grid grid-cols-2 gap-2 text-sm">`
- [154:13] (JSXText) `Clear data older than 30 days` → key: `common.storagemanager.clear_data_older_than_30` — Static JSX text node
  - context: `-start" > <Trash2 className="h-4 w-4 mr-2" /> Clear data older than 30 days </Button> <Button`
- [162:13] (JSXText) `Clear non-essential data` → key: `common.storagemanager.clear_non_essential_data` — Static JSX text node
  - context: `-start" > <Trash2 className="h-4 w-4 mr-2" /> Clear non-essential data </Button> <Button varia`
- [170:13] (JSXText) `Clear ALL data (irreversible)` → key: `common.storagemanager.clear_all_data_irreversible` — Static JSX text node
  - context: `-start" > <Trash2 className="h-4 w-4 mr-2" /> Clear ALL data (irreversible) </Button> </div> {stora`
- [178:15] (JSXText) `Storage is healthy with sufficient space available.` → key: `common.storagemanager.storage_is_healthy_with_sufficient` — Static JSX text node
  - context: `CheckCircle className="h-4 w-4" /> <AlertDescription> Storage is healthy with sufficient space available. </AlertDescripti`

### src/components/TestingDebugPanel.tsx
- [206:21] (MessageAPI) `System tests completed successfully` → key: `common.testingdebugpanel.system_tests_completed_successfully` — Message API call: success()
  - context: `ilable" }; setTestResults([...results]); toast.success("System tests completed successfully"); } catch (error) { logge`
- [206:21] (MessageAPI) `System tests completed successfully` → key: `common.testingdebugpanel.system_tests_completed_successfully` — sonner toast.success()
  - context: `ilable" }; setTestResults([...results]); toast.success("System tests completed successfully"); } catch (error) { logge`
- [209:20] (MessageAPI) `System test error` → key: `common.testingdebugpanel.system_test_error` — Message API call: error()
  - context: `tests completed successfully"); } catch (error) { logger.error('System test error', { error }); results.push({ name: "Test Error"`
- [216:19] (MessageAPI) `Some tests failed` → key: `common.testingdebugpanel.some_tests_failed` — Message API call: error()
  - context: `nknown error'}\` }); setTestResults([...results]); toast.error("Some tests failed"); } finally { setIsRunningTests(false); } };`
- [216:19] (MessageAPI) `Some tests failed` → key: `common.testingdebugpanel.some_tests_failed` — sonner toast.error()
  - context: `nknown error'}\` }); setTestResults([...results]); toast.error("Some tests failed"); } finally { setIsRunningTests(false); } };`
- [245:19] (MessageAPI) `Analytics cache cleared successfully` → key: `common.testingdebugpanel.analytics_cache_cleared_successfully` — Message API call: success()
  - context: `) => { analyticsWorker.clearCache(); uiCache.clear(); toast.success("Analytics cache cleared successfully"); }, [analyticsWorker, uiCache]); co`
- [245:19] (MessageAPI) `Analytics cache cleared successfully` → key: `common.testingdebugpanel.analytics_cache_cleared_successfully` — sonner toast.success()
  - context: `) => { analyticsWorker.clearCache(); uiCache.clear(); toast.success("Analytics cache cleared successfully"); }, [analyticsWorker, uiCache]); co`
- [260:13] (JSXText) `System Testing & Debug Panel` → key: `common.testingdebugpanel.system_testing_debug_panel` — Static JSX text node
  - context: `="flex items-center gap-2"> <Bug className="h-5 w-5" /> System Testing & Debug Panel </CardTitle> </CardHeader>`
- [266:15] (JSXText) `Test current system functionality and data integrity` → key: `common.testingdebugpanel.test_current_system_functionality_and` — Static JSX text node
  - context: `tween"> <p className="text-sm text-muted-foreground"> Test current system functionality and data integrity </p>`
- [277:19] (JSXText) `Running Tests...` → key: `common.testingdebugpanel.running_tests` — Static JSX text node
  - context: `<RefreshCw className="h-4 w-4 mr-2 animate-spin" /> Running Tests... </> ) : ( <>`
- [282:19] (JSXText) `Run System Tests` → key: `common.testingdebugpanel.run_system_tests` — Static JSX text node
  - context: `<> <TestTube className="h-4 w-4 mr-2" /> Run System Tests </> )} </Button>`
- [290:51] (JSXText) `Test Results:` → key: `common.testingdebugpanel.test_results` — Static JSX text node
  - context: `<div className="space-y-3"> <h4 className="text-sm font-medium">Test Results:</h4> {testResults.map((result, index) => (`
- [309:54] (JSXText) `Quick Stats:` → key: `common.testingdebugpanel.quick_stats` — Static JSX text node
  - context: `4 border-t border-border"> <h4 className="text-sm font-medium mb-2">Quick Stats:</h4> <div className="grid grid-cols-3 gap-3 text-center`
- [333:13] (JSXText) `Analytics Cache Management` → key: `common.testingdebugpanel.analytics_cache_management` — Static JSX text node
  - context: `ex items-center gap-2"> <Archive className="h-5 w-5" /> Analytics Cache Management </CardTitle> </CardHeader>`
- [342:57] (JSXText) `Cache Hit Rate` → key: `common.testingdebugpanel.cache_hit_rate` — Static JSX text node
  - context: `enter justify-between"> <span className="text-sm font-medium">Cache Hit Rate</span> <div className="flex items-center gap-2"`
- [351:69] (JSXText) `Cache Size` → key: `common.testingdebugpanel.cache_size` — Static JSX text node
  - context: `flex-col"> <span className="text-xs text-muted-foreground">Cache Size</span> <span className="text-lg font-semibold">{c`
- [355:69] (JSXText) `Memory Usage` → key: `common.testingdebugpanel.memory_usage` — Static JSX text node
  - context: `flex-col"> <span className="text-xs text-muted-foreground">Memory Usage</span> <span className="text-lg font-semibold">`
- [383:53] (JSXText) `Cache Actions` → key: `common.testingdebugpanel.cache_actions` — Static JSX text node
  - context: `t border-border space-y-3"> <h4 className="text-sm font-medium">Cache Actions</h4> <div className="flex gap-2">`
- [392:21] (JSXText) `Clear All Cache` → key: `common.testingdebugpanel.clear_all_cache` — Static JSX text node
  - context: `> <Trash2 className="h-4 w-4 mr-2" /> Clear All Cache </Button> <Button`
- [401:21] (JSXText) `Clean Expired` → key: `common.testingdebugpanel.clean_expired` — Static JSX text node
  - context: `<RefreshCw className="h-4 w-4 mr-2" /> Clean Expired </Button> </div>`
- [406:22] (JSXText) `• Cache TTL: 5 minutes` → key: `common.testingdebugpanel.cache_ttl_5_minutes` — Static JSX text node
  - context: `<div className="text-xs text-muted-foreground"> <p>• Cache TTL: 5 minutes</p> <p>• Eviction: LRU (Least Recently`
- [407:22] (JSXText) `• Eviction: LRU (Least Recently Used)` → key: `common.testingdebugpanel.eviction_lru_least_recently_used` — Static JSX text node
  - context: `reground"> <p>• Cache TTL: 5 minutes</p> <p>• Eviction: LRU (Least Recently Used)</p> <p>• Invalidations:`
- [408:22] (JSXText) `• Invalidations:` → key: `common.testingdebugpanel.invalidations` — Static JSX text node
  - context: `<p>• Eviction: LRU (Least Recently Used)</p> <p>• Invalidations: {cacheStats.invalidations || 0}</p> </div>`

### src/components/TestingToolsSection.tsx
- [16:44] (JSXText) `Testing & Development Tools` → key: `common.testingtoolssection.testing_development_tools` — Static JSX text node
  - context: `v className="space-y-6"> <div> <h2 className="text-2xl font-bold">Testing & Development Tools</h2> <p className="text-muted-foreground">`
- [18:11] (JSXText) `Tools for testing pattern analysis features and debugging data issues` → key: `common.testingtoolssection.tools_for_testing_pattern_analysis` — Static JSX text node
  - context: `Development Tools</h2> <p className="text-muted-foreground"> Tools for testing pattern analysis features and debugging data issues </`
- [28:15] (JSXText) `Mock Data Generator` → key: `common.testingtoolssection.mock_data_generator` — Static JSX text node
  - context: `p-2"> <Database className="h-5 w-5 text-primary" /> Mock Data Generator </CardTitle> </CardHeader> <`
- [33:15] (JSXText) `Load realistic test data to explore pattern analysis features` → key: `common.testingtoolssection.load_realistic_test_data_to` — Static JSX text node
  - context: `t> <p className="text-sm text-muted-foreground mb-4"> Load realistic test data to explore pattern analysis features </p>`
- [39:19] (JSXText) `Load Mock Data` → key: `common.testingtoolssection.load_mock_data` — Static JSX text node
  - context: `-90"> <Database className="h-4 w-4 mr-2" /> Load Mock Data </Button> </DialogTrigger>`
- [44:32] (JSXText) `Mock Data for Testing & Analysis` → key: `common.testingtoolssection.mock_data_for_testing_analysis` — Static JSX text node
  - context: `overflow-y-auto"> <DialogHeader> <DialogTitle>Mock Data for Testing & Analysis</DialogTitle> </DialogHeader>`
- [57:15] (JSXText) `Debug Panel` → key: `common.testingtoolssection.debug_panel` — Static JSX text node
  - context: `er gap-2"> <Bug className="h-5 w-5 text-primary" /> Debug Panel </CardTitle> </CardHeader> <CardCont`
- [62:15] (JSXText) `Advanced debugging and data inspection tools` → key: `common.testingtoolssection.advanced_debugging_and_data_inspection` — Static JSX text node
  - context: `t> <p className="text-sm text-muted-foreground mb-4"> Advanced debugging and data inspection tools </p> <Dialo`
- [68:19] (JSXText) `Open Debug Panel` → key: `common.testingtoolssection.open_debug_panel` — Static JSX text node
  - context: `="w-full"> <Bug className="h-4 w-4 mr-2" /> Open Debug Panel </Button> </DialogTrigger>`
- [73:32] (JSXText) `Debug & Data Inspection` → key: `common.testingtoolssection.debug_data_inspection` — Static JSX text node
  - context: `overflow-y-auto"> <DialogHeader> <DialogTitle>Debug & Data Inspection</DialogTitle> </DialogHeader>`
- [86:15] (JSXText) `Pattern Analysis Testing Guide` → key: `common.testingtoolssection.pattern_analysis_testing_guide` — Static JSX text node
  - context: `gap-2"> <Beaker className="h-5 w-5 text-primary" /> Pattern Analysis Testing Guide </CardTitle> </CardHeader>`
- [92:17] (JSXText) `To test pattern analysis features effectively:` → key: `common.testingtoolssection.to_test_pattern_analysis_features` — Static JSX text node
  - context: `4"> <p className="text-sm text-muted-foreground"> To test pattern analysis features effectively: </p>`
- [96:60] (JSXText) `Data Requirements:` → key: `common.testingtoolssection.data_requirements` — Static JSX text node
  - context: `<div> <h4 className="font-medium text-sm mb-2">Data Requirements:</h4> <ul className="text-xs text-muted-fore`
- [98:25] (JSXText) `• At least 10 tracking entries for basic patterns` → key: `common.testingtoolssection.at_least_10_tracking_entries` — Static JSX text node
  - context: `ul className="text-xs text-muted-foreground space-y-1"> <li>• At least 10 tracking entries for basic patterns</li> <li>•`
- [99:25] (JSXText) `• 30+ entries for correlation analysis` → key: `common.testingtoolssection.30_entries_for_correlation_analysis` — Static JSX text node
  - context: `>• At least 10 tracking entries for basic patterns</li> <li>• 30+ entries for correlation analysis</li> <li>• 90+ entrie`
- [100:25] (JSXText) `• 90+ entries for predictive insights` → key: `common.testingtoolssection.90_entries_for_predictive_insights` — Static JSX text node
  - context: `<li>• 30+ entries for correlation analysis</li> <li>• 90+ entries for predictive insights</li> <li>• Multiple st`
- [101:25] (JSXText) `• Multiple students for comparative analysis` → key: `common.testingtoolssection.multiple_students_for_comparative_analysis` — Static JSX text node
  - context: `<li>• 90+ entries for predictive insights</li> <li>• Multiple students for comparative analysis</li> </ul>`
- [105:60] (JSXText) `Features to Test:` → key: `common.testingtoolssection.features_to_test` — Static JSX text node
  - context: `<div> <h4 className="font-medium text-sm mb-2">Features to Test:</h4> <ul className="text-xs text-muted-foreg`
- [107:25] (JSXText) `• Emotion trend analysis` → key: `common.testingtoolssection.emotion_trend_analysis` — Static JSX text node
  - context: `ul className="text-xs text-muted-foreground space-y-1"> <li>• Emotion trend analysis</li> <li>• Sensory correlation matr`
- [108:25] (JSXText) `• Sensory correlation matrices` → key: `common.testingtoolssection.sensory_correlation_matrices` — Static JSX text node
  - context: `> <li>• Emotion trend analysis</li> <li>• Sensory correlation matrices</li> <li>• Environmental impa`
- [109:25] (JSXText) `• Environmental impact patterns` → key: `common.testingtoolssection.environmental_impact_patterns` — Static JSX text node
  - context: `<li>• Sensory correlation matrices</li> <li>• Environmental impact patterns</li> <li>• Anomaly detection`
- [110:25] (JSXText) `• Anomaly detection alerts` → key: `common.testingtoolssection.anomaly_detection_alerts` — Static JSX text node
  - context: `<li>• Environmental impact patterns</li> <li>• Anomaly detection alerts</li> </ul> </div>`

### src/components/Visualization3D.tsx
- [55:13] (JSXText) `×` → key: `common.visualization3d.` — Static JSX text node
  - context: `ted-foreground hover:text-foreground transition-colors" > × </button> </div> <p className="font-medium">{point.l`
- [334:11] (JSXText) `3D Correlation Visualization` → key: `common.visualization3d.3d_correlation_visualization` — Static JSX text node
  - context: `Name="flex items-center gap-2"> <Eye className="h-5 w-5" /> 3D Correlation Visualization </CardTitle> </CardHeader> <Car`
- [342:65] (JSXText) `X Axis` → key: `common.visualization3d.x_axis` — Static JSX text node
  - context: `<div> <label className="text-sm font-medium mb-1 block">X Axis</label> <Select value={xAxis} onValueChange={setXAxis}>`
- [358:65] (JSXText) `Y Axis` → key: `common.visualization3d.y_axis` — Static JSX text node
  - context: `<div> <label className="text-sm font-medium mb-1 block">Y Axis</label> <Select value={yAxis} onValueChange={setYAxis}>`
- [374:65] (JSXText) `Z Axis` → key: `common.visualization3d.z_axis` — Static JSX text node
  - context: `<div> <label className="text-sm font-medium mb-1 block">Z Axis</label> <Select value={zAxis} onValueChange={setZAxis}>`
- [392:65] (JSXText) `Color By` → key: `common.visualization3d.color_by` — Static JSX text node
  - context: `<div> <label className="text-sm font-medium mb-1 block">Color By</label> <Select value={colorBy} onValueChange={setColorBy`
- [405:65] (JSXText) `Filter Category` → key: `common.visualization3d.filter_category` — Static JSX text node
  - context: `<div> <label className="text-sm font-medium mb-1 block">Filter Category</label> <Select value={filterCategory} onValueChan`
- [421:17] (JSXText) `Point Size:` → key: `common.visualization3d.point_size` — Static JSX text node
  - context: `<label className="text-sm font-medium mb-1 block"> Point Size: {pointSize.toFixed(2)} </label> <Slider`
- [524:45] (JSXText) `Low → High` → key: `common.visualization3d.low_high` — Static JSX text node
  - context: `a-yellow-500 to-red-500 rounded" /> <span className="text-xs">Low → High</span> </div> )} </div>`
- [533:18] (JSXText) `Total Sessions:` → key: `common.visualization3d.total_sessions` — Static JSX text node
  - context: `ace-y-1"> <p>Points: {filteredPoints.length}</p> <p>Total Sessions: {trackingEntries.length}</p> </div> </div>`

### src/components/VisualizationControls.tsx
- [108:11] (JSXText) `Interactive Data Analysis -` → key: `common.visualizationcontrols.interactive_data_analysis` — Static JSX text node
  - context: `"flex items-center gap-2"> <Activity className="h-5 w-5" /> Interactive Data Analysis - {studentName} {filterCriteria.realtime &&`
- [116:61] (JSXAttribute) `Visualization controls` → key: `common.visualizationcontrols.visualization_controls` — Static aria-label attribute
  - context: `</CardTitle> <div className="flex items-center gap-2" aria-label="Visualization controls"> {/* Guided question chips */} <div`
- [153:62] (JSXAttribute) `Open filters panel` → key: `common.visualizationcontrols.open_filters_panel` — Static aria-label attribute
  - context: `etTrigger asChild> <Button variant="outline" size="sm" aria-label="Open filters panel" title="Open filters panel"> <Filter classNa`
- [153:89] (JSXAttribute) `Open filters panel` → key: `common.visualizationcontrols.open_filters_panel` — Static title attribute
  - context: `<Button variant="outline" size="sm" aria-label="Open filters panel" title="Open filters panel"> <Filter className="h-4 w-4 mr-2" />`
- [181:29] (JSXText) `Advanced Filters` → key: `common.visualizationcontrols.advanced_filters` — Static JSX text node
  - context: `-[400px] sm:w-[540px]"> <SheetHeader> <SheetTitle>Advanced Filters</SheetTitle> <SheetDescription>`
- [183:19] (JSXText) `Configure multi-dimensional filters for your data analysis` → key: `common.visualizationcontrols.configure_multi_dimensional_filters_for` — Static JSX text node
  - context: `anced Filters</SheetTitle> <SheetDescription> Configure multi-dimensional filters for your data analysis </She`
- [199:62] (JSXAttribute) `Select layout mode` → key: `common.visualizationcontrols.select_layout_mode` — Static aria-label attribute
  - context: `nuTrigger asChild> <Button variant="outline" size="sm" aria-label="Select layout mode" title="Select layout mode"> {layoutMode ===`
- [199:89] (JSXAttribute) `Select layout mode` → key: `common.visualizationcontrols.select_layout_mode` — Static title attribute
  - context: `<Button variant="outline" size="sm" aria-label="Select layout mode" title="Select layout mode"> {layoutMode === 'grid' && <Grid3x3 classNa`
- [214:17] (JSXText) `Grid View` → key: `common.visualizationcontrols.grid_view` — Static JSX text node
  - context: `('grid')}> <Grid3x3 className="h-4 w-4 mr-2" /> Grid View </DropdownMenuItem> <DropdownMenuItem onCl`
- [218:17] (JSXText) `Focus Mode` → key: `common.visualizationcontrols.focus_mode` — Static JSX text node
  - context: `e('focus')}> <Focus className="h-4 w-4 mr-2" /> Focus Mode </DropdownMenuItem> <DropdownMenuItem onC`
- [229:62] (JSXAttribute) `View options` → key: `common.visualizationcontrols.view_options` — Static aria-label attribute
  - context: `nuTrigger asChild> <Button variant="outline" size="sm" aria-label="View options" title="View options"> <Settings className="h-4 w-`
- [229:83] (JSXAttribute) `View options` → key: `common.visualizationcontrols.view_options` — Static title attribute
  - context: `<Button variant="outline" size="sm" aria-label="View options" title="View options"> <Settings className="h-4 w-4 mr-2" />`
- [241:97] (JSXText) `2D: Emotional energy vs Sensory load (XY)` → key: `common.visualizationcontrols.2d_emotional_energy_vs_sensory` — Static JSX text node
  - context: `<DropdownMenuItem onClick={() => visualizationState.setProjectionPlane('xy')}>2D: Emotional energy vs Sensory load (XY)</DropdownMenuItem> <`
- [242:97] (JSXText) `2D: Emotional energy vs Time (XZ)` → key: `common.visualizationcontrols.2d_emotional_energy_vs_time` — Static JSX text node
  - context: `<DropdownMenuItem onClick={() => visualizationState.setProjectionPlane('xz')}>2D: Emotional energy vs Time (XZ)</DropdownMenuItem> <Dropdown`
- [243:97] (JSXText) `2D: Sensory load vs Time (YZ)` → key: `common.visualizationcontrols.2d_sensory_load_vs_time` — Static JSX text node
  - context: `<DropdownMenuItem onClick={() => visualizationState.setProjectionPlane('yz')}>2D: Sensory load vs Time (YZ)</DropdownMenuItem> </>`
- [263:17] (JSXText) `Clear Highlights` → key: `common.visualizationcontrols.clear_highlights` — Static JSX text node
  - context: `}}> <RefreshCw className="h-4 w-4 mr-2" /> Clear Highlights </DropdownMenuItem> </DropdownMenuCon`
- [270:85] (JSXAttribute) `Export analytics` → key: `common.visualizationcontrols.export_analytics` — Static aria-label attribute
  - context: `<Button variant="outline" size="sm" disabled={isExporting} aria-label="Export analytics" title="Export analytics"> <Download className`
- [270:110] (JSXAttribute) `Export analytics` → key: `common.visualizationcontrols.export_analytics` — Static title attribute
  - context: `="outline" size="sm" disabled={isExporting} aria-label="Export analytics" title="Export analytics"> <Download className="h-4 w-4 mr-2" />`
- [281:17] (JSXText) `Export as PDF` → key: `common.visualizationcontrols.export_as_pdf` — Static JSX text node
  - context: `> <FileText className="h-4 w-4 mr-2" /> Export as PDF </DropdownMenuItem> <DropdownMenuItem`
- [288:17] (JSXText) `Export as CSV` → key: `common.visualizationcontrols.export_as_csv` — Static JSX text node
  - context: `> <FileSpreadsheet className="h-4 w-4 mr-2" /> Export as CSV </DropdownMenuItem> <DropdownMenuItem`
- [295:17] (JSXText) `Export as JSON` → key: `common.visualizationcontrols.export_as_json` — Static JSX text node
  - context: `> <FileJson className="h-4 w-4 mr-2" /> Export as JSON </DropdownMenuItem> </DropdownMenuConte`
- [304:52] (JSXText) `Chart Type` → key: `common.visualizationcontrols.chart_type` — Static JSX text node
  - context: `<div className="space-y-2"> <label className="text-sm font-medium">Chart Type</label> <Select value={selectedChartType} onValueChange={`
- [310:42] (JSXText) `Line Chart` → key: `common.visualizationcontrols.line_chart` — Static JSX text node
  - context: `Trigger> <SelectContent> <SelectItem value="line">Line Chart</SelectItem> <SelectItem value="area">Area Chart</Sel`
- [311:42] (JSXText) `Area Chart` → key: `common.visualizationcontrols.area_chart` — Static JSX text node
  - context: `m value="line">Line Chart</SelectItem> <SelectItem value="area">Area Chart</SelectItem> <SelectItem value="scatter">Scatter Plot`
- [312:45] (JSXText) `Scatter Plot` → key: `common.visualizationcontrols.scatter_plot` — Static JSX text node
  - context: `alue="area">Area Chart</SelectItem> <SelectItem value="scatter">Scatter Plot</SelectItem> <SelectItem value="composed">Combined<`
- [319:52] (JSXText) `Select Emotions` → key: `common.visualizationcontrols.select_emotions` — Static JSX text node
  - context: `<div className="space-y-2"> <label className="text-sm font-medium">Select Emotions</label> <div className="grid grid-cols-2 gap-2 w-64`
- [343:52] (JSXText) `Time Range` → key: `common.visualizationcontrols.time_range` — Static JSX text node
  - context: `<div className="space-y-2"> <label className="text-sm font-medium">Time Range</label> <Select value={selectedTimeRange} onValueChange={`
- [349:40] (JSXText) `Last 7 days` → key: `common.visualizationcontrols.last_7_days` — Static JSX text node
  - context: `ctTrigger> <SelectContent> <SelectItem value="7d">Last 7 days</SelectItem> <SelectItem value="30d">Last 30 days</S`
- [350:41] (JSXText) `Last 30 days` → key: `common.visualizationcontrols.last_30_days` — Static JSX text node
  - context: `tem value="7d">Last 7 days</SelectItem> <SelectItem value="30d">Last 30 days</SelectItem> <SelectItem value="90d">Last 90 days</`
- [351:41] (JSXText) `Last 90 days` → key: `common.visualizationcontrols.last_90_days` — Static JSX text node
  - context: `m value="30d">Last 30 days</SelectItem> <SelectItem value="90d">Last 90 days</SelectItem> <SelectItem value="all">All time</Sele`
- [352:41] (JSXText) `All time` → key: `common.visualizationcontrols.all_time` — Static JSX text node
  - context: `m value="90d">Last 90 days</SelectItem> <SelectItem value="all">All time</SelectItem> </SelectContent> </Select>`
- [357:68] (JSXAttribute) `Data counts` → key: `common.visualizationcontrols.data_counts` — Static aria-label attribute
  - context: `</div> <div className="flex items-center gap-2 mt-8" aria-label="Data counts"> <Badge variant="outline" className="bg-green-50 text-`
- [362:51] (JSXText) `sensory inputs` → key: `common.visualizationcontrols.sensory_inputs` — Static JSX text node
  - context: `xt-blue-700 border-blue-200"> {filteredData.sensoryInputs.length} sensory inputs </Badge> <Badge variant="outline" classNa`

### src/components/analysis/CorrelationHeatmap.tsx
- [25:14] (JSXText) `Insufficient data for correlation analysis` → key: `common.correlationheatmap.insufficient_data_for_correlation_analysis` — Static JSX text node
  - context: `<BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>Insufficient data for correlation analysis</p> <p className="text-sm">`
- [26:34] (JSXText) `At least 10 tracking entries needed` → key: `common.correlationheatmap.at_least_10_tracking_entries` — Static JSX text node
  - context: `Insufficient data for correlation analysis</p> <p className="text-sm">At least 10 tracking entries needed</p> <div className="mt-3 flex item`
- [31:26] (JSXAttribute) `Retry correlation analysis` → key: `common.correlationheatmap.retry_correlation_analysis` — Static aria-label attribute
  - context: `size="sm" variant="outline" aria-label="Retry correlation analysis" title="Retry correlation analysis"`
- [32:21] (JSXAttribute) `Retry correlation analysis` → key: `common.correlationheatmap.retry_correlation_analysis` — Static title attribute
  - context: `line" aria-label="Retry correlation analysis" title="Retry correlation analysis" onClick={onRetry} >`
- [40:26] (JSXAttribute) `Show all time range` → key: `common.correlationheatmap.show_all_time_range` — Static aria-label attribute
  - context: `size="sm" variant="ghost" aria-label="Show all time range" title="Show all time range" on`
- [41:21] (JSXAttribute) `Show all time range` → key: `common.correlationheatmap.show_all_time_range` — Static title attribute
  - context: `iant="ghost" aria-label="Show all time range" title="Show all time range" onClick={onShowAllTime} >`
- [44:15] (JSXText) `Show all time` → key: `common.correlationheatmap.show_all_time` — Static JSX text node
  - context: `l time range" onClick={onShowAllTime} > Show all time </Button> </div> </div> </div>`

### src/components/analysis/PatternAnalysisView.tsx
- [68:23] (JSXAttribute) `Loading chart data` → key: `common.patternanalysisview.loading_chart_data` — Static aria-label attribute
  - context: `border-red-200'; }; if (isAnalyzing) { return ( <div aria-label="Loading chart data" className="h-[400px] w-full"> <div className="h-ful`
- [79:14] (JSXText) `No patterns detected yet` → key: `common.patternanalysisview.no_patterns_detected_yet` — Static JSX text node
  - context: `"> <Zap className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>No patterns detected yet</p> <p className="text-sm">Need more data for`
- [80:34] (JSXText) `Need more data for pattern analysis` → key: `common.patternanalysisview.need_more_data_for_pattern` — Static JSX text node
  - context: `" /> <p>No patterns detected yet</p> <p className="text-sm">Need more data for pattern analysis</p> </div> </div> ); }`
- [92:13] (JSXText) `Detected Patterns (` → key: `common.patternanalysisview.detected_patterns` — Static JSX text node
  - context: `lex items-center gap-2"> <Target className="h-5 w-5" /> Detected Patterns ({patterns.length}) </h3> <div className="`
- [111:65] (JSXText) `% confident` → key: `common.patternanalysisview.confident` — Static JSX text node
  - context: `n.confidence)}> {Math.round(pattern.confidence * 100)}% confident </Badge> </div>`
- [141:13] (JSXText) `Predictive Insights (` → key: `common.patternanalysisview.predictive_insights` — Static JSX text node
  - context: `items-center gap-2"> <TrendingUp className="h-5 w-5" /> Predictive Insights ({predictiveInsights.length}) </h3> <div`
- [161:65] (JSXText) `% confidence` → key: `common.patternanalysisview.confidence` — Static JSX text node
  - context: `iant="outline"> {Math.round(insight.confidence * 100)}% confidence </Badge> </div>`
- [226:13] (JSXText) `Detected Anomalies (` → key: `common.patternanalysisview.detected_anomalies` — Static JSX text node
  - context: `ms-center gap-2"> <AlertTriangle className="h-5 w-5" /> Detected Anomalies ({anomalies.length}) </h3> <div className`

### src/components/layouts/VisualizationLayouts.tsx
- [21:36] (JSXText) `Select visualizations to display` → key: `common.visualizationlayouts.select_visualizations_to_display` — Static JSX text node
  - context: `sName="h-16 w-16 mx-auto mb-4 opacity-50" /> <p className="text-lg">Select visualizations to display</p> <p className="text-sm">Choose f`
- [22:36] (JSXText) `Choose from the options above` → key: `common.visualizationlayouts.choose_from_the_options_above` — Static JSX text node
  - context: `ext-lg">Select visualizations to display</p> <p className="text-sm">Choose from the options above</p> </div> </CardContent>`
- [49:36] (JSXText) `Select a visualization to focus on` → key: `common.visualizationlayouts.select_a_visualization_to_focus` — Static JSX text node
  - context: `sName="h-16 w-16 mx-auto mb-4 opacity-50" /> <p className="text-lg">Select a visualization to focus on</p> <p className="text-sm">Choose`
- [50:36] (JSXText) `Choose from the options above` → key: `common.visualizationlayouts.choose_from_the_options_above` — Static JSX text node
  - context: `t-lg">Select a visualization to focus on</p> <p className="text-sm">Choose from the options above</p> </div> </CardContent>`

### src/components/lazy/LazyInteractiveDataVisualization.tsx
- [12:9] (JSXText) `Loading Interactive Visualization...` → key: `common.lazyinteractivedatavisualization.loading_interactive_visualization` — Static JSX text node
  - context: `s-center gap-2"> <Activity className="h-5 w-5 animate-pulse" /> Loading Interactive Visualization... </CardTitle> </CardHeader> <C`
- [39:9] (JSXText) `Failed to load Interactive Visualization` → key: `common.lazyinteractivedatavisualization.failed_to_load_interactive_visualization` — Static JSX text node
  - context: `er gap-2 text-destructive"> <AlertCircle className="h-5 w-5" /> Failed to load Interactive Visualization </CardTitle> </CardHeader>`
- [44:9] (JSXText) `The interactive data visualization component could not be loaded. 
        This might be due to missing dependencies or a temporary loading issue.` → key: `common.lazyinteractivedatavisualization.the_interactive_data_visualization_component` — Static JSX text node
  - context: `> <CardContent> <p className="text-sm text-muted-foreground"> The interactive data visualization component could not be loaded. This`
- [48:9] (JSXText) `Please refresh the page or contact support if the issue persists.` → key: `common.lazyinteractivedatavisualization.please_refresh_the_page_or` — Static JSX text node
  - context: `ue. </p> <p className="text-sm text-muted-foreground mt-2"> Please refresh the page or contact support if the issue persists. </p>`

### src/components/lazy/LazyLoadWrapper.tsx
- [20:56] (JSXText) `Loading component...` → key: `common.lazyloadwrapper.loading_component` — Static JSX text node
  - context: `to mb-4 text-primary" /> <p className="text-sm text-muted-foreground">Loading component...</p> </div> </div> <div className="space`
- [36:53] (JSXText) `Failed to load component` → key: `common.lazyloadwrapper.failed_to_load_component` — Static JSX text node
  - context: `iv className="text-center"> <p className="text-destructive font-medium">Failed to load component</p> <p className="text-sm text-muted-foreground`
- [38:11] (JSXText) `Please refresh the page or try again later.` → key: `common.lazyloadwrapper.please_refresh_the_page_or` — Static JSX text node
  - context: `ponent</p> <p className="text-sm text-muted-foreground mt-2"> Please refresh the page or try again later. </p> </div> </Card`
- [80:18] (MessageAPI) `LazyLoadWrapper Error:` → key: `common.lazyloadwrapper.lazyloadwrapper_error` — Message API call: error()
  - context: `componentDidCatch(error: Error, errorInfo: React.ErrorInfo) { logger.error('LazyLoadWrapper Error:', error, errorInfo); } render() { if (this.stat`

### src/components/lazy/LazyReportBuilder.tsx
- [11:9] (JSXText) `Loading Report Builder...` → key: `common.lazyreportbuilder.loading_report_builder` — Static JSX text node
  - context: `s-center gap-2"> <FileText className="h-5 w-5 animate-pulse" /> Loading Report Builder... </CardTitle> </CardHeader> <CardContent`

### src/components/ui/date-range-picker.tsx
- [68:21] (JSXText) `Pick a date range` → key: `common.date_range_picker.pick_a_date_range` — Static JSX text node
  - context: `t(date.from, "LLL dd, y") ) ) : ( <span>Pick a date range</span> )} </Button> </PopoverTri`

### src/components/ui/sidebar.tsx
- [280:33] (JSXText) `Toggle Sidebar` → key: `common.sidebar.toggle_sidebar` — Static JSX text node
  - context: `}} {...props} > <PanelLeft /> <span className="sr-only">Toggle Sidebar</span> </Button> ) }) SidebarTrigger.displayName = "Sidebar`
- [296:18] (JSXAttribute) `Toggle Sidebar` → key: `common.sidebar.toggle_sidebar` — Static aria-label attribute
  - context: `return ( <button ref={ref} data-sidebar="rail" aria-label="Toggle Sidebar" tabIndex={-1} onClick={toggleSidebar} title="`
- [299:13] (JSXAttribute) `Toggle Sidebar` → key: `common.sidebar.toggle_sidebar` — Static title attribute
  - context: `="Toggle Sidebar" tabIndex={-1} onClick={toggleSidebar} title="Toggle Sidebar" className={cn( "absolute inset-y-0 z-20 hidden w-`

### src/pages/Dashboard.tsx
- [42:22] (MessageAPI) `Dashboard: Error loading students` → key: `common.dashboard.dashboard_error_loading_students` — Message API call: error()
  - context: `(); setStudents(students); } catch (error) { logger.error('Dashboard: Error loading students', { error }); setStudents([]);`
- [121:20] (MessageAPI) `Dashboard: Error calculating statistics` → key: `common.dashboard.dashboard_error_calculating_statistics` — Message API call: error()
  - context: `tries: entriesTrend } }; } catch (error) { logger.error('Dashboard: Error calculating statistics', { error }); return { todayEntri`
- [171:21] (MessageAPI) `Report exported successfully` → key: `common.dashboard.report_exported_successfully` — Message API call: success()
  - context: `L] Revoked URL after CSV export', { url: blobUrl }); toast.success('Report exported successfully'); } catch { toast.error('Export failed.`
- [171:21] (MessageAPI) `Report exported successfully` → key: `common.dashboard.report_exported_successfully` — sonner toast.success()
  - context: `L] Revoked URL after CSV export', { url: blobUrl }); toast.success('Report exported successfully'); } catch { toast.error('Export failed.`
- [173:19] (MessageAPI) `Export failed. Please try again.` → key: `common.dashboard.export_failed_please_try_again` — Message API call: error()
  - context: `toast.success('Report exported successfully'); } catch { toast.error('Export failed. Please try again.'); } }; const handleViewStudent = (st`
- [173:19] (MessageAPI) `Export failed. Please try again.` → key: `common.dashboard.export_failed_please_try_again` — sonner toast.error()
  - context: `toast.success('Report exported successfully'); } catch { toast.error('Export failed. Please try again.'); } }; const handleViewStudent = (st`
- [192:9] (JSXText) `Skip to main content` → key: `common.dashboard.skip_to_main_content` — Static JSX text node
  - context: `imary text-primary-foreground px-4 py-2 rounded-md font-medium" > Skip to main content </a> {/* Animated glow background */}`
- [214:63] (JSXAttribute) `Mock Data` → key: `common.dashboard.mock_data` — Static title attribute
  - context: `gTrigger asChild> <Button variant="outline" size="icon" title="Mock Data" aria-label="Open mock data loader"> <FlaskConica`
- [214:86] (JSXAttribute) `Open mock data loader` → key: `common.dashboard.open_mock_data_loader` — Static aria-label attribute
  - context: `<Button variant="outline" size="icon" title="Mock Data" aria-label="Open mock data loader"> <FlaskConical className="h-4 w-4" /`
- [220:34] (JSXText) `Mock Data Loader` → key: `common.dashboard.mock_data_loader` — Static JSX text node
  - context: `="max-w-2xl"> <DialogHeader> <DialogTitle>Mock Data Loader</DialogTitle> </DialogHeader>`
- [227:63] (JSXAttribute) `Storage Management` → key: `common.dashboard.storage_management` — Static title attribute
  - context: `gTrigger asChild> <Button variant="outline" size="icon" title="Storage Management" aria-label="Open storage management"> <`
- [227:95] (JSXAttribute) `Open storage management` → key: `common.dashboard.open_storage_management` — Static aria-label attribute
  - context: `<Button variant="outline" size="icon" title="Storage Management" aria-label="Open storage management"> <Database className="h-4 w-4" />`
- [233:34] (JSXText) `Storage Management` → key: `common.dashboard.storage_management` — Static JSX text node
  - context: `="max-w-2xl"> <DialogHeader> <DialogTitle>Storage Management</DialogTitle> </DialogHeader>`
- [309:23] (JSXText) `Eksporter Rapport` → key: `common.dashboard.eksporter_rapport` — Static JSX text node
  - context: `<Download className="mr-2 h-4 w-4" /> Eksporter Rapport </Button> </AlertDialogT`
- [314:41] (JSXText) `Are you sure?` → key: `common.dashboard.are_you_sure` — Static JSX text node
  - context: `<AlertDialogHeader> <AlertDialogTitle>Are you sure?</AlertDialogTitle> <AlertDialogDescription>`
- [316:25] (JSXText) `This will export the report as a CSV file.` → key: `common.dashboard.this_will_export_the_report` — Static JSX text node
  - context: `ogTitle> <AlertDialogDescription> This will export the report as a CSV file. </AlertDialogDe`
- [332:19] (JSXText) `Ny Registrering` → key: `common.dashboard.ny_registrering` — Static JSX text node
  - context: `<Plus className="mr-2 h-4 w-4 group-hover:animate-bounce" /> Ny Registrering </Button> </div> </div`
- [357:64] (JSXText) `from last week` → key: `common.dashboard.from_last_week` — Static JSX text node
  - context: `ixed(0)}%</span> <span className="ml-1 text-muted-foreground">from last week</span> </div> </Card>`
- [379:64] (JSXText) `from last week` → key: `common.dashboard.from_last_week` — Static JSX text node
  - context: `ixed(0)}%</span> <span className="ml-1 text-muted-foreground">from last week</span> </div> </Card>`
- [401:64] (JSXText) `from last week` → key: `common.dashboard.from_last_week` — Static JSX text node
  - context: `d-400">5%</span> <span className="ml-1 text-muted-foreground">from last week</span> </div> </Card> <`
- [420:19] (JSXText) `Legg til elev` → key: `common.dashboard.legg_til_elev` — Static JSX text node
  - context: `2 h-4 w-4 group-hover:animate-bounce transition-transform" /> Legg til elev </Button> </div> {/*`
- [508:79] (JSXText) `Want to explore with sample data?` → key: `common.dashboard.want_to_explore_with_sample` — Static JSX text node
  - context: `> <h4 className="text-lg font-semibold text-foreground">Want to explore with sample data?</h4> <p className="tex`
- [510:27] (JSXText) `Load mock data to test features and see how the app works` → key: `common.dashboard.load_mock_data_to_test` — Static JSX text node
  - context: `<p className="text-sm text-muted-foreground mt-1"> Load mock data to test features and see how the app works`
- [517:29] (JSXText) `Load Sample Data` → key: `common.dashboard.load_sample_data` — Static JSX text node
  - context: `<FlaskConical className="h-4 w-4 mr-2" /> Load Sample Data </Button> </D`
- [522:42] (JSXText) `Mock Data Loader` → key: `common.dashboard.mock_data_loader` — Static JSX text node
  - context: `<DialogHeader> <DialogTitle>Mock Data Loader</DialogTitle> </DialogHeader>`

### src/pages/NotFound.tsx
- [14:18] (MessageAPI) `404 Error: User attempted to access non-existent route` → key: `common.notfound.404_error_user_attempted_to` — Message API call: error()
  - context: `; const { tCommon } = useTranslation(); useEffect(() => { logger.error("404 Error: User attempted to access non-existent route", { path: location`

### src/workers/analytics.worker.ts
- [357:18] (MessageAPI) `[analytics.worker] error` → key: `common.analytics_worker.analytics_worker_error` — Message API call: error()
  - context: `'complete', percent: 100 } }); } catch (error) { try { logger.error('[analytics.worker] error', error); } catch { /* noop */ } log`
- [361:18] (MessageAPI) `Error in analytics worker:` → key: `common.analytics_worker.error_in_analytics_worker` — Message API call: error()
  - context: `s.worker] error', error); } catch { /* noop */ } logger.error('Error in analytics worker:', error); // Post an error message back to the m`

### src/workers/hyperparameterOptimization.worker.ts
- [125:18] (MessageAPI) `Error in hyperparameter optimization worker:` → key: `common.hyperparameteroptimization_worker.error_in_hyperparameter_optimization_worker` — Message API call: error()
  - context: `the main thread postMessage(result); } catch (error) { logger.error('Error in hyperparameter optimization worker:', error); // Post error messag`
- [297:18] (MessageAPI) `Grid search failed:` → key: `common.hyperparameteroptimization_worker.grid_search_failed` — Message API call: error()
  - context: `r strategy: 'gridSearch' }; } catch (error) { logger.error('Grid search failed:', error); throw new Error(\`Grid search optimization fai`
- [426:18] (MessageAPI) `Random search failed:` → key: `common.hyperparameteroptimization_worker.random_search_failed` — Message API call: error()
  - context: `strategy: 'randomSearch' }; } catch (error) { logger.error('Random search failed:', error); throw new Error(\`Random search optimization`

## Namespace: dashboard

### src/components/layouts/DashboardLayout.tsx
- [40:64] (JSXAttribute) `Visualization tabs` → key: `dashboard.dashboardlayout.visualization_tabs` — Static aria-label attribute
  - context: `ssName="w-full"> <TabsList className="grid w-full grid-cols-5" aria-label="Visualization tabs"> <TabsTrigger value="trends" className="flex items-`
- [55:11] (JSXText) `3D View` → key: `dashboard.dashboardlayout.3d_view` — Static JSX text node
  - context: `Name="flex items-center gap-2"> <Eye className="h-4 w-4" /> 3D View </TabsTrigger> <TabsTrigger value="timeline" className="`
- [70:76] (JSXText) `Avg Emotion Intensity` → key: `dashboard.dashboardlayout.avg_emotion_intensity` — Static JSX text node
  - context: `div> <p className="text-sm font-medium text-muted-foreground">Avg Emotion Intensity</p> <p className="text-2xl font-bold">`
- [86:76] (JSXText) `Positive Emotion Rate` → key: `dashboard.dashboardlayout.positive_emotion_rate` — Static JSX text node
  - context: `div> <p className="text-sm font-medium text-muted-foreground">Positive Emotion Rate</p> <p className="text-2xl font-bold">`
- [104:76] (JSXText) `Sensory Seeking Rate` → key: `dashboard.dashboardlayout.sensory_seeking_rate` — Static JSX text node
  - context: `div> <p className="text-sm font-medium text-muted-foreground">Sensory Seeking Rate</p> <p className="text-2xl font-bold">`
- [126:26] (JSXText) `Significant Correlations` → key: `dashboard.dashboardlayout.significant_correlations` — Static JSX text node
  - context: `gth > 0 && ( <Card> <CardHeader> <CardTitle>Significant Correlations</CardTitle> </CardHeader> <Card`
- [134:107] (JSXText) `↔` → key: `dashboard.dashboardlayout.` — Static JSX text node
  - context: `air.factor1.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} ↔{' '} {pair.factor2.replace(/([A-Z])/g, ' $1').replace(`
- [138:74] (JSXText) `correlation (r =` → key: `dashboard.dashboardlayout.correlation_r` — Static JSX text node
  - context: `ound"> {pair.correlation > 0 ? 'Positive' : 'Negative'} correlation (r = {pair.correlation.toFixed(3)}) </p>`

### src/components/profile-sections/DashboardSection.tsx
- [88:13] (JSXText) `Sammendrag av` → key: `dashboard.dashboardsection.sammendrag_av` — Static JSX text node
  - context: `bold">Oversikt</h2> <p className="text-muted-foreground"> Sammendrag av {student.name}s data og aktivitet </p> </div>`
- [88:41] (JSXText) `s data og aktivitet` → key: `dashboard.dashboardsection.s_data_og_aktivitet` — Static JSX text node
  - context: `<p className="text-muted-foreground"> Sammendrag av {student.name}s data og aktivitet </p> </div> <Button onCl`
- [185:60] (JSXText) `Samlet kvalitetsscore` → key: `dashboard.dashboardsection.samlet_kvalitetsscore` — Static JSX text node
  - context: `"> <div> <p className="text-sm text-muted-foreground">Samlet kvalitetsscore</p> <p className="text-3xl font-bold">{dataQ`
- [246:15] (JSXText) `AI-genererte innsikter` → key: `dashboard.dashboardsection.ai_genererte_innsikter` — Static JSX text node
  - context: `"> <TrendingUp className="h-5 w-5 animate-pulse" /> AI-genererte innsikter </CardTitle> </CardHeader>`
- [261:15] (JSXText) `AI-genererte innsikter` → key: `dashboard.dashboardsection.ai_genererte_innsikter` — Static JSX text node
  - context: `s-center gap-2"> <TrendingUp className="h-5 w-5" /> AI-genererte innsikter </CardTitle> </CardHeader>`
- [279:54] (JSXText) `Nylige økter` → key: `dashboard.dashboardsection.nylige_kter` — Static JSX text node
  - context: `gth > 0 && ( <div> <h3 className="text-lg font-semibold mb-4">Nylige økter</h3> <PaginatedSessionsList sessions={filteredData.entrie`

## Namespace: student

### src/components/StudentProfileSidebar.tsx
- [137:13] (JSXText) `Verktøy` → key: `student.studentprofilesidebar.verkt_y` — Static JSX text node
  - context: `foreground text-xs font-medium uppercase tracking-wider px-3 py-2"> Verktøy </SidebarGroupLabel> <SidebarGroupContent>`
- [180:52] (JSXText) `Mock Data` → key: `student.studentprofilesidebar.mock_data` — Static JSX text node
  - context: `{state !== "collapsed" && ( <span className="text-sm ml-3">Mock Data</span> )} </SidebarMenuButton>`

### src/components/profile-sections/ToolsSection.tsx
- [90:44] (JSXText) `Verktøy` → key: `student.toolssection.verkt_y` — Static JSX text node
  - context: `6"> {/* Header */} <div> <h2 className="text-2xl font-bold">Verktøy</h2> <p className="text-muted-foreground"> Avanserte v`
- [92:11] (JSXText) `Avanserte verktøy for søk, maler og sammenligning` → key: `student.toolssection.avanserte_verkt_y_for_s` — Static JSX text node
  - context: `font-bold">Verktøy</h2> <p className="text-muted-foreground"> Avanserte verktøy for søk, maler og sammenligning </p> </div>`

### src/components/ui/PremiumStudentCard.tsx
- [52:19] (MessageAPI) `Failed to delete student` → key: `student.premiumstudentcard.failed_to_delete_student` — Message API call: error()
  - context: `e) { onDelete(student); } } catch (error) { toast.error('Failed to delete student', { description: error instanceof Error ? erro`
- [52:19] (MessageAPI) `Failed to delete student` → key: `student.premiumstudentcard.failed_to_delete_student` — sonner toast.error()
  - context: `e) { onDelete(student); } } catch (error) { toast.error('Failed to delete student', { description: error instanceof Error ? erro`
- [182:62] (JSXText) `Denne uken` → key: `student.premiumstudentcard.denne_uken` — Static JSX text node
  - context: `iesThisWeek}</div> <div className="text-xs text-muted-foreground">Denne uken</div> </div> <div className="text-center p-2`
- [186:62] (JSXText) `Sist sporet` → key: `student.premiumstudentcard.sist_sporet` — Static JSX text node
  - context: `TrackedText}</div> <div className="text-xs text-muted-foreground">Sist sporet</div> </div> </div> {/* Action Butt`
- [231:37] (JSXText) `Delete Student` → key: `student.premiumstudentcard.delete_student` — Static JSX text node
  - context: `ontent> <AlertDialogHeader> <AlertDialogTitle>Delete Student</AlertDialogTitle> <AlertDialogDescription>`
- [233:21] (JSXText) `Are you sure you want to delete` → key: `student.premiumstudentcard.are_you_sure_you_want` — Static JSX text node
  - context: `lertDialogTitle> <AlertDialogDescription> Are you sure you want to delete {student.name}? This will permanently delete all`
- [233:67] (JSXText) `? This will permanently delete all their tracking data, goals, and associated records. This action cannot be undone.` → key: `student.premiumstudentcard.this_will_permanently_delete_all` — Static JSX text node
  - context: `gDescription> Are you sure you want to delete {student.name}? This will permanently delete all their tracking data, goals, and associated re`
- [243:21] (JSXText) `Delete Student` → key: `student.premiumstudentcard.delete_student` — Static JSX text node
  - context: `> <Trash2 className="h-4 w-4 mr-2" /> Delete Student </AlertDialogAction> </AlertDia`

### src/components/ui/StudentCard.tsx
- [52:13] (JSXText) `View Profile` → key: `student.studentcard.view_profile` — Static JSX text node
  - context: `exia" > <FileText className="h-4 w-4 mr-2" /> View Profile </Button> <Button size="sm"`
- [60:13] (JSXText) `Track Now` → key: `student.studentcard.track_now` — Static JSX text node
  - context: `90" > <TrendingUp className="h-4 w-4 mr-2" /> Track Now </Button> </div> </CardContent> </Card>`

### src/pages/AddStudent.tsx
- [55:20] (MessageAPI) `Error adding student:` → key: `student.addstudent.error_adding_student` — Message API call: error()
  - context: `dent.success'))); navigate('/'); } catch (error) { logger.error('Error adding student:', error); const errorMessage = error instanceof Err`

### src/pages/StudentProfile.tsx
- [157:21] (MessageAPI) `Auto-seeding minimal demo data for mock route` → key: `student.studentprofile.auto_seeding_minimal_demo_data` — Message API call: info()
  - context: `.current = true; setIsSeedingData(true); try { logger.info('Auto-seeding minimal demo data for mock route', { studentId });`
- [166:23] (MessageAPI) `Demo data created successfully` → key: `student.studentprofile.demo_data_created_successfully` — Message API call: success()
  - context: `); // Show non-intrusive success message toast.success('Demo data created successfully', { description: 'Sample data has been`
- [166:23] (MessageAPI) `Demo data created successfully` → key: `student.studentprofile.demo_data_created_successfully` — sonner toast.success()
  - context: `); // Show non-intrusive success message toast.success('Demo data created successfully', { description: 'Sample data has been`
- [175:22] (MessageAPI) `Failed to auto-seed mock data` → key: `student.studentprofile.failed_to_auto_seed_mock` — Message API call: error()
  - context: `reloadData(); } } catch (error) { logger.error('Failed to auto-seed mock data', { error, studentId }); toast.error('Fai`
- [176:21] (MessageAPI) `Failed to create demo data` → key: `student.studentprofile.failed_to_create_demo_data` — Message API call: error()
  - context: `ror('Failed to auto-seed mock data', { error, studentId }); toast.error('Failed to create demo data', { description: 'Please try loading mock`
- [176:21] (MessageAPI) `Failed to create demo data` → key: `student.studentprofile.failed_to_create_demo_data` — sonner toast.error()
  - context: `ror('Failed to auto-seed mock data', { error, studentId }); toast.error('Failed to create demo data', { description: 'Please try loading mock`
- [229:24] (MessageAPI) `Error generating insights` → key: `student.studentprofile.error_generating_insights` — Message API call: error()
  - context: `} } catch (error) { if (!signal.aborted) { logger.error('Error generating insights', { error }); setInsights(null);`
- [231:23] (MessageAPI) `Failed to generate insights` → key: `student.studentprofile.failed_to_generate_insights` — Message API call: error()
  - context: `ating insights', { error }); setInsights(null); toast.error('Failed to generate insights'); } } finally { if (!signal.`
- [231:23] (MessageAPI) `Failed to generate insights` → key: `student.studentprofile.failed_to_generate_insights` — sonner toast.error()
  - context: `ating insights', { error }); setInsights(null); toast.error('Failed to generate insights'); } } finally { if (!signal.`
- [259:26] (MessageAPI) `[SAFE] analyticsManager.triggerAnalyticsForStudent failed` → key: `student.studentprofile.safe_analyticsmanager_triggeranalyticsforstudent_failed` — Message API call: error()
  - context: `} }) .catch((err) => { logger.error('[SAFE] analyticsManager.triggerAnalyticsForStudent failed', { error: err, stude`
- [271:24] (MessageAPI) `[SAFE] analyticsManager.initializeStudentAnalytics failed` → key: `student.studentprofile.safe_analyticsmanager_initializestudentanalytics_failed` — Message API call: error()
  - context: `entAnalytics done'); } } catch (err) { logger.error('[SAFE] analyticsManager.initializeStudentAnalytics failed', { error: err, stude`
- [276:20] (MessageAPI) `[SAFE] analyticsManager outer try/catch caught error` → key: `student.studentprofile.safe_analyticsmanager_outer_try_catch` — Message API call: error()
  - context: `/ Extra safety net; never rethrow from analytics side-effect logger.error('[SAFE] analyticsManager outer try/catch caught error', { error: err }); }`
- [341:20] (MessageAPI) `Export error` → key: `student.studentprofile.export_error` — Message API call: error()
  - context: `as ${format.toUpperCase()}\`); } catch (error: unknown) { logger.error('Export error', { error }); const errorMessage = error instanceof Error ?`
- [363:21] (MessageAPI) `Backup created successfully` → key: `student.studentprofile.backup_created_successfully` — Message API call: success()
  - context: `]/g, '-')}.json\`; downloadBlob(backupBlob, filename); toast.success('Backup created successfully'); } catch (error) { logger.error('Backup`
- [363:21] (MessageAPI) `Backup created successfully` → key: `student.studentprofile.backup_created_successfully` — sonner toast.success()
  - context: `]/g, '-')}.json\`; downloadBlob(backupBlob, filename); toast.success('Backup created successfully'); } catch (error) { logger.error('Backup`
- [365:20] (MessageAPI) `Backup error` → key: `student.studentprofile.backup_error` — Message API call: error()
  - context: `uccess('Backup created successfully'); } catch (error) { logger.error('Backup error', { error }); toast.error('Backup failed. Please try again.'`
- [366:19] (MessageAPI) `Backup failed. Please try again.` → key: `student.studentprofile.backup_failed_please_try_again` — Message API call: error()
  - context: `atch (error) { logger.error('Backup error', { error }); toast.error('Backup failed. Please try again.'); } }, [student, trackingEntries, allEm`
- [366:19] (MessageAPI) `Backup failed. Please try again.` → key: `student.studentprofile.backup_failed_please_try_again` — sonner toast.error()
  - context: `atch (error) { logger.error('Backup error', { error }); toast.error('Backup failed. Please try again.'); } }, [student, trackingEntries, allEm`
- [383:17] (JSXText) `This will only take a moment` → key: `student.studentprofile.this_will_only_take_a` — Static JSX text node
  - context: `<p className="text-sm text-muted-foreground mt-2"> This will only take a moment </p> )} </div>`
- [396:43] (JSXText) `Student not found.` → key: `student.studentprofile.student_not_found` — Static JSX text node
  - context: `className="flex items-center gap-2"> <p className="text-destructive">Student not found.</p> </div> </div> ); } return ( <S`
- [415:92] (JSXAttribute) `Go back to dashboard` → key: `student.studentprofile.go_back_to_dashboard` — Static aria-label attribute
  - context: `<Button variant="ghost" size="sm" onClick={() => navigate('/')} aria-label="Go back to dashboard"> <ArrowLeft className="h-4 w-4 mr-2" />`
- [423:119] (JSXAttribute) `Open mock data loader` → key: `student.studentprofile.open_mock_data_loader` — Static aria-label attribute
  - context: `utline" size="sm" className="flex items-center justify-center group" aria-label="Open mock data loader"> <FileText className="h-4 w-4 mr-2`
- [425:23] (JSXText) `Load Mock Data` → key: `student.studentprofile.load_mock_data` — Static JSX text node
  - context: `4 w-4 mr-2 transition-transform group-hover:rotate-12" /> Load Mock Data </Button> </DialogTrigger>`
- [430:36] (JSXText) `Mock Data for Testing & Analysis` → key: `student.studentprofile.mock_data_for_testing_analysis` — Static JSX text node
  - context: `-y-auto"> <DialogHeader> <DialogTitle>Mock Data for Testing & Analysis</DialogTitle> </DialogHeade`
- [473:56] (JSXText) `Mål og målstyring` → key: `student.studentprofile.m_l_og_m_lstyring` — Static JSX text node
  - context: `<div> <h2 className="text-2xl font-bold">Mål og målstyring</h2> <p className="text-muted-foreground">`
- [475:23] (JSXText) `Administrer og følg opp` → key: `student.studentprofile.administrer_og_f_lg_opp` — Static JSX text node
  - context: `<p className="text-muted-foreground"> Administrer og følg opp {student.name}s IEP-mål </p>`
- [475:61] (JSXText) `s IEP-mål` → key: `student.studentprofile.s_iep_m_l` — Static JSX text node
  - context: `-muted-foreground"> Administrer og følg opp {student.name}s IEP-mål </p> </div> <M`
- [484:57] (JSXText) `Fremgang og utvikling` → key: `student.studentprofile.fremgang_og_utvikling` — Static JSX text node
  - context: `<div> <h2 className="text-2xl font-bold">Fremgang og utvikling</h2> <p className="text-muted-foregro`
- [486:47] (JSXText) `s utvikling over tid` → key: `student.studentprofile.s_utvikling_over_tid` — Static JSX text node
  - context: `lassName="text-muted-foreground"> Analyser {student.name}s utvikling over tid </p> </div>`
- [495:56] (JSXText) `Rapporter og eksport` → key: `student.studentprofile.rapporter_og_eksport` — Static JSX text node
  - context: `<div> <h2 className="text-2xl font-bold">Rapporter og eksport</h2> <p className="text-muted-foregroun`
- [497:23] (JSXText) `Generer rapporter og eksporter data for` → key: `student.studentprofile.generer_rapporter_og_eksporter_data` — Static JSX text node
  - context: `<p className="text-muted-foreground"> Generer rapporter og eksporter data for {student.name} </p>`
- [502:60] (JSXText) `Eksporter PDF` → key: `student.studentprofile.eksporter_pdf` — Static JSX text node
  - context: `eExportData('pdf')}> <FileText className="h-4 w-4 mr-2" />Eksporter PDF </Button> <Button variant=`
- [505:60] (JSXText) `Eksporter CSV` → key: `student.studentprofile.eksporter_csv` — Static JSX text node
  - context: `eExportData('csv')}> <Calendar className="h-4 w-4 mr-2" />Eksporter CSV </Button> <Button variant=`
- [508:60] (JSXText) `Eksporter JSON` → key: `student.studentprofile.eksporter_json` — Static JSX text node
  - context: `ExportData('json')}> <Download className="h-4 w-4 mr-2" />Eksporter JSON </Button> <Button variant`
- [511:56] (JSXText) `Opprett backup` → key: `student.studentprofile.opprett_backup` — Static JSX text node
  - context: `lick={handleBackupData}> <Save className="h-4 w-4 mr-2" />Opprett backup </Button> </div>`
- [540:58] (JSXText) `Enhanced Tracking Tools` → key: `student.studentprofile.enhanced_tracking_tools` — Static JSX text node
  - context: `<div> <h2 className="text-2xl font-bold">Enhanced Tracking Tools</h2> <p className="text-muted-fore`
- [542:25] (JSXText) `Advanced data collection and smart entry tools for` → key: `student.studentprofile.advanced_data_collection_and_smart` — Static JSX text node
  - context: `<p className="text-muted-foreground"> Advanced data collection and smart entry tools for {student.name}`
- [546:26] (JSXText) `Enhanced tracking tools coming soon` → key: `student.studentprofile.enhanced_tracking_tools_coming_soon` — Static JSX text node
  - context: `iv className="text-center py-8 text-muted-foreground"> <p>Enhanced tracking tools coming soon</p> </div>`

### src/pages/TrackStudent.tsx
- [49:19] (MessageAPI) `Emotion recorded!` → key: `student.trackstudent.emotion_recorded` — Message API call: success()
  - context: `| 'timestamp'>) => { setEmotions([...emotions, emotion]); toast.success("Emotion recorded!"); }; const handleSensoryAdd = (sensory: Omit<SensoryEnt`
- [49:19] (MessageAPI) `Emotion recorded!` → key: `student.trackstudent.emotion_recorded` — sonner toast.success()
  - context: `| 'timestamp'>) => { setEmotions([...emotions, emotion]); toast.success("Emotion recorded!"); }; const handleSensoryAdd = (sensory: Omit<SensoryEnt`
- [54:19] (MessageAPI) `Sensory input recorded!` → key: `student.trackstudent.sensory_input_recorded` — Message API call: success()
  - context: `mp'>) => { setSensoryInputs([...sensoryInputs, sensory]); toast.success("Sensory input recorded!"); }; const handleEnvironmentalAdd = (environmenta`
- [54:19] (MessageAPI) `Sensory input recorded!` → key: `student.trackstudent.sensory_input_recorded` — sonner toast.success()
  - context: `mp'>) => { setSensoryInputs([...sensoryInputs, sensory]); toast.success("Sensory input recorded!"); }; const handleEnvironmentalAdd = (environmenta`
- [59:19] (MessageAPI) `Environmental conditions recorded!` → key: `student.trackstudent.environmental_conditions_recorded` — Message API call: success()
  - context: `| 'timestamp'>) => { setEnvironmentalData(environmental); toast.success("Environmental conditions recorded!"); }; const handleSaveSession = async (`
- [59:19] (MessageAPI) `Environmental conditions recorded!` → key: `student.trackstudent.environmental_conditions_recorded` — sonner toast.success()
  - context: `| 'timestamp'>) => { setEnvironmentalData(environmental); toast.success("Environmental conditions recorded!"); }; const handleSaveSession = async (`
- [109:20] (MessageAPI) `Failed to save tracking session` → key: `student.trackstudent.failed_to_save_tracking_session` — Message API call: error()
  - context: `navigate(\`/student/${student.id}\`); } catch (error) { logger.error('Failed to save tracking session', { error }); toast.error(String(tTrackin`
- [156:13] (JSXText) `Record emotions and sensory responses for this session` → key: `student.trackstudent.record_emotions_and_sensory_responses` — Static JSX text node
  - context: `</div> <p className="text-muted-foreground"> Record emotions and sensory responses for this session </p> </`

## Namespace: tracking

### src/components/EmotionTracker.tsx
- [131:70] (JSXText) `Specific Feeling (Optional)` → key: `tracking.emotiontracker.specific_feeling_optional` — Static JSX text node
  - context: `<div> <h3 className="text-sm font-medium text-foreground mb-3">Specific Feeling (Optional)</h3> <div className="flex flex-wrap gap-`
- [187:70] (JSXText) `Duration (minutes)` → key: `tracking.emotiontracker.duration_minutes` — Static JSX text node
  - context: `<div> <h3 className="text-sm font-medium text-foreground mb-3">Duration (minutes)</h3> <div className="flex gap-2"> <`
- [205:29] (JSXAttribute) `How long did it last?` → key: `tracking.emotiontracker.how_long_did_it_last` — Static placeholder attribute
  - context: `999 minutes } }} placeholder="How long did it last?" className="w-32 px-3 py-2 border border-`
- [209:28] (JSXAttribute) `Duration in minutes` → key: `tracking.emotiontracker.duration_in_minutes` — Static aria-label attribute
  - context: `t" min="0" max="999" aria-label="Duration in minutes" aria-describedby="duration-help"`
- [232:70] (JSXText) `How did it develop?` → key: `tracking.emotiontracker.how_did_it_develop` — Static JSX text node
  - context: `<div> <h3 className="text-sm font-medium text-foreground mb-3">How did it develop?</h3> <div className="flex gap-2">`
- [264:68] (JSXText) `Utløsere (Valgfritt)` → key: `tracking.emotiontracker.utl_sere_valgfritt` — Static JSX text node
  - context: `<div> <h3 className="text-sm font-medium text-foreground mb-3">Utløsere (Valgfritt)</h3> <div className="flex gap-2 mb-2">`
- [271:27] (JSXAttribute) `Legg til en utløser...` → key: `tracking.emotiontracker.legg_til_en_utl_ser` — Static placeholder attribute
  - context: `ress={(e) => e.key === 'Enter' && handleAddTrigger()} placeholder="Legg til en utløser..." className="flex-1 px-3 py-2 border border`
- [286:27] (JSXText) `×` → key: `tracking.emotiontracker.` — Static JSX text node
  - context: `={() => handleRemoveTrigger(trigger)} > {trigger} × </Badge> ))} </div> </div>`
- [298:25] (JSXAttribute) `Ytterligere observasjoner...` → key: `tracking.emotiontracker.ytterligere_observasjoner` — Static placeholder attribute
  - context: `onChange={(e) => setNotes(e.target.value)} placeholder="Ytterligere observasjoner..." className="font-dyslexia bg-input bor`

### src/components/EnvironmentalTracker.tsx
- [51:19] (MessageAPI) `Please fill out all required fields (lighting, activity, weather, time of day).` → key: `tracking.environmentaltracker.please_fill_out_all_required` — Message API call: error()
  - context: `(!lighting || !classroomActivity || !weather || !timeOfDay) { toast.error('Please fill out all required fields (lighting, activity, weather, time of day).`
- [100:80] (JSXText) `°C` → key: `tracking.environmentaltracker.c` — Static JSX text node
  - context: `{String(tTracking('environmental.temperature'))}: {roomTemperature}°C </Label> <Slider value={[roomTemperature]}`
- [111:19] (JSXText) `15°C` → key: `tracking.environmentaltracker.15_c` — Static JSX text node
  - context: `assName="flex justify-between text-xs text-muted-foreground"> <span>15°C</span> <span>30°C</span> </div> </div>`
- [112:19] (JSXText) `30°C` → key: `tracking.environmentaltracker.30_c` — Static JSX text node
  - context: `text-xs text-muted-foreground"> <span>15°C</span> <span>30°C</span> </div> </div> {/* Lighting */} <d`

### src/components/QuickEntryTemplates.tsx
- [169:20] (MessageAPI) `Failed to parse saved templates, using defaults` → key: `tracking.quickentrytemplates.failed_to_parse_saved_templates` — Message API call: error()
  - context: `catch (error) { // Log error and fall back to defaults logger.error('Failed to parse saved templates, using defaults', error); return defaultT`
- [198:19] (MessageAPI) `Failed to save template changes. Storage may be full.` → key: `tracking.quickentrytemplates.failed_to_save_template_changes` — Message API call: error()
  - context: `able } = storageUtils.getStorageInfo(); if (!available) { toast.error('Failed to save template changes. Storage may be full.'); return; }`
- [198:19] (MessageAPI) `Failed to save template changes. Storage may be full.` → key: `tracking.quickentrytemplates.failed_to_save_template_changes` — sonner toast.error()
  - context: `able } = storageUtils.getStorageInfo(); if (!available) { toast.error('Failed to save template changes. Storage may be full.'); return; }`
- [237:19] (MessageAPI) `Cannot delete default templates` → key: `tracking.quickentrytemplates.cannot_delete_default_templates` — Message API call: error()
  - context: `ind(t => t.id === templateId); if (template?.isDefault) { toast.error("Cannot delete default templates"); return; } const updatedTe`
- [237:19] (MessageAPI) `Cannot delete default templates` → key: `tracking.quickentrytemplates.cannot_delete_default_templates` — sonner toast.error()
  - context: `ind(t => t.id === templateId); if (template?.isDefault) { toast.error("Cannot delete default templates"); return; } const updatedTe`
- [243:19] (MessageAPI) `Template deleted` → key: `tracking.quickentrytemplates.template_deleted` — Message API call: success()
  - context: `=> t.id !== templateId); saveTemplates(updatedTemplates); toast.success("Template deleted"); }; const createTemplate = () => { if (!newTemplate`
- [243:19] (MessageAPI) `Template deleted` → key: `tracking.quickentrytemplates.template_deleted` — sonner toast.success()
  - context: `=> t.id !== templateId); saveTemplates(updatedTemplates); toast.success("Template deleted"); }; const createTemplate = () => { if (!newTemplate`
- [248:19] (MessageAPI) `Template name is required` → key: `tracking.quickentrytemplates.template_name_is_required` — Message API call: error()
  - context: `createTemplate = () => { if (!newTemplate.name?.trim()) { toast.error("Template name is required"); return; } const template: QuickTemp`
- [248:19] (MessageAPI) `Template name is required` → key: `tracking.quickentrytemplates.template_name_is_required` — sonner toast.error()
  - context: `createTemplate = () => { if (!newTemplate.name?.trim()) { toast.error("Template name is required"); return; } const template: QuickTemp`
- [275:19] (MessageAPI) `Template created successfully` → key: `tracking.quickentrytemplates.template_created_successfully` — Message API call: success()
  - context: `false, usageCount: 0 }); setIsCreating(false); toast.success("Template created successfully"); }; const getCategoryColor = (category: st`
- [275:19] (MessageAPI) `Template created successfully` → key: `tracking.quickentrytemplates.template_created_successfully` — sonner toast.success()
  - context: `false, usageCount: 0 }); setIsCreating(false); toast.success("Template created successfully"); }; const getCategoryColor = (category: st`
- [303:13] (JSXText) `Quick Entry Templates` → key: `tracking.quickentrytemplates.quick_entry_templates` — Static JSX text node
  - context: `center gap-2"> <Zap className="h-5 w-5 text-primary" /> Quick Entry Templates </CardTitle> <Dialog open={isCreating}`
- [309:17] (JSXText) `New Template` → key: `tracking.quickentrytemplates.new_template` — Static JSX text node
  - context: `nt="outline"> <Plus className="h-4 w-4 mr-2" /> New Template </Button> </DialogTrigger> <D`
- [314:30] (JSXText) `Create Quick Entry Template` → key: `tracking.quickentrytemplates.create_quick_entry_template` — Static JSX text node
  - context: `className="max-w-md"> <DialogHeader> <DialogTitle>Create Quick Entry Template</DialogTitle> </DialogHeader>`
- [318:58] (JSXText) `Template Name` → key: `tracking.quickentrytemplates.template_name` — Static JSX text node
  - context: `<div> <label className="text-sm font-medium">Template Name</label> <Input placeholder="`
- [320:33] (JSXAttribute) `e.g., Sensory Overload Response` → key: `tracking.quickentrytemplates.e_g_sensory_overload_response` — Static placeholder attribute
  - context: `>Template Name</label> <Input placeholder="e.g., Sensory Overload Response" value={newTemplate.name ||`
- [328:33] (JSXAttribute) `Brief description of when to use this template` → key: `tracking.quickentrytemplates.brief_description_of_when_to` — Static placeholder attribute
  - context: `Description</label> <Textarea placeholder="Brief description of when to use this template" value={newT`
- [357:21] (JSXText) `Create Template` → key: `tracking.quickentrytemplates.create_template` — Static JSX text node
  - context: `Button> <Button onClick={createTemplate}> Create Template </Button> </div>`
- [416:23] (JSXText) `Apply Template` → key: `tracking.quickentrytemplates.apply_template` — Static JSX text node
  - context: `className="flex-1 mr-2" > Apply Template </Button>`
- [447:16] (JSXText) `No quick entry templates yet` → key: `tracking.quickentrytemplates.no_quick_entry_templates_yet` — Static JSX text node
  - context: `<Zap className="h-12 w-12 mx-auto mb-3 opacity-50" /> <p>No quick entry templates yet</p> <p className="text-sm">Create templ`
- [448:36] (JSXText) `Create templates for common tracking scenarios` → key: `tracking.quickentrytemplates.create_templates_for_common_tracking` — Static JSX text node
  - context: `<p>No quick entry templates yet</p> <p className="text-sm">Create templates for common tracking scenarios</p> </div> )}`

### src/components/SensoryTracker.tsx
- [185:26] (JSXAttribute) `Manual intensity input` → key: `tracking.sensorytracker.manual_intensity_input` — Static aria-label attribute
  - context: `className="w-16 px-2 py-1 mt-2 rounded border" aria-label="Manual intensity input" /> </div> )} {/*`
- [193:70] (JSXText) `Body Location (Optional)` → key: `tracking.sensorytracker.body_location_optional` — Static JSX text node
  - context: `<div> <h3 className="text-sm font-medium text-foreground mb-3">Body Location (Optional)</h3> <div className="flex flex-wrap gap-2">`
- [222:70] (JSXText) `Coping Strategies Used` → key: `tracking.sensorytracker.coping_strategies_used` — Static JSX text node
  - context: `<div> <h3 className="text-sm font-medium text-foreground mb-3">Coping Strategies Used</h3> <div className="flex gap-2 mb-2">`
- [229:29] (JSXAttribute) `Add a coping strategy...` → key: `tracking.sensorytracker.add_a_coping_strategy` — Static placeholder attribute
  - context: `=> e.key === 'Enter' && handleAddCopingStrategy()} placeholder="Add a coping strategy..." className="flex-1 px-3 py-2 border bo`
- [260:30] (JSXText) `×` → key: `tracking.sensorytracker.` — Static JSX text node
  - context: `eRemoveCopingStrategy(strategy)} > {strategy} × </Badge> ))} </div> </div>`
- [269:68] (JSXText) `Miljø (Valgfritt)` → key: `tracking.sensorytracker.milj_valgfritt` — Static JSX text node
  - context: `<div> <h3 className="text-sm font-medium text-foreground mb-3">Miljø (Valgfritt)</h3> <input type="text" valu`
- [274:25] (JSXAttribute) `f.eks. Klasserom, Lekeplass, Bibliotek...` → key: `tracking.sensorytracker.f_eks_klasserom_lekeplass_bibliotek` — Static placeholder attribute
  - context: `onChange={(e) => setEnvironment(e.target.value)} placeholder="f.eks. Klasserom, Lekeplass, Bibliotek..." className="w-full px-3 p`
- [285:25] (JSXAttribute) `Ytterligere observasjoner om den sensoriske responsen...` → key: `tracking.sensorytracker.ytterligere_observasjoner_om_den_sensoriske` — Static placeholder attribute
  - context: `onChange={(e) => setNotes(e.target.value)} placeholder="Ytterligere observasjoner om den sensoriske responsen..." className`

### src/components/TimelineVisualization.tsx
- [520:13] (JSXText) `Timeline Visualization` → key: `tracking.timelinevisualization.timeline_visualization` — Static JSX text node
  - context: `flex items-center gap-2"> <Clock className="h-5 w-5" /> Timeline Visualization </CardTitle> <div className="flex ite`
- [728:54] (JSXText) `Data Streams` → key: `tracking.timelinevisualization.data_streams` — Static JSX text node
  - context: `rounded-lg p-3 shadow-lg"> <h4 className="font-medium text-sm mb-2">Data Streams</h4> <div className="space-y-1"> {dataStr`

## False positives

- src/App.tsx [31:38] (JSXText) `Loading...` — Looks like an identifier or existing key
- src/components/AdvancedFilterPanel.tsx [196:56] (JSXText) `active` — Looks like an identifier or existing key
- src/components/AdvancedFilterPanel.tsx [207:15] (JSXText) `Reset` — Looks like an identifier or existing key
- src/components/AdvancedFilterPanel.tsx [211:17] (JSXText) `Real-time` — Looks like an identifier or existing key
- src/components/AdvancedFilterPanel.tsx [220:42] (JSXText) `Filters` — Looks like an identifier or existing key
- src/components/AdvancedFilterPanel.tsx [221:42] (JSXText) `Presets` — Looks like an identifier or existing key
- src/components/AdvancedFilterPanel.tsx [234:50] (JSXText) `Active` — Looks like an identifier or existing key
- src/components/AdvancedFilterPanel.tsx [331:21] (JSXText) `Emotions` — Looks like an identifier or existing key
- src/components/AdvancedFilterPanel.tsx [335:50] (JSXText) `Active` — Looks like an identifier or existing key
- src/components/AdvancedFilterPanel.tsx [413:21] (JSXText) `Sensory` — Looks like an identifier or existing key
- src/components/AdvancedFilterPanel.tsx [416:50] (JSXText) `Active` — Looks like an identifier or existing key
- src/components/AdvancedFilterPanel.tsx [450:28] (JSXText) `Responses` — Looks like an identifier or existing key
- src/components/AdvancedFilterPanel.tsx [498:21] (JSXText) `Environmental` — Looks like an identifier or existing key
- src/components/AdvancedFilterPanel.tsx [501:50] (JSXText) `Active` — Looks like an identifier or existing key
- src/components/AdvancedFilterPanel.tsx [507:28] (JSXText) `Locations` — Looks like an identifier or existing key
- src/components/AdvancedFilterPanel.tsx [592:50] (JSXText) `Active` — Looks like an identifier or existing key
- src/components/AdvancedFilterPanel.tsx [734:29] (JSXText) `Apply` — Looks like an identifier or existing key
- src/components/AdvancedSearch.tsx [463:233] (JSXText) `goals` — Looks like an identifier or existing key
- src/components/AlertManager.tsx [157:25] (JSXText) `Resolved` — Looks like an identifier or existing key
- src/components/AlertManager.tsx [190:25] (JSXText) `Resolve` — Looks like an identifier or existing key
- src/components/AlertManager.tsx [206:72] (JSXText) `Recommendations:` — Looks like an identifier or existing key
- src/components/AlertManager.tsx [233:29] (JSXText) `Cancel` — Looks like an identifier or existing key
- src/components/AlertManager.tsx [273:57] (JSXText) `on` — Looks like an identifier or existing key
- src/components/analysis/CorrelationHeatmap.tsx [35:15] (JSXText) `Retry` — Looks like an identifier or existing key
- src/components/analysis/PatternAnalysisView.tsx [109:79] (JSXText) `Pattern` — Looks like an identifier or existing key
- src/components/analysis/PatternAnalysisView.tsx [115:25] (JSXText) `Frequency:` — Looks like an identifier or existing key
- src/components/analysis/PatternAnalysisView.tsx [115:56] (JSXText) `occurrences` — Looks like an identifier or existing key
- src/components/analysis/PatternAnalysisView.tsx [119:62] (JSXText) `Recommendations:` — Looks like an identifier or existing key
- src/components/analysis/PatternAnalysisView.tsx [171:67] (JSXText) `Prediction:` — Looks like an identifier or existing key
- src/components/analysis/PatternAnalysisView.tsx [195:62] (JSXText) `Recommendations:` — Looks like an identifier or existing key
- src/components/analysis/PatternAnalysisView.tsx [209:29] (JSXText) `Severity:` — Looks like an identifier or existing key
- src/components/analysis/PatternAnalysisView.tsx [242:71] (JSXText) `Anomaly` — Looks like an identifier or existing key
- src/components/analysis/PatternAnalysisView.tsx [244:25] (JSXText) `Severity:` — Looks like an identifier or existing key
- src/components/AnalyticsDashboard.tsx [236:15] (JSXText) `Settings` — Looks like an identifier or existing key
- src/components/AnalyticsDashboard.tsx [327:71] (JSXText) `Charts` — Looks like an identifier or existing key
- src/components/AnalyticsDashboard.tsx [328:41] (JSXText) `Patterns` — Looks like an identifier or existing key
- src/components/AnalyticsDashboard.tsx [329:86] (JSXText) `Correlations` — Looks like an identifier or existing key
- src/components/AnalyticsDashboard.tsx [330:39] (JSXText) `Alerts` — Looks like an identifier or existing key
- src/components/AnalyticsDashboard.tsx [419:76] (JSXText) `Recommendations:` — Looks like an identifier or existing key
- src/components/AnalyticsDashboard.tsx [518:33] (JSXText) `Negativ` — Looks like an identifier or existing key
- src/components/AnalyticsDashboard.tsx [522:33] (JSXText) `Positiv` — Looks like an identifier or existing key
- src/components/AnalyticsDashboard.tsx [556:60] (JSXText) `significance` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [267:53] (JSXText) `Conservative` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [281:53] (JSXText) `Balanced` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [295:53] (JSXText) `Sensitive` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [309:47] (JSXText) `Thresholds` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [310:48] (JSXText) `Sensitivity` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [313:45] (JSXText) `Advanced` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [482:28] (JSXText) `Emotion:` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [482:89] (JSXText) `x` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [483:28] (JSXText) `Frequency:` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [483:84] (JSXText) `x` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [484:28] (JSXText) `Anomaly:` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [484:80] (JSXText) `x` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [515:98] (JSXText) `days` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [534:93] (JSXText) `days` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [553:91] (JSXText) `days` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [611:70] (JSXText) `Version` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [622:72] (JSXText) `Accuracy` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [652:37] (JSXText) `Training...` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [657:37] (JSXText) `Retrain` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [670:37] (JSXText) `Deleting...` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [692:35] (JSXText) `Training...` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [755:84] (JSXText) `min` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [835:17] (JSXText) `Cancel` — Looks like an identifier or existing key
- src/components/AnalyticsStatusIndicator.tsx [138:11] (JSXText) `Analytics:` — Looks like an identifier or existing key
- src/components/AnalyticsStatusIndicator.tsx [142:13] (JSXText) `Updated` — Looks like an identifier or existing key
- src/components/AnalyticsStatusIndicator.tsx [165:13] (JSXText) `Refresh` — Looks like an identifier or existing key
- src/components/AnalyticsStatusIndicator.tsx [244:21] (JSXText) `Auto-Updates` — Looks like an identifier or existing key
- src/components/DataCollectionRoadmap.tsx [143:13] (JSXText) `Datainnsamlingskart` — Looks like an identifier or existing key
- src/components/DataCollectionRoadmap.tsx [161:11] (JSXText) `Datainnsamlingskart` — Looks like an identifier or existing key
- src/components/DataCollectionRoadmap.tsx [173:59] (JSXText) `av` — Looks like an identifier or existing key
- src/components/DataCollectionRoadmap.tsx [178:55] (JSXText) `Datapunkter:` — Looks like an identifier or existing key
- src/components/DataCollectionRoadmap.tsx [182:55] (JSXText) `Dager:` — Looks like an identifier or existing key
- src/components/DataCollectionRoadmap.tsx [203:23] (JSXText) `Fremgang` — Looks like an identifier or existing key
- src/components/DataCollectionRoadmap.tsx [209:19] (JSXText) `Datapunkter:` — Looks like an identifier or existing key
- src/components/DataCollectionRoadmap.tsx [212:19] (JSXText) `Dager:` — Looks like an identifier or existing key
- src/components/DataCollectionRoadmap.tsx [260:56] (JSXText) `datapunkter` — Looks like an identifier or existing key
- src/components/DataCollectionRoadmap.tsx [261:50] (JSXText) `dager` — Looks like an identifier or existing key
- src/components/DataCollectionRoadmap.tsx [263:29] (JSXText) `Estimert:` — Looks like an identifier or existing key
- src/components/DataQualityFeedback.tsx [213:13] (JSXText) `Datakvalitet` — Looks like an identifier or existing key
- src/components/DataQualityFeedback.tsx [231:11] (JSXText) `Datakvalitet` — Looks like an identifier or existing key
- src/components/DataRequirementsCalculator.tsx [181:81] (JSXText) `sikkerhet` — Looks like an identifier or existing key
- src/components/DataRequirementsCalculator.tsx [200:25] (JSXText) `Datapunkter` — Looks like an identifier or existing key
- src/components/DataRequirementsCalculator.tsx [213:25] (JSXText) `Tidsperiode` — Looks like an identifier or existing key
- src/components/DataRequirementsCalculator.tsx [214:86] (JSXText) `dager` — Looks like an identifier or existing key
- src/components/DataRequirementsCalculator.tsx [229:80] (JSXText) `Tidsestimat` — Looks like an identifier or existing key
- src/components/DataRequirementsCalculator.tsx [232:17] (JSXText) `Med` — Looks like an identifier or existing key
- src/components/DataRequirementsCalculator.tsx [233:91] (JSXText) `innen` — Looks like an identifier or existing key
- src/components/DataRequirementsCalculator.tsx [261:98] (JSXText) `dager` — Looks like an identifier or existing key
- src/components/DataRequirementsCalculator.tsx [284:82] (JSXText) `Anbefalinger` — Looks like an identifier or existing key
- src/components/DateRangeSelector.tsx [174:44] (JSXText) `Selected:` — Looks like an identifier or existing key
- src/components/EmotionTracker.tsx [210:34] (JSXAttribute) `duration-help` — Looks like an identifier or existing key
- src/components/EmotionTracker.tsx [240:17] (JSXText) `Sudden` — Looks like an identifier or existing key
- src/components/EmotionTracker.tsx [248:17] (JSXText) `Gradual` — Looks like an identifier or existing key
- src/components/EmotionTracker.tsx [256:17] (JSXText) `Unknown` — Looks like an identifier or existing key
- src/components/ErrorBoundary.tsx [231:119] (JSXAttribute) `error-title` — Looks like an identifier or existing key
- src/components/ErrorBoundary.tsx [231:150] (JSXAttribute) `error-description` — Looks like an identifier or existing key
- src/components/GoalManager.tsx [317:43] (JSXText) `Category` — Looks like an identifier or existing key
- src/components/GoalManager.tsx [323:52] (JSXText) `Behavioral` — Looks like an identifier or existing key
- src/components/GoalManager.tsx [324:50] (JSXText) `Academic` — Looks like an identifier or existing key
- src/components/GoalManager.tsx [325:48] (JSXText) `Social` — Looks like an identifier or existing key
- src/components/GoalManager.tsx [326:49] (JSXText) `Sensory` — Looks like an identifier or existing key
- src/components/GoalManager.tsx [327:55] (JSXText) `Communication` — Looks like an identifier or existing key
- src/components/GoalManager.tsx [380:19] (JSXText) `Cancel` — Looks like an identifier or existing key
- src/components/GoalManager.tsx [439:59] (JSXText) `Progress` — Looks like an identifier or existing key
- src/components/GoalManager.tsx [457:27] (JSXText) `Created:` — Looks like an identifier or existing key
- src/components/GoalManager.tsx [461:27] (JSXText) `Target:` — Looks like an identifier or existing key
- src/components/GoalManager.tsx [468:49] (JSXText) `Milestones` — Looks like an identifier or existing key
- src/components/GoalManager.tsx [482:23] (JSXText) `Add` — Looks like an identifier or existing key
- src/components/layouts/DashboardLayout.tsx [43:11] (JSXText) `Trends` — Looks like an identifier or existing key
- src/components/layouts/DashboardLayout.tsx [47:11] (JSXText) `Correlations` — Looks like an identifier or existing key
- src/components/layouts/DashboardLayout.tsx [51:11] (JSXText) `Patterns` — Looks like an identifier or existing key
- src/components/layouts/DashboardLayout.tsx [59:11] (JSXText) `Timeline` — Looks like an identifier or existing key
- src/components/MockDataLoader.tsx [157:51] (JSXText) `students` — Looks like an identifier or existing key
- src/components/MockDataLoader.tsx [204:38] (JSXText) `Cancel` — Looks like an identifier or existing key
- src/components/PaginatedSessionsList.tsx [72:19] (JSXText) `Showing` — Looks like an identifier or existing key
- src/components/PaginatedSessionsList.tsx [72:51] (JSXText) `of` — Looks like an identifier or existing key
- src/components/PaginatedSessionsList.tsx [103:62] (JSXText) `at` — Looks like an identifier or existing key
- src/components/PaginatedSessionsList.tsx [107:49] (JSXText) `emotions` — Looks like an identifier or existing key
- src/components/PaginatedSessionsList.tsx [110:54] (JSXText) `sensory` — Looks like an identifier or existing key
- src/components/PaginatedSessionsList.tsx [133:56] (JSXText) `more` — Looks like an identifier or existing key
- src/components/PaginatedSessionsList.tsx [146:19] (JSXText) `Page` — Looks like an identifier or existing key
- src/components/PaginatedSessionsList.tsx [146:38] (JSXText) `of` — Looks like an identifier or existing key
- src/components/PeriodComparison.tsx [177:17] (JSXText) `vs` — Looks like an identifier or existing key
- src/components/PeriodComparison.tsx [196:17] (JSXText) `vs` — Looks like an identifier or existing key
- src/components/PeriodComparison.tsx [208:62] (JSXText) `Emotion` — Looks like an identifier or existing key
- src/components/PeriodComparison.tsx [210:117] (JSXText) `to` — Looks like an identifier or existing key
- src/components/PeriodComparison.tsx [218:62] (JSXText) `Intensity` — Looks like an identifier or existing key
- src/components/PeriodComparison.tsx [221:120] (JSXText) `by` — Looks like an identifier or existing key
- src/components/PeriodComparison.tsx [223:115] (JSXText) `points` — Looks like an identifier or existing key
- src/components/PeriodComparison.tsx [231:62] (JSXText) `Sensory` — Looks like an identifier or existing key
- src/components/PeriodComparison.tsx [234:106] (JSXText) `by` — Looks like an identifier or existing key
- src/components/profile-sections/AnalyticsSection.tsx [94:44] (JSXText) `Dataanalyse` — Looks like an identifier or existing key
- src/components/profile-sections/AnalyticsSection.tsx [103:22] (JSXText) `Systemforklaring` — Looks like an identifier or existing key
- src/components/profile-sections/AnalyticsSection.tsx [219:69] (JSXText) `Anbefalinger:` — Looks like an identifier or existing key
- src/components/profile-sections/AnalyticsSection.tsx [235:54] (JSXText) `Korrelasjoner:` — Looks like an identifier or existing key
- src/components/profile-sections/DashboardSection.tsx [86:46] (JSXText) `Oversikt` — Looks like an identifier or existing key
- src/components/profile-sections/DashboardSection.tsx [105:13] (JSXText) `Analysestatus` — Looks like an identifier or existing key
- src/components/profile-sections/DashboardSection.tsx [179:13] (JSXText) `Datakvalitet` — Looks like an identifier or existing key
- src/components/ProgressDashboard.tsx [228:85] (JSXText) `achieved` — Looks like an identifier or existing key
- src/components/ProgressDashboard.tsx [279:41] (JSXText) `Overview` — Looks like an identifier or existing key
- src/components/ProgressDashboard.tsx [280:39] (JSXText) `Trends` — Looks like an identifier or existing key
- src/components/ProgressDashboard.tsx [281:43] (JSXText) `Categories` — Looks like an identifier or existing key
- src/components/ProgressDashboard.tsx [282:43] (JSXText) `Priorities` — Looks like an identifier or existing key
- src/components/ProgressDashboard.tsx [347:29] (JSXText) `Updated` — Looks like an identifier or existing key
- src/components/ProgressDashboard.tsx [441:67] (JSXText) `goals` — Looks like an identifier or existing key
- src/components/ProgressDashboard.tsx [446:51] (JSXText) `achieved` — Looks like an identifier or existing key
- src/components/ProgressDashboard.tsx [478:31] (JSXText) `Progress` — Looks like an identifier or existing key
- src/components/QuickEntryTemplates.tsx [326:58] (JSXText) `Description` — Looks like an identifier or existing key
- src/components/QuickEntryTemplates.tsx [334:58] (JSXText) `Category` — Looks like an identifier or existing key
- src/components/QuickEntryTemplates.tsx [343:51] (JSXText) `Morning` — Looks like an identifier or existing key
- src/components/QuickEntryTemplates.tsx [344:54] (JSXText) `Transition` — Looks like an identifier or existing key
- src/components/QuickEntryTemplates.tsx [345:52] (JSXText) `Learning` — Looks like an identifier or existing key
- src/components/QuickEntryTemplates.tsx [346:49] (JSXText) `Break` — Looks like an identifier or existing key
- src/components/QuickEntryTemplates.tsx [347:53] (JSXText) `Afternoon` — Looks like an identifier or existing key
- src/components/QuickEntryTemplates.tsx [348:50] (JSXText) `Custom` — Looks like an identifier or existing key
- src/components/QuickEntryTemplates.tsx [354:21] (JSXText) `Cancel` — Looks like an identifier or existing key
- src/components/QuickEntryTemplates.tsx [404:59] (JSXText) `more` — Looks like an identifier or existing key
- src/components/ReportBuilder.tsx [650:44] (JSXText) `sections` — Looks like an identifier or existing key
- src/components/StorageManager.tsx [106:21] (JSXText) `Used` — Looks like an identifier or existing key
- src/components/StorageManager.tsx [125:18] (JSXText) `Students:` — Looks like an identifier or existing key
- src/components/StorageManager.tsx [126:18] (JSXText) `Entries:` — Looks like an identifier or existing key
- src/components/StorageManager.tsx [127:18] (JSXText) `Goals:` — Looks like an identifier or existing key
- src/components/StorageManager.tsx [128:18] (JSXText) `Alerts:` — Looks like an identifier or existing key
- src/components/StudentProfileSidebar.tsx [109:13] (JSXText) `Hovedseksjoner` — Looks like an identifier or existing key
- src/components/StudentProfileSidebar.tsx [165:13] (JSXText) `Testing` — Looks like an identifier or existing key
- src/components/StudentProfileSidebar.tsx [178:62] (JSXText) `science` — Looks like an identifier or existing key
- src/components/TestingDebugPanel.tsx [313:62] (JSXText) `Students` — Looks like an identifier or existing key
- src/components/TestingDebugPanel.tsx [317:62] (JSXText) `Entries` — Looks like an identifier or existing key
- src/components/TestingDebugPanel.tsx [321:62] (JSXText) `Analytics` — Looks like an identifier or existing key
- src/components/TestingDebugPanel.tsx [366:66] (JSXText) `Hits` — Looks like an identifier or existing key
- src/components/TestingDebugPanel.tsx [371:66] (JSXText) `Misses` — Looks like an identifier or existing key
- src/components/TestingDebugPanel.tsx [376:66] (JSXText) `Sets` — Looks like an identifier or existing key
- src/components/TimelineVisualization.tsx [525:17] (JSXText) `Live` — Looks like an identifier or existing key
- src/components/TimelineVisualization.tsx [605:32] (JSXText) `x` — Looks like an identifier or existing key
- src/components/TimelineVisualization.tsx [619:17] (JSXText) `Emotions` — Looks like an identifier or existing key
- src/components/TimelineVisualization.tsx [629:17] (JSXText) `Sensory` — Looks like an identifier or existing key
- src/components/TimelineVisualization.tsx [639:17] (JSXText) `Anomalies` — Looks like an identifier or existing key
- src/components/TimelineVisualization.tsx [648:65] (JSXText) `minutes` — Looks like an identifier or existing key
- src/components/TimelineVisualization.tsx [745:18] (JSXText) `Events:` — Looks like an identifier or existing key
- src/components/TimelineVisualization.tsx [746:18] (JSXText) `Zoom:` — Looks like an identifier or existing key
- src/components/TimelineVisualization.tsx [748:20] (JSXText) `Selection:` — Looks like an identifier or existing key
- src/components/TimelineVisualization.tsx [748:91] (JSXText) `min` — Looks like an identifier or existing key
- src/components/ui/dialog.tsx [47:35] (JSXText) `Close` — Looks like an identifier or existing key
- src/components/ui/PremiumStudentCard.tsx [169:63] (JSXText) `Datainnsamling` — Looks like an identifier or existing key
- src/components/ui/PremiumStudentCard.tsx [237:38] (JSXText) `Cancel` — Looks like an identifier or existing key
- src/components/ui/sheet.tsx [68:35] (JSXText) `Close` — Looks like an identifier or existing key
- src/components/ui/StudentCard.tsx [31:17] (JSXText) `Grade` — Looks like an identifier or existing key
- src/components/ui/StudentCard.tsx [41:17] (JSXText) `Added` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [60:14] (JSXText) `X:` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [61:14] (JSXText) `Y:` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [62:14] (JSXText) `Z:` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [63:34] (JSXText) `Intensity:` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [398:48] (JSXText) `Category` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [399:49] (JSXText) `Intensity` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [411:43] (JSXText) `All` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [412:47] (JSXText) `Emotions` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [413:47] (JSXText) `Sensory` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [414:53] (JSXText) `Environmental` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [503:54] (JSXText) `Legend` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [509:47] (JSXText) `Emotions` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [513:47] (JSXText) `Sensory` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [517:47] (JSXText) `Environmental` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [532:18] (JSXText) `Points:` — Looks like an identifier or existing key
- src/components/VisualizationControls.tsx [112:15] (JSXText) `Live` — Looks like an identifier or existing key
- src/components/VisualizationControls.tsx [155:17] (JSXText) `Filters` — Looks like an identifier or existing key
- src/components/VisualizationControls.tsx [174:21] (JSXText) `Active` — Looks like an identifier or existing key
- src/components/VisualizationControls.tsx [204:17] (JSXText) `Layout` — Looks like an identifier or existing key
- src/components/VisualizationControls.tsx [210:17] (JSXText) `Dashboard` — Looks like an identifier or existing key
- src/components/VisualizationControls.tsx [222:17] (JSXText) `Comparison` — Looks like an identifier or existing key
- src/components/VisualizationControls.tsx [231:17] (JSXText) `View` — Looks like an identifier or existing key
- src/components/VisualizationControls.tsx [256:17] (JSXText) `Picture-in-Picture` — Looks like an identifier or existing key
- src/components/VisualizationControls.tsx [313:46] (JSXText) `Combined` — Looks like an identifier or existing key
- src/components/VisualizationControls.tsx [359:46] (JSXText) `emotions` — Looks like an identifier or existing key
- src/components/VisualizationControls.tsx [365:53] (JSXText) `sessions` — Looks like an identifier or existing key
- src/components/VisualizationControls.tsx [369:45] (JSXText) `new` — Looks like an identifier or existing key
- src/pages/Dashboard.tsx [205:17] (JSXText) `Sensory` — Looks like an identifier or existing key
- src/pages/Dashboard.tsx [205:55] (JSXText) `Tracker` — Looks like an identifier or existing key
- src/pages/Dashboard.tsx [296:81] (JSXText) `Oversikt` — Looks like an identifier or existing key
- src/pages/Dashboard.tsx [320:42] (JSXText) `Cancel` — Looks like an identifier or existing key
- src/pages/Dashboard.tsx [321:71] (JSXText) `Continue` — Looks like an identifier or existing key
- src/pages/Dashboard.tsx [412:67] (JSXText) `Elever` — Looks like an identifier or existing key
- src/pages/StudentProfile.tsx [486:24] (JSXText) `Analyser` — Looks like an identifier or existing key

## Out of scope (non-UI / developer-only)

- src/hooks/useAnalyticsStatus.ts [63:20] (MessageAPI) `Error loading analytics status:` — Non-UI layer
- src/hooks/useAnalyticsStatus.ts [93:20] (MessageAPI) `Error triggering analytics:` — Non-UI layer
- src/hooks/useAnalyticsWorker.ts [134:24] (MessageAPI) `[useAnalyticsWorker] Worker error` — Non-UI layer
- src/hooks/useAnalyticsWorker.ts [197:22] (MessageAPI) `[useAnalyticsWorker] Worker runtime error, switching to fallback` — Non-UI layer
- src/hooks/useAnalyticsWorker.ts [219:19] (MessageAPI) `[useAnalyticsWorker] Analytics worker initialized successfully` — Non-UI layer
- src/hooks/useAnalyticsWorker.ts [222:20] (MessageAPI) `[useAnalyticsWorker] Failed to initialize worker` — Non-UI layer
- src/hooks/useAnalyticsWorker.ts [308:22] (MessageAPI) `[useAnalyticsWorker] Fallback failed` — Non-UI layer
- src/hooks/useAnalyticsWorker.ts [343:22] (MessageAPI) `[useAnalyticsWorker] watchdog timeout: worker did not respond, attempting fallback` — Non-UI layer
- src/hooks/useAnalyticsWorker.ts [363:22] (MessageAPI) `[useAnalyticsWorker] Fallback failed after watchdog timeout` — Non-UI layer
- src/hooks/useAnalyticsWorker.ts [410:20] (MessageAPI) `[WORKER_MESSAGE] Failed to post message to worker, falling back to sync` — Non-UI layer
- src/hooks/useAnalyticsWorker.ts [424:22] (MessageAPI) `[useAnalyticsWorker] Fallback processing failed after worker post error` — Non-UI layer
- src/hooks/useChartStore.ts [52:24] (MessageAPI) `setOption failed` — Non-UI layer
- src/hooks/useDataAnalysis.ts [57:22] (MessageAPI) `Pattern analysis failed in useDataAnalysis hook` — Non-UI layer
- src/hooks/useFilteredData.ts [124:20] (MessageAPI) `useFilteredData failed` — Non-UI layer
- src/hooks/useMLTrainingWorker.ts [71:24] (MessageAPI) `Failed to save trained model:` — Non-UI layer
- src/hooks/useMLTrainingWorker.ts [86:20] (MessageAPI) `ML training worker error:` — Non-UI layer
- src/hooks/useProgressiveChartData.ts [105:22] (MessageAPI) `[useProgressiveChartData] Failed computing emotion distribution` — Non-UI layer
- src/hooks/useProgressiveChartData.ts [127:24] (MessageAPI) `[useProgressiveChartData] Failed computing sensory responses` — Non-UI layer
- src/hooks/useProgressiveChartData.ts [165:24] (MessageAPI) `[useProgressiveChartData] Failed computing emotion trends` — Non-UI layer
- src/hooks/useRealtimeData.ts [255:21] (MessageAPI) `Real-time data connection would be established here` — Non-UI layer
- src/hooks/useStudentData.ts [79:20] (MessageAPI) `Failed to load student data:` — Non-UI layer
- src/lib/alertSystem.ts [159:20] (MessageAPI) `Error saving alerts:` — Developer-only log or non-UI message in lib/
- src/lib/alertSystem.ts [173:22] (MessageAPI) `Failed to save alerts even after cleanup:` — Developer-only log or non-UI message in lib/
- src/lib/alertSystem.ts [199:20] (MessageAPI) `Error loading alerts:` — Developer-only log or non-UI message in lib/
- src/lib/alertSystem.ts [247:20] (MessageAPI) `Error marking alert as viewed:` — Developer-only log or non-UI message in lib/
- src/lib/alertSystem.ts [274:20] (MessageAPI) `Error resolving alert:` — Developer-only log or non-UI message in lib/
- src/lib/alertSystem.ts [289:20] (MessageAPI) `Error deleting alert:` — Developer-only log or non-UI message in lib/
- src/lib/alertSystem.ts [305:20] (MessageAPI) `Error loading alert settings:` — Developer-only log or non-UI message in lib/
- src/lib/alertSystem.ts [321:20] (MessageAPI) `Error updating alert settings:` — Developer-only log or non-UI message in lib/
- src/lib/alertSystem.ts [381:20] (MessageAPI) `Error cleaning up old alerts:` — Developer-only log or non-UI message in lib/
- src/lib/analyticsConfig.ts [372:20] (MessageAPI) `Failed to import configuration:` — Developer-only log or non-UI message in lib/
- src/lib/analyticsConfig.ts [391:20] (MessageAPI) `Failed to load analytics configuration:` — Developer-only log or non-UI message in lib/
- src/lib/analyticsConfig.ts [426:20] (MessageAPI) `Failed to save analytics configuration:` — Developer-only log or non-UI message in lib/
- src/lib/analyticsConfigOverride.ts [9:15] (MessageAPI) `Applying development analytics configuration for better pattern detection` — Developer-only log or non-UI message in lib/
- src/lib/analyticsConfigOverride.ts [70:18] (MessageAPI) `Failed to apply development analytics config (non-fatal):` — Developer-only log or non-UI message in lib/
- src/lib/analyticsExport.ts [261:24] (MessageAPI) `Error adding chart to PDF:` — Developer-only log or non-UI message in lib/
- src/lib/analyticsManager.ts [53:24] (MessageAPI) `[analyticsManager] mock data seed failed` — Developer-only log or non-UI message in lib/
- src/lib/analyticsManager.ts [99:18] (MessageAPI) `[analyticsManager] ensureUniversalAnalyticsInitialization failed` — Developer-only log or non-UI message in lib/
- src/lib/analyticsManager.ts [190:18] (MessageAPI) `Error loading analytics profiles:` — Developer-only log or non-UI message in lib/
- src/lib/analyticsManager.ts [466:20] (MessageAPI) `[analyticsManager] initializeStudentAnalytics failed` — Developer-only log or non-UI message in lib/
- src/lib/analyticsManager.ts [669:20] (MessageAPI) `[analyticsManager] triggerAnalyticsForStudent failed` — Developer-only log or non-UI message in lib/
- src/lib/analyticsManager.ts [741:20] (MessageAPI) `Error saving analytics profiles:` — Developer-only log or non-UI message in lib/
- src/lib/analyticsWorkerFallback.ts [51:24] (MessageAPI) `Fallback: Error analyzing emotion patterns` — Developer-only log or non-UI message in lib/
- src/lib/analyticsWorkerFallback.ts [62:24] (MessageAPI) `Fallback: Error analyzing sensory patterns` — Developer-only log or non-UI message in lib/
- src/lib/analyticsWorkerFallback.ts [74:24] (MessageAPI) `Fallback: Error analyzing correlations` — Developer-only log or non-UI message in lib/
- src/lib/analyticsWorkerFallback.ts [91:24] (MessageAPI) `Fallback: Error generating predictive insights` — Developer-only log or non-UI message in lib/
- src/lib/analyticsWorkerFallback.ts [104:24] (MessageAPI) `Fallback: Error detecting anomalies` — Developer-only log or non-UI message in lib/
- src/lib/analyticsWorkerFallback.ts [121:20] (MessageAPI) `Fallback analytics failed` — Developer-only log or non-UI message in lib/
- src/lib/chartUtils.ts [125:20] (MessageAPI) `Invalid chart data row:` — Developer-only log or non-UI message in lib/
- src/lib/dataStorage.ts [402:20] (MessageAPI) `Failed to parse student data from localStorage` — Developer-only log or non-UI message in lib/
- src/lib/dataStorage.ts [471:9] (MessageAPI) `Failed to parse tracking entries from localStorage` — Developer-only log or non-UI message in lib/
- src/lib/dataStorage.ts [789:20] (MessageAPI) `Error deleting student:` — Developer-only log or non-UI message in lib/
- src/lib/diagnostics.ts [119:18] (MessageAPI) `[DIAGNOSTIC] Worker Timeout!` — Developer-only log or non-UI message in lib/
- src/lib/enhancedPatternAnalysis.ts [79:20] (MessageAPI) `Failed to initialize ML models:` — Developer-only log or non-UI message in lib/
- src/lib/enhancedPatternAnalysis.ts [157:22] (MessageAPI) `ML emotion prediction failed:` — Developer-only log or non-UI message in lib/
- src/lib/enhancedPatternAnalysis.ts [222:22] (MessageAPI) `ML sensory prediction failed:` — Developer-only log or non-UI message in lib/
- src/lib/enhancedPatternAnalysis.ts [803:20] (MessageAPI) `Baseline clustering failed:` — Developer-only log or non-UI message in lib/
- src/lib/errorHandler.ts [93:22] (MessageAPI) `Error in custom error handler` — Developer-only log or non-UI message in lib/
- src/lib/errorHandler.ts [165:22] (MessageAPI) `Critical error occurred` — Developer-only log or non-UI message in lib/
- src/lib/errorHandler.ts [172:22] (MessageAPI) `Application error` — Developer-only log or non-UI message in lib/
- src/lib/errorHandler.ts [234:23] (MessageAPI) `Issue resolved` — Developer-only log or non-UI message in lib/
- src/lib/errorHandler.ts [234:23] (MessageAPI) `Issue resolved` — Developer-only log or non-UI message in lib/
- src/lib/errorHandler.ts [239:22] (MessageAPI) `Recovery strategy failed` — Developer-only log or non-UI message in lib/
- src/lib/mockDataGenerator.ts [55:18] (MessageAPI) `Generated invalid emotion entry:` — Developer-only log or non-UI message in lib/
- src/lib/mockDataGenerator.ts [87:18] (MessageAPI) `Generated invalid sensory entry:` — Developer-only log or non-UI message in lib/
- src/lib/mockDataGenerator.ts [339:18] (MessageAPI) `Failed to load mock data:` — Developer-only log or non-UI message in lib/
- src/lib/mockDataGenerator.ts [360:18] (MessageAPI) `Failed to clear mock data:` — Developer-only log or non-UI message in lib/
- src/lib/mockDataSeeder.ts [59:17] (MessageAPI) `Full mock data seeded successfully` — Developer-only log or non-UI message in lib/
- src/lib/mockDataSeeder.ts [63:18] (MessageAPI) `Failed to seed full mock data` — Developer-only log or non-UI message in lib/
- src/lib/mockDataSeeder.ts [165:17] (MessageAPI) `Minimal demo data seeded successfully` — Developer-only log or non-UI message in lib/
- src/lib/mockDataSeeder.ts [170:18] (MessageAPI) `Failed to seed minimal demo data` — Developer-only log or non-UI message in lib/
- src/lib/mockDataSeeder.ts [218:17] (MessageAPI) `Mock data cleared successfully` — Developer-only log or non-UI message in lib/
- src/lib/mockDataSeeder.ts [220:18] (MessageAPI) `Failed to clear mock data` — Developer-only log or non-UI message in lib/
- src/lib/storageUtils.ts [55:20] (MessageAPI) `Error clearing old data:` — Developer-only log or non-UI message in lib/
- src/lib/storageUtils.ts [98:26] (MessageAPI) `storageUtils.safeSetItem failed after cleanup` — Developer-only log or non-UI message in lib/
- src/lib/storageUtils.ts [104:22] (MessageAPI) `storageUtils.safeSetItem failed with non-quota error` — Developer-only log or non-UI message in lib/
- src/lib/universalAnalyticsInitializer.ts [41:20] (MessageAPI) `Error initializing universal analytics:` — Developer-only log or non-UI message in lib/
- src/lib/universalAnalyticsInitializer.ts [97:92] (MessageAPI) `Auto-initialization failed:` — Developer-only log or non-UI message in lib/
- src/lib/utils.ts [28:18] (MessageAPI) `downloadBlob called in a non-browser environment` — Developer-only log or non-UI message in lib/
- src/lib/utils.ts [46:18] (MessageAPI) `downloadBlob failed` — Developer-only log or non-UI message in lib/

## Appendix: Offenders by file

### src/App.tsx

- [31:38] (JSXText) Static JSX text node: `Loading...`
  - context: `<Toaster /> <BrowserRouter> <Suspense fallback={<div>Loading...</div>}> <Routes> <Route path="/" elemen`

### src/components/AdvancedFilterPanel.tsx

- [194:13] (JSXText) Static JSX text node: `Advanced Filters`
  - context: `lex items-center gap-2"> <Filter className="h-5 w-5" /> Advanced Filters {activeFilters > 0 && ( <Badge varian`
- [196:56] (JSXText) Static JSX text node: `active`
  - context: `{activeFilters > 0 && ( <Badge variant="default">{activeFilters} active</Badge> )} </CardTitle> <div className="f`
- [207:15] (JSXText) Static JSX text node: `Reset`
  - context: `> <RotateCcw className="h-4 w-4 mr-1" /> Reset </Button> {criteria.realtime && ( <B`
- [211:17] (JSXText) Static JSX text node: `Real-time`
  - context: `<Badge variant="default" className="animate-pulse"> Real-time </Badge> )} </div> </div>`
- [220:42] (JSXText) Static JSX text node: `Filters`
  - context: `t className="grid w-full grid-cols-3"> <TabsTrigger value="filters">Filters</TabsTrigger> <TabsTrigger value="presets">Presets</TabsTrig`
- [221:42] (JSXText) Static JSX text node: `Presets`
  - context: `value="filters">Filters</TabsTrigger> <TabsTrigger value="presets">Presets</TabsTrigger> <TabsTrigger value="saved">Saved ({savedFilter`
- [222:40] (JSXText) Static JSX text node: `Saved (`
  - context: `er value="presets">Presets</TabsTrigger> <TabsTrigger value="saved">Saved ({savedFilters.length})</TabsTrigger> </TabsList> <Ta`
- [232:21] (JSXText) Static JSX text node: `Date Range`
  - context: `"> <CalendarIcon className="h-4 w-4" /> Date Range {(criteria.dateRange.start || criteria.dateRange.`
- [234:50] (JSXText) Static JSX text node: `Active`
  - context: `| criteria.dateRange.end) && ( <Badge variant="secondary">Active</Badge> )} </div> <`
- [241:30] (JSXText) Static JSX text node: `Start Date`
  - context: `grid grid-cols-2 gap-4"> <div> <Label>Start Date</Label> <Popover> <Popo`
- [255:37] (JSXText) Static JSX text node: `Pick a date`
  - context: `t, "PPP") ) : ( <span>Pick a date</span> )} </Bu`
- [272:30] (JSXText) Static JSX text node: `End Date`
  - context: `</div> <div> <Label>End Date</Label> <Popover> <Popove`
- [286:37] (JSXText) Static JSX text node: `Pick a date`
  - context: `d, "PPP") ) : ( <span>Pick a date</span> )} </Bu`
- [311:23] (JSXText) Static JSX text node: `Last 7 days`
  - context: `Date() } })} > Last 7 days </Button> <Button`
- [320:23] (JSXText) Static JSX text node: `Last 30 days`
  - context: `Date() } })} > Last 30 days </Button> </div>`
- [331:21] (JSXText) Static JSX text node: `Emotions`
  - context: `r gap-2"> <Brain className="h-4 w-4" /> Emotions {(criteria.emotions.types.length > 0 ||`
- [335:50] (JSXText) Static JSX text node: `Active`
  - context: `s.intensityRange[1] < 10) && ( <Badge variant="secondary">Active</Badge> )} </div> <`
- [341:28] (JSXText) Static JSX text node: `Emotion Types`
  - context: `ntent className="space-y-4"> <div> <Label>Emotion Types</Label> <div className="grid grid-cols-2 gap-2`
- [369:28] (JSXText) Static JSX text node: `Intensity Range:`
  - context: `v> </div> <div> <Label>Intensity Range: {criteria.emotions.intensityRange[0]} - {criteria.emotions.inte`
- [383:28] (JSXText) Static JSX text node: `Include Triggers`
  - context: `/> </div> <div> <Label>Include Triggers</Label> <Select value`
- [394:50] (JSXAttribute) Static placeholder attribute: `Select triggers to include`
  - context: `<SelectTrigger> <SelectValue placeholder="Select triggers to include" /> </SelectTrigger>`
- [413:21] (JSXText) Static JSX text node: `Sensory`
  - context: `ter gap-2"> <Eye className="h-4 w-4" /> Sensory {(criteria.sensory.types.length > 0 ||`
- [416:50] (JSXText) Static JSX text node: `Active`
  - context: `ory.responses.length > 0) && ( <Badge variant="secondary">Active</Badge> )} </div> <`
- [422:28] (JSXText) Static JSX text node: `Sensory Types`
  - context: `ntent className="space-y-4"> <div> <Label>Sensory Types</Label> <div className="grid grid-cols-2 gap-2`
- [450:28] (JSXText) Static JSX text node: `Responses`
  - context: `v> </div> <div> <Label>Responses</Label> <div className="grid grid-cols-2 gap-2 mt-`
- [478:28] (JSXText) Static JSX text node: `Intensity Range:`
  - context: `v> </div> <div> <Label>Intensity Range: {criteria.sensory.intensityRange[0]} - {criteria.sensory.intens`
- [498:21] (JSXText) Static JSX text node: `Environmental`
  - context: `2"> <Thermometer className="h-4 w-4" /> Environmental {(criteria.environmental.locations.length > 0`
- [501:50] (JSXText) Static JSX text node: `Active`
  - context: `al.activities.length > 0) && ( <Badge variant="secondary">Active</Badge> )} </div> <`
- [507:28] (JSXText) Static JSX text node: `Locations`
  - context: `ntent className="space-y-4"> <div> <Label>Locations</Label> <div className="grid grid-cols-2 gap-2 mt-`
- [535:28] (JSXText) Static JSX text node: `Weather Conditions`
  - context: `v> </div> <div> <Label>Weather Conditions</Label> <div className="grid grid-cols-2`
- [563:28] (JSXText) Static JSX text node: `Noise Level:`
  - context: `v> </div> <div> <Label>Noise Level: {criteria.environmental.conditions.noiseLevel[0]} - {criteria.envir`
- [589:21] (JSXText) Static JSX text node: `Patterns & Analysis`
  - context: `r gap-2"> <Clock className="h-4 w-4" /> Patterns & Analysis {(criteria.patterns.anomaliesOnly ||`
- [592:50] (JSXText) Static JSX text node: `Active`
  - context: `tterns.minConfidence > 0) && ( <Badge variant="secondary">Active</Badge> )} </div> <`
- [605:48] (JSXText) Static JSX text node: `Show anomalies only`
  - context: `})} /> <Label htmlFor="anomalies">Show anomalies only</Label> </div> <div>`
- [609:28] (JSXText) Static JSX text node: `Minimum Confidence:`
  - context: `l> </div> <div> <Label>Minimum Confidence: {criteria.patterns.minConfidence}%</Label>`
- [623:28] (JSXText) Static JSX text node: `Pattern Types`
  - context: `/> </div> <div> <Label>Pattern Types</Label> <div className="grid grid-cols-2 gap-2`
- [657:43] (JSXText) Static JSX text node: `Real-time Updates`
  - context: `<Clock className="h-4 w-4" /> <Label htmlFor="realtime">Real-time Updates</Label> </div> <Switch`
- [692:31] (JSXAttribute) Static placeholder attribute: `Filter name...`
  - context: `<input type="text" placeholder="Filter name..." value={filterName} onChange`
- [699:19] (JSXText) Static JSX text node: `Save Current`
  - context: `terName}> <Save className="h-4 w-4 mr-1" /> Save Current </Button> </div> )}`
- [707:20] (JSXText) Static JSX text node: `No saved filters yet`
  - context: `<Filter className="h-12 w-12 mx-auto mb-4 opacity-50" /> <p>No saved filters yet</p> <p className="text-sm">Save your curren`
- [708:40] (JSXText) Static JSX text node: `Save your current filter configuration for quick access`
  - context: `<p>No saved filters yet</p> <p className="text-sm">Save your current filter configuration for quick access</p> </div>`
- [722:39] (JSXText) Static JSX text node: `filters configured`
  - context: `gify(criteria[k as keyof FilterCriteria]) ).length} filters configured </p> </div>`
- [734:29] (JSXText) Static JSX text node: `Apply`
  - context: `}} > Apply </Button> {onDeleteFil`

### src/components/AdvancedSearch.tsx

- [463:93] (JSXText) Static JSX text node: `students,`
  - context: `{String(tCommon('interface.results'))}: {filteredResults.students.length} students, {filteredResults.emotions.length} emotions, {filteredResults.sensoryIn`
- [463:137] (JSXText) Static JSX text node: `emotions,`
  - context: `: {filteredResults.students.length} students, {filteredResults.emotions.length} emotions, {filteredResults.sensoryInputs.length} sensory inputs, {filteredResult`
- [463:186] (JSXText) Static JSX text node: `sensory inputs,`
  - context: `lteredResults.emotions.length} emotions, {filteredResults.sensoryInputs.length} sensory inputs, {filteredResults.goals.length} goals </span>`
- [463:233] (JSXText) Static JSX text node: `goals`
  - context: `redResults.sensoryInputs.length} sensory inputs, {filteredResults.goals.length} goals </span> {activeFiltersCount > 0 && (`

### src/components/AlertManager.tsx

- [54:19] (MessageAPI) Message API call: success(): `Alert marked as viewed`
  - context: `alertSystem.markAlertAsViewed(alertId); loadAlerts(); toast.success('Alert marked as viewed'); }; /** * Handle alert resolution with proper`
- [54:19] (MessageAPI) sonner toast.success(): `Alert marked as viewed`
  - context: `alertSystem.markAlertAsViewed(alertId); loadAlerts(); toast.success('Alert marked as viewed'); }; /** * Handle alert resolution with proper`
- [77:21] (MessageAPI) Message API call: success(): `Alert resolved successfully`
  - context: `Alert(null); setResolveNotes(''); loadAlerts(); toast.success('Alert resolved successfully'); } catch (error) { logger.error('Failed`
- [77:21] (MessageAPI) sonner toast.success(): `Alert resolved successfully`
  - context: `Alert(null); setResolveNotes(''); loadAlerts(); toast.success('Alert resolved successfully'); } catch (error) { logger.error('Failed`
- [79:20] (MessageAPI) Message API call: error(): `Failed to resolve alert`
  - context: `uccess('Alert resolved successfully'); } catch (error) { logger.error('Failed to resolve alert', error); toast.error('Failed to resolve alert. P`
- [80:19] (MessageAPI) Message API call: error(): `Failed to resolve alert. Please try again.`
  - context: `rror) { logger.error('Failed to resolve alert', error); toast.error('Failed to resolve alert. Please try again.'); } finally { setIsResolv`
- [80:19] (MessageAPI) sonner toast.error(): `Failed to resolve alert. Please try again.`
  - context: `rror) { logger.error('Failed to resolve alert', error); toast.error('Failed to resolve alert. Please try again.'); } finally { setIsResolv`
- [154:57] (JSXText) Static JSX text node: `data points`
  - context: `aleDateString()}</span> <span>{alertEntry.alert.dataPoints} data points</span> {alertEntry.resolved && (`
- [157:25] (JSXText) Static JSX text node: `Resolved`
  - context: `<Badge variant="outline" className="text-green-600"> Resolved </Badge> )}`
- [190:25] (JSXText) Static JSX text node: `Resolve`
  - context: `size="sm" > Resolve </Button> </DialogTrigger>`
- [195:38] (JSXText) Static JSX text node: `Resolve Alert`
  - context: `tent> <DialogHeader> <DialogTitle>Resolve Alert</DialogTitle> </DialogHeader>`
- [199:60] (JSXText) Static JSX text node: `Alert Details`
  - context: `<div> <h4 className="font-medium mb-2">Alert Details</h4> <p className="text-sm text-muted-fo`
- [206:72] (JSXText) Static JSX text node: `Recommendations:`
  - context: `<div> <h5 className="text-sm font-medium mb-2">Recommendations:</h5> <ul className="text-sm text-`
- [210:68] (JSXText) Static JSX text node: `•`
  - context: `tart gap-2"> <span className="text-primary">•</span> <span>{rec}</span>`
- [221:29] (JSXText) Static JSX text node: `Resolution Notes (Optional)`
  - context: `<label className="text-sm font-medium mb-2 block"> Resolution Notes (Optional) </label>`
- [226:41] (JSXAttribute) Static placeholder attribute: `Describe actions taken or observations...`
  - context: `(e) => setResolveNotes(e.target.value)} placeholder="Describe actions taken or observations..." rows={3}`
- [233:29] (JSXText) Static JSX text node: `Cancel`
  - context: `t="outline" onClick={() => setSelectedAlert(null)}> Cancel </Button> <Button`
- [254:19] (JSXText) Static JSX text node: `Recommended Actions:`
  - context: `<h4 className="text-sm font-medium mb-2 text-foreground"> Recommended Actions: </h4> <ul className="text-s`
- [259:54] (JSXText) Static JSX text node: `•`
  - context: `="flex items-start gap-2"> <span className="text-primary">•</span> <span>{recommendation}</span>`
- [269:21] (JSXText) Static JSX text node: `Resolution Notes:`
  - context: `<h5 className="text-sm font-medium text-green-800 mb-1"> Resolution Notes: </h5> <p className="text-s`
- [273:21] (JSXText) Static JSX text node: `Resolved by`
  - context: `<p className="text-xs text-green-600 mt-1"> Resolved by {alertEntry.resolvedBy} on {alertEntry.resolvedAt?.toLocaleDateStrin`
- [273:57] (JSXText) Static JSX text node: `on`
  - context: `s text-green-600 mt-1"> Resolved by {alertEntry.resolvedBy} on {alertEntry.resolvedAt?.toLocaleDateString()} </p>`

### src/components/AnalyticsConfigTest.tsx

- [243:11] (JSXText) Static JSX text node: `Analytics Configuration Tests`
  - context: `"flex items-center gap-2"> <Settings className="h-5 w-5" /> Analytics Configuration Tests </CardTitle> <CardDescription>`
- [246:11] (JSXText) Static JSX text node: `Verify that configuration changes and cache invalidation work correctly`
  - context: `cs Configuration Tests </CardTitle> <CardDescription> Verify that configuration changes and cache invalidation work correctly`
- [252:58] (JSXText) Static JSX text node: `Current Configuration`
  - context: `className="space-y-1"> <p className="text-sm text-muted-foreground">Current Configuration</p> <div className="flex gap-2">`
- [255:17] (JSXText) Static JSX text node: `Alert Level:`
  - context: `className="flex gap-2"> <Badge variant="outline"> Alert Level: {currentConfig.alertSensitivity.level} </Badge>`
- [258:17] (JSXText) Static JSX text node: `Min Data Points:`
  - context: `</Badge> <Badge variant="outline"> Min Data Points: {currentConfig.patternAnalysis.minDataPoints} </B`
- [261:17] (JSXText) Static JSX text node: `Cache Size:`
  - context: `</Badge> <Badge variant="outline"> Cache Size: {cacheSize} </Badge> </div> </di`
- [267:13] (JSXText) Static JSX text node: `Run Tests`
  - context: `items-center gap-2"> <RefreshCw className="h-4 w-4" /> Run Tests </Button> </div> {testResults.length > 0 &&`
- [273:49] (JSXText) Static JSX text node: `Test Results`
  - context: `<div className="space-y-2"> <h4 className="text-sm font-medium">Test Results</h4> {testResults.map((result, index) => (`
- [293:61] (JSXText) Static JSX text node: `Quick Actions`
  - context: `me="pt-4 border-t"> <p className="text-sm text-muted-foreground mb-2">Quick Actions</p> <div className="flex flex-wrap gap-2"> <`
- [300:15] (JSXText) Static JSX text node: `Set Conservative`
  - context: `k={() => analyticsConfig.setPreset('conservative')} > Set Conservative </Button> <Button size="s`
- [307:15] (JSXText) Static JSX text node: `Set Sensitive`
  - context: `lick={() => analyticsConfig.setPreset('sensitive')} > Set Sensitive </Button> <Button size="sm"`
- [314:15] (JSXText) Static JSX text node: `Reset to Defaults`
  - context: `onClick={() => analyticsConfig.resetToDefaults()} > Reset to Defaults </Button> <Button size="`
- [321:15] (JSXText) Static JSX text node: `Clear Cache`
  - context: `ariant="outline" onClick={clearCache} > Clear Cache </Button> </div> </div> </CardCo`

### src/components/AnalyticsDashboard.tsx

- [97:24] (MessageAPI) Message API call: error(): `Error coercing timestamp:`
  - context: `} return new Date(); } catch (error) { logger.error('Error coercing timestamp:', v, error); return new Date(); }`
- [109:22] (MessageAPI) Message API call: error(): `Error normalizing filteredData:`
  - context: `oerce(s.timestamp) })), }; } catch (error) { logger.error('Error normalizing filteredData:', error); return { entries: [`
- [184:25] (MessageAPI) Message API call: success(): `PDF report exported successfully`
  - context: `await analyticsExport.exportToPDF(exportData); toast.success('PDF report exported successfully'); break; case 'csv':`
- [184:25] (MessageAPI) sonner toast.success(): `PDF report exported successfully`
  - context: `await analyticsExport.exportToPDF(exportData); toast.success('PDF report exported successfully'); break; case 'csv':`
- [188:25] (MessageAPI) Message API call: success(): `CSV data exported successfully`
  - context: `sv': analyticsExport.exportToCSV(exportData); toast.success('CSV data exported successfully'); break; case 'json':`
- [188:25] (MessageAPI) sonner toast.success(): `CSV data exported successfully`
  - context: `sv': analyticsExport.exportToCSV(exportData); toast.success('CSV data exported successfully'); break; case 'json':`
- [192:25] (MessageAPI) Message API call: success(): `JSON data exported successfully`
  - context: `n': analyticsExport.exportToJSON(exportData); toast.success('JSON data exported successfully'); break; } } catch (error)`
- [192:25] (MessageAPI) sonner toast.success(): `JSON data exported successfully`
  - context: `n': analyticsExport.exportToJSON(exportData); toast.success('JSON data exported successfully'); break; } } catch (error)`
- [196:20] (MessageAPI) Message API call: error(): `Export failed:`
  - context: `ccessfully'); break; } } catch (error) { logger.error('Export failed:', error); toast.error('Failed to export analytics data');`
- [197:19] (MessageAPI) Message API call: error(): `Failed to export analytics data`
  - context: `catch (error) { logger.error('Export failed:', error); toast.error('Failed to export analytics data'); } finally { setIsExporting(false);`
- [197:19] (MessageAPI) sonner toast.error(): `Failed to export analytics data`
  - context: `catch (error) { logger.error('Export failed:', error); toast.error('Failed to export analytics data'); } finally { setIsExporting(false);`
- [228:22] (JSXText) Static JSX text node: `Analytics Dashboard -`
  - context: `er className="flex flex-row items-center justify-between"> <CardTitle>Analytics Dashboard - {student.name}</CardTitle> <div className="flex`
- [236:15] (JSXText) Static JSX text node: `Settings`
  - context: `> <Settings className="h-4 w-4 mr-2" /> Settings </Button> <DropdownMenu> <Dropdow`
- [251:19] (JSXText) Static JSX text node: `Export as PDF`
  - context: `> <FileText className="h-4 w-4 mr-2" /> Export as PDF </DropdownMenuItem> <DropdownMenuI`
- [258:19] (JSXText) Static JSX text node: `Export as CSV`
  - context: `<FileSpreadsheet className="h-4 w-4 mr-2" /> Export as CSV </DropdownMenuItem> <DropdownMenuI`
- [265:19] (JSXText) Static JSX text node: `Export as JSON`
  - context: `> <FileJson className="h-4 w-4 mr-2" /> Export as JSON </DropdownMenuItem> </DropdownMenuC`
- [279:74] (JSXText) Static JSX text node: `Total Sessions`
  - context: `<div> <p className="text-sm font-medium text-muted-foreground">Total Sessions</p> <p className="text-2xl font-bold">{filteredDa`
- [315:74] (JSXText) Static JSX text node: `Patterns Found`
  - context: `<div> <p className="text-sm font-medium text-muted-foreground">Patterns Found</p> <p className="text-2xl font-bold">{patterns.l`
- [327:58] (JSXAttribute) Static aria-label attribute: `Charts tab`
  - context: `d w-full grid-cols-4"> <TabsTrigger value="visualizations" aria-label="Charts tab">Charts</TabsTrigger> <TabsTrigger value="patterns">Patter`
- [327:71] (JSXText) Static JSX text node: `Charts`
  - context: `-cols-4"> <TabsTrigger value="visualizations" aria-label="Charts tab">Charts</TabsTrigger> <TabsTrigger value="patterns">Patterns</TabsTrigg`
- [328:41] (JSXText) Static JSX text node: `Patterns`
  - context: `label="Charts tab">Charts</TabsTrigger> <TabsTrigger value="patterns">Patterns</TabsTrigger> <TabsTrigger value="correlations" data-testid="`
- [329:86] (JSXText) Static JSX text node: `Correlations`
  - context: `<TabsTrigger value="correlations" data-testid="dashboard-correlations-tab">Correlations</TabsTrigger> <TabsTrigger value="alerts">Alerts</TabsTri`
- [330:39] (JSXText) Static JSX text node: `Alerts`
  - context: `relations-tab">Correlations</TabsTrigger> <TabsTrigger value="alerts">Alerts</TabsTrigger> </TabsList> <TabsContent value="visualizat`
- [335:111] (JSXAttribute) Static aria-label attribute: `Loading visualization`
  - context: `={<div className="h-[360px] rounded-xl border bg-card animate-pulse" aria-label="Loading visualization" /> }> <LazyInteractiveDataVisualization`
- [349:26] (JSXText) Static JSX text node: `Behavioral Patterns`
  - context: `lassName="flex flex-row items-center justify-between"> <CardTitle>Behavioral Patterns</CardTitle> <Button variant="`
- [363:23] (JSXText) Static JSX text node: `Analyzing data...`
  - context: `sName="h-12 w-12 mx-auto mb-4 animate-spin opacity-50" /> <p>Analyzing data...</p> </div> )} {!i`
- [374:22] (JSXText) Static JSX text node: `No significant patterns detected yet.`
  - context: `<Clock className="h-12 w-12 mx-auto mb-4 opacity-50" /> <p>No significant patterns detected yet.</p> <p className="text-s`
- [375:42] (JSXText) Static JSX text node: `More data may be needed for pattern analysis.`
  - context: `significant patterns detected yet.</p> <p className="text-sm">More data may be needed for pattern analysis.</p> </div>`
- [396:48] (JSXAttribute) Static aria-label attribute: `Vis forklaringen`
  - context: `<button aria-label="Vis forklaringen" className="inline-flex it`
- [400:37] (JSXText) Static JSX text node: `Vis forklaringen`
  - context: `<Info className="h-3 w-3" /> Vis forklaringen </button>`
- [404:67] (JSXText) Static JSX text node: `Hva betyr dette mønsteret?`
  - context: `ing-relaxed"> <p className="mb-1 font-medium">Hva betyr dette mønsteret?</p> <p className="t`
- [409:37] (JSXText) Static JSX text node: `Tolk alltid sammen med kontekst og pedagogisk vurdering.`
  - context: `me="mt-2 text-xs text-muted-foreground/80"> Tolk alltid sammen med kontekst og pedagogisk vurdering.`
- [419:76] (JSXText) Static JSX text node: `Recommendations:`
  - context: `-3"> <h5 className="text-sm font-medium mb-2">Recommendations:</h5> <ul className="text-sm t`
- [423:72] (JSXText) Static JSX text node: `•`
  - context: `gap-2"> <span className="text-primary">•</span> <span>{rec}</span>`
- [434:69] (JSXText) Static JSX text node: `% confidence`
  - context: `nfidence)}> {Math.round(pattern.confidence * 100)}% confidence </Badge> <p`
- [437:52] (JSXText) Static JSX text node: `data points`
  - context: `text-muted-foreground mt-1"> {pattern.dataPoints} data points </p> </div>`
- [452:26] (JSXText) Static JSX text node: `AI-Generated Insights`
  - context: `Section */} <Card> <CardHeader> <CardTitle>AI-Generated Insights</CardTitle> </CardHeader> <CardCon`
- [455:68] (JSXText) Static JSX text node: `Generating insights...`
  - context: `CardContent> {isAnalyzing && <p className="text-muted-foreground">Generating insights...</p>} {!isAnalyzing && insights.length === 0`
- [457:54] (JSXText) Static JSX text node: `No insights available yet.`
  - context: `insights.length === 0 && ( <p className="text-muted-foreground">No insights available yet.</p> )} {!isAnalyzing && i`
- [476:75] (JSXText) Static JSX text node: `Correlation Heatmap`
  - context: `<div> <CardTitle data-testid="environmental-correlations-title">Correlation Heatmap</CardTitle> <p className="text-sm text-muted`
- [477:62] (JSXText) Static JSX text node: `Strength of relationships between tracked factors (−1 to 1)`
  - context: `eatmap</CardTitle> <p className="text-sm text-muted-foreground">Strength of relationships between tracked factors (−1 to 1)</p> </`
- [481:38] (JSXAttribute) Static aria-label attribute: `Hvordan lese varmekartet`
  - context: `<HoverCardTrigger asChild> <button aria-label="Hvordan lese varmekartet" className="inline-flex items-center gap-2 rounded-ful`
- [483:21] (JSXText) Static JSX text node: `Hvordan lese varmekartet`
  - context: `ccent/30"> <Info className="h-4 w-4" /> Hvordan lese varmekartet </button> </HoverCard`
- [488:21] (JSXText) Static JSX text node: `Farger viser korrelasjon: grønn = positiv sammenheng, rød = negativ. Tall nær 1 eller −1 betyr sterkere samband.
                    Akser viser faktorer. Hold musepekeren over en celle for detaljer og signifikans.`
  - context: `sName="w-80 text-sm leading-relaxed"> <p> Farger viser korrelasjon: grønn = positiv sammenheng, rød = negativ. Tall nær 1`
- [498:22] (JSXText) Static JSX text node: `Analyzing correlations...`
  - context: `ssName="h-12 w-12 mx-auto mb-4 animate-spin opacity-50" /> <p>Analyzing correlations...</p> </div> )}`
- [518:33] (JSXText) Static JSX text node: `Negativ`
  - context: `ms-center gap-3 text-xs text-muted-foreground"> <span>Negativ</span> <span className="h-3 w-3 rounded" style`
- [522:33] (JSXText) Static JSX text node: `Positiv`
  - context: `rder" style={{ backgroundColor: '#f3f4f6' }} /> <span>Positiv</span> <span className="h-3 w-3 rounded" style`
- [535:26] (JSXText) Static JSX text node: `No significant correlations found.`
  - context: `hart3 className="h-12 w-12 mx-auto mb-4 opacity-50" /> <p>No significant correlations found.</p> <p className="text-`
- [536:46] (JSXText) Static JSX text node: `More varied environmental data may be needed.`
  - context: `ignificant correlations found.</p> <p className="text-sm">More varied environmental data may be needed.</p> </div>`
- [548:55] (JSXText) Static JSX text node: `↔`
  - context: `-medium text-foreground"> {correlation.factor1} ↔ {correlation.factor2} </h4>`
- [556:60] (JSXText) Static JSX text node: `significance`
  - context: `fault' : 'outline'}> {correlation.significance} significance </Badge>`
- [559:33] (JSXText) Static JSX text node: `r =`
  - context: `className="text-xs text-muted-foreground mt-1"> r = {typeof (correlation as CorrelationResult & {correlation?: number}).correlat`
- [619:23] (MessageAPI) Message API call: error(): `Error comparing timestamps in AnalyticsDashboard memo:`
  - context: `return prevTime === nextTime; } catch (error) { logger.error('Error comparing timestamps in AnalyticsDashboard memo:', error); retur`

### src/components/AnalyticsSettings.tsx

- [73:20] (MessageAPI) Message API call: error(): `Failed to load ML model status`
  - context: `tatus(); setModelStatus(status); } catch (error) { logger.error('Failed to load ML model status', { error }); toast.error("Failed to load`
- [74:19] (MessageAPI) Message API call: error(): `Failed to load ML models: Could not retrieve model status. Some features may be unavailable.`
  - context: `logger.error('Failed to load ML model status', { error }); toast.error("Failed to load ML models: Could not retrieve model status. Some features may be`
- [74:19] (MessageAPI) sonner toast.error(): `Failed to load ML models: Could not retrieve model status. Some features may be unavailable.`
  - context: `logger.error('Failed to load ML model status', { error }); toast.error("Failed to load ML models: Could not retrieve model status. Some features may be`
- [129:19] (MessageAPI) Message API call: success(): `Analytics configuration has been updated`
  - context: `Config.updateConfig(config); setHasUnsavedChanges(false); toast.success("Analytics configuration has been updated"); }; const handleReset = () => {`
- [129:19] (MessageAPI) sonner toast.success(): `Analytics configuration has been updated`
  - context: `Config.updateConfig(config); setHasUnsavedChanges(false); toast.success("Analytics configuration has been updated"); }; const handleReset = () => {`
- [136:19] (MessageAPI) Message API call: success(): `Settings have been reset to defaults`
  - context: `tSelectedPreset('balanced'); setHasUnsavedChanges(false); toast.success("Settings have been reset to defaults"); }; const handleExport = () => {`
- [136:19] (MessageAPI) sonner toast.success(): `Settings have been reset to defaults`
  - context: `tSelectedPreset('balanced'); setHasUnsavedChanges(false); toast.success("Settings have been reset to defaults"); }; const handleExport = () => {`
- [151:19] (MessageAPI) Message API call: success(): `Configuration saved to analytics-config.json`
  - context: `ument.body.removeChild(a); URL.revokeObjectURL(url); toast.success("Configuration saved to analytics-config.json"); }; const handleImport = (e`
- [151:19] (MessageAPI) sonner toast.success(): `Configuration saved to analytics-config.json`
  - context: `ument.body.removeChild(a); URL.revokeObjectURL(url); toast.success("Configuration saved to analytics-config.json"); }; const handleImport = (e`
- [164:25] (MessageAPI) Message API call: success(): `Successfully imported configuration`
  - context: `nfig(content)) { setHasUnsavedChanges(false); toast.success("Successfully imported configuration"); } else { toast.error("`
- [164:25] (MessageAPI) sonner toast.success(): `Successfully imported configuration`
  - context: `nfig(content)) { setHasUnsavedChanges(false); toast.success("Successfully imported configuration"); } else { toast.error("`
- [166:23] (MessageAPI) Message API call: error(): `Invalid configuration file`
  - context: `("Successfully imported configuration"); } else { toast.error("Invalid configuration file"); } } catch (_error) { toast.`
- [166:23] (MessageAPI) sonner toast.error(): `Invalid configuration file`
  - context: `("Successfully imported configuration"); } else { toast.error("Invalid configuration file"); } } catch (_error) { toast.`
- [169:21] (MessageAPI) Message API call: error(): `Failed to read configuration file`
  - context: `id configuration file"); } } catch (_error) { toast.error("Failed to read configuration file"); } }; reader.readAsText(file)`
- [169:21] (MessageAPI) sonner toast.error(): `Failed to read configuration file`
  - context: `id configuration file"); } } catch (_error) { toast.error("Failed to read configuration file"); } }; reader.readAsText(file)`
- [197:19] (MessageAPI) Message API call: error(): `Failed to delete model`
  - context: `${modelType} model has been removed\`); } catch (_error) { toast.error("Failed to delete model"); } finally { setIsDeletingModel(null); }`
- [197:19] (MessageAPI) sonner toast.error(): `Failed to delete model`
  - context: `${modelType} model has been removed\`); } catch (_error) { toast.error("Failed to delete model"); } finally { setIsDeletingModel(null); }`
- [241:13] (JSXText) Static JSX text node: `Analytics Configuration`
  - context: `x items-center gap-2"> <Settings className="h-5 w-5" /> Analytics Configuration </DialogTitle> <DialogDescription>`
- [244:13] (JSXText) Static JSX text node: `Customize analytics parameters to adjust sensitivity and thresholds`
  - context: `onfiguration </DialogTitle> <DialogDescription> Customize analytics parameters to adjust sensitivity and thresholds </`
- [252:46] (JSXText) Static JSX text node: `Preset Configurations`
  - context: `<Card> <CardHeader> <CardTitle className="text-lg">Preset Configurations</CardTitle> <CardDescription>`
- [254:17] (JSXText) Static JSX text node: `Choose a preset configuration or customize your own`
  - context: `eset Configurations</CardTitle> <CardDescription> Choose a preset configuration or customize your own </CardDescript`
- [267:53] (JSXText) Static JSX text node: `Conservative`
  - context: `="h-4 w-4 text-blue-500" /> <span className="font-medium">Conservative</span> </div> <p className=`
- [270:23] (JSXText) Static JSX text node: `Higher thresholds, fewer alerts`
  - context: `<p className="text-sm text-muted-foreground"> Higher thresholds, fewer alerts </p> </Lab`
- [281:53] (JSXText) Static JSX text node: `Balanced`
  - context: `"h-4 w-4 text-green-500" /> <span className="font-medium">Balanced</span> </div> <p className="tex`
- [284:23] (JSXText) Static JSX text node: `Default settings, balanced sensitivity`
  - context: `<p className="text-sm text-muted-foreground"> Default settings, balanced sensitivity </p>`
- [295:53] (JSXText) Static JSX text node: `Sensitive`
  - context: `h-4 w-4 text-yellow-500" /> <span className="font-medium">Sensitive</span> </div> <p className="te`
- [298:23] (JSXText) Static JSX text node: `Lower thresholds, more alerts`
  - context: `<p className="text-sm text-muted-foreground"> Lower thresholds, more alerts </p> </Label`
- [309:47] (JSXText) Static JSX text node: `Thresholds`
  - context: `ssName="grid w-full grid-cols-5"> <TabsTrigger value="thresholds">Thresholds</TabsTrigger> <TabsTrigger value="sensitivity">Sensitiv`
- [310:48] (JSXText) Static JSX text node: `Sensitivity`
  - context: `sholds">Thresholds</TabsTrigger> <TabsTrigger value="sensitivity">Sensitivity</TabsTrigger> <TabsTrigger value="timewindows">Time Wi`
- [311:48] (JSXText) Static JSX text node: `Time Windows`
  - context: `ivity">Sensitivity</TabsTrigger> <TabsTrigger value="timewindows">Time Windows</TabsTrigger> <TabsTrigger value="mlmodels">ML Models`
- [312:45] (JSXText) Static JSX text node: `ML Models`
  - context: `windows">Time Windows</TabsTrigger> <TabsTrigger value="mlmodels">ML Models</TabsTrigger> <TabsTrigger value="advanced">Advanced</Ta`
- [313:45] (JSXText) Static JSX text node: `Advanced`
  - context: `="mlmodels">ML Models</TabsTrigger> <TabsTrigger value="advanced">Advanced</TabsTrigger> </TabsList> <TabsContent value="`
- [319:52] (JSXText) Static JSX text node: `Pattern Analysis Thresholds`
  - context: `<CardHeader> <CardTitle className="text-base">Pattern Analysis Thresholds</CardTitle> <CardDescription>`
- [321:21] (JSXText) Static JSX text node: `Adjust minimum requirements and thresholds for pattern detection`
  - context: `Thresholds</CardTitle> <CardDescription> Adjust minimum requirements and thresholds for pattern detection`
- [327:54] (JSXText) Static JSX text node: `Minimum Data Points`
  - context: `sName="flex items-center"> <Label htmlFor="minDataPoints">Minimum Data Points</Label> {renderTooltip("Minimum number`
- [346:61] (JSXText) Static JSX text node: `Correlation Threshold`
  - context: `flex items-center"> <Label htmlFor="correlationThreshold">Correlation Threshold</Label> {renderTooltip("Minimum corr`
- [365:57] (JSXText) Static JSX text node: `Concern Frequency Threshold`
  - context: `me="flex items-center"> <Label htmlFor="concernFrequency">Concern Frequency Threshold</Label> {renderTooltip("Percen`
- [386:52] (JSXText) Static JSX text node: `Enhanced Analysis Thresholds`
  - context: `<CardHeader> <CardTitle className="text-base">Enhanced Analysis Thresholds</CardTitle> <CardDescription>`
- [388:21] (JSXText) Static JSX text node: `Configure advanced pattern detection and anomaly thresholds`
  - context: `Thresholds</CardTitle> <CardDescription> Configure advanced pattern detection and anomaly thresholds </`
- [394:57] (JSXText) Static JSX text node: `Anomaly Detection Sensitivity`
  - context: `me="flex items-center"> <Label htmlFor="anomalyThreshold">Anomaly Detection Sensitivity</Label> {renderTooltip("Numb`
- [407:110] (JSXText) Static JSX text node: `σ`
  - context: `lassName="w-12 text-right">{config.enhancedAnalysis.anomalyThreshold.toFixed(2)}σ</span> </div> </div>`
- [413:54] (JSXText) Static JSX text node: `Minimum Sample Size`
  - context: `sName="flex items-center"> <Label htmlFor="minSampleSize">Minimum Sample Size</Label> {renderTooltip("Minimum data p`
- [436:52] (JSXText) Static JSX text node: `Alert Sensitivity`
  - context: `<CardHeader> <CardTitle className="text-base">Alert Sensitivity</CardTitle> <CardDescription>`
- [438:21] (JSXText) Static JSX text node: `Control how sensitive the system is to potential issues`
  - context: `Sensitivity</CardTitle> <CardDescription> Control how sensitive the system is to potential issues </Card`
- [450:54] (JSXText) Static JSX text node: `Low Sensitivity`
  - context: `<div> <p className="font-medium">Low Sensitivity</p> <p className="text-sm text-muted-f`
- [452:29] (JSXText) Static JSX text node: `Only alert for significant patterns with high confidence`
  - context: `<p className="text-sm text-muted-foreground"> Only alert for significant patterns with high confidence`
- [460:54] (JSXText) Static JSX text node: `Medium Sensitivity`
  - context: `<div> <p className="font-medium">Medium Sensitivity</p> <p className="text-sm text-mute`
- [462:29] (JSXText) Static JSX text node: `Balanced approach to pattern detection and alerts`
  - context: `<p className="text-sm text-muted-foreground"> Balanced approach to pattern detection and alerts </p>`
- [470:54] (JSXText) Static JSX text node: `High Sensitivity`
  - context: `<div> <p className="font-medium">High Sensitivity</p> <p className="text-sm text-muted-`
- [472:29] (JSXText) Static JSX text node: `Alert for subtle patterns and potential concerns early`
  - context: `<p className="text-sm text-muted-foreground"> Alert for subtle patterns and potential concerns early`
- [480:78] (JSXText) Static JSX text node: `Current Multipliers:`
  - context: `"> <p className="text-sm font-medium text-muted-foreground">Current Multipliers:</p> <div className="grid grid-cols-3 ga`
- [482:28] (JSXText) Static JSX text node: `Emotion:`
  - context: `<div className="grid grid-cols-3 gap-2 text-sm"> <div>Emotion: {config.alertSensitivity.emotionIntensityMultiplier}x</div>`
- [482:89] (JSXText) Static JSX text node: `x`
  - context: `<div>Emotion: {config.alertSensitivity.emotionIntensityMultiplier}x</div> <div>Frequency: {config.alertSensitivity.frequency`
- [483:28] (JSXText) Static JSX text node: `Frequency:`
  - context: `.alertSensitivity.emotionIntensityMultiplier}x</div> <div>Frequency: {config.alertSensitivity.frequencyMultiplier}x</div>`
- [483:84] (JSXText) Static JSX text node: `x`
  - context: `<div>Frequency: {config.alertSensitivity.frequencyMultiplier}x</div> <div>Anomaly: {config.alertSensitivity.anomalyMult`
- [484:28] (JSXText) Static JSX text node: `Anomaly:`
  - context: `{config.alertSensitivity.frequencyMultiplier}x</div> <div>Anomaly: {config.alertSensitivity.anomalyMultiplier}x</div>`
- [484:80] (JSXText) Static JSX text node: `x`
  - context: `<div>Anomaly: {config.alertSensitivity.anomalyMultiplier}x</div> </div> </div> </Ca`
- [494:52] (JSXText) Static JSX text node: `Analysis Time Windows`
  - context: `<CardHeader> <CardTitle className="text-base">Analysis Time Windows</CardTitle> <CardDescription>`
- [496:21] (JSXText) Static JSX text node: `Configure the time periods used for different analyses`
  - context: `ime Windows</CardTitle> <CardDescription> Configure the time periods used for different analyses </CardD`
- [502:56] (JSXText) Static JSX text node: `Default Analysis Period`
  - context: `ame="flex items-center"> <Label htmlFor="defaultAnalysis">Default Analysis Period</Label> {renderTooltip("Standard t`
- [515:98] (JSXText) Static JSX text node: `days`
  - context: `<span className="w-16 text-right">{config.timeWindows.defaultAnalysisDays} days</span> </div> </div>`
- [521:51] (JSXText) Static JSX text node: `Recent Data Window`
  - context: `lassName="flex items-center"> <Label htmlFor="recentData">Recent Data Window</Label> {renderTooltip("Time window for`
- [534:93] (JSXText) Static JSX text node: `days`
  - context: `<span className="w-16 text-right">{config.timeWindows.recentDataDays} days</span> </div> </div>`
- [540:49] (JSXText) Static JSX text node: `Long-term Analysis Window`
  - context: `className="flex items-center"> <Label htmlFor="longTerm">Long-term Analysis Window</Label> {renderTooltip("Extended`
- [553:91] (JSXText) Static JSX text node: `days`
  - context: `<span className="w-16 text-right">{config.timeWindows.longTermDays} days</span> </div> </div>`
- [566:23] (JSXText) Static JSX text node: `Machine Learning Models`
  - context: `p-2"> <Brain className="h-4 w-4" /> Machine Learning Models </span> <div cla`
- [569:83] (JSXText) Static JSX text node: `Enable ML`
  - context: `<Label htmlFor="ml-enabled" className="text-sm font-normal">Enable ML</Label> <Switch id="ml-e`
- [578:21] (JSXText) Static JSX text node: `Manage AI-powered prediction models for enhanced analytics`
  - context: `</CardTitle> <CardDescription> Manage AI-powered prediction models for enhanced analytics </C`
- [586:68] (JSXText) Static JSX text node: `Loading ML models...`
  - context: `reground" /> <span className="ml-2 text-muted-foreground">Loading ML models...</span> </div> ) : (`
- [611:70] (JSXText) Static JSX text node: `Version`
  - context: `<div> <p className="text-muted-foreground">Version</p> <p className="font-medium">{model.ve`
- [615:70] (JSXText) Static JSX text node: `Last Trained`
  - context: `<div> <p className="text-muted-foreground">Last Trained</p> <p className="font-medium">`
- [622:72] (JSXText) Static JSX text node: `Accuracy`
  - context: `<div> <p className="text-muted-foreground">Accuracy</p> <p className="font-medium">{(mode`
- [627:70] (JSXText) Static JSX text node: `Data Points`
  - context: `<div> <p className="text-muted-foreground">Data Points</p> <p className="font-medium">{mode`
- [635:75] (JSXText) Static JSX text node: `Model Performance`
  - context: `-sm"> <span className="text-muted-foreground">Model Performance</span> <span>{(model.accurac`
- [652:37] (JSXText) Static JSX text node: `Training...`
  - context: `r2 className="h-3 w-3 mr-1 animate-spin" /> Training... </>`
- [657:37] (JSXText) Static JSX text node: `Retrain`
  - context: `<RefreshCw className="h-3 w-3 mr-1" /> Retrain </> )}`
- [670:37] (JSXText) Static JSX text node: `Deleting...`
  - context: `r2 className="h-3 w-3 mr-1 animate-spin" /> Deleting... </>`
- [681:31] (JSXText) Static JSX text node: `No model trained yet. Model will be trained automatically when sufficient data is available.`
  - context: `p className="text-sm text-muted-foreground mb-3"> No model trained yet. Model will be trained automatically when sufficient data i`
- [692:35] (JSXText) Static JSX text node: `Training...`
  - context: `der2 className="h-3 w-3 mr-1 animate-spin" /> Training... </> )`
- [697:35] (JSXText) Static JSX text node: `Train Model`
  - context: `<Brain className="h-3 w-3 mr-1" /> Train Model </> )}`
- [711:23] (JSXText) Static JSX text node: `About Machine Learning`
  - context: `ap-2"> <Info className="h-4 w-4" /> About Machine Learning </h5> <p classNam`
- [714:23] (JSXText) Static JSX text node: `ML models enhance predictions by learning from historical patterns. They require:`
  - context: `<p className="text-sm text-muted-foreground"> ML models enhance predictions by learning from historical patterns. They require`
- [717:27] (JSXText) Static JSX text node: `• Emotion prediction: 7+ days of data`
  - context: `sName="text-sm text-muted-foreground space-y-1 ml-4"> <li>• Emotion prediction: 7+ days of data</li> <li>• Sensory r`
- [718:27] (JSXText) Static JSX text node: `• Sensory response: 10+ tracking sessions`
  - context: `<li>• Emotion prediction: 7+ days of data</li> <li>• Sensory response: 10+ tracking sessions</li> <li>• Basel`
- [719:27] (JSXText) Static JSX text node: `• Baseline clustering: 10+ tracking entries`
  - context: `<li>• Sensory response: 10+ tracking sessions</li> <li>• Baseline clustering: 10+ tracking entries</li> </ul>`
- [722:23] (JSXText) Static JSX text node: `Models are trained locally in your browser and improve over time as more data is collected.`
  - context: `<p className="text-sm text-muted-foreground"> Models are trained locally in your browser and improve over time as more data is`
- [734:52] (JSXText) Static JSX text node: `Cache Settings`
  - context: `<CardHeader> <CardTitle className="text-base">Cache Settings</CardTitle> <CardDescription>`
- [736:21] (JSXText) Static JSX text node: `Configure performance optimization settings`
  - context: `he Settings</CardTitle> <CardDescription> Configure performance optimization settings </CardDescription>`
- [742:49] (JSXText) Static JSX text node: `Cache Duration`
  - context: `className="flex items-center"> <Label htmlFor="cacheTTL">Cache Duration</Label> {renderTooltip("How long to keep ca`
- [755:84] (JSXText) Static JSX text node: `min`
  - context: `<span className="w-16 text-right">{config.cache.ttl / 60000} min</span> </div> </div>`
- [761:30] (JSXText) Static JSX text node: `Invalidate cache on config change`
  - context: `<div className="flex items-center"> <Label>Invalidate cache on config change</Label> {renderTooltip("`
- [773:52] (JSXText) Static JSX text node: `Import/Export Configuration`
  - context: `<CardHeader> <CardTitle className="text-base">Import/Export Configuration</CardTitle> <CardDescription>`
- [775:21] (JSXText) Static JSX text node: `Save and share your configuration settings`
  - context: `nfiguration</CardTitle> <CardDescription> Save and share your configuration settings </CardDescription>`
- [785:21] (JSXText) Static JSX text node: `Export Config`
  - context: `> <Download className="h-4 w-4" /> Export Config </Button> <`
- [796:25] (JSXText) Static JSX text node: `Import Config`
  - context: `<Upload className="h-4 w-4" /> Import Config </span> </Button>`
- [820:15] (JSXText) Static JSX text node: `Reset to Defaults`
  - context: `-2" > <RotateCcw className="h-4 w-4" /> Reset to Defaults </Button> <div className=`
- [827:19] (JSXText) Static JSX text node: `Unsaved changes`
  - context: `r-4"> <AlertTriangle className="h-4 w-4" /> Unsaved changes </p> )}`
- [835:17] (JSXText) Static JSX text node: `Cancel`
  - context: `nt="outline" onClick={onClose} > Cancel </Button> <Button`
- [844:17] (JSXText) Static JSX text node: `Save Changes`
  - context: `2" > <Save className="h-4 w-4" /> Save Changes </Button> </div> </div>`

### src/components/AnalyticsStatusIndicator.tsx

- [103:20] (MessageAPI) Message API call: error(): `Error refreshing analytics`
  - context: `; } loadAnalyticsStatus(); } catch (error) { logger.error('Error refreshing analytics', error); } finally { setIsRefreshing(fals`
- [138:11] (JSXText) Static JSX text node: `Analytics:`
  - context: `<Badge variant={getStatusColor(status)} className="text-xs"> Analytics: {getStatusText(status)} </Badge> {status.lastAnalyzed`
- [142:13] (JSXText) Static JSX text node: `Updated`
  - context: `zed && ( <span className="text-xs text-muted-foreground"> Updated {formatDistanceToNow(status.lastAnalyzed, { addSuffix: true })}`
- [155:13] (JSXText) Static JSX text node: `Analytics Status`
  - context: `flex items-center gap-2"> <Brain className="h-5 w-5" /> Analytics Status {studentId && \` - ${analyticsStatus[0]?.studentName`
- [165:13] (JSXText) Static JSX text node: `Refresh`
  - context: `className={\`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}\`} /> Refresh </Button> </div> </CardHeader> <CardConten`
- [173:16] (JSXText) Static JSX text node: `No analytics data available`
  - context: `<Activity className="h-8 w-8 mx-auto mb-2 opacity-50" /> <p>No analytics data available</p> </div> ) : ( <div cl`
- [192:27] (JSXText) Static JSX text node: `Data Available`
  - context: `<BarChart3 className="h-3 w-3 mr-1" /> Data Available </Badge> ) : (`
- [197:27] (JSXText) Static JSX text node: `Collecting Data`
  - context: `<Clock className="h-3 w-3 mr-1" /> Collecting Data </Badge> )}`
- [207:25] (JSXText) Static JSX text node: `Last updated:`
  - context: `{status.lastAnalyzed ? ( <> Last updated:<br /> {formatDistanceToNow(status.lastAnal`
- [220:66] (JSXText) Static JSX text node: `Active Analytics Systems:`
  - context: `order-border"> <h4 className="font-medium text-foreground mb-3">Active Analytics Systems:</h4> <div className="grid grid-cols-2`
- [224:21] (JSXText) Static JSX text node: `Pattern Analysis`
  - context: `<CheckCircle className="h-4 w-4 text-green-600" /> Pattern Analysis </div> <div className="flex`
- [228:21] (JSXText) Static JSX text node: `Correlation Analysis`
  - context: `<CheckCircle className="h-4 w-4 text-green-600" /> Correlation Analysis </div> <div className="`
- [232:21] (JSXText) Static JSX text node: `Predictive Insights`
  - context: `<CheckCircle className="h-4 w-4 text-green-600" /> Predictive Insights </div> <div className="f`
- [236:21] (JSXText) Static JSX text node: `Anomaly Detection`
  - context: `<CheckCircle className="h-4 w-4 text-green-600" /> Anomaly Detection </div> <div className="fle`
- [240:21] (JSXText) Static JSX text node: `Alert System`
  - context: `<CheckCircle className="h-4 w-4 text-green-600" /> Alert System </div> <div className="flex ite`
- [244:21] (JSXText) Static JSX text node: `Auto-Updates`
  - context: `<CheckCircle className="h-4 w-4 text-green-600" /> Auto-Updates </div> </div> </div`

### src/components/ConfidenceIndicator.tsx

- [104:19] (JSXText) Static JSX text node: `•`
  - context: `<div key={index} className="text-xs text-muted-foreground"> • {explanation} </div> ))} </div>`

### src/components/DataCollectionRoadmap.tsx

- [143:13] (JSXText) Static JSX text node: `Datainnsamlingskart`
  - context: `x items-center gap-2"> <Calendar className="h-5 w-5" /> Datainnsamlingskart </CardTitle> </CardHeader> <CardCo`
- [149:13] (JSXText) Static JSX text node: `Start datainnsamlingen for å se ditt fremgangskart mot høyere sikkerhetsnivåer.`
  - context: `foreground" /> <p className="text-muted-foreground mb-4"> Start datainnsamlingen for å se ditt fremgangskart mot høyere sikkerhetsnivåer.`
- [161:11] (JSXText) Static JSX text node: `Datainnsamlingskart`
  - context: `"flex items-center gap-2"> <Calendar className="h-5 w-5" /> Datainnsamlingskart </CardTitle> <div className="text-sm text-mu`
- [164:11] (JSXText) Static JSX text node: `Fremgang mot høyere sikkerhetsnivå gjennom systematisk datainnsamling`
  - context: `</CardTitle> <div className="text-sm text-muted-foreground"> Fremgang mot høyere sikkerhetsnivå gjennom systematisk datainnsamling </`
- [171:43] (JSXText) Static JSX text node: `Din fremgang`
  - context: `x items-center justify-between mb-2"> <span className="font-medium">Din fremgang</span> <Badge variant="outline"> {milesto`
- [173:59] (JSXText) Static JSX text node: `av`
  - context: `ge variant="outline"> {milestones.filter(m => m.achieved).length} av {milestones.length} milepæler </Badge> </div>`
- [173:82] (JSXText) Static JSX text node: `milepæler`
  - context: `{milestones.filter(m => m.achieved).length} av {milestones.length} milepæler </Badge> </div> <div className="grid g`
- [178:55] (JSXText) Static JSX text node: `Datapunkter:`
  - context: `xt-sm"> <div> <span className="text-muted-foreground">Datapunkter: </span> <span className="font-medium">{currentStatus.`
- [182:55] (JSXText) Static JSX text node: `Dager:`
  - context: `</div> <div> <span className="text-muted-foreground">Dager: </span> <span className="font-medium">{currentStatus.daysSp`
- [196:45] (JSXText) Static JSX text node: `Neste mål:`
  - context: `</div> <div> <h4 className="font-medium">Neste mål: {nextMilestone.title}</h4> <p className="text-sm text`
- [203:23] (JSXText) Static JSX text node: `Fremgang`
  - context: `iv className="flex items-center justify-between text-sm"> <span>Fremgang</span> <span>{Math.round(nextMilestone.progress)}%</spa`
- [209:19] (JSXText) Static JSX text node: `Datapunkter:`
  - context: `2 gap-4 text-xs text-muted-foreground"> <div> Datapunkter: {currentStatus.dataPoints}/{nextMilestone.targetDataPoints}`
- [212:19] (JSXText) Static JSX text node: `Dager:`
  - context: `argetDataPoints} </div> <div> Dager: {currentStatus.daysSpan}/{nextMilestone.targetDays} </div`
- [220:17] (JSXText) Static JSX text node: `Estimert ferdigdato:`
  - context: `"> <Calendar className="h-4 w-4 inline mr-1" /> Estimert ferdigdato: {formatDate(nextMilestone.estimatedDate)} </d`
- [228:39] (JSXText) Static JSX text node: `Komplett veikart`
  - context: `e */} <div className="space-y-4"> <h4 className="font-medium">Komplett veikart</h4> <div className="relative"> {/* Timel`
- [260:56] (JSXText) Static JSX text node: `datapunkter`
  - context: `text-muted-foreground"> <span>{milestone.targetDataPoints} datapunkter</span> <span>{milestone.targetDays} dager</span>`
- [261:50] (JSXText) Static JSX text node: `dager`
  - context: `DataPoints} datapunkter</span> <span>{milestone.targetDays} dager</span> {milestone.estimatedDate && !milestone.achieved`
- [263:29] (JSXText) Static JSX text node: `Estimert:`
  - context: `milestone.estimatedDate && !milestone.achieved && ( <span>Estimert: {formatDate(milestone.estimatedDate)}</span> )}`

### src/components/DataQualityFeedback.tsx

- [213:13] (JSXText) Static JSX text node: `Datakvalitet`
  - context: `items-center gap-2"> <BarChart3 className="h-5 w-5" /> Datakvalitet </CardTitle> </CardHeader> <CardContent c`
- [219:13] (JSXText) Static JSX text node: `Ingen data tilgjengelig for kvalitetsvurdering`
  - context: `uted-foreground" /> <p className="text-muted-foreground"> Ingen data tilgjengelig for kvalitetsvurdering </p> </CardCont`
- [231:11] (JSXText) Static JSX text node: `Datakvalitet`
  - context: `flex items-center gap-2"> <BarChart3 className="h-5 w-5" /> Datakvalitet </CardTitle> <div className="flex items-center gap-`
- [235:61] (JSXText) Static JSX text node: `Samlet score:`
  - context: `tems-center gap-2"> <span className="text-sm text-muted-foreground">Samlet score:</span> <Badge variant={overallScore >= 80 ? 'default'`
- [267:23] (JSXText) Static JSX text node: `•`
  - context: `<p key={index} className="text-xs opacity-90"> • {rec} </p> ))} </div>`
- [278:44] (JSXText) Static JSX text node: `Samlet vurdering`
  - context: `/20 dark:to-blue-950/20 rounded-lg"> <h4 className="font-medium mb-2">Samlet vurdering</h4> <p className="text-sm text-muted-foreground mb-3`
- [289:51] (JSXText) Static JSX text node: `Prioriterte forbedringer:`
  - context: `<div className="space-y-2"> <h5 className="text-sm font-medium">Prioriterte forbedringer:</h5> {qualityMetrics .fi`

### src/components/DataRequirementsCalculator.tsx

- [140:13] (JSXText) Static JSX text node: `Datakrav for sikkerhetsnivå`
  - context: `lex items-center gap-2"> <Target className="h-5 w-5" /> Datakrav for sikkerhetsnivå </CardTitle> </CardHeader>`
- [146:13] (JSXText) Static JSX text node: `Ingen data registrert ennå. Start med å samle data for å se fremgang mot sikkerhetsnivåer.`
  - context: `foreground" /> <p className="text-muted-foreground mb-4"> Ingen data registrert ennå. Start med å samle data for å se fremgang mot sikkerh`
- [149:13] (JSXText) Static JSX text node: `Start datainnsamling`
  - context: `kkerhetsnivåer. </p> <Button variant="outline"> Start datainnsamling </Button> </CardContent> </Card>`
- [161:11] (JSXText) Static JSX text node: `Datakrav for sikkerhetsnivå`
  - context: `e="flex items-center gap-2"> <Target className="h-5 w-5" /> Datakrav for sikkerhetsnivå </CardTitle> <div className="flex it`
- [164:44] (JSXText) Static JSX text node: `datapunkter samlet`
  - context: `ap-4 text-sm text-muted-foreground"> <span>{currentStatus.dataPoints} datapunkter samlet</span> <span>{currentStatus.daysSpan} dager med dat`
- [165:42] (JSXText) Static JSX text node: `dager med data`
  - context: `.dataPoints} datapunkter samlet</span> <span>{currentStatus.daysSpan} dager med data</span> </div> </CardHeader> <CardContent clas`
- [172:40] (JSXText) Static JSX text node: `Nåværende sikkerhetsnivå`
  - context: `bg-muted/50 rounded-lg"> <div> <p className="font-medium">Nåværende sikkerhetsnivå</p> <p className="text-sm text-muted-foregr`
- [181:81] (JSXText) Static JSX text node: `sikkerhet`
  - context: `{currentLevel >= 3 ? 'Høy' : currentLevel >= 1 ? 'Middels' : 'Lav'} sikkerhet </Badge> </div> {/* Progress toward next le`
- [189:43] (JSXText) Static JSX text node: `Fremgang mot`
  - context: `="flex items-center justify-between"> <h4 className="font-medium">Fremgang mot {nextTarget.requirement.description}</h4> <span class`
- [191:50] (JSXText) Static JSX text node: `% fullført`
  - context: `ext-sm text-muted-foreground"> {Math.round(nextTarget.progress)}% fullført </span> </div> <Pr`
- [200:25] (JSXText) Static JSX text node: `Datapunkter`
  - context: `className="flex items-center justify-between text-sm"> <span>Datapunkter</span> <span>{nextTarget.dataPoints.current} / {ne`
- [206:52] (JSXText) Static JSX text node: `flere datapunkter trengs`
  - context: `t-xs text-muted-foreground"> {nextTarget.dataPoints.needed} flere datapunkter trengs </p> )}`
- [213:25] (JSXText) Static JSX text node: `Tidsperiode`
  - context: `className="flex items-center justify-between text-sm"> <span>Tidsperiode</span> <span>{nextTarget.days.current} / {nextTarg`
- [214:86] (JSXText) Static JSX text node: `dager`
  - context: `<span>{nextTarget.days.current} / {nextTarget.requirement.minDays} dager</span> </div> <Progress value={nextTarget.`
- [219:46] (JSXText) Static JSX text node: `flere dager trengs`
  - context: `e="text-xs text-muted-foreground"> {nextTarget.days.needed} flere dager trengs </p> )} </div`
- [229:80] (JSXText) Static JSX text node: `Tidsestimat`
  - context: `<span className="font-medium text-blue-900 dark:text-blue-100">Tidsestimat</span> </div> <p className="text-sm text`
- [232:17] (JSXText) Static JSX text node: `Med`
  - context: `<p className="text-sm text-blue-800 dark:text-blue-200"> Med {getRecommendedRate()} datapunkt(er) per dag vil du nå{' '}`
- [232:44] (JSXText) Static JSX text node: `datapunkt(er) per dag vil du nå`
  - context: `m text-blue-800 dark:text-blue-200"> Med {getRecommendedRate()} datapunkt(er) per dag vil du nå{' '} <span className="font-mediu`
- [233:91] (JSXText) Static JSX text node: `innen`
  - context: `<span className="font-medium">{nextTarget.requirement.description}</span> innen{' '} <span className="font-medium">{formatDate(nextTarget.`
- [243:39] (JSXText) Static JSX text node: `Alle sikkerhetsnivåer`
  - context: `w */} <div className="space-y-3"> <h4 className="font-medium">Alle sikkerhetsnivåer</h4> {progressCalculations.map((calc) => (`
- [261:54] (JSXText) Static JSX text node: `datapunkter over`
  - context: `xs text-muted-foreground"> {calc.requirement.minDataPoints} datapunkter over {calc.requirement.minDays} dager </p>`
- [261:98] (JSXText) Static JSX text node: `dager`
  - context: `{calc.requirement.minDataPoints} datapunkter over {calc.requirement.minDays} dager </p> </div> </div>`
- [271:42] (JSXText) Static JSX text node: `dager igjen`
  - context: `="text-xs text-muted-foreground mt-1"> ~{calc.daysToTarget} dager igjen </p> )} </div>`
- [284:82] (JSXText) Static JSX text node: `Anbefalinger`
  - context: `<span className="font-medium text-purple-900 dark:text-purple-100">Anbefalinger</span> </div> <ul className="text-sm text-p`
- [287:19] (JSXText) Static JSX text node: `• Samle`
  - context: `ame="text-sm text-purple-800 dark:text-purple-200 space-y-1"> <li>• Samle {getRecommendedRate()} datapunkt(er) per dag for optimal fremgang</li>`
- [287:50] (JSXText) Static JSX text node: `datapunkt(er) per dag for optimal fremgang`
  - context: `rk:text-purple-200 space-y-1"> <li>• Samle {getRecommendedRate()} datapunkt(er) per dag for optimal fremgang</li> <li>• Registrer da`
- [288:19] (JSXText) Static JSX text node: `• Registrer data konsekvent for bedre mønstergjenkjenning`
  - context: `mendedRate()} datapunkt(er) per dag for optimal fremgang</li> <li>• Registrer data konsekvent for bedre mønstergjenkjenning</li> <li`
- [289:19] (JSXText) Static JSX text node: `• Inkluder både følelser og sensoriske opplevelser i hver økt`
  - context: `Registrer data konsekvent for bedre mønstergjenkjenning</li> <li>• Inkluder både følelser og sensoriske opplevelser i hver økt</li>`
- [290:19] (JSXText) Static JSX text node: `• Noter miljøfaktorer for å identifisere sammenhenger`
  - context: `luder både følelser og sensoriske opplevelser i hver økt</li> <li>• Noter miljøfaktorer for å identifisere sammenhenger</li> </ul>`

### src/components/DateRangeSelector.tsx

- [122:36] (JSXAttribute) Static placeholder attribute: `Quick select`
  - context: `lassName="w-[160px] bg-input border-border"> <SelectValue placeholder="Quick select" /> </SelectTrigger> <SelectContent> {pr`
- [154:21] (JSXText) Static JSX text node: `Pick a date range`
  - context: `eRange.from, "LLL dd, y") ) ) : ( <span>Pick a date range</span> )} <ChevronDown className="ml-a`
- [174:44] (JSXText) Static JSX text node: `Selected:`
  - context: `ame="text-sm text-muted-foreground"> <span className="hidden md:inline">Selected: </span> <span className="font-medium text-foreground">{selecte`

### src/components/DetailedConfidenceExplanation.tsx

- [208:17] (JSXText) Static JSX text node: `R² =`
  - context: `> <div className="text-xs text-muted-foreground"> R² = {rSquared.toFixed(3)} </div> </div> </d`

### src/components/EmotionTracker.tsx

- [131:70] (JSXText) Static JSX text node: `Specific Feeling (Optional)`
  - context: `<div> <h3 className="text-sm font-medium text-foreground mb-3">Specific Feeling (Optional)</h3> <div className="flex flex-wrap gap-`
- [187:70] (JSXText) Static JSX text node: `Duration (minutes)`
  - context: `<div> <h3 className="text-sm font-medium text-foreground mb-3">Duration (minutes)</h3> <div className="flex gap-2"> <`
- [205:29] (JSXAttribute) Static placeholder attribute: `How long did it last?`
  - context: `999 minutes } }} placeholder="How long did it last?" className="w-32 px-3 py-2 border border-`
- [209:28] (JSXAttribute) Static aria-label attribute: `Duration in minutes`
  - context: `t" min="0" max="999" aria-label="Duration in minutes" aria-describedby="duration-help"`
- [210:34] (JSXAttribute) Static aria-describedby attribute: `duration-help`
  - context: `aria-label="Duration in minutes" aria-describedby="duration-help" /> <div className="flex gap-1">`
- [232:70] (JSXText) Static JSX text node: `How did it develop?`
  - context: `<div> <h3 className="text-sm font-medium text-foreground mb-3">How did it develop?</h3> <div className="flex gap-2">`
- [240:17] (JSXText) Static JSX text node: `Sudden`
  - context: `en')} className="font-dyslexia" > Sudden </Button> <Button variant={es`
- [248:17] (JSXText) Static JSX text node: `Gradual`
  - context: `al')} className="font-dyslexia" > Gradual </Button> <Button variant={e`
- [256:17] (JSXText) Static JSX text node: `Unknown`
  - context: `wn')} className="font-dyslexia" > Unknown </Button> </div> </div> )}`
- [264:68] (JSXText) Static JSX text node: `Utløsere (Valgfritt)`
  - context: `<div> <h3 className="text-sm font-medium text-foreground mb-3">Utløsere (Valgfritt)</h3> <div className="flex gap-2 mb-2">`
- [271:27] (JSXAttribute) Static placeholder attribute: `Legg til en utløser...`
  - context: `ress={(e) => e.key === 'Enter' && handleAddTrigger()} placeholder="Legg til en utløser..." className="flex-1 px-3 py-2 border border`
- [286:27] (JSXText) Static JSX text node: `×`
  - context: `={() => handleRemoveTrigger(trigger)} > {trigger} × </Badge> ))} </div> </div>`
- [298:25] (JSXAttribute) Static placeholder attribute: `Ytterligere observasjoner...`
  - context: `onChange={(e) => setNotes(e.target.value)} placeholder="Ytterligere observasjoner..." className="font-dyslexia bg-input bor`

### src/components/EnvironmentalTracker.tsx

- [51:19] (MessageAPI) Message API call: error(): `Please fill out all required fields (lighting, activity, weather, time of day).`
  - context: `(!lighting || !classroomActivity || !weather || !timeOfDay) { toast.error('Please fill out all required fields (lighting, activity, weather, time of day).`
- [100:80] (JSXText) Static JSX text node: `°C`
  - context: `{String(tTracking('environmental.temperature'))}: {roomTemperature}°C </Label> <Slider value={[roomTemperature]}`
- [111:19] (JSXText) Static JSX text node: `15°C`
  - context: `assName="flex justify-between text-xs text-muted-foreground"> <span>15°C</span> <span>30°C</span> </div> </div>`
- [112:19] (JSXText) Static JSX text node: `30°C`
  - context: `text-xs text-muted-foreground"> <span>15°C</span> <span>30°C</span> </div> </div> {/* Lighting */} <d`

### src/components/ErrorBoundary.tsx

- [95:18] (MessageAPI) Message API call: error(): `[ErrorBoundary] Component error caught`
  - context: `ronment configuration and doesn't log to console in production logger.error('[ErrorBoundary] Component error caught', { error: { message: erro`
- [129:21] (MessageAPI) Message API call: error(): `An unexpected error occurred`
  - context: `ble; also emit a dev-only minimal toast payload try { toast.error('An unexpected error occurred', { description: import.meta.env.DEV &&`
- [129:21] (MessageAPI) sonner toast.error(): `An unexpected error occurred`
  - context: `ble; also emit a dev-only minimal toast payload try { toast.error('An unexpected error occurred', { description: import.meta.env.DEV &&`
- [159:13] (MessageAPI) Message API call: toast(): `Page automatically refreshed after multiple errors`
  - context: `this.resetTimeoutId = setTimeout(() => { this.handleRetry(); toast('Page automatically refreshed after multiple errors'); }, 5000); }; /**`
- [159:13] (MessageAPI) sonner toast(): `Page automatically refreshed after multiple errors`
  - context: `this.resetTimeoutId = setTimeout(() => { this.handleRetry(); toast('Page automatically refreshed after multiple errors'); }, 5000); }; /**`
- [204:21] (MessageAPI) Message API call: success(): `App data cleared`
  - context: `ch { // Ignore removal errors } }); toast.success('App data cleared'); } catch (e) { // best-effort only logger.wa`
- [204:21] (MessageAPI) sonner toast.success(): `App data cleared`
  - context: `ch { // Ignore removal errors } }); toast.success('App data cleared'); } catch (e) { // best-effort only logger.wa`
- [231:119] (JSXAttribute) Static aria-labelledby attribute: `error-title`
  - context: `g-background flex items-center justify-center p-4" role="alert" aria-labelledby="error-title" aria-describedby="error-description"> <Card className="m`
- [231:150] (JSXAttribute) Static aria-describedby attribute: `error-description`
  - context: `justify-center p-4" role="alert" aria-labelledby="error-title" aria-describedby="error-description"> <Card className="max-w-lg w-full"> <C`
- [236:17] (JSXText) Static JSX text node: `Something went wrong`
  - context: `<AlertTriangle className="h-5 w-5" aria-hidden="true" /> Something went wrong </CardTitle> </CardHeader>`
- [241:17] (JSXText) Static JSX text node: `An unexpected error occurred. The application may not be working correctly.`
  - context: `="error-description" className="text-sm text-muted-foreground"> An unexpected error occurred. The application may not be working correctly.`
- [250:67] (JSXText) Static JSX text node: `Error Details`
  - context: `me="text-xs"> <summary className="cursor-pointer font-medium">Error Details</summary> <pre className="mt-2 p-2 bg-muted roun`
- [271:30] (JSXAttribute) Static aria-label attribute: `Try again - attempt to recover from the error`
  - context: `.handleRetry} variant="default" aria-label="Try again - attempt to recover from the error" >`
- [274:19] (JSXText) Static JSX text node: `Try Again`
  - context: `<RefreshCw className="h-4 w-4 mr-2" aria-hidden="true" /> Try Again </Button> <Button o`
- [279:30] (JSXAttribute) Static aria-label attribute: `Reload page - refresh the entire application`
  - context: `handleReload} variant="outline" aria-label="Reload page - refresh the entire application" >`
- [282:19] (JSXText) Static JSX text node: `Reload Page`
  - context: `<RefreshCw className="h-4 w-4 mr-2" aria-hidden="true" /> Reload Page </Button> <Button`
- [287:25] (JSXAttribute) Static title attribute: `Clear App Data removes only Sensory Compass app data (keys starting with sensoryTracker_ and keys containing sensory-compass-analytics)`
  - context: `handleClearAppData} variant="outline" title="Clear App Data removes only Sensory Compass app data (keys starting with sensor`
- [288:30] (JSXAttribute) Static aria-label attribute: `Clear app data - removes only Sensory Compass data from browser storage`
  - context: `r_ and keys containing sensory-compass-analytics)" aria-label="Clear app data - removes only Sensory Compass data from browser storage"`
- [290:19] (JSXText) Static JSX text node: `Clear App Data`
  - context: `Sensory Compass data from browser storage" > Clear App Data </Button> <Button`
- [295:30] (JSXAttribute) Static aria-label attribute: `Go home - navigate to the application home page`
  - context: `handleGoHome} variant="outline" aria-label="Go home - navigate to the application home page" >`
- [298:19] (JSXText) Static JSX text node: `Go Home`
  - context: `<Home className="h-4 w-4 mr-2" aria-hidden="true" /> Go Home </Button> </div>`
- [304:19] (JSXText) Static JSX text node: `Auto-refreshing in 5 seconds...`
  - context: `<p className="text-xs text-muted-foreground"> Auto-refreshing in 5 seconds... </p> )}`

### src/components/ErrorWrapper.tsx

- [16:15] (JSXText) Static JSX text node: `Something went wrong loading this component`
  - context: `text-destructive"> <AlertTriangle className="h-5 w-5" /> <span>Something went wrong loading this component</span> </div> </CardConten`

### src/components/GoalManager.tsx

- [97:19] (MessageAPI) Message API call: error(): `Please fill in all required fields`
  - context: `.description.trim() || !newGoal.measurableObjective.trim()) { toast.error("Please fill in all required fields"); return; } // Validate targ`
- [97:19] (MessageAPI) sonner toast.error(): `Please fill in all required fields`
  - context: `.description.trim() || !newGoal.measurableObjective.trim()) { toast.error("Please fill in all required fields"); return; } // Validate targ`
- [103:19] (MessageAPI) Message API call: error(): `Please select a target date`
  - context: `} // Validate target date if (!newGoal.targetDate) { toast.error("Please select a target date"); return; } const targetDate = new`
- [103:19] (MessageAPI) sonner toast.error(): `Please select a target date`
  - context: `} // Validate target date if (!newGoal.targetDate) { toast.error("Please select a target date"); return; } const targetDate = new`
- [109:19] (MessageAPI) Message API call: error(): `Invalid target date`
  - context: `e(newGoal.targetDate); if (isNaN(targetDate.getTime())) { toast.error("Invalid target date"); return; } // Ensure target date is in the`
- [109:19] (MessageAPI) sonner toast.error(): `Invalid target date`
  - context: `e(newGoal.targetDate); if (isNaN(targetDate.getTime())) { toast.error("Invalid target date"); return; } // Ensure target date is in the`
- [117:19] (MessageAPI) Message API call: error(): `Target date must be in the future`
  - context: `today.setHours(0, 0, 0, 0); if (targetDate < today) { toast.error("Target date must be in the future"); return; } // Validate basel`
- [117:19] (MessageAPI) sonner toast.error(): `Target date must be in the future`
  - context: `today.setHours(0, 0, 0, 0); if (targetDate < today) { toast.error("Target date must be in the future"); return; } // Validate basel`
- [123:19] (MessageAPI) Message API call: error(): `Target value must be greater than baseline value`
  - context: `alues if (newGoal.targetValue <= newGoal.baselineValue) { toast.error("Target value must be greater than baseline value"); return; } co`
- [123:19] (MessageAPI) sonner toast.error(): `Target value must be greater than baseline value`
  - context: `alues if (newGoal.targetValue <= newGoal.baselineValue) { toast.error("Target value must be greater than baseline value"); return; } co`
- [155:19] (MessageAPI) Message API call: success(): `Goal created successfully!`
  - context: `loadGoals(); resetForm(); setShowCreateDialog(false); toast.success("Goal created successfully!"); onGoalUpdate?.(); }; const updateGoal =`
- [155:19] (MessageAPI) sonner toast.success(): `Goal created successfully!`
  - context: `loadGoals(); resetForm(); setShowCreateDialog(false); toast.success("Goal created successfully!"); onGoalUpdate?.(); }; const updateGoal =`
- [189:19] (MessageAPI) Message API call: success(): `Progress updated!`
  - context: `urrentProgress: Math.max(0, Math.min(100, progress)) }); toast.success("Progress updated!"); }; const addMilestone = (goalId: string, title: strin`
- [189:19] (MessageAPI) sonner toast.success(): `Progress updated!`
  - context: `urrentProgress: Math.max(0, Math.min(100, progress)) }); toast.success("Progress updated!"); }; const addMilestone = (goalId: string, title: strin`
- [208:19] (MessageAPI) Message API call: success(): `Milestone added!`
  - context: `milestones: [...goal.milestones, newMilestone] }); toast.success("Milestone added!"); }; const completeMilestone = (goalId: string, mileston`
- [208:19] (MessageAPI) sonner toast.success(): `Milestone added!`
  - context: `milestones: [...goal.milestones, newMilestone] }); toast.success("Milestone added!"); }; const completeMilestone = (goalId: string, mileston`
- [222:19] (MessageAPI) Message API call: success(): `Milestone completed! 🎉`
  - context: `; updateGoal(goalId, { milestones: updatedMilestones }); toast.success("Milestone completed! 🎉"); }; /** * Delete a goal with proper confirmat`
- [222:19] (MessageAPI) sonner toast.success(): `Milestone completed! 🎉`
  - context: `; updateGoal(goalId, { milestones: updatedMilestones }); toast.success("Milestone completed! 🎉"); }; /** * Delete a goal with proper confirmat`
- [244:23] (MessageAPI) Message API call: success(): `Goal deleted`
  - context: `dataStorage.saveGoal(updatedGoal); loadGoals(); toast.success("Goal deleted"); onGoalUpdate?.(); } } catch (error) { l`
- [244:23] (MessageAPI) sonner toast.success(): `Goal deleted`
  - context: `dataStorage.saveGoal(updatedGoal); loadGoals(); toast.success("Goal deleted"); onGoalUpdate?.(); } } catch (error) { l`
- [248:20] (MessageAPI) Message API call: error(): `Failed to delete goal`
  - context: `d"); onGoalUpdate?.(); } } catch (error) { logger.error('Failed to delete goal', error); toast.error('Failed to delete goal. Pleas`
- [249:19] (MessageAPI) Message API call: error(): `Failed to delete goal. Please try again.`
  - context: `(error) { logger.error('Failed to delete goal', error); toast.error('Failed to delete goal. Please try again.'); } }; const resetForm = ()`
- [249:19] (MessageAPI) sonner toast.error(): `Failed to delete goal. Please try again.`
  - context: `(error) { logger.error('Failed to delete goal', error); toast.error('Failed to delete goal. Please try again.'); } }; const resetForm = ()`
- [292:62] (JSXText) Static JSX text node: `IEP Goals`
  - context: `en"> <div> <h2 className="text-2xl font-bold text-foreground">IEP Goals</h2> <p className="text-muted-foreground">Track and monitor`
- [293:48] (JSXText) Static JSX text node: `Track and monitor`
  - context: `text-foreground">IEP Goals</h2> <p className="text-muted-foreground">Track and monitor {student.name}'s progress toward educational objectives</p>`
- [293:80] (JSXText) Static JSX text node: `'s progress toward educational objectives`
  - context: `<p className="text-muted-foreground">Track and monitor {student.name}'s progress toward educational objectives</p> </div> <Dialog ope`
- [299:15] (JSXText) Static JSX text node: `New Goal`
  - context: `0 font-dyslexia"> <Plus className="h-4 w-4 mr-2" /> New Goal </Button> </DialogTrigger> <DialogConte`
- [304:28] (JSXText) Static JSX text node: `Create New IEP Goal`
  - context: `nt className="max-w-2xl"> <DialogHeader> <DialogTitle>Create New IEP Goal</DialogTitle> </DialogHeader> <div c`
- [308:40] (JSXText) Static JSX text node: `Goal Title *`
  - context: `assName="space-y-4"> <div> <Label htmlFor="title">Goal Title *</Label> <Input id="title"`
- [313:31] (JSXAttribute) Static placeholder attribute: `e.g., Improve emotional regulation during transitions`
  - context: `al(prev => ({ ...prev, title: e.target.value }))} placeholder="e.g., Improve emotional regulation during transitions" />`
- [317:43] (JSXText) Static JSX text node: `Category`
  - context: `</div> <div> <Label htmlFor="category">Category</Label> <Select value={newGoal.category} onValueChange=`
- [323:52] (JSXText) Static JSX text node: `Behavioral`
  - context: `<SelectContent> <SelectItem value="behavioral">Behavioral</SelectItem> <SelectItem value="academic">Academi`
- [324:50] (JSXText) Static JSX text node: `Academic`
  - context: `ioral">Behavioral</SelectItem> <SelectItem value="academic">Academic</SelectItem> <SelectItem value="social">Social</Sel`
- [325:48] (JSXText) Static JSX text node: `Social`
  - context: `"academic">Academic</SelectItem> <SelectItem value="social">Social</SelectItem> <SelectItem value="sensory">Sensory</Sel`
- [326:49] (JSXText) Static JSX text node: `Sensory`
  - context: `ue="social">Social</SelectItem> <SelectItem value="sensory">Sensory</SelectItem> <SelectItem value="communication">Commu`
- [327:55] (JSXText) Static JSX text node: `Communication`
  - context: `ory">Sensory</SelectItem> <SelectItem value="communication">Communication</SelectItem> </SelectContent> </`
- [332:46] (JSXText) Static JSX text node: `Description *`
  - context: `</div> <div> <Label htmlFor="description">Description *</Label> <Textarea id="descriptio`
- [337:31] (JSXAttribute) Static placeholder attribute: `Detailed description of what the student will achieve...`
  - context: `v => ({ ...prev, description: e.target.value }))} placeholder="Detailed description of what the student will achieve..." />`
- [341:45] (JSXText) Static JSX text node: `Measurable Objective *`
  - context: `</div> <div> <Label htmlFor="measurable">Measurable Objective *</Label> <Textarea id="m`
- [346:31] (JSXAttribute) Static placeholder attribute: `How will progress be measured? Include specific criteria...`
  - context: `...prev, measurableObjective: e.target.value }))} placeholder="How will progress be measured? Include specific criteria..." />`
- [351:45] (JSXText) Static JSX text node: `Baseline Value`
  - context: `ols-2 gap-4"> <div> <Label htmlFor="baseline">Baseline Value</Label> <Input id="baseline`
- [360:43] (JSXText) Static JSX text node: `Target Value`
  - context: `</div> <div> <Label htmlFor="target">Target Value</Label> <Input id="target"`
- [370:45] (JSXText) Static JSX text node: `Target Date`
  - context: `</div> <div> <Label htmlFor="targetDate">Target Date</Label> <Input id="targetDate"`
- [380:19] (JSXText) Static JSX text node: `Cancel`
  - context: `onClick={() => { resetForm(); setShowCreateDialog(false); }}> Cancel </Button> <Button onClick={createGoal}>Cr`
- [382:46] (JSXText) Static JSX text node: `Create Goal`
  - context: `Cancel </Button> <Button onClick={createGoal}>Create Goal</Button> </div> </div> </DialogC`
- [394:72] (JSXText) Static JSX text node: `No IEP Goals Yet`
  - context: `mb-4" /> <h3 className="text-xl font-semibold text-foreground mb-2">No IEP Goals Yet</h3> <p className="text-muted-foreground text-cente`
- [396:15] (JSXText) Static JSX text node: `Start by creating your first IEP goal to track`
  - context: `<p className="text-muted-foreground text-center mb-6 max-w-md"> Start by creating your first IEP goal to track {student.name}'s educational prog`
- [396:76] (JSXText) Static JSX text node: `'s educational progress.`
  - context: `md"> Start by creating your first IEP goal to track {student.name}'s educational progress. </p> <Button onClick={() => set`
- [400:15] (JSXText) Static JSX text node: `Create First Goal`
  - context: `0 font-dyslexia"> <Plus className="h-4 w-4 mr-2" /> Create First Goal </Button> </CardContent> </Card>`
- [439:59] (JSXText) Static JSX text node: `Progress`
  - context: `ustify-between mb-2"> <span className="text-sm font-medium">Progress</span> <span className="text-sm text-muted-foregrou`
- [447:52] (JSXText) Static JSX text node: `Measurable Objective`
  - context: `<div className="mb-4"> <h4 className="font-medium mb-2">Measurable Objective</h4> <p className="text-sm text-muted-for`
- [457:27] (JSXText) Static JSX text node: `Created:`
  - context: `ndarIcon className="h-4 w-4 text-muted-foreground" /> <span>Created: {format(goal.createdDate, 'MMM dd, yyyy')}</span> </d`
- [461:27] (JSXText) Static JSX text node: `Target:`
  - context: `rosshair className="h-4 w-4 text-muted-foreground" /> <span>Target: {format(goal.targetDate, 'MMM dd, yyyy')}</span> </div`
- [468:49] (JSXText) Static JSX text node: `Milestones`
  - context: `s-center justify-between mb-2"> <h4 className="font-medium">Milestones</h4> <Button variant="outl`
- [473:46] (MessageAPI) Message API call: prompt(): `Milestone title:`
  - context: `onClick={() => { const title = prompt("Milestone title:"); const description = prompt("Milesto`
- [474:52] (MessageAPI) Message API call: prompt(): `Milestone description:`
  - context: `prompt("Milestone title:"); const description = prompt("Milestone description:"); const dateStr = prompt("Targe`
- [475:48] (MessageAPI) Message API call: prompt(): `Target date (YYYY-MM-DD):`
  - context: `rompt("Milestone description:"); const dateStr = prompt("Target date (YYYY-MM-DD):"); if (title && description &`
- [482:23] (JSXText) Static JSX text node: `Add`
  - context: `> <Plus className="h-3 w-3 mr-1" /> Add </Button> </div> {go`
- [486:66] (JSXText) Static JSX text node: `No milestones yet`
  - context: `ngth === 0 ? ( <p className="text-sm text-muted-foreground">No milestones yet</p> ) : ( <div className`
- [520:44] (MessageAPI) Message API call: prompt(): `Enter current progress value:`
  - context: `onClick={() => { const value = prompt("Enter current progress value:"); const notes = prompt("Pr`
- [521:44] (MessageAPI) Message API call: prompt(): `Progress notes (optional):`
  - context: `pt("Enter current progress value:"); const notes = prompt("Progress notes (optional):"); if (value) {`
- [528:21] (JSXText) Static JSX text node: `Update Progress`
  - context: `<TrendingUp className="h-4 w-4 mr-1" /> Update Progress </Button> </div>`

### src/components/HelpAndSupport.tsx

- [17:11] (JSXText) Static JSX text node: `Hjelp & Støtte`
  - context: `lassName="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" /> Hjelp & Støtte </Button> </DialogTrigger> <DialogContent>`
- [22:24] (JSXText) Static JSX text node: `Help & Support`
  - context: `logTrigger> <DialogContent> <DialogHeader> <DialogTitle>Help & Support</DialogTitle> </DialogHeader> <div> <p>`
- [25:14] (JSXText) Static JSX text node: `If you need help or support, please contact us at:`
  - context: `Help & Support</DialogTitle> </DialogHeader> <div> <p>If you need help or support, please contact us at:</p> <a href="mailto`
- [27:13] (JSXText) Static JSX text node: `support@example.com`
  - context: `<a href="mailto:support@example.com" className="text-primary"> support@example.com </a> </div> </DialogContent> </D`

### src/components/InteractiveDataVisualization.tsx

- [175:20] (MessageAPI) Message API call: error(): `Export failed`
  - context: `oUpperCase()} exported successfully\`); } catch (error) { logger.error('Export failed', { error }); toast.error('Failed to export interactive ana`
- [176:19] (MessageAPI) Message API call: error(): `Failed to export interactive analytics data`
  - context: `tch (error) { logger.error('Export failed', { error }); toast.error('Failed to export interactive analytics data'); } finally { setIsExpor`
- [176:19] (MessageAPI) sonner toast.error(): `Failed to export interactive analytics data`
  - context: `tch (error) { logger.error('Export failed', { error }); toast.error('Failed to export interactive analytics data'); } finally { setIsExpor`

### src/components/MockDataLoader.tsx

- [74:21] (MessageAPI) Message API call: success(): `Mock data loaded successfully!`
  - context: `olve, 300); }); setLoadingProgress(100); toast.success('Mock data loaded successfully!', { description: \`Loaded ${result.studen`
- [74:21] (MessageAPI) sonner toast.success(): `Mock data loaded successfully!`
  - context: `olve, 300); }); setLoadingProgress(100); toast.success('Mock data loaded successfully!', { description: \`Loaded ${result.studen`
- [87:19] (MessageAPI) Message API call: error(): `Failed to load mock data`
  - context: `{ clearInterval(progressIntervalRef.current); } toast.error('Failed to load mock data', { description: error instanceof Error ? erro`
- [87:19] (MessageAPI) sonner toast.error(): `Failed to load mock data`
  - context: `{ clearInterval(progressIntervalRef.current); } toast.error('Failed to load mock data', { description: error instanceof Error ? erro`
- [105:21] (MessageAPI) Message API call: success(): `Mock data cleared successfully!`
  - context: `clearMockData function await clearMockData(); toast.success('Mock data cleared successfully!'); // Dispatch a custom event to f`
- [105:21] (MessageAPI) sonner toast.success(): `Mock data cleared successfully!`
  - context: `clearMockData function await clearMockData(); toast.success('Mock data cleared successfully!'); // Dispatch a custom event to f`
- [111:19] (MessageAPI) Message API call: error(): `Failed to clear mock data`
  - context: `CustomEvent('mockDataLoaded')); } catch (error) { toast.error('Failed to clear mock data', { description: error instanceof Error ? err`
- [111:19] (MessageAPI) sonner toast.error(): `Failed to clear mock data`
  - context: `CustomEvent('mockDataLoaded')); } catch (error) { toast.error('Failed to clear mock data', { description: error instanceof Error ? err`
- [129:11] (JSXText) Static JSX text node: `Mock Data for Testing`
  - context: `enter gap-2"> <Database className="h-5 w-5 text-primary" /> Mock Data for Testing </CardTitle> </CardHeader> <CardConten`
- [134:11] (JSXText) Static JSX text node: `Load realistic test data to explore pattern analysis and correlation features.
          Mock data includes 3 students with 3-6 months of tracking data each.`
  - context: `="space-y-4"> <div className="text-sm text-muted-foreground"> Load realistic test data to explore pattern analysis and correlation features.`
- [141:48] (JSXText) Static JSX text node: `Students to be created:`
  - context: `<div className="space-y-2"> <div className="text-sm font-medium">Students to be created:</div> <div className="space-y-1">`
- [155:50] (JSXText) Static JSX text node: `Current Data:`
  - context: `uted/50 rounded-lg space-y-1"> <div className="text-sm font-medium">Current Data:</div> <div className="text-xs text-muted-foreground sp`
- [157:20] (JSXText) Static JSX text node: `•`
  - context: `<div className="text-xs text-muted-foreground space-y-1"> <div>• {currentStats.studentsCount} students</div> <div>• {currentStats`
- [157:51] (JSXText) Static JSX text node: `students`
  - context: `-muted-foreground space-y-1"> <div>• {currentStats.studentsCount} students</div> <div>• {currentStats.entriesCount} tracking entries`
- [158:20] (JSXText) Static JSX text node: `•`
  - context: `<div>• {currentStats.studentsCount} students</div> <div>• {currentStats.entriesCount} tracking entries</div> {hasMockData`
- [158:50] (JSXText) Static JSX text node: `tracking entries`
  - context: `.studentsCount} students</div> <div>• {currentStats.entriesCount} tracking entries</div> {hasMockData && <div className="text-orange`
- [159:64] (JSXText) Static JSX text node: `• Contains mock data`
  - context: `ng entries</div> {hasMockData && <div className="text-orange-600">• Contains mock data</div>} </div> </div> )}`
- [167:60] (JSXText) Static JSX text node: `Loading mock data...`
  - context: `assName="space-y-2"> <div className="text-sm text-muted-foreground">Loading mock data...</div> <Progress value={loadingProgress} classNa`
- [180:13] (JSXText) Static JSX text node: `Load Mock Data`
  - context: `Data} > <Database className="h-4 w-4 mr-2" /> Load Mock Data </Button> {hasMockData && ( <Ale`
- [192:19] (JSXText) Static JSX text node: `Clear All`
  - context: `> <Trash2 className="h-4 w-4 mr-2" /> Clear All </Button> </AlertDialogTrigger>`
- [197:37] (JSXText) Static JSX text node: `Clear All Data?`
  - context: `ontent> <AlertDialogHeader> <AlertDialogTitle>Clear All Data?</AlertDialogTitle> <AlertDialogDescription>`
- [199:21] (JSXText) Static JSX text node: `This will permanently delete all student data and tracking entries. 
                    This action cannot be undone.`
  - context: `lertDialogTitle> <AlertDialogDescription> This will permanently delete all student data and tracking entries.`
- [204:38] (JSXText) Static JSX text node: `Cancel`
  - context: `eader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction onClick={handleC`
- [207:21] (JSXText) Static JSX text node: `Clear All Data`
  - context: `e"> <Trash2 className="h-4 w-4 mr-2" /> Clear All Data </AlertDialogAction> </AlertDia`
- [217:53] (JSXText) Static JSX text node: `Features you can test:`
  - context: `-3 border-t border-border"> <div className="text-sm font-medium mb-2">Features you can test:</div> <div className="text-xs text-muted-foregr`
- [219:18] (JSXText) Static JSX text node: `• Emotion pattern recognition`
  - context: `<div className="text-xs text-muted-foreground space-y-1"> <div>• Emotion pattern recognition</div> <div>• Sensory input correlation`
- [220:18] (JSXText) Static JSX text node: `• Sensory input correlations`
  - context: `ace-y-1"> <div>• Emotion pattern recognition</div> <div>• Sensory input correlations</div> <div>• Environmental factor analy`
- [221:18] (JSXText) Static JSX text node: `• Environmental factor analysis`
  - context: `tion</div> <div>• Sensory input correlations</div> <div>• Environmental factor analysis</div> <div>• Predictive insights & t`
- [222:18] (JSXText) Static JSX text node: `• Predictive insights & trends`
  - context: `s</div> <div>• Environmental factor analysis</div> <div>• Predictive insights & trends</div> <div>• Interactive data visuali`
- [223:18] (JSXText) Static JSX text node: `• Interactive data visualization`
  - context: `is</div> <div>• Predictive insights & trends</div> <div>• Interactive data visualization</div> <div>• Alert system & anomaly`
- [224:18] (JSXText) Static JSX text node: `• Alert system & anomaly detection`
  - context: `</div> <div>• Interactive data visualization</div> <div>• Alert system & anomaly detection</div> </div> </div> <`

### src/components/PaginatedSessionsList.tsx

- [60:14] (JSXText) Static JSX text node: `No sessions available in the selected period.`
  - context: `<CardContent className="py-16 text-center text-muted-foreground"> <p>No sessions available in the selected period.</p> </CardContent> <`
- [72:19] (JSXText) Static JSX text node: `Showing`
  - context: `Name="flex items-center gap-2 text-sm text-muted-foreground"> <span>Showing {startIndex}-{endIndex} of {totalItems}</span> <Select`
- [72:51] (JSXText) Static JSX text node: `of`
  - context: `xt-sm text-muted-foreground"> <span>Showing {startIndex}-{endIndex} of {totalItems}</span> <Select value={pageSize.toStrin`
- [93:13] (JSXText) Static JSX text node: `Loading sessions...`
  - context: `( <div className="text-center p-8 text-muted-foreground"> Loading sessions... </div> ) : ( <div> {`
- [103:62] (JSXText) Static JSX text node: `at`
  - context: `text-foreground"> {entry.timestamp.toLocaleDateString()} at {entry.timestamp.toLocaleTimeString()} </span>`
- [107:49] (JSXText) Static JSX text node: `emotions`
  - context: `="outline" className="text-xs"> {entry.emotions.length} emotions </Badge> <Badge variant="ou`
- [110:54] (JSXText) Static JSX text node: `sensory`
  - context: `line" className="text-xs"> {entry.sensoryInputs.length} sensory </Badge> {entry.environmenta`
- [114:27] (JSXText) Static JSX text node: `Environmental data`
  - context: `<Badge variant="outline" className="text-xs"> Environmental data </Badge> )}`
- [133:56] (JSXText) Static JSX text node: `more`
  - context: `ne" className="text-xs"> +{entry.emotions.length - 3} more </Badge> )}`
- [146:19] (JSXText) Static JSX text node: `Page`
  - context: `<div className="text-sm text-muted-foreground"> Page {currentPage} of {totalPages} </div>`
- [146:38] (JSXText) Static JSX text node: `of`
  - context: `className="text-sm text-muted-foreground"> Page {currentPage} of {totalPages} </div> <div cla`

### src/components/PatternDetectionEmptyState.tsx

- [86:47] (JSXText) Static JSX text node: `Krav for mønstergjenkjenning:`
  - context: `<div className="space-y-3"> <h4 className="text-sm font-medium">Krav for mønstergjenkjenning:</h4> {requirements.map((req, index) => (`
- [103:13] (JSXText) Static JSX text node: `Tips for bedre mønstergjenkjenning:`
  - context: `ssName="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2"> Tips for bedre mønstergjenkjenning: </h4> <ul className="tex`
- [106:17] (JSXText) Static JSX text node: `• Registrer data på samme tid hver dag`
  - context: `className="text-sm text-blue-800 dark:text-blue-200 space-y-1"> <li>• Registrer data på samme tid hver dag</li> <li>• Inkluder både føle`
- [107:17] (JSXText) Static JSX text node: `• Inkluder både følelser og sensoriske opplevelser`
  - context: `1"> <li>• Registrer data på samme tid hver dag</li> <li>• Inkluder både følelser og sensoriske opplevelser</li> <li>• Legg m`
- [108:17] (JSXText) Static JSX text node: `• Legg merke til miljøfaktorer (støy, lys, aktivitet)`
  - context: `<li>• Inkluder både følelser og sensoriske opplevelser</li> <li>• Legg merke til miljøfaktorer (støy, lys, aktivitet)</li> <li>• Vær`
- [109:17] (JSXText) Static JSX text node: `• Vær konsistent i minst 2-3 uker`
  - context: `<li>• Legg merke til miljøfaktorer (støy, lys, aktivitet)</li> <li>• Vær konsistent i minst 2-3 uker</li> </ul> </div> {`

### src/components/PeriodComparison.tsx

- [177:17] (JSXText) Static JSX text node: `vs`
  - context: `-muted-foreground"> <span>{currentRange.label}</span> <span>vs</span> <span>{comparisonRange.label}</span> </div> </`
- [196:17] (JSXText) Static JSX text node: `vs`
  - context: `<div className="text-xs text-muted-foreground mt-1"> vs {metric.format ? metric.format(metric.previous) : metric.previous}`
- [208:62] (JSXText) Static JSX text node: `Emotion`
  - context: `er gap-2 text-sm"> <Badge variant="outline" className="text-xs">Emotion</Badge> <span className="text-muted-foreground">`
- [210:19] (JSXText) Static JSX text node: `Most common changed from`
  - context: `dge> <span className="text-muted-foreground"> Most common changed from <span className="font-medium">{comparisonStats.mostComm`
- [210:117] (JSXText) Static JSX text node: `to`
  - context: `d from <span className="font-medium">{comparisonStats.mostCommonEmotion}</span> to{" "} <span className="font-medium">{currentStats.mostCommon`
- [218:62] (JSXText) Static JSX text node: `Intensity`
  - context: `er gap-2 text-sm"> <Badge variant="outline" className="text-xs">Intensity</Badge> <span className="text-muted-foreground">`
- [220:19] (JSXText) Static JSX text node: `Average intensity`
  - context: `dge> <span className="text-muted-foreground"> Average intensity{" "} {currentStats.avgEmotionIntensity > com`
- [221:120] (JSXText) Static JSX text node: `by`
  - context: `ionIntensity > comparisonStats.avgEmotionIntensity ? "increased" : "decreased"} by{" "} <span className="font-medium"> {Ma`
- [223:115] (JSXText) Static JSX text node: `points`
  - context: `entStats.avgEmotionIntensity - comparisonStats.avgEmotionIntensity).toFixed(1)} points </span> </span> </div>`
- [231:62] (JSXText) Static JSX text node: `Sensory`
  - context: `er gap-2 text-sm"> <Badge variant="outline" className="text-xs">Sensory</Badge> <span className="text-muted-foreground">`
- [233:19] (JSXText) Static JSX text node: `Sensory seeking behavior`
  - context: `dge> <span className="text-muted-foreground"> Sensory seeking behavior{" "} {currentStats.seekingRatio > com`
- [234:106] (JSXText) Static JSX text node: `by`
  - context: `tStats.seekingRatio > comparisonStats.seekingRatio ? "increased" : "decreased"} by{" "} <span className="font-medium"> {Ma`

### src/components/ProgressDashboard.tsx

- [220:56] (JSXText) Static JSX text node: `Total Goals`
  - context: `between space-y-0 pb-2"> <CardTitle className="text-sm font-medium">Total Goals</CardTitle> <Crosshair className="h-4 w-4 text-muted-for`
- [228:45] (JSXText) Static JSX text node: `active,`
  - context: `me="text-xs text-muted-foreground"> {progressMetrics.activeGoals} active, {progressMetrics.achievedGoals} achieved </p> </Ca`
- [228:85] (JSXText) Static JSX text node: `achieved`
  - context: `{progressMetrics.activeGoals} active, {progressMetrics.achievedGoals} achieved </p> </CardContent> </Card> <Car`
- [235:56] (JSXText) Static JSX text node: `Overall Progress`
  - context: `between space-y-0 pb-2"> <CardTitle className="text-sm font-medium">Overall Progress</CardTitle> <TrendingUp className="h-4 w-4 text-mut`
- [248:56] (JSXText) Static JSX text node: `On Track`
  - context: `between space-y-0 pb-2"> <CardTitle className="text-sm font-medium">On Track</CardTitle> <CheckCircle className="h-4 w-4 text-green-500"`
- [256:15] (JSXText) Static JSX text node: `goals meeting expectations`
  - context: `</div> <p className="text-xs text-muted-foreground"> goals meeting expectations </p> </CardContent> </C`
- [263:56] (JSXText) Static JSX text node: `At Risk`
  - context: `between space-y-0 pb-2"> <CardTitle className="text-sm font-medium">At Risk</CardTitle> <Clock className="h-4 w-4 text-red-500" />`
- [271:15] (JSXText) Static JSX text node: `goals needing attention`
  - context: `</div> <p className="text-xs text-muted-foreground"> goals needing attention </p> </CardContent> </Card`
- [279:41] (JSXText) Static JSX text node: `Overview`
  - context: `st className="grid w-full grid-cols-4"> <TabsTrigger value="overview">Overview</TabsTrigger> <TabsTrigger value="trends">Trends</TabsTrigger`
- [280:39] (JSXText) Static JSX text node: `Trends`
  - context: `r value="overview">Overview</TabsTrigger> <TabsTrigger value="trends">Trends</TabsTrigger> <TabsTrigger value="categories">Categories</TabsT`
- [281:43] (JSXText) Static JSX text node: `Categories`
  - context: `r value="trends">Trends</TabsTrigger> <TabsTrigger value="categories">Categories</TabsTrigger> <TabsTrigger value="priorities">Priorities</T`
- [282:43] (JSXText) Static JSX text node: `Priorities`
  - context: `"categories">Categories</TabsTrigger> <TabsTrigger value="priorities">Priorities</TabsTrigger> </TabsList> <TabsContent value="overvi`
- [289:26] (JSXText) Static JSX text node: `Progress Trends (Last 3 Months)`
  - context: `t-card border-0 shadow-soft"> <CardHeader> <CardTitle>Progress Trends (Last 3 Months)</CardTitle> </CardHeader>`
- [293:33] (JSXAttribute) Static aria-label attribute: `Loading trends chart`
  - context: `rdContent> {isAnalyzingTrends ? ( <div aria-label="Loading trends chart" className="h-[300px] w-full"> <div clas`
- [320:81] (JSXAttribute) Static aria-label attribute: `Progress trends line chart`
  - context: `return <EChartContainer option={option} height={300} aria-label="Progress trends line chart" />; })()} </CardContent>`
- [328:26] (JSXText) Static JSX text node: `Recent Goal Updates`
  - context: `t-card border-0 shadow-soft"> <CardHeader> <CardTitle>Recent Goal Updates</CardTitle> </CardHeader> <CardConte`
- [347:29] (JSXText) Static JSX text node: `Updated`
  - context: `<p className="text-sm text-muted-foreground"> Updated {format(latestPoint.timestamp, 'MMM dd, yyyy')}`
- [366:26] (JSXText) Static JSX text node: `Goal Completion Trends`
  - context: `t-card border-0 shadow-soft"> <CardHeader> <CardTitle>Goal Completion Trends</CardTitle> </CardHeader> <CardCo`
- [390:81] (JSXAttribute) Static aria-label attribute: `Goal completion by category bar chart`
  - context: `return <EChartContainer option={option} height={300} aria-label="Goal completion by category bar chart" />; })()} </Ca`
- [400:28] (JSXText) Static JSX text node: `Progress by Category`
  - context: `rd border-0 shadow-soft"> <CardHeader> <CardTitle>Progress by Category</CardTitle> </CardHeader> <Card`
- [426:83] (JSXAttribute) Static aria-label attribute: `Progress by category donut chart`
  - context: `return <EChartContainer option={option} height={250} aria-label="Progress by category donut chart" />; })()} </Car`
- [433:28] (JSXText) Static JSX text node: `Category Breakdown`
  - context: `rd border-0 shadow-soft"> <CardHeader> <CardTitle>Category Breakdown</CardTitle> </CardHeader> <CardCo`
- [441:67] (JSXText) Static JSX text node: `goals`
  - context: `egory}</span> <Badge variant="outline">{category.count} goals</Badge> </div> <Progress value`
- [445:50] (JSXText) Static JSX text node: `% average progress`
  - context: `ext-xs text-muted-foreground"> <span>{category.progress}% average progress</span> <span>{category.achieved} achi`
- [446:51] (JSXText) Static JSX text node: `achieved`
  - context: `ess}% average progress</span> <span>{category.achieved} achieved</span> </div> </div>`
- [459:26] (JSXText) Static JSX text node: `Priority Goals Requiring Attention`
  - context: `t-card border-0 shadow-soft"> <CardHeader> <CardTitle>Priority Goals Requiring Attention</CardTitle> </CardHeader>`
- [478:31] (JSXText) Static JSX text node: `Progress`
  - context: `<div className="flex justify-between text-sm"> <span>Progress</span> <span>{Math.round(goal.currentProgress)}`
- [485:25] (JSXText) Static JSX text node: `⚠️ This goal is past its target date and may need review or extension.`
  - context: `50 border border-red-200 rounded text-sm text-red-700"> ⚠️ This goal is past its target date and may need review or extension.`
- [490:25] (JSXText) Static JSX text node: `📈 Consider increasing intervention intensity to meet target date.`
  - context: `der border-yellow-200 rounded text-sm text-yellow-700"> 📈 Consider increasing intervention intensity to meet target date.`
- [498:71] (JSXText) Static JSX text node: `All goals are on track!`
  - context: `mb-2" /> <p className="text-lg font-medium text-green-600">All goals are on track!</p> <p className="text-muted-foregro`
- [499:58] (JSXText) Static JSX text node: `Great work keeping`
  - context: `oals are on track!</p> <p className="text-muted-foreground">Great work keeping {student.name}'s progress moving forward.</p>`
- [499:91] (JSXText) Static JSX text node: `'s progress moving forward.`
  - context: `<p className="text-muted-foreground">Great work keeping {student.name}'s progress moving forward.</p> </div> )}`

### src/components/QuickEntryTemplates.tsx

- [169:20] (MessageAPI) Message API call: error(): `Failed to parse saved templates, using defaults`
  - context: `catch (error) { // Log error and fall back to defaults logger.error('Failed to parse saved templates, using defaults', error); return defaultT`
- [198:19] (MessageAPI) Message API call: error(): `Failed to save template changes. Storage may be full.`
  - context: `able } = storageUtils.getStorageInfo(); if (!available) { toast.error('Failed to save template changes. Storage may be full.'); return; }`
- [198:19] (MessageAPI) sonner toast.error(): `Failed to save template changes. Storage may be full.`
  - context: `able } = storageUtils.getStorageInfo(); if (!available) { toast.error('Failed to save template changes. Storage may be full.'); return; }`
- [237:19] (MessageAPI) Message API call: error(): `Cannot delete default templates`
  - context: `ind(t => t.id === templateId); if (template?.isDefault) { toast.error("Cannot delete default templates"); return; } const updatedTe`
- [237:19] (MessageAPI) sonner toast.error(): `Cannot delete default templates`
  - context: `ind(t => t.id === templateId); if (template?.isDefault) { toast.error("Cannot delete default templates"); return; } const updatedTe`
- [243:19] (MessageAPI) Message API call: success(): `Template deleted`
  - context: `=> t.id !== templateId); saveTemplates(updatedTemplates); toast.success("Template deleted"); }; const createTemplate = () => { if (!newTemplate`
- [243:19] (MessageAPI) sonner toast.success(): `Template deleted`
  - context: `=> t.id !== templateId); saveTemplates(updatedTemplates); toast.success("Template deleted"); }; const createTemplate = () => { if (!newTemplate`
- [248:19] (MessageAPI) Message API call: error(): `Template name is required`
  - context: `createTemplate = () => { if (!newTemplate.name?.trim()) { toast.error("Template name is required"); return; } const template: QuickTemp`
- [248:19] (MessageAPI) sonner toast.error(): `Template name is required`
  - context: `createTemplate = () => { if (!newTemplate.name?.trim()) { toast.error("Template name is required"); return; } const template: QuickTemp`
- [275:19] (MessageAPI) Message API call: success(): `Template created successfully`
  - context: `false, usageCount: 0 }); setIsCreating(false); toast.success("Template created successfully"); }; const getCategoryColor = (category: st`
- [275:19] (MessageAPI) sonner toast.success(): `Template created successfully`
  - context: `false, usageCount: 0 }); setIsCreating(false); toast.success("Template created successfully"); }; const getCategoryColor = (category: st`
- [303:13] (JSXText) Static JSX text node: `Quick Entry Templates`
  - context: `center gap-2"> <Zap className="h-5 w-5 text-primary" /> Quick Entry Templates </CardTitle> <Dialog open={isCreating}`
- [309:17] (JSXText) Static JSX text node: `New Template`
  - context: `nt="outline"> <Plus className="h-4 w-4 mr-2" /> New Template </Button> </DialogTrigger> <D`
- [314:30] (JSXText) Static JSX text node: `Create Quick Entry Template`
  - context: `className="max-w-md"> <DialogHeader> <DialogTitle>Create Quick Entry Template</DialogTitle> </DialogHeader>`
- [318:58] (JSXText) Static JSX text node: `Template Name`
  - context: `<div> <label className="text-sm font-medium">Template Name</label> <Input placeholder="`
- [320:33] (JSXAttribute) Static placeholder attribute: `e.g., Sensory Overload Response`
  - context: `>Template Name</label> <Input placeholder="e.g., Sensory Overload Response" value={newTemplate.name ||`
- [326:58] (JSXText) Static JSX text node: `Description`
  - context: `<div> <label className="text-sm font-medium">Description</label> <Textarea placeholder=`
- [328:33] (JSXAttribute) Static placeholder attribute: `Brief description of when to use this template`
  - context: `Description</label> <Textarea placeholder="Brief description of when to use this template" value={newT`
- [334:58] (JSXText) Static JSX text node: `Category`
  - context: `<div> <label className="text-sm font-medium">Category</label> <Select value={newTemplat`
- [343:51] (JSXText) Static JSX text node: `Morning`
  - context: `<SelectContent> <SelectItem value="morning">Morning</SelectItem> <SelectItem value="transition">Transi`
- [344:54] (JSXText) Static JSX text node: `Transition`
  - context: `ning">Morning</SelectItem> <SelectItem value="transition">Transition</SelectItem> <SelectItem value="learning">Learn`
- [345:52] (JSXText) Static JSX text node: `Learning`
  - context: `ion">Transition</SelectItem> <SelectItem value="learning">Learning</SelectItem> <SelectItem value="break">Break</Sel`
- [346:49] (JSXText) Static JSX text node: `Break`
  - context: `learning">Learning</SelectItem> <SelectItem value="break">Break</SelectItem> <SelectItem value="afternoon">Afternoon`
- [347:53] (JSXText) Static JSX text node: `Afternoon`
  - context: `="break">Break</SelectItem> <SelectItem value="afternoon">Afternoon</SelectItem> <SelectItem value="custom">Custom</`
- [348:50] (JSXText) Static JSX text node: `Custom`
  - context: `ernoon">Afternoon</SelectItem> <SelectItem value="custom">Custom</SelectItem> </SelectContent> </Sel`
- [354:21] (JSXText) Static JSX text node: `Cancel`
  - context: `ton variant="outline" onClick={() => setIsCreating(false)}> Cancel </Button> <Button onClick={createTemp`
- [357:21] (JSXText) Static JSX text node: `Create Template`
  - context: `Button> <Button onClick={createTemplate}> Create Template </Button> </div>`
- [404:59] (JSXText) Static JSX text node: `more`
  - context: `className="text-xs"> +{template.emotions.length - 2} more </Badge> )}`
- [416:23] (JSXText) Static JSX text node: `Apply Template`
  - context: `className="flex-1 mr-2" > Apply Template </Button>`
- [447:16] (JSXText) Static JSX text node: `No quick entry templates yet`
  - context: `<Zap className="h-12 w-12 mx-auto mb-3 opacity-50" /> <p>No quick entry templates yet</p> <p className="text-sm">Create templ`
- [448:36] (JSXText) Static JSX text node: `Create templates for common tracking scenarios`
  - context: `<p>No quick entry templates yet</p> <p className="text-sm">Create templates for common tracking scenarios</p> </div> )}`

### src/components/ReportBuilder.tsx

- [103:19] (MessageAPI) Message API call: error(): `Invalid date range selected`
  - context: `if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) { toast.error('Invalid date range selected'); return null; } if (startDate`
- [103:19] (MessageAPI) sonner toast.error(): `Invalid date range selected`
  - context: `if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) { toast.error('Invalid date range selected'); return null; } if (startDate`
- [108:19] (MessageAPI) Message API call: error(): `Start date must be before end date`
  - context: `return null; } if (startDate > endDate) { toast.error('Start date must be before end date'); return null; } // Filter d`
- [108:19] (MessageAPI) sonner toast.error(): `Start date must be before end date`
  - context: `return null; } if (startDate > endDate) { toast.error('Start date must be before end date'); return null; } // Filter d`
- [411:19] (MessageAPI) Message API call: success(): `Report generated successfully!`
  - context: `setTimeout(() => { printWindow.print(); }, 1000); toast.success("Report generated successfully!"); }; const exportCSV = () => { const r`
- [411:19] (MessageAPI) sonner toast.success(): `Report generated successfully!`
  - context: `setTimeout(() => { printWindow.print(); }, 1000); toast.success("Report generated successfully!"); }; const exportCSV = () => { const r`
- [458:19] (MessageAPI) Message API call: success(): `CSV exported successfully!`
  - context: `ace(/\s+/g, '_')}_${format(new Date(), 'yyyy-MM-dd')}.csv\`); toast.success("CSV exported successfully!"); }; return ( <div className="space-y-4">`
- [458:19] (MessageAPI) sonner toast.success(): `CSV exported successfully!`
  - context: `ace(/\s+/g, '_')}_${format(new Date(), 'yyyy-MM-dd')}.csv\`); toast.success("CSV exported successfully!"); }; return ( <div className="space-y-4">`
- [465:49] (JSXText) Static JSX text node: `Reports & Documentation`
  - context: `justify-between"> <div> <h3 className="text-lg font-semibold">Reports & Documentation</h3> <p className="text-muted-foreground">Gene`
- [466:48] (JSXText) Static JSX text node: `Generate comprehensive reports for IEP meetings and progress tracking`
  - context: `ld">Reports & Documentation</h3> <p className="text-muted-foreground">Generate comprehensive reports for IEP meetings and progress tracking</p>`
- [472:15] (JSXText) Static JSX text node: `Create Report`
  - context: `nt-dyslexia"> <FileText className="h-4 w-4 mr-2" /> Create Report </Button> </DialogTrigger> <Dialog`
- [477:28] (JSXText) Static JSX text node: `Report Builder`
  - context: `-[80vh] overflow-y-auto"> <DialogHeader> <DialogTitle>Report Builder</DialogTitle> </DialogHeader>`
- [483:24] (JSXText) Static JSX text node: `Report Template`
  - context: `{/* Template Selection */} <div> <Label>Report Template</Label> <Select value={selectedTemplate} onValue`
- [504:48] (JSXText) Static JSX text node: `Report Title`
  - context: `-2 gap-4"> <div> <Label htmlFor="reportTitle">Report Title</Label> <Input id="reportTitl`
- [512:44] (JSXText) Static JSX text node: `Reporting Teacher`
  - context: `</div> <div> <Label htmlFor="teacher">Reporting Teacher</Label> <Input id="teach`
- [517:33] (JSXAttribute) Static placeholder attribute: `Teacher name`
  - context: `...prev, reportingTeacher: e.target.value }))} placeholder="Teacher name" /> </div> </div>`
- [524:24] (JSXText) Static JSX text node: `Report Period`
  - context: `v> {/* Date Range */} <div> <Label>Report Period</Label> <div className="grid grid-cols-2 gap-4 mt-`
- [527:68] (JSXText) Static JSX text node: `Start Date`
  - context: `<div> <Label htmlFor="startDate" className="text-sm">Start Date</Label> <Input id="startDat`
- [539:66] (JSXText) Static JSX text node: `End Date`
  - context: `<div> <Label htmlFor="endDate" className="text-sm">End Date</Label> <Input id="endDate"`
- [555:24] (JSXText) Static JSX text node: `Report Sections`
  - context: `div> {/* Sections */} <div> <Label>Report Sections</Label> <div className="grid grid-cols-2 gap-2 m`
- [596:50] (JSXText) Static JSX text node: `Include charts and visualizations`
  - context: `cked }))} /> <Label htmlFor="includeCharts">Include charts and visualizations</Label> </div>`
- [604:51] (JSXText) Static JSX text node: `Include raw data tables`
  - context: `ked }))} /> <Label htmlFor="includeRawData">Include raw data tables</Label> </div> </div>`
- [610:46] (JSXText) Static JSX text node: `Additional Notes`
  - context: `stom Notes */} <div> <Label htmlFor="customNotes">Additional Notes</Label> <Textarea id="customN`
- [615:31] (JSXAttribute) Static placeholder attribute: `Add any additional observations or notes...`
  - context: `v => ({ ...prev, customNotes: e.target.value }))} placeholder="Add any additional observations or notes..." rows={3}`
- [624:19] (JSXText) Static JSX text node: `Export CSV`
  - context: `CSV}> <Download className="h-4 w-4 mr-2" /> Export CSV </Button> <Button onClick={generatePD`
- [628:19] (JSXText) Static JSX text node: `Generate PDF`
  - context: `ePDF}> <Printer className="h-4 w-4 mr-2" /> Generate PDF </Button> </div> </div>`
- [650:44] (JSXText) Static JSX text node: `sections`
  - context: `riant="outline" className="text-xs"> {template.sections.length} sections </Badge> </CardContent> </Card>`

### src/components/SensoryTracker.tsx

- [185:26] (JSXAttribute) Static aria-label attribute: `Manual intensity input`
  - context: `className="w-16 px-2 py-1 mt-2 rounded border" aria-label="Manual intensity input" /> </div> )} {/*`
- [193:70] (JSXText) Static JSX text node: `Body Location (Optional)`
  - context: `<div> <h3 className="text-sm font-medium text-foreground mb-3">Body Location (Optional)</h3> <div className="flex flex-wrap gap-2">`
- [222:70] (JSXText) Static JSX text node: `Coping Strategies Used`
  - context: `<div> <h3 className="text-sm font-medium text-foreground mb-3">Coping Strategies Used</h3> <div className="flex gap-2 mb-2">`
- [229:29] (JSXAttribute) Static placeholder attribute: `Add a coping strategy...`
  - context: `=> e.key === 'Enter' && handleAddCopingStrategy()} placeholder="Add a coping strategy..." className="flex-1 px-3 py-2 border bo`
- [260:30] (JSXText) Static JSX text node: `×`
  - context: `eRemoveCopingStrategy(strategy)} > {strategy} × </Badge> ))} </div> </div>`
- [269:68] (JSXText) Static JSX text node: `Miljø (Valgfritt)`
  - context: `<div> <h3 className="text-sm font-medium text-foreground mb-3">Miljø (Valgfritt)</h3> <input type="text" valu`
- [274:25] (JSXAttribute) Static placeholder attribute: `f.eks. Klasserom, Lekeplass, Bibliotek...`
  - context: `onChange={(e) => setEnvironment(e.target.value)} placeholder="f.eks. Klasserom, Lekeplass, Bibliotek..." className="w-full px-3 p`
- [285:25] (JSXAttribute) Static placeholder attribute: `Ytterligere observasjoner om den sensoriske responsen...`
  - context: `onChange={(e) => setNotes(e.target.value)} placeholder="Ytterligere observasjoner om den sensoriske responsen..." className`

### src/components/StorageManager.tsx

- [33:21] (MessageAPI) Message API call: success(): `Old data cleared successfully`
  - context: `=> { try { storageUtils.clearOldTrackingData(30); toast.success('Old data cleared successfully'); refreshStats(); } catch (error) {`
- [33:21] (MessageAPI) sonner toast.success(): `Old data cleared successfully`
  - context: `=> { try { storageUtils.clearOldTrackingData(30); toast.success('Old data cleared successfully'); refreshStats(); } catch (error) {`
- [36:20] (MessageAPI) Message API call: error(): `Failed to clear old tracking data`
  - context: `successfully'); refreshStats(); } catch (error) { logger.error('Failed to clear old tracking data', error); toast.error('Failed to clear`
- [37:19] (MessageAPI) Message API call: error(): `Failed to clear old data`
  - context: `logger.error('Failed to clear old tracking data', error); toast.error('Failed to clear old data'); } }; const handleClearNonEssential = () =>`
- [37:19] (MessageAPI) sonner toast.error(): `Failed to clear old data`
  - context: `logger.error('Failed to clear old tracking data', error); toast.error('Failed to clear old data'); } }; const handleClearNonEssential = () =>`
- [44:21] (MessageAPI) Message API call: success(): `Non-essential data cleared`
  - context: `=> { try { storageUtils.clearNonEssentialData(); toast.success('Non-essential data cleared'); refreshStats(); } catch (error) {`
- [44:21] (MessageAPI) sonner toast.success(): `Non-essential data cleared`
  - context: `=> { try { storageUtils.clearNonEssentialData(); toast.success('Non-essential data cleared'); refreshStats(); } catch (error) {`
- [47:20] (MessageAPI) Message API call: error(): `Failed to clear non-essential data`
  - context: `data cleared'); refreshStats(); } catch (error) { logger.error('Failed to clear non-essential data', error); toast.error('Failed to clear`
- [48:19] (MessageAPI) Message API call: error(): `Failed to clear non-essential data`
  - context: `logger.error('Failed to clear non-essential data', error); toast.error('Failed to clear non-essential data'); } }; /** * Handle clearing al`
- [48:19] (MessageAPI) sonner toast.error(): `Failed to clear non-essential data`
  - context: `logger.error('Failed to clear non-essential data', error); toast.error('Failed to clear non-essential data'); } }; /** * Handle clearing al`
- [60:40] (MessageAPI) Message API call: confirm(): `Are you sure you want to clear ALL data? This cannot be undone!`
  - context: `using a custom modal component try { const confirmed = window.confirm('Are you sure you want to clear ALL data? This cannot be undone!'); if (co`
- [64:25] (MessageAPI) Message API call: success(): `All data cleared`
  - context: `) { try { dataStorage.clearAllData(); toast.success('All data cleared'); // Use window.location.replace for better history`
- [64:25] (MessageAPI) sonner toast.success(): `All data cleared`
  - context: `) { try { dataStorage.clearAllData(); toast.success('All data cleared'); // Use window.location.replace for better history`
- [68:24] (MessageAPI) Message API call: error(): `Failed to clear all data`
  - context: `window.location.replace('/'); } catch (error) { logger.error('Failed to clear all data', error); toast.error('Failed to clear all d`
- [69:23] (MessageAPI) Message API call: error(): `Failed to clear all data`
  - context: `logger.error('Failed to clear all data', error); toast.error('Failed to clear all data'); } } } catch (error) { // Ha`
- [69:23] (MessageAPI) sonner toast.error(): `Failed to clear all data`
  - context: `logger.error('Failed to clear all data', error); toast.error('Failed to clear all data'); } } } catch (error) { // Ha`
- [74:20] (MessageAPI) Message API call: error(): `Confirmation dialog failed`
  - context: `s where confirm might fail (e.g., in some test environments) logger.error('Confirmation dialog failed', error); toast.error('Could not show confirma`
- [75:19] (MessageAPI) Message API call: error(): `Could not show confirmation dialog`
  - context: `nts) logger.error('Confirmation dialog failed', error); toast.error('Could not show confirmation dialog'); } }; const formatBytes = (bytes:`
- [75:19] (MessageAPI) sonner toast.error(): `Could not show confirmation dialog`
  - context: `nts) logger.error('Confirmation dialog failed', error); toast.error('Could not show confirmation dialog'); } }; const formatBytes = (bytes:`
- [94:11] (JSXText) Static JSX text node: `Storage Management`
  - context: `"flex items-center gap-2"> <Database className="h-5 w-5" /> Storage Management </CardTitle> <CardDescription> Mana`
- [97:11] (JSXText) Static JSX text node: `Manage your local storage to ensure smooth operation`
  - context: `Storage Management </CardTitle> <CardDescription> Manage your local storage to ensure smooth operation </CardDescription>`
- [103:44] (JSXText) Static JSX text node: `Storage Usage`
  - context: `{/* Storage Usage */} <div> <h3 className="font-medium mb-2">Storage Usage</h3> <div className="space-y-2"> <div classN`
- [106:21] (JSXText) Static JSX text node: `Used`
  - context: `<div className="flex justify-between text-sm"> <span>Used</span> <span>{formatBytes(storageInfo.used)} / ~5 MB</span>`
- [107:53] (JSXText) Static JSX text node: `/ ~5 MB`
  - context: `<span>Used</span> <span>{formatBytes(storageInfo.used)} / ~5 MB</span> </div> <div className="w-full bg-gray-200`
- [123:44] (JSXText) Static JSX text node: `Data Statistics`
  - context: `{/* Storage Stats */} <div> <h3 className="font-medium mb-2">Data Statistics</h3> <div className="grid grid-cols-2 gap-2 text-sm">`
- [125:18] (JSXText) Static JSX text node: `Students:`
  - context: `h3> <div className="grid grid-cols-2 gap-2 text-sm"> <div>Students: {stats.studentsCount}</div> <div>Entries: {stats.entriesCo`
- [126:18] (JSXText) Static JSX text node: `Entries:`
  - context: `xt-sm"> <div>Students: {stats.studentsCount}</div> <div>Entries: {stats.entriesCount}</div> <div>Goals: {stats.goalsCount}</`
- [127:18] (JSXText) Static JSX text node: `Goals:`
  - context: `nt}</div> <div>Entries: {stats.entriesCount}</div> <div>Goals: {stats.goalsCount}</div> <div>Alerts: {stats.alertsCount}</di`
- [128:18] (JSXText) Static JSX text node: `Alerts:`
  - context: `sCount}</div> <div>Goals: {stats.goalsCount}</div> <div>Alerts: {stats.alertsCount}</div> </div> </div> {/* W`
- [154:13] (JSXText) Static JSX text node: `Clear data older than 30 days`
  - context: `-start" > <Trash2 className="h-4 w-4 mr-2" /> Clear data older than 30 days </Button> <Button`
- [162:13] (JSXText) Static JSX text node: `Clear non-essential data`
  - context: `-start" > <Trash2 className="h-4 w-4 mr-2" /> Clear non-essential data </Button> <Button varia`
- [170:13] (JSXText) Static JSX text node: `Clear ALL data (irreversible)`
  - context: `-start" > <Trash2 className="h-4 w-4 mr-2" /> Clear ALL data (irreversible) </Button> </div> {stora`
- [178:15] (JSXText) Static JSX text node: `Storage is healthy with sufficient space available.`
  - context: `CheckCircle className="h-4 w-4" /> <AlertDescription> Storage is healthy with sufficient space available. </AlertDescripti`

### src/components/StudentProfileSidebar.tsx

- [109:13] (JSXText) Static JSX text node: `Hovedseksjoner`
  - context: `foreground text-xs font-medium uppercase tracking-wider px-3 py-2"> Hovedseksjoner </SidebarGroupLabel> <SidebarGroupContent>`
- [137:13] (JSXText) Static JSX text node: `Verktøy`
  - context: `foreground text-xs font-medium uppercase tracking-wider px-3 py-2"> Verktøy </SidebarGroupLabel> <SidebarGroupContent>`
- [165:13] (JSXText) Static JSX text node: `Testing`
  - context: `foreground text-xs font-medium uppercase tracking-wider px-3 py-2"> Testing </SidebarGroupLabel> <SidebarGroupContent>`
- [178:62] (JSXText) Static JSX text node: `science`
  - context: `> <span className="material-icons text-base">science</span> {state !== "collapsed" && (`
- [180:52] (JSXText) Static JSX text node: `Mock Data`
  - context: `{state !== "collapsed" && ( <span className="text-sm ml-3">Mock Data</span> )} </SidebarMenuButton>`

### src/components/TestingDebugPanel.tsx

- [206:21] (MessageAPI) Message API call: success(): `System tests completed successfully`
  - context: `ilable" }; setTestResults([...results]); toast.success("System tests completed successfully"); } catch (error) { logge`
- [206:21] (MessageAPI) sonner toast.success(): `System tests completed successfully`
  - context: `ilable" }; setTestResults([...results]); toast.success("System tests completed successfully"); } catch (error) { logge`
- [209:20] (MessageAPI) Message API call: error(): `System test error`
  - context: `tests completed successfully"); } catch (error) { logger.error('System test error', { error }); results.push({ name: "Test Error"`
- [216:19] (MessageAPI) Message API call: error(): `Some tests failed`
  - context: `nknown error'}\` }); setTestResults([...results]); toast.error("Some tests failed"); } finally { setIsRunningTests(false); } };`
- [216:19] (MessageAPI) sonner toast.error(): `Some tests failed`
  - context: `nknown error'}\` }); setTestResults([...results]); toast.error("Some tests failed"); } finally { setIsRunningTests(false); } };`
- [245:19] (MessageAPI) Message API call: success(): `Analytics cache cleared successfully`
  - context: `) => { analyticsWorker.clearCache(); uiCache.clear(); toast.success("Analytics cache cleared successfully"); }, [analyticsWorker, uiCache]); co`
- [245:19] (MessageAPI) sonner toast.success(): `Analytics cache cleared successfully`
  - context: `) => { analyticsWorker.clearCache(); uiCache.clear(); toast.success("Analytics cache cleared successfully"); }, [analyticsWorker, uiCache]); co`
- [260:13] (JSXText) Static JSX text node: `System Testing & Debug Panel`
  - context: `="flex items-center gap-2"> <Bug className="h-5 w-5" /> System Testing & Debug Panel </CardTitle> </CardHeader>`
- [266:15] (JSXText) Static JSX text node: `Test current system functionality and data integrity`
  - context: `tween"> <p className="text-sm text-muted-foreground"> Test current system functionality and data integrity </p>`
- [277:19] (JSXText) Static JSX text node: `Running Tests...`
  - context: `<RefreshCw className="h-4 w-4 mr-2 animate-spin" /> Running Tests... </> ) : ( <>`
- [282:19] (JSXText) Static JSX text node: `Run System Tests`
  - context: `<> <TestTube className="h-4 w-4 mr-2" /> Run System Tests </> )} </Button>`
- [290:51] (JSXText) Static JSX text node: `Test Results:`
  - context: `<div className="space-y-3"> <h4 className="text-sm font-medium">Test Results:</h4> {testResults.map((result, index) => (`
- [309:54] (JSXText) Static JSX text node: `Quick Stats:`
  - context: `4 border-t border-border"> <h4 className="text-sm font-medium mb-2">Quick Stats:</h4> <div className="grid grid-cols-3 gap-3 text-center`
- [313:62] (JSXText) Static JSX text node: `Students`
  - context: `ted-foreground" /> <p className="text-xs text-muted-foreground">Students</p> </div> <div> <Database`
- [317:62] (JSXText) Static JSX text node: `Entries`
  - context: `ted-foreground" /> <p className="text-xs text-muted-foreground">Entries</p> </div> <div> <BarChart3`
- [321:62] (JSXText) Static JSX text node: `Analytics`
  - context: `ted-foreground" /> <p className="text-xs text-muted-foreground">Analytics</p> </div> </div> </div> <`
- [333:13] (JSXText) Static JSX text node: `Analytics Cache Management`
  - context: `ex items-center gap-2"> <Archive className="h-5 w-5" /> Analytics Cache Management </CardTitle> </CardHeader>`
- [342:57] (JSXText) Static JSX text node: `Cache Hit Rate`
  - context: `enter justify-between"> <span className="text-sm font-medium">Cache Hit Rate</span> <div className="flex items-center gap-2"`
- [351:69] (JSXText) Static JSX text node: `Cache Size`
  - context: `flex-col"> <span className="text-xs text-muted-foreground">Cache Size</span> <span className="text-lg font-semibold">{c`
- [355:69] (JSXText) Static JSX text node: `Memory Usage`
  - context: `flex-col"> <span className="text-xs text-muted-foreground">Memory Usage</span> <span className="text-lg font-semibold">`
- [366:66] (JSXText) Static JSX text node: `Hits`
  - context: `tats.hits}</p> <p className="text-xs text-muted-foreground">Hits</p> </div> <div className="text-center`
- [371:66] (JSXText) Static JSX text node: `Misses`
  - context: `ts.misses}</p> <p className="text-xs text-muted-foreground">Misses</p> </div> <div className="text-cente`
- [376:66] (JSXText) Static JSX text node: `Sets`
  - context: `tats.sets}</p> <p className="text-xs text-muted-foreground">Sets</p> </div> </div> </div>`
- [383:53] (JSXText) Static JSX text node: `Cache Actions`
  - context: `t border-border space-y-3"> <h4 className="text-sm font-medium">Cache Actions</h4> <div className="flex gap-2">`
- [392:21] (JSXText) Static JSX text node: `Clear All Cache`
  - context: `> <Trash2 className="h-4 w-4 mr-2" /> Clear All Cache </Button> <Button`
- [401:21] (JSXText) Static JSX text node: `Clean Expired`
  - context: `<RefreshCw className="h-4 w-4 mr-2" /> Clean Expired </Button> </div>`
- [406:22] (JSXText) Static JSX text node: `• Cache TTL: 5 minutes`
  - context: `<div className="text-xs text-muted-foreground"> <p>• Cache TTL: 5 minutes</p> <p>• Eviction: LRU (Least Recently`
- [407:22] (JSXText) Static JSX text node: `• Eviction: LRU (Least Recently Used)`
  - context: `reground"> <p>• Cache TTL: 5 minutes</p> <p>• Eviction: LRU (Least Recently Used)</p> <p>• Invalidations:`
- [408:22] (JSXText) Static JSX text node: `• Invalidations:`
  - context: `<p>• Eviction: LRU (Least Recently Used)</p> <p>• Invalidations: {cacheStats.invalidations || 0}</p> </div>`

### src/components/TestingToolsSection.tsx

- [16:44] (JSXText) Static JSX text node: `Testing & Development Tools`
  - context: `v className="space-y-6"> <div> <h2 className="text-2xl font-bold">Testing & Development Tools</h2> <p className="text-muted-foreground">`
- [18:11] (JSXText) Static JSX text node: `Tools for testing pattern analysis features and debugging data issues`
  - context: `Development Tools</h2> <p className="text-muted-foreground"> Tools for testing pattern analysis features and debugging data issues </`
- [28:15] (JSXText) Static JSX text node: `Mock Data Generator`
  - context: `p-2"> <Database className="h-5 w-5 text-primary" /> Mock Data Generator </CardTitle> </CardHeader> <`
- [33:15] (JSXText) Static JSX text node: `Load realistic test data to explore pattern analysis features`
  - context: `t> <p className="text-sm text-muted-foreground mb-4"> Load realistic test data to explore pattern analysis features </p>`
- [39:19] (JSXText) Static JSX text node: `Load Mock Data`
  - context: `-90"> <Database className="h-4 w-4 mr-2" /> Load Mock Data </Button> </DialogTrigger>`
- [44:32] (JSXText) Static JSX text node: `Mock Data for Testing & Analysis`
  - context: `overflow-y-auto"> <DialogHeader> <DialogTitle>Mock Data for Testing & Analysis</DialogTitle> </DialogHeader>`
- [57:15] (JSXText) Static JSX text node: `Debug Panel`
  - context: `er gap-2"> <Bug className="h-5 w-5 text-primary" /> Debug Panel </CardTitle> </CardHeader> <CardCont`
- [62:15] (JSXText) Static JSX text node: `Advanced debugging and data inspection tools`
  - context: `t> <p className="text-sm text-muted-foreground mb-4"> Advanced debugging and data inspection tools </p> <Dialo`
- [68:19] (JSXText) Static JSX text node: `Open Debug Panel`
  - context: `="w-full"> <Bug className="h-4 w-4 mr-2" /> Open Debug Panel </Button> </DialogTrigger>`
- [73:32] (JSXText) Static JSX text node: `Debug & Data Inspection`
  - context: `overflow-y-auto"> <DialogHeader> <DialogTitle>Debug & Data Inspection</DialogTitle> </DialogHeader>`
- [86:15] (JSXText) Static JSX text node: `Pattern Analysis Testing Guide`
  - context: `gap-2"> <Beaker className="h-5 w-5 text-primary" /> Pattern Analysis Testing Guide </CardTitle> </CardHeader>`
- [92:17] (JSXText) Static JSX text node: `To test pattern analysis features effectively:`
  - context: `4"> <p className="text-sm text-muted-foreground"> To test pattern analysis features effectively: </p>`
- [96:60] (JSXText) Static JSX text node: `Data Requirements:`
  - context: `<div> <h4 className="font-medium text-sm mb-2">Data Requirements:</h4> <ul className="text-xs text-muted-fore`
- [98:25] (JSXText) Static JSX text node: `• At least 10 tracking entries for basic patterns`
  - context: `ul className="text-xs text-muted-foreground space-y-1"> <li>• At least 10 tracking entries for basic patterns</li> <li>•`
- [99:25] (JSXText) Static JSX text node: `• 30+ entries for correlation analysis`
  - context: `>• At least 10 tracking entries for basic patterns</li> <li>• 30+ entries for correlation analysis</li> <li>• 90+ entrie`
- [100:25] (JSXText) Static JSX text node: `• 90+ entries for predictive insights`
  - context: `<li>• 30+ entries for correlation analysis</li> <li>• 90+ entries for predictive insights</li> <li>• Multiple st`
- [101:25] (JSXText) Static JSX text node: `• Multiple students for comparative analysis`
  - context: `<li>• 90+ entries for predictive insights</li> <li>• Multiple students for comparative analysis</li> </ul>`
- [105:60] (JSXText) Static JSX text node: `Features to Test:`
  - context: `<div> <h4 className="font-medium text-sm mb-2">Features to Test:</h4> <ul className="text-xs text-muted-foreg`
- [107:25] (JSXText) Static JSX text node: `• Emotion trend analysis`
  - context: `ul className="text-xs text-muted-foreground space-y-1"> <li>• Emotion trend analysis</li> <li>• Sensory correlation matr`
- [108:25] (JSXText) Static JSX text node: `• Sensory correlation matrices`
  - context: `> <li>• Emotion trend analysis</li> <li>• Sensory correlation matrices</li> <li>• Environmental impa`
- [109:25] (JSXText) Static JSX text node: `• Environmental impact patterns`
  - context: `<li>• Sensory correlation matrices</li> <li>• Environmental impact patterns</li> <li>• Anomaly detection`
- [110:25] (JSXText) Static JSX text node: `• Anomaly detection alerts`
  - context: `<li>• Environmental impact patterns</li> <li>• Anomaly detection alerts</li> </ul> </div>`

### src/components/TimelineVisualization.tsx

- [520:13] (JSXText) Static JSX text node: `Timeline Visualization`
  - context: `flex items-center gap-2"> <Clock className="h-5 w-5" /> Timeline Visualization </CardTitle> <div className="flex ite`
- [525:17] (JSXText) Static JSX text node: `Live`
  - context: `<Badge variant="default" className="animate-pulse"> Live </Badge> )} <Button siz`
- [605:32] (JSXText) Static JSX text node: `x`
  - context: `<span className="text-sm text-muted-foreground"> {playbackSpeed}x </span> </div> {/* Stream visibility to`
- [619:17] (JSXText) Static JSX text node: `Emotions`
  - context: `> <Brain className="h-4 w-4 mr-1" /> Emotions </Toggle> <Toggle size="sm"`
- [629:17] (JSXText) Static JSX text node: `Sensory`
  - context: `> <Eye className="h-4 w-4 mr-1" /> Sensory </Toggle> <Toggle size="sm"`
- [639:17] (JSXText) Static JSX text node: `Anomalies`
  - context: `> <AlertCircle className="h-4 w-4 mr-1" /> Anomalies </Toggle> </div> </div>`
- [648:65] (JSXText) Static JSX text node: `minutes`
  - context: `="font-medium"> {differenceInMinutes(timeRange[1], timeRange[0])} minutes </span> <span>{format(timeRange[1], 'MMM dd, yyy`
- [728:54] (JSXText) Static JSX text node: `Data Streams`
  - context: `rounded-lg p-3 shadow-lg"> <h4 className="font-medium text-sm mb-2">Data Streams</h4> <div className="space-y-1"> {dataStr`
- [745:18] (JSXText) Static JSX text node: `Events:`
  - context: `-3 shadow-lg"> <div className="text-xs space-y-1"> <p>Events: {timelineEvents.length}</p> <p>Zoom: {Math.round(zoomLevel`
- [746:18] (JSXText) Static JSX text node: `Zoom:`
  - context: `ace-y-1"> <p>Events: {timelineEvents.length}</p> <p>Zoom: {Math.round(zoomLevel * 100)}%</p> {brushSelection && (`
- [748:20] (JSXText) Static JSX text node: `Selection:`
  - context: `nd(zoomLevel * 100)}%</p> {brushSelection && ( <p>Selection: {differenceInMinutes(brushSelection[1], brushSelection[0])} min</p>`
- [748:91] (JSXText) Static JSX text node: `min`
  - context: `<p>Selection: {differenceInMinutes(brushSelection[1], brushSelection[0])} min</p> )} </div> </div> </div>`

### src/components/Visualization3D.tsx

- [55:13] (JSXText) Static JSX text node: `×`
  - context: `ted-foreground hover:text-foreground transition-colors" > × </button> </div> <p className="font-medium">{point.l`
- [60:14] (JSXText) Static JSX text node: `X:`
  - context: `<div className="text-sm text-muted-foreground mt-1 space-y-1"> <p>X: {point.x.toFixed(2)}</p> <p>Y: {point.y.toFixed(2)}</p> <`
- [61:14] (JSXText) Static JSX text node: `Y:`
  - context: `reground mt-1 space-y-1"> <p>X: {point.x.toFixed(2)}</p> <p>Y: {point.y.toFixed(2)}</p> <p>Z: {point.z.toFixed(2)}</p> {`
- [62:14] (JSXText) Static JSX text node: `Z:`
  - context: `{point.x.toFixed(2)}</p> <p>Y: {point.y.toFixed(2)}</p> <p>Z: {point.z.toFixed(2)}</p> {point.intensity && <p>Intensity: {point.i`
- [63:34] (JSXText) Static JSX text node: `Intensity:`
  - context: `}</p> <p>Z: {point.z.toFixed(2)}</p> {point.intensity && <p>Intensity: {point.intensity}</p>} </div> </div> </Html> ); }`
- [334:11] (JSXText) Static JSX text node: `3D Correlation Visualization`
  - context: `Name="flex items-center gap-2"> <Eye className="h-5 w-5" /> 3D Correlation Visualization </CardTitle> </CardHeader> <Car`
- [342:65] (JSXText) Static JSX text node: `X Axis`
  - context: `<div> <label className="text-sm font-medium mb-1 block">X Axis</label> <Select value={xAxis} onValueChange={setXAxis}>`
- [358:65] (JSXText) Static JSX text node: `Y Axis`
  - context: `<div> <label className="text-sm font-medium mb-1 block">Y Axis</label> <Select value={yAxis} onValueChange={setYAxis}>`
- [374:65] (JSXText) Static JSX text node: `Z Axis`
  - context: `<div> <label className="text-sm font-medium mb-1 block">Z Axis</label> <Select value={zAxis} onValueChange={setZAxis}>`
- [392:65] (JSXText) Static JSX text node: `Color By`
  - context: `<div> <label className="text-sm font-medium mb-1 block">Color By</label> <Select value={colorBy} onValueChange={setColorBy`
- [398:48] (JSXText) Static JSX text node: `Category`
  - context: `<SelectContent> <SelectItem value="category">Category</SelectItem> <SelectItem value="intensity">Intensity<`
- [399:49] (JSXText) Static JSX text node: `Intensity`
  - context: `category">Category</SelectItem> <SelectItem value="intensity">Intensity</SelectItem> </SelectContent> </Select>`
- [405:65] (JSXText) Static JSX text node: `Filter Category`
  - context: `<div> <label className="text-sm font-medium mb-1 block">Filter Category</label> <Select value={filterCategory} onValueChan`
- [411:43] (JSXText) Static JSX text node: `All`
  - context: `gger> <SelectContent> <SelectItem value="all">All</SelectItem> <SelectItem value="emotion">Emotions</SelectI`
- [412:47] (JSXText) Static JSX text node: `Emotions`
  - context: `Item value="all">All</SelectItem> <SelectItem value="emotion">Emotions</SelectItem> <SelectItem value="sensory">Sensory</Sel`
- [413:47] (JSXText) Static JSX text node: `Sensory`
  - context: `e="emotion">Emotions</SelectItem> <SelectItem value="sensory">Sensory</SelectItem> <SelectItem value="environmental">Environ`
- [414:53] (JSXText) Static JSX text node: `Environmental`
  - context: `nsory">Sensory</SelectItem> <SelectItem value="environmental">Environmental</SelectItem> </SelectContent> </Sele`
- [421:17] (JSXText) Static JSX text node: `Point Size:`
  - context: `<label className="text-sm font-medium mb-1 block"> Point Size: {pointSize.toFixed(2)} </label> <Slider`
- [503:54] (JSXText) Static JSX text node: `Legend`
  - context: `rounded-lg p-3 shadow-lg"> <h4 className="font-medium text-sm mb-2">Legend</h4> <div className="space-y-1"> {colorBy === '`
- [509:47] (JSXText) Static JSX text node: `Emotions`
  - context: `h-3 rounded-full bg-[#10B981]" /> <span className="text-xs">Emotions</span> </div> <div className="flex`
- [513:47] (JSXText) Static JSX text node: `Sensory`
  - context: `h-3 rounded-full bg-[#3B82F6]" /> <span className="text-xs">Sensory</span> </div> <div className="flex i`
- [517:47] (JSXText) Static JSX text node: `Environmental`
  - context: `h-3 rounded-full bg-[#F59E0B]" /> <span className="text-xs">Environmental</span> </div> </>`
- [524:45] (JSXText) Static JSX text node: `Low → High`
  - context: `a-yellow-500 to-red-500 rounded" /> <span className="text-xs">Low → High</span> </div> )} </div>`
- [532:18] (JSXText) Static JSX text node: `Points:`
  - context: `-3 shadow-lg"> <div className="text-xs space-y-1"> <p>Points: {filteredPoints.length}</p> <p>Total Sessions: {trackingEn`
- [533:18] (JSXText) Static JSX text node: `Total Sessions:`
  - context: `ace-y-1"> <p>Points: {filteredPoints.length}</p> <p>Total Sessions: {trackingEntries.length}</p> </div> </div>`

### src/components/VisualizationControls.tsx

- [108:11] (JSXText) Static JSX text node: `Interactive Data Analysis -`
  - context: `"flex items-center gap-2"> <Activity className="h-5 w-5" /> Interactive Data Analysis - {studentName} {filterCriteria.realtime &&`
- [112:15] (JSXText) Static JSX text node: `Live`
  - context: `mate-pulse ml-2"> <Wifi className="h-3 w-3 mr-1" /> Live </Badge> )} </CardTitle> <div classNa`
- [116:61] (JSXAttribute) Static aria-label attribute: `Visualization controls`
  - context: `</CardTitle> <div className="flex items-center gap-2" aria-label="Visualization controls"> {/* Guided question chips */} <div`
- [153:62] (JSXAttribute) Static aria-label attribute: `Open filters panel`
  - context: `etTrigger asChild> <Button variant="outline" size="sm" aria-label="Open filters panel" title="Open filters panel"> <Filter classNa`
- [153:89] (JSXAttribute) Static title attribute: `Open filters panel`
  - context: `<Button variant="outline" size="sm" aria-label="Open filters panel" title="Open filters panel"> <Filter className="h-4 w-4 mr-2" />`
- [155:17] (JSXText) Static JSX text node: `Filters`
  - context: `ers panel"> <Filter className="h-4 w-4 mr-2" /> Filters {Object.keys(filterCriteria).filter(k =>`
- [174:21] (JSXText) Static JSX text node: `Active`
  - context: `<Badge variant="default" className="ml-1"> Active </Badge> )} </Button>`
- [181:29] (JSXText) Static JSX text node: `Advanced Filters`
  - context: `-[400px] sm:w-[540px]"> <SheetHeader> <SheetTitle>Advanced Filters</SheetTitle> <SheetDescription>`
- [183:19] (JSXText) Static JSX text node: `Configure multi-dimensional filters for your data analysis`
  - context: `anced Filters</SheetTitle> <SheetDescription> Configure multi-dimensional filters for your data analysis </She`
- [199:62] (JSXAttribute) Static aria-label attribute: `Select layout mode`
  - context: `nuTrigger asChild> <Button variant="outline" size="sm" aria-label="Select layout mode" title="Select layout mode"> {layoutMode ===`
- [199:89] (JSXAttribute) Static title attribute: `Select layout mode`
  - context: `<Button variant="outline" size="sm" aria-label="Select layout mode" title="Select layout mode"> {layoutMode === 'grid' && <Grid3x3 classNa`
- [204:17] (JSXText) Static JSX text node: `Layout`
  - context: `tMode === 'dashboard' && <Activity className="h-4 w-4 mr-2" />} Layout </Button> </DropdownMenuTrigger> <D`
- [210:17] (JSXText) Static JSX text node: `Dashboard`
  - context: `board')}> <Activity className="h-4 w-4 mr-2" /> Dashboard </DropdownMenuItem> <DropdownMenuItem onCl`
- [214:17] (JSXText) Static JSX text node: `Grid View`
  - context: `('grid')}> <Grid3x3 className="h-4 w-4 mr-2" /> Grid View </DropdownMenuItem> <DropdownMenuItem onCl`
- [218:17] (JSXText) Static JSX text node: `Focus Mode`
  - context: `e('focus')}> <Focus className="h-4 w-4 mr-2" /> Focus Mode </DropdownMenuItem> <DropdownMenuItem onC`
- [222:17] (JSXText) Static JSX text node: `Comparison`
  - context: `arison')}> <Columns className="h-4 w-4 mr-2" /> Comparison </DropdownMenuItem> </DropdownMenuContent>`
- [229:62] (JSXAttribute) Static aria-label attribute: `View options`
  - context: `nuTrigger asChild> <Button variant="outline" size="sm" aria-label="View options" title="View options"> <Settings className="h-4 w-`
- [229:83] (JSXAttribute) Static title attribute: `View options`
  - context: `<Button variant="outline" size="sm" aria-label="View options" title="View options"> <Settings className="h-4 w-4 mr-2" />`
- [231:17] (JSXText) Static JSX text node: `View`
  - context: `options"> <Settings className="h-4 w-4 mr-2" /> View </Button> </DropdownMenuTrigger> <Dro`
- [241:97] (JSXText) Static JSX text node: `2D: Emotional energy vs Sensory load (XY)`
  - context: `<DropdownMenuItem onClick={() => visualizationState.setProjectionPlane('xy')}>2D: Emotional energy vs Sensory load (XY)</DropdownMenuItem> <`
- [242:97] (JSXText) Static JSX text node: `2D: Emotional energy vs Time (XZ)`
  - context: `<DropdownMenuItem onClick={() => visualizationState.setProjectionPlane('xz')}>2D: Emotional energy vs Time (XZ)</DropdownMenuItem> <Dropdown`
- [243:97] (JSXText) Static JSX text node: `2D: Sensory load vs Time (YZ)`
  - context: `<DropdownMenuItem onClick={() => visualizationState.setProjectionPlane('yz')}>2D: Sensory load vs Time (YZ)</DropdownMenuItem> </>`
- [256:17] (JSXText) Static JSX text node: `Picture-in-Picture`
  - context: `<PictureInPicture2 className="h-4 w-4 mr-2" /> Picture-in-Picture </DropdownMenuItem> <DropdownMenu`
- [263:17] (JSXText) Static JSX text node: `Clear Highlights`
  - context: `}}> <RefreshCw className="h-4 w-4 mr-2" /> Clear Highlights </DropdownMenuItem> </DropdownMenuCon`
- [270:85] (JSXAttribute) Static aria-label attribute: `Export analytics`
  - context: `<Button variant="outline" size="sm" disabled={isExporting} aria-label="Export analytics" title="Export analytics"> <Download className`
- [270:110] (JSXAttribute) Static title attribute: `Export analytics`
  - context: `="outline" size="sm" disabled={isExporting} aria-label="Export analytics" title="Export analytics"> <Download className="h-4 w-4 mr-2" />`
- [281:17] (JSXText) Static JSX text node: `Export as PDF`
  - context: `> <FileText className="h-4 w-4 mr-2" /> Export as PDF </DropdownMenuItem> <DropdownMenuItem`
- [288:17] (JSXText) Static JSX text node: `Export as CSV`
  - context: `> <FileSpreadsheet className="h-4 w-4 mr-2" /> Export as CSV </DropdownMenuItem> <DropdownMenuItem`
- [295:17] (JSXText) Static JSX text node: `Export as JSON`
  - context: `> <FileJson className="h-4 w-4 mr-2" /> Export as JSON </DropdownMenuItem> </DropdownMenuConte`
- [304:52] (JSXText) Static JSX text node: `Chart Type`
  - context: `<div className="space-y-2"> <label className="text-sm font-medium">Chart Type</label> <Select value={selectedChartType} onValueChange={`
- [310:42] (JSXText) Static JSX text node: `Line Chart`
  - context: `Trigger> <SelectContent> <SelectItem value="line">Line Chart</SelectItem> <SelectItem value="area">Area Chart</Sel`
- [311:42] (JSXText) Static JSX text node: `Area Chart`
  - context: `m value="line">Line Chart</SelectItem> <SelectItem value="area">Area Chart</SelectItem> <SelectItem value="scatter">Scatter Plot`
- [312:45] (JSXText) Static JSX text node: `Scatter Plot`
  - context: `alue="area">Area Chart</SelectItem> <SelectItem value="scatter">Scatter Plot</SelectItem> <SelectItem value="composed">Combined<`
- [313:46] (JSXText) Static JSX text node: `Combined`
  - context: `scatter">Scatter Plot</SelectItem> <SelectItem value="composed">Combined</SelectItem> </SelectContent> </Select>`
- [319:52] (JSXText) Static JSX text node: `Select Emotions`
  - context: `<div className="space-y-2"> <label className="text-sm font-medium">Select Emotions</label> <div className="grid grid-cols-2 gap-2 w-64`
- [343:52] (JSXText) Static JSX text node: `Time Range`
  - context: `<div className="space-y-2"> <label className="text-sm font-medium">Time Range</label> <Select value={selectedTimeRange} onValueChange={`
- [349:40] (JSXText) Static JSX text node: `Last 7 days`
  - context: `ctTrigger> <SelectContent> <SelectItem value="7d">Last 7 days</SelectItem> <SelectItem value="30d">Last 30 days</S`
- [350:41] (JSXText) Static JSX text node: `Last 30 days`
  - context: `tem value="7d">Last 7 days</SelectItem> <SelectItem value="30d">Last 30 days</SelectItem> <SelectItem value="90d">Last 90 days</`
- [351:41] (JSXText) Static JSX text node: `Last 90 days`
  - context: `m value="30d">Last 30 days</SelectItem> <SelectItem value="90d">Last 90 days</SelectItem> <SelectItem value="all">All time</Sele`
- [352:41] (JSXText) Static JSX text node: `All time`
  - context: `m value="90d">Last 90 days</SelectItem> <SelectItem value="all">All time</SelectItem> </SelectContent> </Select>`
- [357:68] (JSXAttribute) Static aria-label attribute: `Data counts`
  - context: `</div> <div className="flex items-center gap-2 mt-8" aria-label="Data counts"> <Badge variant="outline" className="bg-green-50 text-`
- [359:46] (JSXText) Static JSX text node: `emotions`
  - context: `text-green-700 border-green-200"> {filteredData.emotions.length} emotions </Badge> <Badge variant="outline" className="bg`
- [362:51] (JSXText) Static JSX text node: `sensory inputs`
  - context: `xt-blue-700 border-blue-200"> {filteredData.sensoryInputs.length} sensory inputs </Badge> <Badge variant="outline" classNa`
- [365:53] (JSXText) Static JSX text node: `sessions`
  - context: `ple-700 border-purple-200"> {filteredData.trackingEntries.length} sessions </Badge> {filterCriteria.realtime && (`
- [369:45] (JSXText) Static JSX text node: `new`
  - context: `default" className="bg-orange-500"> {realtimeData.newDataCount} new </Badge> )} </div> </div>`

### src/components/analysis/CorrelationHeatmap.tsx

- [25:14] (JSXText) Static JSX text node: `Insufficient data for correlation analysis`
  - context: `<BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>Insufficient data for correlation analysis</p> <p className="text-sm">`
- [26:34] (JSXText) Static JSX text node: `At least 10 tracking entries needed`
  - context: `Insufficient data for correlation analysis</p> <p className="text-sm">At least 10 tracking entries needed</p> <div className="mt-3 flex item`
- [31:26] (JSXAttribute) Static aria-label attribute: `Retry correlation analysis`
  - context: `size="sm" variant="outline" aria-label="Retry correlation analysis" title="Retry correlation analysis"`
- [32:21] (JSXAttribute) Static title attribute: `Retry correlation analysis`
  - context: `line" aria-label="Retry correlation analysis" title="Retry correlation analysis" onClick={onRetry} >`
- [35:15] (JSXText) Static JSX text node: `Retry`
  - context: `rrelation analysis" onClick={onRetry} > Retry </Button> <Button size="sm"`
- [40:26] (JSXAttribute) Static aria-label attribute: `Show all time range`
  - context: `size="sm" variant="ghost" aria-label="Show all time range" title="Show all time range" on`
- [41:21] (JSXAttribute) Static title attribute: `Show all time range`
  - context: `iant="ghost" aria-label="Show all time range" title="Show all time range" onClick={onShowAllTime} >`
- [44:15] (JSXText) Static JSX text node: `Show all time`
  - context: `l time range" onClick={onShowAllTime} > Show all time </Button> </div> </div> </div>`

### src/components/analysis/PatternAnalysisView.tsx

- [68:23] (JSXAttribute) Static aria-label attribute: `Loading chart data`
  - context: `border-red-200'; }; if (isAnalyzing) { return ( <div aria-label="Loading chart data" className="h-[400px] w-full"> <div className="h-ful`
- [79:14] (JSXText) Static JSX text node: `No patterns detected yet`
  - context: `"> <Zap className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>No patterns detected yet</p> <p className="text-sm">Need more data for`
- [80:34] (JSXText) Static JSX text node: `Need more data for pattern analysis`
  - context: `" /> <p>No patterns detected yet</p> <p className="text-sm">Need more data for pattern analysis</p> </div> </div> ); }`
- [92:13] (JSXText) Static JSX text node: `Detected Patterns (`
  - context: `lex items-center gap-2"> <Target className="h-5 w-5" /> Detected Patterns ({patterns.length}) </h3> <div className="`
- [109:79] (JSXText) Static JSX text node: `Pattern`
  - context: `> <h4 className="font-medium capitalize">{pattern.type} Pattern</h4> <Badge className={getConfidenceColor(patter`
- [111:65] (JSXText) Static JSX text node: `% confident`
  - context: `n.confidence)}> {Math.round(pattern.confidence * 100)}% confident </Badge> </div>`
- [115:25] (JSXText) Static JSX text node: `Frequency:`
  - context: `<p className="text-sm text-muted-foreground mb-2"> Frequency: {pattern.frequency} occurrences </p>`
- [115:56] (JSXText) Static JSX text node: `occurrences`
  - context: `-muted-foreground mb-2"> Frequency: {pattern.frequency} occurrences </p> {(pattern.recommend`
- [119:62] (JSXText) Static JSX text node: `Recommendations:`
  - context: `sName="space-y-1"> <p className="text-sm font-medium">Recommendations:</p> {(pattern.recommendations ?? []).`
- [141:13] (JSXText) Static JSX text node: `Predictive Insights (`
  - context: `items-center gap-2"> <TrendingUp className="h-5 w-5" /> Predictive Insights ({predictiveInsights.length}) </h3> <div`
- [161:65] (JSXText) Static JSX text node: `% confidence`
  - context: `iant="outline"> {Math.round(insight.confidence * 100)}% confidence </Badge> </div>`
- [171:67] (JSXText) Static JSX text node: `Prediction:`
  - context: `sName="mb-2"> <p className="text-sm font-medium mb-1">Prediction:</p> <div className="flex items-center gap-`
- [195:62] (JSXText) Static JSX text node: `Recommendations:`
  - context: `sName="space-y-1"> <p className="text-sm font-medium">Recommendations:</p> {insight.recommendations.slice(0,`
- [209:29] (JSXText) Static JSX text node: `Severity:`
  - context: `<Shield className="h-3 w-3" /> Severity: <span className="font-medium capitalize">{insight.severity}</span>`
- [226:13] (JSXText) Static JSX text node: `Detected Anomalies (`
  - context: `ms-center gap-2"> <AlertTriangle className="h-5 w-5" /> Detected Anomalies ({anomalies.length}) </h3> <div className`
- [242:71] (JSXText) Static JSX text node: `Anomaly`
  - context: `"flex-1"> <h4 className="font-medium mb-1">{anomaly.type} Anomaly</h4> <p className="text-sm text-muted-foreground m`
- [244:25] (JSXText) Static JSX text node: `Severity:`
  - context: `<p className="text-sm text-muted-foreground mb-2"> Severity: <span className="font-medium capitalize">{anomaly.severity}</span>`

### src/components/charts/EChartContainer.tsx

- [336:22] (MessageAPI) Message API call: error(): `[EChartContainer] Option normalization failed`
  - context: `tion; } catch (e) { if (import.meta?.env?.DEV) { logger.error("[EChartContainer] Option normalization failed", { error: e }); } re`
- [449:22] (MessageAPI) Message API call: error(): `[EChartContainer] Theme merge failed`
  - context: `tion; } catch (e) { if (import.meta?.env?.DEV) { logger.error("[EChartContainer] Theme merge failed", { error: e, optionP`

### src/components/charts/TrendsChart.tsx

- [34:16] (JSXText) Static JSX text node: `No data available for selected time range`
  - context: `<Activity className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>No data available for selected time range</p> <p className="text-xs`
- [35:41] (JSXText) Static JSX text node: `Try expanding the time range or adjusting filters`
  - context: `a available for selected time range</p> <p className="text-xs mt-1">Try expanding the time range or adjusting filters</p> </div> <`
- [77:18] (MessageAPI) Message API call: error(): `TrendsChart.renderChart failed`
  - context: `ontainer option={option} height={400} />; } catch (error) { logger.error("TrendsChart.renderChart failed", { error }); return ( <div className=`
- [82:14] (JSXText) Static JSX text node: `Could not render chart`
  - context: `<Activity className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>Could not render chart</p> <p className="text-xs mt-1">An internal err`
- [83:39] (JSXText) Static JSX text node: `An internal error occurred while building the chart`
  - context: `> <p>Could not render chart</p> <p className="text-xs mt-1">An internal error occurred while building the chart</p> </div> </d`

### src/components/layouts/DashboardLayout.tsx

- [40:64] (JSXAttribute) Static aria-label attribute: `Visualization tabs`
  - context: `ssName="w-full"> <TabsList className="grid w-full grid-cols-5" aria-label="Visualization tabs"> <TabsTrigger value="trends" className="flex items-`
- [43:11] (JSXText) Static JSX text node: `Trends`
  - context: `lex items-center gap-2"> <TrendingUp className="h-4 w-4" /> Trends </TabsTrigger> <TabsTrigger value="correlations" classNam`
- [47:11] (JSXText) Static JSX text node: `Correlations`
  - context: `e="flex items-center gap-2"> <Target className="h-4 w-4" /> Correlations </TabsTrigger> <TabsTrigger value="patterns" classN`
- [51:11] (JSXText) Static JSX text node: `Patterns`
  - context: `Name="flex items-center gap-2"> <Zap className="h-4 w-4" /> Patterns </TabsTrigger> <TabsTrigger value="3d" className="flex`
- [55:11] (JSXText) Static JSX text node: `3D View`
  - context: `Name="flex items-center gap-2"> <Eye className="h-4 w-4" /> 3D View </TabsTrigger> <TabsTrigger value="timeline" className="`
- [59:11] (JSXText) Static JSX text node: `Timeline`
  - context: `me="flex items-center gap-2"> <Clock className="h-4 w-4" /> Timeline </TabsTrigger> </TabsList> <TabsContent value="tre`
- [70:76] (JSXText) Static JSX text node: `Avg Emotion Intensity`
  - context: `div> <p className="text-sm font-medium text-muted-foreground">Avg Emotion Intensity</p> <p className="text-2xl font-bold">`
- [86:76] (JSXText) Static JSX text node: `Positive Emotion Rate`
  - context: `div> <p className="text-sm font-medium text-muted-foreground">Positive Emotion Rate</p> <p className="text-2xl font-bold">`
- [104:76] (JSXText) Static JSX text node: `Sensory Seeking Rate`
  - context: `div> <p className="text-sm font-medium text-muted-foreground">Sensory Seeking Rate</p> <p className="text-2xl font-bold">`
- [126:26] (JSXText) Static JSX text node: `Significant Correlations`
  - context: `gth > 0 && ( <Card> <CardHeader> <CardTitle>Significant Correlations</CardTitle> </CardHeader> <Card`
- [134:107] (JSXText) Static JSX text node: `↔`
  - context: `air.factor1.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} ↔{' '} {pair.factor2.replace(/([A-Z])/g, ' $1').replace(`
- [138:74] (JSXText) Static JSX text node: `correlation (r =`
  - context: `ound"> {pair.correlation > 0 ? 'Positive' : 'Negative'} correlation (r = {pair.correlation.toFixed(3)}) </p>`

### src/components/layouts/VisualizationLayouts.tsx

- [21:36] (JSXText) Static JSX text node: `Select visualizations to display`
  - context: `sName="h-16 w-16 mx-auto mb-4 opacity-50" /> <p className="text-lg">Select visualizations to display</p> <p className="text-sm">Choose f`
- [22:36] (JSXText) Static JSX text node: `Choose from the options above`
  - context: `ext-lg">Select visualizations to display</p> <p className="text-sm">Choose from the options above</p> </div> </CardContent>`
- [49:36] (JSXText) Static JSX text node: `Select a visualization to focus on`
  - context: `sName="h-16 w-16 mx-auto mb-4 opacity-50" /> <p className="text-lg">Select a visualization to focus on</p> <p className="text-sm">Choose`
- [50:36] (JSXText) Static JSX text node: `Choose from the options above`
  - context: `t-lg">Select a visualization to focus on</p> <p className="text-sm">Choose from the options above</p> </div> </CardContent>`

### src/components/lazy/LazyInteractiveDataVisualization.tsx

- [12:9] (JSXText) Static JSX text node: `Loading Interactive Visualization...`
  - context: `s-center gap-2"> <Activity className="h-5 w-5 animate-pulse" /> Loading Interactive Visualization... </CardTitle> </CardHeader> <C`
- [39:9] (JSXText) Static JSX text node: `Failed to load Interactive Visualization`
  - context: `er gap-2 text-destructive"> <AlertCircle className="h-5 w-5" /> Failed to load Interactive Visualization </CardTitle> </CardHeader>`
- [44:9] (JSXText) Static JSX text node: `The interactive data visualization component could not be loaded. 
        This might be due to missing dependencies or a temporary loading issue.`
  - context: `> <CardContent> <p className="text-sm text-muted-foreground"> The interactive data visualization component could not be loaded. This`
- [48:9] (JSXText) Static JSX text node: `Please refresh the page or contact support if the issue persists.`
  - context: `ue. </p> <p className="text-sm text-muted-foreground mt-2"> Please refresh the page or contact support if the issue persists. </p>`

### src/components/lazy/LazyLoadWrapper.tsx

- [20:56] (JSXText) Static JSX text node: `Loading component...`
  - context: `to mb-4 text-primary" /> <p className="text-sm text-muted-foreground">Loading component...</p> </div> </div> <div className="space`
- [36:53] (JSXText) Static JSX text node: `Failed to load component`
  - context: `iv className="text-center"> <p className="text-destructive font-medium">Failed to load component</p> <p className="text-sm text-muted-foreground`
- [38:11] (JSXText) Static JSX text node: `Please refresh the page or try again later.`
  - context: `ponent</p> <p className="text-sm text-muted-foreground mt-2"> Please refresh the page or try again later. </p> </div> </Card`
- [80:18] (MessageAPI) Message API call: error(): `LazyLoadWrapper Error:`
  - context: `componentDidCatch(error: Error, errorInfo: React.ErrorInfo) { logger.error('LazyLoadWrapper Error:', error, errorInfo); } render() { if (this.stat`

### src/components/lazy/LazyReportBuilder.tsx

- [11:9] (JSXText) Static JSX text node: `Loading Report Builder...`
  - context: `s-center gap-2"> <FileText className="h-5 w-5 animate-pulse" /> Loading Report Builder... </CardTitle> </CardHeader> <CardContent`

### src/components/profile-sections/AnalyticsSection.tsx

- [62:18] (JSXText) Static JSX text node: `Analytics data is not available`
  - context: `<AlertCircle className="h-8 w-8 mx-auto mb-2" /> <p>Analytics data is not available</p> <p className="text-sm mt-2">`
- [64:17] (JSXText) Static JSX text node: `The required data for this section is missing or still loading. Please try again later.`
  - context: `is not available</p> <p className="text-sm mt-2"> The required data for this section is missing or still loading. Please try again`
- [94:44] (JSXText) Static JSX text node: `Dataanalyse`
  - context: `6"> {/* Header */} <div> <h2 className="text-2xl font-bold">Dataanalyse</h2> <p className="text-muted-foreground"> Avanser`
- [96:11] (JSXText) Static JSX text node: `Avansert analyse av`
  - context: `-bold">Dataanalyse</h2> <p className="text-muted-foreground"> Avansert analyse av {student.name}s mønstre og trender </p> </div>`
- [96:45] (JSXText) Static JSX text node: `s mønstre og trender`
  - context: `className="text-muted-foreground"> Avansert analyse av {student.name}s mønstre og trender </p> </div> {/* Systemforklaring (Norw`
- [103:22] (JSXText) Static JSX text node: `Systemforklaring`
  - context: `"bg-card/60 border border-border/60"> <CardHeader> <CardTitle>Systemforklaring</CardTitle> </CardHeader> <CardContent classNam`
- [107:13] (JSXText) Static JSX text node: `Denne siden sammenfatter elevens data for å gi et oversiktlig bilde av
            emosjoner, sanseinntrykk og miljøfaktorer over tid. Systemet bruker
            statistiske metoder for å finne mønstre, beregne korrelasjoner og gi
            anbefalinger. Korrelasjonskartet (varmekart) viser styrken på
            sammenhenger mellom faktorer fra −1 (sterk negativ) til 1 (sterk
            positiv). Bare tydeligere sammenhenger merkes med tall for å holde
            visningen ryddig.`
  - context: `e-y-3 text-sm leading-relaxed text-muted-foreground"> <p> Denne siden sammenfatter elevens data for å gi et oversiktlig bilde av`
- [116:13] (JSXText) Static JSX text node: `Innsiktene genereres lokalt i nettleseren og tunge beregninger kjøres i en
            web‑arbeider for å bevare ytelse. Ingen persondata sendes til en server.
            Resultatene bør tolkes som støtte for faglig vurdering, ikke som fasit.`
  - context: `å holde visningen ryddig. </p> <p> Innsiktene genereres lokalt i nettleseren og tunge beregninger kjøres i en`
- [121:13] (JSXText) Static JSX text node: `Tips: Hold musepekeren over celler i varmekartet for detaljer som
            korrelasjonsverdi og signifikans. Bruk filtrene over diagrammene for
            å justere tidsrom og se hvordan mønstrene endrer seg.`
  - context: `</p> <p className="text-xs text-muted-foreground/80"> Tips: Hold musepekeren over celler i varmekartet for detaljer som ko`
- [141:13] (JSXText) Static JSX text node: `Analysetillit og datakvalitet`
  - context: `tems-center gap-2"> <AlertCircle className="h-5 w-5" /> Analysetillit og datakvalitet </CardTitle> </CardHeader>`
- [166:13] (JSXText) Static JSX text node: `Interaktiv datavisualisering`
  - context: `items-center gap-2"> <BarChart3 className="h-5 w-5" /> Interaktiv datavisualisering </CardTitle> </CardHeader>`
- [187:16] (JSXText) Static JSX text node: `Laster innsikter...`
  - context: `p-2"> <Loader className="h-5 w-5 animate-spin" /> Laster innsikter... </CardTitle> </CardHeader>`
- [191:51] (JSXText) Static JSX text node: `Analyserer data...`
  - context: `items-center justify-center"> <p className="text-muted-foreground">Analyserer data...</p> </CardContent> </Card> ) : insi`
- [199:15] (JSXText) Static JSX text node: `Detaljerte innsikter`
  - context: `s-center gap-2"> <TrendingUp className="h-5 w-5" /> Detaljerte innsikter </CardTitle> </CardHeader>`
- [206:54] (JSXText) Static JSX text node: `Oppdagede mønstre:`
  - context: `&& ( <div> <h4 className="font-semibold mb-2">Oppdagede mønstre:</h4> <div className="space-y-2">`
- [213:74] (JSXText) Static JSX text node: `% sikkerhet`
  - context: `nded"> {Math.round((pattern.confidence || 0) * 100)}% sikkerhet </span> </div>`
- [219:69] (JSXText) Static JSX text node: `Anbefalinger:`
  - context: `ame="mt-2"> <p className="text-xs font-medium mb-1">Anbefalinger:</p> <ul className="text-xs text-muted-`
- [222:45] (JSXText) Static JSX text node: `•`
  - context: `).map((rec: string, i: number) => ( <li key={i}>• {rec}</li> ))} </ul>`
- [235:54] (JSXText) Static JSX text node: `Korrelasjoner:`
  - context: `&& ( <div> <h4 className="font-semibold mb-2">Korrelasjoner:</h4> <div className="space-y-2">`
- [240:84] (JSXText) Static JSX text node: `↔`
  - context: `<p className="text-sm font-medium">{correlation.factor1} ↔ {correlation.factor2}</p> <span className="text-xs p`
- [242:29] (JSXText) Static JSX text node: `r =`
  - context: `xs px-2 py-1 bg-blue-500/20 text-blue-600 rounded"> r = {correlation.correlation?.toFixed(2) || 'N/A'} </s`

### src/components/profile-sections/DashboardSection.tsx

- [86:46] (JSXText) Static JSX text node: `Oversikt`
  - context: `er justify-between"> <div> <h2 className="text-2xl font-bold">Oversikt</h2> <p className="text-muted-foreground"> Sammen`
- [88:13] (JSXText) Static JSX text node: `Sammendrag av`
  - context: `bold">Oversikt</h2> <p className="text-muted-foreground"> Sammendrag av {student.name}s data og aktivitet </p> </div>`
- [88:41] (JSXText) Static JSX text node: `s data og aktivitet`
  - context: `<p className="text-muted-foreground"> Sammendrag av {student.name}s data og aktivitet </p> </div> <Button onCl`
- [105:13] (JSXText) Static JSX text node: `Analysestatus`
  - context: `items-center gap-2"> <BarChart3 className="h-5 w-5" /> Analysestatus </CardTitle> </CardHeader> <CardContent>`
- [179:13] (JSXText) Static JSX text node: `Datakvalitet`
  - context: `"flex items-center gap-2"> <Info className="h-5 w-5" /> Datakvalitet </CardTitle> </CardHeader> <CardContent>`
- [185:60] (JSXText) Static JSX text node: `Samlet kvalitetsscore`
  - context: `"> <div> <p className="text-sm text-muted-foreground">Samlet kvalitetsscore</p> <p className="text-3xl font-bold">{dataQ`
- [246:15] (JSXText) Static JSX text node: `AI-genererte innsikter`
  - context: `"> <TrendingUp className="h-5 w-5 animate-pulse" /> AI-genererte innsikter </CardTitle> </CardHeader>`
- [261:15] (JSXText) Static JSX text node: `AI-genererte innsikter`
  - context: `s-center gap-2"> <TrendingUp className="h-5 w-5" /> AI-genererte innsikter </CardTitle> </CardHeader>`
- [279:54] (JSXText) Static JSX text node: `Nylige økter`
  - context: `gth > 0 && ( <div> <h3 className="text-lg font-semibold mb-4">Nylige økter</h3> <PaginatedSessionsList sessions={filteredData.entrie`

### src/components/profile-sections/ToolsSection.tsx

- [90:44] (JSXText) Static JSX text node: `Verktøy`
  - context: `6"> {/* Header */} <div> <h2 className="text-2xl font-bold">Verktøy</h2> <p className="text-muted-foreground"> Avanserte v`
- [92:11] (JSXText) Static JSX text node: `Avanserte verktøy for søk, maler og sammenligning`
  - context: `font-bold">Verktøy</h2> <p className="text-muted-foreground"> Avanserte verktøy for søk, maler og sammenligning </p> </div>`

### src/components/ui/PremiumStudentCard.tsx

- [52:19] (MessageAPI) Message API call: error(): `Failed to delete student`
  - context: `e) { onDelete(student); } } catch (error) { toast.error('Failed to delete student', { description: error instanceof Error ? erro`
- [52:19] (MessageAPI) sonner toast.error(): `Failed to delete student`
  - context: `e) { onDelete(student); } } catch (error) { toast.error('Failed to delete student', { description: error instanceof Error ? erro`
- [169:63] (JSXText) Static JSX text node: `Datainnsamling`
  - context: `fy-between mb-2"> <span className="text-xs text-muted-foreground">Datainnsamling</span> <span className="text-xs font-medium text-pr`
- [182:62] (JSXText) Static JSX text node: `Denne uken`
  - context: `iesThisWeek}</div> <div className="text-xs text-muted-foreground">Denne uken</div> </div> <div className="text-center p-2`
- [186:62] (JSXText) Static JSX text node: `Sist sporet`
  - context: `TrackedText}</div> <div className="text-xs text-muted-foreground">Sist sporet</div> </div> </div> {/* Action Butt`
- [231:37] (JSXText) Static JSX text node: `Delete Student`
  - context: `ontent> <AlertDialogHeader> <AlertDialogTitle>Delete Student</AlertDialogTitle> <AlertDialogDescription>`
- [233:21] (JSXText) Static JSX text node: `Are you sure you want to delete`
  - context: `lertDialogTitle> <AlertDialogDescription> Are you sure you want to delete {student.name}? This will permanently delete all`
- [233:67] (JSXText) Static JSX text node: `? This will permanently delete all their tracking data, goals, and associated records. This action cannot be undone.`
  - context: `gDescription> Are you sure you want to delete {student.name}? This will permanently delete all their tracking data, goals, and associated re`
- [237:38] (JSXText) Static JSX text node: `Cancel`
  - context: `eader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction`
- [243:21] (JSXText) Static JSX text node: `Delete Student`
  - context: `> <Trash2 className="h-4 w-4 mr-2" /> Delete Student </AlertDialogAction> </AlertDia`

### src/components/ui/StudentCard.tsx

- [31:17] (JSXText) Static JSX text node: `Grade`
  - context: `&& ( <Badge variant="secondary" className="mt-1"> Grade {student.grade} </Badge> )} </div>`
- [41:17] (JSXText) Static JSX text node: `Added`
  - context: `t-muted-foreground"> <Calendar className="h-4 w-4" /> <span>Added {student.createdAt.toLocaleDateString()}</span> </div> <d`
- [52:13] (JSXText) Static JSX text node: `View Profile`
  - context: `exia" > <FileText className="h-4 w-4 mr-2" /> View Profile </Button> <Button size="sm"`
- [60:13] (JSXText) Static JSX text node: `Track Now`
  - context: `90" > <TrendingUp className="h-4 w-4 mr-2" /> Track Now </Button> </div> </CardContent> </Card>`

### src/components/ui/date-range-picker.tsx

- [68:21] (JSXText) Static JSX text node: `Pick a date range`
  - context: `t(date.from, "LLL dd, y") ) ) : ( <span>Pick a date range</span> )} </Button> </PopoverTri`

### src/components/ui/dialog.tsx

- [47:35] (JSXText) Static JSX text node: `Close`
  - context: `oreground"> <X className="h-4 w-4" /> <span className="sr-only">Close</span> </DialogPrimitive.Close> </DialogPrimitive.Content> </D`

### src/components/ui/sheet.tsx

- [68:35] (JSXText) Static JSX text node: `Close`
  - context: `secondary"> <X className="h-4 w-4" /> <span className="sr-only">Close</span> </SheetPrimitive.Close> </SheetPrimitive.Content> </She`

### src/components/ui/sidebar.tsx

- [280:33] (JSXText) Static JSX text node: `Toggle Sidebar`
  - context: `}} {...props} > <PanelLeft /> <span className="sr-only">Toggle Sidebar</span> </Button> ) }) SidebarTrigger.displayName = "Sidebar`
- [296:18] (JSXAttribute) Static aria-label attribute: `Toggle Sidebar`
  - context: `return ( <button ref={ref} data-sidebar="rail" aria-label="Toggle Sidebar" tabIndex={-1} onClick={toggleSidebar} title="`
- [299:13] (JSXAttribute) Static title attribute: `Toggle Sidebar`
  - context: `="Toggle Sidebar" tabIndex={-1} onClick={toggleSidebar} title="Toggle Sidebar" className={cn( "absolute inset-y-0 z-20 hidden w-`

### src/hooks/useAnalyticsStatus.ts

- [63:20] (MessageAPI) Message API call: error(): `Error loading analytics status:`
  - context: `setAnalyticsStatus(status); } } catch (error) { logger.error('Error loading analytics status:', error); setAnalyticsStatus([]); } f`
- [93:20] (MessageAPI) Message API call: error(): `Error triggering analytics:`
  - context: `s(); } await loadStatus(); } catch (error) { logger.error('Error triggering analytics:', error); } }, [loadStatus]); useEffect(()`

### src/hooks/useAnalyticsWorker.ts

- [134:24] (MessageAPI) Message API call: error(): `[useAnalyticsWorker] Worker error`
  - context: `return; } if (msg.type === 'error') { logger.error('[useAnalyticsWorker] Worker error', msg.error); setError(msg.error ||`
- [197:22] (MessageAPI) Message API call: error(): `[useAnalyticsWorker] Worker runtime error, switching to fallback`
  - context: `ures worker.onerror = async (error: ErrorEvent) => { logger.error('[useAnalyticsWorker] Worker runtime error, switching to fallback', error);`
- [219:19] (MessageAPI) Message API call: info(): `[useAnalyticsWorker] Analytics worker initialized successfully`
  - context: `back // since workerRef.current is now null }; logger.info('[useAnalyticsWorker] Analytics worker initialized successfully'); } catch (`
- [222:20] (MessageAPI) Message API call: error(): `[useAnalyticsWorker] Failed to initialize worker`
  - context: `// If worker initialization fails, log and use fallback mode logger.error('[useAnalyticsWorker] Failed to initialize worker', error); workerRef.curr`
- [308:22] (MessageAPI) Message API call: error(): `[useAnalyticsWorker] Fallback failed`
  - context: `ache.set(cacheKey, results, tags); } catch (error) { logger.error('[useAnalyticsWorker] Fallback failed', error); setError('Analytics proc`
- [343:22] (MessageAPI) Message API call: error(): `[useAnalyticsWorker] watchdog timeout: worker did not respond, attempting fallback`
  - context: `watchdogRef.current = setTimeout(async () => { try { logger.error('[useAnalyticsWorker] watchdog timeout: worker did not respond, attempting fallb`
- [363:22] (MessageAPI) Message API call: error(): `[useAnalyticsWorker] Fallback failed after watchdog timeout`
  - context: `ed using fallback mode.'); } catch (fallbackError) { logger.error('[useAnalyticsWorker] Fallback failed after watchdog timeout', fallbackError);`
- [410:20] (MessageAPI) Message API call: error(): `[WORKER_MESSAGE] Failed to post message to worker, falling back to sync`
  - context: `current.postMessage(messagePayload); } catch (postErr) { logger.error('[WORKER_MESSAGE] Failed to post message to worker, falling back to sync', { err`
- [424:22] (MessageAPI) Message API call: error(): `[useAnalyticsWorker] Fallback processing failed after worker post error`
  - context: `); setError(null); } catch (fallbackError) { logger.error('[useAnalyticsWorker] Fallback processing failed after worker post error', fallb`

### src/hooks/useChartStore.ts

- [52:24] (MessageAPI) Message API call: error(): `setOption failed`
  - context: `{ type: 'chart/setOption', id }); } catch (e) { logger.error('setOption failed', e); } }, setError: (id, error) => {`

### src/hooks/useDataAnalysis.ts

- [57:22] (MessageAPI) Message API call: error(): `Pattern analysis failed in useDataAnalysis hook`
  - context: `rrelationMatrix(matrix); } } catch (error) { logger.error('Pattern analysis failed in useDataAnalysis hook', { error }); } finally {`

### src/hooks/useFilteredData.ts

- [124:20] (MessageAPI) Message API call: error(): `useFilteredData failed`
  - context: `ackingEntries: parsedTracking }; } catch (error) { logger.error("useFilteredData failed", { error }); return { emotions: [], sensoryInputs`

### src/hooks/useMLTrainingWorker.ts

- [71:24] (MessageAPI) Message API call: error(): `Failed to save trained model:`
  - context: `progress: 100 }); } catch (error) { logger.error('Failed to save trained model:', error); setTrainingStatus({`
- [86:20] (MessageAPI) Message API call: error(): `ML training worker error:`
  - context: `}); } }; worker.onerror = (error) => { logger.error('ML training worker error:', error); setTrainingStatus({ isTrainin`

### src/hooks/useProgressiveChartData.ts

- [105:22] (MessageAPI) Message API call: error(): `[useProgressiveChartData] Failed computing emotion distribution`
  - context: `rkStepDone('emotionDistribution'); } catch (error) { logger.error('[useProgressiveChartData] Failed computing emotion distribution', error);`
- [127:24] (MessageAPI) Message API call: error(): `[useProgressiveChartData] Failed computing sensory responses`
  - context: `kStepDone('sensoryResponses'); } catch (error) { logger.error('[useProgressiveChartData] Failed computing sensory responses', error);`
- [165:24] (MessageAPI) Message API call: error(): `[useProgressiveChartData] Failed computing emotion trends`
  - context: `markStepDone('emotionTrends'); } catch (error) { logger.error('[useProgressiveChartData] Failed computing emotion trends', error); s`

### src/hooks/useRealtimeData.ts

- [255:21] (MessageAPI) Message API call: info(): `Real-time data connection would be established here`
  - context: `simulateDataStream, options.updateInterval); } else { logger.info('Real-time data connection would be established here'); } //`

### src/hooks/useStudentData.ts

- [79:20] (MessageAPI) Message API call: error(): `Failed to load student data:`
  - context: `catch (e) { setError('Failed to load student data.'); logger.error('Failed to load student data:', e); } finally { setIsLoading(false);`

### src/lib/alertSystem.ts

- [159:20] (MessageAPI) Message API call: error(): `Error saving alerts:`
  - context: `E_KEY, JSON.stringify(historyToSave)); } catch (error) { logger.error('Error saving alerts:', error); // If we still can't save, try aggressive`
- [173:22] (MessageAPI) Message API call: error(): `Failed to save alerts even after cleanup:`
  - context: `ory, ...newHistoryEntries])); } catch (retryError) { logger.error('Failed to save alerts even after cleanup:', retryError); } } } /`
- [199:20] (MessageAPI) Message API call: error(): `Error loading alerts:`
  - context: `try.resolvedAt) : undefined })); } catch (error) { logger.error('Error loading alerts:', error); return []; } } /** * Retrieve`
- [247:20] (MessageAPI) Message API call: error(): `Error marking alert as viewed:`
  - context: `E_KEY, JSON.stringify(updatedAlerts)); } catch (error) { logger.error('Error marking alert as viewed:', error); } } /** * Resolves a speci`
- [274:20] (MessageAPI) Message API call: error(): `Error resolving alert:`
  - context: `E_KEY, JSON.stringify(updatedAlerts)); } catch (error) { logger.error('Error resolving alert:', error); } } /** * Deletes a specific alert`
- [289:20] (MessageAPI) Message API call: error(): `Error deleting alert:`
  - context: `_KEY, JSON.stringify(filteredAlerts)); } catch (error) { logger.error('Error deleting alert:', error); } } /** * Retrieves the current ale`
- [305:20] (MessageAPI) Message API call: error(): `Error loading alert settings:`
  - context: `aultSettings, ...JSON.parse(stored) }; } catch (error) { logger.error('Error loading alert settings:', error); return this.defaultSettings;`
- [321:20] (MessageAPI) Message API call: error(): `Error updating alert settings:`
  - context: `KEY, JSON.stringify(updatedSettings)); } catch (error) { logger.error('Error updating alert settings:', error); } } /** * Provides a summa`
- [381:20] (MessageAPI) Message API call: error(): `Error cleaning up old alerts:`
  - context: `- filteredAlerts.length} old alerts\`); } catch (error) { logger.error('Error cleaning up old alerts:', error); } } /** * Exports alerts to`

### src/lib/analyticsConfig.ts

- [372:20] (MessageAPI) Message API call: error(): `Failed to import configuration:`
  - context: `onfig structure'); return false; } catch (error) { logger.error('Failed to import configuration:', error); return false; } } priv`
- [391:20] (MessageAPI) Message API call: error(): `Failed to load analytics configuration:`
  - context: `return parsed; } } } catch (error) { logger.error('Failed to load analytics configuration:', error); } return { ...DEFAULT`
- [426:20] (MessageAPI) Message API call: error(): `Failed to save analytics configuration:`
  - context: `(${configStr.length} bytes)\`); } } catch (error) { logger.error('Failed to save analytics configuration:', error); } } /** * Debou`

### src/lib/analyticsConfigOverride.ts

- [9:15] (MessageAPI) Message API call: info(): `Applying development analytics configuration for better pattern detection`
  - context: `less data */ export function applyDevelopmentAnalyticsConfig() { logger.info('Applying development analytics configuration for better pattern detection');`
- [70:18] (MessageAPI) Message API call: error(): `Failed to apply development analytics config (non-fatal):`
  - context: `ANALYSIS_PERIOD_DAYS: 30, }, }); } catch (error) { logger.error('Failed to apply development analytics config (non-fatal):', error); } } // A`

### src/lib/analyticsExport.ts

- [261:24] (MessageAPI) Message API call: error(): `Error adding chart to PDF:`
  - context: `urrentY, imgWidth, imgHeight); } catch (error) { logger.error('Error adding chart to PDF:', error); } } } // Save the P`

### src/lib/analyticsManager.ts

- [53:24] (MessageAPI) Message API call: error(): `[analyticsManager] mock data seed failed`
  - context: `rackingEntry(entry); } } catch (err) { logger.error('[analyticsManager] mock data seed failed', { error: err }); } }`
- [99:18] (MessageAPI) Message API call: error(): `[analyticsManager] ensureUniversalAnalyticsInitialization failed`
  - context: `{ /* noop */ } } } } catch (e) { logger.error('[analyticsManager] ensureUniversalAnalyticsInitialization failed', e); } };`
- [190:18] (MessageAPI) Message API call: error(): `Error loading analytics profiles:`
  - context: `zedAt) : null, }); } }); } catch (error) { logger.error("Error loading analytics profiles:", error); } return profiles; } /** * Ca`
- [466:20] (MessageAPI) Message API call: error(): `[analyticsManager] initializeStudentAnalytics failed`
  - context: `); this.saveAnalyticsProfiles(); } catch (error) { logger.error('[analyticsManager] initializeStudentAnalytics failed', { error, studentId });`
- [669:20] (MessageAPI) Message API call: error(): `[analyticsManager] triggerAnalyticsForStudent failed`
  - context: `ait this.getStudentAnalytics(student); } catch (error) { logger.error('[analyticsManager] triggerAnalyticsForStudent failed', { error, studentId: stud`
- [741:20] (MessageAPI) Message API call: error(): `Error saving analytics profiles:`
  - context: `files', JSON.stringify(data)); } } catch (error) { logger.error('Error saving analytics profiles:', error); // fail-soft } } } expo`

### src/lib/analyticsWorkerFallback.ts

- [51:24] (MessageAPI) Message API call: error(): `Fallback: Error analyzing emotion patterns`
  - context: `patterns.push(...emotionPatterns); } catch (e) { logger.error('Fallback: Error analyzing emotion patterns', e); } } await`
- [62:24] (MessageAPI) Message API call: error(): `Fallback: Error analyzing sensory patterns`
  - context: `patterns.push(...sensoryPatterns); } catch (e) { logger.error('Fallback: Error analyzing sensory patterns', e); } } await`
- [74:24] (MessageAPI) Message API call: error(): `Fallback: Error analyzing correlations`
  - context: `populate environmentalCorrelations } catch (e) { logger.error('Fallback: Error analyzing correlations', e); } } await new`
- [91:24] (MessageAPI) Message API call: error(): `Fallback: Error generating predictive insights`
  - context: `tiveInsights = predictiveInsights; } catch (e) { logger.error('Fallback: Error generating predictive insights', e); } await n`
- [104:24] (MessageAPI) Message API call: error(): `Fallback: Error detecting anomalies`
  - context: `results.anomalies = anomalies; } catch (e) { logger.error('Fallback: Error detecting anomalies', e); } } // Generate`
- [121:20] (MessageAPI) Message API call: error(): `Fallback analytics failed`
  - context: `); } resolve(results); } catch (error) { logger.error('Fallback analytics failed', error); reject(error instanceof Error ? error`

### src/lib/chartUtils.ts

- [125:20] (MessageAPI) Message API call: error(): `Invalid chart data row:`
  - context: `turn ChartEmotionRowSchema.parse(row); } catch (error) { logger.error('Invalid chart data row:', row, error); // Return a safe default if valida`

### src/lib/dataStorage.ts

- [402:20] (MessageAPI) Message API call: error(): `Failed to parse student data from localStorage`
  - context: `}; } return null; } catch (error) { logger.error('Failed to parse student data from localStorage', error); return null;`
- [471:9] (MessageAPI) Message API call: error(): `Failed to parse tracking entries from localStorage`
  - context: `e() - a.timestamp.getTime()); } catch (error) { logger.error( 'Failed to parse tracking entries from localStorage', error );`
- [789:20] (MessageAPI) Message API call: error(): `Error deleting student:`
  - context: `this.saveStorageIndex(); } catch (error) { logger.error('Error deleting student:', error); throw error; } } } // Export sin`

### src/lib/diagnostics.ts

- [119:18] (MessageAPI) Message API call: error(): `[DIAGNOSTIC] Worker Timeout!`
  - context: `timeout: number) { if (!this.diagnosticMode) return; logger.error('[DIAGNOSTIC] Worker Timeout!', { workerName, timeout, timesta`

### src/lib/enhancedPatternAnalysis.ts

- [79:20] (MessageAPI) Message API call: error(): `Failed to initialize ML models:`
  - context: `this.mlModelsInitialized = true; } catch (error) { logger.error('Failed to initialize ML models:', error); this.mlModelsInitialized = fals`
- [157:22] (MessageAPI) Message API call: error(): `ML emotion prediction failed:`
  - context: `}); } } } catch (error) { logger.error('ML emotion prediction failed:', error); } } // Statistical senso`
- [222:22] (MessageAPI) Message API call: error(): `ML sensory prediction failed:`
  - context: `}); } } } catch (error) { logger.error('ML sensory prediction failed:', error); } } // Goal achievement`
- [803:20] (MessageAPI) Message API call: error(): `Baseline clustering failed:`
  - context: `ingEntries, 3); return clusters; } catch (error) { logger.error('Baseline clustering failed:', error); return []; } } } export cons`

### src/lib/errorHandler.ts

- [93:22] (MessageAPI) Message API call: error(): `Error in custom error handler`
  - context: `onError(appError); } catch (callbackError) { logger.error('Error in custom error handler', callbackError); } } // Process e`
- [165:22] (MessageAPI) Message API call: error(): `Critical error occurred`
  - context: `rorType.DATA_CORRUPTED: case ErrorType.UNAUTHORIZED: logger.error('Critical error occurred', logData); break; case ErrorType.NETWORK`
- [172:22] (MessageAPI) Message API call: error(): `Application error`
  - context: `k error occurred', logData); break; default: logger.error('Application error', logData); } } /** * Show user-friendly error to`
- [234:23] (MessageAPI) Message API call: success(): `Issue resolved`
  - context: `ies) { try { await strategy.recover(error); toast.success('Issue resolved', { description: 'The application has recovered from t`
- [234:23] (MessageAPI) sonner toast.success(): `Issue resolved`
  - context: `ies) { try { await strategy.recover(error); toast.success('Issue resolved', { description: 'The application has recovered from t`
- [239:22] (MessageAPI) Message API call: error(): `Recovery strategy failed`
  - context: `}); return true; } catch (recoveryError) { logger.error('Recovery strategy failed', { strategy, originalError: error`

### src/lib/mockDataGenerator.ts

- [55:18] (MessageAPI) Message API call: error(): `Generated invalid emotion entry:`
  - context: `alidateEmotionEntry(entry); if (!validationResult.isValid) { logger.error('Generated invalid emotion entry:', entry, validationResult.errors); throw n`
- [87:18] (MessageAPI) Message API call: error(): `Generated invalid sensory entry:`
  - context: `alidateSensoryEntry(entry); if (!validationResult.isValid) { logger.error('Generated invalid sensory entry:', entry, validationResult.errors); throw n`
- [339:18] (MessageAPI) Message API call: error(): `Failed to load mock data:`
  - context: `aStorage.saveTrackingEntry(entry); }); } catch (error) { logger.error('Failed to load mock data:', error); throw new Error('Failed to initialize m`
- [360:18] (MessageAPI) Message API call: error(): `Failed to clear mock data:`
  - context: `=> dataStorage.saveTrackingEntry(entry)); } catch (error) { logger.error('Failed to clear mock data:', error); throw new Error('Failed to clear mock`

### src/lib/mockDataSeeder.ts

- [59:17] (MessageAPI) Message API call: info(): `Full mock data seeded successfully`
  - context: `to save mock tracking entry: ${entry.id}\`); } } logger.info('Full mock data seeded successfully', { students: studentCount, entries: entryCo`
- [63:18] (MessageAPI) Message API call: error(): `Failed to seed full mock data`
  - context: `ents: studentCount, entries: entryCount }; } catch (error) { logger.error('Failed to seed full mock data', error); throw new Error('Failed to seed ful`
- [165:17] (MessageAPI) Message API call: info(): `Minimal demo data seeded successfully`
  - context: `to save demo tracking entry: ${entry.id}\`); } } logger.info('Minimal demo data seeded successfully', { studentId: finalStudentId,`
- [170:18] (MessageAPI) Message API call: error(): `Failed to seed minimal demo data`
  - context: `entriesCount: entries.length }); } catch (error) { logger.error('Failed to seed minimal demo data', error); throw new Error('Failed to seed`
- [218:17] (MessageAPI) Message API call: info(): `Mock data cleared successfully`
  - context: `es.forEach(entry => dataStorage.saveTrackingEntry(entry)); logger.info('Mock data cleared successfully', { keysRemoved: keysToRemove.length }); } cat`
- [220:18] (MessageAPI) Message API call: error(): `Failed to clear mock data`
  - context: `y', { keysRemoved: keysToRemove.length }); } catch (error) { logger.error('Failed to clear mock data', error); throw new Error('Failed to clear mock d`

### src/lib/storageUtils.ts

- [55:20] (MessageAPI) Message API call: error(): `Error clearing old data:`
  - context: `ON.stringify(filteredAlerts)); } } catch (error) { logger.error('Error clearing old data:', error); } }, /** * Compress data before`
- [98:26] (MessageAPI) Message API call: error(): `storageUtils.safeSetItem failed after cleanup`
  - context: `// If it STILL fails, log and return false logger.error('storageUtils.safeSetItem failed after cleanup', { key, error: finalErr });`
- [104:22] (MessageAPI) Message API call: error(): `storageUtils.safeSetItem failed with non-quota error`
  - context: `} else { // Non-quota error: log and return false logger.error('storageUtils.safeSetItem failed with non-quota error', { key, error: e });`

### src/lib/universalAnalyticsInitializer.ts

- [41:20] (MessageAPI) Message API call: error(): `Error initializing universal analytics:`
  - context: `this.initialized = true; } catch (error) { logger.error('Error initializing universal analytics:', error); } } /** * Ensure`
- [97:92] (MessageAPI) Message API call: error(): `Auto-initialization failed:`
  - context: `alyticsInitializer.initializeUniversalAnalytics().catch((error) => logger.error('Auto-initialization failed:', error));`

### src/lib/utils.ts

- [28:18] (MessageAPI) Message API call: error(): `downloadBlob called in a non-browser environment`
  - context: `f window === 'undefined' || typeof document === 'undefined') { logger.error('downloadBlob called in a non-browser environment'); return; } const sa`
- [46:18] (MessageAPI) Message API call: error(): `downloadBlob failed`
  - context: `lick(); document.body.removeChild(link); } catch (err) { logger.error('downloadBlob failed', err); } finally { if (url) { // Defer revocat`

### src/pages/AddStudent.tsx

- [55:20] (MessageAPI) Message API call: error(): `Error adding student:`
  - context: `dent.success'))); navigate('/'); } catch (error) { logger.error('Error adding student:', error); const errorMessage = error instanceof Err`

### src/pages/Dashboard.tsx

- [42:22] (MessageAPI) Message API call: error(): `Dashboard: Error loading students`
  - context: `(); setStudents(students); } catch (error) { logger.error('Dashboard: Error loading students', { error }); setStudents([]);`
- [121:20] (MessageAPI) Message API call: error(): `Dashboard: Error calculating statistics`
  - context: `tries: entriesTrend } }; } catch (error) { logger.error('Dashboard: Error calculating statistics', { error }); return { todayEntri`
- [171:21] (MessageAPI) Message API call: success(): `Report exported successfully`
  - context: `L] Revoked URL after CSV export', { url: blobUrl }); toast.success('Report exported successfully'); } catch { toast.error('Export failed.`
- [171:21] (MessageAPI) sonner toast.success(): `Report exported successfully`
  - context: `L] Revoked URL after CSV export', { url: blobUrl }); toast.success('Report exported successfully'); } catch { toast.error('Export failed.`
- [173:19] (MessageAPI) Message API call: error(): `Export failed. Please try again.`
  - context: `toast.success('Report exported successfully'); } catch { toast.error('Export failed. Please try again.'); } }; const handleViewStudent = (st`
- [173:19] (MessageAPI) sonner toast.error(): `Export failed. Please try again.`
  - context: `toast.success('Report exported successfully'); } catch { toast.error('Export failed. Please try again.'); } }; const handleViewStudent = (st`
- [192:9] (JSXText) Static JSX text node: `Skip to main content`
  - context: `imary text-primary-foreground px-4 py-2 rounded-md font-medium" > Skip to main content </a> {/* Animated glow background */}`
- [205:17] (JSXText) Static JSX text node: `Sensory`
  - context: `className="text-4xl font-bold tracking-tight text-foreground"> Sensory<span className="text-primary">Tracker</span> - {String(tDashboard('title`
- [205:55] (JSXText) Static JSX text node: `Tracker`
  - context: `g-tight text-foreground"> Sensory<span className="text-primary">Tracker</span> - {String(tDashboard('title')).split(' - ')[1]} </h`
- [214:63] (JSXAttribute) Static title attribute: `Mock Data`
  - context: `gTrigger asChild> <Button variant="outline" size="icon" title="Mock Data" aria-label="Open mock data loader"> <FlaskConica`
- [214:86] (JSXAttribute) Static aria-label attribute: `Open mock data loader`
  - context: `<Button variant="outline" size="icon" title="Mock Data" aria-label="Open mock data loader"> <FlaskConical className="h-4 w-4" /`
- [220:34] (JSXText) Static JSX text node: `Mock Data Loader`
  - context: `="max-w-2xl"> <DialogHeader> <DialogTitle>Mock Data Loader</DialogTitle> </DialogHeader>`
- [227:63] (JSXAttribute) Static title attribute: `Storage Management`
  - context: `gTrigger asChild> <Button variant="outline" size="icon" title="Storage Management" aria-label="Open storage management"> <`
- [227:95] (JSXAttribute) Static aria-label attribute: `Open storage management`
  - context: `<Button variant="outline" size="icon" title="Storage Management" aria-label="Open storage management"> <Database className="h-4 w-4" />`
- [233:34] (JSXText) Static JSX text node: `Storage Management`
  - context: `="max-w-2xl"> <DialogHeader> <DialogTitle>Storage Management</DialogTitle> </DialogHeader>`
- [296:81] (JSXText) Static JSX text node: `Oversikt`
  - context: `<h2 className="text-3xl font-bold tracking-tight text-foreground">Oversikt</h2> <div className="flex items-center space-x-4">`
- [309:23] (JSXText) Static JSX text node: `Eksporter Rapport`
  - context: `<Download className="mr-2 h-4 w-4" /> Eksporter Rapport </Button> </AlertDialogT`
- [314:41] (JSXText) Static JSX text node: `Are you sure?`
  - context: `<AlertDialogHeader> <AlertDialogTitle>Are you sure?</AlertDialogTitle> <AlertDialogDescription>`
- [316:25] (JSXText) Static JSX text node: `This will export the report as a CSV file.`
  - context: `ogTitle> <AlertDialogDescription> This will export the report as a CSV file. </AlertDialogDe`
- [320:42] (JSXText) Static JSX text node: `Cancel`
  - context: `<AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction onClick={han`
- [321:71] (JSXText) Static JSX text node: `Continue`
  - context: `ogCancel> <AlertDialogAction onClick={handleExportReport}>Continue</AlertDialogAction> </AlertDialogFooter>`
- [332:19] (JSXText) Static JSX text node: `Ny Registrering`
  - context: `<Plus className="mr-2 h-4 w-4 group-hover:animate-bounce" /> Ny Registrering </Button> </div> </div`
- [357:64] (JSXText) Static JSX text node: `from last week`
  - context: `ixed(0)}%</span> <span className="ml-1 text-muted-foreground">from last week</span> </div> </Card>`
- [379:64] (JSXText) Static JSX text node: `from last week`
  - context: `ixed(0)}%</span> <span className="ml-1 text-muted-foreground">from last week</span> </div> </Card>`
- [401:64] (JSXText) Static JSX text node: `from last week`
  - context: `d-400">5%</span> <span className="ml-1 text-muted-foreground">from last week</span> </div> </Card> <`
- [412:67] (JSXText) Static JSX text node: `Elever`
  - context: `> <h2 className="text-3xl font-bold tracking-tight">Elever</h2> <Button variant="default"`
- [420:19] (JSXText) Static JSX text node: `Legg til elev`
  - context: `2 h-4 w-4 group-hover:animate-bounce transition-transform" /> Legg til elev </Button> </div> {/*`
- [508:79] (JSXText) Static JSX text node: `Want to explore with sample data?`
  - context: `> <h4 className="text-lg font-semibold text-foreground">Want to explore with sample data?</h4> <p className="tex`
- [510:27] (JSXText) Static JSX text node: `Load mock data to test features and see how the app works`
  - context: `<p className="text-sm text-muted-foreground mt-1"> Load mock data to test features and see how the app works`
- [517:29] (JSXText) Static JSX text node: `Load Sample Data`
  - context: `<FlaskConical className="h-4 w-4 mr-2" /> Load Sample Data </Button> </D`
- [522:42] (JSXText) Static JSX text node: `Mock Data Loader`
  - context: `<DialogHeader> <DialogTitle>Mock Data Loader</DialogTitle> </DialogHeader>`

### src/pages/NotFound.tsx

- [14:18] (MessageAPI) Message API call: error(): `404 Error: User attempted to access non-existent route`
  - context: `; const { tCommon } = useTranslation(); useEffect(() => { logger.error("404 Error: User attempted to access non-existent route", { path: location`

### src/pages/StudentProfile.tsx

- [157:21] (MessageAPI) Message API call: info(): `Auto-seeding minimal demo data for mock route`
  - context: `.current = true; setIsSeedingData(true); try { logger.info('Auto-seeding minimal demo data for mock route', { studentId });`
- [166:23] (MessageAPI) Message API call: success(): `Demo data created successfully`
  - context: `); // Show non-intrusive success message toast.success('Demo data created successfully', { description: 'Sample data has been`
- [166:23] (MessageAPI) sonner toast.success(): `Demo data created successfully`
  - context: `); // Show non-intrusive success message toast.success('Demo data created successfully', { description: 'Sample data has been`
- [175:22] (MessageAPI) Message API call: error(): `Failed to auto-seed mock data`
  - context: `reloadData(); } } catch (error) { logger.error('Failed to auto-seed mock data', { error, studentId }); toast.error('Fai`
- [176:21] (MessageAPI) Message API call: error(): `Failed to create demo data`
  - context: `ror('Failed to auto-seed mock data', { error, studentId }); toast.error('Failed to create demo data', { description: 'Please try loading mock`
- [176:21] (MessageAPI) sonner toast.error(): `Failed to create demo data`
  - context: `ror('Failed to auto-seed mock data', { error, studentId }); toast.error('Failed to create demo data', { description: 'Please try loading mock`
- [229:24] (MessageAPI) Message API call: error(): `Error generating insights`
  - context: `} } catch (error) { if (!signal.aborted) { logger.error('Error generating insights', { error }); setInsights(null);`
- [231:23] (MessageAPI) Message API call: error(): `Failed to generate insights`
  - context: `ating insights', { error }); setInsights(null); toast.error('Failed to generate insights'); } } finally { if (!signal.`
- [231:23] (MessageAPI) sonner toast.error(): `Failed to generate insights`
  - context: `ating insights', { error }); setInsights(null); toast.error('Failed to generate insights'); } } finally { if (!signal.`
- [259:26] (MessageAPI) Message API call: error(): `[SAFE] analyticsManager.triggerAnalyticsForStudent failed`
  - context: `} }) .catch((err) => { logger.error('[SAFE] analyticsManager.triggerAnalyticsForStudent failed', { error: err, stude`
- [271:24] (MessageAPI) Message API call: error(): `[SAFE] analyticsManager.initializeStudentAnalytics failed`
  - context: `entAnalytics done'); } } catch (err) { logger.error('[SAFE] analyticsManager.initializeStudentAnalytics failed', { error: err, stude`
- [276:20] (MessageAPI) Message API call: error(): `[SAFE] analyticsManager outer try/catch caught error`
  - context: `/ Extra safety net; never rethrow from analytics side-effect logger.error('[SAFE] analyticsManager outer try/catch caught error', { error: err }); }`
- [341:20] (MessageAPI) Message API call: error(): `Export error`
  - context: `as ${format.toUpperCase()}\`); } catch (error: unknown) { logger.error('Export error', { error }); const errorMessage = error instanceof Error ?`
- [363:21] (MessageAPI) Message API call: success(): `Backup created successfully`
  - context: `]/g, '-')}.json\`; downloadBlob(backupBlob, filename); toast.success('Backup created successfully'); } catch (error) { logger.error('Backup`
- [363:21] (MessageAPI) sonner toast.success(): `Backup created successfully`
  - context: `]/g, '-')}.json\`; downloadBlob(backupBlob, filename); toast.success('Backup created successfully'); } catch (error) { logger.error('Backup`
- [365:20] (MessageAPI) Message API call: error(): `Backup error`
  - context: `uccess('Backup created successfully'); } catch (error) { logger.error('Backup error', { error }); toast.error('Backup failed. Please try again.'`
- [366:19] (MessageAPI) Message API call: error(): `Backup failed. Please try again.`
  - context: `atch (error) { logger.error('Backup error', { error }); toast.error('Backup failed. Please try again.'); } }, [student, trackingEntries, allEm`
- [366:19] (MessageAPI) sonner toast.error(): `Backup failed. Please try again.`
  - context: `atch (error) { logger.error('Backup error', { error }); toast.error('Backup failed. Please try again.'); } }, [student, trackingEntries, allEm`
- [383:17] (JSXText) Static JSX text node: `This will only take a moment`
  - context: `<p className="text-sm text-muted-foreground mt-2"> This will only take a moment </p> )} </div>`
- [396:43] (JSXText) Static JSX text node: `Student not found.`
  - context: `className="flex items-center gap-2"> <p className="text-destructive">Student not found.</p> </div> </div> ); } return ( <S`
- [415:92] (JSXAttribute) Static aria-label attribute: `Go back to dashboard`
  - context: `<Button variant="ghost" size="sm" onClick={() => navigate('/')} aria-label="Go back to dashboard"> <ArrowLeft className="h-4 w-4 mr-2" />`
- [423:119] (JSXAttribute) Static aria-label attribute: `Open mock data loader`
  - context: `utline" size="sm" className="flex items-center justify-center group" aria-label="Open mock data loader"> <FileText className="h-4 w-4 mr-2`
- [425:23] (JSXText) Static JSX text node: `Load Mock Data`
  - context: `4 w-4 mr-2 transition-transform group-hover:rotate-12" /> Load Mock Data </Button> </DialogTrigger>`
- [430:36] (JSXText) Static JSX text node: `Mock Data for Testing & Analysis`
  - context: `-y-auto"> <DialogHeader> <DialogTitle>Mock Data for Testing & Analysis</DialogTitle> </DialogHeade`
- [473:56] (JSXText) Static JSX text node: `Mål og målstyring`
  - context: `<div> <h2 className="text-2xl font-bold">Mål og målstyring</h2> <p className="text-muted-foreground">`
- [475:23] (JSXText) Static JSX text node: `Administrer og følg opp`
  - context: `<p className="text-muted-foreground"> Administrer og følg opp {student.name}s IEP-mål </p>`
- [475:61] (JSXText) Static JSX text node: `s IEP-mål`
  - context: `-muted-foreground"> Administrer og følg opp {student.name}s IEP-mål </p> </div> <M`
- [484:57] (JSXText) Static JSX text node: `Fremgang og utvikling`
  - context: `<div> <h2 className="text-2xl font-bold">Fremgang og utvikling</h2> <p className="text-muted-foregro`
- [486:24] (JSXText) Static JSX text node: `Analyser`
  - context: `<p className="text-muted-foreground"> Analyser {student.name}s utvikling over tid </p>`
- [486:47] (JSXText) Static JSX text node: `s utvikling over tid`
  - context: `lassName="text-muted-foreground"> Analyser {student.name}s utvikling over tid </p> </div>`
- [495:56] (JSXText) Static JSX text node: `Rapporter og eksport`
  - context: `<div> <h2 className="text-2xl font-bold">Rapporter og eksport</h2> <p className="text-muted-foregroun`
- [497:23] (JSXText) Static JSX text node: `Generer rapporter og eksporter data for`
  - context: `<p className="text-muted-foreground"> Generer rapporter og eksporter data for {student.name} </p>`
- [502:60] (JSXText) Static JSX text node: `Eksporter PDF`
  - context: `eExportData('pdf')}> <FileText className="h-4 w-4 mr-2" />Eksporter PDF </Button> <Button variant=`
- [505:60] (JSXText) Static JSX text node: `Eksporter CSV`
  - context: `eExportData('csv')}> <Calendar className="h-4 w-4 mr-2" />Eksporter CSV </Button> <Button variant=`
- [508:60] (JSXText) Static JSX text node: `Eksporter JSON`
  - context: `ExportData('json')}> <Download className="h-4 w-4 mr-2" />Eksporter JSON </Button> <Button variant`
- [511:56] (JSXText) Static JSX text node: `Opprett backup`
  - context: `lick={handleBackupData}> <Save className="h-4 w-4 mr-2" />Opprett backup </Button> </div>`
- [540:58] (JSXText) Static JSX text node: `Enhanced Tracking Tools`
  - context: `<div> <h2 className="text-2xl font-bold">Enhanced Tracking Tools</h2> <p className="text-muted-fore`
- [542:25] (JSXText) Static JSX text node: `Advanced data collection and smart entry tools for`
  - context: `<p className="text-muted-foreground"> Advanced data collection and smart entry tools for {student.name}`
- [546:26] (JSXText) Static JSX text node: `Enhanced tracking tools coming soon`
  - context: `iv className="text-center py-8 text-muted-foreground"> <p>Enhanced tracking tools coming soon</p> </div>`

### src/pages/TrackStudent.tsx

- [49:19] (MessageAPI) Message API call: success(): `Emotion recorded!`
  - context: `| 'timestamp'>) => { setEmotions([...emotions, emotion]); toast.success("Emotion recorded!"); }; const handleSensoryAdd = (sensory: Omit<SensoryEnt`
- [49:19] (MessageAPI) sonner toast.success(): `Emotion recorded!`
  - context: `| 'timestamp'>) => { setEmotions([...emotions, emotion]); toast.success("Emotion recorded!"); }; const handleSensoryAdd = (sensory: Omit<SensoryEnt`
- [54:19] (MessageAPI) Message API call: success(): `Sensory input recorded!`
  - context: `mp'>) => { setSensoryInputs([...sensoryInputs, sensory]); toast.success("Sensory input recorded!"); }; const handleEnvironmentalAdd = (environmenta`
- [54:19] (MessageAPI) sonner toast.success(): `Sensory input recorded!`
  - context: `mp'>) => { setSensoryInputs([...sensoryInputs, sensory]); toast.success("Sensory input recorded!"); }; const handleEnvironmentalAdd = (environmenta`
- [59:19] (MessageAPI) Message API call: success(): `Environmental conditions recorded!`
  - context: `| 'timestamp'>) => { setEnvironmentalData(environmental); toast.success("Environmental conditions recorded!"); }; const handleSaveSession = async (`
- [59:19] (MessageAPI) sonner toast.success(): `Environmental conditions recorded!`
  - context: `| 'timestamp'>) => { setEnvironmentalData(environmental); toast.success("Environmental conditions recorded!"); }; const handleSaveSession = async (`
- [109:20] (MessageAPI) Message API call: error(): `Failed to save tracking session`
  - context: `navigate(\`/student/${student.id}\`); } catch (error) { logger.error('Failed to save tracking session', { error }); toast.error(String(tTrackin`
- [156:13] (JSXText) Static JSX text node: `Record emotions and sensory responses for this session`
  - context: `</div> <p className="text-muted-foreground"> Record emotions and sensory responses for this session </p> </`

### src/workers/analytics.worker.ts

- [357:18] (MessageAPI) Message API call: error(): `[analytics.worker] error`
  - context: `'complete', percent: 100 } }); } catch (error) { try { logger.error('[analytics.worker] error', error); } catch { /* noop */ } log`
- [361:18] (MessageAPI) Message API call: error(): `Error in analytics worker:`
  - context: `s.worker] error', error); } catch { /* noop */ } logger.error('Error in analytics worker:', error); // Post an error message back to the m`

### src/workers/hyperparameterOptimization.worker.ts

- [125:18] (MessageAPI) Message API call: error(): `Error in hyperparameter optimization worker:`
  - context: `the main thread postMessage(result); } catch (error) { logger.error('Error in hyperparameter optimization worker:', error); // Post error messag`
- [297:18] (MessageAPI) Message API call: error(): `Grid search failed:`
  - context: `r strategy: 'gridSearch' }; } catch (error) { logger.error('Grid search failed:', error); throw new Error(\`Grid search optimization fai`
- [426:18] (MessageAPI) Message API call: error(): `Random search failed:`
  - context: `strategy: 'randomSearch' }; } catch (error) { logger.error('Random search failed:', error); throw new Error(\`Random search optimization`

