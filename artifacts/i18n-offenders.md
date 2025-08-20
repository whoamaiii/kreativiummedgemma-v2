# i18n Offenders Report

Generated: 8/20/2025, 4:00:22 AM

Found 1347 potential offenders across 136 files.

Key convention: feature.section.purpose — prefer nouns and verbs in present tense.

## Namespace: analytics

### src/components/AnalyticsConfigBoundary.tsx
- [19:21] (MessageAPI) `Analytics configuration issue` → key: `analytics.analyticsconfigboundary.analytics_configuration_issue` — Message API call: error()
  - context: `ef.current) { notifiedRef.current = true; try { toast.error('Analytics configuration issue', { description: 'Using safe defaults f`
- [19:21] (MessageAPI) `Analytics configuration issue` → key: `analytics.analyticsconfigboundary.analytics_configuration_issue` — sonner toast.error()
  - context: `ef.current) { notifiedRef.current = true; try { toast.error('Analytics configuration issue', { description: 'Using safe defaults f`

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
  - context: `<div className="space-y-2"> <h4 className="text-sm font-medium">Test Results</h4> {testResults.map((result) => ( <div`
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
- [109:20] (MessageAPI) `[AnalyticsDashboard] Demo seed failed` → key: `analytics.analyticsdashboard.analyticsdashboard_demo_seed_failed` — Message API call: error()
  - context: `dent.id); runAnalysis(filteredData); } catch (e) { logger.error('[AnalyticsDashboard] Demo seed failed', { error: e }); toast.error(String`
- [129:24] (MessageAPI) `Error coercing timestamp:` → key: `analytics.analyticsdashboard.error_coercing_timestamp` — Message API call: error()
  - context: `} return new Date(); } catch (error) { logger.error('Error coercing timestamp:', v, error); return new Date(); }`
- [141:22] (MessageAPI) `Error normalizing filteredData:` → key: `analytics.analyticsdashboard.error_normalizing_filtereddata` — Message API call: error()
  - context: `oerce(s.timestamp) })), }; } catch (error) { logger.error('Error normalizing filteredData:', error); return { entries: [`
- [239:30] (MessageAPI) `Failed to collect chart exports` → key: `analytics.analyticsdashboard.failed_to_collect_chart_exports` — Message API call: error()
  - context: `return filtered; } catch (e) { logger.error('Failed to collect chart exports', e); toast.error(String(tAnaly`
- [262:24] (MessageAPI) `Export failed:` → key: `analytics.analyticsdashboard.export_failed` — Message API call: error()
  - context: `break; } } catch (error) { logger.error('Export failed:', error); toast.error(String(tAnalytics('export.failur`
- [316:46] (JSXAttribute) `analytics-dashboard-title` → key: `analytics.analyticsdashboard.analytics_dashboard_title` — Static aria-labelledby attribute
  - context: `tics('skipToContent'))} </a> <section role="region" aria-labelledby="analytics-dashboard-title" className="space-y-6"> {/* Hidden live region`
- [525:23] (MessageAPI) `Error comparing timestamps in AnalyticsDashboard memo:` → key: `analytics.analyticsdashboard.error_comparing_timestamps_in_analyticsdashboard` — Message API call: error()
  - context: `return prevTime === nextTime; } catch (error) { logger.error('Error comparing timestamps in AnalyticsDashboard memo:', error); retur`

### src/components/AnalyticsSettings.tsx
- [75:20] (MessageAPI) `Failed to load ML model status` → key: `analytics.analyticssettings.failed_to_load_ml_model` — Message API call: error()
  - context: `tatus(); setModelStatus(status); } catch (error) { logger.error('Failed to load ML model status', { error }); toast.error("Failed to load`
- [76:19] (MessageAPI) `Failed to load ML models: Could not retrieve model status. Some features may be unavailable.` → key: `analytics.analyticssettings.failed_to_load_ml_models` — Message API call: error()
  - context: `logger.error('Failed to load ML model status', { error }); toast.error("Failed to load ML models: Could not retrieve model status. Some features may be`
- [76:19] (MessageAPI) `Failed to load ML models: Could not retrieve model status. Some features may be unavailable.` → key: `analytics.analyticssettings.failed_to_load_ml_models` — sonner toast.error()
  - context: `logger.error('Failed to load ML model status', { error }); toast.error("Failed to load ML models: Could not retrieve model status. Some features may be`
- [113:19] (MessageAPI) `Analytics configuration has been updated` → key: `analytics.analyticssettings.analytics_configuration_has_been_updated` — Message API call: success()
  - context: `Config.updateConfig(config); setHasUnsavedChanges(false); toast.success("Analytics configuration has been updated"); }; const handleReset = () => {`
- [113:19] (MessageAPI) `Analytics configuration has been updated` → key: `analytics.analyticssettings.analytics_configuration_has_been_updated` — sonner toast.success()
  - context: `Config.updateConfig(config); setHasUnsavedChanges(false); toast.success("Analytics configuration has been updated"); }; const handleReset = () => {`
- [120:19] (MessageAPI) `Settings have been reset to defaults` → key: `analytics.analyticssettings.settings_have_been_reset_to` — Message API call: success()
  - context: `tSelectedPreset('balanced'); setHasUnsavedChanges(false); toast.success("Settings have been reset to defaults"); }; const handleExport = () => {`
- [120:19] (MessageAPI) `Settings have been reset to defaults` → key: `analytics.analyticssettings.settings_have_been_reset_to` — sonner toast.success()
  - context: `tSelectedPreset('balanced'); setHasUnsavedChanges(false); toast.success("Settings have been reset to defaults"); }; const handleExport = () => {`
- [135:19] (MessageAPI) `Configuration saved to analytics-config.json` → key: `analytics.analyticssettings.configuration_saved_to_analytics_config` — Message API call: success()
  - context: `ument.body.removeChild(a); URL.revokeObjectURL(url); toast.success("Configuration saved to analytics-config.json"); }; const handleImport = (e`
- [135:19] (MessageAPI) `Configuration saved to analytics-config.json` → key: `analytics.analyticssettings.configuration_saved_to_analytics_config` — sonner toast.success()
  - context: `ument.body.removeChild(a); URL.revokeObjectURL(url); toast.success("Configuration saved to analytics-config.json"); }; const handleImport = (e`
- [148:25] (MessageAPI) `Successfully imported configuration` → key: `analytics.analyticssettings.successfully_imported_configuration` — Message API call: success()
  - context: `nfig(content)) { setHasUnsavedChanges(false); toast.success("Successfully imported configuration"); } else { toast.error("`
- [148:25] (MessageAPI) `Successfully imported configuration` → key: `analytics.analyticssettings.successfully_imported_configuration` — sonner toast.success()
  - context: `nfig(content)) { setHasUnsavedChanges(false); toast.success("Successfully imported configuration"); } else { toast.error("`
- [150:23] (MessageAPI) `Invalid configuration file` → key: `analytics.analyticssettings.invalid_configuration_file` — Message API call: error()
  - context: `("Successfully imported configuration"); } else { toast.error("Invalid configuration file"); } } catch (_error) { toast.`
- [150:23] (MessageAPI) `Invalid configuration file` → key: `analytics.analyticssettings.invalid_configuration_file` — sonner toast.error()
  - context: `("Successfully imported configuration"); } else { toast.error("Invalid configuration file"); } } catch (_error) { toast.`
- [153:21] (MessageAPI) `Failed to read configuration file` → key: `analytics.analyticssettings.failed_to_read_configuration_file` — Message API call: error()
  - context: `id configuration file"); } } catch (_error) { toast.error("Failed to read configuration file"); } }; reader.readAsText(file)`
- [153:21] (MessageAPI) `Failed to read configuration file` → key: `analytics.analyticssettings.failed_to_read_configuration_file` — sonner toast.error()
  - context: `id configuration file"); } } catch (_error) { toast.error("Failed to read configuration file"); } }; reader.readAsText(file)`
- [193:19] (MessageAPI) `Failed to delete model` → key: `analytics.analyticssettings.failed_to_delete_model` — Message API call: error()
  - context: `${modelType} model has been removed\`); } catch (_error) { toast.error("Failed to delete model"); } finally { setIsDeletingModel(null); }`
- [193:19] (MessageAPI) `Failed to delete model` → key: `analytics.analyticssettings.failed_to_delete_model` — sonner toast.error()
  - context: `${modelType} model has been removed\`); } catch (_error) { toast.error("Failed to delete model"); } finally { setIsDeletingModel(null); }`
- [315:52] (JSXText) `Pattern Analysis Thresholds` → key: `analytics.analyticssettings.pattern_analysis_thresholds` — Static JSX text node
  - context: `<CardHeader> <CardTitle className="text-base">Pattern Analysis Thresholds</CardTitle> <CardDescription>`
- [317:21] (JSXText) `Adjust minimum requirements and thresholds for pattern detection` → key: `analytics.analyticssettings.adjust_minimum_requirements_and_thresholds` — Static JSX text node
  - context: `Thresholds</CardTitle> <CardDescription> Adjust minimum requirements and thresholds for pattern detection`
- [323:54] (JSXText) `Minimum Data Points` → key: `analytics.analyticssettings.minimum_data_points` — Static JSX text node
  - context: `sName="flex items-center"> <Label htmlFor="minDataPoints">Minimum Data Points</Label> {renderTooltip("Minimum number`
- [342:61] (JSXText) `Correlation Threshold` → key: `analytics.analyticssettings.correlation_threshold` — Static JSX text node
  - context: `flex items-center"> <Label htmlFor="correlationThreshold">Correlation Threshold</Label> {renderTooltip("Minimum corr`
- [361:57] (JSXText) `Concern Frequency Threshold` → key: `analytics.analyticssettings.concern_frequency_threshold` — Static JSX text node
  - context: `me="flex items-center"> <Label htmlFor="concernFrequency">Concern Frequency Threshold</Label> {renderTooltip("Percen`
- [382:52] (JSXText) `Enhanced Analysis Thresholds` → key: `analytics.analyticssettings.enhanced_analysis_thresholds` — Static JSX text node
  - context: `<CardHeader> <CardTitle className="text-base">Enhanced Analysis Thresholds</CardTitle> <CardDescription>`
- [384:21] (JSXText) `Configure advanced pattern detection and anomaly thresholds` → key: `analytics.analyticssettings.configure_advanced_pattern_detection_and` — Static JSX text node
  - context: `Thresholds</CardTitle> <CardDescription> Configure advanced pattern detection and anomaly thresholds </`
- [390:57] (JSXText) `Anomaly Detection Sensitivity` → key: `analytics.analyticssettings.anomaly_detection_sensitivity` — Static JSX text node
  - context: `me="flex items-center"> <Label htmlFor="anomalyThreshold">Anomaly Detection Sensitivity</Label> {renderTooltip("Numb`
- [403:110] (JSXText) `σ` → key: `analytics.analyticssettings.` — Static JSX text node
  - context: `lassName="w-12 text-right">{config.enhancedAnalysis.anomalyThreshold.toFixed(2)}σ</span> </div> </div>`
- [409:54] (JSXText) `Minimum Sample Size` → key: `analytics.analyticssettings.minimum_sample_size` — Static JSX text node
  - context: `sName="flex items-center"> <Label htmlFor="minSampleSize">Minimum Sample Size</Label> {renderTooltip("Minimum data p`
- [432:52] (JSXText) `Alert Sensitivity` → key: `analytics.analyticssettings.alert_sensitivity` — Static JSX text node
  - context: `<CardHeader> <CardTitle className="text-base">Alert Sensitivity</CardTitle> <CardDescription>`
- [434:21] (JSXText) `Control how sensitive the system is to potential issues` → key: `analytics.analyticssettings.control_how_sensitive_the_system` — Static JSX text node
  - context: `Sensitivity</CardTitle> <CardDescription> Control how sensitive the system is to potential issues </Card`
- [446:54] (JSXText) `Low Sensitivity` → key: `analytics.analyticssettings.low_sensitivity` — Static JSX text node
  - context: `<div> <p className="font-medium">Low Sensitivity</p> <p className="text-sm text-muted-f`
- [448:29] (JSXText) `Only alert for significant patterns with high confidence` → key: `analytics.analyticssettings.only_alert_for_significant_patterns` — Static JSX text node
  - context: `<p className="text-sm text-muted-foreground"> Only alert for significant patterns with high confidence`
- [456:54] (JSXText) `Medium Sensitivity` → key: `analytics.analyticssettings.medium_sensitivity` — Static JSX text node
  - context: `<div> <p className="font-medium">Medium Sensitivity</p> <p className="text-sm text-mute`
- [458:29] (JSXText) `Balanced approach to pattern detection and alerts` → key: `analytics.analyticssettings.balanced_approach_to_pattern_detection` — Static JSX text node
  - context: `<p className="text-sm text-muted-foreground"> Balanced approach to pattern detection and alerts </p>`
- [466:54] (JSXText) `High Sensitivity` → key: `analytics.analyticssettings.high_sensitivity` — Static JSX text node
  - context: `<div> <p className="font-medium">High Sensitivity</p> <p className="text-sm text-muted-`
- [468:29] (JSXText) `Alert for subtle patterns and potential concerns early` → key: `analytics.analyticssettings.alert_for_subtle_patterns_and` — Static JSX text node
  - context: `<p className="text-sm text-muted-foreground"> Alert for subtle patterns and potential concerns early`
- [476:78] (JSXText) `Current Multipliers:` → key: `analytics.analyticssettings.current_multipliers` — Static JSX text node
  - context: `"> <p className="text-sm font-medium text-muted-foreground">Current Multipliers:</p> <div className="grid grid-cols-3 ga`
- [490:52] (JSXText) `Analysis Time Windows` → key: `analytics.analyticssettings.analysis_time_windows` — Static JSX text node
  - context: `<CardHeader> <CardTitle className="text-base">Analysis Time Windows</CardTitle> <CardDescription>`
- [492:21] (JSXText) `Configure the time periods used for different analyses` → key: `analytics.analyticssettings.configure_the_time_periods_used` — Static JSX text node
  - context: `ime Windows</CardTitle> <CardDescription> Configure the time periods used for different analyses </CardD`
- [498:56] (JSXText) `Default Analysis Period` → key: `analytics.analyticssettings.default_analysis_period` — Static JSX text node
  - context: `ame="flex items-center"> <Label htmlFor="defaultAnalysis">Default Analysis Period</Label> {renderTooltip("Standard t`
- [517:51] (JSXText) `Recent Data Window` → key: `analytics.analyticssettings.recent_data_window` — Static JSX text node
  - context: `lassName="flex items-center"> <Label htmlFor="recentData">Recent Data Window</Label> {renderTooltip("Time window for`
- [536:49] (JSXText) `Long-term Analysis Window` → key: `analytics.analyticssettings.long_term_analysis_window` — Static JSX text node
  - context: `className="flex items-center"> <Label htmlFor="longTerm">Long-term Analysis Window</Label> {renderTooltip("Extended`
- [562:23] (JSXText) `Machine Learning Models` → key: `analytics.analyticssettings.machine_learning_models` — Static JSX text node
  - context: `p-2"> <Brain className="h-4 w-4" /> Machine Learning Models </span> <div cla`
- [565:83] (JSXText) `Enable ML` → key: `analytics.analyticssettings.enable_ml` — Static JSX text node
  - context: `<Label htmlFor="ml-enabled" className="text-sm font-normal">Enable ML</Label> <Switch id="ml-e`
- [574:21] (JSXText) `Manage AI-powered prediction models for enhanced analytics` → key: `analytics.analyticssettings.manage_ai_powered_prediction_models` — Static JSX text node
  - context: `</CardTitle> <CardDescription> Manage AI-powered prediction models for enhanced analytics </C`
- [582:68] (JSXText) `Loading ML models...` → key: `analytics.analyticssettings.loading_ml_models` — Static JSX text node
  - context: `reground" /> <span className="ml-2 text-muted-foreground">Loading ML models...</span> </div> ) : (`
- [611:70] (JSXText) `Last Trained` → key: `analytics.analyticssettings.last_trained` — Static JSX text node
  - context: `<div> <p className="text-muted-foreground">Last Trained</p> <p className="font-medium">`
- [623:70] (JSXText) `Data Points` → key: `analytics.analyticssettings.data_points` — Static JSX text node
  - context: `<div> <p className="text-muted-foreground">Data Points</p> <p className="font-medium">{mode`
- [631:75] (JSXText) `Model Performance` → key: `analytics.analyticssettings.model_performance` — Static JSX text node
  - context: `-sm"> <span className="text-muted-foreground">Model Performance</span> <span>{(model.accurac`
- [677:31] (JSXText) `No model trained yet. Model will be trained automatically when sufficient data is available.` → key: `analytics.analyticssettings.no_model_trained_yet_model` — Static JSX text node
  - context: `p className="text-sm text-muted-foreground mb-3"> No model trained yet. Model will be trained automatically when sufficient data i`
- [693:35] (JSXText) `Train Model` → key: `analytics.analyticssettings.train_model` — Static JSX text node
  - context: `<Brain className="h-3 w-3 mr-1" /> Train Model </> )}`
- [707:23] (JSXText) `About Machine Learning` → key: `analytics.analyticssettings.about_machine_learning` — Static JSX text node
  - context: `ap-2"> <Info className="h-4 w-4" /> About Machine Learning </h5> <p classNam`
- [710:23] (JSXText) `ML models enhance predictions by learning from historical patterns. They require:` → key: `analytics.analyticssettings.ml_models_enhance_predictions_by` — Static JSX text node
  - context: `<p className="text-sm text-muted-foreground"> ML models enhance predictions by learning from historical patterns. They require`
- [713:27] (JSXText) `• Emotion prediction: 7+ days of data` → key: `analytics.analyticssettings.emotion_prediction_7_days_of` — Static JSX text node
  - context: `sName="text-sm text-muted-foreground space-y-1 ml-4"> <li>• Emotion prediction: 7+ days of data</li> <li>• Sensory r`
- [714:27] (JSXText) `• Sensory response: 10+ tracking sessions` → key: `analytics.analyticssettings.sensory_response_10_tracking_sessions` — Static JSX text node
  - context: `<li>• Emotion prediction: 7+ days of data</li> <li>• Sensory response: 10+ tracking sessions</li> <li>• Basel`
- [715:27] (JSXText) `• Baseline clustering: 10+ tracking entries` → key: `analytics.analyticssettings.baseline_clustering_10_tracking_entries` — Static JSX text node
  - context: `<li>• Sensory response: 10+ tracking sessions</li> <li>• Baseline clustering: 10+ tracking entries</li> </ul>`
- [718:23] (JSXText) `Models are trained locally in your browser and improve over time as more data is collected.` → key: `analytics.analyticssettings.models_are_trained_locally_in` — Static JSX text node
  - context: `<p className="text-sm text-muted-foreground"> Models are trained locally in your browser and improve over time as more data is`
- [730:52] (JSXText) `Cache Settings` → key: `analytics.analyticssettings.cache_settings` — Static JSX text node
  - context: `<CardHeader> <CardTitle className="text-base">Cache Settings</CardTitle> <CardDescription>`
- [732:21] (JSXText) `Configure performance optimization settings` → key: `analytics.analyticssettings.configure_performance_optimization_settings` — Static JSX text node
  - context: `he Settings</CardTitle> <CardDescription> Configure performance optimization settings </CardDescription>`
- [738:49] (JSXText) `Cache Duration` → key: `analytics.analyticssettings.cache_duration` — Static JSX text node
  - context: `className="flex items-center"> <Label htmlFor="cacheTTL">Cache Duration</Label> {renderTooltip("How long to keep ca`
- [757:30] (JSXText) `Invalidate cache on config change` → key: `analytics.analyticssettings.invalidate_cache_on_config_change` — Static JSX text node
  - context: `<div className="flex items-center"> <Label>Invalidate cache on config change</Label> {renderTooltip("`
- [769:52] (JSXText) `Import/Export Configuration` → key: `analytics.analyticssettings.import_export_configuration` — Static JSX text node
  - context: `<CardHeader> <CardTitle className="text-base">Import/Export Configuration</CardTitle> <CardDescription>`
- [771:21] (JSXText) `Save and share your configuration settings` → key: `analytics.analyticssettings.save_and_share_your_configuration` — Static JSX text node
  - context: `nfiguration</CardTitle> <CardDescription> Save and share your configuration settings </CardDescription>`
- [781:21] (JSXText) `Export Config` → key: `analytics.analyticssettings.export_config` — Static JSX text node
  - context: `> <Download className="h-4 w-4" /> Export Config </Button> <`
- [792:25] (JSXText) `Import Config` → key: `analytics.analyticssettings.import_config` — Static JSX text node
  - context: `<Upload className="h-4 w-4" /> Import Config </span> </Button>`
- [800:34] (JSXAttribute) `Import configuration file` → key: `analytics.analyticssettings.import_configuration_file` — Static aria-label attribute
  - context: `onChange={handleImport} aria-label="Import configuration file" className="hidden"`
- [817:15] (JSXText) `Reset to Defaults` → key: `analytics.analyticssettings.reset_to_defaults` — Static JSX text node
  - context: `-2" > <RotateCcw className="h-4 w-4" /> Reset to Defaults </Button> <div className=`
- [824:19] (JSXText) `Unsaved changes` → key: `analytics.analyticssettings.unsaved_changes` — Static JSX text node
  - context: `r-4"> <AlertTriangle className="h-4 w-4" /> Unsaved changes </p> )}`
- [841:17] (JSXText) `Save Changes` → key: `analytics.analyticssettings.save_changes` — Static JSX text node
  - context: `2" > <Save className="h-4 w-4" /> Save Changes </Button> </div> </div>`

### src/components/AnalyticsStatusIndicator.tsx
- [119:20] (MessageAPI) `Error refreshing analytics` → key: `analytics.analyticsstatusindicator.error_refreshing_analytics` — Message API call: error()
  - context: `; } loadAnalyticsStatus(); } catch (error) { logger.error('Error refreshing analytics', error); } finally { setIsRefreshing(fals`
- [171:13] (JSXText) `Analytics Status` → key: `analytics.analyticsstatusindicator.analytics_status` — Static JSX text node
  - context: `flex items-center gap-2"> <Brain className="h-5 w-5" /> Analytics Status {studentId && \` - ${analyticsStatus[0]?.studentName`
- [189:16] (JSXText) `No analytics data available` → key: `analytics.analyticsstatusindicator.no_analytics_data_available` — Static JSX text node
  - context: `<Activity className="h-8 w-8 mx-auto mb-2 opacity-50" /> <p>No analytics data available</p> </div> ) : ( <div cl`
- [208:27] (JSXText) `Data Available` → key: `analytics.analyticsstatusindicator.data_available` — Static JSX text node
  - context: `<BarChart3 className="h-3 w-3 mr-1" /> Data Available </Badge> ) : (`
- [213:27] (JSXText) `Collecting Data` → key: `analytics.analyticsstatusindicator.collecting_data` — Static JSX text node
  - context: `<Clock className="h-3 w-3 mr-1" /> Collecting Data </Badge> )}`
- [223:25] (JSXText) `Last updated:` → key: `analytics.analyticsstatusindicator.last_updated` — Static JSX text node
  - context: `{status.lastAnalyzed ? ( <> Last updated:<br /> {formatDistanceToNow(status.lastAnal`
- [236:66] (JSXText) `Active Analytics Systems:` → key: `analytics.analyticsstatusindicator.active_analytics_systems` — Static JSX text node
  - context: `order-border"> <h4 className="font-medium text-foreground mb-3">Active Analytics Systems:</h4> <div className="grid grid-cols-2`
- [240:21] (JSXText) `Pattern Analysis` → key: `analytics.analyticsstatusindicator.pattern_analysis` — Static JSX text node
  - context: `<CheckCircle className="h-4 w-4 text-green-600" /> Pattern Analysis </div> <div className="flex`
- [244:21] (JSXText) `Correlation Analysis` → key: `analytics.analyticsstatusindicator.correlation_analysis` — Static JSX text node
  - context: `<CheckCircle className="h-4 w-4 text-green-600" /> Correlation Analysis </div> <div className="`
- [248:21] (JSXText) `Predictive Insights` → key: `analytics.analyticsstatusindicator.predictive_insights` — Static JSX text node
  - context: `<CheckCircle className="h-4 w-4 text-green-600" /> Predictive Insights </div> <div className="f`
- [252:21] (JSXText) `Anomaly Detection` → key: `analytics.analyticsstatusindicator.anomaly_detection` — Static JSX text node
  - context: `<CheckCircle className="h-4 w-4 text-green-600" /> Anomaly Detection </div> <div className="fle`
- [256:21] (JSXText) `Alert System` → key: `analytics.analyticsstatusindicator.alert_system` — Static JSX text node
  - context: `<CheckCircle className="h-4 w-4 text-green-600" /> Alert System </div> <div className="flex ite`

### src/components/DataQualityFeedback.tsx
- [219:13] (JSXText) `Ingen data tilgjengelig for kvalitetsvurdering` → key: `analytics.dataqualityfeedback.ingen_data_tilgjengelig_for_kvalitetsvurdering` — Static JSX text node
  - context: `uted-foreground" /> <p className="text-muted-foreground"> Ingen data tilgjengelig for kvalitetsvurdering </p> </CardCont`
- [235:61] (JSXText) `Samlet score:` → key: `analytics.dataqualityfeedback.samlet_score` — Static JSX text node
  - context: `tems-center gap-2"> <span className="text-sm text-muted-foreground">Samlet score:</span> <Badge variant={overallScore >= 80 ? 'default'`
- [267:23] (JSXText) `•` → key: `analytics.dataqualityfeedback.` — Static JSX text node
  - context: `y={\`${metric.id}-${rec}\`} className="text-xs opacity-90"> • {rec} </p> ))} </div>`
- [278:44] (JSXText) `Samlet vurdering` → key: `analytics.dataqualityfeedback.samlet_vurdering` — Static JSX text node
  - context: `/20 dark:to-blue-950/20 rounded-lg"> <h4 className="font-medium mb-2">Samlet vurdering</h4> <p className="text-sm text-muted-foreground mb-3`
- [289:51] (JSXText) `Prioriterte forbedringer:` → key: `analytics.dataqualityfeedback.prioriterte_forbedringer` — Static JSX text node
  - context: `<div className="space-y-2"> <h5 className="text-sm font-medium">Prioriterte forbedringer:</h5> {qualityMetrics .fi`

### src/components/PatternDetectionEmptyState.tsx
- [125:17] (JSXText) `•` → key: `analytics.patterndetectionemptystate.` — Static JSX text node
  - context: `<ul className="text-sm text-info-foreground/80 space-y-1"> <li>• {String(tAnalytics('patternDetection.tips.sameTime'))}</li> <li>•`
- [126:17] (JSXText) `•` → key: `analytics.patterndetectionemptystate.` — Static JSX text node
  - context: `i>• {String(tAnalytics('patternDetection.tips.sameTime'))}</li> <li>• {String(tAnalytics('patternDetection.tips.includeAll'))}</li> <li>`
- [127:17] (JSXText) `•` → key: `analytics.patterndetectionemptystate.` — Static JSX text node
  - context: `• {String(tAnalytics('patternDetection.tips.includeAll'))}</li> <li>• {String(tAnalytics('patternDetection.tips.noteEnvironment'))}</li>`
- [128:17] (JSXText) `•` → key: `analytics.patterndetectionemptystate.` — Static JSX text node
  - context: `ring(tAnalytics('patternDetection.tips.noteEnvironment'))}</li> <li>• {String(tAnalytics('patternDetection.tips.beConsistent'))}</li> </ul`

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
- [323:30] (JSXAttribute) `Progress trends line chart` → key: `analytics.progressdashboard.progress_trends_line_chart` — Static aria-label attribute
  - context: `option={option} height={300} aria-label="Progress trends line chart" exportRegistration={{ id: 'progre`
- [333:26] (JSXText) `Recent Goal Updates` → key: `analytics.progressdashboard.recent_goal_updates` — Static JSX text node
  - context: `t-card border-0 shadow-soft"> <CardHeader> <CardTitle>Recent Goal Updates</CardTitle> </CardHeader> <CardConte`
- [371:26] (JSXText) `Goal Completion Trends` → key: `analytics.progressdashboard.goal_completion_trends` — Static JSX text node
  - context: `t-card border-0 shadow-soft"> <CardHeader> <CardTitle>Goal Completion Trends</CardTitle> </CardHeader> <CardCo`
- [398:32] (JSXAttribute) `Goal completion by category bar chart` → key: `analytics.progressdashboard.goal_completion_by_category_bar` — Static aria-label attribute
  - context: `tion={option} height={300} aria-label="Goal completion by category bar chart" exportRegistration={`
- [410:28] (JSXText) `Progress by Category` → key: `analytics.progressdashboard.progress_by_category` — Static JSX text node
  - context: `rd border-0 shadow-soft"> <CardHeader> <CardTitle>Progress by Category</CardTitle> </CardHeader> <Card`
- [439:32] (JSXAttribute) `Progress by category donut chart` → key: `analytics.progressdashboard.progress_by_category_donut_chart` — Static aria-label attribute
  - context: `tion={option} height={250} aria-label="Progress by category donut chart" exportRegistration={{ id:`
- [448:28] (JSXText) `Category Breakdown` → key: `analytics.progressdashboard.category_breakdown` — Static JSX text node
  - context: `rd border-0 shadow-soft"> <CardHeader> <CardTitle>Category Breakdown</CardTitle> </CardHeader> <CardCo`
- [460:50] (JSXText) `% average progress` → key: `analytics.progressdashboard.average_progress` — Static JSX text node
  - context: `ext-xs text-muted-foreground"> <span>{category.progress}% average progress</span> <span>{category.achieved} achi`
- [474:26] (JSXText) `Priority Goals Requiring Attention` → key: `analytics.progressdashboard.priority_goals_requiring_attention` — Static JSX text node
  - context: `t-card border-0 shadow-soft"> <CardHeader> <CardTitle>Priority Goals Requiring Attention</CardTitle> </CardHeader>`
- [500:25] (JSXText) `⚠️ This goal is past its target date and may need review or extension.` → key: `analytics.progressdashboard.this_goal_is_past_its` — Static JSX text node
  - context: `uctive/20 rounded text-sm text-destructive-foreground"> ⚠️ This goal is past its target date and may need review or extension.`
- [505:25] (JSXText) `📈 Consider increasing intervention intensity to meet target date.` → key: `analytics.progressdashboard.consider_increasing_intervention_intensity_to` — Static JSX text node
  - context: `er-warning/20 rounded text-sm text-warning-foreground"> 📈 Consider increasing intervention intensity to meet target date.`
- [513:80] (JSXText) `All goals are on track!` → key: `analytics.progressdashboard.all_goals_are_on_track` — Static JSX text node
  - context: `<p className="text-lg font-medium text-success-foreground">All goals are on track!</p> <p className="text-muted-foregro`
- [514:58] (JSXText) `Great work keeping` → key: `analytics.progressdashboard.great_work_keeping` — Static JSX text node
  - context: `oals are on track!</p> <p className="text-muted-foreground">Great work keeping {student.name}'s progress moving forward.</p>`
- [514:91] (JSXText) `'s progress moving forward.` → key: `analytics.progressdashboard.s_progress_moving_forward` — Static JSX text node
  - context: `<p className="text-muted-foreground">Great work keeping {student.name}'s progress moving forward.</p> </div> )}`

### src/components/ReportBuilder.tsx
- [474:15] (JSXText) `Create Report` → key: `analytics.reportbuilder.create_report` — Static JSX text node
  - context: `nt-dyslexia"> <FileText className="h-4 w-4 mr-2" /> Create Report </Button> </DialogTrigger> <Dialog`

### src/components/UniversalAnalyticsStatus.tsx
- [46:20] (MessageAPI) `Error loading analytics status` → key: `analytics.universalanalyticsstatus.error_loading_analytics_status` — Message API call: error()
  - context: `tStatuses: analyticsStatuses }); } catch (error) { logger.error('Error loading analytics status', { error }); } }; const handleRefresh`
- [56:20] (MessageAPI) `Error refreshing analytics` → key: `analytics.universalanalyticsstatus.error_refreshing_analytics` — Message API call: error()
  - context: `alization(); await loadStatus(); } catch (error) { logger.error('Error refreshing analytics', { error }); } finally { setIsRefreshing(`
- [76:58] (JSXText) `Loading analytics status...` → key: `analytics.universalanalyticsstatus.loading_analytics_status` — Static JSX text node
  - context: `border-primary"></div> <span className="ml-2 text-muted-foreground">Loading analytics status...</span> </div> </CardContent>`
- [92:13] (JSXText) `Universal Analytics Status` → key: `analytics.universalanalyticsstatus.universal_analytics_status` — Static JSX text node
  - context: `flex items-center gap-2"> <Users className="h-5 w-5" /> Universal Analytics Status </CardTitle> <Button`
- [97:24] (JSXAttribute) `Refresh analytics status` → key: `analytics.universalanalyticsstatus.refresh_analytics_status` — Static aria-label attribute
  - context: `tton variant="ghost" size="icon" aria-label="Refresh analytics status" title="Refresh analytics status"`
- [98:19] (JSXAttribute) `Refresh analytics status` → key: `analytics.universalanalyticsstatus.refresh_analytics_status` — Static title attribute
  - context: `size="icon" aria-label="Refresh analytics status" title="Refresh analytics status" onClick={handleRefresh} disab`
- [118:15] (JSXText) `System Status` → key: `analytics.universalanalyticsstatus.system_status` — Static JSX text node
  - context: `ing" /> )} <span className="font-medium"> System Status </span> </div> <Badge variant={all`
- [133:15] (JSXText) `Students with Analytics` → key: `analytics.universalanalyticsstatus.students_with_analytics` — Static JSX text node
  - context: `/div> <div className="text-sm text-muted-foreground"> Students with Analytics </div> </div>`
- [142:15] (JSXText) `Students with Data` → key: `analytics.universalanalyticsstatus.students_with_data` — Static JSX text node
  - context: `/div> <div className="text-sm text-muted-foreground"> Students with Data </div> </div> </div> {`
- [150:71] (JSXText) `Student Details:` → key: `analytics.universalanalyticsstatus.student_details` — Static JSX text node
  - context: `ace-y-2"> <h4 className="font-medium text-sm text-muted-foreground">Student Details:</h4> {status.studentStatuses.map(student => (`
- [166:23] (JSXText) `Pattern Detection Active` → key: `analytics.universalanalyticsstatus.pattern_detection_active` — Static JSX text node
  - context: `<Badge variant="default" className="text-xs"> Pattern Detection Active </Badge> )}`
- [181:17] (JSXText) `✨ Universal pattern detection is active for all students!` → key: `analytics.universalanalyticsstatus.universal_pattern_detection_is_active` — Static JSX text node
  - context: `-4 w-4" /> <span className="text-sm font-medium"> ✨ Universal pattern detection is active for all students! </span>`
- [191:15] (JSXText) `Add your first student to see universal analytics in action. Pattern detection will start immediately!` → key: `analytics.universalanalyticsstatus.add_your_first_student_to` — Static JSX text node
  - context: `d-lg"> <div className="text-info-foreground text-sm"> Add your first student to see universal analytics in action. Pattern detection w`

### src/components/analytics-panels/CorrelationsPanel.tsx
- [94:49] (JSXText) `↔` → key: `analytics.correlationspanel.` — Static JSX text node
  - context: `="font-medium text-foreground"> {correlation.factor1} ↔ {correlation.factor2} </h4> <p`

### src/components/analytics-panels/PatternsPanel.tsx
- [137:68] (JSXText) `•` → key: `analytics.patternspanel.` — Static JSX text node
  - context: `tart gap-2"> <span className="text-primary">•</span> <span>{rec}</span>`

### src/components/charts/EChartContainer.tsx
- [370:22] (MessageAPI) `[EChartContainer] Option normalization failed` → key: `analytics.echartcontainer.echartcontainer_option_normalization_failed` — Message API call: error()
  - context: `tion; } catch (e) { if (import.meta?.env?.DEV) { logger.error("[EChartContainer] Option normalization failed", { error: e }); } re`
- [441:22] (MessageAPI) `[EChartContainer] Theme merge failed` → key: `analytics.echartcontainer.echartcontainer_theme_merge_failed` — Message API call: error()
  - context: `tion; } catch (e) { if (import.meta?.env?.DEV) { logger.error("[EChartContainer] Theme merge failed", { error: e, optionP`

### src/components/charts/TrendsChart.tsx
- [34:16] (JSXText) `No data available for selected time range` → key: `analytics.trendschart.no_data_available_for_selected` — Static JSX text node
  - context: `<Activity className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>No data available for selected time range</p> <p className="text-xs`
- [35:41] (JSXText) `Try expanding the time range or adjusting filters` → key: `analytics.trendschart.try_expanding_the_time_range` — Static JSX text node
  - context: `a available for selected time range</p> <p className="text-xs mt-1">Try expanding the time range or adjusting filters</p> </div> <`
- [81:18] (MessageAPI) `TrendsChart.renderChart failed` → key: `analytics.trendschart.trendschart_renderchart_failed` — Message API call: error()
  - context: `le: 'Emotion & Sensory Trends' }} />; } catch (error) { logger.error("TrendsChart.renderChart failed", { error }); return ( <div className=`
- [86:14] (JSXText) `Could not render chart` → key: `analytics.trendschart.could_not_render_chart` — Static JSX text node
  - context: `<Activity className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>Could not render chart</p> <p className="text-xs mt-1">An internal err`
- [87:39] (JSXText) `An internal error occurred while building the chart` → key: `analytics.trendschart.an_internal_error_occurred_while` — Static JSX text node
  - context: `> <p>Could not render chart</p> <p className="text-xs mt-1">An internal error occurred while building the chart</p> </div> </d`

### src/components/optimized/OptimizedAnalyticsDashboard.tsx
- [145:20] (MessageAPI) `[OptimizedAnalyticsDashboard] Demo seed failed` → key: `analytics.optimizedanalyticsdashboard.optimizedanalyticsdashboard_demo_seed_failed` — Message API call: error()
  - context: `d); runAnalysis(normalizedData); } catch (error) { logger.error('[OptimizedAnalyticsDashboard] Demo seed failed', { error }); toast.error(`
- [181:20] (MessageAPI) `[OptimizedAnalyticsDashboard] Export failed` → key: `analytics.optimizedanalyticsdashboard.optimizedanalyticsdashboard_export_failed` — Message API call: error()
  - context: `String(tAnalytics('export.success'))); } catch (error) { logger.error('[OptimizedAnalyticsDashboard] Export failed', { error }); toast.error(Str`
- [209:17] (MessageAPI) `[OptimizedAnalyticsDashboard] Tab changed` → key: `analytics.optimizedanalyticsdashboard.optimizedanalyticsdashboard_tab_changed` — Message API call: info()
  - context: `back((value: string) => { // Track tab change for analytics logger.info('[OptimizedAnalyticsDashboard] Tab changed', { tab: value }); }, []); // Me`
- [325:44] (JSXText) `No patterns detected yet.` → key: `analytics.optimizedanalyticsdashboard.no_patterns_detected_yet` — Static JSX text node
  - context: `y-4"> {patterns.length === 0 ? ( <p className="text-muted-foreground">No patterns detected yet.</p> ) : ( patterns.map((pattern, index) => (`
- [339:44] (JSXText) `No correlations found.` → key: `analytics.optimizedanalyticsdashboard.no_correlations_found` — Static JSX text node
  - context: `> {correlations.length === 0 ? ( <p className="text-muted-foreground">No correlations found.</p> ) : ( correlations.map((correlation, index)`
- [353:44] (JSXText) `No insights available.` → key: `analytics.optimizedanalyticsdashboard.no_insights_available` — Static JSX text node
  - context: `y-4"> {insights.length === 0 ? ( <p className="text-muted-foreground">No insights available.</p> ) : ( insights.map((insight, index) => (`
- [367:44] (JSXText) `No predictions available.` → key: `analytics.optimizedanalyticsdashboard.no_predictions_available` — Static JSX text node
  - context: `"> {predictions.length === 0 ? ( <p className="text-muted-foreground">No predictions available.</p> ) : ( predictions.map((prediction, index`

### src/components/settings/AnalyticsConfig.tsx
- [129:20] (MessageAPI) `Failed to export analytics config` → key: `analytics.analyticsconfig.failed_to_export_analytics_config` — Message API call: error()
  - context: `ltValue: 'Configuration exported' })); } catch (error) { logger.error('Failed to export analytics config', error as any); toast.error(tSettings(`
- [149:22] (MessageAPI) `Failed reading imported config` → key: `analytics.analyticsconfig.failed_reading_imported_config` — Message API call: error()
  - context: `d configuration file' })); } } catch (err) { logger.error('Failed reading imported config', err as any); toast.error(tSettings('im`
- [176:170] (JSXText) `σ` → key: `analytics.analyticsconfig.` — Static JSX text node
  - context: `ngs('preview.anomaly', { defaultValue: 'Anomaly threshold' })}:</span> {anomaly}σ</li> </ul> </CardContent> </Card> ); }, [config,`
- [184:52] (JSXAttribute) `analytics-config-heading` → key: `analytics.analyticsconfig.analytics_config_heading` — Static aria-labelledby attribute
  - context: `ings, tCommon]); return ( <section className={className} aria-labelledby="analytics-config-heading" role="region"> <a href="#analytics-config-main"`
- [228:38] (JSXAttribute) `help-correlationThreshold` → key: `analytics.analyticsconfig.help_correlationthreshold` — Static aria-describedby attribute
  - context: `1" inputMode="decimal" aria-describedby="help-correlationThreshold" aria-invalid={Boolean(errorFor('`
- [248:38] (JSXAttribute) `help-anomalyThreshold` → key: `analytics.analyticsconfig.help_anomalythreshold` — Static aria-describedby attribute
  - context: `1" inputMode="decimal" aria-describedby="help-anomalyThreshold" aria-invalid={Boolean(errorFor('enha`
- [267:38] (JSXAttribute) `help-defaultAnalysisDays` → key: `analytics.analyticsconfig.help_defaultanalysisdays` — Static aria-describedby attribute
  - context: `r" inputMode="numeric" aria-describedby="help-defaultAnalysisDays" aria-invalid={Boolean(errorFor('t`

## Namespace: common

### src/components/AdvancedFilterPanel.tsx
- [395:47] (JSXAttribute) `Select triggers to include` → key: `common.advancedfilterpanel.select_triggers_to_include` — Static aria-label attribute
  - context: `}} > <SelectTrigger aria-label="Select triggers to include"> <SelectValue placeholder="Se`
- [396:48] (JSXAttribute) `Select triggers to include` → key: `common.advancedfilterpanel.select_triggers_to_include` — Static placeholder attribute
  - context: `el="Select triggers to include"> <SelectValue placeholder="Select triggers to include" /> </SelectTrigger>`
- [697:30] (JSXAttribute) `Filter name` → key: `common.advancedfilterpanel.filter_name` — Static aria-label attribute
  - context: `eholder={String(tCommon('filterNamePlaceholder'))} aria-label="Filter name" value={filterName} onChange={(`
- [745:42] (JSXAttribute) `Delete saved filter` → key: `common.advancedfilterpanel.delete_saved_filter` — Static aria-label attribute
  - context: `variant="ghost" aria-label="Delete saved filter" title="Delete saved filter"`
- [746:37] (JSXAttribute) `Delete saved filter` → key: `common.advancedfilterpanel.delete_saved_filter` — Static title attribute
  - context: `aria-label="Delete saved filter" title="Delete saved filter" onClick={() => onDeleteFilte`

### src/components/AdvancedSearch.tsx
- [463:93] (JSXText) `students,` → key: `common.advancedsearch.students` — Static JSX text node
  - context: `{String(tCommon('interface.results'))}: {filteredResults.students.length} students, {filteredResults.emotions.length} emotions, {filteredResults.sensoryIn`
- [463:137] (JSXText) `emotions,` → key: `common.advancedsearch.emotions` — Static JSX text node
  - context: `: {filteredResults.students.length} students, {filteredResults.emotions.length} emotions, {filteredResults.sensoryInputs.length} sensory inputs, {filteredResult`
- [463:186] (JSXText) `sensory inputs,` → key: `common.advancedsearch.sensory_inputs` — Static JSX text node
  - context: `lteredResults.emotions.length} emotions, {filteredResults.sensoryInputs.length} sensory inputs, {filteredResults.goals.length} goals </span>`

### src/components/AlertManager.tsx
- [56:19] (MessageAPI) `Alert marked as viewed` → key: `common.alertmanager.alert_marked_as_viewed` — Message API call: success()
  - context: `alertSystem.markAlertAsViewed(alertId); loadAlerts(); toast.success('Alert marked as viewed'); }; /** * Handle alert resolution with proper`
- [56:19] (MessageAPI) `Alert marked as viewed` → key: `common.alertmanager.alert_marked_as_viewed` — sonner toast.success()
  - context: `alertSystem.markAlertAsViewed(alertId); loadAlerts(); toast.success('Alert marked as viewed'); }; /** * Handle alert resolution with proper`
- [79:21] (MessageAPI) `Alert resolved successfully` → key: `common.alertmanager.alert_resolved_successfully` — Message API call: success()
  - context: `Alert(null); setResolveNotes(''); loadAlerts(); toast.success('Alert resolved successfully'); } catch (error) { logger.error('Failed`
- [79:21] (MessageAPI) `Alert resolved successfully` → key: `common.alertmanager.alert_resolved_successfully` — sonner toast.success()
  - context: `Alert(null); setResolveNotes(''); loadAlerts(); toast.success('Alert resolved successfully'); } catch (error) { logger.error('Failed`
- [81:20] (MessageAPI) `Failed to resolve alert` → key: `common.alertmanager.failed_to_resolve_alert` — Message API call: error()
  - context: `uccess('Alert resolved successfully'); } catch (error) { logger.error('Failed to resolve alert', error); toast.error('Failed to resolve alert. P`
- [82:19] (MessageAPI) `Failed to resolve alert. Please try again.` → key: `common.alertmanager.failed_to_resolve_alert_please` — Message API call: error()
  - context: `rror) { logger.error('Failed to resolve alert', error); toast.error('Failed to resolve alert. Please try again.'); } finally { setIsResolv`
- [82:19] (MessageAPI) `Failed to resolve alert. Please try again.` → key: `common.alertmanager.failed_to_resolve_alert_please` — sonner toast.error()
  - context: `rror) { logger.error('Failed to resolve alert', error); toast.error('Failed to resolve alert. Please try again.'); } finally { setIsResolv`
- [156:57] (JSXText) `data points` → key: `common.alertmanager.data_points` — Static JSX text node
  - context: `aleDateString()}</span> <span>{alertEntry.alert.dataPoints} data points</span> {alertEntry.resolved && (`
- [199:27] (JSXText) `Review details and add resolution notes before confirming.` → key: `common.alertmanager.review_details_and_add_resolution` — Static JSX text node
  - context: `logTitle> <DialogDescription> Review details and add resolution notes before confirming.`
- [215:68] (JSXText) `•` → key: `common.alertmanager.` — Static JSX text node
  - context: `tart gap-2"> <span className="text-primary">•</span> <span>{rec}</span>`
- [232:41] (JSXAttribute) `Describe actions taken or observations...` → key: `common.alertmanager.describe_actions_taken_or_observations` — Static placeholder attribute
  - context: `(e) => setResolveNotes(e.target.value)} placeholder="Describe actions taken or observations..." rows={3}`
- [265:54] (JSXText) `•` → key: `common.alertmanager.` — Static JSX text node
  - context: `="flex items-start gap-2"> <span className="text-primary">•</span> <span>{recommendation}</span>`

### src/components/ConfidenceIndicator.tsx
- [104:19] (JSXText) `•` → key: `common.confidenceindicator.` — Static JSX text node
  - context: `key={explanation} className="text-xs text-muted-foreground"> • {explanation} </div> ))} </div>`

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
  - context: `e="text-sm text-info-foreground/80"> Med {getRecommendedRate()} datapunkt(er) per dag vil du nå{' '} <span className="font-mediu`
- [243:39] (JSXText) `Alle sikkerhetsnivåer` → key: `common.datarequirementscalculator.alle_sikkerhetsniv_er` — Static JSX text node
  - context: `w */} <div className="space-y-3"> <h4 className="font-medium">Alle sikkerhetsnivåer</h4> {progressCalculations.map((calc) => (`
- [261:54] (JSXText) `datapunkter over` → key: `common.datarequirementscalculator.datapunkter_over` — Static JSX text node
  - context: `xs text-muted-foreground"> {calc.requirement.minDataPoints} datapunkter over {calc.requirement.minDays} dager </p>`
- [271:42] (JSXText) `dager igjen` → key: `common.datarequirementscalculator.dager_igjen` — Static JSX text node
  - context: `="text-xs text-muted-foreground mt-1"> ~{calc.daysToTarget} dager igjen </p> )} </div>`
- [287:19] (JSXText) `• Samle` → key: `common.datarequirementscalculator.samle` — Static JSX text node
  - context: `<ul className="text-sm text-primary-foreground/80 space-y-1"> <li>• Samle {getRecommendedRate()} datapunkt(er) per dag for optimal fremgang</li>`
- [287:50] (JSXText) `datapunkt(er) per dag for optimal fremgang` → key: `common.datarequirementscalculator.datapunkt_er_per_dag_for` — Static JSX text node
  - context: `mary-foreground/80 space-y-1"> <li>• Samle {getRecommendedRate()} datapunkt(er) per dag for optimal fremgang</li> <li>• Registrer da`
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

### src/components/DebugVisualization.tsx
- [164:13] (JSXText) `Debug Visualization Component` → key: `common.debugvisualization.debug_visualization_component` — Static JSX text node
  - context: `<CardTitle className="flex items-center justify-between"> Debug Visualization Component <Badge variant="outline">Test Mode</Ba`
- [165:38] (JSXText) `Test Mode` → key: `common.debugvisualization.test_mode` — Static JSX text node
  - context: `Debug Visualization Component <Badge variant="outline">Test Mode</Badge> </CardTitle> </CardHeader> <CardCont`
- [180:54] (JSXText) `Sensory Inputs` → key: `common.debugvisualization.sensory_inputs` — Static JSX text node
  - context: `dContent className="pt-4"> <p className="text-sm font-medium">Sensory Inputs</p> <p className="text-2xl font-bold">{mockSens`
- [186:54] (JSXText) `Tracking Entries` → key: `common.debugvisualization.tracking_entries` — Static JSX text node
  - context: `dContent className="pt-4"> <p className="text-sm font-medium">Tracking Entries</p> <p className="text-2xl font-bold">{mockTr`
- [194:58] (JSXText) `Interactive Data Visualization Component:` → key: `common.debugvisualization.interactive_data_visualization_component` — Static JSX text node
  - context: `order rounded-lg p-4"> <h3 className="text-lg font-semibold mb-4">Interactive Data Visualization Component:</h3> <InteractiveDataVis`
- [205:71] (JSXText) `View Raw Data` → key: `common.debugvisualization.view_raw_data` — Static JSX text node
  - context: `e="mt-4"> <summary className="cursor-pointer text-sm font-medium">View Raw Data</summary> <div className="mt-2 space-y-2">`
- [208:54] (JSXText) `Emotions Sample:` → key: `common.debugvisualization.emotions_sample` — Static JSX text node
  - context: `-2"> <div> <p className="text-sm font-medium">Emotions Sample:</p> <pre className="text-xs bg-muted p-2 roun`
- [214:54] (JSXText) `Sensory Sample:` → key: `common.debugvisualization.sensory_sample` — Static JSX text node
  - context: `div> <div> <p className="text-sm font-medium">Sensory Sample:</p> <pre className="text-xs bg-muted p-2 round`
- [220:54] (JSXText) `Tracking Sample:` → key: `common.debugvisualization.tracking_sample` — Static JSX text node
  - context: `div> <div> <p className="text-sm font-medium">Tracking Sample:</p> <pre className="text-xs bg-muted p-2 roun`

### src/components/DetailedConfidenceExplanation.tsx
- [208:17] (JSXText) `R² =` → key: `common.detailedconfidenceexplanation.r` — Static JSX text node
  - context: `> <div className="text-xs text-muted-foreground"> R² = {rSquared.toFixed(3)} </div> </div> </d`

### src/components/DevErrorBanner.tsx
- [39:22] (MessageAPI) `Dev error captured` → key: `common.deverrorbanner.dev_error_captured` — Message API call: error()
  - context: `// Use central logger to record the error logger.error('Dev error captured', ...args); } catch {} // Always forward to the`
- [49:20] (MessageAPI) `Window error` → key: `common.deverrorbanner.window_error` — Message API call: error()
  - context: `=> c + 1); // Log window errors through central logger logger.error('Window error', e.error || new Error(e.message)); }; const onUnhandledRe`
- [58:20] (MessageAPI) `Unhandled promise rejection` → key: `common.deverrorbanner.unhandled_promise_rejection` — Message API call: error()
  - context: `1); // Log unhandled rejections through central logger logger.error('Unhandled promise rejection', reason instanceof Error ? reason : new Error(msg)`
- [82:59] (JSXText) `Dev error captured (` → key: `common.deverrorbanner.dev_error_captured` — Static JSX text node
  - context: `className="min-w-0"> <div className="font-medium text-destructive">Dev error captured ({errorCount})</div> <div className="mt-1 truncat`

### src/components/EnhancedDataVisualization.tsx
- [70:63] (JSXText) `No data to display` → key: `common.enhanceddatavisualization.no_data_to_display` — Static JSX text node
  - context: `uted-foreground"> <h3 className="text-lg font-semibold">No data to display</h3> <p className="text-sm">There is`
- [71:48] (JSXText) `There is no` → key: `common.enhanceddatavisualization.there_is_no` — Static JSX text node
  - context: `emibold">No data to display</h3> <p className="text-sm">There is no {dataType} data available for {studentName}.</p>`
- [71:71] (JSXText) `data available for` → key: `common.enhanceddatavisualization.data_available_for` — Static JSX text node
  - context: `play</h3> <p className="text-sm">There is no {dataType} data available for {studentName}.</p> </div>`
- [86:77] (JSXText) `Enhanced Data Insights for` → key: `common.enhanceddatavisualization.enhanced_data_insights_for` — Static JSX text node
  - context: `iv> <h2 className="text-2xl font-bold text-card-foreground">Enhanced Data Insights for {studentName}</h2> <p className="`

### src/components/EnhancedPersonalizedInsights.tsx
- [182:13] (JSXText) `Personalized Insights for` → key: `common.enhancedpersonalizedinsights.personalized_insights_for` — Static JSX text node
  - context: `items-center gap-2"> <Lightbulb className="h-5 w-5" /> Personalized Insights for {student.name} </CardTitle> </CardHe`
- [187:48] (JSXText) `Start tracking emotions and sensory inputs to generate personalized insights` → key: `common.enhancedpersonalizedinsights.start_tracking_emotions_and_sensory` — Static JSX text node
  - context: `ity-50 text-muted-foreground" /> <p className="text-muted-foreground">Start tracking emotions and sensory inputs to generate personalized insights</p>`
- [201:15] (JSXText) `Personalized Insights for` → key: `common.enhancedpersonalizedinsights.personalized_insights_for` — Static JSX text node
  - context: `-2"> <Lightbulb className="h-5 w-5 text-primary" /> Personalized Insights for {student.name} </CardTitle> <d`
- [221:62] (JSXText) `Total Data Points` → key: `common.enhancedpersonalizedinsights.total_data_points` — Static JSX text node
  - context: `lDataPoints}</div> <div className="text-sm text-muted-foreground">Total Data Points</div> </div> <div className="text-cent`
- [225:62] (JSXText) `Data Consistency` → key: `common.enhancedpersonalizedinsights.data_consistency` — Static JSX text node
  - context: `nsistency)}%</div> <div className="text-sm text-muted-foreground">Data Consistency</div> </div> <div className="text-cente`
- [229:62] (JSXText) `Emotional Stability` → key: `common.enhancedpersonalizedinsights.emotional_stability` — Static JSX text node
  - context: `Stability)}%</div> <div className="text-sm text-muted-foreground">Emotional Stability</div> </div> <div className="text-ce`
- [241:62] (JSXText) `Intensity Trend` → key: `common.enhancedpersonalizedinsights.intensity_trend` — Static JSX text node
  - context: `</div> <div className="text-sm text-muted-foreground">Intensity Trend</div> </div> </div> </CardContent>`
- [249:41] (JSXText) `AI Insights` → key: `common.enhancedpersonalizedinsights.ai_insights` — Static JSX text node
  - context: `st className="grid w-full grid-cols-5"> <TabsTrigger value="insights">AI Insights</TabsTrigger> <TabsTrigger value="strengths">Strengths</Ta`
- [251:39] (JSXText) `Growth Areas` → key: `common.enhancedpersonalizedinsights.growth_areas` — Static JSX text node
  - context: `value="strengths">Strengths</TabsTrigger> <TabsTrigger value="growth">Growth Areas</TabsTrigger> <TabsTrigger value="patterns">Patterns</Tab`
- [307:63] (JSXText) `% confidence` → key: `common.enhancedpersonalizedinsights.confidence` — Static JSX text node
  - context: `> {Math.round(insight.confidence * 100)}% confidence </Badge> <div className`
- [320:18] (JSXText) `Continue collecting data to generate predictive insights` → key: `common.enhancedpersonalizedinsights.continue_collecting_data_to_generate` — Static JSX text node
  - context: `<Brain className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>Continue collecting data to generate predictive insights</p> </div>`
- [339:75] (JSXText) `Strength Level:` → key: `common.enhancedpersonalizedinsights.strength_level` — Static JSX text node
  - context: `p-2"> <span className="text-xs text-muted-foreground">Strength Level:</span> <Progress value={strength.confi`
- [352:18] (JSXText) `Strengths will be identified as patterns emerge from data collection` → key: `common.enhancedpersonalizedinsights.strengths_will_be_identified_as` — Static JSX text node
  - context: `<Heart className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>Strengths will be identified as patterns emerge from data collection</p>`
- [392:68] (JSXText) `Action Steps:` → key: `common.enhancedpersonalizedinsights.action_steps` — Static JSX text node
  - context: `Name="mt-3"> <h5 className="text-sm font-medium mb-2">Action Steps:</h5> <ul className="text-sm text-muted-f`
- [396:64] (JSXText) `•` → key: `common.enhancedpersonalizedinsights.` — Static JSX text node
  - context: `ms-start gap-2"> <span className="text-primary">•</span> <span>{rec}</span>`
- [411:18] (JSXText) `Growth opportunities will be identified based on data patterns` → key: `common.enhancedpersonalizedinsights.growth_opportunities_will_be_identified` — Static JSX text node
  - context: `<Target className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>Growth opportunities will be identified based on data patterns</p> <`
- [425:55] (JSXText) `Emotional Pattern:` → key: `common.enhancedpersonalizedinsights.emotional_pattern` — Static JSX text node
  - context: `<div className="flex-1"> <h4 className="font-semibold">Emotional Pattern: {pattern.pattern.replace('-', ' ')}</h4>`
- [429:67] (JSXText) `% confidence` → key: `common.enhancedpersonalizedinsights.confidence` — Static JSX text node
  - context: `nt="outline"> {Math.round(pattern.confidence * 100)}% confidence </Badge> <span`
- [432:50] (JSXText) `data points` → key: `common.enhancedpersonalizedinsights.data_points` — Static JSX text node
  - context: `ext-xs text-muted-foreground"> {pattern.dataPoints} data points </span> </div>`
- [446:55] (JSXText) `Sensory Pattern:` → key: `common.enhancedpersonalizedinsights.sensory_pattern` — Static JSX text node
  - context: `<div className="flex-1"> <h4 className="font-semibold">Sensory Pattern: {pattern.pattern.replace('-', ' ')}</h4>`
- [450:67] (JSXText) `% confidence` → key: `common.enhancedpersonalizedinsights.confidence` — Static JSX text node
  - context: `nt="outline"> {Math.round(pattern.confidence * 100)}% confidence </Badge> <span`
- [453:50] (JSXText) `data points` → key: `common.enhancedpersonalizedinsights.data_points` — Static JSX text node
  - context: `ext-xs text-muted-foreground"> {pattern.dataPoints} data points </span> </div>`
- [465:18] (JSXText) `Patterns will emerge as more data is collected` → key: `common.enhancedpersonalizedinsights.patterns_will_emerge_as_more` — Static JSX text node
  - context: `<BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>Patterns will emerge as more data is collected</p> </div>`
- [501:68] (JSXText) `Recommended Actions:` → key: `common.enhancedpersonalizedinsights.recommended_actions` — Static JSX text node
  - context: `Name="mt-3"> <h5 className="text-sm font-medium mb-2">Recommended Actions:</h5> <ul className="text-sm text-`
- [505:64] (JSXText) `•` → key: `common.enhancedpersonalizedinsights.` — Static JSX text node
  - context: `ms-start gap-2"> <span className="text-primary">•</span> <span>{rec}</span>`
- [520:18] (JSXText) `No significant anomalies detected in recent data` → key: `common.enhancedpersonalizedinsights.no_significant_anomalies_detected_in` — Static JSX text node
  - context: `<Shield className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>No significant anomalies detected in recent data</p> </div>`

### src/components/ErrorBoundary.tsx
- [94:18] (MessageAPI) `[ErrorBoundary] Component error caught` → key: `common.errorboundary.errorboundary_component_error_caught` — Message API call: error()
  - context: `ronment configuration and doesn't log to console in production logger.error('[ErrorBoundary] Component error caught', { error: { message: erro`
- [128:21] (MessageAPI) `An unexpected error occurred` → key: `common.errorboundary.an_unexpected_error_occurred` — Message API call: error()
  - context: `ble; also emit a dev-only minimal toast payload try { toast.error('An unexpected error occurred', { description: import.meta.env.DEV &&`
- [128:21] (MessageAPI) `An unexpected error occurred` → key: `common.errorboundary.an_unexpected_error_occurred` — sonner toast.error()
  - context: `ble; also emit a dev-only minimal toast payload try { toast.error('An unexpected error occurred', { description: import.meta.env.DEV &&`
- [158:13] (MessageAPI) `Page automatically refreshed after multiple errors` → key: `common.errorboundary.page_automatically_refreshed_after_multiple` — Message API call: toast()
  - context: `this.resetTimeoutId = setTimeout(() => { this.handleRetry(); toast('Page automatically refreshed after multiple errors'); }, 5000); }; /**`
- [158:13] (MessageAPI) `Page automatically refreshed after multiple errors` → key: `common.errorboundary.page_automatically_refreshed_after_multiple` — sonner toast()
  - context: `this.resetTimeoutId = setTimeout(() => { this.handleRetry(); toast('Page automatically refreshed after multiple errors'); }, 5000); }; /**`
- [204:17] (JSXText) `Something went wrong` → key: `common.errorboundary.something_went_wrong` — Static JSX text node
  - context: `ructive"> <AlertTriangle className="h-5 w-5" /> Something went wrong </CardTitle> </CardHeader>`
- [209:17] (JSXText) `An unexpected error occurred. The application may not be working correctly.` → key: `common.errorboundary.an_unexpected_error_occurred_the` — Static JSX text node
  - context: `4"> <p className="text-sm text-muted-foreground"> An unexpected error occurred. The application may not be working correctly.`
- [214:67] (JSXText) `Error Details` → key: `common.errorboundary.error_details` — Static JSX text node
  - context: `me="text-xs"> <summary className="cursor-pointer font-medium">Error Details</summary> <pre className="mt-2 p-2 bg-muted roun`
- [225:19] (JSXText) `Try Again` → key: `common.errorboundary.try_again` — Static JSX text node
  - context: `lt"> <RefreshCw className="h-4 w-4 mr-2" /> Try Again </Button> <Button o`
- [232:19] (JSXText) `Reload Page` → key: `common.errorboundary.reload_page` — Static JSX text node
  - context: `> <RefreshCw className="h-4 w-4 mr-2" /> Reload Page </Button> <Button`
- [239:19] (JSXText) `Go Home` → key: `common.errorboundary.go_home` — Static JSX text node
  - context: `> <Home className="h-4 w-4 mr-2" /> Go Home </Button> </div>`
- [245:19] (JSXText) `Auto-refreshing in 5 seconds...` → key: `common.errorboundary.auto_refreshing_in_5_seconds` — Static JSX text node
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
  - context: `nt className="max-w-2xl"> <DialogHeader> <DialogTitle>Create New IEP Goal</DialogTitle> <DialogDescription>`
- [306:17] (JSXText) `Enter goal details, targets, and measurable objectives.` → key: `common.goalmanager.enter_goal_details_targets_and` — Static JSX text node
  - context: `te New IEP Goal</DialogTitle> <DialogDescription> Enter goal details, targets, and measurable objectives. </DialogDe`
- [311:40] (JSXText) `Goal Title *` → key: `common.goalmanager.goal_title` — Static JSX text node
  - context: `assName="space-y-4"> <div> <Label htmlFor="title">Goal Title *</Label> <Input id="title"`
- [316:31] (JSXAttribute) `e.g., Improve emotional regulation during transitions` → key: `common.goalmanager.e_g_improve_emotional_regulation` — Static placeholder attribute
  - context: `al(prev => ({ ...prev, title: e.target.value }))} placeholder="e.g., Improve emotional regulation during transitions" />`
- [335:46] (JSXText) `Description *` → key: `common.goalmanager.description` — Static JSX text node
  - context: `</div> <div> <Label htmlFor="description">Description *</Label> <Textarea id="descriptio`
- [340:31] (JSXAttribute) `Detailed description of what the student will achieve...` → key: `common.goalmanager.detailed_description_of_what_the` — Static placeholder attribute
  - context: `v => ({ ...prev, description: e.target.value }))} placeholder="Detailed description of what the student will achieve..." />`
- [344:45] (JSXText) `Measurable Objective *` → key: `common.goalmanager.measurable_objective` — Static JSX text node
  - context: `</div> <div> <Label htmlFor="measurable">Measurable Objective *</Label> <Textarea id="m`
- [349:31] (JSXAttribute) `How will progress be measured? Include specific criteria...` → key: `common.goalmanager.how_will_progress_be_measured` — Static placeholder attribute
  - context: `...prev, measurableObjective: e.target.value }))} placeholder="How will progress be measured? Include specific criteria..." />`
- [354:45] (JSXText) `Baseline Value` → key: `common.goalmanager.baseline_value` — Static JSX text node
  - context: `ols-2 gap-4"> <div> <Label htmlFor="baseline">Baseline Value</Label> <Input id="baseline`
- [363:43] (JSXText) `Target Value` → key: `common.goalmanager.target_value` — Static JSX text node
  - context: `</div> <div> <Label htmlFor="target">Target Value</Label> <Input id="target"`
- [373:45] (JSXText) `Target Date` → key: `common.goalmanager.target_date` — Static JSX text node
  - context: `</div> <div> <Label htmlFor="targetDate">Target Date</Label> <Input id="targetDate"`
- [385:46] (JSXText) `Create Goal` → key: `common.goalmanager.create_goal` — Static JSX text node
  - context: `Cancel </Button> <Button onClick={createGoal}>Create Goal</Button> </div> </div> </DialogC`
- [397:72] (JSXText) `No IEP Goals Yet` → key: `common.goalmanager.no_iep_goals_yet` — Static JSX text node
  - context: `mb-4" /> <h3 className="text-xl font-semibold text-foreground mb-2">No IEP Goals Yet</h3> <p className="text-muted-foreground text-cente`
- [399:15] (JSXText) `Start by creating your first IEP goal to track` → key: `common.goalmanager.start_by_creating_your_first` — Static JSX text node
  - context: `<p className="text-muted-foreground text-center mb-6 max-w-md"> Start by creating your first IEP goal to track {student.name}'s educational prog`
- [399:76] (JSXText) `'s educational progress.` → key: `common.goalmanager.s_educational_progress` — Static JSX text node
  - context: `md"> Start by creating your first IEP goal to track {student.name}'s educational progress. </p> <Button onClick={() => set`
- [403:15] (JSXText) `Create First Goal` → key: `common.goalmanager.create_first_goal` — Static JSX text node
  - context: `0 font-dyslexia"> <Plus className="h-4 w-4 mr-2" /> Create First Goal </Button> </CardContent> </Card>`
- [429:68] (JSXAttribute) `Edit goal` → key: `common.goalmanager.edit_goal` — Static aria-label attribute
  - context: `flex gap-2"> <Button variant="ghost" size="icon" aria-label="Edit goal" title="Edit goal"> <Edit className="h-4 w-4" /`
- [429:86] (JSXAttribute) `Edit goal` → key: `common.goalmanager.edit_goal` — Static title attribute
  - context: `<Button variant="ghost" size="icon" aria-label="Edit goal" title="Edit goal"> <Edit className="h-4 w-4" />`
- [432:68] (JSXAttribute) `Delete goal` → key: `common.goalmanager.delete_goal` — Static aria-label attribute
  - context: `</Button> <Button variant="ghost" size="icon" aria-label="Delete goal" title="Delete goal" onClick={() => deleteGoal(goal.id)}>`
- [432:88] (JSXAttribute) `Delete goal` → key: `common.goalmanager.delete_goal` — Static title attribute
  - context: `<Button variant="ghost" size="icon" aria-label="Delete goal" title="Delete goal" onClick={() => deleteGoal(goal.id)}> <Trash2`
- [450:52] (JSXText) `Measurable Objective` → key: `common.goalmanager.measurable_objective` — Static JSX text node
  - context: `<div className="mb-4"> <h4 className="font-medium mb-2">Measurable Objective</h4> <p className="text-sm text-muted-for`
- [476:46] (MessageAPI) `Milestone title:` → key: `common.goalmanager.milestone_title` — Message API call: prompt()
  - context: `onClick={() => { const title = prompt("Milestone title:"); const description = prompt("Milesto`
- [477:52] (MessageAPI) `Milestone description:` → key: `common.goalmanager.milestone_description` — Message API call: prompt()
  - context: `prompt("Milestone title:"); const description = prompt("Milestone description:"); const dateStr = prompt("Targe`
- [478:48] (MessageAPI) `Target date (YYYY-MM-DD):` → key: `common.goalmanager.target_date_yyyy_mm_dd` — Message API call: prompt()
  - context: `rompt("Milestone description:"); const dateStr = prompt("Target date (YYYY-MM-DD):"); if (title && description &`
- [489:66] (JSXText) `No milestones yet` → key: `common.goalmanager.no_milestones_yet` — Static JSX text node
  - context: `ngth === 0 ? ( <p className="text-sm text-muted-foreground">No milestones yet</p> ) : ( <div className`
- [525:44] (MessageAPI) `Enter current progress value:` → key: `common.goalmanager.enter_current_progress_value` — Message API call: prompt()
  - context: `onClick={() => { const value = prompt("Enter current progress value:"); const notes = prompt("Pr`
- [526:44] (MessageAPI) `Progress notes (optional):` → key: `common.goalmanager.progress_notes_optional` — Message API call: prompt()
  - context: `pt("Enter current progress value:"); const notes = prompt("Progress notes (optional):"); if (value) {`
- [533:21] (JSXText) `Update Progress` → key: `common.goalmanager.update_progress` — Static JSX text node
  - context: `<TrendingUp className="h-4 w-4 mr-1" /> Update Progress </Button> </div>`

### src/components/InteractiveDataVisualization.debug.tsx
- [17:20] (JSXText) `Interactive Data Visualization Debug` → key: `common.interactivedatavisualization_debug.interactive_data_visualization_debug` — Static JSX text node
  - context: `studentName }); return ( <Card> <CardHeader> <CardTitle>Interactive Data Visualization Debug</CardTitle> </CardHeader> <Card`
- [23:16] (JSXText) `Debug mode active - checking component loading` → key: `common.interactivedatavisualization_debug.debug_mode_active_checking_component` — Static JSX text node
  - context: `ext-yellow-600"> <AlertCircle className="h-5 w-5" /> <p>Debug mode active - checking component loading</p> </div> <d`
- [27:16] (JSXText) `Sensory Inputs:` → key: `common.interactivedatavisualization_debug.sensory_inputs` — Static JSX text node
  - context: `2"> <p>Emotions: {emotions?.length || 0} entries</p> <p>Sensory Inputs: {sensoryInputs?.length || 0} entries</p> <p>Tracking`
- [28:16] (JSXText) `Tracking Entries:` → key: `common.interactivedatavisualization_debug.tracking_entries` — Static JSX text node
  - context: `<p>Sensory Inputs: {sensoryInputs?.length || 0} entries</p> <p>Tracking Entries: {trackingEntries?.length || 0} entries</p> <p>Stud`
- [29:16] (JSXText) `Student Name:` → key: `common.interactivedatavisualization_debug.student_name` — Static JSX text node
  - context: `<p>Tracking Entries: {trackingEntries?.length || 0} entries</p> <p>Student Name: {studentName || 'Not provided'}</p> </div> </div`

### src/components/InteractiveDataVisualization.diagnosis.tsx
- [99:20] (JSXText) `Interactive Data Visualization - Diagnosis` → key: `common.interactivedatavisualization_diagnosis.interactive_data_visualization_diagnosis` — Static JSX text node
  - context: `00" />; } }; return ( <Card> <CardHeader> <CardTitle>Interactive Data Visualization - Diagnosis</CardTitle> </CardHeader>`
- [104:13] (JSXText) `Running diagnostic tests to identify loading issues...` → key: `common.interactivedatavisualization_diagnosis.running_diagnostic_tests_to_identify` — Static JSX text node
  - context: `space-y-4"> <p className="text-sm text-muted-foreground"> Running diagnostic tests to identify loading issues... </p>`
- [122:46] (JSXText) `Diagnosis Summary` → key: `common.interactivedatavisualization_diagnosis.diagnosis_summary` — Static JSX text node
  - context: `me="mt-6 p-4 bg-muted rounded-lg"> <h4 className="font-medium mb-2">Diagnosis Summary</h4> <div className="text-sm space-y-1">`
- [124:18] (JSXText) `Total Tests:` → key: `common.interactivedatavisualization_diagnosis.total_tests` — Static JSX text node
  - context: `s Summary</h4> <div className="text-sm space-y-1"> <p>Total Tests: {tests.length}</p> <p>Passed: {tests.filter(t => t.st`
- [135:13] (JSXText) `Refresh Page` → key: `common.interactivedatavisualization_diagnosis.refresh_page` — Static JSX text node
  - context: `variant="outline" className="w-full" > Refresh Page </Button> </div> </CardContent> </Card>`

### src/components/InteractiveDataVisualization.minimal.tsx
- [22:11] (JSXText) `Interactive Data Visualization -` → key: `common.interactivedatavisualization_minimal.interactive_data_visualization` — Static JSX text node
  - context: `flex items-center gap-2"> <BarChart3 className="h-5 w-5" /> Interactive Data Visualization - {studentName} </CardTitle> </Card`
- [28:13] (JSXText) `This is a minimal version of the component for testing.` → key: `common.interactivedatavisualization_minimal.this_is_a_minimal_version` — Static JSX text node
  - context: `nter py-8"> <p className="text-lg text-muted-foreground"> This is a minimal version of the component for testing. </p>`
- [32:16] (JSXText) `Sensory Inputs:` → key: `common.interactivedatavisualization_minimal.sensory_inputs` — Static JSX text node
  - context: `text-sm"> <p>Emotions: {emotions.length} entries</p> <p>Sensory Inputs: {sensoryInputs.length} entries</p> <p>Tracking Entri`
- [33:16] (JSXText) `Tracking Entries:` → key: `common.interactivedatavisualization_minimal.tracking_entries` — Static JSX text node
  - context: `<p>Sensory Inputs: {sensoryInputs.length} entries</p> <p>Tracking Entries: {trackingEntries.length} entries</p> </div>`

### src/components/InteractiveDataVisualization.tsx
- [172:20] (MessageAPI) `Export failed` → key: `common.interactivedatavisualization.export_failed` — Message API call: error()
  - context: `oUpperCase()} exported successfully\`); } catch (error) { logger.error('Export failed', { error }); toast.error('Failed to export interactive ana`
- [173:19] (MessageAPI) `Failed to export interactive analytics data` → key: `common.interactivedatavisualization.failed_to_export_interactive_analytics` — Message API call: error()
  - context: `tch (error) { logger.error('Export failed', { error }); toast.error('Failed to export interactive analytics data'); } finally { setIsExpor`
- [173:19] (MessageAPI) `Failed to export interactive analytics data` → key: `common.interactivedatavisualization.failed_to_export_interactive_analytics` — sonner toast.error()
  - context: `tch (error) { logger.error('Export failed', { error }); toast.error('Failed to export interactive analytics data'); } finally { setIsExpor`

### src/components/MockDataLoader.tsx
- [84:21] (MessageAPI) `Mock data loaded successfully!` → key: `common.mockdataloader.mock_data_loaded_successfully` — Message API call: success()
  - context: `ario}" with ${stats.entriesCount} tracking entries\`; toast.success('Mock data loaded successfully!', { description, });`
- [84:21] (MessageAPI) `Mock data loaded successfully!` → key: `common.mockdataloader.mock_data_loaded_successfully` — sonner toast.success()
  - context: `ario}" with ${stats.entriesCount} tracking entries\`; toast.success('Mock data loaded successfully!', { description, });`
- [97:19] (MessageAPI) `Failed to load mock data` → key: `common.mockdataloader.failed_to_load_mock_data` — Message API call: error()
  - context: `{ clearInterval(progressIntervalRef.current); } toast.error('Failed to load mock data', { description: error instanceof Error ? erro`
- [97:19] (MessageAPI) `Failed to load mock data` → key: `common.mockdataloader.failed_to_load_mock_data` — sonner toast.error()
  - context: `{ clearInterval(progressIntervalRef.current); } toast.error('Failed to load mock data', { description: error instanceof Error ? erro`
- [114:21] (MessageAPI) `Mock data cleared successfully!` → key: `common.mockdataloader.mock_data_cleared_successfully` — Message API call: success()
  - context: `() => { try { clearMockDataFromStorage(); toast.success('Mock data cleared successfully!'); // Dispatch a custom event to f`
- [114:21] (MessageAPI) `Mock data cleared successfully!` → key: `common.mockdataloader.mock_data_cleared_successfully` — sonner toast.success()
  - context: `() => { try { clearMockDataFromStorage(); toast.success('Mock data cleared successfully!'); // Dispatch a custom event to f`
- [120:19] (MessageAPI) `Failed to clear mock data` → key: `common.mockdataloader.failed_to_clear_mock_data` — Message API call: error()
  - context: `CustomEvent('mockDataLoaded')); } catch (error) { toast.error('Failed to clear mock data', { description: error instanceof Error ? err`
- [120:19] (MessageAPI) `Failed to clear mock data` → key: `common.mockdataloader.failed_to_clear_mock_data` — sonner toast.error()
  - context: `CustomEvent('mockDataLoaded')); } catch (error) { toast.error('Failed to clear mock data', { description: error instanceof Error ? err`
- [138:11] (JSXText) `Mock Data for Testing` → key: `common.mockdataloader.mock_data_for_testing` — Static JSX text node
  - context: `enter gap-2"> <Database className="h-5 w-5 text-primary" /> Mock Data for Testing </CardTitle> </CardHeader> <CardConten`
- [143:11] (JSXText) `Load realistic test data to explore pattern analysis and correlation features.
          Mock data includes 3 students with 3-6 months of tracking data each.` → key: `common.mockdataloader.load_realistic_test_data_to` — Static JSX text node
  - context: `="space-y-4"> <div className="text-sm text-muted-foreground"> Load realistic test data to explore pattern analysis and correlation features.`
- [150:48] (JSXText) `Students to be created:` → key: `common.mockdataloader.students_to_be_created` — Static JSX text node
  - context: `<div className="space-y-2"> <div className="text-sm font-medium">Students to be created:</div> <div className="space-y-1">`
- [164:50] (JSXText) `Current Data:` → key: `common.mockdataloader.current_data` — Static JSX text node
  - context: `uted/50 rounded-lg space-y-1"> <div className="text-sm font-medium">Current Data:</div> <div className="text-xs text-muted-foreground sp`
- [166:20] (JSXText) `•` → key: `common.mockdataloader.` — Static JSX text node
  - context: `<div className="text-xs text-muted-foreground space-y-1"> <div>• {currentStats.studentsCount} students</div> <div>• {currentStats`
- [167:20] (JSXText) `•` → key: `common.mockdataloader.` — Static JSX text node
  - context: `<div>• {currentStats.studentsCount} students</div> <div>• {currentStats.entriesCount} tracking entries</div> {hasMockData`
- [167:50] (JSXText) `tracking entries` → key: `common.mockdataloader.tracking_entries` — Static JSX text node
  - context: `.studentsCount} students</div> <div>• {currentStats.entriesCount} tracking entries</div> {hasMockData && <div className="text-orange`
- [168:64] (JSXText) `• Contains mock data` → key: `common.mockdataloader.contains_mock_data` — Static JSX text node
  - context: `ng entries</div> {hasMockData && <div className="text-orange-600">• Contains mock data</div>} </div> </div> )}`
- [182:42] (JSXAttribute) `Select scenario` → key: `common.mockdataloader.select_scenario` — Static placeholder attribute
  - context: `<SelectTrigger className="w-full"> <SelectValue placeholder="Select scenario" /> </SelectTrigger> <SelectContent`
- [185:41] (JSXText) `All (Emma, Lars, Astrid)` → key: `common.mockdataloader.all_emma_lars_astrid` — Static JSX text node
  - context: `tTrigger> <SelectContent> <SelectItem value="all">All (Emma, Lars, Astrid)</SelectItem> <SelectItem value="emma">E`
- [186:42] (JSXText) `Emma (mild anxiety, improving)` → key: `common.mockdataloader.emma_mild_anxiety_improving` — Static JSX text node
  - context: `>All (Emma, Lars, Astrid)</SelectItem> <SelectItem value="emma">Emma (mild anxiety, improving)</SelectItem> <SelectItem value="l`
- [187:42] (JSXText) `Lars (sensory challenges)` → key: `common.mockdataloader.lars_sensory_challenges` — Static JSX text node
  - context: `(mild anxiety, improving)</SelectItem> <SelectItem value="lars">Lars (sensory challenges)</SelectItem> <SelectItem value="astrid`
- [188:44] (JSXText) `Astrid (steady improvement)` → key: `common.mockdataloader.astrid_steady_improvement` — Static JSX text node
  - context: `rs (sensory challenges)</SelectItem> <SelectItem value="astrid">Astrid (steady improvement)</SelectItem> </SelectContent>`
- [197:60] (JSXText) `Loading mock data...` → key: `common.mockdataloader.loading_mock_data` — Static JSX text node
  - context: `assName="space-y-2"> <div className="text-sm text-muted-foreground">Loading mock data...</div> <Progress value={loadingProgress} classNa`
- [210:13] (JSXText) `Load Mock Data` → key: `common.mockdataloader.load_mock_data` — Static JSX text node
  - context: `Data} > <Database className="h-4 w-4 mr-2" /> Load Mock Data </Button> {hasMockData && ( <Ale`
- [222:19] (JSXText) `Clear All` → key: `common.mockdataloader.clear_all` — Static JSX text node
  - context: `> <Trash2 className="h-4 w-4 mr-2" /> Clear All </Button> </AlertDialogTrigger>`
- [227:37] (JSXText) `Clear All Data?` → key: `common.mockdataloader.clear_all_data` — Static JSX text node
  - context: `ontent> <AlertDialogHeader> <AlertDialogTitle>Clear All Data?</AlertDialogTitle> <AlertDialogDescription>`
- [229:21] (JSXText) `This will permanently delete all student data and tracking entries. 
                    This action cannot be undone.` → key: `common.mockdataloader.this_will_permanently_delete_all` — Static JSX text node
  - context: `lertDialogTitle> <AlertDialogDescription> This will permanently delete all student data and tracking entries.`
- [237:21] (JSXText) `Clear All Data` → key: `common.mockdataloader.clear_all_data` — Static JSX text node
  - context: `e"> <Trash2 className="h-4 w-4 mr-2" /> Clear All Data </AlertDialogAction> </AlertDia`
- [247:53] (JSXText) `Features you can test:` → key: `common.mockdataloader.features_you_can_test` — Static JSX text node
  - context: `-3 border-t border-border"> <div className="text-sm font-medium mb-2">Features you can test:</div> <div className="text-xs text-muted-foregr`
- [249:18] (JSXText) `• Emotion pattern recognition` → key: `common.mockdataloader.emotion_pattern_recognition` — Static JSX text node
  - context: `<div className="text-xs text-muted-foreground space-y-1"> <div>• Emotion pattern recognition</div> <div>• Sensory input correlation`
- [250:18] (JSXText) `• Sensory input correlations` → key: `common.mockdataloader.sensory_input_correlations` — Static JSX text node
  - context: `ace-y-1"> <div>• Emotion pattern recognition</div> <div>• Sensory input correlations</div> <div>• Environmental factor analy`
- [251:18] (JSXText) `• Environmental factor analysis` → key: `common.mockdataloader.environmental_factor_analysis` — Static JSX text node
  - context: `tion</div> <div>• Sensory input correlations</div> <div>• Environmental factor analysis</div> <div>• Predictive insights & t`
- [252:18] (JSXText) `• Predictive insights & trends` → key: `common.mockdataloader.predictive_insights_trends` — Static JSX text node
  - context: `s</div> <div>• Environmental factor analysis</div> <div>• Predictive insights & trends</div> <div>• Interactive data visuali`
- [253:18] (JSXText) `• Interactive data visualization` → key: `common.mockdataloader.interactive_data_visualization` — Static JSX text node
  - context: `is</div> <div>• Predictive insights & trends</div> <div>• Interactive data visualization</div> <div>• Alert system & anomaly`
- [254:18] (JSXText) `• Alert system & anomaly detection` → key: `common.mockdataloader.alert_system_anomaly_detection` — Static JSX text node
  - context: `</div> <div>• Interactive data visualization</div> <div>• Alert system & anomaly detection</div> </div> </div> <`

### src/components/NoData.tsx
- [6:8] (JSXText) `No data available for this visualization.` → key: `common.nodata.no_data_available_for_this` — Static JSX text node
  - context: `ata = () => ( <div className="text-center py-8 text-muted-foreground"> <p>No data available for this visualization.</p> </div> );`

### src/components/POCBadge.tsx
- [6:75] (JSXText) `POC Mode` → key: `common.pocbadge.poc_mode` — Static JSX text node
  - context: `urn ( <Badge variant="outline" className="uppercase tracking-wider text-xs">POC Mode</Badge> ); };`

### src/components/PaginatedSessionsList.tsx
- [60:14] (JSXText) `No sessions available in the selected period.` → key: `common.paginatedsessionslist.no_sessions_available_in_the` — Static JSX text node
  - context: `<CardContent className="py-16 text-center text-muted-foreground"> <p>No sessions available in the selected period.</p> </CardContent> <`
- [93:13] (JSXText) `Loading sessions...` → key: `common.paginatedsessionslist.loading_sessions` — Static JSX text node
  - context: `( <div className="text-center p-8 text-muted-foreground"> Loading sessions... </div> ) : ( <div> {`
- [114:27] (JSXText) `Environmental data` → key: `common.paginatedsessionslist.environmental_data` — Static JSX text node
  - context: `<Badge variant="outline" className="text-xs"> Environmental data </Badge> )}`
- [153:32] (JSXAttribute) `First page` → key: `common.paginatedsessionslist.first_page` — Static aria-label attribute
  - context: `variant="ghost" size="icon" aria-label="First page" onClick={goToFirstPage} dis`
- [163:32] (JSXAttribute) `Previous page` → key: `common.paginatedsessionslist.previous_page` — Static aria-label attribute
  - context: `variant="ghost" size="icon" aria-label="Previous page" onClick={goToPreviousPage}`
- [196:32] (JSXAttribute) `Next page` → key: `common.paginatedsessionslist.next_page` — Static aria-label attribute
  - context: `variant="ghost" size="icon" aria-label="Next page" onClick={goToNextPage} disab`
- [206:32] (JSXAttribute) `Last page` → key: `common.paginatedsessionslist.last_page` — Static aria-label attribute
  - context: `variant="ghost" size="icon" aria-label="Last page" onClick={goToLastPage} disab`

### src/components/PeriodComparison.tsx
- [211:19] (JSXText) `Most common changed from` → key: `common.periodcomparison.most_common_changed_from` — Static JSX text node
  - context: `dge> <span className="text-muted-foreground"> Most common changed from <span className="font-medium">{comparisonStats.mostComm`
- [221:19] (JSXText) `Average intensity` → key: `common.periodcomparison.average_intensity` — Static JSX text node
  - context: `dge> <span className="text-muted-foreground"> Average intensity{" "} {currentStats.avgEmotionIntensity > com`
- [234:19] (JSXText) `Sensory seeking behavior` → key: `common.periodcomparison.sensory_seeking_behavior` — Static JSX text node
  - context: `dge> <span className="text-muted-foreground"> Sensory seeking behavior{" "} {currentStats.seekingRatio > com`

### src/components/StorageManager.tsx
- [34:21] (MessageAPI) `Old data cleared successfully` → key: `common.storagemanager.old_data_cleared_successfully` — Message API call: success()
  - context: `=> { try { storageUtils.clearOldTrackingData(30); toast.success('Old data cleared successfully'); refreshStats(); } catch (error) {`
- [34:21] (MessageAPI) `Old data cleared successfully` → key: `common.storagemanager.old_data_cleared_successfully` — sonner toast.success()
  - context: `=> { try { storageUtils.clearOldTrackingData(30); toast.success('Old data cleared successfully'); refreshStats(); } catch (error) {`
- [37:20] (MessageAPI) `Failed to clear old tracking data` → key: `common.storagemanager.failed_to_clear_old_tracking` — Message API call: error()
  - context: `successfully'); refreshStats(); } catch (error) { logger.error('Failed to clear old tracking data', error); toast.error('Failed to clear`
- [38:19] (MessageAPI) `Failed to clear old data` → key: `common.storagemanager.failed_to_clear_old_data` — Message API call: error()
  - context: `logger.error('Failed to clear old tracking data', error); toast.error('Failed to clear old data'); } }; const handleClearNonEssential = () =>`
- [38:19] (MessageAPI) `Failed to clear old data` → key: `common.storagemanager.failed_to_clear_old_data` — sonner toast.error()
  - context: `logger.error('Failed to clear old tracking data', error); toast.error('Failed to clear old data'); } }; const handleClearNonEssential = () =>`
- [45:21] (MessageAPI) `Non-essential data cleared` → key: `common.storagemanager.non_essential_data_cleared` — Message API call: success()
  - context: `=> { try { storageUtils.clearNonEssentialData(); toast.success('Non-essential data cleared'); refreshStats(); } catch (error) {`
- [45:21] (MessageAPI) `Non-essential data cleared` → key: `common.storagemanager.non_essential_data_cleared` — sonner toast.success()
  - context: `=> { try { storageUtils.clearNonEssentialData(); toast.success('Non-essential data cleared'); refreshStats(); } catch (error) {`
- [48:20] (MessageAPI) `Failed to clear non-essential data` → key: `common.storagemanager.failed_to_clear_non_essential` — Message API call: error()
  - context: `data cleared'); refreshStats(); } catch (error) { logger.error('Failed to clear non-essential data', error); toast.error('Failed to clear`
- [49:19] (MessageAPI) `Failed to clear non-essential data` → key: `common.storagemanager.failed_to_clear_non_essential` — Message API call: error()
  - context: `logger.error('Failed to clear non-essential data', error); toast.error('Failed to clear non-essential data'); } }; /** * Handle clearing al`
- [49:19] (MessageAPI) `Failed to clear non-essential data` → key: `common.storagemanager.failed_to_clear_non_essential` — sonner toast.error()
  - context: `logger.error('Failed to clear non-essential data', error); toast.error('Failed to clear non-essential data'); } }; /** * Handle clearing al`
- [61:40] (MessageAPI) `Are you sure you want to clear ALL data? This cannot be undone!` → key: `common.storagemanager.are_you_sure_you_want` — Message API call: confirm()
  - context: `using a custom modal component try { const confirmed = window.confirm('Are you sure you want to clear ALL data? This cannot be undone!'); if (co`
- [65:25] (MessageAPI) `All data cleared` → key: `common.storagemanager.all_data_cleared` — Message API call: success()
  - context: `) { try { dataStorage.clearAllData(); toast.success('All data cleared'); // Use window.location.replace for better history`
- [65:25] (MessageAPI) `All data cleared` → key: `common.storagemanager.all_data_cleared` — sonner toast.success()
  - context: `) { try { dataStorage.clearAllData(); toast.success('All data cleared'); // Use window.location.replace for better history`
- [69:24] (MessageAPI) `Failed to clear all data` → key: `common.storagemanager.failed_to_clear_all_data` — Message API call: error()
  - context: `window.location.replace('/'); } catch (error) { logger.error('Failed to clear all data', error); toast.error('Failed to clear all d`
- [70:23] (MessageAPI) `Failed to clear all data` → key: `common.storagemanager.failed_to_clear_all_data` — Message API call: error()
  - context: `logger.error('Failed to clear all data', error); toast.error('Failed to clear all data'); } } } catch (error) { // Ha`
- [70:23] (MessageAPI) `Failed to clear all data` → key: `common.storagemanager.failed_to_clear_all_data` — sonner toast.error()
  - context: `logger.error('Failed to clear all data', error); toast.error('Failed to clear all data'); } } } catch (error) { // Ha`
- [75:20] (MessageAPI) `Confirmation dialog failed` → key: `common.storagemanager.confirmation_dialog_failed` — Message API call: error()
  - context: `s where confirm might fail (e.g., in some test environments) logger.error('Confirmation dialog failed', error); toast.error('Could not show confirma`
- [76:19] (MessageAPI) `Could not show confirmation dialog` → key: `common.storagemanager.could_not_show_confirmation_dialog` — Message API call: error()
  - context: `nts) logger.error('Confirmation dialog failed', error); toast.error('Could not show confirmation dialog'); } }; const formatBytes = (bytes:`
- [76:19] (MessageAPI) `Could not show confirmation dialog` → key: `common.storagemanager.could_not_show_confirmation_dialog` — sonner toast.error()
  - context: `nts) logger.error('Confirmation dialog failed', error); toast.error('Could not show confirmation dialog'); } }; const formatBytes = (bytes:`
- [95:11] (JSXText) `Storage Management` → key: `common.storagemanager.storage_management` — Static JSX text node
  - context: `"flex items-center gap-2"> <Database className="h-5 w-5" /> Storage Management </CardTitle> <CardDescription> Mana`
- [98:11] (JSXText) `Manage your local storage to ensure smooth operation` → key: `common.storagemanager.manage_your_local_storage_to` — Static JSX text node
  - context: `Storage Management </CardTitle> <CardDescription> Manage your local storage to ensure smooth operation </CardDescription>`
- [104:44] (JSXText) `Storage Usage` → key: `common.storagemanager.storage_usage` — Static JSX text node
  - context: `{/* Storage Usage */} <div> <h3 className="font-medium mb-2">Storage Usage</h3> <div className="space-y-2"> <div classN`
- [108:53] (JSXText) `/ ~5 MB` → key: `common.storagemanager.5_mb` — Static JSX text node
  - context: `<span>Used</span> <span>{formatBytes(storageInfo.used)} / ~5 MB</span> </div> <div className="w-full">`
- [121:44] (JSXText) `Data Statistics` → key: `common.storagemanager.data_statistics` — Static JSX text node
  - context: `{/* Storage Stats */} <div> <h3 className="font-medium mb-2">Data Statistics</h3> <div className="grid grid-cols-2 gap-2 text-sm">`
- [152:13] (JSXText) `Clear data older than 30 days` → key: `common.storagemanager.clear_data_older_than_30` — Static JSX text node
  - context: `-start" > <Trash2 className="h-4 w-4 mr-2" /> Clear data older than 30 days </Button> <Button`
- [160:13] (JSXText) `Clear non-essential data` → key: `common.storagemanager.clear_non_essential_data` — Static JSX text node
  - context: `-start" > <Trash2 className="h-4 w-4 mr-2" /> Clear non-essential data </Button> <Button varia`
- [168:13] (JSXText) `Clear ALL data (irreversible)` → key: `common.storagemanager.clear_all_data_irreversible` — Static JSX text node
  - context: `-start" > <Trash2 className="h-4 w-4 mr-2" /> Clear ALL data (irreversible) </Button> </div> {stora`
- [176:15] (JSXText) `Storage is healthy with sufficient space available.` → key: `common.storagemanager.storage_is_healthy_with_sufficient` — Static JSX text node
  - context: `CheckCircle className="h-4 w-4" /> <AlertDescription> Storage is healthy with sufficient space available. </AlertDescripti`

### src/components/TestingDebugPanel.tsx
- [202:21] (MessageAPI) `System tests completed successfully` → key: `common.testingdebugpanel.system_tests_completed_successfully` — Message API call: success()
  - context: `ilable" }; setTestResults([...results]); toast.success("System tests completed successfully"); } catch (error) { logge`
- [202:21] (MessageAPI) `System tests completed successfully` → key: `common.testingdebugpanel.system_tests_completed_successfully` — sonner toast.success()
  - context: `ilable" }; setTestResults([...results]); toast.success("System tests completed successfully"); } catch (error) { logge`
- [205:20] (MessageAPI) `System test error` → key: `common.testingdebugpanel.system_test_error` — Message API call: error()
  - context: `tests completed successfully"); } catch (error) { logger.error('System test error', { error }); results.push({ name: "Test Error"`
- [212:19] (MessageAPI) `Some tests failed` → key: `common.testingdebugpanel.some_tests_failed` — Message API call: error()
  - context: `nknown error'}\` }); setTestResults([...results]); toast.error("Some tests failed"); } finally { setIsRunningTests(false); } };`
- [212:19] (MessageAPI) `Some tests failed` → key: `common.testingdebugpanel.some_tests_failed` — sonner toast.error()
  - context: `nknown error'}\` }); setTestResults([...results]); toast.error("Some tests failed"); } finally { setIsRunningTests(false); } };`
- [241:19] (MessageAPI) `Analytics cache cleared successfully` → key: `common.testingdebugpanel.analytics_cache_cleared_successfully` — Message API call: success()
  - context: `) => { analyticsWorker.clearCache(); uiCache.clear(); toast.success("Analytics cache cleared successfully"); }, [analyticsWorker, uiCache]); co`
- [241:19] (MessageAPI) `Analytics cache cleared successfully` → key: `common.testingdebugpanel.analytics_cache_cleared_successfully` — sonner toast.success()
  - context: `) => { analyticsWorker.clearCache(); uiCache.clear(); toast.success("Analytics cache cleared successfully"); }, [analyticsWorker, uiCache]); co`
- [256:13] (JSXText) `System Testing & Debug Panel` → key: `common.testingdebugpanel.system_testing_debug_panel` — Static JSX text node
  - context: `="flex items-center gap-2"> <Bug className="h-5 w-5" /> System Testing & Debug Panel </CardTitle> </CardHeader>`
- [262:15] (JSXText) `Test current system functionality and data integrity` → key: `common.testingdebugpanel.test_current_system_functionality_and` — Static JSX text node
  - context: `tween"> <p className="text-sm text-muted-foreground"> Test current system functionality and data integrity </p>`
- [269:26] (JSXAttribute) `Run system tests` → key: `common.testingdebugpanel.run_system_tests` — Static aria-label attribute
  - context: `size="sm" variant="outline" aria-label="Run system tests" title="Run system tests" >`
- [270:21] (JSXAttribute) `Run system tests` → key: `common.testingdebugpanel.run_system_tests` — Static title attribute
  - context: `riant="outline" aria-label="Run system tests" title="Run system tests" > {isRunningTests ? (`
- [275:54] (JSXText) `Running Tests...` → key: `common.testingdebugpanel.running_tests` — Static JSX text node
  - context: `w-4 mr-2 animate-spin" /> <span className="hidden sm:inline">Running Tests...</span> </> ) : (`
- [280:54] (JSXText) `Run System Tests` → key: `common.testingdebugpanel.run_system_tests` — Static JSX text node
  - context: `lassName="h-4 w-4 mr-2" /> <span className="hidden sm:inline">Run System Tests</span> </> )} </Butto`
- [288:51] (JSXText) `Test Results:` → key: `common.testingdebugpanel.test_results` — Static JSX text node
  - context: `<div className="space-y-3"> <h4 className="text-sm font-medium">Test Results:</h4> {testResults.map((result) => (`
- [307:54] (JSXText) `Quick Stats:` → key: `common.testingdebugpanel.quick_stats` — Static JSX text node
  - context: `4 border-t border-border"> <h4 className="text-sm font-medium mb-2">Quick Stats:</h4> <div className="grid grid-cols-3 gap-3 text-center`
- [331:13] (JSXText) `Analytics Cache Management` → key: `common.testingdebugpanel.analytics_cache_management` — Static JSX text node
  - context: `ex items-center gap-2"> <Archive className="h-5 w-5" /> Analytics Cache Management </CardTitle> </CardHeader>`
- [340:57] (JSXText) `Cache Hit Rate` → key: `common.testingdebugpanel.cache_hit_rate` — Static JSX text node
  - context: `enter justify-between"> <span className="text-sm font-medium">Cache Hit Rate</span> <div className="flex items-center gap-2"`
- [349:69] (JSXText) `Cache Size` → key: `common.testingdebugpanel.cache_size` — Static JSX text node
  - context: `flex-col"> <span className="text-xs text-muted-foreground">Cache Size</span> <span className="text-lg font-semibold">{c`
- [353:69] (JSXText) `Memory Usage` → key: `common.testingdebugpanel.memory_usage` — Static JSX text node
  - context: `flex-col"> <span className="text-xs text-muted-foreground">Memory Usage</span> <span className="text-lg font-semibold">`
- [381:53] (JSXText) `Cache Actions` → key: `common.testingdebugpanel.cache_actions` — Static JSX text node
  - context: `t border-border space-y-3"> <h4 className="text-sm font-medium">Cache Actions</h4> <div className="flex gap-2">`
- [388:30] (JSXAttribute) `Clear all analytics cache` → key: `common.testingdebugpanel.clear_all_analytics_cache` — Static aria-label attribute
  - context: `leClearCache} className="flex-1" aria-label="Clear all analytics cache" title="Clear all analytics cache"`
- [389:25] (JSXAttribute) `Clear all analytics cache` → key: `common.testingdebugpanel.clear_all_analytics_cache` — Static title attribute
  - context: `aria-label="Clear all analytics cache" title="Clear all analytics cache" > <Trash2 classNam`
- [392:54] (JSXText) `Clear All Cache` → key: `common.testingdebugpanel.clear_all_cache` — Static JSX text node
  - context: `lassName="h-4 w-4 mr-2" /> <span className="hidden sm:inline">Clear All Cache</span> </Button> <Button`
- [399:30] (JSXAttribute) `Clean expired cache entries` → key: `common.testingdebugpanel.clean_expired_cache_entries` — Static aria-label attribute
  - context: `he.cleanup()} className="flex-1" aria-label="Clean expired cache entries" title="Clean expired cache entri`
- [400:25] (JSXAttribute) `Clean expired cache entries` → key: `common.testingdebugpanel.clean_expired_cache_entries` — Static title attribute
  - context: `aria-label="Clean expired cache entries" title="Clean expired cache entries" > <RefreshCw cla`
- [403:54] (JSXText) `Clean Expired` → key: `common.testingdebugpanel.clean_expired` — Static JSX text node
  - context: `lassName="h-4 w-4 mr-2" /> <span className="hidden sm:inline">Clean Expired</span> </Button> </div>`
- [408:22] (JSXText) `• Cache TTL: 5 minutes` → key: `common.testingdebugpanel.cache_ttl_5_minutes` — Static JSX text node
  - context: `<div className="text-xs text-muted-foreground"> <p>• Cache TTL: 5 minutes</p> <p>• Eviction: LRU (Least Recently`
- [409:22] (JSXText) `• Eviction: LRU (Least Recently Used)` → key: `common.testingdebugpanel.eviction_lru_least_recently_used` — Static JSX text node
  - context: `reground"> <p>• Cache TTL: 5 minutes</p> <p>• Eviction: LRU (Least Recently Used)</p> <p>• Invalidations:`
- [410:22] (JSXText) `• Invalidations:` → key: `common.testingdebugpanel.invalidations` — Static JSX text node
  - context: `<p>• Eviction: LRU (Least Recently Used)</p> <p>• Invalidations: {cacheStats.invalidations || 0}</p> </div>`

### src/components/TestingToolsSection.tsx
- [20:44] (JSXText) `Testing & Development Tools` → key: `common.testingtoolssection.testing_development_tools` — Static JSX text node
  - context: `v className="space-y-6"> <div> <h2 className="text-2xl font-bold">Testing & Development Tools</h2> <p className="text-muted-foreground">`
- [22:11] (JSXText) `Tools for testing pattern analysis features and debugging data issues` → key: `common.testingtoolssection.tools_for_testing_pattern_analysis` — Static JSX text node
  - context: `Development Tools</h2> <p className="text-muted-foreground"> Tools for testing pattern analysis features and debugging data issues </`
- [32:15] (JSXText) `Mock Data Generator` → key: `common.testingtoolssection.mock_data_generator` — Static JSX text node
  - context: `p-2"> <Database className="h-5 w-5 text-primary" /> Mock Data Generator </CardTitle> </CardHeader> <`
- [37:15] (JSXText) `Load realistic test data to explore pattern analysis features` → key: `common.testingtoolssection.load_realistic_test_data_to` — Static JSX text node
  - context: `t> <p className="text-sm text-muted-foreground mb-4"> Load realistic test data to explore pattern analysis features </p>`
- [43:19] (JSXText) `Load Mock Data` → key: `common.testingtoolssection.load_mock_data` — Static JSX text node
  - context: `-90"> <Database className="h-4 w-4 mr-2" /> Load Mock Data </Button> </DialogTrigger>`
- [48:32] (JSXText) `Mock Data for Testing & Analysis` → key: `common.testingtoolssection.mock_data_for_testing_analysis` — Static JSX text node
  - context: `overflow-y-auto"> <DialogHeader> <DialogTitle>Mock Data for Testing & Analysis</DialogTitle> <DialogDescript`
- [50:21] (JSXText) `Load realistic sample students and entries to explore features safely.` → key: `common.testingtoolssection.load_realistic_sample_students_and` — Static JSX text node
  - context: `nalysis</DialogTitle> <DialogDescription> Load realistic sample students and entries to explore features safely.`
- [64:15] (JSXText) `Debug Panel` → key: `common.testingtoolssection.debug_panel` — Static JSX text node
  - context: `er gap-2"> <Bug className="h-5 w-5 text-primary" /> Debug Panel </CardTitle> </CardHeader> <CardCont`
- [69:15] (JSXText) `Advanced debugging and data inspection tools` → key: `common.testingtoolssection.advanced_debugging_and_data_inspection` — Static JSX text node
  - context: `t> <p className="text-sm text-muted-foreground mb-4"> Advanced debugging and data inspection tools </p> <Dialo`
- [75:19] (JSXText) `Open Debug Panel` → key: `common.testingtoolssection.open_debug_panel` — Static JSX text node
  - context: `="w-full"> <Bug className="h-4 w-4 mr-2" /> Open Debug Panel </Button> </DialogTrigger>`
- [80:32] (JSXText) `Debug & Data Inspection` → key: `common.testingtoolssection.debug_data_inspection` — Static JSX text node
  - context: `overflow-y-auto"> <DialogHeader> <DialogTitle>Debug & Data Inspection</DialogTitle> <DialogDescription>`
- [82:21] (JSXText) `Advanced debugging tools for inspecting state, storage, and analytics.` → key: `common.testingtoolssection.advanced_debugging_tools_for_inspecting` — Static JSX text node
  - context: `pection</DialogTitle> <DialogDescription> Advanced debugging tools for inspecting state, storage, and analytics.`
- [96:15] (JSXText) `Pattern Analysis Testing Guide` → key: `common.testingtoolssection.pattern_analysis_testing_guide` — Static JSX text node
  - context: `gap-2"> <Beaker className="h-5 w-5 text-primary" /> Pattern Analysis Testing Guide </CardTitle> </CardHeader>`
- [102:17] (JSXText) `To test pattern analysis features effectively:` → key: `common.testingtoolssection.to_test_pattern_analysis_features` — Static JSX text node
  - context: `4"> <p className="text-sm text-muted-foreground"> To test pattern analysis features effectively: </p>`
- [106:60] (JSXText) `Data Requirements:` → key: `common.testingtoolssection.data_requirements` — Static JSX text node
  - context: `<div> <h4 className="font-medium text-sm mb-2">Data Requirements:</h4> <ul className="text-xs text-muted-fore`
- [108:25] (JSXText) `• At least 10 tracking entries for basic patterns` → key: `common.testingtoolssection.at_least_10_tracking_entries` — Static JSX text node
  - context: `ul className="text-xs text-muted-foreground space-y-1"> <li>• At least 10 tracking entries for basic patterns</li> <li>•`
- [109:25] (JSXText) `• 30+ entries for correlation analysis` → key: `common.testingtoolssection.30_entries_for_correlation_analysis` — Static JSX text node
  - context: `>• At least 10 tracking entries for basic patterns</li> <li>• 30+ entries for correlation analysis</li> <li>• 90+ entrie`
- [110:25] (JSXText) `• 90+ entries for predictive insights` → key: `common.testingtoolssection.90_entries_for_predictive_insights` — Static JSX text node
  - context: `<li>• 30+ entries for correlation analysis</li> <li>• 90+ entries for predictive insights</li> <li>• Multiple st`
- [111:25] (JSXText) `• Multiple students for comparative analysis` → key: `common.testingtoolssection.multiple_students_for_comparative_analysis` — Static JSX text node
  - context: `<li>• 90+ entries for predictive insights</li> <li>• Multiple students for comparative analysis</li> </ul>`
- [115:60] (JSXText) `Features to Test:` → key: `common.testingtoolssection.features_to_test` — Static JSX text node
  - context: `<div> <h4 className="font-medium text-sm mb-2">Features to Test:</h4> <ul className="text-xs text-muted-foreg`
- [117:25] (JSXText) `• Emotion trend analysis` → key: `common.testingtoolssection.emotion_trend_analysis` — Static JSX text node
  - context: `ul className="text-xs text-muted-foreground space-y-1"> <li>• Emotion trend analysis</li> <li>• Sensory correlation matr`
- [118:25] (JSXText) `• Sensory correlation matrices` → key: `common.testingtoolssection.sensory_correlation_matrices` — Static JSX text node
  - context: `> <li>• Emotion trend analysis</li> <li>• Sensory correlation matrices</li> <li>• Environmental impa`
- [119:25] (JSXText) `• Environmental impact patterns` → key: `common.testingtoolssection.environmental_impact_patterns` — Static JSX text node
  - context: `<li>• Sensory correlation matrices</li> <li>• Environmental impact patterns</li> <li>• Anomaly detection`
- [120:25] (JSXText) `• Anomaly detection alerts` → key: `common.testingtoolssection.anomaly_detection_alerts` — Static JSX text node
  - context: `<li>• Environmental impact patterns</li> <li>• Anomaly detection alerts</li> </ul> </div>`

### src/components/Visualization3D.tsx
- [57:13] (JSXText) `×` → key: `common.visualization3d.` — Static JSX text node
  - context: `ground transition-colors motion-reduce:transition-none" > × </button> </div> <p className="font-medium">{point.l`
- [346:11] (JSXText) `3D Correlation Visualization` → key: `common.visualization3d.3d_correlation_visualization` — Static JSX text node
  - context: `Name="flex items-center gap-2"> <Eye className="h-5 w-5" /> 3D Correlation Visualization </CardTitle> </CardHeader> <Car`
- [354:65] (JSXText) `X Axis` → key: `common.visualization3d.x_axis` — Static JSX text node
  - context: `<div> <label className="text-sm font-medium mb-1 block">X Axis</label> <Select value={xAxis} onValueChange={setXAxis}>`
- [370:65] (JSXText) `Y Axis` → key: `common.visualization3d.y_axis` — Static JSX text node
  - context: `<div> <label className="text-sm font-medium mb-1 block">Y Axis</label> <Select value={yAxis} onValueChange={setYAxis}>`
- [386:65] (JSXText) `Z Axis` → key: `common.visualization3d.z_axis` — Static JSX text node
  - context: `<div> <label className="text-sm font-medium mb-1 block">Z Axis</label> <Select value={zAxis} onValueChange={setZAxis}>`
- [404:65] (JSXText) `Color By` → key: `common.visualization3d.color_by` — Static JSX text node
  - context: `<div> <label className="text-sm font-medium mb-1 block">Color By</label> <Select value={colorBy} onValueChange={setColorBy`
- [417:65] (JSXText) `Filter Category` → key: `common.visualization3d.filter_category` — Static JSX text node
  - context: `<div> <label className="text-sm font-medium mb-1 block">Filter Category</label> <Select value={filterCategory} onValueChan`
- [433:17] (JSXText) `Point Size:` → key: `common.visualization3d.point_size` — Static JSX text node
  - context: `<label className="text-sm font-medium mb-1 block"> Point Size: {pointSize.toFixed(2)} </label> <Slider`
- [451:15] (JSXText) `Reduced motion enabled` → key: `common.visualization3d.reduced_motion_enabled` — Static JSX text node
  - context: `text-amber-800 dark:text-amber-200 px-3 py-1 rounded-md text-sm"> Reduced motion enabled </div> )} cCanvas`
- [454:11] (JSXText) `cCanvas
            camera=` → key: `common.visualization3d.ccanvas_camera` — Static JSX text node
  - context: `Reduced motion enabled </div> )} cCanvas camera={{ position: [10, 10, 10], fov: 50 }} cl`
- [456:13] (JSXText) `className="w-full h-full"
            onCreated=` → key: `common.visualization3d.classname_w_full_h_full` — Static JSX text node
  - context: `cCanvas camera={{ position: [10, 10, 10], fov: 50 }} className="w-full h-full" onCreated={({ gl }) => { con`
- [468:11] (JSXText) `e` → key: `common.visualization3d.e` — Static JSX text node
  - context: `.addEventListener('webglcontextrestored', onRestored); }} e <ambientLight intensity={0.5} /> <pointLight position`
- [553:45] (JSXText) `Low → High` → key: `common.visualization3d.low_high` — Static JSX text node
  - context: `a-yellow-500 to-red-500 rounded" /> <span className="text-xs">Low → High</span> </div> )} </div>`
- [562:18] (JSXText) `Total Sessions:` → key: `common.visualization3d.total_sessions` — Static JSX text node
  - context: `ace-y-1"> <p>Points: {filteredPoints.length}</p> <p>Total Sessions: {trackingEntries.length}</p> </div> </div>`

### src/components/VisualizationControls.tsx
- [102:11] (JSXText) `Interactive Data Analysis -` → key: `common.visualizationcontrols.interactive_data_analysis` — Static JSX text node
  - context: `"flex items-center gap-2"> <Activity className="h-5 w-5" /> Interactive Data Analysis - {studentName} {filterCriteria.realtime &&`
- [110:61] (JSXAttribute) `Visualization controls` → key: `common.visualizationcontrols.visualization_controls` — Static aria-label attribute
  - context: `</CardTitle> <div className="flex items-center gap-2" aria-label="Visualization controls"> {/* Guided question chips */} <div`
- [147:62] (JSXAttribute) `Open filters panel` → key: `common.visualizationcontrols.open_filters_panel` — Static aria-label attribute
  - context: `etTrigger asChild> <Button variant="outline" size="sm" aria-label="Open filters panel" title="Open filters panel"> <Filter classNa`
- [147:89] (JSXAttribute) `Open filters panel` → key: `common.visualizationcontrols.open_filters_panel` — Static title attribute
  - context: `<Button variant="outline" size="sm" aria-label="Open filters panel" title="Open filters panel"> <Filter className="h-4 w-4 mr-2" />`
- [175:29] (JSXText) `Advanced Filters` → key: `common.visualizationcontrols.advanced_filters` — Static JSX text node
  - context: `-[400px] sm:w-[540px]"> <SheetHeader> <SheetTitle>Advanced Filters</SheetTitle> <SheetDescription>`
- [177:19] (JSXText) `Configure multi-dimensional filters for your data analysis` → key: `common.visualizationcontrols.configure_multi_dimensional_filters_for` — Static JSX text node
  - context: `anced Filters</SheetTitle> <SheetDescription> Configure multi-dimensional filters for your data analysis </She`
- [196:28] (JSXAttribute) `Select layout mode` → key: `common.visualizationcontrols.select_layout_mode` — Static aria-label attribute
  - context: `variant="outline" size="sm" aria-label="Select layout mode" title="Select layout mode"`
- [197:23] (JSXAttribute) `Select layout mode` → key: `common.visualizationcontrols.select_layout_mode` — Static title attribute
  - context: `size="sm" aria-label="Select layout mode" title="Select layout mode" data-testid="layout-mode-trigger"`
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
  - context: `</div> <div className="flex items-center gap-2 mt-8" aria-label="Data counts"> <Badge variant="outline" className="bg-success/10 tex`
- [362:51] (JSXText) `sensory inputs` → key: `common.visualizationcontrols.sensory_inputs` — Static JSX text node
  - context: `10 text-info border-info/20"> {filteredData.sensoryInputs.length} sensory inputs </Badge> <Badge variant="outline" classNa`

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
  - context: `-destructive/30'; }; if (isAnalyzing) { return ( <div aria-label="Loading chart data" className="h-[400px] w-full"> <div className="h-ful`
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

### src/components/analysis/TeacherInsightsPanel.tsx
- [33:54] (JSXText) `n/a` → key: `common.teacherinsightspanel.n_a` — Static JSX text node
  - context: `oBadge = (p?: number) => { if (!p && p !== 0) return <Badge variant="outline">n/a</Badge>; const pct = Math.round(p * 100); const variant = p >= 0.7 ? 'de`
- [64:11] (JSXText) `Insights for` → key: `common.teacherinsightspanel.insights_for` — Static JSX text node
  - context: `flex items-center gap-2"> <Lightbulb className="h-5 w-5" /> Insights for {student.name} </CardTitle> </CardHeader> <Card`
- [71:13] (JSXText) `You’re viewing:` → key: `common.teacherinsightspanel.you_re_viewing` — Static JSX text node
  - context: `eset && ( <div className="text-sm text-muted-foreground"> You’re viewing: <span className="font-medium">{activePreset.replaceAll('_',' ')}`
- [77:13] (JSXText) `Limited data — results may change as more sessions are recorded. Try tracking for at least 7 days and 10 sessions for stronger findings.` → key: `common.teacherinsightspanel.limited_data_results_may_change` — Static JSX text node
  - context: `&& ( <div className="p-3 rounded-lg bg-muted/40 text-sm"> Limited data — results may change as more sessions are recorded. Try tracking fo`
- [86:17] (JSXText) `Pattern detected` → key: `common.teacherinsightspanel.pattern_detected` — Static JSX text node
  - context: `nter gap-2"> <TrendingUp className="h-4 w-4" /> Pattern detected </div> {scoreToBadge(topPattern.con`
- [97:61] (JSXText) `↔` → key: `common.teacherinsightspanel.` — Static JSX text node
  - context: `">Correlation</div> <div className="text-sm mt-1">{topCorr.factor1} ↔ {topCorr.factor2}</div> <div className="text-xs text-muted-foregro`
- [98:60] (JSXText) `r =` → key: `common.teacherinsightspanel.r` — Static JSX text node
  - context: `pCorr.factor2}</div> <div className="text-xs text-muted-foreground">r = {topCorr.correlation.toFixed(2)} ({topCorr.significance})</div> </`
- [105:68] (JSXText) `Recent Anomaly` → key: `common.teacherinsightspanel.recent_anomaly` — Static JSX text node
  - context: `ont-medium"> <AlertTriangle className="h-4 w-4 text-amber-600" /> Recent Anomaly </div> <div className="text-sm mt-1">{ano`
- [112:105] (JSXText) `Create Goal` → key: `common.teacherinsightspanel.create_goal` — Static JSX text node
  - context: `t="outline" size="sm" onClick={onCreateGoal}><Target className="h-4 w-4 mr-1" />Create Goal</Button> <Button variant="outline" size="sm" onClick={onAd`
- [113:75] (JSXText) `Add Intervention` → key: `common.teacherinsightspanel.add_intervention` — Static JSX text node
  - context: `tton> <Button variant="outline" size="sm" onClick={onAddIntervention}>Add Intervention</Button> <Button variant="outline" size="sm" onClick=`
- [114:73] (JSXText) `Schedule Break` → key: `common.teacherinsightspanel.schedule_break` — Static JSX text node
  - context: `Button> <Button variant="outline" size="sm" onClick={onScheduleBreak}>Schedule Break</Button> <Button variant="outline" size="sm" onClick={o`
- [115:74] (JSXText) `Track Now` → key: `common.teacherinsightspanel.track_now` — Static JSX text node
  - context: `utton> <Button variant="outline" size="sm" onClick={onJumpToTracking}>Track Now</Button> </div> <div className="text-xs text-muted-fo`
- [119:28] (JSXText) `sessions,` → key: `common.teacherinsightspanel.sessions` — Static JSX text node
  - context: `<div className="text-xs text-muted-foreground pt-2"> Data: {sessions} sessions, {emotions} emotions </div> </CardContent> </Card>`

### src/components/dev/ModelDiagnosticsPanel.tsx
- [176:20] (MessageAPI) `[ModelDiagnosticsPanel] Failed to run time-series CV` → key: `common.modeldiagnosticspanel.modeldiagnosticspanel_failed_to_run_time` — Message API call: error()
  - context: `tf.dispose([features, labels]); } catch (error) { logger.error('[ModelDiagnosticsPanel] Failed to run time-series CV', error); announce(t`
- [215:30] (JSXAttribute) `model-diagnostics-heading` → key: `common.modeldiagnosticspanel.model_diagnostics_heading` — Static aria-labelledby attribute
  - context: `st itemHeight = 56; // px per item row return ( <section aria-labelledby="model-diagnostics-heading" role="region" className={props.className}> <a`

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
- [89:24] (MessageAPI) `[LazyInteractiveDataVisualization] Minimal fallback failed, attempting debug` → key: `common.lazyinteractivedatavisualization.lazyinteractivedatavisualization_minimal_fallback_failed_attempting` — Message API call: error()
  - context: `d = true; resolve(res); } catch (e1) { logger.error('[LazyInteractiveDataVisualization] Minimal fallback failed, attempting debug',`
- [118:26] (MessageAPI) `[LazyInteractiveDataVisualization] Minimal version failed` → key: `common.lazyinteractivedatavisualization.lazyinteractivedatavisualization_minimal_version_failed` — Message API call: error()
  - context: `r); resolve(res); } catch (e1) { logger.error('[LazyInteractiveDataVisualization] Minimal version failed', e1); tr`
- [127:28] (MessageAPI) `[LazyInteractiveDataVisualization] All versions failed` → key: `common.lazyinteractivedatavisualization.lazyinteractivedatavisualization_all_versions_failed` — Message API call: error()
  - context: `settled = true; clearTimeout(timer); logger.error('[LazyInteractiveDataVisualization] All versions failed', e2); rej`

### src/components/lazy/LazyLoadWrapper.tsx
- [21:56] (JSXText) `Loading component...` → key: `common.lazyloadwrapper.loading_component` — Static JSX text node
  - context: `to mb-4 text-primary" /> <p className="text-sm text-muted-foreground">Loading component...</p> </div> </div> <div className="space`
- [37:53] (JSXText) `Failed to load component` → key: `common.lazyloadwrapper.failed_to_load_component` — Static JSX text node
  - context: `iv className="text-center"> <p className="text-destructive font-medium">Failed to load component</p> <p className="text-sm text-muted-foreground`
- [39:11] (JSXText) `Please refresh the page or try again later.` → key: `common.lazyloadwrapper.please_refresh_the_page_or` — Static JSX text node
  - context: `ponent</p> <p className="text-sm text-muted-foreground mt-2"> Please refresh the page or try again later. </p> </div> </Card`
- [81:18] (MessageAPI) `LazyLoadWrapper Error:` → key: `common.lazyloadwrapper.lazyloadwrapper_error` — Message API call: error()
  - context: `componentDidCatch(error: Error, errorInfo: React.ErrorInfo) { logger.error('LazyLoadWrapper Error:', error, errorInfo); } render() { if (this.stat`

### src/components/lazy/LazyReportBuilder.tsx
- [11:9] (JSXText) `Loading Report Builder...` → key: `common.lazyreportbuilder.loading_report_builder` — Static JSX text node
  - context: `s-center gap-2"> <FileText className="h-5 w-5 animate-pulse" /> Loading Report Builder... </CardTitle> </CardHeader> <CardContent`

### src/components/lazy/LazyVisualization3D.tsx
- [27:9] (JSXText) `3D Correlation Visualization` → key: `common.lazyvisualization3d.3d_correlation_visualization` — Static JSX text node
  - context: `lassName="flex items-center gap-2"> <Eye className="h-5 w-5" /> 3D Correlation Visualization </CardTitle> </CardHeader> <CardConte`
- [52:58] (JSXText) `Loading 3D visualization...` → key: `common.lazyvisualization3d.loading_3d_visualization` — Static JSX text node
  - context: `d-full mx-auto"></div> <p className="text-sm text-muted-foreground">Loading 3D visualization...</p> </div> </div> </div>`

### src/components/optimized/OptimizedCorrelationHeatmap.tsx
- [110:46] (JSXText) `No correlation data available` → key: `common.optimizedcorrelationheatmap.no_correlation_data_available` — Static JSX text node
  - context: `flex items-center justify-center"> <p className="text-muted-foreground">No correlation data available</p> </div> ); } return ( <div c`

### src/components/optimized/OptimizedDataRequirementsCalculator.tsx
- [235:13] (JSXText) `Datakrav for sikkerhetsnivå` → key: `common.optimizeddatarequirementscalculator.datakrav_for_sikkerhetsniv` — Static JSX text node
  - context: `lex items-center gap-2"> <Target className="h-5 w-5" /> Datakrav for sikkerhetsnivå </CardTitle> </CardHeader>`
- [241:13] (JSXText) `Ingen data registrert ennå. Start med å samle data for å se fremgang mot sikkerhetsnivåer.` → key: `common.optimizeddatarequirementscalculator.ingen_data_registrert_enn_start` — Static JSX text node
  - context: `foreground" /> <p className="text-muted-foreground mb-4"> Ingen data registrert ennå. Start med å samle data for å se fremgang mot sikkerh`
- [244:13] (JSXText) `Start datainnsamling` → key: `common.optimizeddatarequirementscalculator.start_datainnsamling` — Static JSX text node
  - context: `kkerhetsnivåer. </p> <Button variant="outline"> Start datainnsamling </Button> </CardContent> </Card>`
- [256:11] (JSXText) `Datakrav for sikkerhetsnivå` → key: `common.optimizeddatarequirementscalculator.datakrav_for_sikkerhetsniv` — Static JSX text node
  - context: `e="flex items-center gap-2"> <Target className="h-5 w-5" /> Datakrav for sikkerhetsnivå </CardTitle> <div className="flex it`
- [259:44] (JSXText) `datapunkter samlet` → key: `common.optimizeddatarequirementscalculator.datapunkter_samlet` — Static JSX text node
  - context: `ap-4 text-sm text-muted-foreground"> <span>{currentStatus.dataPoints} datapunkter samlet</span> <span>{currentStatus.daysSpan} dager med dat`
- [260:42] (JSXText) `dager med data` → key: `common.optimizeddatarequirementscalculator.dager_med_data` — Static JSX text node
  - context: `.dataPoints} datapunkter samlet</span> <span>{currentStatus.daysSpan} dager med data</span> </div> </CardHeader> <CardContent clas`
- [267:40] (JSXText) `Nåværende sikkerhetsnivå` → key: `common.optimizeddatarequirementscalculator.n_v_rende_sikkerhetsniv` — Static JSX text node
  - context: `bg-muted/50 rounded-lg"> <div> <p className="font-medium">Nåværende sikkerhetsnivå</p> <p className="text-sm text-muted-foregr`
- [281:43] (JSXText) `Fremgang mot` → key: `common.optimizeddatarequirementscalculator.fremgang_mot` — Static JSX text node
  - context: `="flex items-center justify-between"> <h4 className="font-medium">Fremgang mot {nextTarget.requirement.description}</h4> <span class`
- [283:50] (JSXText) `% fullført` → key: `common.optimizeddatarequirementscalculator.fullf_rt` — Static JSX text node
  - context: `ext-sm text-muted-foreground"> {Math.round(nextTarget.progress)}% fullført </span> </div> <Pr`
- [307:19] (JSXText) `Anbefalt: Samle` → key: `common.optimizeddatarequirementscalculator.anbefalt_samle` — Static JSX text node
  - context: `nded-lg"> <p className="text-sm font-medium"> Anbefalt: Samle {recommendedRate} datapunkt{recommendedRate > 1 ? 'er' : ''} per`
- [307:96] (JSXText) `per dag` → key: `common.optimizeddatarequirementscalculator.per_dag` — Static JSX text node
  - context: `Anbefalt: Samle {recommendedRate} datapunkt{recommendedRate > 1 ? 'er' : ''} per dag </p> <p className="text-xs text-muted-fo`
- [310:19] (JSXText) `Måloppnåelse:` → key: `common.optimizeddatarequirementscalculator.m_loppn_else` — Static JSX text node
  - context: `<p className="text-xs text-muted-foreground mt-1"> Måloppnåelse: {formatDate(nextTarget.targetDate)} </p>`

### src/components/optimized/OptimizedDataVisualization.tsx
- [53:36] (JSXText) `No data to display yet` → key: `common.optimizeddatavisualization.no_data_to_display_yet` — Static JSX text node
  - context: `sName="h-16 w-16 mx-auto mb-4 opacity-50" /> <p className="text-lg">No data to display yet</p> <p className="text-sm">Start tracking emo`
- [54:36] (JSXText) `Start tracking emotions and sensory inputs to see visualizations` → key: `common.optimizeddatavisualization.start_tracking_emotions_and_sensory` — Static JSX text node
  - context: `assName="text-lg">No data to display yet</p> <p className="text-sm">Start tracking emotions and sensory inputs to see visualizations</p> <`
- [65:11] (JSXText) `Data Insights for` → key: `common.optimizeddatavisualization.data_insights_for` — Static JSX text node
  - context: `<h2 className="text-2xl font-semibold text-foreground mb-2"> Data Insights for {studentName} </h2> <p className="text-muted-f`
- [69:38] (JSXText) `emotions and` → key: `common.optimizeddatavisualization.emotions_and` — Static JSX text node
  - context: `{selectedRange && \`${selectedRange} • \`} Tracking {emotions.length} emotions and {sensoryInputs.length} sensory inputs </p> </div>`
- [69:74] (JSXText) `sensory inputs` → key: `common.optimizeddatavisualization.sensory_inputs` — Static JSX text node
  - context: `} • \`} Tracking {emotions.length} emotions and {sensoryInputs.length} sensory inputs </p> </div> {/* Emotion Trends */} {(s`
- [79:15] (JSXText) `Emotion Trends Over Time` → key: `common.optimizeddatavisualization.emotion_trends_over_time` — Static JSX text node
  - context: `s-center gap-2"> <TrendingUp className="h-5 w-5" /> Emotion Trends Over Time </CardTitle> </CardHeader>`
- [85:33] (JSXAttribute) `Loading emotion trends` → key: `common.optimizeddatavisualization.loading_emotion_trends` — Static aria-label attribute
  - context: `ate.isLoading && !state.steps.emotionTrends ? ( <div aria-label="Loading emotion trends" className="h-[300px] w-full"> <div cl`
- [144:30] (JSXAttribute) `Emotion trends line chart` → key: `common.optimizeddatavisualization.emotion_trends_line_chart` — Static aria-label attribute
  - context: `option={option} height={300} aria-label="Emotion trends line chart" exportRegistration={{ id: 'emotion`
- [160:17] (JSXText) `Emotion Distribution` → key: `common.optimizeddatavisualization.emotion_distribution` — Static JSX text node
  - context: `er gap-2"> <PieChartIcon className="h-5 w-5" /> Emotion Distribution </CardTitle> </CardHeader>`
- [166:35] (JSXAttribute) `Loading emotion distribution` → key: `common.optimizeddatavisualization.loading_emotion_distribution` — Static aria-label attribute
  - context: `ading && !state.steps.emotionDistribution ? ( <div aria-label="Loading emotion distribution" className="h-[250px] w-full">`
- [193:32] (JSXAttribute) `Emotion distribution donut chart` → key: `common.optimizeddatavisualization.emotion_distribution_donut_chart` — Static aria-label attribute
  - context: `tion={option} height={250} aria-label="Emotion distribution donut chart" exportRegistration={{ id:`
- [208:17] (JSXText) `Sensory Response Patterns` → key: `common.optimizeddatavisualization.sensory_response_patterns` — Static JSX text node
  - context: `enter gap-2"> <BarChart3 className="h-5 w-5" /> Sensory Response Patterns </CardTitle> </CardHeader>`
- [214:35] (JSXAttribute) `Loading sensory responses` → key: `common.optimizeddatavisualization.loading_sensory_responses` — Static aria-label attribute
  - context: `sLoading && !state.steps.sensoryResponses ? ( <div aria-label="Loading sensory responses" className="h-[250px] w-full"> <d`
- [234:32] (JSXAttribute) `Sensory response patterns stacked bars` → key: `common.optimizeddatavisualization.sensory_response_patterns_stacked_bars` — Static aria-label attribute
  - context: `tion={option} height={250} aria-label="Sensory response patterns stacked bars" exportRegistration=`

### src/components/optimized/OptimizedEnhancedPersonalizedInsights.tsx
- [156:17] (JSXText) `Loading insights...` → key: `common.optimizedenhancedpersonalizedinsights.loading_insights` — Static JSX text node
  - context: `useDashboardMetrics(filteredData); if (insightsLoading) { return <div>Loading insights...</div> } if (!insights) { return ( <Card>`
- [165:13] (JSXText) `Personalized Insights for` → key: `common.optimizedenhancedpersonalizedinsights.personalized_insights_for` — Static JSX text node
  - context: `items-center gap-2"> <Lightbulb className="h-5 w-5" /> Personalized Insights for {student.name} </CardTitle> </CardHe`
- [170:48] (JSXText) `Start tracking emotions and sensory inputs to generate personalized insights` → key: `common.optimizedenhancedpersonalizedinsights.start_tracking_emotions_and_sensory` — Static JSX text node
  - context: `ity-50 text-muted-foreground" /> <p className="text-muted-foreground">Start tracking emotions and sensory inputs to generate personalized insights</p>`
- [183:15] (JSXText) `Personalized Insights for` → key: `common.optimizedenhancedpersonalizedinsights.personalized_insights_for` — Static JSX text node
  - context: `-2"> <Lightbulb className="h-5 w-5 text-primary" /> Personalized Insights for {student.name} </CardTitle> <d`
- [203:62] (JSXText) `Total Data Points` → key: `common.optimizedenhancedpersonalizedinsights.total_data_points` — Static JSX text node
  - context: `taPoints} /></div> <div className="text-sm text-muted-foreground">Total Data Points</div> </div> <div className="text-cent`
- [207:62] (JSXText) `Data Consistency` → key: `common.optimizedenhancedpersonalizedinsights.data_consistency` — Static JSX text node
  - context: `stency)} />%</div> <div className="text-sm text-muted-foreground">Data Consistency</div> </div> <div className="text-cente`
- [211:62] (JSXText) `Emotional Stability` → key: `common.optimizedenhancedpersonalizedinsights.emotional_stability` — Static JSX text node
  - context: `bility)} />%</div> <div className="text-sm text-muted-foreground">Emotional Stability</div> </div> <div className="text-ce`
- [223:62] (JSXText) `Intensity Trend` → key: `common.optimizedenhancedpersonalizedinsights.intensity_trend` — Static JSX text node
  - context: `</div> <div className="text-sm text-muted-foreground">Intensity Trend</div> </div> </div> </CardContent>`
- [231:41] (JSXText) `AI Insights` → key: `common.optimizedenhancedpersonalizedinsights.ai_insights` — Static JSX text node
  - context: `st className="grid w-full grid-cols-5"> <TabsTrigger value="insights">AI Insights</TabsTrigger> <TabsTrigger value="strengths">Strengths</Ta`
- [233:39] (JSXText) `Growth Areas` → key: `common.optimizedenhancedpersonalizedinsights.growth_areas` — Static JSX text node
  - context: `value="strengths">Strengths</TabsTrigger> <TabsTrigger value="growth">Growth Areas</TabsTrigger> <TabsTrigger value="patterns">Patterns</Tab`
- [288:97] (JSXText) `% confidence` → key: `common.optimizedenhancedpersonalizedinsights.confidence` — Static JSX text node
  - context: `<OptimizedAnimatedCounter value={Math.round(insight.confidence * 100)} />% confidence </Badge> <div className`
- [301:18] (JSXText) `Continue collecting data to generate predictive insights` → key: `common.optimizedenhancedpersonalizedinsights.continue_collecting_data_to_generate` — Static JSX text node
  - context: `<Brain className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>Continue collecting data to generate predictive insights</p> </div>`
- [320:75] (JSXText) `Strength Level:` → key: `common.optimizedenhancedpersonalizedinsights.strength_level` — Static JSX text node
  - context: `p-2"> <span className="text-xs text-muted-foreground">Strength Level:</span> <Progress value={strength.confi`
- [333:18] (JSXText) `Strengths will be identified as patterns emerge from data collection` → key: `common.optimizedenhancedpersonalizedinsights.strengths_will_be_identified_as` — Static JSX text node
  - context: `<Heart className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>Strengths will be identified as patterns emerge from data collection</p>`
- [373:68] (JSXText) `Action Steps:` → key: `common.optimizedenhancedpersonalizedinsights.action_steps` — Static JSX text node
  - context: `Name="mt-3"> <h5 className="text-sm font-medium mb-2">Action Steps:</h5> <ul className="text-sm text-muted-f`
- [377:64] (JSXText) `•` → key: `common.optimizedenhancedpersonalizedinsights.` — Static JSX text node
  - context: `ms-start gap-2"> <span className="text-primary">•</span> <span>{rec}</span>`
- [392:18] (JSXText) `Growth opportunities will be identified based on data patterns` → key: `common.optimizedenhancedpersonalizedinsights.growth_opportunities_will_be_identified` — Static JSX text node
  - context: `<Target className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>Growth opportunities will be identified based on data patterns</p> <`
- [406:55] (JSXText) `Emotional Pattern:` → key: `common.optimizedenhancedpersonalizedinsights.emotional_pattern` — Static JSX text node
  - context: `<div className="flex-1"> <h4 className="font-semibold">Emotional Pattern: {pattern.pattern.replace('-', ' ')}</h4>`
- [410:101] (JSXText) `% confidence` → key: `common.optimizedenhancedpersonalizedinsights.confidence` — Static JSX text node
  - context: `<OptimizedAnimatedCounter value={Math.round(pattern.confidence * 100)} />% confidence </Badge> <span`
- [413:50] (JSXText) `data points` → key: `common.optimizedenhancedpersonalizedinsights.data_points` — Static JSX text node
  - context: `ext-xs text-muted-foreground"> {pattern.dataPoints} data points </span> </div>`
- [427:55] (JSXText) `Sensory Pattern:` → key: `common.optimizedenhancedpersonalizedinsights.sensory_pattern` — Static JSX text node
  - context: `<div className="flex-1"> <h4 className="font-semibold">Sensory Pattern: {pattern.pattern.replace('-', ' ')}</h4>`
- [431:101] (JSXText) `% confidence` → key: `common.optimizedenhancedpersonalizedinsights.confidence` — Static JSX text node
  - context: `<OptimizedAnimatedCounter value={Math.round(pattern.confidence * 100)} />% confidence </Badge> <span`
- [434:50] (JSXText) `data points` → key: `common.optimizedenhancedpersonalizedinsights.data_points` — Static JSX text node
  - context: `ext-xs text-muted-foreground"> {pattern.dataPoints} data points </span> </div>`
- [446:18] (JSXText) `Patterns will emerge as more data is collected` → key: `common.optimizedenhancedpersonalizedinsights.patterns_will_emerge_as_more` — Static JSX text node
  - context: `<BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>Patterns will emerge as more data is collected</p> </div>`
- [482:68] (JSXText) `Recommended Actions:` → key: `common.optimizedenhancedpersonalizedinsights.recommended_actions` — Static JSX text node
  - context: `Name="mt-3"> <h5 className="text-sm font-medium mb-2">Recommended Actions:</h5> <ul className="text-sm text-`
- [486:64] (JSXText) `•` → key: `common.optimizedenhancedpersonalizedinsights.` — Static JSX text node
  - context: `ms-start gap-2"> <span className="text-primary">•</span> <span>{rec}</span>`
- [501:18] (JSXText) `No significant anomalies detected in recent data` → key: `common.optimizedenhancedpersonalizedinsights.no_significant_anomalies_detected_in` — Static JSX text node
  - context: `<Shield className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>No significant anomalies detected in recent data</p> </div>`

### src/components/optimized/OptimizedGoalManager.tsx
- [129:19] (MessageAPI) `Please fill in all required fields` → key: `common.optimizedgoalmanager.please_fill_in_all_required` — Message API call: error()
  - context: `.description.trim() || !newGoal.measurableObjective.trim()) { toast.error("Please fill in all required fields"); return; } if (!newGoal.tar`
- [129:19] (MessageAPI) `Please fill in all required fields` → key: `common.optimizedgoalmanager.please_fill_in_all_required` — sonner toast.error()
  - context: `.description.trim() || !newGoal.measurableObjective.trim()) { toast.error("Please fill in all required fields"); return; } if (!newGoal.tar`
- [134:19] (MessageAPI) `Please select a target date` → key: `common.optimizedgoalmanager.please_select_a_target_date` — Message API call: error()
  - context: `fields"); return; } if (!newGoal.targetDate) { toast.error("Please select a target date"); return; } const targetDate = new`
- [134:19] (MessageAPI) `Please select a target date` → key: `common.optimizedgoalmanager.please_select_a_target_date` — sonner toast.error()
  - context: `fields"); return; } if (!newGoal.targetDate) { toast.error("Please select a target date"); return; } const targetDate = new`
- [140:19] (MessageAPI) `Invalid target date` → key: `common.optimizedgoalmanager.invalid_target_date` — Message API call: error()
  - context: `e(newGoal.targetDate); if (isNaN(targetDate.getTime())) { toast.error("Invalid target date"); return; } const today = new Date(); t`
- [140:19] (MessageAPI) `Invalid target date` → key: `common.optimizedgoalmanager.invalid_target_date` — sonner toast.error()
  - context: `e(newGoal.targetDate); if (isNaN(targetDate.getTime())) { toast.error("Invalid target date"); return; } const today = new Date(); t`
- [147:19] (MessageAPI) `Target date must be in the future` → key: `common.optimizedgoalmanager.target_date_must_be_in` — Message API call: error()
  - context: `today.setHours(0, 0, 0, 0); if (targetDate < today) { toast.error("Target date must be in the future"); return; } if (newGoal.targe`
- [147:19] (MessageAPI) `Target date must be in the future` → key: `common.optimizedgoalmanager.target_date_must_be_in` — sonner toast.error()
  - context: `today.setHours(0, 0, 0, 0); if (targetDate < today) { toast.error("Target date must be in the future"); return; } if (newGoal.targe`
- [152:19] (MessageAPI) `Target value must be greater than baseline value` → key: `common.optimizedgoalmanager.target_value_must_be_greater` — Message API call: error()
  - context: `} if (newGoal.targetValue <= newGoal.baselineValue) { toast.error("Target value must be greater than baseline value"); return; } co`
- [152:19] (MessageAPI) `Target value must be greater than baseline value` → key: `common.optimizedgoalmanager.target_value_must_be_greater` — sonner toast.error()
  - context: `} if (newGoal.targetValue <= newGoal.baselineValue) { toast.error("Target value must be greater than baseline value"); return; } co`
- [184:19] (MessageAPI) `Goal created successfully!` → key: `common.optimizedgoalmanager.goal_created_successfully` — Message API call: success()
  - context: `loadGoals(); resetForm(); setShowCreateDialog(false); toast.success("Goal created successfully!"); onGoalUpdate?.(); }, [newGoal, student.id,`
- [184:19] (MessageAPI) `Goal created successfully!` → key: `common.optimizedgoalmanager.goal_created_successfully` — sonner toast.success()
  - context: `loadGoals(); resetForm(); setShowCreateDialog(false); toast.success("Goal created successfully!"); onGoalUpdate?.(); }, [newGoal, student.id,`
- [207:21] (MessageAPI) `Goal deleted successfully` → key: `common.optimizedgoalmanager.goal_deleted_successfully` — Message API call: success()
  - context: `{ dataStorage.deleteGoal(goalId); loadGoals(); toast.success("Goal deleted successfully"); onGoalUpdate?.(); } }, [goals, loadGoa`
- [207:21] (MessageAPI) `Goal deleted successfully` → key: `common.optimizedgoalmanager.goal_deleted_successfully` — sonner toast.success()
  - context: `{ dataStorage.deleteGoal(goalId); loadGoals(); toast.success("Goal deleted successfully"); onGoalUpdate?.(); } }, [goals, loadGoa`
- [235:19] (MessageAPI) `Progress updated!` → key: `common.optimizedgoalmanager.progress_updated` — Message API call: success()
  - context: `urrentProgress: Math.max(0, Math.min(100, progress)) }); toast.success("Progress updated!"); }, [goals, updateGoal]); // Memoized milestone additi`
- [235:19] (MessageAPI) `Progress updated!` → key: `common.optimizedgoalmanager.progress_updated` — sonner toast.success()
  - context: `urrentProgress: Math.max(0, Math.min(100, progress)) }); toast.success("Progress updated!"); }, [goals, updateGoal]); // Memoized milestone additi`
- [255:19] (MessageAPI) `Milestone added!` → key: `common.optimizedgoalmanager.milestone_added` — Message API call: success()
  - context: `milestones: [...goal.milestones, newMilestone] }); toast.success("Milestone added!"); }, [goals, updateGoal]); // Memoized milestone complet`
- [255:19] (MessageAPI) `Milestone added!` → key: `common.optimizedgoalmanager.milestone_added` — sonner toast.success()
  - context: `milestones: [...goal.milestones, newMilestone] }); toast.success("Milestone added!"); }, [goals, updateGoal]); // Memoized milestone complet`
- [270:19] (MessageAPI) `Milestone completed!` → key: `common.optimizedgoalmanager.milestone_completed` — Message API call: success()
  - context: `; updateGoal(goalId, { milestones: updatedMilestones }); toast.success("Milestone completed!"); }, [goals, updateGoal]); // Handler for milestone`
- [270:19] (MessageAPI) `Milestone completed!` → key: `common.optimizedgoalmanager.milestone_completed` — sonner toast.success()
  - context: `; updateGoal(goalId, { milestones: updatedMilestones }); toast.success("Milestone completed!"); }, [goals, updateGoal]); // Handler for milestone`
- [275:26] (MessageAPI) `Milestone title:` → key: `common.optimizedgoalmanager.milestone_title` — Message API call: prompt()
  - context: `eAddMilestoneClick = useCallback((goalId: string) => { const title = prompt("Milestone title:"); const description = prompt("Milestone description:");`
- [276:32] (MessageAPI) `Milestone description:` → key: `common.optimizedgoalmanager.milestone_description` — Message API call: prompt()
  - context: `{ const title = prompt("Milestone title:"); const description = prompt("Milestone description:"); const dateStr = prompt("Target date (YYYY-MM-DD):`
- [277:28] (MessageAPI) `Target date (YYYY-MM-DD):` → key: `common.optimizedgoalmanager.target_date_yyyy_mm_dd` — Message API call: prompt()
  - context: `onst description = prompt("Milestone description:"); const dateStr = prompt("Target date (YYYY-MM-DD):"); if (title && description && dateStr) { a`
- [285:26] (MessageAPI) `Enter current progress value:` → key: `common.optimizedgoalmanager.enter_current_progress_value` — Message API call: prompt()
  - context: `pdateProgressClick = useCallback((goalId: string) => { const value = prompt("Enter current progress value:"); const notes = prompt("Progress notes (opti`
- [286:26] (MessageAPI) `Progress notes (optional):` → key: `common.optimizedgoalmanager.progress_notes_optional` — Message API call: prompt()
  - context: `const value = prompt("Enter current progress value:"); const notes = prompt("Progress notes (optional):"); if (value) { addDataPoint(goalId, Numbe`
- [344:46] (JSXText) `IEP Goals & Tracking` → key: `common.optimizedgoalmanager.iep_goals_tracking` — Static JSX text node
  - context: `lassName="h-6 w-6 text-primary" /> <h2 className="text-2xl font-bold">IEP Goals & Tracking</h2> </div> <Dialog open={showCrea`
- [351:15] (JSXText) `Create New Goal` → key: `common.optimizedgoalmanager.create_new_goal` — Static JSX text node
  - context: `over:opacity-90"> <Plus className="h-4 w-4 mr-2" /> Create New Goal </Button> </DialogTrigger> <Dial`
- [356:28] (JSXText) `Create New IEP Goal` → key: `common.optimizedgoalmanager.create_new_iep_goal` — Static JSX text node
  - context: `-[90vh] overflow-y-auto"> <DialogHeader> <DialogTitle>Create New IEP Goal</DialogTitle> <DialogDescription>`
- [358:17] (JSXText) `Define a specific, measurable goal for` → key: `common.optimizedgoalmanager.define_a_specific_measurable_goal` — Static JSX text node
  - context: `te New IEP Goal</DialogTitle> <DialogDescription> Define a specific, measurable goal for {student.name}'s educational progress.`
- [358:70] (JSXText) `'s educational progress.` → key: `common.optimizedgoalmanager.s_educational_progress` — Static JSX text node
  - context: `scription> Define a specific, measurable goal for {student.name}'s educational progress. </DialogDescription> </Dialog`
- [364:45] (JSXText) `Goal Title *` → key: `common.optimizedgoalmanager.goal_title` — Static JSX text node
  - context: `pace-y-4 mt-4"> <div> <Label htmlFor="goal-title">Goal Title *</Label> <Input id="goal-title"`
- [367:31] (JSXAttribute) `e.g., Improve Reading Comprehension` → key: `common.optimizedgoalmanager.e_g_improve_reading_comprehension` — Static placeholder attribute
  - context: `<Input id="goal-title" placeholder="e.g., Improve Reading Comprehension" value={newGoal.title}`
- [374:51] (JSXText) `Description *` → key: `common.optimizedgoalmanager.description` — Static JSX text node
  - context: `<div> <Label htmlFor="goal-description">Description *</Label> <Textarea id="goal-descr`
- [377:31] (JSXAttribute) `Describe the goal in detail...` → key: `common.optimizedgoalmanager.describe_the_goal_in_detail` — Static placeholder attribute
  - context: `<Textarea id="goal-description" placeholder="Describe the goal in detail..." value={newGoal.description}`
- [385:48] (JSXText) `Category *` → key: `common.optimizedgoalmanager.category` — Static JSX text node
  - context: `<div> <Label htmlFor="goal-category">Category *</Label> <Select value={newGoal.category} onValueChang`
- [395:47] (JSXText) `Motor Skills` → key: `common.optimizedgoalmanager.motor_skills` — Static JSX text node
  - context: `ation">Communication</SelectItem> <SelectItem value="motor">Motor Skills</SelectItem> <SelectItem value="sensory">Sensor`
- [406:49] (JSXText) `Measurable Objective *` → key: `common.optimizedgoalmanager.measurable_objective` — Static JSX text node
  - context: `<div> <Label htmlFor="goal-objective">Measurable Objective *</Label> <Textarea id="g`
- [409:31] (JSXAttribute) `e.g., Student will read grade-level text with 80% comprehension...` → key: `common.optimizedgoalmanager.e_g_student_will_read` — Static placeholder attribute
  - context: `<Textarea id="goal-objective" placeholder="e.g., Student will read grade-level text with 80% comprehension..."`
- [418:50] (JSXText) `Baseline Value` → key: `common.optimizedgoalmanager.baseline_value` — Static JSX text node
  - context: `gap-4"> <div> <Label htmlFor="goal-baseline">Baseline Value</Label> <Input id="goal-bas`
- [427:48] (JSXText) `Target Value` → key: `common.optimizedgoalmanager.target_value` — Static JSX text node
  - context: `</div> <div> <Label htmlFor="goal-target">Target Value</Label> <Input id="goal-targe`
- [438:44] (JSXText) `Target Date *` → key: `common.optimizedgoalmanager.target_date` — Static JSX text node
  - context: `> <div> <Label htmlFor="goal-date">Target Date *</Label> <Input id="goal-date"`
- [451:46] (JSXText) `Create Goal` → key: `common.optimizedgoalmanager.create_goal` — Static JSX text node
  - context: `Cancel </Button> <Button onClick={createGoal}>Create Goal</Button> </div> </div> </DialogC`
- [492:66] (JSXText) `No IEP Goals Yet` → key: `common.optimizedgoalmanager.no_iep_goals_yet` — Static JSX text node
  - context: `round mb-4" /> <h3 className="text-xl font-semibold text-foreground mb-2">No IEP Goals Yet</h3> <p className="text-muted-foreground text-center mb-6`
- [494:9] (JSXText) `Start by creating your first IEP goal to track` → key: `common.optimizedgoalmanager.start_by_creating_your_first` — Static JSX text node
  - context: `> <p className="text-muted-foreground text-center mb-6 max-w-md"> Start by creating your first IEP goal to track {studentName}'s educational progr`
- [494:69] (JSXText) `'s educational progress.` → key: `common.optimizedgoalmanager.s_educational_progress` — Static JSX text node
  - context: `max-w-md"> Start by creating your first IEP goal to track {studentName}'s educational progress. </p> <Button onClick={onCreateClick} classN`
- [498:9] (JSXText) `Create First Goal` → key: `common.optimizedgoalmanager.create_first_goal` — Static JSX text node
  - context: `er:opacity-90 font-dyslexia"> <Plus className="h-4 w-4 mr-2" /> Create First Goal </Button> </CardContent> </Card> )); EmptyState.d`
- [543:60] (JSXAttribute) `Edit goal` → key: `common.optimizedgoalmanager.edit_goal` — Static aria-label attribute
  - context: `ssName="flex gap-2"> <Button variant="ghost" size="icon" aria-label="Edit goal" title="Edit goal"> <Edit className="h-4 w-4" />`
- [543:78] (JSXAttribute) `Edit goal` → key: `common.optimizedgoalmanager.edit_goal` — Static title attribute
  - context: `"> <Button variant="ghost" size="icon" aria-label="Edit goal" title="Edit goal"> <Edit className="h-4 w-4" /> </Button>`
- [546:60] (JSXAttribute) `Delete goal` → key: `common.optimizedgoalmanager.delete_goal` — Static aria-label attribute
  - context: `</Button> <Button variant="ghost" size="icon" aria-label="Delete goal" title="Delete goal" onClick={handleDelete}> <Trash2`
- [546:80] (JSXAttribute) `Delete goal` → key: `common.optimizedgoalmanager.delete_goal` — Static title attribute
  - context: `<Button variant="ghost" size="icon" aria-label="Delete goal" title="Delete goal" onClick={handleDelete}> <Trash2 className="h-4 w-4"`
- [563:11] (JSXText) `Update Progress` → key: `common.optimizedgoalmanager.update_progress` — Static JSX text node
  - context: `dleUpdateProgress}> <TrendingUp className="h-4 w-4 mr-1" /> Update Progress </Button> </CardContent> </Card> ); }); Goa`
- [586:38] (JSXText) `Measurable Objective` → key: `common.optimizedgoalmanager.measurable_objective` — Static JSX text node
  - context: `e: string }) => ( <div className="mb-4"> <h4 className="font-medium mb-2">Measurable Objective</h4> <p className="text-sm text-muted-foreground bg-mut`
- [633:54] (JSXText) `No milestones yet` → key: `common.optimizedgoalmanager.no_milestones_yet` — Static JSX text node
  - context: `ilestones.length === 0 ? ( <p className="text-sm text-muted-foreground">No milestones yet</p> ) : ( <div className="space-y-2">`

### src/components/optimized/OptimizedVisualization3D.tsx
- [68:11] (JSXText) `×` → key: `common.optimizedvisualization3d.` — Static JSX text node
  - context: `foreground transition-colors motion-reduce:transition-none" > × </button> </div> <p className="font-medium">{point.label}<`
- [400:11] (JSXText) `3D Data Visualization` → key: `common.optimizedvisualization3d.3d_data_visualization` — Static JSX text node
  - context: `e="flex items-center gap-2"> <Move3d className="h-5 w-5" /> 3D Data Visualization </CardTitle> </CardHeader> <CardConten`
- [407:63] (JSXText) `X Axis` → key: `common.optimizedvisualization3d.x_axis` — Static JSX text node
  - context: `> <div> <label className="text-sm font-medium mb-1 block">X Axis</label> <Select value={xAxis} onValueChange={handleXAxisChang`
- [413:54] (JSXText) `Emotion Intensity` → key: `common.optimizedvisualization3d.emotion_intensity` — Static JSX text node
  - context: `<SelectContent> <SelectItem value="emotionIntensity">Emotion Intensity</SelectItem> <SelectItem value="sensoryRespons`
- [414:53] (JSXText) `Sensory Response` → key: `common.optimizedvisualization3d.sensory_response` — Static JSX text node
  - context: `tion Intensity</SelectItem> <SelectItem value="sensoryResponse">Sensory Response</SelectItem> <SelectItem value="time">Time</Sel`
- [421:63] (JSXText) `Y Axis` → key: `common.optimizedvisualization3d.y_axis` — Static JSX text node
  - context: `<div> <label className="text-sm font-medium mb-1 block">Y Axis</label> <Select value={yAxis} onValueChange={handleYAxisChang`
- [427:54] (JSXText) `Emotion Intensity` → key: `common.optimizedvisualization3d.emotion_intensity` — Static JSX text node
  - context: `<SelectContent> <SelectItem value="emotionIntensity">Emotion Intensity</SelectItem> <SelectItem value="sensoryRespons`
- [428:53] (JSXText) `Sensory Response` → key: `common.optimizedvisualization3d.sensory_response` — Static JSX text node
  - context: `tion Intensity</SelectItem> <SelectItem value="sensoryResponse">Sensory Response</SelectItem> <SelectItem value="time">Time</Sel`
- [435:63] (JSXText) `Z Axis` → key: `common.optimizedvisualization3d.z_axis` — Static JSX text node
  - context: `<div> <label className="text-sm font-medium mb-1 block">Z Axis</label> <Select value={zAxis} onValueChange={handleZAxisChang`
- [441:54] (JSXText) `Emotion Intensity` → key: `common.optimizedvisualization3d.emotion_intensity` — Static JSX text node
  - context: `<SelectContent> <SelectItem value="emotionIntensity">Emotion Intensity</SelectItem> <SelectItem value="sensoryRespons`
- [442:53] (JSXText) `Sensory Response` → key: `common.optimizedvisualization3d.sensory_response` — Static JSX text node
  - context: `tion Intensity</SelectItem> <SelectItem value="sensoryResponse">Sensory Response</SelectItem> <SelectItem value="time">Time</Sel`
- [449:63] (JSXText) `Color By` → key: `common.optimizedvisualization3d.color_by` — Static JSX text node
  - context: `<div> <label className="text-sm font-medium mb-1 block">Color By</label> <Select value={colorBy} onValueChange={handleColorB`
- [464:63] (JSXText) `Point Size` → key: `common.optimizedvisualization3d.point_size` — Static JSX text node
  - context: `assName="flex-1"> <label className="text-sm font-medium mb-1 block">Point Size</label> <Slider value={[pointSize]}`
- [482:41] (JSXText) `All Categories` → key: `common.optimizedvisualization3d.all_categories` — Static JSX text node
  - context: `tTrigger> <SelectContent> <SelectItem value="all">All Categories</SelectItem> <SelectItem value="emotion">Emotions`
- [495:52] (JSXText) `Loading 3D visualization...` → key: `common.optimizedvisualization3d.loading_3d_visualization` — Static JSX text node
  - context: `nter justify-center h-full"> <p className="text-muted-foreground">Loading 3D visualization...</p> </div> }> <Can`
- [545:41] (JSXText) `data points` → key: `common.optimizedvisualization3d.data_points` — Static JSX text node
  - context: `en mt-4 text-sm text-muted-foreground"> <span>{filteredPoints.length} data points</span> {hoveredPoint && ( <span>Hovering: {hov`

### src/components/ui/PremiumStatsCard.tsx
- [100:38] (JSXText) `% fra forrige uke` → key: `common.premiumstatscard.fra_forrige_uke` — Static JSX text node
  - context: `border-t-destructive" )} /> {Math.abs(trend.value)}% fra forrige uke </motion.div> )} <p`

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

### src/config/loaders/analytics.loader.ts
- [209:17] (MessageAPI) `analytics.loader hot-reloaded: cache invalidated` → key: `common.analytics_loader.analytics_loader_hot_reloaded_cache` — Message API call: info()
  - context: `t(() => { cachedConfig = null; cacheStamp = Date.now(); logger.info('analytics.loader hot-reloaded: cache invalidated'); }); } // Optional: consu`

### src/config/validators/analytics.validator.ts
- [37:18] (MessageAPI) `analytics.config validation failed; using fallback defaults` → key: `common.analytics_validator.analytics_config_validation_failed_using` — Message API call: error()
  - context: `sult.error); // Log once with normalized diagnostics try { logger.error('analytics.config validation failed; using fallback defaults', { errors,`

### src/pages/Dashboard.tsx
- [39:22] (MessageAPI) `Dashboard: Error loading students` → key: `common.dashboard.dashboard_error_loading_students` — Message API call: error()
  - context: `(); setStudents(students); } catch (error) { logger.error('Dashboard: Error loading students', { error }); setStudents([]);`
- [116:20] (MessageAPI) `Dashboard: Error calculating statistics` → key: `common.dashboard.dashboard_error_calculating_statistics` — Message API call: error()
  - context: `tries: entriesTrend } }; } catch (error) { logger.error('Dashboard: Error calculating statistics', { error }); return { todayEntri`
- [310:66] (JSXText) `from last week` → key: `common.dashboard.from_last_week` — Static JSX text node
  - context: `ive">5%</span> <span className="ml-1 text-muted-foreground">from last week</span> </div> </Card>`

### src/pages/DevTools.tsx
- [25:24] (JSXText) `Developer Tools` → key: `common.devtools.developer_tools` — Static JSX text node
  - context: `-auto px-4 py-12"> <Card> <CardHeader> <CardTitle>Developer Tools</CardTitle> </CardHeader> <CardContent>`
- [28:58] (JSXText) `This section is not available in production.` → key: `common.devtools.this_section_is_not_available` — Static JSX text node
  - context: `<CardContent> <p className="text-sm text-muted-foreground">This section is not available in production.</p> </CardContent>`
- [48:13] (JSXText) `Developer Tools` → key: `common.devtools.developer_tools` — Static JSX text node
  - context: `ter gap-2"> <Wrench className="h-6 w-6 text-primary" /> Developer Tools </h1> </header> {/* Reuse existing Te`
- [60:15] (JSXText) `Storage Management` → key: `common.devtools.storage_management` — Static JSX text node
  - context: `p-2"> <Database className="h-5 w-5 text-primary" /> Storage Management </CardTitle> </CardHeader> <C`
- [65:15] (JSXText) `Inspect and manage local data storage. Clear old or non-essential data safely.` → key: `common.devtools.inspect_and_manage_local_data` — Static JSX text node
  - context: `t> <p className="text-sm text-muted-foreground mb-4"> Inspect and manage local data storage. Clear old or non-essential data safely.`
- [71:19] (JSXText) `Open Storage Manager` → key: `common.devtools.open_storage_manager` — Static JSX text node
  - context: `ull"> <Database className="h-4 w-4 mr-2" /> Open Storage Manager </Button> </DialogTrigger>`
- [76:32] (JSXText) `Storage Management` → key: `common.devtools.storage_management` — Static JSX text node
  - context: `overflow-y-auto"> <DialogHeader> <DialogTitle>Storage Management</DialogTitle> </DialogHeader>`
- [78:88] (JSXText) `Loading…` → key: `common.devtools.loading` — Static JSX text node
  - context: `<Suspense fallback={<div className="p-4 text-sm text-muted-foreground">Loading…</div>}> <StorageManager /> </Suspense`
- [91:15] (JSXText) `Model Diagnostics` → key: `common.devtools.model_diagnostics` — Static JSX text node
  - context: `"> <Stethoscope className="h-5 w-5 text-primary" /> Model Diagnostics </CardTitle> </CardHeader> <Ca`
- [96:15] (JSXText) `Run time-series cross-validation and inspect recent evaluation runs. Loaded on demand to keep main bundle small.` → key: `common.devtools.run_time_series_cross_validation` — Static JSX text node
  - context: `t> <p className="text-sm text-muted-foreground mb-4"> Run time-series cross-validation and inspect recent evaluation runs. Loaded on d`
- [102:19] (JSXText) `Open Diagnostics Panel` → key: `common.devtools.open_diagnostics_panel` — Static JSX text node
  - context: `"> <Stethoscope className="h-4 w-4 mr-2" /> Open Diagnostics Panel </Button> </DialogTrigger>`
- [107:32] (JSXText) `Model Diagnostics` → key: `common.devtools.model_diagnostics` — Static JSX text node
  - context: `overflow-y-auto"> <DialogHeader> <DialogTitle>Model Diagnostics</DialogTitle> </DialogHeader>`
- [109:88] (JSXText) `Loading diagnostics…` → key: `common.devtools.loading_diagnostics` — Static JSX text node
  - context: `<Suspense fallback={<div className="p-4 text-sm text-muted-foreground">Loading diagnostics…</div>}> <ModelDiagnosticsPanel />`

### src/pages/NotFound.tsx
- [14:18] (MessageAPI) `404 Error: User attempted to access non-existent route` → key: `common.notfound.404_error_user_attempted_to` — Message API call: error()
  - context: `; const { tCommon } = useTranslation(); useEffect(() => { logger.error("404 Error: User attempted to access non-existent route", { path: location`

### src/pages/ReportsClean.tsx
- [96:20] (MessageAPI) `Reports: failed to load data for export` → key: `common.reportsclean.reports_failed_to_load_data` — Message API call: error()
  - context: `ts, trackingEntries, goals } as const; } catch (error) { logger.error('Reports: failed to load data for export', { error }); return { students:`
- [127:20] (MessageAPI) `System CSV export failed` → key: `common.reportsclean.system_csv_export_failed` — Message API call: error()
  - context: `tSettings('dataExport.success_csv'))); } catch (error) { logger.error('System CSV export failed', { error }); toast.error(tSettings('dataExport.`
- [160:20] (MessageAPI) `System JSON export failed` → key: `common.reportsclean.system_json_export_failed` — Message API call: error()
  - context: `Settings('dataExport.success_json'))); } catch (error) { logger.error('System JSON export failed', { error }); toast.error(tSettings('dataExport`
- [192:20] (MessageAPI) `System backup failed` → key: `common.reportsclean.system_backup_failed` — Message API call: error()
  - context: `ttings('dataExport.success_backup'))); } catch (error) { logger.error('System backup failed', { error }); toast.error(tSettings('dataExport.erro`

### src/pages/ReportsHub.tsx
- [50:34] (JSXAttribute) `reports-templates-heading` → key: `common.reportshub.reports_templates_heading` — Static aria-labelledby attribute
  - context: `</Link> </div> </header> <section aria-labelledby="reports-templates-heading" className="space-y-4"> <h2 id="reports-tem`
- [70:19] (JSXText) `Link to=` → key: `common.reportshub.link_to` — Static JSX text node
  - context: `sCount', { count: card.sections })} </span> Link to={\`/reports/builder?template=${card.id}\`} className="inline-block">`
- [70:69] (JSXText) `className="inline-block">
                    Button>
                      FileText className="h-4 w-4 mr-2" /` → key: `common.reportshub.classname_inline_block_button_filetext` — Static JSX text node
  - context: `</span> Link to={\`/reports/builder?template=${card.id}\`} className="inline-block"> Button> `
- [74:21] (JSXText) `/Button
                  /Link` → key: `common.reportshub.button_link` — Static JSX text node
  - context: `/ {tCommon('reports.createReport')} /Button /Link </CardContent>`

### src/workers/analytics.worker.ts
- [405:18] (MessageAPI) `[analytics.worker] error` → key: `common.analytics_worker.analytics_worker_error` — Message API call: error()
  - context: `'complete', percent: 100 } }); } catch (error) { try { logger.error('[analytics.worker] error', error); } catch (e) { /* noop */ }`
- [409:18] (MessageAPI) `Error in analytics worker:` → key: `common.analytics_worker.error_in_analytics_worker` — Message API call: error()
  - context: `rker] error', error); } catch (e) { /* noop */ } logger.error('Error in analytics worker:', error); // Post an error message back to the m`

### src/workers/hyperparameterOptimization.worker.ts
- [125:18] (MessageAPI) `Error in hyperparameter optimization worker:` → key: `common.hyperparameteroptimization_worker.error_in_hyperparameter_optimization_worker` — Message API call: error()
  - context: `the main thread postMessage(result); } catch (error) { logger.error('Error in hyperparameter optimization worker:', error); // Post error messag`
- [297:18] (MessageAPI) `Grid search failed:` → key: `common.hyperparameteroptimization_worker.grid_search_failed` — Message API call: error()
  - context: `r strategy: 'gridSearch' }; } catch (error) { logger.error('Grid search failed:', error); throw new Error(\`Grid search optimization fai`
- [426:18] (MessageAPI) `Random search failed:` → key: `common.hyperparameteroptimization_worker.random_search_failed` — Message API call: error()
  - context: `strategy: 'randomSearch' }; } catch (error) { logger.error('Random search failed:', error); throw new Error(\`Random search optimization`

## Namespace: dashboard

### src/components/layouts/DashboardLayout.tsx
- [41:64] (JSXAttribute) `Visualization tabs` → key: `dashboard.dashboardlayout.visualization_tabs` — Static aria-label attribute
  - context: `ssName="w-full"> <TabsList className="grid w-full grid-cols-5" aria-label="Visualization tabs"> <TabsTrigger value="trends" className="flex items-`
- [57:13] (JSXText) `3D View` → key: `dashboard.dashboardlayout.3d_view` — Static JSX text node
  - context: `="flex items-center gap-2"> <Eye className="h-4 w-4" /> 3D View </TabsTrigger> )} <TabsTrigger value="timeline`
- [73:76] (JSXText) `Avg Emotion Intensity` → key: `dashboard.dashboardlayout.avg_emotion_intensity` — Static JSX text node
  - context: `div> <p className="text-sm font-medium text-muted-foreground">Avg Emotion Intensity</p> <p className="text-2xl font-bold">`
- [89:76] (JSXText) `Positive Emotion Rate` → key: `dashboard.dashboardlayout.positive_emotion_rate` — Static JSX text node
  - context: `div> <p className="text-sm font-medium text-muted-foreground">Positive Emotion Rate</p> <p className="text-2xl font-bold">`
- [107:76] (JSXText) `Sensory Seeking Rate` → key: `dashboard.dashboardlayout.sensory_seeking_rate` — Static JSX text node
  - context: `div> <p className="text-sm font-medium text-muted-foreground">Sensory Seeking Rate</p> <p className="text-2xl font-bold">`
- [129:26] (JSXText) `Significant Correlations` → key: `dashboard.dashboardlayout.significant_correlations` — Static JSX text node
  - context: `gth > 0 && ( <Card> <CardHeader> <CardTitle>Significant Correlations</CardTitle> </CardHeader> <Card`
- [137:107] (JSXText) `↔` → key: `dashboard.dashboardlayout.` — Static JSX text node
  - context: `air.factor1.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} ↔{' '} {pair.factor2.replace(/([A-Z])/g, ' $1').replace(`
- [141:74] (JSXText) `correlation (r =` → key: `dashboard.dashboardlayout.correlation_r` — Static JSX text node
  - context: `ound"> {pair.correlation > 0 ? 'Positive' : 'Negative'} correlation (r = {pair.correlation.toFixed(3)}) </p>`

### src/components/profile-sections/DashboardSection.tsx
- [89:13] (JSXText) `Sammendrag av` → key: `dashboard.dashboardsection.sammendrag_av` — Static JSX text node
  - context: `bold">Oversikt</h2> <p className="text-muted-foreground"> Sammendrag av {student.name}s data og aktivitet </p> </div>`
- [89:41] (JSXText) `s data og aktivitet` → key: `dashboard.dashboardsection.s_data_og_aktivitet` — Static JSX text node
  - context: `<p className="text-muted-foreground"> Sammendrag av {student.name}s data og aktivitet </p> </div> <Button onCl`
- [186:60] (JSXText) `Samlet kvalitetsscore` → key: `dashboard.dashboardsection.samlet_kvalitetsscore` — Static JSX text node
  - context: `"> <div> <p className="text-sm text-muted-foreground">Samlet kvalitetsscore</p> <p className="text-3xl font-bold">{dataQ`
- [247:15] (JSXText) `AI-genererte innsikter` → key: `dashboard.dashboardsection.ai_genererte_innsikter` — Static JSX text node
  - context: `"> <TrendingUp className="h-5 w-5 animate-pulse" /> AI-genererte innsikter </CardTitle> </CardHeader>`
- [262:15] (JSXText) `AI-genererte innsikter` → key: `dashboard.dashboardsection.ai_genererte_innsikter` — Static JSX text node
  - context: `s-center gap-2"> <TrendingUp className="h-5 w-5" /> AI-genererte innsikter </CardTitle> </CardHeader>`
- [280:54] (JSXText) `Nylige økter` → key: `dashboard.dashboardsection.nylige_kter` — Static JSX text node
  - context: `gth > 0 && ( <div> <h3 className="text-lg font-semibold mb-4">Nylige økter</h3> <PaginatedSessionsList sessions={filteredData.entrie`

## Namespace: settings

### src/pages/Settings.tsx
- [26:65] (JSXAttribute) `Settings navigation` → key: `settings.settings.settings_navigation` — Static aria-label attribute
  - context: `-cols-4 gap-6"> <aside className="md:col-span-1 space-y-2" aria-label="Settings navigation"> <ul className="text-sm"> <li> <`

## Namespace: student

### src/components/StudentProfileSidebar.tsx
- [141:13] (JSXText) `Verktøy` → key: `student.studentprofilesidebar.verkt_y` — Static JSX text node
  - context: `foreground text-xs font-medium uppercase tracking-wider px-3 py-2"> Verktøy </SidebarGroupLabel> <SidebarGroupContent>`

### src/components/optimized/OptimizedStudentCard.tsx
- [49:13] (JSXText) `View Profile` → key: `student.optimizedstudentcard.view_profile` — Static JSX text node
  - context: `="flex-1" > <User className="h-4 w-4 mr-2" /> View Profile </Button> <Button variant="outline"`

### src/components/optimized/OptimizedStudentList.tsx
- [41:46] (JSXText) `No students found` → key: `student.optimizedstudentlist.no_students_found` — Static JSX text node
  - context: `div className="text-center py-12"> <p className="text-muted-foreground">No students found</p> </div> ); } // Use virtual scrolling for la`

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

### src/pages/EnhancedTrackStudent.tsx
- [45:21] (MessageAPI) `Student not found` → key: `student.enhancedtrackstudent.student_not_found` — Message API call: error()
  - context: `new Date(foundStudent.createdAt) }); } else { toast.error('Student not found'); navigate('/'); return; } }`
- [45:21] (MessageAPI) `Student not found` → key: `student.enhancedtrackstudent.student_not_found` — sonner toast.error()
  - context: `new Date(foundStudent.createdAt) }); } else { toast.error('Student not found'); navigate('/'); return; } }`
- [107:19] (MessageAPI) `Please add at least one emotion or sensory input before saving.` → key: `student.enhancedtrackstudent.please_add_at_least_one` — Message API call: error()
  - context: `Emotions.length === 0 && sessionSensoryInputs.length === 0) { toast.error("Please add at least one emotion or sensory input before saving."); return`
- [107:19] (MessageAPI) `Please add at least one emotion or sensory input before saving.` → key: `student.enhancedtrackstudent.please_add_at_least_one` — sonner toast.error()
  - context: `Emotions.length === 0 && sessionSensoryInputs.length === 0) { toast.error("Please add at least one emotion or sensory input before saving."); return`
- [138:21] (MessageAPI) `Session saved successfully!` → key: `student.enhancedtrackstudent.session_saved_successfully` — Message API call: success()
  - context: `lyticsManager.triggerAnalyticsForStudent(student); } toast.success("Session saved successfully!"); navigate(\`/student/${student.id}\`); }`
- [138:21] (MessageAPI) `Session saved successfully!` → key: `student.enhancedtrackstudent.session_saved_successfully` — sonner toast.success()
  - context: `lyticsManager.triggerAnalyticsForStudent(student); } toast.success("Session saved successfully!"); navigate(\`/student/${student.id}\`); }`
- [141:20] (MessageAPI) `Save session error` → key: `student.enhancedtrackstudent.save_session_error` — Message API call: error()
  - context: `navigate(\`/student/${student.id}\`); } catch (error) { logger.error('Save session error', { error }); toast.error("Failed to save session. Ple`
- [142:19] (MessageAPI) `Failed to save session. Please try again.` → key: `student.enhancedtrackstudent.failed_to_save_session_please` — Message API call: error()
  - context: `error) { logger.error('Save session error', { error }); toast.error("Failed to save session. Please try again."); } }; const handleCancel =`
- [142:19] (MessageAPI) `Failed to save session. Please try again.` → key: `student.enhancedtrackstudent.failed_to_save_session_please` — sonner toast.error()
  - context: `error) { logger.error('Save session error', { error }); toast.error("Failed to save session. Please try again."); } }; const handleCancel =`
- [148:19] (MessageAPI) `You have unsaved data. Are you sure you want to cancel?` → key: `student.enhancedtrackstudent.you_have_unsaved_data_are` — Message API call: confirm()
  - context: `sionEmotions.length > 0 || sessionSensoryInputs.length > 0) { if (confirm("You have unsaved data. Are you sure you want to cancel?")) { navigate(\``
- [169:42] (JSXText) `Loading student data...` → key: `student.enhancedtrackstudent.loading_student_data` — Static JSX text node
  - context: `tring(tCommon('status.loading'))}</h1> <div className="animate-pulse">Loading student data...</div> </div> </div> ); } const se`
- [190:15] (JSXText) `Back to Profile` → key: `student.enhancedtrackstudent.back_to_profile` — Static JSX text node
  - context: `> <ArrowLeft className="h-4 w-4 mr-2" /> Back to Profile </Button> <div> <h1 classN`
- [193:49] (JSXText) `Tracking Session:` → key: `student.enhancedtrackstudent.tracking_session` — Static JSX text node
  - context: `</Button> <div> <h1 className="text-xl font-bold">Tracking Session: {student.name}</h1> <div className="flex items-c`
- [196:17] (JSXText) `Session duration:` → key: `student.enhancedtrackstudent.session_duration` — Static JSX text node
  - context: `uted-foreground"> <Clock className="h-3 w-3" /> Session duration: {sessionDuration} minutes </div> </d`
- [210:15] (JSXText) `Save Session` → key: `student.enhancedtrackstudent.save_session` — Static JSX text node
  - context: `0} > <Save className="h-4 w-4 mr-2" /> Save Session </Button> </div> </div> </heade`
- [222:15] (JSXText) `Current Session Summary` → key: `student.enhancedtrackstudent.current_session_summary` — Static JSX text node
  - context: `"> <CheckCircle className="h-5 w-5 text-primary" /> Current Session Summary </CardTitle> </CardHeader>`
- [229:64] (JSXText) `Emotions Tracked` → key: `student.enhancedtrackstudent.emotions_tracked` — Static JSX text node
  - context: `ns.length}</div> <div className="text-sm text-muted-foreground">Emotions Tracked</div> </div> <div className="text-c`
- [233:64] (JSXText) `Sensory Inputs` → key: `student.enhancedtrackstudent.sensory_inputs` — Static JSX text node
  - context: `ts.length}</div> <div className="text-sm text-muted-foreground">Sensory Inputs</div> </div> <div className="text-cen`
- [237:64] (JSXText) `Session Time` → key: `student.enhancedtrackstudent.session_time` — Static JSX text node
  - context: `Duration}m</div> <div className="text-sm text-muted-foreground">Session Time</div> </div> </div> {sessionE`
- [242:17] (JSXText) `Start tracking by adding emotions or sensory inputs below` → key: `student.enhancedtrackstudent.start_tracking_by_adding_emotions` — Static JSX text node
  - context: `p-3 bg-muted/50 rounded-lg text-center text-muted-foreground"> Start tracking by adding emotions or sensory inputs below </div>`
- [261:26] (JSXText) `Session Data Review` → key: `student.enhancedtrackstudent.session_data_review` — Static JSX text node
  - context: `th > 0) && ( <Card> <CardHeader> <CardTitle>Session Data Review</CardTitle> </CardHeader> <CardConte`
- [267:52] (JSXText) `Emotions This Session` → key: `student.enhancedtrackstudent.emotions_this_session` — Static JSX text node
  - context: `0 && ( <div> <h4 className="font-medium mb-2">Emotions This Session</h4> <div className="space-y-2">`
- [301:52] (JSXText) `Sensory Inputs This Session` → key: `student.enhancedtrackstudent.sensory_inputs_this_session` — Static JSX text node
  - context: `0 && ( <div> <h4 className="font-medium mb-2">Sensory Inputs This Session</h4> <div className="space-y-2">`
- [338:24] (JSXText) `Session Notes` → key: `student.enhancedtrackstudent.session_notes` — Static JSX text node
  - context: `General Notes */} <Card> <CardHeader> <CardTitle>Session Notes</CardTitle> </CardHeader> <CardContent>`
- [342:46] (JSXText) `General observations or notes` → key: `student.enhancedtrackstudent.general_observations_or_notes` — Static JSX text node
  - context: `<div className="space-y-2"> <Label htmlFor="general-notes">General observations or notes</Label> <Textarea id`
- [347:29] (JSXAttribute) `Add any additional observations, environmental factors, or context about this session...` → key: `student.enhancedtrackstudent.add_any_additional_observations_environmental` — Static placeholder attribute
  - context: `onChange={(e) => setGeneralNotes(e.target.value)} placeholder="Add any additional observations, environmental factors, or context about this s`

### src/pages/StudentProfile.original.tsx
- [178:21] (MessageAPI) `Auto-seeding minimal demo data for mock route` → key: `student.studentprofile_original.auto_seeding_minimal_demo_data` — Message API call: info()
  - context: `.current = true; setIsSeedingData(true); try { logger.info('Auto-seeding minimal demo data for mock route', { studentId });`
- [194:22] (MessageAPI) `Failed to auto-seed mock data` → key: `student.studentprofile_original.failed_to_auto_seed_mock` — Message API call: error()
  - context: `reloadData(); } } catch (error) { logger.error('Failed to auto-seed mock data', { error, studentId }); toast.error(Stri`
- [243:24] (MessageAPI) `Error generating insights` → key: `student.studentprofile_original.error_generating_insights` — Message API call: error()
  - context: `} } catch (error) { if (!signal.aborted) { logger.error('Error generating insights', { error }); setInsights(null);`
- [273:26] (MessageAPI) `[SAFE] analyticsManager.triggerAnalyticsForStudent failed` → key: `student.studentprofile_original.safe_analyticsmanager_triggeranalyticsforstudent_failed` — Message API call: error()
  - context: `} }) .catch((err) => { logger.error('[SAFE] analyticsManager.triggerAnalyticsForStudent failed', { error: err, stude`
- [285:24] (MessageAPI) `[SAFE] analyticsManager.initializeStudentAnalytics failed` → key: `student.studentprofile_original.safe_analyticsmanager_initializestudentanalytics_failed` — Message API call: error()
  - context: `entAnalytics done'); } } catch (err) { logger.error('[SAFE] analyticsManager.initializeStudentAnalytics failed', { error: err, stude`
- [290:20] (MessageAPI) `[SAFE] analyticsManager outer try/catch caught error` → key: `student.studentprofile_original.safe_analyticsmanager_outer_try_catch` — Message API call: error()
  - context: `/ Extra safety net; never rethrow from analytics side-effect logger.error('[SAFE] analyticsManager outer try/catch caught error', { error: err }); }`
- [357:20] (MessageAPI) `Export error` → key: `student.studentprofile_original.export_error` — Message API call: error()
  - context: `(tCommon('status.success'))); } catch (error: unknown) { logger.error('Export error', { error }); const errorMessage = error instanceof Error ?`
- [381:20] (MessageAPI) `Backup error` → key: `student.studentprofile_original.backup_error` — Message API call: error()
  - context: `ss(String(tCommon('status.success'))); } catch (error) { logger.error('Backup error', { error }); toast.error(String(tCommon('error.title')));`

### src/pages/StudentProfile.tsx
- [178:21] (MessageAPI) `Auto-seeding minimal demo data for mock route` → key: `student.studentprofile.auto_seeding_minimal_demo_data` — Message API call: info()
  - context: `.current = true; setIsSeedingData(true); try { logger.info('Auto-seeding minimal demo data for mock route', { studentId });`
- [187:23] (MessageAPI) `Demo data created successfully` → key: `student.studentprofile.demo_data_created_successfully` — Message API call: success()
  - context: `); // Show non-intrusive success message toast.success('Demo data created successfully', { description: 'Sample data has been`
- [187:23] (MessageAPI) `Demo data created successfully` → key: `student.studentprofile.demo_data_created_successfully` — sonner toast.success()
  - context: `); // Show non-intrusive success message toast.success('Demo data created successfully', { description: 'Sample data has been`
- [196:22] (MessageAPI) `Failed to auto-seed mock data` → key: `student.studentprofile.failed_to_auto_seed_mock` — Message API call: error()
  - context: `reloadData(); } } catch (error) { logger.error('Failed to auto-seed mock data', { error, studentId }); toast.error('Fai`
- [197:21] (MessageAPI) `Failed to create demo data` → key: `student.studentprofile.failed_to_create_demo_data` — Message API call: error()
  - context: `ror('Failed to auto-seed mock data', { error, studentId }); toast.error('Failed to create demo data', { description: 'Please try loading mock`
- [197:21] (MessageAPI) `Failed to create demo data` → key: `student.studentprofile.failed_to_create_demo_data` — sonner toast.error()
  - context: `ror('Failed to auto-seed mock data', { error, studentId }); toast.error('Failed to create demo data', { description: 'Please try loading mock`
- [247:24] (MessageAPI) `Error generating insights` → key: `student.studentprofile.error_generating_insights` — Message API call: error()
  - context: `} } catch (error) { if (!signal.aborted) { logger.error('Error generating insights', { error }); setInsights(null);`
- [249:23] (MessageAPI) `Failed to generate insights` → key: `student.studentprofile.failed_to_generate_insights` — Message API call: error()
  - context: `ating insights', { error }); setInsights(null); toast.error('Failed to generate insights'); } } finally { if (!signal.`
- [249:23] (MessageAPI) `Failed to generate insights` → key: `student.studentprofile.failed_to_generate_insights` — sonner toast.error()
  - context: `ating insights', { error }); setInsights(null); toast.error('Failed to generate insights'); } } finally { if (!signal.`
- [277:26] (MessageAPI) `[SAFE] analyticsManager.triggerAnalyticsForStudent failed` → key: `student.studentprofile.safe_analyticsmanager_triggeranalyticsforstudent_failed` — Message API call: error()
  - context: `} }) .catch((err) => { logger.error('[SAFE] analyticsManager.triggerAnalyticsForStudent failed', { error: err, stude`
- [289:24] (MessageAPI) `[SAFE] analyticsManager.initializeStudentAnalytics failed` → key: `student.studentprofile.safe_analyticsmanager_initializestudentanalytics_failed` — Message API call: error()
  - context: `entAnalytics done'); } } catch (err) { logger.error('[SAFE] analyticsManager.initializeStudentAnalytics failed', { error: err, stude`
- [294:20] (MessageAPI) `[SAFE] analyticsManager outer try/catch caught error` → key: `student.studentprofile.safe_analyticsmanager_outer_try_catch` — Message API call: error()
  - context: `/ Extra safety net; never rethrow from analytics side-effect logger.error('[SAFE] analyticsManager outer try/catch caught error', { error: err }); }`
- [361:20] (MessageAPI) `Export error` → key: `student.studentprofile.export_error` — Message API call: error()
  - context: `as ${format.toUpperCase()}\`); } catch (error: unknown) { logger.error('Export error', { error }); const errorMessage = error instanceof Error ?`
- [383:21] (MessageAPI) `Backup created successfully` → key: `student.studentprofile.backup_created_successfully` — Message API call: success()
  - context: `]/g, '-')}.json\`; downloadBlob(backupBlob, filename); toast.success('Backup created successfully'); } catch (error) { logger.error('Backup`
- [383:21] (MessageAPI) `Backup created successfully` → key: `student.studentprofile.backup_created_successfully` — sonner toast.success()
  - context: `]/g, '-')}.json\`; downloadBlob(backupBlob, filename); toast.success('Backup created successfully'); } catch (error) { logger.error('Backup`
- [385:20] (MessageAPI) `Backup error` → key: `student.studentprofile.backup_error` — Message API call: error()
  - context: `uccess('Backup created successfully'); } catch (error) { logger.error('Backup error', { error }); toast.error('Backup failed. Please try again.'`
- [386:19] (MessageAPI) `Backup failed. Please try again.` → key: `student.studentprofile.backup_failed_please_try_again` — Message API call: error()
  - context: `atch (error) { logger.error('Backup error', { error }); toast.error('Backup failed. Please try again.'); } }, [student, trackingEntries, allEm`
- [386:19] (MessageAPI) `Backup failed. Please try again.` → key: `student.studentprofile.backup_failed_please_try_again` — sonner toast.error()
  - context: `atch (error) { logger.error('Backup error', { error }); toast.error('Backup failed. Please try again.'); } }, [student, trackingEntries, allEm`

### src/pages/StudentProfileOptimized.tsx
- [123:23] (MessageAPI) `Demo data created successfully` → key: `student.studentprofileoptimized.demo_data_created_successfully` — Message API call: success()
  - context: `window.dispatchEvent(new CustomEvent('mockDataLoaded')); toast.success('Demo data created successfully'); if (reloadData) reloadData(); }`
- [123:23] (MessageAPI) `Demo data created successfully` → key: `student.studentprofileoptimized.demo_data_created_successfully` — sonner toast.success()
  - context: `window.dispatchEvent(new CustomEvent('mockDataLoaded')); toast.success('Demo data created successfully'); if (reloadData) reloadData(); }`
- [126:22] (MessageAPI) `Failed to auto-seed mock data` → key: `student.studentprofileoptimized.failed_to_auto_seed_mock` — Message API call: error()
  - context: `if (reloadData) reloadData(); } catch (error) { logger.error('Failed to auto-seed mock data', { error, studentId }); toast.error('Fai`
- [127:21] (MessageAPI) `Failed to create demo data` → key: `student.studentprofileoptimized.failed_to_create_demo_data` — Message API call: error()
  - context: `ror('Failed to auto-seed mock data', { error, studentId }); toast.error('Failed to create demo data'); } finally { setIsSeedingData(false)`
- [127:21] (MessageAPI) `Failed to create demo data` → key: `student.studentprofileoptimized.failed_to_create_demo_data` — sonner toast.error()
  - context: `ror('Failed to auto-seed mock data', { error, studentId }); toast.error('Failed to create demo data'); } finally { setIsSeedingData(false)`
- [154:26] (MessageAPI) `Failed to get insights` → key: `student.studentprofileoptimized.failed_to_get_insights` — Message API call: error()
  - context: `ewInsights); } } catch (error) { logger.error('Failed to get insights', { error }); } finally { setIsLoa`
- [212:20] (MessageAPI) `Export error` → key: `student.studentprofileoptimized.export_error` — Message API call: error()
  - context: `essfully as ${format.toUpperCase()}\`); } catch (error) { logger.error('Export error', { error }); toast.error(\`Export failed: ${error instanceof`

### src/pages/TrackStudent.tsx
- [48:19] (MessageAPI) `Emotion recorded!` → key: `student.trackstudent.emotion_recorded` — Message API call: success()
  - context: `| 'timestamp'>) => { setEmotions([...emotions, emotion]); toast.success("Emotion recorded!"); }; const handleSensoryAdd = (sensory: Omit<SensoryEnt`
- [48:19] (MessageAPI) `Emotion recorded!` → key: `student.trackstudent.emotion_recorded` — sonner toast.success()
  - context: `| 'timestamp'>) => { setEmotions([...emotions, emotion]); toast.success("Emotion recorded!"); }; const handleSensoryAdd = (sensory: Omit<SensoryEnt`
- [53:19] (MessageAPI) `Sensory input recorded!` → key: `student.trackstudent.sensory_input_recorded` — Message API call: success()
  - context: `mp'>) => { setSensoryInputs([...sensoryInputs, sensory]); toast.success("Sensory input recorded!"); }; const handleEnvironmentalAdd = (environmenta`
- [53:19] (MessageAPI) `Sensory input recorded!` → key: `student.trackstudent.sensory_input_recorded` — sonner toast.success()
  - context: `mp'>) => { setSensoryInputs([...sensoryInputs, sensory]); toast.success("Sensory input recorded!"); }; const handleEnvironmentalAdd = (environmenta`
- [58:19] (MessageAPI) `Environmental conditions recorded!` → key: `student.trackstudent.environmental_conditions_recorded` — Message API call: success()
  - context: `| 'timestamp'>) => { setEnvironmentalData(environmental); toast.success("Environmental conditions recorded!"); }; const handleSaveSession = async (`
- [58:19] (MessageAPI) `Environmental conditions recorded!` → key: `student.trackstudent.environmental_conditions_recorded` — sonner toast.success()
  - context: `| 'timestamp'>) => { setEnvironmentalData(environmental); toast.success("Environmental conditions recorded!"); }; const handleSaveSession = async (`
- [108:20] (MessageAPI) `Failed to save tracking session` → key: `student.trackstudent.failed_to_save_tracking_session` — Message API call: error()
  - context: `navigate(\`/student/${student.id}\`); } catch (error) { logger.error('Failed to save tracking session', { error }); toast.error(String(tTrackin`
- [155:13] (JSXText) `Record emotions and sensory responses for this session` → key: `student.trackstudent.record_emotions_and_sensory_responses` — Static JSX text node
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
- [167:20] (MessageAPI) `Failed to parse saved templates, using defaults` → key: `tracking.quickentrytemplates.failed_to_parse_saved_templates` — Message API call: error()
  - context: `catch (error) { // Log error and fall back to defaults logger.error('Failed to parse saved templates, using defaults', error); return defaultT`
- [196:20] (MessageAPI) `Failed to save templates to localStorage` → key: `tracking.quickentrytemplates.failed_to_save_templates_to` — Message API call: error()
  - context: `or) { // Handle quota exceeded or other storage errors logger.error('Failed to save templates to localStorage', error); toast.error('Failed to`
- [197:19] (MessageAPI) `Failed to save template changes. Storage may be full.` → key: `tracking.quickentrytemplates.failed_to_save_template_changes` — Message API call: error()
  - context: `ger.error('Failed to save templates to localStorage', error); toast.error('Failed to save template changes. Storage may be full.'); } }; const ap`
- [197:19] (MessageAPI) `Failed to save template changes. Storage may be full.` → key: `tracking.quickentrytemplates.failed_to_save_template_changes` — sonner toast.error()
  - context: `ger.error('Failed to save templates to localStorage', error); toast.error('Failed to save template changes. Storage may be full.'); } }; const ap`
- [232:19] (MessageAPI) `Cannot delete default templates` → key: `tracking.quickentrytemplates.cannot_delete_default_templates` — Message API call: error()
  - context: `ind(t => t.id === templateId); if (template?.isDefault) { toast.error("Cannot delete default templates"); return; } const updatedTe`
- [232:19] (MessageAPI) `Cannot delete default templates` → key: `tracking.quickentrytemplates.cannot_delete_default_templates` — sonner toast.error()
  - context: `ind(t => t.id === templateId); if (template?.isDefault) { toast.error("Cannot delete default templates"); return; } const updatedTe`
- [238:19] (MessageAPI) `Template deleted` → key: `tracking.quickentrytemplates.template_deleted` — Message API call: success()
  - context: `=> t.id !== templateId); saveTemplates(updatedTemplates); toast.success("Template deleted"); }; const createTemplate = () => { if (!newTemplate`
- [238:19] (MessageAPI) `Template deleted` → key: `tracking.quickentrytemplates.template_deleted` — sonner toast.success()
  - context: `=> t.id !== templateId); saveTemplates(updatedTemplates); toast.success("Template deleted"); }; const createTemplate = () => { if (!newTemplate`
- [243:19] (MessageAPI) `Template name is required` → key: `tracking.quickentrytemplates.template_name_is_required` — Message API call: error()
  - context: `createTemplate = () => { if (!newTemplate.name?.trim()) { toast.error("Template name is required"); return; } const template: QuickTemp`
- [243:19] (MessageAPI) `Template name is required` → key: `tracking.quickentrytemplates.template_name_is_required` — sonner toast.error()
  - context: `createTemplate = () => { if (!newTemplate.name?.trim()) { toast.error("Template name is required"); return; } const template: QuickTemp`
- [270:19] (MessageAPI) `Template created successfully` → key: `tracking.quickentrytemplates.template_created_successfully` — Message API call: success()
  - context: `false, usageCount: 0 }); setIsCreating(false); toast.success("Template created successfully"); }; const getCategoryColor = (category: st`
- [270:19] (MessageAPI) `Template created successfully` → key: `tracking.quickentrytemplates.template_created_successfully` — sonner toast.success()
  - context: `false, usageCount: 0 }); setIsCreating(false); toast.success("Template created successfully"); }; const getCategoryColor = (category: st`
- [298:13] (JSXText) `Quick Entry Templates` → key: `tracking.quickentrytemplates.quick_entry_templates` — Static JSX text node
  - context: `center gap-2"> <Zap className="h-5 w-5 text-primary" /> Quick Entry Templates </CardTitle> <Dialog open={isCreating}`
- [302:62] (JSXAttribute) `Create new template` → key: `tracking.quickentrytemplates.create_new_template` — Static aria-label attribute
  - context: `ogTrigger asChild> <Button size="sm" variant="outline" aria-label="Create new template" title="Create new template"> <Plus classNa`
- [302:90] (JSXAttribute) `Create new template` → key: `tracking.quickentrytemplates.create_new_template` — Static title attribute
  - context: `<Button size="sm" variant="outline" aria-label="Create new template" title="Create new template"> <Plus className="h-4 w-4 mr-2" />`
- [304:52] (JSXText) `New Template` → key: `tracking.quickentrytemplates.new_template` — Static JSX text node
  - context: `className="h-4 w-4 mr-2" /> <span className="hidden sm:inline">New Template</span> </Button> </DialogTrigger>`
- [309:30] (JSXText) `Create Quick Entry Template` → key: `tracking.quickentrytemplates.create_quick_entry_template` — Static JSX text node
  - context: `className="max-w-md"> <DialogHeader> <DialogTitle>Create Quick Entry Template</DialogTitle> <DialogDescription>`
- [311:19] (JSXText) `Define a name, optional description, category, and default values.` → key: `tracking.quickentrytemplates.define_a_name_optional_description` — Static JSX text node
  - context: `ry Template</DialogTitle> <DialogDescription> Define a name, optional description, category, and default values.`
- [316:58] (JSXText) `Template Name` → key: `tracking.quickentrytemplates.template_name` — Static JSX text node
  - context: `<div> <label className="text-sm font-medium">Template Name</label> <Input placeholder="`
- [318:33] (JSXAttribute) `e.g., Sensory Overload Response` → key: `tracking.quickentrytemplates.e_g_sensory_overload_response` — Static placeholder attribute
  - context: `>Template Name</label> <Input placeholder="e.g., Sensory Overload Response" value={newTemplate.name ||`
- [326:33] (JSXAttribute) `Brief description of when to use this template` → key: `tracking.quickentrytemplates.brief_description_of_when_to` — Static placeholder attribute
  - context: `Description</label> <Textarea placeholder="Brief description of when to use this template" value={newT`
- [355:21] (JSXText) `Create Template` → key: `tracking.quickentrytemplates.create_template` — Static JSX text node
  - context: `Button> <Button onClick={createTemplate}> Create Template </Button> </div>`
- [414:23] (JSXText) `Apply Template` → key: `tracking.quickentrytemplates.apply_template` — Static JSX text node
  - context: `className="flex-1 mr-2" > Apply Template </Button>`
- [422:38] (JSXAttribute) `Edit template` → key: `tracking.quickentrytemplates.edit_template` — Static aria-label attribute
  - context: `variant="ghost" aria-label="Edit template" title="Edit template"`
- [423:33] (JSXAttribute) `Edit template` → key: `tracking.quickentrytemplates.edit_template` — Static title attribute
  - context: `aria-label="Edit template" title="Edit template" onClick={() => setEditingTemplate(temp`
- [431:38] (JSXAttribute) `Delete template` → key: `tracking.quickentrytemplates.delete_template` — Static aria-label attribute
  - context: `variant="ghost" aria-label="Delete template" title="Delete template"`
- [432:33] (JSXAttribute) `Delete template` → key: `tracking.quickentrytemplates.delete_template` — Static title attribute
  - context: `aria-label="Delete template" title="Delete template" onClick={() => deleteTemplate(templa`
- [449:16] (JSXText) `No quick entry templates yet` → key: `tracking.quickentrytemplates.no_quick_entry_templates_yet` — Static JSX text node
  - context: `<Zap className="h-12 w-12 mx-auto mb-3 opacity-50" /> <p>No quick entry templates yet</p> <p className="text-sm">Create templ`
- [450:36] (JSXText) `Create templates for common tracking scenarios` → key: `tracking.quickentrytemplates.create_templates_for_common_tracking` — Static JSX text node
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
- [536:13] (JSXText) `Timeline Visualization` → key: `tracking.timelinevisualization.timeline_visualization` — Static JSX text node
  - context: `flex items-center gap-2"> <Clock className="h-5 w-5" /> Timeline Visualization </CardTitle> <div className="flex ite`
- [547:26] (JSXAttribute) `Reset view` → key: `tracking.timelinevisualization.reset_view` — Static aria-label attribute
  - context: `size="icon" variant="ghost" aria-label="Reset view" title="Reset view" onClick={() => {`
- [548:21] (JSXAttribute) `Reset view` → key: `tracking.timelinevisualization.reset_view` — Static title attribute
  - context: `variant="ghost" aria-label="Reset view" title="Reset view" onClick={() => { setZoomLevel(1);`
- [569:28] (JSXAttribute) `Zoom out` → key: `tracking.timelinevisualization.zoom_out` — Static aria-label attribute
  - context: `size="icon" variant="ghost" aria-label="Zoom out" title="Zoom out" onClick={() => handl`
- [570:23] (JSXAttribute) `Zoom out` → key: `tracking.timelinevisualization.zoom_out` — Static title attribute
  - context: `variant="ghost" aria-label="Zoom out" title="Zoom out" onClick={() => handleZoom(-0.5)} disa`
- [582:28] (JSXAttribute) `Zoom in` → key: `tracking.timelinevisualization.zoom_in` — Static aria-label attribute
  - context: `size="icon" variant="ghost" aria-label="Zoom in" title="Zoom in" onClick={() => handleZ`
- [583:23] (JSXAttribute) `Zoom in` → key: `tracking.timelinevisualization.zoom_in` — Static title attribute
  - context: `variant="ghost" aria-label="Zoom in" title="Zoom in" onClick={() => handleZoom(0.5)} disabl`
- [596:28] (JSXAttribute) `Pan left` → key: `tracking.timelinevisualization.pan_left` — Static aria-label attribute
  - context: `size="icon" variant="ghost" aria-label="Pan left" title="Pan left" onClick={() => handl`
- [597:23] (JSXAttribute) `Pan left` → key: `tracking.timelinevisualization.pan_left` — Static title attribute
  - context: `variant="ghost" aria-label="Pan left" title="Pan left" onClick={() => handlePan(50)} >`
- [605:28] (JSXAttribute) `Pan right` → key: `tracking.timelinevisualization.pan_right` — Static aria-label attribute
  - context: `size="icon" variant="ghost" aria-label="Pan right" title="Pan right" onClick={() => han`
- [606:23] (JSXAttribute) `Pan right` → key: `tracking.timelinevisualization.pan_right` — Static title attribute
  - context: `variant="ghost" aria-label="Pan right" title="Pan right" onClick={() => handlePan(-50)} >`
- [756:54] (JSXText) `Data Streams` → key: `tracking.timelinevisualization.data_streams` — Static JSX text node
  - context: `rounded-lg p-3 shadow-lg"> <h4 className="font-medium text-sm mb-2">Data Streams</h4> <div className="space-y-1"> {dataStr`

### src/components/tracking/DataCollectionMonitor.tsx
- [281:48] (JSXText) `No data collection history yet` → key: `tracking.datacollectionmonitor.no_data_collection_history_yet` — Static JSX text node
  - context: `o mb-4 text-muted-foreground" /> <p className="text-muted-foreground">No data collection history yet</p> <p className="text-sm text-muted-fo`
- [283:13] (JSXText) `Start your first session to see monitoring insights` → key: `tracking.datacollectionmonitor.start_your_first_session_to` — Static JSX text node
  - context: `et</p> <p className="text-sm text-muted-foreground mt-2"> Start your first session to see monitoring insights </p> </Car`
- [298:15] (JSXText) `Collection Overview` → key: `tracking.datacollectionmonitor.collection_overview` — Static JSX text node
  - context: `ems-center gap-2"> <Activity className="h-5 w-5" /> Collection Overview </CardTitle> </CardHeader> <`
- [305:62] (JSXText) `Total Sessions` → key: `tracking.datacollectionmonitor.total_sessions` — Static JSX text node
  - context: `totalSessions}</p> <p className="text-xs text-muted-foreground">Total Sessions</p> </div> <div className="text-cente`
- [313:62] (JSXText) `Completion Rate` → key: `tracking.datacollectionmonitor.completion_rate` — Static JSX text node
  - context: `</p> <p className="text-xs text-muted-foreground">Completion Rate</p> </div> <div className="text-cent`
- [319:62] (JSXText) `Avg Quality` → key: `tracking.datacollectionmonitor.avg_quality` — Static JSX text node
  - context: `</p> <p className="text-xs text-muted-foreground">Avg Quality</p> </div> <div className="text-center p`
- [325:62] (JSXText) `Avg Duration` → key: `tracking.datacollectionmonitor.avg_duration` — Static JSX text node
  - context: `</p> <p className="text-xs text-muted-foreground">Avg Duration</p> </div> </div> {/* Common`
- [334:19] (JSXText) `Common Issues` → key: `tracking.datacollectionmonitor.common_issues` — Static JSX text node
  - context: `<AlertCircle className="h-4 w-4 text-yellow-500" /> Common Issues </h4> <div className="space-y-1">`
- [357:13] (JSXText) `Collection Goals` → key: `tracking.datacollectionmonitor.collection_goals` — Static JSX text node
  - context: `lex items-center gap-2"> <Target className="h-5 w-5" /> Collection Goals </CardTitle> </CardHeader> <CardConte`
- [398:23] (JSXText) `Target by` → key: `tracking.datacollectionmonitor.target_by` — Static JSX text node
  - context: `"> <Calendar className="h-3 w-3" /> Target by {format(goal.deadline, 'MMM d')} </p>`
- [414:15] (JSXText) `Recommended Strategies` → key: `tracking.datacollectionmonitor.recommended_strategies` — Static JSX text node
  - context: `"> <Sparkles className="h-5 w-5 text-yellow-500" /> Recommended Strategies </CardTitle> </CardHeader>`
- [496:66] (JSXText) `How to implement:` → key: `tracking.datacollectionmonitor.how_to_implement` — Static JSX text node
  - context: `<div> <h5 className="text-xs font-medium mb-1">How to implement:</h5> <ul className="text-xs text-muted`
- [532:13] (JSXText) `You have` → key: `tracking.datacollectionmonitor.you_have` — Static JSX text node
  - context: `<Info className="h-4 w-4" /> <AlertDescription> You have {activeStrategies.length} active {activeStrategies.length === 1 ? 'stra`
- [532:114] (JSXText) `.
            Remember to apply` → key: `tracking.datacollectionmonitor.remember_to_apply` — Static JSX text node
  - context: `egies.length} active {activeStrategies.length === 1 ? 'strategy' : 'strategies'}. Remember to apply {activeStrategies.length === 1 ? 'it' : 'them'}`
- [533:79] (JSXText) `in your next session!` → key: `tracking.datacollectionmonitor.in_your_next_session` — Static JSX text node
  - context: `. Remember to apply {activeStrategies.length === 1 ? 'it' : 'them'} in your next session! </AlertDescription> </Alert> )}`

### src/components/tracking/SessionIndicator.tsx
- [111:53] (JSXText) `Active Session` → key: `tracking.sessionindicator.active_session` — Static JSX text node
  - context: `or())} /> <div> <h3 className="font-semibold text-sm">Active Session</h3> <p className="text-xs text-muted-foreground">`
- [127:63] (JSXText) `Data Quality` → key: `tracking.sessionindicator.data_quality` — Static JSX text node
  - context: `fy-between mb-1"> <span className="text-xs text-muted-foreground">Data Quality</span> <div className="flex items-center gap-1">`
- [159:15] (JSXText) `Last saved` → key: `tracking.sessionindicator.last_saved` — Static JSX text node
  - context: `ckCircle className="h-3 w-3 text-green-500" /> <span> Last saved {new Date(quality.lastSaved).toLocaleTimeString()} </span`
- [215:15] (JSXText) `Add more data to improve session quality` → key: `tracking.sessionindicator.add_more_data_to_improve` — Static JSX text node
  - context: `der-warning/20"> <p className="text-xs text-warning"> Add more data to improve session quality </p> </div>`

### src/components/tracking/SessionRecovery.tsx
- [52:21] (MessageAPI) `Failed to recover session:` → key: `tracking.sessionrecovery.failed_to_recover_session` — Message API call: error()
  - context: `> s.sessionId !== sessionId) ); } catch (error) { console.error('Failed to recover session:', error); } finally { setIsRecovering(fals`
- [103:21] (JSXText) `Unsaved Session Found` → key: `tracking.sessionrecovery.unsaved_session_found` — Static JSX text node
  - context: `className)}> <AlertTriangle className="h-4 w-4" /> <AlertTitle>Unsaved Session Found</AlertTitle> <AlertDescription className="mt-2">`
- [106:13] (JSXText) `You have an incomplete session from` → key: `tracking.sessionrecovery.you_have_an_incomplete_session` — Static JSX text node
  - context: `escription className="mt-2"> <p className="text-sm mb-3"> You have an incomplete session from {age} with {session.metadata.dataPoints} dat`
- [106:90] (JSXText) `data points.` → key: `tracking.sessionrecovery.data_points` — Static JSX text node
  - context: `You have an incomplete session from {age} with {session.metadata.dataPoints} data points. </p> <div className="flex gap-2"> <`
- [123:19] (JSXText) `Resume Session` → key: `tracking.sessionrecovery.resume_session` — Static JSX text node
  - context: `<> <RefreshCw className="h-4 w-4 mr-2" /> Resume Session </> )} </Button>`
- [148:19] (JSXText) `Recoverable Sessions` → key: `tracking.sessionrecovery.recoverable_sessions` — Static JSX text node
  - context: `<AlertTriangle className="h-5 w-5 text-yellow-500" /> <span>Recoverable Sessions</span> </div> <Badge variant="outline">`
- [155:46] (JSXText) `incomplete session(s) that can be recovered.` → key: `tracking.sessionrecovery.incomplete_session_s_that_can` — Static JSX text node
  - context: `xt-sm text-muted-foreground mb-4"> Found {recoverableSessions.length} incomplete session(s) that can be recovered. </p> <div classNam`
- [189:57] (JSXText) `data points` → key: `tracking.sessionrecovery.data_points` — Static JSX text node
  - context: `xt-muted-foreground" /> <span>{session.metadata.dataPoints} data points</span> </div> <div className="fl`
- [261:13] (JSXText) `Discard All` → key: `tracking.sessionrecovery.discard_all` — Static JSX text node
  - context: `uctive" > <Trash2 className="h-4 w-4 mr-2" /> Discard All </Button> </div> </CardContent> </Card>`

## False positives

- src/App.tsx [51:19] (JSXText) `Loading...` — Looks like an identifier or existing key
- src/components/AdvancedSearch.tsx [463:233] (JSXText) `goals` — Looks like an identifier or existing key
- src/components/AlertManager.tsx [159:25] (JSXText) `Resolved` — Looks like an identifier or existing key
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
- src/components/analysis/TeacherInsightsPanel.tsx [96:42] (JSXText) `Correlation` — Looks like an identifier or existing key
- src/components/analysis/TeacherInsightsPanel.tsx [119:11] (JSXText) `Data:` — Looks like an identifier or existing key
- src/components/analysis/TeacherInsightsPanel.tsx [119:49] (JSXText) `emotions` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [478:28] (JSXText) `Emotion:` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [478:89] (JSXText) `x` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [479:28] (JSXText) `Frequency:` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [479:84] (JSXText) `x` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [480:28] (JSXText) `Anomaly:` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [480:80] (JSXText) `x` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [511:98] (JSXText) `days` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [530:93] (JSXText) `days` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [549:91] (JSXText) `days` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [607:70] (JSXText) `Version` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [618:72] (JSXText) `Accuracy` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [648:37] (JSXText) `Training...` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [653:37] (JSXText) `Retrain` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [666:37] (JSXText) `Deleting...` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [688:35] (JSXText) `Training...` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [751:84] (JSXText) `min` — Looks like an identifier or existing key
- src/components/AnalyticsSettings.tsx [832:17] (JSXText) `Cancel` — Looks like an identifier or existing key
- src/components/AnalyticsStatusIndicator.tsx [154:11] (JSXText) `Analytics:` — Looks like an identifier or existing key
- src/components/AnalyticsStatusIndicator.tsx [158:13] (JSXText) `Updated` — Looks like an identifier or existing key
- src/components/AnalyticsStatusIndicator.tsx [181:13] (JSXText) `Refresh` — Looks like an identifier or existing key
- src/components/AnalyticsStatusIndicator.tsx [260:21] (JSXText) `Auto-Updates` — Looks like an identifier or existing key
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
- src/components/DataRequirementsCalculator.tsx [229:68] (JSXText) `Tidsestimat` — Looks like an identifier or existing key
- src/components/DataRequirementsCalculator.tsx [232:17] (JSXText) `Med` — Looks like an identifier or existing key
- src/components/DataRequirementsCalculator.tsx [233:91] (JSXText) `innen` — Looks like an identifier or existing key
- src/components/DataRequirementsCalculator.tsx [261:98] (JSXText) `dager` — Looks like an identifier or existing key
- src/components/DataRequirementsCalculator.tsx [284:69] (JSXText) `Anbefalinger` — Looks like an identifier or existing key
- src/components/DateRangeSelector.tsx [174:44] (JSXText) `Selected:` — Looks like an identifier or existing key
- src/components/DebugVisualization.tsx [174:54] (JSXText) `Emotions` — Looks like an identifier or existing key
- src/components/DevErrorBanner.tsx [101:15] (JSXText) `Dismiss` — Looks like an identifier or existing key
- src/components/EmotionTracker.tsx [210:34] (JSXAttribute) `duration-help` — Looks like an identifier or existing key
- src/components/EmotionTracker.tsx [240:17] (JSXText) `Sudden` — Looks like an identifier or existing key
- src/components/EmotionTracker.tsx [248:17] (JSXText) `Gradual` — Looks like an identifier or existing key
- src/components/EmotionTracker.tsx [256:17] (JSXText) `Unknown` — Looks like an identifier or existing key
- src/components/EnhancedDataVisualization.tsx [87:58] (JSXText) `Displaying` — Looks like an identifier or existing key
- src/components/EnhancedDataVisualization.tsx [90:129] (JSXText) `Emotions` — Looks like an identifier or existing key
- src/components/EnhancedDataVisualization.tsx [91:127] (JSXText) `Sensory` — Looks like an identifier or existing key
- src/components/EnhancedPersonalizedInsights.tsx [250:42] (JSXText) `Strengths` — Looks like an identifier or existing key
- src/components/EnhancedPersonalizedInsights.tsx [252:41] (JSXText) `Patterns` — Looks like an identifier or existing key
- src/components/EnhancedPersonalizedInsights.tsx [253:42] (JSXText) `Alerts` — Looks like an identifier or existing key
- src/components/EnhancedPersonalizedInsights.tsx [275:31] (JSXText) `Forecast:` — Looks like an identifier or existing key
- src/components/EnhancedPersonalizedInsights.tsx [284:70] (JSXText) `Recommendations:` — Looks like an identifier or existing key
- src/components/EnhancedPersonalizedInsights.tsx [386:50] (JSXText) `priority` — Looks like an identifier or existing key
- src/components/EnhancedPersonalizedInsights.tsx [493:46] (JSXText) `severity` — Looks like an identifier or existing key
- src/components/GoalManager.tsx [320:43] (JSXText) `Category` — Looks like an identifier or existing key
- src/components/GoalManager.tsx [326:52] (JSXText) `Behavioral` — Looks like an identifier or existing key
- src/components/GoalManager.tsx [327:50] (JSXText) `Academic` — Looks like an identifier or existing key
- src/components/GoalManager.tsx [328:48] (JSXText) `Social` — Looks like an identifier or existing key
- src/components/GoalManager.tsx [329:49] (JSXText) `Sensory` — Looks like an identifier or existing key
- src/components/GoalManager.tsx [330:55] (JSXText) `Communication` — Looks like an identifier or existing key
- src/components/GoalManager.tsx [383:19] (JSXText) `Cancel` — Looks like an identifier or existing key
- src/components/GoalManager.tsx [442:59] (JSXText) `Progress` — Looks like an identifier or existing key
- src/components/GoalManager.tsx [460:27] (JSXText) `Created:` — Looks like an identifier or existing key
- src/components/GoalManager.tsx [464:27] (JSXText) `Target:` — Looks like an identifier or existing key
- src/components/GoalManager.tsx [471:49] (JSXText) `Milestones` — Looks like an identifier or existing key
- src/components/GoalManager.tsx [485:23] (JSXText) `Add` — Looks like an identifier or existing key
- src/components/InteractiveDataVisualization.debug.tsx [26:16] (JSXText) `Emotions:` — Looks like an identifier or existing key
- src/components/InteractiveDataVisualization.debug.tsx [26:50] (JSXText) `entries` — Looks like an identifier or existing key
- src/components/InteractiveDataVisualization.debug.tsx [27:61] (JSXText) `entries` — Looks like an identifier or existing key
- src/components/InteractiveDataVisualization.debug.tsx [28:65] (JSXText) `entries` — Looks like an identifier or existing key
- src/components/InteractiveDataVisualization.diagnosis.tsx [125:18] (JSXText) `Passed:` — Looks like an identifier or existing key
- src/components/InteractiveDataVisualization.diagnosis.tsx [126:18] (JSXText) `Failed:` — Looks like an identifier or existing key
- src/components/InteractiveDataVisualization.minimal.tsx [31:16] (JSXText) `Emotions:` — Looks like an identifier or existing key
- src/components/InteractiveDataVisualization.minimal.tsx [31:44] (JSXText) `entries` — Looks like an identifier or existing key
- src/components/InteractiveDataVisualization.minimal.tsx [32:55] (JSXText) `entries` — Looks like an identifier or existing key
- src/components/InteractiveDataVisualization.minimal.tsx [33:59] (JSXText) `entries` — Looks like an identifier or existing key
- src/components/layouts/DashboardLayout.tsx [44:11] (JSXText) `Trends` — Looks like an identifier or existing key
- src/components/layouts/DashboardLayout.tsx [48:11] (JSXText) `Correlations` — Looks like an identifier or existing key
- src/components/layouts/DashboardLayout.tsx [52:11] (JSXText) `Patterns` — Looks like an identifier or existing key
- src/components/layouts/DashboardLayout.tsx [62:11] (JSXText) `Timeline` — Looks like an identifier or existing key
- src/components/MockDataLoader.tsx [166:51] (JSXText) `students` — Looks like an identifier or existing key
- src/components/MockDataLoader.tsx [176:50] (JSXText) `Scenario` — Looks like an identifier or existing key
- src/components/MockDataLoader.tsx [234:38] (JSXText) `Cancel` — Looks like an identifier or existing key
- src/components/optimized/OptimizedDataRequirementsCalculator.tsx [273:25] (JSXText) `sikkerhet` — Looks like an identifier or existing key
- src/components/optimized/OptimizedDataRequirementsCalculator.tsx [307:53] (JSXText) `datapunkt` — Looks like an identifier or existing key
- src/components/optimized/OptimizedDataVisualization.tsx [69:11] (JSXText) `Tracking` — Looks like an identifier or existing key
- src/components/optimized/OptimizedEnhancedPersonalizedInsights.tsx [232:42] (JSXText) `Strengths` — Looks like an identifier or existing key
- src/components/optimized/OptimizedEnhancedPersonalizedInsights.tsx [234:41] (JSXText) `Patterns` — Looks like an identifier or existing key
- src/components/optimized/OptimizedEnhancedPersonalizedInsights.tsx [235:42] (JSXText) `Alerts` — Looks like an identifier or existing key
- src/components/optimized/OptimizedEnhancedPersonalizedInsights.tsx [257:31] (JSXText) `Forecast:` — Looks like an identifier or existing key
- src/components/optimized/OptimizedEnhancedPersonalizedInsights.tsx [266:70] (JSXText) `Recommendations:` — Looks like an identifier or existing key
- src/components/optimized/OptimizedEnhancedPersonalizedInsights.tsx [367:50] (JSXText) `priority` — Looks like an identifier or existing key
- src/components/optimized/OptimizedEnhancedPersonalizedInsights.tsx [474:46] (JSXText) `severity` — Looks like an identifier or existing key
- src/components/optimized/OptimizedGoalManager.tsx [391:52] (JSXText) `Behavioral` — Looks like an identifier or existing key
- src/components/optimized/OptimizedGoalManager.tsx [392:50] (JSXText) `Academic` — Looks like an identifier or existing key
- src/components/optimized/OptimizedGoalManager.tsx [393:48] (JSXText) `Social` — Looks like an identifier or existing key
- src/components/optimized/OptimizedGoalManager.tsx [394:55] (JSXText) `Communication` — Looks like an identifier or existing key
- src/components/optimized/OptimizedGoalManager.tsx [396:49] (JSXText) `Sensory` — Looks like an identifier or existing key
- src/components/optimized/OptimizedGoalManager.tsx [397:51] (JSXText) `Cognitive` — Looks like an identifier or existing key
- src/components/optimized/OptimizedGoalManager.tsx [398:51] (JSXText) `Emotional` — Looks like an identifier or existing key
- src/components/optimized/OptimizedGoalManager.tsx [399:50] (JSXText) `Self-Care` — Looks like an identifier or existing key
- src/components/optimized/OptimizedGoalManager.tsx [400:52] (JSXText) `Vocational` — Looks like an identifier or existing key
- src/components/optimized/OptimizedGoalManager.tsx [449:19] (JSXText) `Cancel` — Looks like an identifier or existing key
- src/components/optimized/OptimizedGoalManager.tsx [575:45] (JSXText) `Progress` — Looks like an identifier or existing key
- src/components/optimized/OptimizedGoalManager.tsx [599:13] (JSXText) `Created:` — Looks like an identifier or existing key
- src/components/optimized/OptimizedGoalManager.tsx [603:13] (JSXText) `Target:` — Looks like an identifier or existing key
- src/components/optimized/OptimizedGoalManager.tsx [626:37] (JSXText) `Milestones` — Looks like an identifier or existing key
- src/components/optimized/OptimizedGoalManager.tsx [629:11] (JSXText) `Add` — Looks like an identifier or existing key
- src/components/optimized/OptimizedStudentCard.tsx [36:60] (JSXText) `Grade` — Looks like an identifier or existing key
- src/components/optimized/OptimizedStudentCard.tsx [58:13] (JSXText) `Track` — Looks like an identifier or existing key
- src/components/optimized/OptimizedVisualization3D.tsx [73:12] (JSXText) `X:` — Looks like an identifier or existing key
- src/components/optimized/OptimizedVisualization3D.tsx [74:12] (JSXText) `Y:` — Looks like an identifier or existing key
- src/components/optimized/OptimizedVisualization3D.tsx [75:12] (JSXText) `Z:` — Looks like an identifier or existing key
- src/components/optimized/OptimizedVisualization3D.tsx [76:32] (JSXText) `Intensity:` — Looks like an identifier or existing key
- src/components/optimized/OptimizedVisualization3D.tsx [415:42] (JSXText) `Time` — Looks like an identifier or existing key
- src/components/optimized/OptimizedVisualization3D.tsx [429:42] (JSXText) `Time` — Looks like an identifier or existing key
- src/components/optimized/OptimizedVisualization3D.tsx [443:42] (JSXText) `Time` — Looks like an identifier or existing key
- src/components/optimized/OptimizedVisualization3D.tsx [455:46] (JSXText) `Category` — Looks like an identifier or existing key
- src/components/optimized/OptimizedVisualization3D.tsx [456:47] (JSXText) `Intensity` — Looks like an identifier or existing key
- src/components/optimized/OptimizedVisualization3D.tsx [476:63] (JSXText) `Filter` — Looks like an identifier or existing key
- src/components/optimized/OptimizedVisualization3D.tsx [483:45] (JSXText) `Emotions` — Looks like an identifier or existing key
- src/components/optimized/OptimizedVisualization3D.tsx [484:45] (JSXText) `Sensory` — Looks like an identifier or existing key
- src/components/optimized/OptimizedVisualization3D.tsx [485:51] (JSXText) `Environmental` — Looks like an identifier or existing key
- src/components/optimized/OptimizedVisualization3D.tsx [547:19] (JSXText) `Hovering:` — Looks like an identifier or existing key
- src/components/PaginatedSessionsList.tsx [72:19] (JSXText) `Showing` — Looks like an identifier or existing key
- src/components/PaginatedSessionsList.tsx [72:51] (JSXText) `of` — Looks like an identifier or existing key
- src/components/PaginatedSessionsList.tsx [103:62] (JSXText) `at` — Looks like an identifier or existing key
- src/components/PaginatedSessionsList.tsx [107:49] (JSXText) `emotions` — Looks like an identifier or existing key
- src/components/PaginatedSessionsList.tsx [110:54] (JSXText) `sensory` — Looks like an identifier or existing key
- src/components/PaginatedSessionsList.tsx [133:56] (JSXText) `more` — Looks like an identifier or existing key
- src/components/PaginatedSessionsList.tsx [146:19] (JSXText) `Page` — Looks like an identifier or existing key
- src/components/PaginatedSessionsList.tsx [146:38] (JSXText) `of` — Looks like an identifier or existing key
- src/components/PeriodComparison.tsx [178:17] (JSXText) `vs` — Looks like an identifier or existing key
- src/components/PeriodComparison.tsx [197:17] (JSXText) `vs` — Looks like an identifier or existing key
- src/components/PeriodComparison.tsx [209:62] (JSXText) `Emotion` — Looks like an identifier or existing key
- src/components/PeriodComparison.tsx [211:117] (JSXText) `to` — Looks like an identifier or existing key
- src/components/PeriodComparison.tsx [219:62] (JSXText) `Intensity` — Looks like an identifier or existing key
- src/components/PeriodComparison.tsx [222:120] (JSXText) `by` — Looks like an identifier or existing key
- src/components/PeriodComparison.tsx [224:115] (JSXText) `points` — Looks like an identifier or existing key
- src/components/PeriodComparison.tsx [232:62] (JSXText) `Sensory` — Looks like an identifier or existing key
- src/components/PeriodComparison.tsx [235:106] (JSXText) `by` — Looks like an identifier or existing key
- src/components/profile-sections/DashboardSection.tsx [87:46] (JSXText) `Oversikt` — Looks like an identifier or existing key
- src/components/profile-sections/DashboardSection.tsx [106:13] (JSXText) `Analysestatus` — Looks like an identifier or existing key
- src/components/profile-sections/DashboardSection.tsx [180:13] (JSXText) `Datakvalitet` — Looks like an identifier or existing key
- src/components/ProgressDashboard.tsx [228:85] (JSXText) `achieved` — Looks like an identifier or existing key
- src/components/ProgressDashboard.tsx [279:41] (JSXText) `Overview` — Looks like an identifier or existing key
- src/components/ProgressDashboard.tsx [280:39] (JSXText) `Trends` — Looks like an identifier or existing key
- src/components/ProgressDashboard.tsx [281:43] (JSXText) `Categories` — Looks like an identifier or existing key
- src/components/ProgressDashboard.tsx [282:43] (JSXText) `Priorities` — Looks like an identifier or existing key
- src/components/ProgressDashboard.tsx [352:29] (JSXText) `Updated` — Looks like an identifier or existing key
- src/components/ProgressDashboard.tsx [456:67] (JSXText) `goals` — Looks like an identifier or existing key
- src/components/ProgressDashboard.tsx [461:51] (JSXText) `achieved` — Looks like an identifier or existing key
- src/components/ProgressDashboard.tsx [493:31] (JSXText) `Progress` — Looks like an identifier or existing key
- src/components/QuickEntryTemplates.tsx [324:58] (JSXText) `Description` — Looks like an identifier or existing key
- src/components/QuickEntryTemplates.tsx [332:58] (JSXText) `Category` — Looks like an identifier or existing key
- src/components/QuickEntryTemplates.tsx [341:51] (JSXText) `Morning` — Looks like an identifier or existing key
- src/components/QuickEntryTemplates.tsx [342:54] (JSXText) `Transition` — Looks like an identifier or existing key
- src/components/QuickEntryTemplates.tsx [343:52] (JSXText) `Learning` — Looks like an identifier or existing key
- src/components/QuickEntryTemplates.tsx [344:49] (JSXText) `Break` — Looks like an identifier or existing key
- src/components/QuickEntryTemplates.tsx [345:53] (JSXText) `Afternoon` — Looks like an identifier or existing key
- src/components/QuickEntryTemplates.tsx [346:50] (JSXText) `Custom` — Looks like an identifier or existing key
- src/components/QuickEntryTemplates.tsx [352:21] (JSXText) `Cancel` — Looks like an identifier or existing key
- src/components/QuickEntryTemplates.tsx [402:59] (JSXText) `more` — Looks like an identifier or existing key
- src/components/settings/AnalyticsConfig.tsx [206:38] (JSXAttribute) `help-minDataPoints` — Looks like an identifier or existing key
- src/components/settings/AnalyticsConfig.tsx [319:38] (JSXAttribute) `help-cache-ttl` — Looks like an identifier or existing key
- src/components/settings/AnalyticsConfig.tsx [337:38] (JSXAttribute) `help-cache-maxSize` — Looks like an identifier or existing key
- src/components/StorageManager.tsx [107:21] (JSXText) `Used` — Looks like an identifier or existing key
- src/components/StorageManager.tsx [123:18] (JSXText) `Students:` — Looks like an identifier or existing key
- src/components/StorageManager.tsx [124:18] (JSXText) `Entries:` — Looks like an identifier or existing key
- src/components/StorageManager.tsx [125:18] (JSXText) `Goals:` — Looks like an identifier or existing key
- src/components/StorageManager.tsx [126:18] (JSXText) `Alerts:` — Looks like an identifier or existing key
- src/components/StudentProfileSidebar.tsx [110:13] (JSXText) `Hovedseksjoner` — Looks like an identifier or existing key
- src/components/TestingDebugPanel.tsx [311:62] (JSXText) `Students` — Looks like an identifier or existing key
- src/components/TestingDebugPanel.tsx [315:62] (JSXText) `Entries` — Looks like an identifier or existing key
- src/components/TestingDebugPanel.tsx [319:62] (JSXText) `Analytics` — Looks like an identifier or existing key
- src/components/TestingDebugPanel.tsx [364:66] (JSXText) `Hits` — Looks like an identifier or existing key
- src/components/TestingDebugPanel.tsx [369:66] (JSXText) `Misses` — Looks like an identifier or existing key
- src/components/TestingDebugPanel.tsx [374:66] (JSXText) `Sets` — Looks like an identifier or existing key
- src/components/TimelineVisualization.tsx [541:17] (JSXText) `Live` — Looks like an identifier or existing key
- src/components/TimelineVisualization.tsx [633:32] (JSXText) `x` — Looks like an identifier or existing key
- src/components/TimelineVisualization.tsx [647:17] (JSXText) `Emotions` — Looks like an identifier or existing key
- src/components/TimelineVisualization.tsx [657:17] (JSXText) `Sensory` — Looks like an identifier or existing key
- src/components/TimelineVisualization.tsx [667:17] (JSXText) `Anomalies` — Looks like an identifier or existing key
- src/components/TimelineVisualization.tsx [676:65] (JSXText) `minutes` — Looks like an identifier or existing key
- src/components/TimelineVisualization.tsx [773:18] (JSXText) `Events:` — Looks like an identifier or existing key
- src/components/TimelineVisualization.tsx [774:18] (JSXText) `Zoom:` — Looks like an identifier or existing key
- src/components/TimelineVisualization.tsx [776:20] (JSXText) `Selection:` — Looks like an identifier or existing key
- src/components/TimelineVisualization.tsx [776:91] (JSXText) `min` — Looks like an identifier or existing key
- src/components/tracking/DataCollectionMonitor.tsx [323:67] (JSXText) `m` — Looks like an identifier or existing key
- src/components/tracking/DataCollectionMonitor.tsx [341:39] (JSXText) `times` — Looks like an identifier or existing key
- src/components/tracking/DataCollectionMonitor.tsx [463:27] (JSXText) `Effectiveness:` — Looks like an identifier or existing key
- src/components/tracking/DataCollectionMonitor.tsx [484:66] (JSXText) `Benefits:` — Looks like an identifier or existing key
- src/components/tracking/DataCollectionMonitor.tsx [532:48] (JSXText) `active` — Looks like an identifier or existing key
- src/components/tracking/SessionIndicator.tsx [78:34] (JSXText) `emotions` — Looks like an identifier or existing key
- src/components/tracking/SessionIndicator.tsx [81:34] (JSXText) `sensory` — Looks like an identifier or existing key
- src/components/tracking/SessionIndicator.tsx [139:60] (JSXText) `Emotions` — Looks like an identifier or existing key
- src/components/tracking/SessionIndicator.tsx [143:60] (JSXText) `Sensory` — Looks like an identifier or existing key
- src/components/tracking/SessionIndicator.tsx [149:60] (JSXText) `Environment` — Looks like an identifier or existing key
- src/components/tracking/SessionIndicator.tsx [175:17] (JSXText) `Resume` — Looks like an identifier or existing key
- src/components/tracking/SessionIndicator.tsx [185:17] (JSXText) `Pause` — Looks like an identifier or existing key
- src/components/tracking/SessionIndicator.tsx [197:15] (JSXText) `Save` — Looks like an identifier or existing key
- src/components/tracking/SessionRecovery.tsx [106:55] (JSXText) `with` — Looks like an identifier or existing key
- src/components/tracking/SessionRecovery.tsx [118:19] (JSXText) `Recovering...` — Looks like an identifier or existing key
- src/components/tracking/SessionRecovery.tsx [133:15] (JSXText) `Discard` — Looks like an identifier or existing key
- src/components/tracking/SessionRecovery.tsx [155:11] (JSXText) `Found` — Looks like an identifier or existing key
- src/components/tracking/SessionRecovery.tsx [176:59] (JSXText) `Started` — Looks like an identifier or existing key
- src/components/tracking/SessionRecovery.tsx [193:74] (JSXText) `m` — Looks like an identifier or existing key
- src/components/tracking/SessionRecovery.tsx [196:61] (JSXText) `Quality:` — Looks like an identifier or existing key
- src/components/tracking/SessionRecovery.tsx [205:54] (JSXText) `emotions` — Looks like an identifier or existing key
- src/components/tracking/SessionRecovery.tsx [210:59] (JSXText) `sensory` — Looks like an identifier or existing key
- src/components/tracking/SessionRecovery.tsx [215:23] (JSXText) `Environmental` — Looks like an identifier or existing key
- src/components/tracking/SessionRecovery.tsx [231:25] (JSXText) `Recovering...` — Looks like an identifier or existing key
- src/components/tracking/SessionRecovery.tsx [236:25] (JSXText) `Resume` — Looks like an identifier or existing key
- src/components/ui/Breadcrumbs.tsx [19:21] (JSXAttribute) `Breadcrumb` — Looks like an identifier or existing key
- src/components/ui/dialog.tsx [47:35] (JSXText) `Close` — Looks like an identifier or existing key
- src/components/ui/PremiumStudentCard.tsx [169:63] (JSXText) `Datainnsamling` — Looks like an identifier or existing key
- src/components/ui/PremiumStudentCard.tsx [237:38] (JSXText) `Cancel` — Looks like an identifier or existing key
- src/components/ui/sheet.tsx [68:35] (JSXText) `Close` — Looks like an identifier or existing key
- src/components/ui/StudentCard.tsx [31:17] (JSXText) `Grade` — Looks like an identifier or existing key
- src/components/ui/StudentCard.tsx [41:17] (JSXText) `Added` — Looks like an identifier or existing key
- src/components/UniversalAnalyticsStatus.tsx [162:21] (JSXText) `Health:` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [62:14] (JSXText) `X:` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [63:14] (JSXText) `Y:` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [64:14] (JSXText) `Z:` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [65:34] (JSXText) `Intensity:` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [410:48] (JSXText) `Category` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [411:49] (JSXText) `Intensity` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [423:43] (JSXText) `All` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [424:47] (JSXText) `Emotions` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [425:47] (JSXText) `Sensory` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [426:53] (JSXText) `Environmental` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [532:54] (JSXText) `Legend` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [538:47] (JSXText) `Emotions` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [542:47] (JSXText) `Sensory` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [546:47] (JSXText) `Environmental` — Looks like an identifier or existing key
- src/components/Visualization3D.tsx [561:18] (JSXText) `Points:` — Looks like an identifier or existing key
- src/components/VisualizationControls.tsx [106:15] (JSXText) `Live` — Looks like an identifier or existing key
- src/components/VisualizationControls.tsx [149:17] (JSXText) `Filters` — Looks like an identifier or existing key
- src/components/VisualizationControls.tsx [168:21] (JSXText) `Active` — Looks like an identifier or existing key
- src/components/VisualizationControls.tsx [204:17] (JSXText) `Layout` — Looks like an identifier or existing key
- src/components/VisualizationControls.tsx [210:17] (JSXText) `Dashboard` — Looks like an identifier or existing key
- src/components/VisualizationControls.tsx [222:17] (JSXText) `Comparison` — Looks like an identifier or existing key
- src/components/VisualizationControls.tsx [231:17] (JSXText) `View` — Looks like an identifier or existing key
- src/components/VisualizationControls.tsx [256:17] (JSXText) `Picture-in-Picture` — Looks like an identifier or existing key
- src/components/VisualizationControls.tsx [313:46] (JSXText) `Combined` — Looks like an identifier or existing key
- src/components/VisualizationControls.tsx [359:46] (JSXText) `emotions` — Looks like an identifier or existing key
- src/components/VisualizationControls.tsx [365:53] (JSXText) `sessions` — Looks like an identifier or existing key
- src/components/VisualizationControls.tsx [369:45] (JSXText) `new` — Looks like an identifier or existing key
- src/pages/Dashboard.tsx [168:116] (JSXText) `K` — Looks like an identifier or existing key
- src/pages/EnhancedTrackStudent.tsx [196:53] (JSXText) `minutes` — Looks like an identifier or existing key
- src/pages/EnhancedTrackStudent.tsx [203:15] (JSXText) `Cancel` — Looks like an identifier or existing key
- src/pages/EnhancedTrackStudent.tsx [236:83] (JSXText) `m` — Looks like an identifier or existing key
- src/pages/EnhancedTrackStudent.tsx [274:29] (JSXText) `Intensity:` — Looks like an identifier or existing key
- src/pages/EnhancedTrackStudent.tsx [278:31] (JSXText) `Context:` — Looks like an identifier or existing key
- src/pages/EnhancedTrackStudent.tsx [312:31] (JSXText) `Context:` — Looks like an identifier or existing key

## Out of scope (non-UI / developer-only)

- src/contexts/TrackingContext.tsx [190:23] (MessageAPI) `Session timed out due to inactivity` — Non-UI layer
- src/contexts/TrackingContext.tsx [190:23] (MessageAPI) `Session timed out due to inactivity` — Non-UI layer
- src/contexts/TrackingContext.tsx [195:17] (MessageAPI) `[TrackingContext] Started new session` — Non-UI layer
- src/contexts/TrackingContext.tsx [222:17] (MessageAPI) `[TrackingContext] Ended session` — Non-UI layer
- src/contexts/TrackingContext.tsx [243:17] (MessageAPI) `[TrackingContext] Paused session` — Non-UI layer
- src/contexts/TrackingContext.tsx [268:17] (MessageAPI) `[TrackingContext] Resumed session` — Non-UI layer
- src/contexts/TrackingContext.tsx [299:23] (MessageAPI) `Session timed out due to inactivity` — Non-UI layer
- src/contexts/TrackingContext.tsx [299:23] (MessageAPI) `Session timed out due to inactivity` — Non-UI layer
- src/contexts/TrackingContext.tsx [351:23] (MessageAPI) `Session timed out due to inactivity` — Non-UI layer
- src/contexts/TrackingContext.tsx [351:23] (MessageAPI) `Session timed out due to inactivity` — Non-UI layer
- src/contexts/TrackingContext.tsx [478:21] (MessageAPI) `Session saved successfully` — Non-UI layer
- src/contexts/TrackingContext.tsx [478:21] (MessageAPI) `Session saved successfully` — Non-UI layer
- src/contexts/TrackingContext.tsx [479:19] (MessageAPI) `[TrackingContext] Session saved` — Non-UI layer
- src/contexts/TrackingContext.tsx [486:20] (MessageAPI) `[TrackingContext] Failed to save session` — Non-UI layer
- src/contexts/TrackingContext.tsx [487:19] (MessageAPI) `Failed to save session` — Non-UI layer
- src/contexts/TrackingContext.tsx [487:19] (MessageAPI) `Failed to save session` — Non-UI layer
- src/contexts/TrackingContext.tsx [530:16] (MessageAPI) `Session discarded` — Non-UI layer
- src/contexts/TrackingContext.tsx [530:16] (MessageAPI) `Session discarded` — Non-UI layer
- src/contexts/TrackingContext.tsx [531:17] (MessageAPI) `[TrackingContext] Session discarded` — Non-UI layer
- src/contexts/TrackingContext.tsx [540:19] (MessageAPI) `Session not found` — Non-UI layer
- src/contexts/TrackingContext.tsx [540:19] (MessageAPI) `Session not found` — Non-UI layer
- src/contexts/TrackingContext.tsx [545:19] (MessageAPI) `Session recovered` — Non-UI layer
- src/contexts/TrackingContext.tsx [545:19] (MessageAPI) `Session recovered` — Non-UI layer
- src/contexts/TrackingContext.tsx [546:17] (MessageAPI) `[TrackingContext] Session recovered` — Non-UI layer
- src/hooks/useAnalyticsStatus.ts [63:20] (MessageAPI) `Error loading analytics status:` — Non-UI layer
- src/hooks/useAnalyticsStatus.ts [93:20] (MessageAPI) `Error triggering analytics:` — Non-UI layer
- src/hooks/useAnalyticsWorker.ts [96:20] (MessageAPI) `[useAnalyticsWorker] Worker runtime error, switching to fallback` — Non-UI layer
- src/hooks/useAnalyticsWorker.ts [133:17] (MessageAPI) `[useAnalyticsWorker] Analytics worker initialized successfully` — Non-UI layer
- src/hooks/useAnalyticsWorker.ts [136:18] (MessageAPI) `[useAnalyticsWorker] Failed to initialize worker` — Non-UI layer
- src/hooks/useAnalyticsWorker.ts [347:26] (MessageAPI) `[useAnalyticsWorker] Failed handling worker message` — Non-UI layer
- src/hooks/useAnalyticsWorker.ts [352:24] (MessageAPI) `[useAnalyticsWorker] messageerror from analytics worker` — Non-UI layer
- src/hooks/useAnalyticsWorker.ts [450:22] (MessageAPI) `[useAnalyticsWorker] Fallback failed` — Non-UI layer
- src/hooks/useAnalyticsWorker.ts [485:22] (MessageAPI) `[useAnalyticsWorker] watchdog timeout: worker did not respond, attempting fallback` — Non-UI layer
- src/hooks/useAnalyticsWorker.ts [505:22] (MessageAPI) `[useAnalyticsWorker] Fallback failed after watchdog timeout` — Non-UI layer
- src/hooks/useAnalyticsWorker.ts [580:20] (MessageAPI) `[WORKER_MESSAGE] Failed to post message to worker, falling back to sync` — Non-UI layer
- src/hooks/useAnalyticsWorker.ts [594:22] (MessageAPI) `[useAnalyticsWorker] Fallback processing failed after worker post error` — Non-UI layer
- src/hooks/useChartStore.ts [52:24] (MessageAPI) `setOption failed` — Non-UI layer
- src/hooks/useDataAnalysis.ts [57:22] (MessageAPI) `Pattern analysis failed in useDataAnalysis hook` — Non-UI layer
- src/hooks/useFilteredData.ts [124:20] (MessageAPI) `useFilteredData failed` — Non-UI layer
- src/hooks/useMLTrainingWorker.ts [74:24] (MessageAPI) `Failed to save trained model:` — Non-UI layer
- src/hooks/useMLTrainingWorker.ts [89:20] (MessageAPI) `ML training worker error:` — Non-UI layer
- src/hooks/useMockDataSeeding.ts [48:19] (MessageAPI) `Manually seeding mock data` — Non-UI layer
- src/hooks/useMockDataSeeding.ts [55:21] (MessageAPI) `Demo data created successfully` — Non-UI layer
- src/hooks/useMockDataSeeding.ts [55:21] (MessageAPI) `Demo data created successfully` — Non-UI layer
- src/hooks/useMockDataSeeding.ts [64:20] (MessageAPI) `Failed to seed mock data` — Non-UI layer
- src/hooks/useMockDataSeeding.ts [66:19] (MessageAPI) `Failed to create demo data` — Non-UI layer
- src/hooks/useMockDataSeeding.ts [66:19] (MessageAPI) `Failed to create demo data` — Non-UI layer
- src/hooks/useMockDataSeeding.ts [112:21] (MessageAPI) `Auto-seeding minimal demo data for mock route` — Non-UI layer
- src/hooks/useMockDataSeeding.ts [120:23] (MessageAPI) `Demo data created successfully` — Non-UI layer
- src/hooks/useMockDataSeeding.ts [120:23] (MessageAPI) `Demo data created successfully` — Non-UI layer
- src/hooks/useMockDataSeeding.ts [129:22] (MessageAPI) `Failed to auto-seed mock data` — Non-UI layer
- src/hooks/useMockDataSeeding.ts [131:21] (MessageAPI) `Failed to create demo data` — Non-UI layer
- src/hooks/useMockDataSeeding.ts [131:21] (MessageAPI) `Failed to create demo data` — Non-UI layer
- src/hooks/usePerformanceMonitor.ts [371:17] (MessageAPI) `[Performance Report]` — Non-UI layer
- src/hooks/useProgressiveChartData.ts [103:22] (MessageAPI) `[useProgressiveChartData] Failed computing emotion distribution` — Non-UI layer
- src/hooks/useProgressiveChartData.ts [125:24] (MessageAPI) `[useProgressiveChartData] Failed computing sensory responses` — Non-UI layer
- src/hooks/useProgressiveChartData.ts [163:24] (MessageAPI) `[useProgressiveChartData] Failed computing emotion trends` — Non-UI layer
- src/hooks/useRealtimeData.ts [255:21] (MessageAPI) `Real-time data connection would be established here` — Non-UI layer
- src/hooks/useStudentData.ts [79:20] (MessageAPI) `Failed to load student data:` — Non-UI layer
- src/hooks/useStudentExport.ts [38:19] (MessageAPI) `No student data available to export` — Non-UI layer
- src/hooks/useStudentExport.ts [38:19] (MessageAPI) `No student data available to export` — Non-UI layer
- src/hooks/useStudentExport.ts [88:19] (MessageAPI) `Data exported` — Non-UI layer
- src/hooks/useStudentExport.ts [90:20] (MessageAPI) `Export error` — Non-UI layer
- src/hooks/useStudentExport.ts [101:19] (MessageAPI) `No student data available to backup` — Non-UI layer
- src/hooks/useStudentExport.ts [101:19] (MessageAPI) `No student data available to backup` — Non-UI layer
- src/hooks/useStudentExport.ts [120:21] (MessageAPI) `Backup created successfully` — Non-UI layer
- src/hooks/useStudentExport.ts [120:21] (MessageAPI) `Backup created successfully` — Non-UI layer
- src/hooks/useStudentExport.ts [121:19] (MessageAPI) `Backup created` — Non-UI layer
- src/hooks/useStudentExport.ts [123:20] (MessageAPI) `Backup error` — Non-UI layer
- src/hooks/useStudentExport.ts [124:19] (MessageAPI) `Backup failed. Please try again.` — Non-UI layer
- src/hooks/useStudentExport.ts [124:19] (MessageAPI) `Backup failed. Please try again.` — Non-UI layer
- src/lib/alertSystem.ts [160:20] (MessageAPI) `Error saving alerts:` — Developer-only log or non-UI message in lib/
- src/lib/alertSystem.ts [177:22] (MessageAPI) `Failed to save alerts even after cleanup:` — Developer-only log or non-UI message in lib/
- src/lib/alertSystem.ts [205:20] (MessageAPI) `Error loading alerts:` — Developer-only log or non-UI message in lib/
- src/lib/alertSystem.ts [254:20] (MessageAPI) `Error marking alert as viewed:` — Developer-only log or non-UI message in lib/
- src/lib/alertSystem.ts [282:20] (MessageAPI) `Error resolving alert:` — Developer-only log or non-UI message in lib/
- src/lib/alertSystem.ts [298:20] (MessageAPI) `Error deleting alert:` — Developer-only log or non-UI message in lib/
- src/lib/alertSystem.ts [315:20] (MessageAPI) `Error loading alert settings:` — Developer-only log or non-UI message in lib/
- src/lib/alertSystem.ts [332:20] (MessageAPI) `Error updating alert settings:` — Developer-only log or non-UI message in lib/
- src/lib/alertSystem.ts [393:20] (MessageAPI) `Error cleaning up old alerts:` — Developer-only log or non-UI message in lib/
- src/lib/analyticsConfig.ts [386:20] (MessageAPI) `Failed to import configuration:` — Developer-only log or non-UI message in lib/
- src/lib/analyticsConfig.ts [405:20] (MessageAPI) `Failed to load analytics configuration:` — Developer-only log or non-UI message in lib/
- src/lib/analyticsConfig.ts [422:24] (MessageAPI) `Failed to save analytics configuration:` — Developer-only log or non-UI message in lib/
- src/lib/analyticsConfig.ts [426:20] (MessageAPI) `Failed to save analytics configuration:` — Developer-only log or non-UI message in lib/
- src/lib/analyticsConfigOverride.ts [9:15] (MessageAPI) `Applying development analytics configuration for better pattern detection` — Developer-only log or non-UI message in lib/
- src/lib/analyticsConfigOverride.ts [70:18] (MessageAPI) `Failed to apply development analytics config (non-fatal):` — Developer-only log or non-UI message in lib/
- src/lib/analyticsConfigValidation.ts [51:18] (MessageAPI) `[analyticsConfigValidation] Invalid analytics configuration detected. Falling back to defaults.` — Developer-only log or non-UI message in lib/
- src/lib/analyticsExport.ts [284:24] (MessageAPI) `Error adding chart export to PDF:` — Developer-only log or non-UI message in lib/
- src/lib/analyticsExport.ts [312:24] (MessageAPI) `Error adding chart to PDF:` — Developer-only log or non-UI message in lib/
- src/lib/analyticsManager.ts [77:18] (MessageAPI) `[analyticsManager] ensureUniversalAnalyticsInitialization failed` — Developer-only log or non-UI message in lib/
- src/lib/analyticsManager.ts [256:20] (MessageAPI) `[analyticsManager] initializeStudentAnalytics failed` — Developer-only log or non-UI message in lib/
- src/lib/analyticsManager.ts [333:20] (MessageAPI) `[analyticsManager] generateAnalytics: invalid student` — Developer-only log or non-UI message in lib/
- src/lib/analyticsManager.ts [466:20] (MessageAPI) `[analyticsManager] triggerAnalyticsForStudent failed` — Developer-only log or non-UI message in lib/
- src/lib/analyticsManager.ts [533:58] (MessageAPI) `Error saving analytics profiles:` — Developer-only log or non-UI message in lib/
- src/lib/analyticsManager.ts [613:18] (MessageAPI) `[analyticsManager.orchestrator] getInsights failed` — Developer-only log or non-UI message in lib/
- src/lib/analyticsManagerLite.ts [26:20] (MessageAPI) `[analyticsManagerLite] Failed to initialize student` — Developer-only log or non-UI message in lib/
- src/lib/analyticsProfiles.ts [40:18] (MessageAPI) `[analyticsProfiles] Failed to load profiles` — Developer-only log or non-UI message in lib/
- src/lib/analyticsProfiles.ts [62:18] (MessageAPI) `[analyticsProfiles] Failed to save profiles` — Developer-only log or non-UI message in lib/
- src/lib/analyticsWorkerFallback.ts [51:24] (MessageAPI) `Fallback: Error analyzing emotion patterns` — Developer-only log or non-UI message in lib/
- src/lib/analyticsWorkerFallback.ts [62:24] (MessageAPI) `Fallback: Error analyzing sensory patterns` — Developer-only log or non-UI message in lib/
- src/lib/analyticsWorkerFallback.ts [74:24] (MessageAPI) `Fallback: Error analyzing correlations` — Developer-only log or non-UI message in lib/
- src/lib/analyticsWorkerFallback.ts [91:24] (MessageAPI) `Fallback: Error generating predictive insights` — Developer-only log or non-UI message in lib/
- src/lib/analyticsWorkerFallback.ts [104:24] (MessageAPI) `Fallback: Error detecting anomalies` — Developer-only log or non-UI message in lib/
- src/lib/analyticsWorkerFallback.ts [121:20] (MessageAPI) `Fallback analytics failed` — Developer-only log or non-UI message in lib/
- src/lib/chartUtils.ts [125:20] (MessageAPI) `Invalid chart data row:` — Developer-only log or non-UI message in lib/
- src/lib/dataStorage.ts [362:20] (MessageAPI) `Failed to parse student data from localStorage` — Developer-only log or non-UI message in lib/
- src/lib/dataStorage.ts [431:9] (MessageAPI) `Failed to parse tracking entries from localStorage` — Developer-only log or non-UI message in lib/
- src/lib/dataStorage.ts [749:20] (MessageAPI) `Error deleting student:` — Developer-only log or non-UI message in lib/
- src/lib/diagnostics.ts [160:18] (MessageAPI) `[DIAGNOSTIC] Worker Timeout!` — Developer-only log or non-UI message in lib/
- src/lib/enhancedPatternAnalysis.ts [93:20] (MessageAPI) `Failed to initialize ML models:` — Developer-only log or non-UI message in lib/
- src/lib/enhancedPatternAnalysis.ts [183:22] (MessageAPI) `ML emotion prediction failed:` — Developer-only log or non-UI message in lib/
- src/lib/enhancedPatternAnalysis.ts [248:22] (MessageAPI) `ML sensory prediction failed:` — Developer-only log or non-UI message in lib/
- src/lib/enhancedPatternAnalysis.ts [927:20] (MessageAPI) `Baseline clustering failed:` — Developer-only log or non-UI message in lib/
- src/lib/errorHandler.ts [93:22] (MessageAPI) `Error in custom error handler` — Developer-only log or non-UI message in lib/
- src/lib/errorHandler.ts [165:22] (MessageAPI) `Critical error occurred` — Developer-only log or non-UI message in lib/
- src/lib/errorHandler.ts [172:22] (MessageAPI) `Application error` — Developer-only log or non-UI message in lib/
- src/lib/errorHandler.ts [234:23] (MessageAPI) `Issue resolved` — Developer-only log or non-UI message in lib/
- src/lib/errorHandler.ts [234:23] (MessageAPI) `Issue resolved` — Developer-only log or non-UI message in lib/
- src/lib/errorHandler.ts [239:22] (MessageAPI) `Recovery strategy failed` — Developer-only log or non-UI message in lib/
- src/lib/inlineWorker.ts [46:18] (MessageAPI) `Failed to create inline worker:` — Developer-only log or non-UI message in lib/
- src/lib/insights/unified.ts [45:18] (MessageAPI) `[insights/unified] computeInsights: invalid inputs` — Developer-only log or non-UI message in lib/
- src/lib/insights/unified.ts [99:18] (MessageAPI) `[insights/unified] computeInsights failed` — Developer-only log or non-UI message in lib/
- src/lib/mockData.ts [268:17] (MessageAPI) `seedMinimalDemoData: seeded enhanced demo data` — Developer-only log or non-UI message in lib/
- src/lib/mockData.ts [270:18] (MessageAPI) `seedMinimalDemoData: failed to seed demo data` — Developer-only log or non-UI message in lib/
- src/lib/mockDataGenerator.ts [55:18] (MessageAPI) `Generated invalid emotion entry:` — Developer-only log or non-UI message in lib/
- src/lib/mockDataGenerator.ts [87:18] (MessageAPI) `Generated invalid sensory entry:` — Developer-only log or non-UI message in lib/
- src/lib/mockDataGenerator.ts [348:22] (MessageAPI) `Generated invalid tracking entry for scenario` — Developer-only log or non-UI message in lib/
- src/lib/mockDataGenerator.ts [354:18] (MessageAPI) `Failed to load scenario data` — Developer-only log or non-UI message in lib/
- src/lib/mockDataGenerator.ts [376:18] (MessageAPI) `Failed to load mock data:` — Developer-only log or non-UI message in lib/
- src/lib/mockDataGenerator.ts [397:18] (MessageAPI) `Failed to clear mock data:` — Developer-only log or non-UI message in lib/
- src/lib/modelEvaluation.ts [164:24] (MessageAPI) `[modelEvaluation] onupgradeneeded failed` — Developer-only log or non-UI message in lib/
- src/lib/sessionManager.ts [146:17] (MessageAPI) `[SessionManager] Created new session` — Developer-only log or non-UI message in lib/
- src/lib/sessionManager.ts [256:17] (MessageAPI) `[SessionManager] Completed session` — Developer-only log or non-UI message in lib/
- src/lib/sessionManager.ts [279:17] (MessageAPI) `[SessionManager] Abandoned session` — Developer-only log or non-UI message in lib/
- src/lib/sessionManager.ts [292:17] (MessageAPI) `[SessionManager] Paused session` — Developer-only log or non-UI message in lib/
- src/lib/sessionManager.ts [306:17] (MessageAPI) `[SessionManager] Resumed session` — Developer-only log or non-UI message in lib/
- src/lib/sessionManager.ts [344:22] (MessageAPI) `[SessionManager] Failed to recover session` — Developer-only log or non-UI message in lib/
- src/lib/sessionManager.ts [351:19] (MessageAPI) `[SessionManager] Recovered sessions` — Developer-only log or non-UI message in lib/
- src/lib/sessionManager.ts [574:20] (MessageAPI) `[SessionManager] Failed to persist session` — Developer-only log or non-UI message in lib/
- src/lib/sessionManager.ts [603:20] (MessageAPI) `[SessionManager] Failed to load session history` — Developer-only log or non-UI message in lib/
- src/lib/sessionManager.ts [615:20] (MessageAPI) `[SessionManager] Failed to save session history` — Developer-only log or non-UI message in lib/
- src/lib/sessionManager.ts [640:17] (MessageAPI) `[SessionManager] Updated validation rules` — Developer-only log or non-UI message in lib/
- src/lib/sessionManager.ts [664:17] (MessageAPI) `[SessionManager] Cleared all sessions` — Developer-only log or non-UI message in lib/
- src/lib/storageUtils.ts [55:20] (MessageAPI) `Error clearing old data:` — Developer-only log or non-UI message in lib/
- src/lib/universalAnalyticsInitializer.ts [45:20] (MessageAPI) `Error initializing universal analytics:` — Developer-only log or non-UI message in lib/
- src/lib/universalAnalyticsInitializer.ts [101:92] (MessageAPI) `Auto-initialization failed:` — Developer-only log or non-UI message in lib/
- src/lib/utils.ts [29:18] (MessageAPI) `downloadBlob called in a non-browser environment` — Developer-only log or non-UI message in lib/
- src/lib/utils.ts [47:18] (MessageAPI) `downloadBlob failed` — Developer-only log or non-UI message in lib/
- src/lib/validation/dataLeakage.ts [166:21] (MessageAPI) `[DataLeakageDetector] Potential leakage risk` — Developer-only log or non-UI message in lib/
- src/lib/validation/dataLeakage.ts [176:20] (MessageAPI) `[DataLeakageDetector] Strict mode abort due to leakage` — Developer-only log or non-UI message in lib/

## Appendix: Offenders by file

### src/App.tsx

- [51:19] (JSXText) Static JSX text node: `Loading...`
  - context: `<div role="status" aria-live="polite" className="p-4"> Loading... </div> }> <Routes>`

### src/components/AdvancedFilterPanel.tsx

- [395:47] (JSXAttribute) Static aria-label attribute: `Select triggers to include`
  - context: `}} > <SelectTrigger aria-label="Select triggers to include"> <SelectValue placeholder="Se`
- [396:48] (JSXAttribute) Static placeholder attribute: `Select triggers to include`
  - context: `el="Select triggers to include"> <SelectValue placeholder="Select triggers to include" /> </SelectTrigger>`
- [697:30] (JSXAttribute) Static aria-label attribute: `Filter name`
  - context: `eholder={String(tCommon('filterNamePlaceholder'))} aria-label="Filter name" value={filterName} onChange={(`
- [745:42] (JSXAttribute) Static aria-label attribute: `Delete saved filter`
  - context: `variant="ghost" aria-label="Delete saved filter" title="Delete saved filter"`
- [746:37] (JSXAttribute) Static title attribute: `Delete saved filter`
  - context: `aria-label="Delete saved filter" title="Delete saved filter" onClick={() => onDeleteFilte`

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

- [56:19] (MessageAPI) Message API call: success(): `Alert marked as viewed`
  - context: `alertSystem.markAlertAsViewed(alertId); loadAlerts(); toast.success('Alert marked as viewed'); }; /** * Handle alert resolution with proper`
- [56:19] (MessageAPI) sonner toast.success(): `Alert marked as viewed`
  - context: `alertSystem.markAlertAsViewed(alertId); loadAlerts(); toast.success('Alert marked as viewed'); }; /** * Handle alert resolution with proper`
- [79:21] (MessageAPI) Message API call: success(): `Alert resolved successfully`
  - context: `Alert(null); setResolveNotes(''); loadAlerts(); toast.success('Alert resolved successfully'); } catch (error) { logger.error('Failed`
- [79:21] (MessageAPI) sonner toast.success(): `Alert resolved successfully`
  - context: `Alert(null); setResolveNotes(''); loadAlerts(); toast.success('Alert resolved successfully'); } catch (error) { logger.error('Failed`
- [81:20] (MessageAPI) Message API call: error(): `Failed to resolve alert`
  - context: `uccess('Alert resolved successfully'); } catch (error) { logger.error('Failed to resolve alert', error); toast.error('Failed to resolve alert. P`
- [82:19] (MessageAPI) Message API call: error(): `Failed to resolve alert. Please try again.`
  - context: `rror) { logger.error('Failed to resolve alert', error); toast.error('Failed to resolve alert. Please try again.'); } finally { setIsResolv`
- [82:19] (MessageAPI) sonner toast.error(): `Failed to resolve alert. Please try again.`
  - context: `rror) { logger.error('Failed to resolve alert', error); toast.error('Failed to resolve alert. Please try again.'); } finally { setIsResolv`
- [156:57] (JSXText) Static JSX text node: `data points`
  - context: `aleDateString()}</span> <span>{alertEntry.alert.dataPoints} data points</span> {alertEntry.resolved && (`
- [159:25] (JSXText) Static JSX text node: `Resolved`
  - context: `utline" className="text-success-foreground bg-success"> Resolved </Badge> )}`
- [199:27] (JSXText) Static JSX text node: `Review details and add resolution notes before confirming.`
  - context: `logTitle> <DialogDescription> Review details and add resolution notes before confirming.`
- [215:68] (JSXText) Static JSX text node: `•`
  - context: `tart gap-2"> <span className="text-primary">•</span> <span>{rec}</span>`
- [232:41] (JSXAttribute) Static placeholder attribute: `Describe actions taken or observations...`
  - context: `(e) => setResolveNotes(e.target.value)} placeholder="Describe actions taken or observations..." rows={3}`
- [265:54] (JSXText) Static JSX text node: `•`
  - context: `="flex items-start gap-2"> <span className="text-primary">•</span> <span>{recommendation}</span>`

### src/components/AnalyticsConfigBoundary.tsx

- [19:21] (MessageAPI) Message API call: error(): `Analytics configuration issue`
  - context: `ef.current) { notifiedRef.current = true; try { toast.error('Analytics configuration issue', { description: 'Using safe defaults f`
- [19:21] (MessageAPI) sonner toast.error(): `Analytics configuration issue`
  - context: `ef.current) { notifiedRef.current = true; try { toast.error('Analytics configuration issue', { description: 'Using safe defaults f`

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
  - context: `<div className="space-y-2"> <h4 className="text-sm font-medium">Test Results</h4> {testResults.map((result) => ( <div`
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

- [109:20] (MessageAPI) Message API call: error(): `[AnalyticsDashboard] Demo seed failed`
  - context: `dent.id); runAnalysis(filteredData); } catch (e) { logger.error('[AnalyticsDashboard] Demo seed failed', { error: e }); toast.error(String`
- [129:24] (MessageAPI) Message API call: error(): `Error coercing timestamp:`
  - context: `} return new Date(); } catch (error) { logger.error('Error coercing timestamp:', v, error); return new Date(); }`
- [141:22] (MessageAPI) Message API call: error(): `Error normalizing filteredData:`
  - context: `oerce(s.timestamp) })), }; } catch (error) { logger.error('Error normalizing filteredData:', error); return { entries: [`
- [239:30] (MessageAPI) Message API call: error(): `Failed to collect chart exports`
  - context: `return filtered; } catch (e) { logger.error('Failed to collect chart exports', e); toast.error(String(tAnaly`
- [262:24] (MessageAPI) Message API call: error(): `Export failed:`
  - context: `break; } } catch (error) { logger.error('Export failed:', error); toast.error(String(tAnalytics('export.failur`
- [316:46] (JSXAttribute) Static aria-labelledby attribute: `analytics-dashboard-title`
  - context: `tics('skipToContent'))} </a> <section role="region" aria-labelledby="analytics-dashboard-title" className="space-y-6"> {/* Hidden live region`
- [525:23] (MessageAPI) Message API call: error(): `Error comparing timestamps in AnalyticsDashboard memo:`
  - context: `return prevTime === nextTime; } catch (error) { logger.error('Error comparing timestamps in AnalyticsDashboard memo:', error); retur`

### src/components/AnalyticsSettings.tsx

- [75:20] (MessageAPI) Message API call: error(): `Failed to load ML model status`
  - context: `tatus(); setModelStatus(status); } catch (error) { logger.error('Failed to load ML model status', { error }); toast.error("Failed to load`
- [76:19] (MessageAPI) Message API call: error(): `Failed to load ML models: Could not retrieve model status. Some features may be unavailable.`
  - context: `logger.error('Failed to load ML model status', { error }); toast.error("Failed to load ML models: Could not retrieve model status. Some features may be`
- [76:19] (MessageAPI) sonner toast.error(): `Failed to load ML models: Could not retrieve model status. Some features may be unavailable.`
  - context: `logger.error('Failed to load ML model status', { error }); toast.error("Failed to load ML models: Could not retrieve model status. Some features may be`
- [113:19] (MessageAPI) Message API call: success(): `Analytics configuration has been updated`
  - context: `Config.updateConfig(config); setHasUnsavedChanges(false); toast.success("Analytics configuration has been updated"); }; const handleReset = () => {`
- [113:19] (MessageAPI) sonner toast.success(): `Analytics configuration has been updated`
  - context: `Config.updateConfig(config); setHasUnsavedChanges(false); toast.success("Analytics configuration has been updated"); }; const handleReset = () => {`
- [120:19] (MessageAPI) Message API call: success(): `Settings have been reset to defaults`
  - context: `tSelectedPreset('balanced'); setHasUnsavedChanges(false); toast.success("Settings have been reset to defaults"); }; const handleExport = () => {`
- [120:19] (MessageAPI) sonner toast.success(): `Settings have been reset to defaults`
  - context: `tSelectedPreset('balanced'); setHasUnsavedChanges(false); toast.success("Settings have been reset to defaults"); }; const handleExport = () => {`
- [135:19] (MessageAPI) Message API call: success(): `Configuration saved to analytics-config.json`
  - context: `ument.body.removeChild(a); URL.revokeObjectURL(url); toast.success("Configuration saved to analytics-config.json"); }; const handleImport = (e`
- [135:19] (MessageAPI) sonner toast.success(): `Configuration saved to analytics-config.json`
  - context: `ument.body.removeChild(a); URL.revokeObjectURL(url); toast.success("Configuration saved to analytics-config.json"); }; const handleImport = (e`
- [148:25] (MessageAPI) Message API call: success(): `Successfully imported configuration`
  - context: `nfig(content)) { setHasUnsavedChanges(false); toast.success("Successfully imported configuration"); } else { toast.error("`
- [148:25] (MessageAPI) sonner toast.success(): `Successfully imported configuration`
  - context: `nfig(content)) { setHasUnsavedChanges(false); toast.success("Successfully imported configuration"); } else { toast.error("`
- [150:23] (MessageAPI) Message API call: error(): `Invalid configuration file`
  - context: `("Successfully imported configuration"); } else { toast.error("Invalid configuration file"); } } catch (_error) { toast.`
- [150:23] (MessageAPI) sonner toast.error(): `Invalid configuration file`
  - context: `("Successfully imported configuration"); } else { toast.error("Invalid configuration file"); } } catch (_error) { toast.`
- [153:21] (MessageAPI) Message API call: error(): `Failed to read configuration file`
  - context: `id configuration file"); } } catch (_error) { toast.error("Failed to read configuration file"); } }; reader.readAsText(file)`
- [153:21] (MessageAPI) sonner toast.error(): `Failed to read configuration file`
  - context: `id configuration file"); } } catch (_error) { toast.error("Failed to read configuration file"); } }; reader.readAsText(file)`
- [193:19] (MessageAPI) Message API call: error(): `Failed to delete model`
  - context: `${modelType} model has been removed\`); } catch (_error) { toast.error("Failed to delete model"); } finally { setIsDeletingModel(null); }`
- [193:19] (MessageAPI) sonner toast.error(): `Failed to delete model`
  - context: `${modelType} model has been removed\`); } catch (_error) { toast.error("Failed to delete model"); } finally { setIsDeletingModel(null); }`
- [315:52] (JSXText) Static JSX text node: `Pattern Analysis Thresholds`
  - context: `<CardHeader> <CardTitle className="text-base">Pattern Analysis Thresholds</CardTitle> <CardDescription>`
- [317:21] (JSXText) Static JSX text node: `Adjust minimum requirements and thresholds for pattern detection`
  - context: `Thresholds</CardTitle> <CardDescription> Adjust minimum requirements and thresholds for pattern detection`
- [323:54] (JSXText) Static JSX text node: `Minimum Data Points`
  - context: `sName="flex items-center"> <Label htmlFor="minDataPoints">Minimum Data Points</Label> {renderTooltip("Minimum number`
- [342:61] (JSXText) Static JSX text node: `Correlation Threshold`
  - context: `flex items-center"> <Label htmlFor="correlationThreshold">Correlation Threshold</Label> {renderTooltip("Minimum corr`
- [361:57] (JSXText) Static JSX text node: `Concern Frequency Threshold`
  - context: `me="flex items-center"> <Label htmlFor="concernFrequency">Concern Frequency Threshold</Label> {renderTooltip("Percen`
- [382:52] (JSXText) Static JSX text node: `Enhanced Analysis Thresholds`
  - context: `<CardHeader> <CardTitle className="text-base">Enhanced Analysis Thresholds</CardTitle> <CardDescription>`
- [384:21] (JSXText) Static JSX text node: `Configure advanced pattern detection and anomaly thresholds`
  - context: `Thresholds</CardTitle> <CardDescription> Configure advanced pattern detection and anomaly thresholds </`
- [390:57] (JSXText) Static JSX text node: `Anomaly Detection Sensitivity`
  - context: `me="flex items-center"> <Label htmlFor="anomalyThreshold">Anomaly Detection Sensitivity</Label> {renderTooltip("Numb`
- [403:110] (JSXText) Static JSX text node: `σ`
  - context: `lassName="w-12 text-right">{config.enhancedAnalysis.anomalyThreshold.toFixed(2)}σ</span> </div> </div>`
- [409:54] (JSXText) Static JSX text node: `Minimum Sample Size`
  - context: `sName="flex items-center"> <Label htmlFor="minSampleSize">Minimum Sample Size</Label> {renderTooltip("Minimum data p`
- [432:52] (JSXText) Static JSX text node: `Alert Sensitivity`
  - context: `<CardHeader> <CardTitle className="text-base">Alert Sensitivity</CardTitle> <CardDescription>`
- [434:21] (JSXText) Static JSX text node: `Control how sensitive the system is to potential issues`
  - context: `Sensitivity</CardTitle> <CardDescription> Control how sensitive the system is to potential issues </Card`
- [446:54] (JSXText) Static JSX text node: `Low Sensitivity`
  - context: `<div> <p className="font-medium">Low Sensitivity</p> <p className="text-sm text-muted-f`
- [448:29] (JSXText) Static JSX text node: `Only alert for significant patterns with high confidence`
  - context: `<p className="text-sm text-muted-foreground"> Only alert for significant patterns with high confidence`
- [456:54] (JSXText) Static JSX text node: `Medium Sensitivity`
  - context: `<div> <p className="font-medium">Medium Sensitivity</p> <p className="text-sm text-mute`
- [458:29] (JSXText) Static JSX text node: `Balanced approach to pattern detection and alerts`
  - context: `<p className="text-sm text-muted-foreground"> Balanced approach to pattern detection and alerts </p>`
- [466:54] (JSXText) Static JSX text node: `High Sensitivity`
  - context: `<div> <p className="font-medium">High Sensitivity</p> <p className="text-sm text-muted-`
- [468:29] (JSXText) Static JSX text node: `Alert for subtle patterns and potential concerns early`
  - context: `<p className="text-sm text-muted-foreground"> Alert for subtle patterns and potential concerns early`
- [476:78] (JSXText) Static JSX text node: `Current Multipliers:`
  - context: `"> <p className="text-sm font-medium text-muted-foreground">Current Multipliers:</p> <div className="grid grid-cols-3 ga`
- [478:28] (JSXText) Static JSX text node: `Emotion:`
  - context: `<div className="grid grid-cols-3 gap-2 text-sm"> <div>Emotion: {config.alertSensitivity.emotionIntensityMultiplier}x</div>`
- [478:89] (JSXText) Static JSX text node: `x`
  - context: `<div>Emotion: {config.alertSensitivity.emotionIntensityMultiplier}x</div> <div>Frequency: {config.alertSensitivity.frequency`
- [479:28] (JSXText) Static JSX text node: `Frequency:`
  - context: `.alertSensitivity.emotionIntensityMultiplier}x</div> <div>Frequency: {config.alertSensitivity.frequencyMultiplier}x</div>`
- [479:84] (JSXText) Static JSX text node: `x`
  - context: `<div>Frequency: {config.alertSensitivity.frequencyMultiplier}x</div> <div>Anomaly: {config.alertSensitivity.anomalyMult`
- [480:28] (JSXText) Static JSX text node: `Anomaly:`
  - context: `{config.alertSensitivity.frequencyMultiplier}x</div> <div>Anomaly: {config.alertSensitivity.anomalyMultiplier}x</div>`
- [480:80] (JSXText) Static JSX text node: `x`
  - context: `<div>Anomaly: {config.alertSensitivity.anomalyMultiplier}x</div> </div> </div> </Ca`
- [490:52] (JSXText) Static JSX text node: `Analysis Time Windows`
  - context: `<CardHeader> <CardTitle className="text-base">Analysis Time Windows</CardTitle> <CardDescription>`
- [492:21] (JSXText) Static JSX text node: `Configure the time periods used for different analyses`
  - context: `ime Windows</CardTitle> <CardDescription> Configure the time periods used for different analyses </CardD`
- [498:56] (JSXText) Static JSX text node: `Default Analysis Period`
  - context: `ame="flex items-center"> <Label htmlFor="defaultAnalysis">Default Analysis Period</Label> {renderTooltip("Standard t`
- [511:98] (JSXText) Static JSX text node: `days`
  - context: `<span className="w-16 text-right">{config.timeWindows.defaultAnalysisDays} days</span> </div> </div>`
- [517:51] (JSXText) Static JSX text node: `Recent Data Window`
  - context: `lassName="flex items-center"> <Label htmlFor="recentData">Recent Data Window</Label> {renderTooltip("Time window for`
- [530:93] (JSXText) Static JSX text node: `days`
  - context: `<span className="w-16 text-right">{config.timeWindows.recentDataDays} days</span> </div> </div>`
- [536:49] (JSXText) Static JSX text node: `Long-term Analysis Window`
  - context: `className="flex items-center"> <Label htmlFor="longTerm">Long-term Analysis Window</Label> {renderTooltip("Extended`
- [549:91] (JSXText) Static JSX text node: `days`
  - context: `<span className="w-16 text-right">{config.timeWindows.longTermDays} days</span> </div> </div>`
- [562:23] (JSXText) Static JSX text node: `Machine Learning Models`
  - context: `p-2"> <Brain className="h-4 w-4" /> Machine Learning Models </span> <div cla`
- [565:83] (JSXText) Static JSX text node: `Enable ML`
  - context: `<Label htmlFor="ml-enabled" className="text-sm font-normal">Enable ML</Label> <Switch id="ml-e`
- [574:21] (JSXText) Static JSX text node: `Manage AI-powered prediction models for enhanced analytics`
  - context: `</CardTitle> <CardDescription> Manage AI-powered prediction models for enhanced analytics </C`
- [582:68] (JSXText) Static JSX text node: `Loading ML models...`
  - context: `reground" /> <span className="ml-2 text-muted-foreground">Loading ML models...</span> </div> ) : (`
- [607:70] (JSXText) Static JSX text node: `Version`
  - context: `<div> <p className="text-muted-foreground">Version</p> <p className="font-medium">{model.ve`
- [611:70] (JSXText) Static JSX text node: `Last Trained`
  - context: `<div> <p className="text-muted-foreground">Last Trained</p> <p className="font-medium">`
- [618:72] (JSXText) Static JSX text node: `Accuracy`
  - context: `<div> <p className="text-muted-foreground">Accuracy</p> <p className="font-medium">{(mode`
- [623:70] (JSXText) Static JSX text node: `Data Points`
  - context: `<div> <p className="text-muted-foreground">Data Points</p> <p className="font-medium">{mode`
- [631:75] (JSXText) Static JSX text node: `Model Performance`
  - context: `-sm"> <span className="text-muted-foreground">Model Performance</span> <span>{(model.accurac`
- [648:37] (JSXText) Static JSX text node: `Training...`
  - context: `r2 className="h-3 w-3 mr-1 animate-spin" /> Training... </>`
- [653:37] (JSXText) Static JSX text node: `Retrain`
  - context: `<RefreshCw className="h-3 w-3 mr-1" /> Retrain </> )}`
- [666:37] (JSXText) Static JSX text node: `Deleting...`
  - context: `r2 className="h-3 w-3 mr-1 animate-spin" /> Deleting... </>`
- [677:31] (JSXText) Static JSX text node: `No model trained yet. Model will be trained automatically when sufficient data is available.`
  - context: `p className="text-sm text-muted-foreground mb-3"> No model trained yet. Model will be trained automatically when sufficient data i`
- [688:35] (JSXText) Static JSX text node: `Training...`
  - context: `der2 className="h-3 w-3 mr-1 animate-spin" /> Training... </> )`
- [693:35] (JSXText) Static JSX text node: `Train Model`
  - context: `<Brain className="h-3 w-3 mr-1" /> Train Model </> )}`
- [707:23] (JSXText) Static JSX text node: `About Machine Learning`
  - context: `ap-2"> <Info className="h-4 w-4" /> About Machine Learning </h5> <p classNam`
- [710:23] (JSXText) Static JSX text node: `ML models enhance predictions by learning from historical patterns. They require:`
  - context: `<p className="text-sm text-muted-foreground"> ML models enhance predictions by learning from historical patterns. They require`
- [713:27] (JSXText) Static JSX text node: `• Emotion prediction: 7+ days of data`
  - context: `sName="text-sm text-muted-foreground space-y-1 ml-4"> <li>• Emotion prediction: 7+ days of data</li> <li>• Sensory r`
- [714:27] (JSXText) Static JSX text node: `• Sensory response: 10+ tracking sessions`
  - context: `<li>• Emotion prediction: 7+ days of data</li> <li>• Sensory response: 10+ tracking sessions</li> <li>• Basel`
- [715:27] (JSXText) Static JSX text node: `• Baseline clustering: 10+ tracking entries`
  - context: `<li>• Sensory response: 10+ tracking sessions</li> <li>• Baseline clustering: 10+ tracking entries</li> </ul>`
- [718:23] (JSXText) Static JSX text node: `Models are trained locally in your browser and improve over time as more data is collected.`
  - context: `<p className="text-sm text-muted-foreground"> Models are trained locally in your browser and improve over time as more data is`
- [730:52] (JSXText) Static JSX text node: `Cache Settings`
  - context: `<CardHeader> <CardTitle className="text-base">Cache Settings</CardTitle> <CardDescription>`
- [732:21] (JSXText) Static JSX text node: `Configure performance optimization settings`
  - context: `he Settings</CardTitle> <CardDescription> Configure performance optimization settings </CardDescription>`
- [738:49] (JSXText) Static JSX text node: `Cache Duration`
  - context: `className="flex items-center"> <Label htmlFor="cacheTTL">Cache Duration</Label> {renderTooltip("How long to keep ca`
- [751:84] (JSXText) Static JSX text node: `min`
  - context: `<span className="w-16 text-right">{config.cache.ttl / 60000} min</span> </div> </div>`
- [757:30] (JSXText) Static JSX text node: `Invalidate cache on config change`
  - context: `<div className="flex items-center"> <Label>Invalidate cache on config change</Label> {renderTooltip("`
- [769:52] (JSXText) Static JSX text node: `Import/Export Configuration`
  - context: `<CardHeader> <CardTitle className="text-base">Import/Export Configuration</CardTitle> <CardDescription>`
- [771:21] (JSXText) Static JSX text node: `Save and share your configuration settings`
  - context: `nfiguration</CardTitle> <CardDescription> Save and share your configuration settings </CardDescription>`
- [781:21] (JSXText) Static JSX text node: `Export Config`
  - context: `> <Download className="h-4 w-4" /> Export Config </Button> <`
- [792:25] (JSXText) Static JSX text node: `Import Config`
  - context: `<Upload className="h-4 w-4" /> Import Config </span> </Button>`
- [800:34] (JSXAttribute) Static aria-label attribute: `Import configuration file`
  - context: `onChange={handleImport} aria-label="Import configuration file" className="hidden"`
- [817:15] (JSXText) Static JSX text node: `Reset to Defaults`
  - context: `-2" > <RotateCcw className="h-4 w-4" /> Reset to Defaults </Button> <div className=`
- [824:19] (JSXText) Static JSX text node: `Unsaved changes`
  - context: `r-4"> <AlertTriangle className="h-4 w-4" /> Unsaved changes </p> )}`
- [832:17] (JSXText) Static JSX text node: `Cancel`
  - context: `nt="outline" onClick={onClose} > Cancel </Button> <Button`
- [841:17] (JSXText) Static JSX text node: `Save Changes`
  - context: `2" > <Save className="h-4 w-4" /> Save Changes </Button> </div> </div>`

### src/components/AnalyticsStatusIndicator.tsx

- [119:20] (MessageAPI) Message API call: error(): `Error refreshing analytics`
  - context: `; } loadAnalyticsStatus(); } catch (error) { logger.error('Error refreshing analytics', error); } finally { setIsRefreshing(fals`
- [154:11] (JSXText) Static JSX text node: `Analytics:`
  - context: `<Badge variant={getStatusColor(status)} className="text-xs"> Analytics: {getStatusText(status)} </Badge> {status.lastAnalyzed`
- [158:13] (JSXText) Static JSX text node: `Updated`
  - context: `zed && ( <span className="text-xs text-muted-foreground"> Updated {formatDistanceToNow(status.lastAnalyzed, { addSuffix: true })}`
- [171:13] (JSXText) Static JSX text node: `Analytics Status`
  - context: `flex items-center gap-2"> <Brain className="h-5 w-5" /> Analytics Status {studentId && \` - ${analyticsStatus[0]?.studentName`
- [181:13] (JSXText) Static JSX text node: `Refresh`
  - context: `className={\`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}\`} /> Refresh </Button> </div> </CardHeader> <CardConten`
- [189:16] (JSXText) Static JSX text node: `No analytics data available`
  - context: `<Activity className="h-8 w-8 mx-auto mb-2 opacity-50" /> <p>No analytics data available</p> </div> ) : ( <div cl`
- [208:27] (JSXText) Static JSX text node: `Data Available`
  - context: `<BarChart3 className="h-3 w-3 mr-1" /> Data Available </Badge> ) : (`
- [213:27] (JSXText) Static JSX text node: `Collecting Data`
  - context: `<Clock className="h-3 w-3 mr-1" /> Collecting Data </Badge> )}`
- [223:25] (JSXText) Static JSX text node: `Last updated:`
  - context: `{status.lastAnalyzed ? ( <> Last updated:<br /> {formatDistanceToNow(status.lastAnal`
- [236:66] (JSXText) Static JSX text node: `Active Analytics Systems:`
  - context: `order-border"> <h4 className="font-medium text-foreground mb-3">Active Analytics Systems:</h4> <div className="grid grid-cols-2`
- [240:21] (JSXText) Static JSX text node: `Pattern Analysis`
  - context: `<CheckCircle className="h-4 w-4 text-green-600" /> Pattern Analysis </div> <div className="flex`
- [244:21] (JSXText) Static JSX text node: `Correlation Analysis`
  - context: `<CheckCircle className="h-4 w-4 text-green-600" /> Correlation Analysis </div> <div className="`
- [248:21] (JSXText) Static JSX text node: `Predictive Insights`
  - context: `<CheckCircle className="h-4 w-4 text-green-600" /> Predictive Insights </div> <div className="f`
- [252:21] (JSXText) Static JSX text node: `Anomaly Detection`
  - context: `<CheckCircle className="h-4 w-4 text-green-600" /> Anomaly Detection </div> <div className="fle`
- [256:21] (JSXText) Static JSX text node: `Alert System`
  - context: `<CheckCircle className="h-4 w-4 text-green-600" /> Alert System </div> <div className="flex ite`
- [260:21] (JSXText) Static JSX text node: `Auto-Updates`
  - context: `<CheckCircle className="h-4 w-4 text-green-600" /> Auto-Updates </div> </div> </div`

### src/components/ConfidenceIndicator.tsx

- [104:19] (JSXText) Static JSX text node: `•`
  - context: `key={explanation} className="text-xs text-muted-foreground"> • {explanation} </div> ))} </div>`

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
  - context: `y={\`${metric.id}-${rec}\`} className="text-xs opacity-90"> • {rec} </p> ))} </div>`
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
- [229:68] (JSXText) Static JSX text node: `Tidsestimat`
  - context: `ext-info" /> <span className="font-medium text-info-foreground">Tidsestimat</span> </div> <p className="text-sm text`
- [232:17] (JSXText) Static JSX text node: `Med`
  - context: `> <p className="text-sm text-info-foreground/80"> Med {getRecommendedRate()} datapunkt(er) per dag vil du nå{' '}`
- [232:44] (JSXText) Static JSX text node: `datapunkt(er) per dag vil du nå`
  - context: `e="text-sm text-info-foreground/80"> Med {getRecommendedRate()} datapunkt(er) per dag vil du nå{' '} <span className="font-mediu`
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
- [284:69] (JSXText) Static JSX text node: `Anbefalinger`
  - context: `primary" /> <span className="font-medium text-primary-foreground">Anbefalinger</span> </div> <ul className="text-sm text-p`
- [287:19] (JSXText) Static JSX text node: `• Samle`
  - context: `<ul className="text-sm text-primary-foreground/80 space-y-1"> <li>• Samle {getRecommendedRate()} datapunkt(er) per dag for optimal fremgang</li>`
- [287:50] (JSXText) Static JSX text node: `datapunkt(er) per dag for optimal fremgang`
  - context: `mary-foreground/80 space-y-1"> <li>• Samle {getRecommendedRate()} datapunkt(er) per dag for optimal fremgang</li> <li>• Registrer da`
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

### src/components/DebugVisualization.tsx

- [164:13] (JSXText) Static JSX text node: `Debug Visualization Component`
  - context: `<CardTitle className="flex items-center justify-between"> Debug Visualization Component <Badge variant="outline">Test Mode</Ba`
- [165:38] (JSXText) Static JSX text node: `Test Mode`
  - context: `Debug Visualization Component <Badge variant="outline">Test Mode</Badge> </CardTitle> </CardHeader> <CardCont`
- [174:54] (JSXText) Static JSX text node: `Emotions`
  - context: `dContent className="pt-4"> <p className="text-sm font-medium">Emotions</p> <p className="text-2xl font-bold">{mockEmotions.l`
- [180:54] (JSXText) Static JSX text node: `Sensory Inputs`
  - context: `dContent className="pt-4"> <p className="text-sm font-medium">Sensory Inputs</p> <p className="text-2xl font-bold">{mockSens`
- [186:54] (JSXText) Static JSX text node: `Tracking Entries`
  - context: `dContent className="pt-4"> <p className="text-sm font-medium">Tracking Entries</p> <p className="text-2xl font-bold">{mockTr`
- [194:58] (JSXText) Static JSX text node: `Interactive Data Visualization Component:`
  - context: `order rounded-lg p-4"> <h3 className="text-lg font-semibold mb-4">Interactive Data Visualization Component:</h3> <InteractiveDataVis`
- [205:71] (JSXText) Static JSX text node: `View Raw Data`
  - context: `e="mt-4"> <summary className="cursor-pointer text-sm font-medium">View Raw Data</summary> <div className="mt-2 space-y-2">`
- [208:54] (JSXText) Static JSX text node: `Emotions Sample:`
  - context: `-2"> <div> <p className="text-sm font-medium">Emotions Sample:</p> <pre className="text-xs bg-muted p-2 roun`
- [214:54] (JSXText) Static JSX text node: `Sensory Sample:`
  - context: `div> <div> <p className="text-sm font-medium">Sensory Sample:</p> <pre className="text-xs bg-muted p-2 round`
- [220:54] (JSXText) Static JSX text node: `Tracking Sample:`
  - context: `div> <div> <p className="text-sm font-medium">Tracking Sample:</p> <pre className="text-xs bg-muted p-2 roun`

### src/components/DetailedConfidenceExplanation.tsx

- [208:17] (JSXText) Static JSX text node: `R² =`
  - context: `> <div className="text-xs text-muted-foreground"> R² = {rSquared.toFixed(3)} </div> </div> </d`

### src/components/DevErrorBanner.tsx

- [39:22] (MessageAPI) Message API call: error(): `Dev error captured`
  - context: `// Use central logger to record the error logger.error('Dev error captured', ...args); } catch {} // Always forward to the`
- [49:20] (MessageAPI) Message API call: error(): `Window error`
  - context: `=> c + 1); // Log window errors through central logger logger.error('Window error', e.error || new Error(e.message)); }; const onUnhandledRe`
- [58:20] (MessageAPI) Message API call: error(): `Unhandled promise rejection`
  - context: `1); // Log unhandled rejections through central logger logger.error('Unhandled promise rejection', reason instanceof Error ? reason : new Error(msg)`
- [82:59] (JSXText) Static JSX text node: `Dev error captured (`
  - context: `className="min-w-0"> <div className="font-medium text-destructive">Dev error captured ({errorCount})</div> <div className="mt-1 truncat`
- [101:15] (JSXText) Static JSX text node: `Dismiss`
  - context: `nt" onClick={() => setIsHidden(true)} > Dismiss </button> </div> </div> </div> <`

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

### src/components/EnhancedDataVisualization.tsx

- [70:63] (JSXText) Static JSX text node: `No data to display`
  - context: `uted-foreground"> <h3 className="text-lg font-semibold">No data to display</h3> <p className="text-sm">There is`
- [71:48] (JSXText) Static JSX text node: `There is no`
  - context: `emibold">No data to display</h3> <p className="text-sm">There is no {dataType} data available for {studentName}.</p>`
- [71:71] (JSXText) Static JSX text node: `data available for`
  - context: `play</h3> <p className="text-sm">There is no {dataType} data available for {studentName}.</p> </div>`
- [86:77] (JSXText) Static JSX text node: `Enhanced Data Insights for`
  - context: `iv> <h2 className="text-2xl font-bold text-card-foreground">Enhanced Data Insights for {studentName}</h2> <p className="`
- [87:58] (JSXText) Static JSX text node: `Displaying`
  - context: `for {studentName}</h2> <p className="text-muted-foreground">Displaying {dataType}</p> </div> <div className=`
- [90:129] (JSXText) Static JSX text node: `Emotions`
  - context: `taType('emotions')} variant={dataType === 'emotions' ? 'default' : 'secondary'}>Emotions</Button> <Button onClick={() => setDataType('sensor`
- [91:127] (JSXText) Static JSX text node: `Sensory`
  - context: `DataType('sensory')} variant={dataType === 'sensory' ? 'default' : 'secondary'}>Sensory</Button> </div> </div> <motion.`

### src/components/EnhancedPersonalizedInsights.tsx

- [182:13] (JSXText) Static JSX text node: `Personalized Insights for`
  - context: `items-center gap-2"> <Lightbulb className="h-5 w-5" /> Personalized Insights for {student.name} </CardTitle> </CardHe`
- [187:48] (JSXText) Static JSX text node: `Start tracking emotions and sensory inputs to generate personalized insights`
  - context: `ity-50 text-muted-foreground" /> <p className="text-muted-foreground">Start tracking emotions and sensory inputs to generate personalized insights</p>`
- [201:15] (JSXText) Static JSX text node: `Personalized Insights for`
  - context: `-2"> <Lightbulb className="h-5 w-5 text-primary" /> Personalized Insights for {student.name} </CardTitle> <d`
- [221:62] (JSXText) Static JSX text node: `Total Data Points`
  - context: `lDataPoints}</div> <div className="text-sm text-muted-foreground">Total Data Points</div> </div> <div className="text-cent`
- [225:62] (JSXText) Static JSX text node: `Data Consistency`
  - context: `nsistency)}%</div> <div className="text-sm text-muted-foreground">Data Consistency</div> </div> <div className="text-cente`
- [229:62] (JSXText) Static JSX text node: `Emotional Stability`
  - context: `Stability)}%</div> <div className="text-sm text-muted-foreground">Emotional Stability</div> </div> <div className="text-ce`
- [241:62] (JSXText) Static JSX text node: `Intensity Trend`
  - context: `</div> <div className="text-sm text-muted-foreground">Intensity Trend</div> </div> </div> </CardContent>`
- [249:41] (JSXText) Static JSX text node: `AI Insights`
  - context: `st className="grid w-full grid-cols-5"> <TabsTrigger value="insights">AI Insights</TabsTrigger> <TabsTrigger value="strengths">Strengths</Ta`
- [250:42] (JSXText) Static JSX text node: `Strengths`
  - context: `e="insights">AI Insights</TabsTrigger> <TabsTrigger value="strengths">Strengths</TabsTrigger> <TabsTrigger value="growth">Growth Areas</Tabs`
- [251:39] (JSXText) Static JSX text node: `Growth Areas`
  - context: `value="strengths">Strengths</TabsTrigger> <TabsTrigger value="growth">Growth Areas</TabsTrigger> <TabsTrigger value="patterns">Patterns</Tab`
- [252:41] (JSXText) Static JSX text node: `Patterns`
  - context: `lue="growth">Growth Areas</TabsTrigger> <TabsTrigger value="patterns">Patterns</TabsTrigger> <TabsTrigger value="anomalies">Alerts</TabsTrig`
- [253:42] (JSXText) Static JSX text node: `Alerts`
  - context: `alue="patterns">Patterns</TabsTrigger> <TabsTrigger value="anomalies">Alerts</TabsTrigger> </TabsList> <TabsContent value="insights"`
- [275:31] (JSXText) Static JSX text node: `Forecast:`
  - context: `<div className="text-sm font-medium"> Forecast: {insight.prediction.value.toFixed(1)} <`
- [284:70] (JSXText) Static JSX text node: `Recommendations:`
  - context: `me="mt-3"> <h5 className="text-sm font-medium mb-2">Recommendations:</h5> <ul className="text-sm text-mu`
- [307:63] (JSXText) Static JSX text node: `% confidence`
  - context: `> {Math.round(insight.confidence * 100)}% confidence </Badge> <div className`
- [320:18] (JSXText) Static JSX text node: `Continue collecting data to generate predictive insights`
  - context: `<Brain className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>Continue collecting data to generate predictive insights</p> </div>`
- [339:75] (JSXText) Static JSX text node: `Strength Level:`
  - context: `p-2"> <span className="text-xs text-muted-foreground">Strength Level:</span> <Progress value={strength.confi`
- [352:18] (JSXText) Static JSX text node: `Strengths will be identified as patterns emerge from data collection`
  - context: `<Heart className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>Strengths will be identified as patterns emerge from data collection</p>`
- [386:50] (JSXText) Static JSX text node: `priority`
  - context: `ry' }> {opportunity.priority} priority </Badge> </div>`
- [392:68] (JSXText) Static JSX text node: `Action Steps:`
  - context: `Name="mt-3"> <h5 className="text-sm font-medium mb-2">Action Steps:</h5> <ul className="text-sm text-muted-f`
- [396:64] (JSXText) Static JSX text node: `•`
  - context: `ms-start gap-2"> <span className="text-primary">•</span> <span>{rec}</span>`
- [411:18] (JSXText) Static JSX text node: `Growth opportunities will be identified based on data patterns`
  - context: `<Target className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>Growth opportunities will be identified based on data patterns</p> <`
- [425:55] (JSXText) Static JSX text node: `Emotional Pattern:`
  - context: `<div className="flex-1"> <h4 className="font-semibold">Emotional Pattern: {pattern.pattern.replace('-', ' ')}</h4>`
- [429:67] (JSXText) Static JSX text node: `% confidence`
  - context: `nt="outline"> {Math.round(pattern.confidence * 100)}% confidence </Badge> <span`
- [432:50] (JSXText) Static JSX text node: `data points`
  - context: `ext-xs text-muted-foreground"> {pattern.dataPoints} data points </span> </div>`
- [446:55] (JSXText) Static JSX text node: `Sensory Pattern:`
  - context: `<div className="flex-1"> <h4 className="font-semibold">Sensory Pattern: {pattern.pattern.replace('-', ' ')}</h4>`
- [450:67] (JSXText) Static JSX text node: `% confidence`
  - context: `nt="outline"> {Math.round(pattern.confidence * 100)}% confidence </Badge> <span`
- [453:50] (JSXText) Static JSX text node: `data points`
  - context: `ext-xs text-muted-foreground"> {pattern.dataPoints} data points </span> </div>`
- [465:18] (JSXText) Static JSX text node: `Patterns will emerge as more data is collected`
  - context: `<BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>Patterns will emerge as more data is collected</p> </div>`
- [493:46] (JSXText) Static JSX text node: `severity`
  - context: `ondary' }> {anomaly.severity} severity </Badge> </div>`
- [501:68] (JSXText) Static JSX text node: `Recommended Actions:`
  - context: `Name="mt-3"> <h5 className="text-sm font-medium mb-2">Recommended Actions:</h5> <ul className="text-sm text-`
- [505:64] (JSXText) Static JSX text node: `•`
  - context: `ms-start gap-2"> <span className="text-primary">•</span> <span>{rec}</span>`
- [520:18] (JSXText) Static JSX text node: `No significant anomalies detected in recent data`
  - context: `<Shield className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>No significant anomalies detected in recent data</p> </div>`

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

- [94:18] (MessageAPI) Message API call: error(): `[ErrorBoundary] Component error caught`
  - context: `ronment configuration and doesn't log to console in production logger.error('[ErrorBoundary] Component error caught', { error: { message: erro`
- [128:21] (MessageAPI) Message API call: error(): `An unexpected error occurred`
  - context: `ble; also emit a dev-only minimal toast payload try { toast.error('An unexpected error occurred', { description: import.meta.env.DEV &&`
- [128:21] (MessageAPI) sonner toast.error(): `An unexpected error occurred`
  - context: `ble; also emit a dev-only minimal toast payload try { toast.error('An unexpected error occurred', { description: import.meta.env.DEV &&`
- [158:13] (MessageAPI) Message API call: toast(): `Page automatically refreshed after multiple errors`
  - context: `this.resetTimeoutId = setTimeout(() => { this.handleRetry(); toast('Page automatically refreshed after multiple errors'); }, 5000); }; /**`
- [158:13] (MessageAPI) sonner toast(): `Page automatically refreshed after multiple errors`
  - context: `this.resetTimeoutId = setTimeout(() => { this.handleRetry(); toast('Page automatically refreshed after multiple errors'); }, 5000); }; /**`
- [204:17] (JSXText) Static JSX text node: `Something went wrong`
  - context: `ructive"> <AlertTriangle className="h-5 w-5" /> Something went wrong </CardTitle> </CardHeader>`
- [209:17] (JSXText) Static JSX text node: `An unexpected error occurred. The application may not be working correctly.`
  - context: `4"> <p className="text-sm text-muted-foreground"> An unexpected error occurred. The application may not be working correctly.`
- [214:67] (JSXText) Static JSX text node: `Error Details`
  - context: `me="text-xs"> <summary className="cursor-pointer font-medium">Error Details</summary> <pre className="mt-2 p-2 bg-muted roun`
- [225:19] (JSXText) Static JSX text node: `Try Again`
  - context: `lt"> <RefreshCw className="h-4 w-4 mr-2" /> Try Again </Button> <Button o`
- [232:19] (JSXText) Static JSX text node: `Reload Page`
  - context: `> <RefreshCw className="h-4 w-4 mr-2" /> Reload Page </Button> <Button`
- [239:19] (JSXText) Static JSX text node: `Go Home`
  - context: `> <Home className="h-4 w-4 mr-2" /> Go Home </Button> </div>`
- [245:19] (JSXText) Static JSX text node: `Auto-refreshing in 5 seconds...`
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
  - context: `nt className="max-w-2xl"> <DialogHeader> <DialogTitle>Create New IEP Goal</DialogTitle> <DialogDescription>`
- [306:17] (JSXText) Static JSX text node: `Enter goal details, targets, and measurable objectives.`
  - context: `te New IEP Goal</DialogTitle> <DialogDescription> Enter goal details, targets, and measurable objectives. </DialogDe`
- [311:40] (JSXText) Static JSX text node: `Goal Title *`
  - context: `assName="space-y-4"> <div> <Label htmlFor="title">Goal Title *</Label> <Input id="title"`
- [316:31] (JSXAttribute) Static placeholder attribute: `e.g., Improve emotional regulation during transitions`
  - context: `al(prev => ({ ...prev, title: e.target.value }))} placeholder="e.g., Improve emotional regulation during transitions" />`
- [320:43] (JSXText) Static JSX text node: `Category`
  - context: `</div> <div> <Label htmlFor="category">Category</Label> <Select value={newGoal.category} onValueChange=`
- [326:52] (JSXText) Static JSX text node: `Behavioral`
  - context: `<SelectContent> <SelectItem value="behavioral">Behavioral</SelectItem> <SelectItem value="academic">Academi`
- [327:50] (JSXText) Static JSX text node: `Academic`
  - context: `ioral">Behavioral</SelectItem> <SelectItem value="academic">Academic</SelectItem> <SelectItem value="social">Social</Sel`
- [328:48] (JSXText) Static JSX text node: `Social`
  - context: `"academic">Academic</SelectItem> <SelectItem value="social">Social</SelectItem> <SelectItem value="sensory">Sensory</Sel`
- [329:49] (JSXText) Static JSX text node: `Sensory`
  - context: `ue="social">Social</SelectItem> <SelectItem value="sensory">Sensory</SelectItem> <SelectItem value="communication">Commu`
- [330:55] (JSXText) Static JSX text node: `Communication`
  - context: `ory">Sensory</SelectItem> <SelectItem value="communication">Communication</SelectItem> </SelectContent> </`
- [335:46] (JSXText) Static JSX text node: `Description *`
  - context: `</div> <div> <Label htmlFor="description">Description *</Label> <Textarea id="descriptio`
- [340:31] (JSXAttribute) Static placeholder attribute: `Detailed description of what the student will achieve...`
  - context: `v => ({ ...prev, description: e.target.value }))} placeholder="Detailed description of what the student will achieve..." />`
- [344:45] (JSXText) Static JSX text node: `Measurable Objective *`
  - context: `</div> <div> <Label htmlFor="measurable">Measurable Objective *</Label> <Textarea id="m`
- [349:31] (JSXAttribute) Static placeholder attribute: `How will progress be measured? Include specific criteria...`
  - context: `...prev, measurableObjective: e.target.value }))} placeholder="How will progress be measured? Include specific criteria..." />`
- [354:45] (JSXText) Static JSX text node: `Baseline Value`
  - context: `ols-2 gap-4"> <div> <Label htmlFor="baseline">Baseline Value</Label> <Input id="baseline`
- [363:43] (JSXText) Static JSX text node: `Target Value`
  - context: `</div> <div> <Label htmlFor="target">Target Value</Label> <Input id="target"`
- [373:45] (JSXText) Static JSX text node: `Target Date`
  - context: `</div> <div> <Label htmlFor="targetDate">Target Date</Label> <Input id="targetDate"`
- [383:19] (JSXText) Static JSX text node: `Cancel`
  - context: `onClick={() => { resetForm(); setShowCreateDialog(false); }}> Cancel </Button> <Button onClick={createGoal}>Cr`
- [385:46] (JSXText) Static JSX text node: `Create Goal`
  - context: `Cancel </Button> <Button onClick={createGoal}>Create Goal</Button> </div> </div> </DialogC`
- [397:72] (JSXText) Static JSX text node: `No IEP Goals Yet`
  - context: `mb-4" /> <h3 className="text-xl font-semibold text-foreground mb-2">No IEP Goals Yet</h3> <p className="text-muted-foreground text-cente`
- [399:15] (JSXText) Static JSX text node: `Start by creating your first IEP goal to track`
  - context: `<p className="text-muted-foreground text-center mb-6 max-w-md"> Start by creating your first IEP goal to track {student.name}'s educational prog`
- [399:76] (JSXText) Static JSX text node: `'s educational progress.`
  - context: `md"> Start by creating your first IEP goal to track {student.name}'s educational progress. </p> <Button onClick={() => set`
- [403:15] (JSXText) Static JSX text node: `Create First Goal`
  - context: `0 font-dyslexia"> <Plus className="h-4 w-4 mr-2" /> Create First Goal </Button> </CardContent> </Card>`
- [429:68] (JSXAttribute) Static aria-label attribute: `Edit goal`
  - context: `flex gap-2"> <Button variant="ghost" size="icon" aria-label="Edit goal" title="Edit goal"> <Edit className="h-4 w-4" /`
- [429:86] (JSXAttribute) Static title attribute: `Edit goal`
  - context: `<Button variant="ghost" size="icon" aria-label="Edit goal" title="Edit goal"> <Edit className="h-4 w-4" />`
- [432:68] (JSXAttribute) Static aria-label attribute: `Delete goal`
  - context: `</Button> <Button variant="ghost" size="icon" aria-label="Delete goal" title="Delete goal" onClick={() => deleteGoal(goal.id)}>`
- [432:88] (JSXAttribute) Static title attribute: `Delete goal`
  - context: `<Button variant="ghost" size="icon" aria-label="Delete goal" title="Delete goal" onClick={() => deleteGoal(goal.id)}> <Trash2`
- [442:59] (JSXText) Static JSX text node: `Progress`
  - context: `ustify-between mb-2"> <span className="text-sm font-medium">Progress</span> <span className="text-sm text-muted-foregrou`
- [450:52] (JSXText) Static JSX text node: `Measurable Objective`
  - context: `<div className="mb-4"> <h4 className="font-medium mb-2">Measurable Objective</h4> <p className="text-sm text-muted-for`
- [460:27] (JSXText) Static JSX text node: `Created:`
  - context: `ndarIcon className="h-4 w-4 text-muted-foreground" /> <span>Created: {format(goal.createdDate, 'MMM dd, yyyy')}</span> </d`
- [464:27] (JSXText) Static JSX text node: `Target:`
  - context: `rosshair className="h-4 w-4 text-muted-foreground" /> <span>Target: {format(goal.targetDate, 'MMM dd, yyyy')}</span> </div`
- [471:49] (JSXText) Static JSX text node: `Milestones`
  - context: `s-center justify-between mb-2"> <h4 className="font-medium">Milestones</h4> <Button variant="outl`
- [476:46] (MessageAPI) Message API call: prompt(): `Milestone title:`
  - context: `onClick={() => { const title = prompt("Milestone title:"); const description = prompt("Milesto`
- [477:52] (MessageAPI) Message API call: prompt(): `Milestone description:`
  - context: `prompt("Milestone title:"); const description = prompt("Milestone description:"); const dateStr = prompt("Targe`
- [478:48] (MessageAPI) Message API call: prompt(): `Target date (YYYY-MM-DD):`
  - context: `rompt("Milestone description:"); const dateStr = prompt("Target date (YYYY-MM-DD):"); if (title && description &`
- [485:23] (JSXText) Static JSX text node: `Add`
  - context: `> <Plus className="h-3 w-3 mr-1" /> Add </Button> </div> {go`
- [489:66] (JSXText) Static JSX text node: `No milestones yet`
  - context: `ngth === 0 ? ( <p className="text-sm text-muted-foreground">No milestones yet</p> ) : ( <div className`
- [525:44] (MessageAPI) Message API call: prompt(): `Enter current progress value:`
  - context: `onClick={() => { const value = prompt("Enter current progress value:"); const notes = prompt("Pr`
- [526:44] (MessageAPI) Message API call: prompt(): `Progress notes (optional):`
  - context: `pt("Enter current progress value:"); const notes = prompt("Progress notes (optional):"); if (value) {`
- [533:21] (JSXText) Static JSX text node: `Update Progress`
  - context: `<TrendingUp className="h-4 w-4 mr-1" /> Update Progress </Button> </div>`

### src/components/InteractiveDataVisualization.debug.tsx

- [17:20] (JSXText) Static JSX text node: `Interactive Data Visualization Debug`
  - context: `studentName }); return ( <Card> <CardHeader> <CardTitle>Interactive Data Visualization Debug</CardTitle> </CardHeader> <Card`
- [23:16] (JSXText) Static JSX text node: `Debug mode active - checking component loading`
  - context: `ext-yellow-600"> <AlertCircle className="h-5 w-5" /> <p>Debug mode active - checking component loading</p> </div> <d`
- [26:16] (JSXText) Static JSX text node: `Emotions:`
  - context: `> </div> <div className="text-sm space-y-2"> <p>Emotions: {emotions?.length || 0} entries</p> <p>Sensory Inputs: {se`
- [26:50] (JSXText) Static JSX text node: `entries`
  - context: `className="text-sm space-y-2"> <p>Emotions: {emotions?.length || 0} entries</p> <p>Sensory Inputs: {sensoryInputs?.length || 0} entries<`
- [27:16] (JSXText) Static JSX text node: `Sensory Inputs:`
  - context: `2"> <p>Emotions: {emotions?.length || 0} entries</p> <p>Sensory Inputs: {sensoryInputs?.length || 0} entries</p> <p>Tracking`
- [27:61] (JSXText) Static JSX text node: `entries`
  - context: `h || 0} entries</p> <p>Sensory Inputs: {sensoryInputs?.length || 0} entries</p> <p>Tracking Entries: {trackingEntries?.length || 0} entr`
- [28:16] (JSXText) Static JSX text node: `Tracking Entries:`
  - context: `<p>Sensory Inputs: {sensoryInputs?.length || 0} entries</p> <p>Tracking Entries: {trackingEntries?.length || 0} entries</p> <p>Stud`
- [28:65] (JSXText) Static JSX text node: `entries`
  - context: `0} entries</p> <p>Tracking Entries: {trackingEntries?.length || 0} entries</p> <p>Student Name: {studentName || 'Not provided'}</p>`
- [29:16] (JSXText) Static JSX text node: `Student Name:`
  - context: `<p>Tracking Entries: {trackingEntries?.length || 0} entries</p> <p>Student Name: {studentName || 'Not provided'}</p> </div> </div`

### src/components/InteractiveDataVisualization.diagnosis.tsx

- [99:20] (JSXText) Static JSX text node: `Interactive Data Visualization - Diagnosis`
  - context: `00" />; } }; return ( <Card> <CardHeader> <CardTitle>Interactive Data Visualization - Diagnosis</CardTitle> </CardHeader>`
- [104:13] (JSXText) Static JSX text node: `Running diagnostic tests to identify loading issues...`
  - context: `space-y-4"> <p className="text-sm text-muted-foreground"> Running diagnostic tests to identify loading issues... </p>`
- [122:46] (JSXText) Static JSX text node: `Diagnosis Summary`
  - context: `me="mt-6 p-4 bg-muted rounded-lg"> <h4 className="font-medium mb-2">Diagnosis Summary</h4> <div className="text-sm space-y-1">`
- [124:18] (JSXText) Static JSX text node: `Total Tests:`
  - context: `s Summary</h4> <div className="text-sm space-y-1"> <p>Total Tests: {tests.length}</p> <p>Passed: {tests.filter(t => t.st`
- [125:18] (JSXText) Static JSX text node: `Passed:`
  - context: `m space-y-1"> <p>Total Tests: {tests.length}</p> <p>Passed: {tests.filter(t => t.status === 'passed').length}</p> <p>F`
- [126:18] (JSXText) Static JSX text node: `Failed:`
  - context: `>Passed: {tests.filter(t => t.status === 'passed').length}</p> <p>Failed: {tests.filter(t => t.status === 'failed').length}</p> </div>`
- [135:13] (JSXText) Static JSX text node: `Refresh Page`
  - context: `variant="outline" className="w-full" > Refresh Page </Button> </div> </CardContent> </Card>`

### src/components/InteractiveDataVisualization.minimal.tsx

- [22:11] (JSXText) Static JSX text node: `Interactive Data Visualization -`
  - context: `flex items-center gap-2"> <BarChart3 className="h-5 w-5" /> Interactive Data Visualization - {studentName} </CardTitle> </Card`
- [28:13] (JSXText) Static JSX text node: `This is a minimal version of the component for testing.`
  - context: `nter py-8"> <p className="text-lg text-muted-foreground"> This is a minimal version of the component for testing. </p>`
- [31:16] (JSXText) Static JSX text node: `Emotions:`
  - context: `</p> <div className="mt-4 space-y-2 text-sm"> <p>Emotions: {emotions.length} entries</p> <p>Sensory Inputs: {sensoryI`
- [31:44] (JSXText) Static JSX text node: `entries`
  - context: `className="mt-4 space-y-2 text-sm"> <p>Emotions: {emotions.length} entries</p> <p>Sensory Inputs: {sensoryInputs.length} entries</p>`
- [32:16] (JSXText) Static JSX text node: `Sensory Inputs:`
  - context: `text-sm"> <p>Emotions: {emotions.length} entries</p> <p>Sensory Inputs: {sensoryInputs.length} entries</p> <p>Tracking Entri`
- [32:55] (JSXText) Static JSX text node: `entries`
  - context: `tions.length} entries</p> <p>Sensory Inputs: {sensoryInputs.length} entries</p> <p>Tracking Entries: {trackingEntries.length} entries</p`
- [33:16] (JSXText) Static JSX text node: `Tracking Entries:`
  - context: `<p>Sensory Inputs: {sensoryInputs.length} entries</p> <p>Tracking Entries: {trackingEntries.length} entries</p> </div>`
- [33:59] (JSXText) Static JSX text node: `entries`
  - context: `s.length} entries</p> <p>Tracking Entries: {trackingEntries.length} entries</p> </div> </div> </CardContent> </Card> )`

### src/components/InteractiveDataVisualization.tsx

- [172:20] (MessageAPI) Message API call: error(): `Export failed`
  - context: `oUpperCase()} exported successfully\`); } catch (error) { logger.error('Export failed', { error }); toast.error('Failed to export interactive ana`
- [173:19] (MessageAPI) Message API call: error(): `Failed to export interactive analytics data`
  - context: `tch (error) { logger.error('Export failed', { error }); toast.error('Failed to export interactive analytics data'); } finally { setIsExpor`
- [173:19] (MessageAPI) sonner toast.error(): `Failed to export interactive analytics data`
  - context: `tch (error) { logger.error('Export failed', { error }); toast.error('Failed to export interactive analytics data'); } finally { setIsExpor`

### src/components/MockDataLoader.tsx

- [84:21] (MessageAPI) Message API call: success(): `Mock data loaded successfully!`
  - context: `ario}" with ${stats.entriesCount} tracking entries\`; toast.success('Mock data loaded successfully!', { description, });`
- [84:21] (MessageAPI) sonner toast.success(): `Mock data loaded successfully!`
  - context: `ario}" with ${stats.entriesCount} tracking entries\`; toast.success('Mock data loaded successfully!', { description, });`
- [97:19] (MessageAPI) Message API call: error(): `Failed to load mock data`
  - context: `{ clearInterval(progressIntervalRef.current); } toast.error('Failed to load mock data', { description: error instanceof Error ? erro`
- [97:19] (MessageAPI) sonner toast.error(): `Failed to load mock data`
  - context: `{ clearInterval(progressIntervalRef.current); } toast.error('Failed to load mock data', { description: error instanceof Error ? erro`
- [114:21] (MessageAPI) Message API call: success(): `Mock data cleared successfully!`
  - context: `() => { try { clearMockDataFromStorage(); toast.success('Mock data cleared successfully!'); // Dispatch a custom event to f`
- [114:21] (MessageAPI) sonner toast.success(): `Mock data cleared successfully!`
  - context: `() => { try { clearMockDataFromStorage(); toast.success('Mock data cleared successfully!'); // Dispatch a custom event to f`
- [120:19] (MessageAPI) Message API call: error(): `Failed to clear mock data`
  - context: `CustomEvent('mockDataLoaded')); } catch (error) { toast.error('Failed to clear mock data', { description: error instanceof Error ? err`
- [120:19] (MessageAPI) sonner toast.error(): `Failed to clear mock data`
  - context: `CustomEvent('mockDataLoaded')); } catch (error) { toast.error('Failed to clear mock data', { description: error instanceof Error ? err`
- [138:11] (JSXText) Static JSX text node: `Mock Data for Testing`
  - context: `enter gap-2"> <Database className="h-5 w-5 text-primary" /> Mock Data for Testing </CardTitle> </CardHeader> <CardConten`
- [143:11] (JSXText) Static JSX text node: `Load realistic test data to explore pattern analysis and correlation features.
          Mock data includes 3 students with 3-6 months of tracking data each.`
  - context: `="space-y-4"> <div className="text-sm text-muted-foreground"> Load realistic test data to explore pattern analysis and correlation features.`
- [150:48] (JSXText) Static JSX text node: `Students to be created:`
  - context: `<div className="space-y-2"> <div className="text-sm font-medium">Students to be created:</div> <div className="space-y-1">`
- [164:50] (JSXText) Static JSX text node: `Current Data:`
  - context: `uted/50 rounded-lg space-y-1"> <div className="text-sm font-medium">Current Data:</div> <div className="text-xs text-muted-foreground sp`
- [166:20] (JSXText) Static JSX text node: `•`
  - context: `<div className="text-xs text-muted-foreground space-y-1"> <div>• {currentStats.studentsCount} students</div> <div>• {currentStats`
- [166:51] (JSXText) Static JSX text node: `students`
  - context: `-muted-foreground space-y-1"> <div>• {currentStats.studentsCount} students</div> <div>• {currentStats.entriesCount} tracking entries`
- [167:20] (JSXText) Static JSX text node: `•`
  - context: `<div>• {currentStats.studentsCount} students</div> <div>• {currentStats.entriesCount} tracking entries</div> {hasMockData`
- [167:50] (JSXText) Static JSX text node: `tracking entries`
  - context: `.studentsCount} students</div> <div>• {currentStats.entriesCount} tracking entries</div> {hasMockData && <div className="text-orange`
- [168:64] (JSXText) Static JSX text node: `• Contains mock data`
  - context: `ng entries</div> {hasMockData && <div className="text-orange-600">• Contains mock data</div>} </div> </div> )}`
- [176:50] (JSXText) Static JSX text node: `Scenario`
  - context: `<div className="space-y-1"> <div className="text-sm font-medium">Scenario</div> <Select value={selectedScenario}`
- [182:42] (JSXAttribute) Static placeholder attribute: `Select scenario`
  - context: `<SelectTrigger className="w-full"> <SelectValue placeholder="Select scenario" /> </SelectTrigger> <SelectContent`
- [185:41] (JSXText) Static JSX text node: `All (Emma, Lars, Astrid)`
  - context: `tTrigger> <SelectContent> <SelectItem value="all">All (Emma, Lars, Astrid)</SelectItem> <SelectItem value="emma">E`
- [186:42] (JSXText) Static JSX text node: `Emma (mild anxiety, improving)`
  - context: `>All (Emma, Lars, Astrid)</SelectItem> <SelectItem value="emma">Emma (mild anxiety, improving)</SelectItem> <SelectItem value="l`
- [187:42] (JSXText) Static JSX text node: `Lars (sensory challenges)`
  - context: `(mild anxiety, improving)</SelectItem> <SelectItem value="lars">Lars (sensory challenges)</SelectItem> <SelectItem value="astrid`
- [188:44] (JSXText) Static JSX text node: `Astrid (steady improvement)`
  - context: `rs (sensory challenges)</SelectItem> <SelectItem value="astrid">Astrid (steady improvement)</SelectItem> </SelectContent>`
- [197:60] (JSXText) Static JSX text node: `Loading mock data...`
  - context: `assName="space-y-2"> <div className="text-sm text-muted-foreground">Loading mock data...</div> <Progress value={loadingProgress} classNa`
- [210:13] (JSXText) Static JSX text node: `Load Mock Data`
  - context: `Data} > <Database className="h-4 w-4 mr-2" /> Load Mock Data </Button> {hasMockData && ( <Ale`
- [222:19] (JSXText) Static JSX text node: `Clear All`
  - context: `> <Trash2 className="h-4 w-4 mr-2" /> Clear All </Button> </AlertDialogTrigger>`
- [227:37] (JSXText) Static JSX text node: `Clear All Data?`
  - context: `ontent> <AlertDialogHeader> <AlertDialogTitle>Clear All Data?</AlertDialogTitle> <AlertDialogDescription>`
- [229:21] (JSXText) Static JSX text node: `This will permanently delete all student data and tracking entries. 
                    This action cannot be undone.`
  - context: `lertDialogTitle> <AlertDialogDescription> This will permanently delete all student data and tracking entries.`
- [234:38] (JSXText) Static JSX text node: `Cancel`
  - context: `eader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction onClick={handleC`
- [237:21] (JSXText) Static JSX text node: `Clear All Data`
  - context: `e"> <Trash2 className="h-4 w-4 mr-2" /> Clear All Data </AlertDialogAction> </AlertDia`
- [247:53] (JSXText) Static JSX text node: `Features you can test:`
  - context: `-3 border-t border-border"> <div className="text-sm font-medium mb-2">Features you can test:</div> <div className="text-xs text-muted-foregr`
- [249:18] (JSXText) Static JSX text node: `• Emotion pattern recognition`
  - context: `<div className="text-xs text-muted-foreground space-y-1"> <div>• Emotion pattern recognition</div> <div>• Sensory input correlation`
- [250:18] (JSXText) Static JSX text node: `• Sensory input correlations`
  - context: `ace-y-1"> <div>• Emotion pattern recognition</div> <div>• Sensory input correlations</div> <div>• Environmental factor analy`
- [251:18] (JSXText) Static JSX text node: `• Environmental factor analysis`
  - context: `tion</div> <div>• Sensory input correlations</div> <div>• Environmental factor analysis</div> <div>• Predictive insights & t`
- [252:18] (JSXText) Static JSX text node: `• Predictive insights & trends`
  - context: `s</div> <div>• Environmental factor analysis</div> <div>• Predictive insights & trends</div> <div>• Interactive data visuali`
- [253:18] (JSXText) Static JSX text node: `• Interactive data visualization`
  - context: `is</div> <div>• Predictive insights & trends</div> <div>• Interactive data visualization</div> <div>• Alert system & anomaly`
- [254:18] (JSXText) Static JSX text node: `• Alert system & anomaly detection`
  - context: `</div> <div>• Interactive data visualization</div> <div>• Alert system & anomaly detection</div> </div> </div> <`

### src/components/NoData.tsx

- [6:8] (JSXText) Static JSX text node: `No data available for this visualization.`
  - context: `ata = () => ( <div className="text-center py-8 text-muted-foreground"> <p>No data available for this visualization.</p> </div> );`

### src/components/POCBadge.tsx

- [6:75] (JSXText) Static JSX text node: `POC Mode`
  - context: `urn ( <Badge variant="outline" className="uppercase tracking-wider text-xs">POC Mode</Badge> ); };`

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
- [153:32] (JSXAttribute) Static aria-label attribute: `First page`
  - context: `variant="ghost" size="icon" aria-label="First page" onClick={goToFirstPage} dis`
- [163:32] (JSXAttribute) Static aria-label attribute: `Previous page`
  - context: `variant="ghost" size="icon" aria-label="Previous page" onClick={goToPreviousPage}`
- [196:32] (JSXAttribute) Static aria-label attribute: `Next page`
  - context: `variant="ghost" size="icon" aria-label="Next page" onClick={goToNextPage} disab`
- [206:32] (JSXAttribute) Static aria-label attribute: `Last page`
  - context: `variant="ghost" size="icon" aria-label="Last page" onClick={goToLastPage} disab`

### src/components/PatternDetectionEmptyState.tsx

- [125:17] (JSXText) Static JSX text node: `•`
  - context: `<ul className="text-sm text-info-foreground/80 space-y-1"> <li>• {String(tAnalytics('patternDetection.tips.sameTime'))}</li> <li>•`
- [126:17] (JSXText) Static JSX text node: `•`
  - context: `i>• {String(tAnalytics('patternDetection.tips.sameTime'))}</li> <li>• {String(tAnalytics('patternDetection.tips.includeAll'))}</li> <li>`
- [127:17] (JSXText) Static JSX text node: `•`
  - context: `• {String(tAnalytics('patternDetection.tips.includeAll'))}</li> <li>• {String(tAnalytics('patternDetection.tips.noteEnvironment'))}</li>`
- [128:17] (JSXText) Static JSX text node: `•`
  - context: `ring(tAnalytics('patternDetection.tips.noteEnvironment'))}</li> <li>• {String(tAnalytics('patternDetection.tips.beConsistent'))}</li> </ul`

### src/components/PeriodComparison.tsx

- [178:17] (JSXText) Static JSX text node: `vs`
  - context: `-muted-foreground"> <span>{currentRange.label}</span> <span>vs</span> <span>{comparisonRange.label}</span> </div> </`
- [197:17] (JSXText) Static JSX text node: `vs`
  - context: `<div className="text-xs text-muted-foreground mt-1"> vs {metric.format ? metric.format(metric.previous) : metric.previous}`
- [209:62] (JSXText) Static JSX text node: `Emotion`
  - context: `er gap-2 text-sm"> <Badge variant="outline" className="text-xs">Emotion</Badge> <span className="text-muted-foreground">`
- [211:19] (JSXText) Static JSX text node: `Most common changed from`
  - context: `dge> <span className="text-muted-foreground"> Most common changed from <span className="font-medium">{comparisonStats.mostComm`
- [211:117] (JSXText) Static JSX text node: `to`
  - context: `d from <span className="font-medium">{comparisonStats.mostCommonEmotion}</span> to{" "} <span className="font-medium">{currentStats.mostCommon`
- [219:62] (JSXText) Static JSX text node: `Intensity`
  - context: `er gap-2 text-sm"> <Badge variant="outline" className="text-xs">Intensity</Badge> <span className="text-muted-foreground">`
- [221:19] (JSXText) Static JSX text node: `Average intensity`
  - context: `dge> <span className="text-muted-foreground"> Average intensity{" "} {currentStats.avgEmotionIntensity > com`
- [222:120] (JSXText) Static JSX text node: `by`
  - context: `ionIntensity > comparisonStats.avgEmotionIntensity ? "increased" : "decreased"} by{" "} <span className="font-medium"> {Ma`
- [224:115] (JSXText) Static JSX text node: `points`
  - context: `entStats.avgEmotionIntensity - comparisonStats.avgEmotionIntensity).toFixed(1)} points </span> </span> </div>`
- [232:62] (JSXText) Static JSX text node: `Sensory`
  - context: `er gap-2 text-sm"> <Badge variant="outline" className="text-xs">Sensory</Badge> <span className="text-muted-foreground">`
- [234:19] (JSXText) Static JSX text node: `Sensory seeking behavior`
  - context: `dge> <span className="text-muted-foreground"> Sensory seeking behavior{" "} {currentStats.seekingRatio > com`
- [235:106] (JSXText) Static JSX text node: `by`
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
- [323:30] (JSXAttribute) Static aria-label attribute: `Progress trends line chart`
  - context: `option={option} height={300} aria-label="Progress trends line chart" exportRegistration={{ id: 'progre`
- [333:26] (JSXText) Static JSX text node: `Recent Goal Updates`
  - context: `t-card border-0 shadow-soft"> <CardHeader> <CardTitle>Recent Goal Updates</CardTitle> </CardHeader> <CardConte`
- [352:29] (JSXText) Static JSX text node: `Updated`
  - context: `<p className="text-sm text-muted-foreground"> Updated {format(latestPoint.timestamp, 'MMM dd, yyyy')}`
- [371:26] (JSXText) Static JSX text node: `Goal Completion Trends`
  - context: `t-card border-0 shadow-soft"> <CardHeader> <CardTitle>Goal Completion Trends</CardTitle> </CardHeader> <CardCo`
- [398:32] (JSXAttribute) Static aria-label attribute: `Goal completion by category bar chart`
  - context: `tion={option} height={300} aria-label="Goal completion by category bar chart" exportRegistration={`
- [410:28] (JSXText) Static JSX text node: `Progress by Category`
  - context: `rd border-0 shadow-soft"> <CardHeader> <CardTitle>Progress by Category</CardTitle> </CardHeader> <Card`
- [439:32] (JSXAttribute) Static aria-label attribute: `Progress by category donut chart`
  - context: `tion={option} height={250} aria-label="Progress by category donut chart" exportRegistration={{ id:`
- [448:28] (JSXText) Static JSX text node: `Category Breakdown`
  - context: `rd border-0 shadow-soft"> <CardHeader> <CardTitle>Category Breakdown</CardTitle> </CardHeader> <CardCo`
- [456:67] (JSXText) Static JSX text node: `goals`
  - context: `egory}</span> <Badge variant="outline">{category.count} goals</Badge> </div> <Progress value`
- [460:50] (JSXText) Static JSX text node: `% average progress`
  - context: `ext-xs text-muted-foreground"> <span>{category.progress}% average progress</span> <span>{category.achieved} achi`
- [461:51] (JSXText) Static JSX text node: `achieved`
  - context: `ess}% average progress</span> <span>{category.achieved} achieved</span> </div> </div>`
- [474:26] (JSXText) Static JSX text node: `Priority Goals Requiring Attention`
  - context: `t-card border-0 shadow-soft"> <CardHeader> <CardTitle>Priority Goals Requiring Attention</CardTitle> </CardHeader>`
- [493:31] (JSXText) Static JSX text node: `Progress`
  - context: `<div className="flex justify-between text-sm"> <span>Progress</span> <span>{Math.round(goal.currentProgress)}`
- [500:25] (JSXText) Static JSX text node: `⚠️ This goal is past its target date and may need review or extension.`
  - context: `uctive/20 rounded text-sm text-destructive-foreground"> ⚠️ This goal is past its target date and may need review or extension.`
- [505:25] (JSXText) Static JSX text node: `📈 Consider increasing intervention intensity to meet target date.`
  - context: `er-warning/20 rounded text-sm text-warning-foreground"> 📈 Consider increasing intervention intensity to meet target date.`
- [513:80] (JSXText) Static JSX text node: `All goals are on track!`
  - context: `<p className="text-lg font-medium text-success-foreground">All goals are on track!</p> <p className="text-muted-foregro`
- [514:58] (JSXText) Static JSX text node: `Great work keeping`
  - context: `oals are on track!</p> <p className="text-muted-foreground">Great work keeping {student.name}'s progress moving forward.</p>`
- [514:91] (JSXText) Static JSX text node: `'s progress moving forward.`
  - context: `<p className="text-muted-foreground">Great work keeping {student.name}'s progress moving forward.</p> </div> )}`

### src/components/QuickEntryTemplates.tsx

- [167:20] (MessageAPI) Message API call: error(): `Failed to parse saved templates, using defaults`
  - context: `catch (error) { // Log error and fall back to defaults logger.error('Failed to parse saved templates, using defaults', error); return defaultT`
- [196:20] (MessageAPI) Message API call: error(): `Failed to save templates to localStorage`
  - context: `or) { // Handle quota exceeded or other storage errors logger.error('Failed to save templates to localStorage', error); toast.error('Failed to`
- [197:19] (MessageAPI) Message API call: error(): `Failed to save template changes. Storage may be full.`
  - context: `ger.error('Failed to save templates to localStorage', error); toast.error('Failed to save template changes. Storage may be full.'); } }; const ap`
- [197:19] (MessageAPI) sonner toast.error(): `Failed to save template changes. Storage may be full.`
  - context: `ger.error('Failed to save templates to localStorage', error); toast.error('Failed to save template changes. Storage may be full.'); } }; const ap`
- [232:19] (MessageAPI) Message API call: error(): `Cannot delete default templates`
  - context: `ind(t => t.id === templateId); if (template?.isDefault) { toast.error("Cannot delete default templates"); return; } const updatedTe`
- [232:19] (MessageAPI) sonner toast.error(): `Cannot delete default templates`
  - context: `ind(t => t.id === templateId); if (template?.isDefault) { toast.error("Cannot delete default templates"); return; } const updatedTe`
- [238:19] (MessageAPI) Message API call: success(): `Template deleted`
  - context: `=> t.id !== templateId); saveTemplates(updatedTemplates); toast.success("Template deleted"); }; const createTemplate = () => { if (!newTemplate`
- [238:19] (MessageAPI) sonner toast.success(): `Template deleted`
  - context: `=> t.id !== templateId); saveTemplates(updatedTemplates); toast.success("Template deleted"); }; const createTemplate = () => { if (!newTemplate`
- [243:19] (MessageAPI) Message API call: error(): `Template name is required`
  - context: `createTemplate = () => { if (!newTemplate.name?.trim()) { toast.error("Template name is required"); return; } const template: QuickTemp`
- [243:19] (MessageAPI) sonner toast.error(): `Template name is required`
  - context: `createTemplate = () => { if (!newTemplate.name?.trim()) { toast.error("Template name is required"); return; } const template: QuickTemp`
- [270:19] (MessageAPI) Message API call: success(): `Template created successfully`
  - context: `false, usageCount: 0 }); setIsCreating(false); toast.success("Template created successfully"); }; const getCategoryColor = (category: st`
- [270:19] (MessageAPI) sonner toast.success(): `Template created successfully`
  - context: `false, usageCount: 0 }); setIsCreating(false); toast.success("Template created successfully"); }; const getCategoryColor = (category: st`
- [298:13] (JSXText) Static JSX text node: `Quick Entry Templates`
  - context: `center gap-2"> <Zap className="h-5 w-5 text-primary" /> Quick Entry Templates </CardTitle> <Dialog open={isCreating}`
- [302:62] (JSXAttribute) Static aria-label attribute: `Create new template`
  - context: `ogTrigger asChild> <Button size="sm" variant="outline" aria-label="Create new template" title="Create new template"> <Plus classNa`
- [302:90] (JSXAttribute) Static title attribute: `Create new template`
  - context: `<Button size="sm" variant="outline" aria-label="Create new template" title="Create new template"> <Plus className="h-4 w-4 mr-2" />`
- [304:52] (JSXText) Static JSX text node: `New Template`
  - context: `className="h-4 w-4 mr-2" /> <span className="hidden sm:inline">New Template</span> </Button> </DialogTrigger>`
- [309:30] (JSXText) Static JSX text node: `Create Quick Entry Template`
  - context: `className="max-w-md"> <DialogHeader> <DialogTitle>Create Quick Entry Template</DialogTitle> <DialogDescription>`
- [311:19] (JSXText) Static JSX text node: `Define a name, optional description, category, and default values.`
  - context: `ry Template</DialogTitle> <DialogDescription> Define a name, optional description, category, and default values.`
- [316:58] (JSXText) Static JSX text node: `Template Name`
  - context: `<div> <label className="text-sm font-medium">Template Name</label> <Input placeholder="`
- [318:33] (JSXAttribute) Static placeholder attribute: `e.g., Sensory Overload Response`
  - context: `>Template Name</label> <Input placeholder="e.g., Sensory Overload Response" value={newTemplate.name ||`
- [324:58] (JSXText) Static JSX text node: `Description`
  - context: `<div> <label className="text-sm font-medium">Description</label> <Textarea placeholder=`
- [326:33] (JSXAttribute) Static placeholder attribute: `Brief description of when to use this template`
  - context: `Description</label> <Textarea placeholder="Brief description of when to use this template" value={newT`
- [332:58] (JSXText) Static JSX text node: `Category`
  - context: `<div> <label className="text-sm font-medium">Category</label> <Select value={newTemplat`
- [341:51] (JSXText) Static JSX text node: `Morning`
  - context: `<SelectContent> <SelectItem value="morning">Morning</SelectItem> <SelectItem value="transition">Transi`
- [342:54] (JSXText) Static JSX text node: `Transition`
  - context: `ning">Morning</SelectItem> <SelectItem value="transition">Transition</SelectItem> <SelectItem value="learning">Learn`
- [343:52] (JSXText) Static JSX text node: `Learning`
  - context: `ion">Transition</SelectItem> <SelectItem value="learning">Learning</SelectItem> <SelectItem value="break">Break</Sel`
- [344:49] (JSXText) Static JSX text node: `Break`
  - context: `learning">Learning</SelectItem> <SelectItem value="break">Break</SelectItem> <SelectItem value="afternoon">Afternoon`
- [345:53] (JSXText) Static JSX text node: `Afternoon`
  - context: `="break">Break</SelectItem> <SelectItem value="afternoon">Afternoon</SelectItem> <SelectItem value="custom">Custom</`
- [346:50] (JSXText) Static JSX text node: `Custom`
  - context: `ernoon">Afternoon</SelectItem> <SelectItem value="custom">Custom</SelectItem> </SelectContent> </Sel`
- [352:21] (JSXText) Static JSX text node: `Cancel`
  - context: `ton variant="outline" onClick={() => setIsCreating(false)}> Cancel </Button> <Button onClick={createTemp`
- [355:21] (JSXText) Static JSX text node: `Create Template`
  - context: `Button> <Button onClick={createTemplate}> Create Template </Button> </div>`
- [402:59] (JSXText) Static JSX text node: `more`
  - context: `className="text-xs"> +{template.emotions.length - 2} more </Badge> )}`
- [414:23] (JSXText) Static JSX text node: `Apply Template`
  - context: `className="flex-1 mr-2" > Apply Template </Button>`
- [422:38] (JSXAttribute) Static aria-label attribute: `Edit template`
  - context: `variant="ghost" aria-label="Edit template" title="Edit template"`
- [423:33] (JSXAttribute) Static title attribute: `Edit template`
  - context: `aria-label="Edit template" title="Edit template" onClick={() => setEditingTemplate(temp`
- [431:38] (JSXAttribute) Static aria-label attribute: `Delete template`
  - context: `variant="ghost" aria-label="Delete template" title="Delete template"`
- [432:33] (JSXAttribute) Static title attribute: `Delete template`
  - context: `aria-label="Delete template" title="Delete template" onClick={() => deleteTemplate(templa`
- [449:16] (JSXText) Static JSX text node: `No quick entry templates yet`
  - context: `<Zap className="h-12 w-12 mx-auto mb-3 opacity-50" /> <p>No quick entry templates yet</p> <p className="text-sm">Create templ`
- [450:36] (JSXText) Static JSX text node: `Create templates for common tracking scenarios`
  - context: `<p>No quick entry templates yet</p> <p className="text-sm">Create templates for common tracking scenarios</p> </div> )}`

### src/components/ReportBuilder.tsx

- [474:15] (JSXText) Static JSX text node: `Create Report`
  - context: `nt-dyslexia"> <FileText className="h-4 w-4 mr-2" /> Create Report </Button> </DialogTrigger> <Dialog`

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

- [34:21] (MessageAPI) Message API call: success(): `Old data cleared successfully`
  - context: `=> { try { storageUtils.clearOldTrackingData(30); toast.success('Old data cleared successfully'); refreshStats(); } catch (error) {`
- [34:21] (MessageAPI) sonner toast.success(): `Old data cleared successfully`
  - context: `=> { try { storageUtils.clearOldTrackingData(30); toast.success('Old data cleared successfully'); refreshStats(); } catch (error) {`
- [37:20] (MessageAPI) Message API call: error(): `Failed to clear old tracking data`
  - context: `successfully'); refreshStats(); } catch (error) { logger.error('Failed to clear old tracking data', error); toast.error('Failed to clear`
- [38:19] (MessageAPI) Message API call: error(): `Failed to clear old data`
  - context: `logger.error('Failed to clear old tracking data', error); toast.error('Failed to clear old data'); } }; const handleClearNonEssential = () =>`
- [38:19] (MessageAPI) sonner toast.error(): `Failed to clear old data`
  - context: `logger.error('Failed to clear old tracking data', error); toast.error('Failed to clear old data'); } }; const handleClearNonEssential = () =>`
- [45:21] (MessageAPI) Message API call: success(): `Non-essential data cleared`
  - context: `=> { try { storageUtils.clearNonEssentialData(); toast.success('Non-essential data cleared'); refreshStats(); } catch (error) {`
- [45:21] (MessageAPI) sonner toast.success(): `Non-essential data cleared`
  - context: `=> { try { storageUtils.clearNonEssentialData(); toast.success('Non-essential data cleared'); refreshStats(); } catch (error) {`
- [48:20] (MessageAPI) Message API call: error(): `Failed to clear non-essential data`
  - context: `data cleared'); refreshStats(); } catch (error) { logger.error('Failed to clear non-essential data', error); toast.error('Failed to clear`
- [49:19] (MessageAPI) Message API call: error(): `Failed to clear non-essential data`
  - context: `logger.error('Failed to clear non-essential data', error); toast.error('Failed to clear non-essential data'); } }; /** * Handle clearing al`
- [49:19] (MessageAPI) sonner toast.error(): `Failed to clear non-essential data`
  - context: `logger.error('Failed to clear non-essential data', error); toast.error('Failed to clear non-essential data'); } }; /** * Handle clearing al`
- [61:40] (MessageAPI) Message API call: confirm(): `Are you sure you want to clear ALL data? This cannot be undone!`
  - context: `using a custom modal component try { const confirmed = window.confirm('Are you sure you want to clear ALL data? This cannot be undone!'); if (co`
- [65:25] (MessageAPI) Message API call: success(): `All data cleared`
  - context: `) { try { dataStorage.clearAllData(); toast.success('All data cleared'); // Use window.location.replace for better history`
- [65:25] (MessageAPI) sonner toast.success(): `All data cleared`
  - context: `) { try { dataStorage.clearAllData(); toast.success('All data cleared'); // Use window.location.replace for better history`
- [69:24] (MessageAPI) Message API call: error(): `Failed to clear all data`
  - context: `window.location.replace('/'); } catch (error) { logger.error('Failed to clear all data', error); toast.error('Failed to clear all d`
- [70:23] (MessageAPI) Message API call: error(): `Failed to clear all data`
  - context: `logger.error('Failed to clear all data', error); toast.error('Failed to clear all data'); } } } catch (error) { // Ha`
- [70:23] (MessageAPI) sonner toast.error(): `Failed to clear all data`
  - context: `logger.error('Failed to clear all data', error); toast.error('Failed to clear all data'); } } } catch (error) { // Ha`
- [75:20] (MessageAPI) Message API call: error(): `Confirmation dialog failed`
  - context: `s where confirm might fail (e.g., in some test environments) logger.error('Confirmation dialog failed', error); toast.error('Could not show confirma`
- [76:19] (MessageAPI) Message API call: error(): `Could not show confirmation dialog`
  - context: `nts) logger.error('Confirmation dialog failed', error); toast.error('Could not show confirmation dialog'); } }; const formatBytes = (bytes:`
- [76:19] (MessageAPI) sonner toast.error(): `Could not show confirmation dialog`
  - context: `nts) logger.error('Confirmation dialog failed', error); toast.error('Could not show confirmation dialog'); } }; const formatBytes = (bytes:`
- [95:11] (JSXText) Static JSX text node: `Storage Management`
  - context: `"flex items-center gap-2"> <Database className="h-5 w-5" /> Storage Management </CardTitle> <CardDescription> Mana`
- [98:11] (JSXText) Static JSX text node: `Manage your local storage to ensure smooth operation`
  - context: `Storage Management </CardTitle> <CardDescription> Manage your local storage to ensure smooth operation </CardDescription>`
- [104:44] (JSXText) Static JSX text node: `Storage Usage`
  - context: `{/* Storage Usage */} <div> <h3 className="font-medium mb-2">Storage Usage</h3> <div className="space-y-2"> <div classN`
- [107:21] (JSXText) Static JSX text node: `Used`
  - context: `<div className="flex justify-between text-sm"> <span>Used</span> <span>{formatBytes(storageInfo.used)} / ~5 MB</span>`
- [108:53] (JSXText) Static JSX text node: `/ ~5 MB`
  - context: `<span>Used</span> <span>{formatBytes(storageInfo.used)} / ~5 MB</span> </div> <div className="w-full">`
- [121:44] (JSXText) Static JSX text node: `Data Statistics`
  - context: `{/* Storage Stats */} <div> <h3 className="font-medium mb-2">Data Statistics</h3> <div className="grid grid-cols-2 gap-2 text-sm">`
- [123:18] (JSXText) Static JSX text node: `Students:`
  - context: `h3> <div className="grid grid-cols-2 gap-2 text-sm"> <div>Students: {stats.studentsCount}</div> <div>Entries: {stats.entriesCo`
- [124:18] (JSXText) Static JSX text node: `Entries:`
  - context: `xt-sm"> <div>Students: {stats.studentsCount}</div> <div>Entries: {stats.entriesCount}</div> <div>Goals: {stats.goalsCount}</`
- [125:18] (JSXText) Static JSX text node: `Goals:`
  - context: `nt}</div> <div>Entries: {stats.entriesCount}</div> <div>Goals: {stats.goalsCount}</div> <div>Alerts: {stats.alertsCount}</di`
- [126:18] (JSXText) Static JSX text node: `Alerts:`
  - context: `sCount}</div> <div>Goals: {stats.goalsCount}</div> <div>Alerts: {stats.alertsCount}</div> </div> </div> {/* W`
- [152:13] (JSXText) Static JSX text node: `Clear data older than 30 days`
  - context: `-start" > <Trash2 className="h-4 w-4 mr-2" /> Clear data older than 30 days </Button> <Button`
- [160:13] (JSXText) Static JSX text node: `Clear non-essential data`
  - context: `-start" > <Trash2 className="h-4 w-4 mr-2" /> Clear non-essential data </Button> <Button varia`
- [168:13] (JSXText) Static JSX text node: `Clear ALL data (irreversible)`
  - context: `-start" > <Trash2 className="h-4 w-4 mr-2" /> Clear ALL data (irreversible) </Button> </div> {stora`
- [176:15] (JSXText) Static JSX text node: `Storage is healthy with sufficient space available.`
  - context: `CheckCircle className="h-4 w-4" /> <AlertDescription> Storage is healthy with sufficient space available. </AlertDescripti`

### src/components/StudentProfileSidebar.tsx

- [110:13] (JSXText) Static JSX text node: `Hovedseksjoner`
  - context: `foreground text-xs font-medium uppercase tracking-wider px-3 py-2"> Hovedseksjoner </SidebarGroupLabel> <SidebarGroupContent>`
- [141:13] (JSXText) Static JSX text node: `Verktøy`
  - context: `foreground text-xs font-medium uppercase tracking-wider px-3 py-2"> Verktøy </SidebarGroupLabel> <SidebarGroupContent>`

### src/components/TestingDebugPanel.tsx

- [202:21] (MessageAPI) Message API call: success(): `System tests completed successfully`
  - context: `ilable" }; setTestResults([...results]); toast.success("System tests completed successfully"); } catch (error) { logge`
- [202:21] (MessageAPI) sonner toast.success(): `System tests completed successfully`
  - context: `ilable" }; setTestResults([...results]); toast.success("System tests completed successfully"); } catch (error) { logge`
- [205:20] (MessageAPI) Message API call: error(): `System test error`
  - context: `tests completed successfully"); } catch (error) { logger.error('System test error', { error }); results.push({ name: "Test Error"`
- [212:19] (MessageAPI) Message API call: error(): `Some tests failed`
  - context: `nknown error'}\` }); setTestResults([...results]); toast.error("Some tests failed"); } finally { setIsRunningTests(false); } };`
- [212:19] (MessageAPI) sonner toast.error(): `Some tests failed`
  - context: `nknown error'}\` }); setTestResults([...results]); toast.error("Some tests failed"); } finally { setIsRunningTests(false); } };`
- [241:19] (MessageAPI) Message API call: success(): `Analytics cache cleared successfully`
  - context: `) => { analyticsWorker.clearCache(); uiCache.clear(); toast.success("Analytics cache cleared successfully"); }, [analyticsWorker, uiCache]); co`
- [241:19] (MessageAPI) sonner toast.success(): `Analytics cache cleared successfully`
  - context: `) => { analyticsWorker.clearCache(); uiCache.clear(); toast.success("Analytics cache cleared successfully"); }, [analyticsWorker, uiCache]); co`
- [256:13] (JSXText) Static JSX text node: `System Testing & Debug Panel`
  - context: `="flex items-center gap-2"> <Bug className="h-5 w-5" /> System Testing & Debug Panel </CardTitle> </CardHeader>`
- [262:15] (JSXText) Static JSX text node: `Test current system functionality and data integrity`
  - context: `tween"> <p className="text-sm text-muted-foreground"> Test current system functionality and data integrity </p>`
- [269:26] (JSXAttribute) Static aria-label attribute: `Run system tests`
  - context: `size="sm" variant="outline" aria-label="Run system tests" title="Run system tests" >`
- [270:21] (JSXAttribute) Static title attribute: `Run system tests`
  - context: `riant="outline" aria-label="Run system tests" title="Run system tests" > {isRunningTests ? (`
- [275:54] (JSXText) Static JSX text node: `Running Tests...`
  - context: `w-4 mr-2 animate-spin" /> <span className="hidden sm:inline">Running Tests...</span> </> ) : (`
- [280:54] (JSXText) Static JSX text node: `Run System Tests`
  - context: `lassName="h-4 w-4 mr-2" /> <span className="hidden sm:inline">Run System Tests</span> </> )} </Butto`
- [288:51] (JSXText) Static JSX text node: `Test Results:`
  - context: `<div className="space-y-3"> <h4 className="text-sm font-medium">Test Results:</h4> {testResults.map((result) => (`
- [307:54] (JSXText) Static JSX text node: `Quick Stats:`
  - context: `4 border-t border-border"> <h4 className="text-sm font-medium mb-2">Quick Stats:</h4> <div className="grid grid-cols-3 gap-3 text-center`
- [311:62] (JSXText) Static JSX text node: `Students`
  - context: `ted-foreground" /> <p className="text-xs text-muted-foreground">Students</p> </div> <div> <Database`
- [315:62] (JSXText) Static JSX text node: `Entries`
  - context: `ted-foreground" /> <p className="text-xs text-muted-foreground">Entries</p> </div> <div> <BarChart3`
- [319:62] (JSXText) Static JSX text node: `Analytics`
  - context: `ted-foreground" /> <p className="text-xs text-muted-foreground">Analytics</p> </div> </div> </div> <`
- [331:13] (JSXText) Static JSX text node: `Analytics Cache Management`
  - context: `ex items-center gap-2"> <Archive className="h-5 w-5" /> Analytics Cache Management </CardTitle> </CardHeader>`
- [340:57] (JSXText) Static JSX text node: `Cache Hit Rate`
  - context: `enter justify-between"> <span className="text-sm font-medium">Cache Hit Rate</span> <div className="flex items-center gap-2"`
- [349:69] (JSXText) Static JSX text node: `Cache Size`
  - context: `flex-col"> <span className="text-xs text-muted-foreground">Cache Size</span> <span className="text-lg font-semibold">{c`
- [353:69] (JSXText) Static JSX text node: `Memory Usage`
  - context: `flex-col"> <span className="text-xs text-muted-foreground">Memory Usage</span> <span className="text-lg font-semibold">`
- [364:66] (JSXText) Static JSX text node: `Hits`
  - context: `tats.hits}</p> <p className="text-xs text-muted-foreground">Hits</p> </div> <div className="text-center`
- [369:66] (JSXText) Static JSX text node: `Misses`
  - context: `ts.misses}</p> <p className="text-xs text-muted-foreground">Misses</p> </div> <div className="text-cente`
- [374:66] (JSXText) Static JSX text node: `Sets`
  - context: `tats.sets}</p> <p className="text-xs text-muted-foreground">Sets</p> </div> </div> </div>`
- [381:53] (JSXText) Static JSX text node: `Cache Actions`
  - context: `t border-border space-y-3"> <h4 className="text-sm font-medium">Cache Actions</h4> <div className="flex gap-2">`
- [388:30] (JSXAttribute) Static aria-label attribute: `Clear all analytics cache`
  - context: `leClearCache} className="flex-1" aria-label="Clear all analytics cache" title="Clear all analytics cache"`
- [389:25] (JSXAttribute) Static title attribute: `Clear all analytics cache`
  - context: `aria-label="Clear all analytics cache" title="Clear all analytics cache" > <Trash2 classNam`
- [392:54] (JSXText) Static JSX text node: `Clear All Cache`
  - context: `lassName="h-4 w-4 mr-2" /> <span className="hidden sm:inline">Clear All Cache</span> </Button> <Button`
- [399:30] (JSXAttribute) Static aria-label attribute: `Clean expired cache entries`
  - context: `he.cleanup()} className="flex-1" aria-label="Clean expired cache entries" title="Clean expired cache entri`
- [400:25] (JSXAttribute) Static title attribute: `Clean expired cache entries`
  - context: `aria-label="Clean expired cache entries" title="Clean expired cache entries" > <RefreshCw cla`
- [403:54] (JSXText) Static JSX text node: `Clean Expired`
  - context: `lassName="h-4 w-4 mr-2" /> <span className="hidden sm:inline">Clean Expired</span> </Button> </div>`
- [408:22] (JSXText) Static JSX text node: `• Cache TTL: 5 minutes`
  - context: `<div className="text-xs text-muted-foreground"> <p>• Cache TTL: 5 minutes</p> <p>• Eviction: LRU (Least Recently`
- [409:22] (JSXText) Static JSX text node: `• Eviction: LRU (Least Recently Used)`
  - context: `reground"> <p>• Cache TTL: 5 minutes</p> <p>• Eviction: LRU (Least Recently Used)</p> <p>• Invalidations:`
- [410:22] (JSXText) Static JSX text node: `• Invalidations:`
  - context: `<p>• Eviction: LRU (Least Recently Used)</p> <p>• Invalidations: {cacheStats.invalidations || 0}</p> </div>`

### src/components/TestingToolsSection.tsx

- [20:44] (JSXText) Static JSX text node: `Testing & Development Tools`
  - context: `v className="space-y-6"> <div> <h2 className="text-2xl font-bold">Testing & Development Tools</h2> <p className="text-muted-foreground">`
- [22:11] (JSXText) Static JSX text node: `Tools for testing pattern analysis features and debugging data issues`
  - context: `Development Tools</h2> <p className="text-muted-foreground"> Tools for testing pattern analysis features and debugging data issues </`
- [32:15] (JSXText) Static JSX text node: `Mock Data Generator`
  - context: `p-2"> <Database className="h-5 w-5 text-primary" /> Mock Data Generator </CardTitle> </CardHeader> <`
- [37:15] (JSXText) Static JSX text node: `Load realistic test data to explore pattern analysis features`
  - context: `t> <p className="text-sm text-muted-foreground mb-4"> Load realistic test data to explore pattern analysis features </p>`
- [43:19] (JSXText) Static JSX text node: `Load Mock Data`
  - context: `-90"> <Database className="h-4 w-4 mr-2" /> Load Mock Data </Button> </DialogTrigger>`
- [48:32] (JSXText) Static JSX text node: `Mock Data for Testing & Analysis`
  - context: `overflow-y-auto"> <DialogHeader> <DialogTitle>Mock Data for Testing & Analysis</DialogTitle> <DialogDescript`
- [50:21] (JSXText) Static JSX text node: `Load realistic sample students and entries to explore features safely.`
  - context: `nalysis</DialogTitle> <DialogDescription> Load realistic sample students and entries to explore features safely.`
- [64:15] (JSXText) Static JSX text node: `Debug Panel`
  - context: `er gap-2"> <Bug className="h-5 w-5 text-primary" /> Debug Panel </CardTitle> </CardHeader> <CardCont`
- [69:15] (JSXText) Static JSX text node: `Advanced debugging and data inspection tools`
  - context: `t> <p className="text-sm text-muted-foreground mb-4"> Advanced debugging and data inspection tools </p> <Dialo`
- [75:19] (JSXText) Static JSX text node: `Open Debug Panel`
  - context: `="w-full"> <Bug className="h-4 w-4 mr-2" /> Open Debug Panel </Button> </DialogTrigger>`
- [80:32] (JSXText) Static JSX text node: `Debug & Data Inspection`
  - context: `overflow-y-auto"> <DialogHeader> <DialogTitle>Debug & Data Inspection</DialogTitle> <DialogDescription>`
- [82:21] (JSXText) Static JSX text node: `Advanced debugging tools for inspecting state, storage, and analytics.`
  - context: `pection</DialogTitle> <DialogDescription> Advanced debugging tools for inspecting state, storage, and analytics.`
- [96:15] (JSXText) Static JSX text node: `Pattern Analysis Testing Guide`
  - context: `gap-2"> <Beaker className="h-5 w-5 text-primary" /> Pattern Analysis Testing Guide </CardTitle> </CardHeader>`
- [102:17] (JSXText) Static JSX text node: `To test pattern analysis features effectively:`
  - context: `4"> <p className="text-sm text-muted-foreground"> To test pattern analysis features effectively: </p>`
- [106:60] (JSXText) Static JSX text node: `Data Requirements:`
  - context: `<div> <h4 className="font-medium text-sm mb-2">Data Requirements:</h4> <ul className="text-xs text-muted-fore`
- [108:25] (JSXText) Static JSX text node: `• At least 10 tracking entries for basic patterns`
  - context: `ul className="text-xs text-muted-foreground space-y-1"> <li>• At least 10 tracking entries for basic patterns</li> <li>•`
- [109:25] (JSXText) Static JSX text node: `• 30+ entries for correlation analysis`
  - context: `>• At least 10 tracking entries for basic patterns</li> <li>• 30+ entries for correlation analysis</li> <li>• 90+ entrie`
- [110:25] (JSXText) Static JSX text node: `• 90+ entries for predictive insights`
  - context: `<li>• 30+ entries for correlation analysis</li> <li>• 90+ entries for predictive insights</li> <li>• Multiple st`
- [111:25] (JSXText) Static JSX text node: `• Multiple students for comparative analysis`
  - context: `<li>• 90+ entries for predictive insights</li> <li>• Multiple students for comparative analysis</li> </ul>`
- [115:60] (JSXText) Static JSX text node: `Features to Test:`
  - context: `<div> <h4 className="font-medium text-sm mb-2">Features to Test:</h4> <ul className="text-xs text-muted-foreg`
- [117:25] (JSXText) Static JSX text node: `• Emotion trend analysis`
  - context: `ul className="text-xs text-muted-foreground space-y-1"> <li>• Emotion trend analysis</li> <li>• Sensory correlation matr`
- [118:25] (JSXText) Static JSX text node: `• Sensory correlation matrices`
  - context: `> <li>• Emotion trend analysis</li> <li>• Sensory correlation matrices</li> <li>• Environmental impa`
- [119:25] (JSXText) Static JSX text node: `• Environmental impact patterns`
  - context: `<li>• Sensory correlation matrices</li> <li>• Environmental impact patterns</li> <li>• Anomaly detection`
- [120:25] (JSXText) Static JSX text node: `• Anomaly detection alerts`
  - context: `<li>• Environmental impact patterns</li> <li>• Anomaly detection alerts</li> </ul> </div>`

### src/components/TimelineVisualization.tsx

- [536:13] (JSXText) Static JSX text node: `Timeline Visualization`
  - context: `flex items-center gap-2"> <Clock className="h-5 w-5" /> Timeline Visualization </CardTitle> <div className="flex ite`
- [541:17] (JSXText) Static JSX text node: `Live`
  - context: `<Badge variant="default" className="animate-pulse"> Live </Badge> )} <Button siz`
- [547:26] (JSXAttribute) Static aria-label attribute: `Reset view`
  - context: `size="icon" variant="ghost" aria-label="Reset view" title="Reset view" onClick={() => {`
- [548:21] (JSXAttribute) Static title attribute: `Reset view`
  - context: `variant="ghost" aria-label="Reset view" title="Reset view" onClick={() => { setZoomLevel(1);`
- [569:28] (JSXAttribute) Static aria-label attribute: `Zoom out`
  - context: `size="icon" variant="ghost" aria-label="Zoom out" title="Zoom out" onClick={() => handl`
- [570:23] (JSXAttribute) Static title attribute: `Zoom out`
  - context: `variant="ghost" aria-label="Zoom out" title="Zoom out" onClick={() => handleZoom(-0.5)} disa`
- [582:28] (JSXAttribute) Static aria-label attribute: `Zoom in`
  - context: `size="icon" variant="ghost" aria-label="Zoom in" title="Zoom in" onClick={() => handleZ`
- [583:23] (JSXAttribute) Static title attribute: `Zoom in`
  - context: `variant="ghost" aria-label="Zoom in" title="Zoom in" onClick={() => handleZoom(0.5)} disabl`
- [596:28] (JSXAttribute) Static aria-label attribute: `Pan left`
  - context: `size="icon" variant="ghost" aria-label="Pan left" title="Pan left" onClick={() => handl`
- [597:23] (JSXAttribute) Static title attribute: `Pan left`
  - context: `variant="ghost" aria-label="Pan left" title="Pan left" onClick={() => handlePan(50)} >`
- [605:28] (JSXAttribute) Static aria-label attribute: `Pan right`
  - context: `size="icon" variant="ghost" aria-label="Pan right" title="Pan right" onClick={() => han`
- [606:23] (JSXAttribute) Static title attribute: `Pan right`
  - context: `variant="ghost" aria-label="Pan right" title="Pan right" onClick={() => handlePan(-50)} >`
- [633:32] (JSXText) Static JSX text node: `x`
  - context: `<span className="text-sm text-muted-foreground"> {playbackSpeed}x </span> </div> {/* Stream visibility to`
- [647:17] (JSXText) Static JSX text node: `Emotions`
  - context: `> <Brain className="h-4 w-4 mr-1" /> Emotions </Toggle> <Toggle size="sm"`
- [657:17] (JSXText) Static JSX text node: `Sensory`
  - context: `> <Eye className="h-4 w-4 mr-1" /> Sensory </Toggle> <Toggle size="sm"`
- [667:17] (JSXText) Static JSX text node: `Anomalies`
  - context: `> <AlertCircle className="h-4 w-4 mr-1" /> Anomalies </Toggle> </div> </div>`
- [676:65] (JSXText) Static JSX text node: `minutes`
  - context: `="font-medium"> {differenceInMinutes(timeRange[1], timeRange[0])} minutes </span> <span>{format(timeRange[1], 'MMM dd, yyy`
- [756:54] (JSXText) Static JSX text node: `Data Streams`
  - context: `rounded-lg p-3 shadow-lg"> <h4 className="font-medium text-sm mb-2">Data Streams</h4> <div className="space-y-1"> {dataStr`
- [773:18] (JSXText) Static JSX text node: `Events:`
  - context: `-3 shadow-lg"> <div className="text-xs space-y-1"> <p>Events: {timelineEvents.length}</p> <p>Zoom: {Math.round(zoomLevel`
- [774:18] (JSXText) Static JSX text node: `Zoom:`
  - context: `ace-y-1"> <p>Events: {timelineEvents.length}</p> <p>Zoom: {Math.round(zoomLevel * 100)}%</p> {brushSelection && (`
- [776:20] (JSXText) Static JSX text node: `Selection:`
  - context: `nd(zoomLevel * 100)}%</p> {brushSelection && ( <p>Selection: {differenceInMinutes(brushSelection[1], brushSelection[0])} min</p>`
- [776:91] (JSXText) Static JSX text node: `min`
  - context: `<p>Selection: {differenceInMinutes(brushSelection[1], brushSelection[0])} min</p> )} </div> </div> </div>`

### src/components/UniversalAnalyticsStatus.tsx

- [46:20] (MessageAPI) Message API call: error(): `Error loading analytics status`
  - context: `tStatuses: analyticsStatuses }); } catch (error) { logger.error('Error loading analytics status', { error }); } }; const handleRefresh`
- [56:20] (MessageAPI) Message API call: error(): `Error refreshing analytics`
  - context: `alization(); await loadStatus(); } catch (error) { logger.error('Error refreshing analytics', { error }); } finally { setIsRefreshing(`
- [76:58] (JSXText) Static JSX text node: `Loading analytics status...`
  - context: `border-primary"></div> <span className="ml-2 text-muted-foreground">Loading analytics status...</span> </div> </CardContent>`
- [92:13] (JSXText) Static JSX text node: `Universal Analytics Status`
  - context: `flex items-center gap-2"> <Users className="h-5 w-5" /> Universal Analytics Status </CardTitle> <Button`
- [97:24] (JSXAttribute) Static aria-label attribute: `Refresh analytics status`
  - context: `tton variant="ghost" size="icon" aria-label="Refresh analytics status" title="Refresh analytics status"`
- [98:19] (JSXAttribute) Static title attribute: `Refresh analytics status`
  - context: `size="icon" aria-label="Refresh analytics status" title="Refresh analytics status" onClick={handleRefresh} disab`
- [118:15] (JSXText) Static JSX text node: `System Status`
  - context: `ing" /> )} <span className="font-medium"> System Status </span> </div> <Badge variant={all`
- [133:15] (JSXText) Static JSX text node: `Students with Analytics`
  - context: `/div> <div className="text-sm text-muted-foreground"> Students with Analytics </div> </div>`
- [142:15] (JSXText) Static JSX text node: `Students with Data`
  - context: `/div> <div className="text-sm text-muted-foreground"> Students with Data </div> </div> </div> {`
- [150:71] (JSXText) Static JSX text node: `Student Details:`
  - context: `ace-y-2"> <h4 className="font-medium text-sm text-muted-foreground">Student Details:</h4> {status.studentStatuses.map(student => (`
- [162:21] (JSXText) Static JSX text node: `Health:`
  - context: `<Badge variant="outline" className="text-xs"> Health: {student.healthScore}% </Badge> {stu`
- [166:23] (JSXText) Static JSX text node: `Pattern Detection Active`
  - context: `<Badge variant="default" className="text-xs"> Pattern Detection Active </Badge> )}`
- [181:17] (JSXText) Static JSX text node: `✨ Universal pattern detection is active for all students!`
  - context: `-4 w-4" /> <span className="text-sm font-medium"> ✨ Universal pattern detection is active for all students! </span>`
- [191:15] (JSXText) Static JSX text node: `Add your first student to see universal analytics in action. Pattern detection will start immediately!`
  - context: `d-lg"> <div className="text-info-foreground text-sm"> Add your first student to see universal analytics in action. Pattern detection w`

### src/components/Visualization3D.tsx

- [57:13] (JSXText) Static JSX text node: `×`
  - context: `ground transition-colors motion-reduce:transition-none" > × </button> </div> <p className="font-medium">{point.l`
- [62:14] (JSXText) Static JSX text node: `X:`
  - context: `<div className="text-sm text-muted-foreground mt-1 space-y-1"> <p>X: {point.x.toFixed(2)}</p> <p>Y: {point.y.toFixed(2)}</p> <`
- [63:14] (JSXText) Static JSX text node: `Y:`
  - context: `reground mt-1 space-y-1"> <p>X: {point.x.toFixed(2)}</p> <p>Y: {point.y.toFixed(2)}</p> <p>Z: {point.z.toFixed(2)}</p> {`
- [64:14] (JSXText) Static JSX text node: `Z:`
  - context: `{point.x.toFixed(2)}</p> <p>Y: {point.y.toFixed(2)}</p> <p>Z: {point.z.toFixed(2)}</p> {point.intensity && <p>Intensity: {point.i`
- [65:34] (JSXText) Static JSX text node: `Intensity:`
  - context: `}</p> <p>Z: {point.z.toFixed(2)}</p> {point.intensity && <p>Intensity: {point.intensity}</p>} </div> </div> </Html> ); }`
- [346:11] (JSXText) Static JSX text node: `3D Correlation Visualization`
  - context: `Name="flex items-center gap-2"> <Eye className="h-5 w-5" /> 3D Correlation Visualization </CardTitle> </CardHeader> <Car`
- [354:65] (JSXText) Static JSX text node: `X Axis`
  - context: `<div> <label className="text-sm font-medium mb-1 block">X Axis</label> <Select value={xAxis} onValueChange={setXAxis}>`
- [370:65] (JSXText) Static JSX text node: `Y Axis`
  - context: `<div> <label className="text-sm font-medium mb-1 block">Y Axis</label> <Select value={yAxis} onValueChange={setYAxis}>`
- [386:65] (JSXText) Static JSX text node: `Z Axis`
  - context: `<div> <label className="text-sm font-medium mb-1 block">Z Axis</label> <Select value={zAxis} onValueChange={setZAxis}>`
- [404:65] (JSXText) Static JSX text node: `Color By`
  - context: `<div> <label className="text-sm font-medium mb-1 block">Color By</label> <Select value={colorBy} onValueChange={setColorBy`
- [410:48] (JSXText) Static JSX text node: `Category`
  - context: `<SelectContent> <SelectItem value="category">Category</SelectItem> <SelectItem value="intensity">Intensity<`
- [411:49] (JSXText) Static JSX text node: `Intensity`
  - context: `category">Category</SelectItem> <SelectItem value="intensity">Intensity</SelectItem> </SelectContent> </Select>`
- [417:65] (JSXText) Static JSX text node: `Filter Category`
  - context: `<div> <label className="text-sm font-medium mb-1 block">Filter Category</label> <Select value={filterCategory} onValueChan`
- [423:43] (JSXText) Static JSX text node: `All`
  - context: `gger> <SelectContent> <SelectItem value="all">All</SelectItem> <SelectItem value="emotion">Emotions</SelectI`
- [424:47] (JSXText) Static JSX text node: `Emotions`
  - context: `Item value="all">All</SelectItem> <SelectItem value="emotion">Emotions</SelectItem> <SelectItem value="sensory">Sensory</Sel`
- [425:47] (JSXText) Static JSX text node: `Sensory`
  - context: `e="emotion">Emotions</SelectItem> <SelectItem value="sensory">Sensory</SelectItem> <SelectItem value="environmental">Environ`
- [426:53] (JSXText) Static JSX text node: `Environmental`
  - context: `nsory">Sensory</SelectItem> <SelectItem value="environmental">Environmental</SelectItem> </SelectContent> </Sele`
- [433:17] (JSXText) Static JSX text node: `Point Size:`
  - context: `<label className="text-sm font-medium mb-1 block"> Point Size: {pointSize.toFixed(2)} </label> <Slider`
- [451:15] (JSXText) Static JSX text node: `Reduced motion enabled`
  - context: `text-amber-800 dark:text-amber-200 px-3 py-1 rounded-md text-sm"> Reduced motion enabled </div> )} cCanvas`
- [454:11] (JSXText) Static JSX text node: `cCanvas
            camera=`
  - context: `Reduced motion enabled </div> )} cCanvas camera={{ position: [10, 10, 10], fov: 50 }} cl`
- [456:13] (JSXText) Static JSX text node: `className="w-full h-full"
            onCreated=`
  - context: `cCanvas camera={{ position: [10, 10, 10], fov: 50 }} className="w-full h-full" onCreated={({ gl }) => { con`
- [468:11] (JSXText) Static JSX text node: `e`
  - context: `.addEventListener('webglcontextrestored', onRestored); }} e <ambientLight intensity={0.5} /> <pointLight position`
- [532:54] (JSXText) Static JSX text node: `Legend`
  - context: `rounded-lg p-3 shadow-lg"> <h4 className="font-medium text-sm mb-2">Legend</h4> <div className="space-y-1"> {colorBy === '`
- [538:47] (JSXText) Static JSX text node: `Emotions`
  - context: `h-3 rounded-full bg-[#10B981]" /> <span className="text-xs">Emotions</span> </div> <div className="flex`
- [542:47] (JSXText) Static JSX text node: `Sensory`
  - context: `h-3 rounded-full bg-[#3B82F6]" /> <span className="text-xs">Sensory</span> </div> <div className="flex i`
- [546:47] (JSXText) Static JSX text node: `Environmental`
  - context: `h-3 rounded-full bg-[#F59E0B]" /> <span className="text-xs">Environmental</span> </div> </>`
- [553:45] (JSXText) Static JSX text node: `Low → High`
  - context: `a-yellow-500 to-red-500 rounded" /> <span className="text-xs">Low → High</span> </div> )} </div>`
- [561:18] (JSXText) Static JSX text node: `Points:`
  - context: `-3 shadow-lg"> <div className="text-xs space-y-1"> <p>Points: {filteredPoints.length}</p> <p>Total Sessions: {trackingEn`
- [562:18] (JSXText) Static JSX text node: `Total Sessions:`
  - context: `ace-y-1"> <p>Points: {filteredPoints.length}</p> <p>Total Sessions: {trackingEntries.length}</p> </div> </div>`

### src/components/VisualizationControls.tsx

- [102:11] (JSXText) Static JSX text node: `Interactive Data Analysis -`
  - context: `"flex items-center gap-2"> <Activity className="h-5 w-5" /> Interactive Data Analysis - {studentName} {filterCriteria.realtime &&`
- [106:15] (JSXText) Static JSX text node: `Live`
  - context: `mate-pulse ml-2"> <Wifi className="h-3 w-3 mr-1" /> Live </Badge> )} </CardTitle> <div classNa`
- [110:61] (JSXAttribute) Static aria-label attribute: `Visualization controls`
  - context: `</CardTitle> <div className="flex items-center gap-2" aria-label="Visualization controls"> {/* Guided question chips */} <div`
- [147:62] (JSXAttribute) Static aria-label attribute: `Open filters panel`
  - context: `etTrigger asChild> <Button variant="outline" size="sm" aria-label="Open filters panel" title="Open filters panel"> <Filter classNa`
- [147:89] (JSXAttribute) Static title attribute: `Open filters panel`
  - context: `<Button variant="outline" size="sm" aria-label="Open filters panel" title="Open filters panel"> <Filter className="h-4 w-4 mr-2" />`
- [149:17] (JSXText) Static JSX text node: `Filters`
  - context: `ers panel"> <Filter className="h-4 w-4 mr-2" /> Filters {Object.keys(filterCriteria).filter(k =>`
- [168:21] (JSXText) Static JSX text node: `Active`
  - context: `<Badge variant="default" className="ml-1"> Active </Badge> )} </Button>`
- [175:29] (JSXText) Static JSX text node: `Advanced Filters`
  - context: `-[400px] sm:w-[540px]"> <SheetHeader> <SheetTitle>Advanced Filters</SheetTitle> <SheetDescription>`
- [177:19] (JSXText) Static JSX text node: `Configure multi-dimensional filters for your data analysis`
  - context: `anced Filters</SheetTitle> <SheetDescription> Configure multi-dimensional filters for your data analysis </She`
- [196:28] (JSXAttribute) Static aria-label attribute: `Select layout mode`
  - context: `variant="outline" size="sm" aria-label="Select layout mode" title="Select layout mode"`
- [197:23] (JSXAttribute) Static title attribute: `Select layout mode`
  - context: `size="sm" aria-label="Select layout mode" title="Select layout mode" data-testid="layout-mode-trigger"`
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
  - context: `</div> <div className="flex items-center gap-2 mt-8" aria-label="Data counts"> <Badge variant="outline" className="bg-success/10 tex`
- [359:46] (JSXText) Static JSX text node: `emotions`
  - context: `0 text-success border-success/20"> {filteredData.emotions.length} emotions </Badge> <Badge variant="outline" className="bg`
- [362:51] (JSXText) Static JSX text node: `sensory inputs`
  - context: `10 text-info border-info/20"> {filteredData.sensoryInputs.length} sensory inputs </Badge> <Badge variant="outline" classNa`
- [365:53] (JSXText) Static JSX text node: `sessions`
  - context: `primary border-primary/20"> {filteredData.trackingEntries.length} sessions </Badge> {filterCriteria.realtime && (`
- [369:45] (JSXText) Static JSX text node: `new`
  - context: `arning/80 text-warning-foreground"> {realtimeData.newDataCount} new </Badge> )} </div> </div>`

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
  - context: `-destructive/30'; }; if (isAnalyzing) { return ( <div aria-label="Loading chart data" className="h-[400px] w-full"> <div className="h-ful`
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

### src/components/analysis/TeacherInsightsPanel.tsx

- [33:54] (JSXText) Static JSX text node: `n/a`
  - context: `oBadge = (p?: number) => { if (!p && p !== 0) return <Badge variant="outline">n/a</Badge>; const pct = Math.round(p * 100); const variant = p >= 0.7 ? 'de`
- [64:11] (JSXText) Static JSX text node: `Insights for`
  - context: `flex items-center gap-2"> <Lightbulb className="h-5 w-5" /> Insights for {student.name} </CardTitle> </CardHeader> <Card`
- [71:13] (JSXText) Static JSX text node: `You’re viewing:`
  - context: `eset && ( <div className="text-sm text-muted-foreground"> You’re viewing: <span className="font-medium">{activePreset.replaceAll('_',' ')}`
- [77:13] (JSXText) Static JSX text node: `Limited data — results may change as more sessions are recorded. Try tracking for at least 7 days and 10 sessions for stronger findings.`
  - context: `&& ( <div className="p-3 rounded-lg bg-muted/40 text-sm"> Limited data — results may change as more sessions are recorded. Try tracking fo`
- [86:17] (JSXText) Static JSX text node: `Pattern detected`
  - context: `nter gap-2"> <TrendingUp className="h-4 w-4" /> Pattern detected </div> {scoreToBadge(topPattern.con`
- [96:42] (JSXText) Static JSX text node: `Correlation`
  - context: `div className="p-3 rounded-lg border"> <div className="font-medium">Correlation</div> <div className="text-sm mt-1">{topCorr.factor1} ↔`
- [97:61] (JSXText) Static JSX text node: `↔`
  - context: `">Correlation</div> <div className="text-sm mt-1">{topCorr.factor1} ↔ {topCorr.factor2}</div> <div className="text-xs text-muted-foregro`
- [98:60] (JSXText) Static JSX text node: `r =`
  - context: `pCorr.factor2}</div> <div className="text-xs text-muted-foreground">r = {topCorr.correlation.toFixed(2)} ({topCorr.significance})</div> </`
- [105:68] (JSXText) Static JSX text node: `Recent Anomaly`
  - context: `ont-medium"> <AlertTriangle className="h-4 w-4 text-amber-600" /> Recent Anomaly </div> <div className="text-sm mt-1">{ano`
- [112:105] (JSXText) Static JSX text node: `Create Goal`
  - context: `t="outline" size="sm" onClick={onCreateGoal}><Target className="h-4 w-4 mr-1" />Create Goal</Button> <Button variant="outline" size="sm" onClick={onAd`
- [113:75] (JSXText) Static JSX text node: `Add Intervention`
  - context: `tton> <Button variant="outline" size="sm" onClick={onAddIntervention}>Add Intervention</Button> <Button variant="outline" size="sm" onClick=`
- [114:73] (JSXText) Static JSX text node: `Schedule Break`
  - context: `Button> <Button variant="outline" size="sm" onClick={onScheduleBreak}>Schedule Break</Button> <Button variant="outline" size="sm" onClick={o`
- [115:74] (JSXText) Static JSX text node: `Track Now`
  - context: `utton> <Button variant="outline" size="sm" onClick={onJumpToTracking}>Track Now</Button> </div> <div className="text-xs text-muted-fo`
- [119:11] (JSXText) Static JSX text node: `Data:`
  - context: `</div> <div className="text-xs text-muted-foreground pt-2"> Data: {sessions} sessions, {emotions} emotions </div> </CardConten`
- [119:28] (JSXText) Static JSX text node: `sessions,`
  - context: `<div className="text-xs text-muted-foreground pt-2"> Data: {sessions} sessions, {emotions} emotions </div> </CardContent> </Card>`
- [119:49] (JSXText) Static JSX text node: `emotions`
  - context: `xs text-muted-foreground pt-2"> Data: {sessions} sessions, {emotions} emotions </div> </CardContent> </Card> ); };`

### src/components/analytics-panels/CorrelationsPanel.tsx

- [94:49] (JSXText) Static JSX text node: `↔`
  - context: `="font-medium text-foreground"> {correlation.factor1} ↔ {correlation.factor2} </h4> <p`

### src/components/analytics-panels/PatternsPanel.tsx

- [137:68] (JSXText) Static JSX text node: `•`
  - context: `tart gap-2"> <span className="text-primary">•</span> <span>{rec}</span>`

### src/components/charts/EChartContainer.tsx

- [370:22] (MessageAPI) Message API call: error(): `[EChartContainer] Option normalization failed`
  - context: `tion; } catch (e) { if (import.meta?.env?.DEV) { logger.error("[EChartContainer] Option normalization failed", { error: e }); } re`
- [441:22] (MessageAPI) Message API call: error(): `[EChartContainer] Theme merge failed`
  - context: `tion; } catch (e) { if (import.meta?.env?.DEV) { logger.error("[EChartContainer] Theme merge failed", { error: e, optionP`

### src/components/charts/TrendsChart.tsx

- [34:16] (JSXText) Static JSX text node: `No data available for selected time range`
  - context: `<Activity className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>No data available for selected time range</p> <p className="text-xs`
- [35:41] (JSXText) Static JSX text node: `Try expanding the time range or adjusting filters`
  - context: `a available for selected time range</p> <p className="text-xs mt-1">Try expanding the time range or adjusting filters</p> </div> <`
- [81:18] (MessageAPI) Message API call: error(): `TrendsChart.renderChart failed`
  - context: `le: 'Emotion & Sensory Trends' }} />; } catch (error) { logger.error("TrendsChart.renderChart failed", { error }); return ( <div className=`
- [86:14] (JSXText) Static JSX text node: `Could not render chart`
  - context: `<Activity className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>Could not render chart</p> <p className="text-xs mt-1">An internal err`
- [87:39] (JSXText) Static JSX text node: `An internal error occurred while building the chart`
  - context: `> <p>Could not render chart</p> <p className="text-xs mt-1">An internal error occurred while building the chart</p> </div> </d`

### src/components/dev/ModelDiagnosticsPanel.tsx

- [176:20] (MessageAPI) Message API call: error(): `[ModelDiagnosticsPanel] Failed to run time-series CV`
  - context: `tf.dispose([features, labels]); } catch (error) { logger.error('[ModelDiagnosticsPanel] Failed to run time-series CV', error); announce(t`
- [215:30] (JSXAttribute) Static aria-labelledby attribute: `model-diagnostics-heading`
  - context: `st itemHeight = 56; // px per item row return ( <section aria-labelledby="model-diagnostics-heading" role="region" className={props.className}> <a`

### src/components/layouts/DashboardLayout.tsx

- [41:64] (JSXAttribute) Static aria-label attribute: `Visualization tabs`
  - context: `ssName="w-full"> <TabsList className="grid w-full grid-cols-5" aria-label="Visualization tabs"> <TabsTrigger value="trends" className="flex items-`
- [44:11] (JSXText) Static JSX text node: `Trends`
  - context: `lex items-center gap-2"> <TrendingUp className="h-4 w-4" /> Trends </TabsTrigger> <TabsTrigger value="correlations" classNam`
- [48:11] (JSXText) Static JSX text node: `Correlations`
  - context: `e="flex items-center gap-2"> <Target className="h-4 w-4" /> Correlations </TabsTrigger> <TabsTrigger value="patterns" classN`
- [52:11] (JSXText) Static JSX text node: `Patterns`
  - context: `Name="flex items-center gap-2"> <Zap className="h-4 w-4" /> Patterns </TabsTrigger> {!POC_MODE && ( <TabsTrigger v`
- [57:13] (JSXText) Static JSX text node: `3D View`
  - context: `="flex items-center gap-2"> <Eye className="h-4 w-4" /> 3D View </TabsTrigger> )} <TabsTrigger value="timeline`
- [62:11] (JSXText) Static JSX text node: `Timeline`
  - context: `me="flex items-center gap-2"> <Clock className="h-4 w-4" /> Timeline </TabsTrigger> </TabsList> <TabsContent value="tre`
- [73:76] (JSXText) Static JSX text node: `Avg Emotion Intensity`
  - context: `div> <p className="text-sm font-medium text-muted-foreground">Avg Emotion Intensity</p> <p className="text-2xl font-bold">`
- [89:76] (JSXText) Static JSX text node: `Positive Emotion Rate`
  - context: `div> <p className="text-sm font-medium text-muted-foreground">Positive Emotion Rate</p> <p className="text-2xl font-bold">`
- [107:76] (JSXText) Static JSX text node: `Sensory Seeking Rate`
  - context: `div> <p className="text-sm font-medium text-muted-foreground">Sensory Seeking Rate</p> <p className="text-2xl font-bold">`
- [129:26] (JSXText) Static JSX text node: `Significant Correlations`
  - context: `gth > 0 && ( <Card> <CardHeader> <CardTitle>Significant Correlations</CardTitle> </CardHeader> <Card`
- [137:107] (JSXText) Static JSX text node: `↔`
  - context: `air.factor1.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} ↔{' '} {pair.factor2.replace(/([A-Z])/g, ' $1').replace(`
- [141:74] (JSXText) Static JSX text node: `correlation (r =`
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
- [89:24] (MessageAPI) Message API call: error(): `[LazyInteractiveDataVisualization] Minimal fallback failed, attempting debug`
  - context: `d = true; resolve(res); } catch (e1) { logger.error('[LazyInteractiveDataVisualization] Minimal fallback failed, attempting debug',`
- [118:26] (MessageAPI) Message API call: error(): `[LazyInteractiveDataVisualization] Minimal version failed`
  - context: `r); resolve(res); } catch (e1) { logger.error('[LazyInteractiveDataVisualization] Minimal version failed', e1); tr`
- [127:28] (MessageAPI) Message API call: error(): `[LazyInteractiveDataVisualization] All versions failed`
  - context: `settled = true; clearTimeout(timer); logger.error('[LazyInteractiveDataVisualization] All versions failed', e2); rej`

### src/components/lazy/LazyLoadWrapper.tsx

- [21:56] (JSXText) Static JSX text node: `Loading component...`
  - context: `to mb-4 text-primary" /> <p className="text-sm text-muted-foreground">Loading component...</p> </div> </div> <div className="space`
- [37:53] (JSXText) Static JSX text node: `Failed to load component`
  - context: `iv className="text-center"> <p className="text-destructive font-medium">Failed to load component</p> <p className="text-sm text-muted-foreground`
- [39:11] (JSXText) Static JSX text node: `Please refresh the page or try again later.`
  - context: `ponent</p> <p className="text-sm text-muted-foreground mt-2"> Please refresh the page or try again later. </p> </div> </Card`
- [81:18] (MessageAPI) Message API call: error(): `LazyLoadWrapper Error:`
  - context: `componentDidCatch(error: Error, errorInfo: React.ErrorInfo) { logger.error('LazyLoadWrapper Error:', error, errorInfo); } render() { if (this.stat`

### src/components/lazy/LazyReportBuilder.tsx

- [11:9] (JSXText) Static JSX text node: `Loading Report Builder...`
  - context: `s-center gap-2"> <FileText className="h-5 w-5 animate-pulse" /> Loading Report Builder... </CardTitle> </CardHeader> <CardContent`

### src/components/lazy/LazyVisualization3D.tsx

- [27:9] (JSXText) Static JSX text node: `3D Correlation Visualization`
  - context: `lassName="flex items-center gap-2"> <Eye className="h-5 w-5" /> 3D Correlation Visualization </CardTitle> </CardHeader> <CardConte`
- [52:58] (JSXText) Static JSX text node: `Loading 3D visualization...`
  - context: `d-full mx-auto"></div> <p className="text-sm text-muted-foreground">Loading 3D visualization...</p> </div> </div> </div>`

### src/components/optimized/OptimizedAnalyticsDashboard.tsx

- [145:20] (MessageAPI) Message API call: error(): `[OptimizedAnalyticsDashboard] Demo seed failed`
  - context: `d); runAnalysis(normalizedData); } catch (error) { logger.error('[OptimizedAnalyticsDashboard] Demo seed failed', { error }); toast.error(`
- [181:20] (MessageAPI) Message API call: error(): `[OptimizedAnalyticsDashboard] Export failed`
  - context: `String(tAnalytics('export.success'))); } catch (error) { logger.error('[OptimizedAnalyticsDashboard] Export failed', { error }); toast.error(Str`
- [209:17] (MessageAPI) Message API call: info(): `[OptimizedAnalyticsDashboard] Tab changed`
  - context: `back((value: string) => { // Track tab change for analytics logger.info('[OptimizedAnalyticsDashboard] Tab changed', { tab: value }); }, []); // Me`
- [325:44] (JSXText) Static JSX text node: `No patterns detected yet.`
  - context: `y-4"> {patterns.length === 0 ? ( <p className="text-muted-foreground">No patterns detected yet.</p> ) : ( patterns.map((pattern, index) => (`
- [339:44] (JSXText) Static JSX text node: `No correlations found.`
  - context: `> {correlations.length === 0 ? ( <p className="text-muted-foreground">No correlations found.</p> ) : ( correlations.map((correlation, index)`
- [353:44] (JSXText) Static JSX text node: `No insights available.`
  - context: `y-4"> {insights.length === 0 ? ( <p className="text-muted-foreground">No insights available.</p> ) : ( insights.map((insight, index) => (`
- [367:44] (JSXText) Static JSX text node: `No predictions available.`
  - context: `"> {predictions.length === 0 ? ( <p className="text-muted-foreground">No predictions available.</p> ) : ( predictions.map((prediction, index`

### src/components/optimized/OptimizedCorrelationHeatmap.tsx

- [110:46] (JSXText) Static JSX text node: `No correlation data available`
  - context: `flex items-center justify-center"> <p className="text-muted-foreground">No correlation data available</p> </div> ); } return ( <div c`

### src/components/optimized/OptimizedDataRequirementsCalculator.tsx

- [235:13] (JSXText) Static JSX text node: `Datakrav for sikkerhetsnivå`
  - context: `lex items-center gap-2"> <Target className="h-5 w-5" /> Datakrav for sikkerhetsnivå </CardTitle> </CardHeader>`
- [241:13] (JSXText) Static JSX text node: `Ingen data registrert ennå. Start med å samle data for å se fremgang mot sikkerhetsnivåer.`
  - context: `foreground" /> <p className="text-muted-foreground mb-4"> Ingen data registrert ennå. Start med å samle data for å se fremgang mot sikkerh`
- [244:13] (JSXText) Static JSX text node: `Start datainnsamling`
  - context: `kkerhetsnivåer. </p> <Button variant="outline"> Start datainnsamling </Button> </CardContent> </Card>`
- [256:11] (JSXText) Static JSX text node: `Datakrav for sikkerhetsnivå`
  - context: `e="flex items-center gap-2"> <Target className="h-5 w-5" /> Datakrav for sikkerhetsnivå </CardTitle> <div className="flex it`
- [259:44] (JSXText) Static JSX text node: `datapunkter samlet`
  - context: `ap-4 text-sm text-muted-foreground"> <span>{currentStatus.dataPoints} datapunkter samlet</span> <span>{currentStatus.daysSpan} dager med dat`
- [260:42] (JSXText) Static JSX text node: `dager med data`
  - context: `.dataPoints} datapunkter samlet</span> <span>{currentStatus.daysSpan} dager med data</span> </div> </CardHeader> <CardContent clas`
- [267:40] (JSXText) Static JSX text node: `Nåværende sikkerhetsnivå`
  - context: `bg-muted/50 rounded-lg"> <div> <p className="font-medium">Nåværende sikkerhetsnivå</p> <p className="text-sm text-muted-foregr`
- [273:25] (JSXText) Static JSX text node: `sikkerhet`
  - context: `</div> <Badge variant={badgeVariant as any}> {badgeText} sikkerhet </Badge> </div> {/* Progress toward next le`
- [281:43] (JSXText) Static JSX text node: `Fremgang mot`
  - context: `="flex items-center justify-between"> <h4 className="font-medium">Fremgang mot {nextTarget.requirement.description}</h4> <span class`
- [283:50] (JSXText) Static JSX text node: `% fullført`
  - context: `ext-sm text-muted-foreground"> {Math.round(nextTarget.progress)}% fullført </span> </div> <Pr`
- [307:19] (JSXText) Static JSX text node: `Anbefalt: Samle`
  - context: `nded-lg"> <p className="text-sm font-medium"> Anbefalt: Samle {recommendedRate} datapunkt{recommendedRate > 1 ? 'er' : ''} per`
- [307:53] (JSXText) Static JSX text node: `datapunkt`
  - context: `Name="text-sm font-medium"> Anbefalt: Samle {recommendedRate} datapunkt{recommendedRate > 1 ? 'er' : ''} per dag </p>`
- [307:96] (JSXText) Static JSX text node: `per dag`
  - context: `Anbefalt: Samle {recommendedRate} datapunkt{recommendedRate > 1 ? 'er' : ''} per dag </p> <p className="text-xs text-muted-fo`
- [310:19] (JSXText) Static JSX text node: `Måloppnåelse:`
  - context: `<p className="text-xs text-muted-foreground mt-1"> Måloppnåelse: {formatDate(nextTarget.targetDate)} </p>`

### src/components/optimized/OptimizedDataVisualization.tsx

- [53:36] (JSXText) Static JSX text node: `No data to display yet`
  - context: `sName="h-16 w-16 mx-auto mb-4 opacity-50" /> <p className="text-lg">No data to display yet</p> <p className="text-sm">Start tracking emo`
- [54:36] (JSXText) Static JSX text node: `Start tracking emotions and sensory inputs to see visualizations`
  - context: `assName="text-lg">No data to display yet</p> <p className="text-sm">Start tracking emotions and sensory inputs to see visualizations</p> <`
- [65:11] (JSXText) Static JSX text node: `Data Insights for`
  - context: `<h2 className="text-2xl font-semibold text-foreground mb-2"> Data Insights for {studentName} </h2> <p className="text-muted-f`
- [69:11] (JSXText) Static JSX text node: `Tracking`
  - context: `muted-foreground"> {selectedRange && \`${selectedRange} • \`} Tracking {emotions.length} emotions and {sensoryInputs.length} sensory inputs`
- [69:38] (JSXText) Static JSX text node: `emotions and`
  - context: `{selectedRange && \`${selectedRange} • \`} Tracking {emotions.length} emotions and {sensoryInputs.length} sensory inputs </p> </div>`
- [69:74] (JSXText) Static JSX text node: `sensory inputs`
  - context: `} • \`} Tracking {emotions.length} emotions and {sensoryInputs.length} sensory inputs </p> </div> {/* Emotion Trends */} {(s`
- [79:15] (JSXText) Static JSX text node: `Emotion Trends Over Time`
  - context: `s-center gap-2"> <TrendingUp className="h-5 w-5" /> Emotion Trends Over Time </CardTitle> </CardHeader>`
- [85:33] (JSXAttribute) Static aria-label attribute: `Loading emotion trends`
  - context: `ate.isLoading && !state.steps.emotionTrends ? ( <div aria-label="Loading emotion trends" className="h-[300px] w-full"> <div cl`
- [144:30] (JSXAttribute) Static aria-label attribute: `Emotion trends line chart`
  - context: `option={option} height={300} aria-label="Emotion trends line chart" exportRegistration={{ id: 'emotion`
- [160:17] (JSXText) Static JSX text node: `Emotion Distribution`
  - context: `er gap-2"> <PieChartIcon className="h-5 w-5" /> Emotion Distribution </CardTitle> </CardHeader>`
- [166:35] (JSXAttribute) Static aria-label attribute: `Loading emotion distribution`
  - context: `ading && !state.steps.emotionDistribution ? ( <div aria-label="Loading emotion distribution" className="h-[250px] w-full">`
- [193:32] (JSXAttribute) Static aria-label attribute: `Emotion distribution donut chart`
  - context: `tion={option} height={250} aria-label="Emotion distribution donut chart" exportRegistration={{ id:`
- [208:17] (JSXText) Static JSX text node: `Sensory Response Patterns`
  - context: `enter gap-2"> <BarChart3 className="h-5 w-5" /> Sensory Response Patterns </CardTitle> </CardHeader>`
- [214:35] (JSXAttribute) Static aria-label attribute: `Loading sensory responses`
  - context: `sLoading && !state.steps.sensoryResponses ? ( <div aria-label="Loading sensory responses" className="h-[250px] w-full"> <d`
- [234:32] (JSXAttribute) Static aria-label attribute: `Sensory response patterns stacked bars`
  - context: `tion={option} height={250} aria-label="Sensory response patterns stacked bars" exportRegistration=`

### src/components/optimized/OptimizedEnhancedPersonalizedInsights.tsx

- [156:17] (JSXText) Static JSX text node: `Loading insights...`
  - context: `useDashboardMetrics(filteredData); if (insightsLoading) { return <div>Loading insights...</div> } if (!insights) { return ( <Card>`
- [165:13] (JSXText) Static JSX text node: `Personalized Insights for`
  - context: `items-center gap-2"> <Lightbulb className="h-5 w-5" /> Personalized Insights for {student.name} </CardTitle> </CardHe`
- [170:48] (JSXText) Static JSX text node: `Start tracking emotions and sensory inputs to generate personalized insights`
  - context: `ity-50 text-muted-foreground" /> <p className="text-muted-foreground">Start tracking emotions and sensory inputs to generate personalized insights</p>`
- [183:15] (JSXText) Static JSX text node: `Personalized Insights for`
  - context: `-2"> <Lightbulb className="h-5 w-5 text-primary" /> Personalized Insights for {student.name} </CardTitle> <d`
- [203:62] (JSXText) Static JSX text node: `Total Data Points`
  - context: `taPoints} /></div> <div className="text-sm text-muted-foreground">Total Data Points</div> </div> <div className="text-cent`
- [207:62] (JSXText) Static JSX text node: `Data Consistency`
  - context: `stency)} />%</div> <div className="text-sm text-muted-foreground">Data Consistency</div> </div> <div className="text-cente`
- [211:62] (JSXText) Static JSX text node: `Emotional Stability`
  - context: `bility)} />%</div> <div className="text-sm text-muted-foreground">Emotional Stability</div> </div> <div className="text-ce`
- [223:62] (JSXText) Static JSX text node: `Intensity Trend`
  - context: `</div> <div className="text-sm text-muted-foreground">Intensity Trend</div> </div> </div> </CardContent>`
- [231:41] (JSXText) Static JSX text node: `AI Insights`
  - context: `st className="grid w-full grid-cols-5"> <TabsTrigger value="insights">AI Insights</TabsTrigger> <TabsTrigger value="strengths">Strengths</Ta`
- [232:42] (JSXText) Static JSX text node: `Strengths`
  - context: `e="insights">AI Insights</TabsTrigger> <TabsTrigger value="strengths">Strengths</TabsTrigger> <TabsTrigger value="growth">Growth Areas</Tabs`
- [233:39] (JSXText) Static JSX text node: `Growth Areas`
  - context: `value="strengths">Strengths</TabsTrigger> <TabsTrigger value="growth">Growth Areas</TabsTrigger> <TabsTrigger value="patterns">Patterns</Tab`
- [234:41] (JSXText) Static JSX text node: `Patterns`
  - context: `lue="growth">Growth Areas</TabsTrigger> <TabsTrigger value="patterns">Patterns</TabsTrigger> <TabsTrigger value="anomalies">Alerts</TabsTrig`
- [235:42] (JSXText) Static JSX text node: `Alerts`
  - context: `alue="patterns">Patterns</TabsTrigger> <TabsTrigger value="anomalies">Alerts</TabsTrigger> </TabsList> <TabsContent value="insights"`
- [257:31] (JSXText) Static JSX text node: `Forecast:`
  - context: `<div className="text-sm font-medium"> Forecast: {insight.prediction.value.toFixed(1)} <`
- [266:70] (JSXText) Static JSX text node: `Recommendations:`
  - context: `me="mt-3"> <h5 className="text-sm font-medium mb-2">Recommendations:</h5> <ul className="text-sm text-mu`
- [288:97] (JSXText) Static JSX text node: `% confidence`
  - context: `<OptimizedAnimatedCounter value={Math.round(insight.confidence * 100)} />% confidence </Badge> <div className`
- [301:18] (JSXText) Static JSX text node: `Continue collecting data to generate predictive insights`
  - context: `<Brain className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>Continue collecting data to generate predictive insights</p> </div>`
- [320:75] (JSXText) Static JSX text node: `Strength Level:`
  - context: `p-2"> <span className="text-xs text-muted-foreground">Strength Level:</span> <Progress value={strength.confi`
- [333:18] (JSXText) Static JSX text node: `Strengths will be identified as patterns emerge from data collection`
  - context: `<Heart className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>Strengths will be identified as patterns emerge from data collection</p>`
- [367:50] (JSXText) Static JSX text node: `priority`
  - context: `ry' }> {opportunity.priority} priority </Badge> </div>`
- [373:68] (JSXText) Static JSX text node: `Action Steps:`
  - context: `Name="mt-3"> <h5 className="text-sm font-medium mb-2">Action Steps:</h5> <ul className="text-sm text-muted-f`
- [377:64] (JSXText) Static JSX text node: `•`
  - context: `ms-start gap-2"> <span className="text-primary">•</span> <span>{rec}</span>`
- [392:18] (JSXText) Static JSX text node: `Growth opportunities will be identified based on data patterns`
  - context: `<Target className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>Growth opportunities will be identified based on data patterns</p> <`
- [406:55] (JSXText) Static JSX text node: `Emotional Pattern:`
  - context: `<div className="flex-1"> <h4 className="font-semibold">Emotional Pattern: {pattern.pattern.replace('-', ' ')}</h4>`
- [410:101] (JSXText) Static JSX text node: `% confidence`
  - context: `<OptimizedAnimatedCounter value={Math.round(pattern.confidence * 100)} />% confidence </Badge> <span`
- [413:50] (JSXText) Static JSX text node: `data points`
  - context: `ext-xs text-muted-foreground"> {pattern.dataPoints} data points </span> </div>`
- [427:55] (JSXText) Static JSX text node: `Sensory Pattern:`
  - context: `<div className="flex-1"> <h4 className="font-semibold">Sensory Pattern: {pattern.pattern.replace('-', ' ')}</h4>`
- [431:101] (JSXText) Static JSX text node: `% confidence`
  - context: `<OptimizedAnimatedCounter value={Math.round(pattern.confidence * 100)} />% confidence </Badge> <span`
- [434:50] (JSXText) Static JSX text node: `data points`
  - context: `ext-xs text-muted-foreground"> {pattern.dataPoints} data points </span> </div>`
- [446:18] (JSXText) Static JSX text node: `Patterns will emerge as more data is collected`
  - context: `<BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>Patterns will emerge as more data is collected</p> </div>`
- [474:46] (JSXText) Static JSX text node: `severity`
  - context: `ondary' }> {anomaly.severity} severity </Badge> </div>`
- [482:68] (JSXText) Static JSX text node: `Recommended Actions:`
  - context: `Name="mt-3"> <h5 className="text-sm font-medium mb-2">Recommended Actions:</h5> <ul className="text-sm text-`
- [486:64] (JSXText) Static JSX text node: `•`
  - context: `ms-start gap-2"> <span className="text-primary">•</span> <span>{rec}</span>`
- [501:18] (JSXText) Static JSX text node: `No significant anomalies detected in recent data`
  - context: `<Shield className="h-16 w-16 mx-auto mb-4 opacity-50" /> <p>No significant anomalies detected in recent data</p> </div>`

### src/components/optimized/OptimizedGoalManager.tsx

- [129:19] (MessageAPI) Message API call: error(): `Please fill in all required fields`
  - context: `.description.trim() || !newGoal.measurableObjective.trim()) { toast.error("Please fill in all required fields"); return; } if (!newGoal.tar`
- [129:19] (MessageAPI) sonner toast.error(): `Please fill in all required fields`
  - context: `.description.trim() || !newGoal.measurableObjective.trim()) { toast.error("Please fill in all required fields"); return; } if (!newGoal.tar`
- [134:19] (MessageAPI) Message API call: error(): `Please select a target date`
  - context: `fields"); return; } if (!newGoal.targetDate) { toast.error("Please select a target date"); return; } const targetDate = new`
- [134:19] (MessageAPI) sonner toast.error(): `Please select a target date`
  - context: `fields"); return; } if (!newGoal.targetDate) { toast.error("Please select a target date"); return; } const targetDate = new`
- [140:19] (MessageAPI) Message API call: error(): `Invalid target date`
  - context: `e(newGoal.targetDate); if (isNaN(targetDate.getTime())) { toast.error("Invalid target date"); return; } const today = new Date(); t`
- [140:19] (MessageAPI) sonner toast.error(): `Invalid target date`
  - context: `e(newGoal.targetDate); if (isNaN(targetDate.getTime())) { toast.error("Invalid target date"); return; } const today = new Date(); t`
- [147:19] (MessageAPI) Message API call: error(): `Target date must be in the future`
  - context: `today.setHours(0, 0, 0, 0); if (targetDate < today) { toast.error("Target date must be in the future"); return; } if (newGoal.targe`
- [147:19] (MessageAPI) sonner toast.error(): `Target date must be in the future`
  - context: `today.setHours(0, 0, 0, 0); if (targetDate < today) { toast.error("Target date must be in the future"); return; } if (newGoal.targe`
- [152:19] (MessageAPI) Message API call: error(): `Target value must be greater than baseline value`
  - context: `} if (newGoal.targetValue <= newGoal.baselineValue) { toast.error("Target value must be greater than baseline value"); return; } co`
- [152:19] (MessageAPI) sonner toast.error(): `Target value must be greater than baseline value`
  - context: `} if (newGoal.targetValue <= newGoal.baselineValue) { toast.error("Target value must be greater than baseline value"); return; } co`
- [184:19] (MessageAPI) Message API call: success(): `Goal created successfully!`
  - context: `loadGoals(); resetForm(); setShowCreateDialog(false); toast.success("Goal created successfully!"); onGoalUpdate?.(); }, [newGoal, student.id,`
- [184:19] (MessageAPI) sonner toast.success(): `Goal created successfully!`
  - context: `loadGoals(); resetForm(); setShowCreateDialog(false); toast.success("Goal created successfully!"); onGoalUpdate?.(); }, [newGoal, student.id,`
- [207:21] (MessageAPI) Message API call: success(): `Goal deleted successfully`
  - context: `{ dataStorage.deleteGoal(goalId); loadGoals(); toast.success("Goal deleted successfully"); onGoalUpdate?.(); } }, [goals, loadGoa`
- [207:21] (MessageAPI) sonner toast.success(): `Goal deleted successfully`
  - context: `{ dataStorage.deleteGoal(goalId); loadGoals(); toast.success("Goal deleted successfully"); onGoalUpdate?.(); } }, [goals, loadGoa`
- [235:19] (MessageAPI) Message API call: success(): `Progress updated!`
  - context: `urrentProgress: Math.max(0, Math.min(100, progress)) }); toast.success("Progress updated!"); }, [goals, updateGoal]); // Memoized milestone additi`
- [235:19] (MessageAPI) sonner toast.success(): `Progress updated!`
  - context: `urrentProgress: Math.max(0, Math.min(100, progress)) }); toast.success("Progress updated!"); }, [goals, updateGoal]); // Memoized milestone additi`
- [255:19] (MessageAPI) Message API call: success(): `Milestone added!`
  - context: `milestones: [...goal.milestones, newMilestone] }); toast.success("Milestone added!"); }, [goals, updateGoal]); // Memoized milestone complet`
- [255:19] (MessageAPI) sonner toast.success(): `Milestone added!`
  - context: `milestones: [...goal.milestones, newMilestone] }); toast.success("Milestone added!"); }, [goals, updateGoal]); // Memoized milestone complet`
- [270:19] (MessageAPI) Message API call: success(): `Milestone completed!`
  - context: `; updateGoal(goalId, { milestones: updatedMilestones }); toast.success("Milestone completed!"); }, [goals, updateGoal]); // Handler for milestone`
- [270:19] (MessageAPI) sonner toast.success(): `Milestone completed!`
  - context: `; updateGoal(goalId, { milestones: updatedMilestones }); toast.success("Milestone completed!"); }, [goals, updateGoal]); // Handler for milestone`
- [275:26] (MessageAPI) Message API call: prompt(): `Milestone title:`
  - context: `eAddMilestoneClick = useCallback((goalId: string) => { const title = prompt("Milestone title:"); const description = prompt("Milestone description:");`
- [276:32] (MessageAPI) Message API call: prompt(): `Milestone description:`
  - context: `{ const title = prompt("Milestone title:"); const description = prompt("Milestone description:"); const dateStr = prompt("Target date (YYYY-MM-DD):`
- [277:28] (MessageAPI) Message API call: prompt(): `Target date (YYYY-MM-DD):`
  - context: `onst description = prompt("Milestone description:"); const dateStr = prompt("Target date (YYYY-MM-DD):"); if (title && description && dateStr) { a`
- [285:26] (MessageAPI) Message API call: prompt(): `Enter current progress value:`
  - context: `pdateProgressClick = useCallback((goalId: string) => { const value = prompt("Enter current progress value:"); const notes = prompt("Progress notes (opti`
- [286:26] (MessageAPI) Message API call: prompt(): `Progress notes (optional):`
  - context: `const value = prompt("Enter current progress value:"); const notes = prompt("Progress notes (optional):"); if (value) { addDataPoint(goalId, Numbe`
- [344:46] (JSXText) Static JSX text node: `IEP Goals & Tracking`
  - context: `lassName="h-6 w-6 text-primary" /> <h2 className="text-2xl font-bold">IEP Goals & Tracking</h2> </div> <Dialog open={showCrea`
- [351:15] (JSXText) Static JSX text node: `Create New Goal`
  - context: `over:opacity-90"> <Plus className="h-4 w-4 mr-2" /> Create New Goal </Button> </DialogTrigger> <Dial`
- [356:28] (JSXText) Static JSX text node: `Create New IEP Goal`
  - context: `-[90vh] overflow-y-auto"> <DialogHeader> <DialogTitle>Create New IEP Goal</DialogTitle> <DialogDescription>`
- [358:17] (JSXText) Static JSX text node: `Define a specific, measurable goal for`
  - context: `te New IEP Goal</DialogTitle> <DialogDescription> Define a specific, measurable goal for {student.name}'s educational progress.`
- [358:70] (JSXText) Static JSX text node: `'s educational progress.`
  - context: `scription> Define a specific, measurable goal for {student.name}'s educational progress. </DialogDescription> </Dialog`
- [364:45] (JSXText) Static JSX text node: `Goal Title *`
  - context: `pace-y-4 mt-4"> <div> <Label htmlFor="goal-title">Goal Title *</Label> <Input id="goal-title"`
- [367:31] (JSXAttribute) Static placeholder attribute: `e.g., Improve Reading Comprehension`
  - context: `<Input id="goal-title" placeholder="e.g., Improve Reading Comprehension" value={newGoal.title}`
- [374:51] (JSXText) Static JSX text node: `Description *`
  - context: `<div> <Label htmlFor="goal-description">Description *</Label> <Textarea id="goal-descr`
- [377:31] (JSXAttribute) Static placeholder attribute: `Describe the goal in detail...`
  - context: `<Textarea id="goal-description" placeholder="Describe the goal in detail..." value={newGoal.description}`
- [385:48] (JSXText) Static JSX text node: `Category *`
  - context: `<div> <Label htmlFor="goal-category">Category *</Label> <Select value={newGoal.category} onValueChang`
- [391:52] (JSXText) Static JSX text node: `Behavioral`
  - context: `<SelectContent> <SelectItem value="behavioral">Behavioral</SelectItem> <SelectItem value="academic">Academi`
- [392:50] (JSXText) Static JSX text node: `Academic`
  - context: `ioral">Behavioral</SelectItem> <SelectItem value="academic">Academic</SelectItem> <SelectItem value="social">Social</Sel`
- [393:48] (JSXText) Static JSX text node: `Social`
  - context: `"academic">Academic</SelectItem> <SelectItem value="social">Social</SelectItem> <SelectItem value="communication">Commun`
- [394:55] (JSXText) Static JSX text node: `Communication`
  - context: `cial">Social</SelectItem> <SelectItem value="communication">Communication</SelectItem> <SelectItem value="motor">Motor S`
- [395:47] (JSXText) Static JSX text node: `Motor Skills`
  - context: `ation">Communication</SelectItem> <SelectItem value="motor">Motor Skills</SelectItem> <SelectItem value="sensory">Sensor`
- [396:49] (JSXText) Static JSX text node: `Sensory`
  - context: `otor">Motor Skills</SelectItem> <SelectItem value="sensory">Sensory</SelectItem> <SelectItem value="cognitive">Cognitive`
- [397:51] (JSXText) Static JSX text node: `Cognitive`
  - context: `sensory">Sensory</SelectItem> <SelectItem value="cognitive">Cognitive</SelectItem> <SelectItem value="emotional">Emotion`
- [398:51] (JSXText) Static JSX text node: `Emotional`
  - context: `itive">Cognitive</SelectItem> <SelectItem value="emotional">Emotional</SelectItem> <SelectItem value="selfCare">Self-Car`
- [399:50] (JSXText) Static JSX text node: `Self-Care`
  - context: `tional">Emotional</SelectItem> <SelectItem value="selfCare">Self-Care</SelectItem> <SelectItem value="vocational">Vocati`
- [400:52] (JSXText) Static JSX text node: `Vocational`
  - context: `Care">Self-Care</SelectItem> <SelectItem value="vocational">Vocational</SelectItem> </SelectContent> </Sel`
- [406:49] (JSXText) Static JSX text node: `Measurable Objective *`
  - context: `<div> <Label htmlFor="goal-objective">Measurable Objective *</Label> <Textarea id="g`
- [409:31] (JSXAttribute) Static placeholder attribute: `e.g., Student will read grade-level text with 80% comprehension...`
  - context: `<Textarea id="goal-objective" placeholder="e.g., Student will read grade-level text with 80% comprehension..."`
- [418:50] (JSXText) Static JSX text node: `Baseline Value`
  - context: `gap-4"> <div> <Label htmlFor="goal-baseline">Baseline Value</Label> <Input id="goal-bas`
- [427:48] (JSXText) Static JSX text node: `Target Value`
  - context: `</div> <div> <Label htmlFor="goal-target">Target Value</Label> <Input id="goal-targe`
- [438:44] (JSXText) Static JSX text node: `Target Date *`
  - context: `> <div> <Label htmlFor="goal-date">Target Date *</Label> <Input id="goal-date"`
- [449:19] (JSXText) Static JSX text node: `Cancel`
  - context: `<Button variant="outline" onClick={handleDialogCancel}> Cancel </Button> <Button onClick={createGoal}>Cr`
- [451:46] (JSXText) Static JSX text node: `Create Goal`
  - context: `Cancel </Button> <Button onClick={createGoal}>Create Goal</Button> </div> </div> </DialogC`
- [492:66] (JSXText) Static JSX text node: `No IEP Goals Yet`
  - context: `round mb-4" /> <h3 className="text-xl font-semibold text-foreground mb-2">No IEP Goals Yet</h3> <p className="text-muted-foreground text-center mb-6`
- [494:9] (JSXText) Static JSX text node: `Start by creating your first IEP goal to track`
  - context: `> <p className="text-muted-foreground text-center mb-6 max-w-md"> Start by creating your first IEP goal to track {studentName}'s educational progr`
- [494:69] (JSXText) Static JSX text node: `'s educational progress.`
  - context: `max-w-md"> Start by creating your first IEP goal to track {studentName}'s educational progress. </p> <Button onClick={onCreateClick} classN`
- [498:9] (JSXText) Static JSX text node: `Create First Goal`
  - context: `er:opacity-90 font-dyslexia"> <Plus className="h-4 w-4 mr-2" /> Create First Goal </Button> </CardContent> </Card> )); EmptyState.d`
- [543:60] (JSXAttribute) Static aria-label attribute: `Edit goal`
  - context: `ssName="flex gap-2"> <Button variant="ghost" size="icon" aria-label="Edit goal" title="Edit goal"> <Edit className="h-4 w-4" />`
- [543:78] (JSXAttribute) Static title attribute: `Edit goal`
  - context: `"> <Button variant="ghost" size="icon" aria-label="Edit goal" title="Edit goal"> <Edit className="h-4 w-4" /> </Button>`
- [546:60] (JSXAttribute) Static aria-label attribute: `Delete goal`
  - context: `</Button> <Button variant="ghost" size="icon" aria-label="Delete goal" title="Delete goal" onClick={handleDelete}> <Trash2`
- [546:80] (JSXAttribute) Static title attribute: `Delete goal`
  - context: `<Button variant="ghost" size="icon" aria-label="Delete goal" title="Delete goal" onClick={handleDelete}> <Trash2 className="h-4 w-4"`
- [563:11] (JSXText) Static JSX text node: `Update Progress`
  - context: `dleUpdateProgress}> <TrendingUp className="h-4 w-4 mr-1" /> Update Progress </Button> </CardContent> </Card> ); }); Goa`
- [575:45] (JSXText) Static JSX text node: `Progress`
  - context: `items-center justify-between mb-2"> <span className="text-sm font-medium">Progress</span> <span className="text-sm text-muted-foreground">{Math.roun`
- [586:38] (JSXText) Static JSX text node: `Measurable Objective`
  - context: `e: string }) => ( <div className="mb-4"> <h4 className="font-medium mb-2">Measurable Objective</h4> <p className="text-sm text-muted-foreground bg-mut`
- [599:13] (JSXText) Static JSX text node: `Created:`
  - context: `"> <CalendarIcon className="h-4 w-4 text-muted-foreground" /> <span>Created: {format(goal.createdDate, 'MMM dd, yyyy')}</span> </div> <div c`
- [603:13] (JSXText) Static JSX text node: `Target:`
  - context: `-sm"> <Crosshair className="h-4 w-4 text-muted-foreground" /> <span>Target: {format(goal.targetDate, 'MMM dd, yyyy')}</span> </div> </div> ));`
- [626:37] (JSXText) Static JSX text node: `Milestones`
  - context: `e="flex items-center justify-between mb-2"> <h4 className="font-medium">Milestones</h4> <Button variant="outline" size="sm" onClick={onAdd}>`
- [629:11] (JSXText) Static JSX text node: `Add`
  - context: `ize="sm" onClick={onAdd}> <Plus className="h-3 w-3 mr-1" /> Add </Button> </div> {goal.milestones.length === 0 ? (`
- [633:54] (JSXText) Static JSX text node: `No milestones yet`
  - context: `ilestones.length === 0 ? ( <p className="text-sm text-muted-foreground">No milestones yet</p> ) : ( <div className="space-y-2">`

### src/components/optimized/OptimizedStudentCard.tsx

- [36:60] (JSXText) Static JSX text node: `Grade`
  - context: `>{student.name}</h3> <p className="text-sm text-muted-foreground">Grade {student.grade}</p> </div> </div> </div>`
- [49:13] (JSXText) Static JSX text node: `View Profile`
  - context: `="flex-1" > <User className="h-4 w-4 mr-2" /> View Profile </Button> <Button variant="outline"`
- [58:13] (JSXText) Static JSX text node: `Track`
  - context: `ex-1" > <Activity className="h-4 w-4 mr-2" /> Track </Button> </div> </CardContent> </Card> ); }`

### src/components/optimized/OptimizedStudentList.tsx

- [41:46] (JSXText) Static JSX text node: `No students found`
  - context: `div className="text-center py-12"> <p className="text-muted-foreground">No students found</p> </div> ); } // Use virtual scrolling for la`

### src/components/optimized/OptimizedVisualization3D.tsx

- [68:11] (JSXText) Static JSX text node: `×`
  - context: `foreground transition-colors motion-reduce:transition-none" > × </button> </div> <p className="font-medium">{point.label}<`
- [73:12] (JSXText) Static JSX text node: `X:`
  - context: `<div className="text-sm text-muted-foreground mt-1 space-y-1"> <p>X: {point.x.toFixed(2)}</p> <p>Y: {point.y.toFixed(2)}</p> <p>Z:`
- [74:12] (JSXText) Static JSX text node: `Y:`
  - context: `d-foreground mt-1 space-y-1"> <p>X: {point.x.toFixed(2)}</p> <p>Y: {point.y.toFixed(2)}</p> <p>Z: {point.z.toFixed(2)}</p> {poin`
- [75:12] (JSXText) Static JSX text node: `Z:`
  - context: `p>X: {point.x.toFixed(2)}</p> <p>Y: {point.y.toFixed(2)}</p> <p>Z: {point.z.toFixed(2)}</p> {point.intensity && <p>Intensity: {point.int`
- [76:32] (JSXText) Static JSX text node: `Intensity:`
  - context: `d(2)}</p> <p>Z: {point.z.toFixed(2)}</p> {point.intensity && <p>Intensity: {point.intensity}</p>} </div> </div> </Html> )); Tooltip`
- [400:11] (JSXText) Static JSX text node: `3D Data Visualization`
  - context: `e="flex items-center gap-2"> <Move3d className="h-5 w-5" /> 3D Data Visualization </CardTitle> </CardHeader> <CardConten`
- [407:63] (JSXText) Static JSX text node: `X Axis`
  - context: `> <div> <label className="text-sm font-medium mb-1 block">X Axis</label> <Select value={xAxis} onValueChange={handleXAxisChang`
- [413:54] (JSXText) Static JSX text node: `Emotion Intensity`
  - context: `<SelectContent> <SelectItem value="emotionIntensity">Emotion Intensity</SelectItem> <SelectItem value="sensoryRespons`
- [414:53] (JSXText) Static JSX text node: `Sensory Response`
  - context: `tion Intensity</SelectItem> <SelectItem value="sensoryResponse">Sensory Response</SelectItem> <SelectItem value="time">Time</Sel`
- [415:42] (JSXText) Static JSX text node: `Time`
  - context: `esponse">Sensory Response</SelectItem> <SelectItem value="time">Time</SelectItem> </SelectContent> </Select>`
- [421:63] (JSXText) Static JSX text node: `Y Axis`
  - context: `<div> <label className="text-sm font-medium mb-1 block">Y Axis</label> <Select value={yAxis} onValueChange={handleYAxisChang`
- [427:54] (JSXText) Static JSX text node: `Emotion Intensity`
  - context: `<SelectContent> <SelectItem value="emotionIntensity">Emotion Intensity</SelectItem> <SelectItem value="sensoryRespons`
- [428:53] (JSXText) Static JSX text node: `Sensory Response`
  - context: `tion Intensity</SelectItem> <SelectItem value="sensoryResponse">Sensory Response</SelectItem> <SelectItem value="time">Time</Sel`
- [429:42] (JSXText) Static JSX text node: `Time`
  - context: `esponse">Sensory Response</SelectItem> <SelectItem value="time">Time</SelectItem> </SelectContent> </Select>`
- [435:63] (JSXText) Static JSX text node: `Z Axis`
  - context: `<div> <label className="text-sm font-medium mb-1 block">Z Axis</label> <Select value={zAxis} onValueChange={handleZAxisChang`
- [441:54] (JSXText) Static JSX text node: `Emotion Intensity`
  - context: `<SelectContent> <SelectItem value="emotionIntensity">Emotion Intensity</SelectItem> <SelectItem value="sensoryRespons`
- [442:53] (JSXText) Static JSX text node: `Sensory Response`
  - context: `tion Intensity</SelectItem> <SelectItem value="sensoryResponse">Sensory Response</SelectItem> <SelectItem value="time">Time</Sel`
- [443:42] (JSXText) Static JSX text node: `Time`
  - context: `esponse">Sensory Response</SelectItem> <SelectItem value="time">Time</SelectItem> </SelectContent> </Select>`
- [449:63] (JSXText) Static JSX text node: `Color By`
  - context: `<div> <label className="text-sm font-medium mb-1 block">Color By</label> <Select value={colorBy} onValueChange={handleColorB`
- [455:46] (JSXText) Static JSX text node: `Category`
  - context: `ger> <SelectContent> <SelectItem value="category">Category</SelectItem> <SelectItem value="intensity">Intensity</S`
- [456:47] (JSXText) Static JSX text node: `Intensity`
  - context: `="category">Category</SelectItem> <SelectItem value="intensity">Intensity</SelectItem> </SelectContent> </Select>`
- [464:63] (JSXText) Static JSX text node: `Point Size`
  - context: `assName="flex-1"> <label className="text-sm font-medium mb-1 block">Point Size</label> <Slider value={[pointSize]}`
- [476:63] (JSXText) Static JSX text node: `Filter`
  - context: `assName="flex-1"> <label className="text-sm font-medium mb-1 block">Filter</label> <Select value={filterCategory} onValueChange={handleF`
- [482:41] (JSXText) Static JSX text node: `All Categories`
  - context: `tTrigger> <SelectContent> <SelectItem value="all">All Categories</SelectItem> <SelectItem value="emotion">Emotions`
- [483:45] (JSXText) Static JSX text node: `Emotions`
  - context: `e="all">All Categories</SelectItem> <SelectItem value="emotion">Emotions</SelectItem> <SelectItem value="sensory">Sensory</Selec`
- [484:45] (JSXText) Static JSX text node: `Sensory`
  - context: `lue="emotion">Emotions</SelectItem> <SelectItem value="sensory">Sensory</SelectItem> <SelectItem value="environmental">Environme`
- [485:51] (JSXText) Static JSX text node: `Environmental`
  - context: `sensory">Sensory</SelectItem> <SelectItem value="environmental">Environmental</SelectItem> </SelectContent> </Select>`
- [495:52] (JSXText) Static JSX text node: `Loading 3D visualization...`
  - context: `nter justify-center h-full"> <p className="text-muted-foreground">Loading 3D visualization...</p> </div> }> <Can`
- [545:41] (JSXText) Static JSX text node: `data points`
  - context: `en mt-4 text-sm text-muted-foreground"> <span>{filteredPoints.length} data points</span> {hoveredPoint && ( <span>Hovering: {hov`
- [547:19] (JSXText) Static JSX text node: `Hovering:`
  - context: `oints.length} data points</span> {hoveredPoint && ( <span>Hovering: {hoveredPoint.label}</span> )} </div> </CardCo`

### src/components/profile-sections/DashboardSection.tsx

- [87:46] (JSXText) Static JSX text node: `Oversikt`
  - context: `er justify-between"> <div> <h2 className="text-2xl font-bold">Oversikt</h2> <p className="text-muted-foreground"> Sammen`
- [89:13] (JSXText) Static JSX text node: `Sammendrag av`
  - context: `bold">Oversikt</h2> <p className="text-muted-foreground"> Sammendrag av {student.name}s data og aktivitet </p> </div>`
- [89:41] (JSXText) Static JSX text node: `s data og aktivitet`
  - context: `<p className="text-muted-foreground"> Sammendrag av {student.name}s data og aktivitet </p> </div> <Button onCl`
- [106:13] (JSXText) Static JSX text node: `Analysestatus`
  - context: `items-center gap-2"> <BarChart3 className="h-5 w-5" /> Analysestatus </CardTitle> </CardHeader> <CardContent>`
- [180:13] (JSXText) Static JSX text node: `Datakvalitet`
  - context: `"flex items-center gap-2"> <Info className="h-5 w-5" /> Datakvalitet </CardTitle> </CardHeader> <CardContent>`
- [186:60] (JSXText) Static JSX text node: `Samlet kvalitetsscore`
  - context: `"> <div> <p className="text-sm text-muted-foreground">Samlet kvalitetsscore</p> <p className="text-3xl font-bold">{dataQ`
- [247:15] (JSXText) Static JSX text node: `AI-genererte innsikter`
  - context: `"> <TrendingUp className="h-5 w-5 animate-pulse" /> AI-genererte innsikter </CardTitle> </CardHeader>`
- [262:15] (JSXText) Static JSX text node: `AI-genererte innsikter`
  - context: `s-center gap-2"> <TrendingUp className="h-5 w-5" /> AI-genererte innsikter </CardTitle> </CardHeader>`
- [280:54] (JSXText) Static JSX text node: `Nylige økter`
  - context: `gth > 0 && ( <div> <h3 className="text-lg font-semibold mb-4">Nylige økter</h3> <PaginatedSessionsList sessions={filteredData.entrie`

### src/components/profile-sections/ToolsSection.tsx

- [90:44] (JSXText) Static JSX text node: `Verktøy`
  - context: `6"> {/* Header */} <div> <h2 className="text-2xl font-bold">Verktøy</h2> <p className="text-muted-foreground"> Avanserte v`
- [92:11] (JSXText) Static JSX text node: `Avanserte verktøy for søk, maler og sammenligning`
  - context: `font-bold">Verktøy</h2> <p className="text-muted-foreground"> Avanserte verktøy for søk, maler og sammenligning </p> </div>`

### src/components/settings/AnalyticsConfig.tsx

- [129:20] (MessageAPI) Message API call: error(): `Failed to export analytics config`
  - context: `ltValue: 'Configuration exported' })); } catch (error) { logger.error('Failed to export analytics config', error as any); toast.error(tSettings(`
- [149:22] (MessageAPI) Message API call: error(): `Failed reading imported config`
  - context: `d configuration file' })); } } catch (err) { logger.error('Failed reading imported config', err as any); toast.error(tSettings('im`
- [176:170] (JSXText) Static JSX text node: `σ`
  - context: `ngs('preview.anomaly', { defaultValue: 'Anomaly threshold' })}:</span> {anomaly}σ</li> </ul> </CardContent> </Card> ); }, [config,`
- [184:52] (JSXAttribute) Static aria-labelledby attribute: `analytics-config-heading`
  - context: `ings, tCommon]); return ( <section className={className} aria-labelledby="analytics-config-heading" role="region"> <a href="#analytics-config-main"`
- [206:38] (JSXAttribute) Static aria-describedby attribute: `help-minDataPoints`
  - context: `r" inputMode="numeric" aria-describedby="help-minDataPoints" aria-invalid={Boolean(errorFor('pattern`
- [228:38] (JSXAttribute) Static aria-describedby attribute: `help-correlationThreshold`
  - context: `1" inputMode="decimal" aria-describedby="help-correlationThreshold" aria-invalid={Boolean(errorFor('`
- [248:38] (JSXAttribute) Static aria-describedby attribute: `help-anomalyThreshold`
  - context: `1" inputMode="decimal" aria-describedby="help-anomalyThreshold" aria-invalid={Boolean(errorFor('enha`
- [267:38] (JSXAttribute) Static aria-describedby attribute: `help-defaultAnalysisDays`
  - context: `r" inputMode="numeric" aria-describedby="help-defaultAnalysisDays" aria-invalid={Boolean(errorFor('t`
- [319:38] (JSXAttribute) Static aria-describedby attribute: `help-cache-ttl`
  - context: `r" inputMode="numeric" aria-describedby="help-cache-ttl" aria-invalid={Boolean(errorFor('cache-ttl')`
- [337:38] (JSXAttribute) Static aria-describedby attribute: `help-cache-maxSize`
  - context: `r" inputMode="numeric" aria-describedby="help-cache-maxSize" className="w-full"`

### src/components/tracking/DataCollectionMonitor.tsx

- [281:48] (JSXText) Static JSX text node: `No data collection history yet`
  - context: `o mb-4 text-muted-foreground" /> <p className="text-muted-foreground">No data collection history yet</p> <p className="text-sm text-muted-fo`
- [283:13] (JSXText) Static JSX text node: `Start your first session to see monitoring insights`
  - context: `et</p> <p className="text-sm text-muted-foreground mt-2"> Start your first session to see monitoring insights </p> </Car`
- [298:15] (JSXText) Static JSX text node: `Collection Overview`
  - context: `ems-center gap-2"> <Activity className="h-5 w-5" /> Collection Overview </CardTitle> </CardHeader> <`
- [305:62] (JSXText) Static JSX text node: `Total Sessions`
  - context: `totalSessions}</p> <p className="text-xs text-muted-foreground">Total Sessions</p> </div> <div className="text-cente`
- [313:62] (JSXText) Static JSX text node: `Completion Rate`
  - context: `</p> <p className="text-xs text-muted-foreground">Completion Rate</p> </div> <div className="text-cent`
- [319:62] (JSXText) Static JSX text node: `Avg Quality`
  - context: `</p> <p className="text-xs text-muted-foreground">Avg Quality</p> </div> <div className="text-center p`
- [323:67] (JSXText) Static JSX text node: `m`
  - context: `l font-bold"> {Math.round(statistics.averageDuration / 60000)}m </p> <p className="text-xs text-muted-foregrou`
- [325:62] (JSXText) Static JSX text node: `Avg Duration`
  - context: `</p> <p className="text-xs text-muted-foreground">Avg Duration</p> </div> </div> {/* Common`
- [334:19] (JSXText) Static JSX text node: `Common Issues`
  - context: `<AlertCircle className="h-4 w-4 text-yellow-500" /> Common Issues </h4> <div className="space-y-1">`
- [341:39] (JSXText) Static JSX text node: `times`
  - context: `ge variant="outline" className="text-xs"> {issue.count} times </Badge> </div>`
- [357:13] (JSXText) Static JSX text node: `Collection Goals`
  - context: `lex items-center gap-2"> <Target className="h-5 w-5" /> Collection Goals </CardTitle> </CardHeader> <CardConte`
- [398:23] (JSXText) Static JSX text node: `Target by`
  - context: `"> <Calendar className="h-3 w-3" /> Target by {format(goal.deadline, 'MMM d')} </p>`
- [414:15] (JSXText) Static JSX text node: `Recommended Strategies`
  - context: `"> <Sparkles className="h-5 w-5 text-yellow-500" /> Recommended Strategies </CardTitle> </CardHeader>`
- [463:27] (JSXText) Static JSX text node: `Effectiveness:`
  - context: `<span className="flex items-center gap-1"> Effectiveness: {'★'.repeat(strategy.effectiveness)}`
- [484:66] (JSXText) Static JSX text node: `Benefits:`
  - context: `<div> <h5 className="text-xs font-medium mb-1">Benefits:</h5> <ul className="text-xs text-muted-foregro`
- [496:66] (JSXText) Static JSX text node: `How to implement:`
  - context: `<div> <h5 className="text-xs font-medium mb-1">How to implement:</h5> <ul className="text-xs text-muted`
- [532:13] (JSXText) Static JSX text node: `You have`
  - context: `<Info className="h-4 w-4" /> <AlertDescription> You have {activeStrategies.length} active {activeStrategies.length === 1 ? 'stra`
- [532:48] (JSXText) Static JSX text node: `active`
  - context: `/> <AlertDescription> You have {activeStrategies.length} active {activeStrategies.length === 1 ? 'strategy' : 'strategies'}.`
- [532:114] (JSXText) Static JSX text node: `.
            Remember to apply`
  - context: `egies.length} active {activeStrategies.length === 1 ? 'strategy' : 'strategies'}. Remember to apply {activeStrategies.length === 1 ? 'it' : 'them'}`
- [533:79] (JSXText) Static JSX text node: `in your next session!`
  - context: `. Remember to apply {activeStrategies.length === 1 ? 'it' : 'them'} in your next session! </AlertDescription> </Alert> )}`

### src/components/tracking/SessionIndicator.tsx

- [78:34] (JSXText) Static JSX text node: `emotions`
  - context: `<Badge variant="outline" className="text-xs"> {quality.emotionCount} emotions </Badge> <Badge variant="outline" className="text-xs">`
- [81:34] (JSXText) Static JSX text node: `sensory`
  - context: `<Badge variant="outline" className="text-xs"> {quality.sensoryCount} sensory </Badge> {showControls && ( <div className="fl`
- [111:53] (JSXText) Static JSX text node: `Active Session`
  - context: `or())} /> <div> <h3 className="font-semibold text-sm">Active Session</h3> <p className="text-xs text-muted-foreground">`
- [127:63] (JSXText) Static JSX text node: `Data Quality`
  - context: `fy-between mb-1"> <span className="text-xs text-muted-foreground">Data Quality</span> <div className="flex items-center gap-1">`
- [139:60] (JSXText) Static JSX text node: `Emotions`
  - context: `ty.emotionCount}</p> <p className="text-xs text-muted-foreground">Emotions</p> </div> <div className="p-2 rounded bg-muted`
- [143:60] (JSXText) Static JSX text node: `Sensory`
  - context: `ty.sensoryCount}</p> <p className="text-xs text-muted-foreground">Sensory</p> </div> <div className="p-2 rounded bg-muted/`
- [149:60] (JSXText) Static JSX text node: `Environment`
  - context: `} </p> <p className="text-xs text-muted-foreground">Environment</p> </div> </div> </div> {/*`
- [159:15] (JSXText) Static JSX text node: `Last saved`
  - context: `ckCircle className="h-3 w-3 text-green-500" /> <span> Last saved {new Date(quality.lastSaved).toLocaleTimeString()} </span`
- [175:17] (JSXText) Static JSX text node: `Resume`
  - context: `> <Play className="h-4 w-4 mr-2" /> Resume </Button> ) : ( <Button`
- [185:17] (JSXText) Static JSX text node: `Pause`
  - context: `> <Pause className="h-4 w-4 mr-2" /> Pause </Button> )} <Button`
- [197:15] (JSXText) Static JSX text node: `Save`
  - context: `20} > <Save className="h-4 w-4 mr-2" /> Save </Button> <Button size="sm"`
- [215:15] (JSXText) Static JSX text node: `Add more data to improve session quality`
  - context: `der-warning/20"> <p className="text-xs text-warning"> Add more data to improve session quality </p> </div>`

### src/components/tracking/SessionRecovery.tsx

- [52:21] (MessageAPI) Message API call: error(): `Failed to recover session:`
  - context: `> s.sessionId !== sessionId) ); } catch (error) { console.error('Failed to recover session:', error); } finally { setIsRecovering(fals`
- [103:21] (JSXText) Static JSX text node: `Unsaved Session Found`
  - context: `className)}> <AlertTriangle className="h-4 w-4" /> <AlertTitle>Unsaved Session Found</AlertTitle> <AlertDescription className="mt-2">`
- [106:13] (JSXText) Static JSX text node: `You have an incomplete session from`
  - context: `escription className="mt-2"> <p className="text-sm mb-3"> You have an incomplete session from {age} with {session.metadata.dataPoints} dat`
- [106:55] (JSXText) Static JSX text node: `with`
  - context: `className="text-sm mb-3"> You have an incomplete session from {age} with {session.metadata.dataPoints} data points. </p> <div cl`
- [106:90] (JSXText) Static JSX text node: `data points.`
  - context: `You have an incomplete session from {age} with {session.metadata.dataPoints} data points. </p> <div className="flex gap-2"> <`
- [118:19] (JSXText) Static JSX text node: `Recovering...`
  - context: `<RefreshCw className="h-4 w-4 mr-2 animate-spin" /> Recovering... </> ) : ( <>`
- [123:19] (JSXText) Static JSX text node: `Resume Session`
  - context: `<> <RefreshCw className="h-4 w-4 mr-2" /> Resume Session </> )} </Button>`
- [133:15] (JSXText) Static JSX text node: `Discard`
  - context: `} > <Trash2 className="h-4 w-4 mr-2" /> Discard </Button> </div> </AlertDescription>`
- [148:19] (JSXText) Static JSX text node: `Recoverable Sessions`
  - context: `<AlertTriangle className="h-5 w-5 text-yellow-500" /> <span>Recoverable Sessions</span> </div> <Badge variant="outline">`
- [155:11] (JSXText) Static JSX text node: `Found`
  - context: `rdContent> <p className="text-sm text-muted-foreground mb-4"> Found {recoverableSessions.length} incomplete session(s) that can be recovered.`
- [155:46] (JSXText) Static JSX text node: `incomplete session(s) that can be recovered.`
  - context: `xt-sm text-muted-foreground mb-4"> Found {recoverableSessions.length} incomplete session(s) that can be recovered. </p> <div classNam`
- [176:59] (JSXText) Static JSX text node: `Started`
  - context: `-muted-foreground" /> <span className="text-sm font-medium">Started {age}</span> </div> <Badge`
- [189:57] (JSXText) Static JSX text node: `data points`
  - context: `xt-muted-foreground" /> <span>{session.metadata.dataPoints} data points</span> </div> <div className="fl`
- [193:74] (JSXText) Static JSX text node: `m`
  - context: `nd" /> <span>{Math.floor(session.metadata.duration / 60000)}m</span> </div> <div className="flex items-c`
- [196:61] (JSXText) Static JSX text node: `Quality:`
  - context: `tems-center gap-1"> <span className="text-muted-foreground">Quality:</span> <span className="font-medium">{quality.score`
- [205:54] (JSXText) Static JSX text node: `emotions`
  - context: `line" className="text-xs"> {session.data.emotions.length} emotions </Badge> )} {se`
- [210:59] (JSXText) Static JSX text node: `sensory`
  - context: `className="text-xs"> {session.data.sensoryInputs.length} sensory </Badge> )} {ses`
- [215:23] (JSXText) Static JSX text node: `Environmental`
  - context: `<Badge variant="outline" className="text-xs"> Environmental </Badge> )}`
- [231:25] (JSXText) Static JSX text node: `Recovering...`
  - context: `<RefreshCw className="h-3 w-3 mr-1 animate-spin" /> Recovering... </> ) : (`
- [236:25] (JSXText) Static JSX text node: `Resume`
  - context: `<RefreshCw className="h-3 w-3 mr-1" /> Resume </> )} </Butt`
- [261:13] (JSXText) Static JSX text node: `Discard All`
  - context: `uctive" > <Trash2 className="h-4 w-4 mr-2" /> Discard All </Button> </div> </CardContent> </Card>`

### src/components/ui/Breadcrumbs.tsx

- [19:21] (JSXAttribute) Static aria-label attribute: `Breadcrumb`
  - context: `if (!items || items.length === 0) return null; return ( <nav aria-label="Breadcrumb" className={cn('text-xs text-muted-foreground', className)}> <`

### src/components/ui/PremiumStatsCard.tsx

- [100:38] (JSXText) Static JSX text node: `% fra forrige uke`
  - context: `border-t-destructive" )} /> {Math.abs(trend.value)}% fra forrige uke </motion.div> )} <p`

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

### src/config/loaders/analytics.loader.ts

- [209:17] (MessageAPI) Message API call: info(): `analytics.loader hot-reloaded: cache invalidated`
  - context: `t(() => { cachedConfig = null; cacheStamp = Date.now(); logger.info('analytics.loader hot-reloaded: cache invalidated'); }); } // Optional: consu`

### src/config/validators/analytics.validator.ts

- [37:18] (MessageAPI) Message API call: error(): `analytics.config validation failed; using fallback defaults`
  - context: `sult.error); // Log once with normalized diagnostics try { logger.error('analytics.config validation failed; using fallback defaults', { errors,`

### src/contexts/TrackingContext.tsx

- [190:23] (MessageAPI) Message API call: warning(): `Session timed out due to inactivity`
  - context: `ntax sessionTimeoutRef.current = setTimeout(() => { toast.warning('Session timed out due to inactivity'); endSession(true); }, newCo`
- [190:23] (MessageAPI) sonner toast.warning(): `Session timed out due to inactivity`
  - context: `ntax sessionTimeoutRef.current = setTimeout(() => { toast.warning('Session timed out due to inactivity'); endSession(true); }, newCo`
- [195:17] (MessageAPI) Message API call: info(): `[TrackingContext] Started new session`
  - context: `endSession(true); }, newConfig.sessionTimeout); } logger.info('[TrackingContext] Started new session', { sessionId, studentId }); }, [curren`
- [222:17] (MessageAPI) Message API call: info(): `[TrackingContext] Ended session`
  - context: `on_${currentSession.studentId}\`); setCurrentSession(null); logger.info('[TrackingContext] Ended session', { sessionId: currentSession.id }); }, [curr`
- [243:17] (MessageAPI) Message API call: info(): `[TrackingContext] Paused session`
  - context: `imerRef.current); autoSaveTimerRef.current = null; } logger.info('[TrackingContext] Paused session', { sessionId: currentSession.id }); }, [cur`
- [268:17] (MessageAPI) Message API call: info(): `[TrackingContext] Resumed session`
  - context: `n(); } }, sessionConfig.autoSaveInterval); } logger.info('[TrackingContext] Resumed session', { sessionId: currentSession.id }); }, [cu`
- [299:23] (MessageAPI) Message API call: warning(): `Session timed out due to inactivity`
  - context: `ntax sessionTimeoutRef.current = setTimeout(() => { toast.warning('Session timed out due to inactivity'); endSession(true); }, sessi`
- [299:23] (MessageAPI) sonner toast.warning(): `Session timed out due to inactivity`
  - context: `ntax sessionTimeoutRef.current = setTimeout(() => { toast.warning('Session timed out due to inactivity'); endSession(true); }, sessi`
- [351:23] (MessageAPI) Message API call: warning(): `Session timed out due to inactivity`
  - context: `ntax sessionTimeoutRef.current = setTimeout(() => { toast.warning('Session timed out due to inactivity'); endSession(true); }, sessi`
- [351:23] (MessageAPI) sonner toast.warning(): `Session timed out due to inactivity`
  - context: `ntax sessionTimeoutRef.current = setTimeout(() => { toast.warning('Session timed out due to inactivity'); endSession(true); }, sessi`
- [478:21] (MessageAPI) Message API call: success(): `Session saved successfully`
  - context: `lyticsManager.triggerAnalyticsForStudent(student); } toast.success('Session saved successfully'); logger.info('[TrackingContext] Session save`
- [478:21] (MessageAPI) sonner toast.success(): `Session saved successfully`
  - context: `lyticsManager.triggerAnalyticsForStudent(student); } toast.success('Session saved successfully'); logger.info('[TrackingContext] Session save`
- [479:19] (MessageAPI) Message API call: info(): `[TrackingContext] Session saved`
  - context: `; } toast.success('Session saved successfully'); logger.info('[TrackingContext] Session saved', { sessionId: currentSession.id,`
- [486:20] (MessageAPI) Message API call: error(): `[TrackingContext] Failed to save session`
  - context: `}); return trackingEntry; } catch (error) { logger.error('[TrackingContext] Failed to save session', { error }); toast.error('Faile`
- [487:19] (MessageAPI) Message API call: error(): `Failed to save session`
  - context: `error('[TrackingContext] Failed to save session', { error }); toast.error('Failed to save session'); return null; } }, [currentSession, valida`
- [487:19] (MessageAPI) sonner toast.error(): `Failed to save session`
  - context: `error('[TrackingContext] Failed to save session', { error }); toast.error('Failed to save session'); return null; } }, [currentSession, valida`
- [530:16] (MessageAPI) Message API call: info(): `Session discarded`
  - context: `ion_${currentSession.studentId}\`); setCurrentSession(null); toast.info('Session discarded'); logger.info('[TrackingContext] Session discarded', { s`
- [530:16] (MessageAPI) sonner toast.info(): `Session discarded`
  - context: `ion_${currentSession.studentId}\`); setCurrentSession(null); toast.info('Session discarded'); logger.info('[TrackingContext] Session discarded', { s`
- [531:17] (MessageAPI) Message API call: info(): `[TrackingContext] Session discarded`
  - context: `setCurrentSession(null); toast.info('Session discarded'); logger.info('[TrackingContext] Session discarded', { sessionId: currentSession.id }); }, [`
- [540:19] (MessageAPI) Message API call: error(): `Session not found`
  - context: `= sessions.find(s => s.id === sessionId); if (!session) { toast.error('Session not found'); return; } setCurrentSession(session); t`
- [540:19] (MessageAPI) sonner toast.error(): `Session not found`
  - context: `= sessions.find(s => s.id === sessionId); if (!session) { toast.error('Session not found'); return; } setCurrentSession(session); t`
- [545:19] (MessageAPI) Message API call: success(): `Session recovered`
  - context: `found'); return; } setCurrentSession(session); toast.success('Session recovered'); logger.info('[TrackingContext] Session recovered', { s`
- [545:19] (MessageAPI) sonner toast.success(): `Session recovered`
  - context: `found'); return; } setCurrentSession(session); toast.success('Session recovered'); logger.info('[TrackingContext] Session recovered', { s`
- [546:17] (MessageAPI) Message API call: info(): `[TrackingContext] Session recovered`
  - context: `urrentSession(session); toast.success('Session recovered'); logger.info('[TrackingContext] Session recovered', { sessionId }); }, [sessions]); /**`

### src/hooks/useAnalyticsStatus.ts

- [63:20] (MessageAPI) Message API call: error(): `Error loading analytics status:`
  - context: `setAnalyticsStatus(status); } } catch (error) { logger.error('Error loading analytics status:', error); setAnalyticsStatus([]); } f`
- [93:20] (MessageAPI) Message API call: error(): `Error triggering analytics:`
  - context: `s(); } await loadStatus(); } catch (error) { logger.error('Error triggering analytics:', error); } }, [loadStatus]); useEffect(()`

### src/hooks/useAnalyticsWorker.ts

- [96:20] (MessageAPI) Message API call: error(): `[useAnalyticsWorker] Worker runtime error, switching to fallback`
  - context: `} }; worker.onerror = (error: ErrorEvent) => { logger.error('[useAnalyticsWorker] Worker runtime error, switching to fallback', error);`
- [133:17] (MessageAPI) Message API call: info(): `[useAnalyticsWorker] Analytics worker initialized successfully`
  - context: `singleton.ready = false; // will flip true on first onmessage logger.info('[useAnalyticsWorker] Analytics worker initialized successfully'); return wo`
- [136:18] (MessageAPI) Message API call: error(): `[useAnalyticsWorker] Failed to initialize worker`
  - context: `ialized successfully'); return worker; } catch (error) { logger.error('[useAnalyticsWorker] Failed to initialize worker', error as Error); singlet`
- [347:26] (MessageAPI) Message API call: error(): `[useAnalyticsWorker] Failed handling worker message`
  - context: `break; } } catch (e) { logger.error('[useAnalyticsWorker] Failed handling worker message', e as Error); }`
- [352:24] (MessageAPI) Message API call: error(): `[useAnalyticsWorker] messageerror from analytics worker`
  - context: `const onMessageError = (evt: MessageEvent) => { logger.error('[useAnalyticsWorker] messageerror from analytics worker', evt); };`
- [450:22] (MessageAPI) Message API call: error(): `[useAnalyticsWorker] Fallback failed`
  - context: `ache.set(cacheKey, results, tags); } catch (error) { logger.error('[useAnalyticsWorker] Fallback failed', error); setError('Analytics proc`
- [485:22] (MessageAPI) Message API call: error(): `[useAnalyticsWorker] watchdog timeout: worker did not respond, attempting fallback`
  - context: `watchdogRef.current = setTimeout(async () => { try { logger.error('[useAnalyticsWorker] watchdog timeout: worker did not respond, attempting fallb`
- [505:22] (MessageAPI) Message API call: error(): `[useAnalyticsWorker] Fallback failed after watchdog timeout`
  - context: `ed using fallback mode.'); } catch (fallbackError) { logger.error('[useAnalyticsWorker] Fallback failed after watchdog timeout', fallbackError);`
- [580:20] (MessageAPI) Message API call: error(): `[WORKER_MESSAGE] Failed to post message to worker, falling back to sync`
  - context: `'Worker reference missing'); } } catch (postErr) { logger.error('[WORKER_MESSAGE] Failed to post message to worker, falling back to sync', { err`
- [594:22] (MessageAPI) Message API call: error(): `[useAnalyticsWorker] Fallback processing failed after worker post error`
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

- [74:24] (MessageAPI) Message API call: error(): `Failed to save trained model:`
  - context: `progress: 100 }); } catch (error) { logger.error('Failed to save trained model:', error); setTrainingStatus({`
- [89:20] (MessageAPI) Message API call: error(): `ML training worker error:`
  - context: `}); } }; worker.onerror = (error) => { logger.error('ML training worker error:', error); setTrainingStatus({ isTrainin`

### src/hooks/useMockDataSeeding.ts

- [48:19] (MessageAPI) Message API call: info(): `Manually seeding mock data`
  - context: `setIsSeeding(true); setSeedingError(null); try { logger.info('Manually seeding mock data', { studentId }); await seedMinimalDemo`
- [55:21] (MessageAPI) Message API call: success(): `Demo data created successfully`
  - context: `ow.dispatchEvent(new CustomEvent('mockDataLoaded')); toast.success('Demo data created successfully', { description: 'Sample data has been g`
- [55:21] (MessageAPI) sonner toast.success(): `Demo data created successfully`
  - context: `ow.dispatchEvent(new CustomEvent('mockDataLoaded')); toast.success('Demo data created successfully', { description: 'Sample data has been g`
- [64:20] (MessageAPI) Message API call: error(): `Failed to seed mock data`
  - context: `stanceof Error ? error.message : 'Failed to seed mock data'; logger.error('Failed to seed mock data', { error, studentId }); setSeedingError(errorMe`
- [66:19] (MessageAPI) Message API call: error(): `Failed to create demo data`
  - context: `, { error, studentId }); setSeedingError(errorMessage); toast.error('Failed to create demo data', { description: 'Please try loading mock da`
- [66:19] (MessageAPI) sonner toast.error(): `Failed to create demo data`
  - context: `, { error, studentId }); setSeedingError(errorMessage); toast.error('Failed to create demo data', { description: 'Please try loading mock da`
- [112:21] (MessageAPI) Message API call: info(): `Auto-seeding minimal demo data for mock route`
  - context: `tIsSeeding(true); setSeedingError(null); try { logger.info('Auto-seeding minimal demo data for mock route', { studentId });`
- [120:23] (MessageAPI) Message API call: success(): `Demo data created successfully`
  - context: `); // Show non-intrusive success message toast.success('Demo data created successfully', { description: 'Sample data has been`
- [120:23] (MessageAPI) sonner toast.success(): `Demo data created successfully`
  - context: `); // Show non-intrusive success message toast.success('Demo data created successfully', { description: 'Sample data has been`
- [129:22] (MessageAPI) Message API call: error(): `Failed to auto-seed mock data`
  - context: `f Error ? error.message : 'Failed to auto-seed mock data'; logger.error('Failed to auto-seed mock data', { error, studentId }); setSeedingError(`
- [131:21] (MessageAPI) Message API call: error(): `Failed to create demo data`
  - context: `error, studentId }); setSeedingError(errorMessage); toast.error('Failed to create demo data', { description: 'Please try loading mock`
- [131:21] (MessageAPI) sonner toast.error(): `Failed to create demo data`
  - context: `error, studentId }); setSeedingError(errorMessage); toast.error('Failed to create demo data', { description: 'Please try loading mock`

### src/hooks/usePerformanceMonitor.ts

- [371:17] (MessageAPI) Message API call: info(): `[Performance Report]`
  - context: `logReport = useCallback(() => { const report = getReport(); logger.info('[Performance Report]', report); }, [getReport]); return { trackCompone`

### src/hooks/useProgressiveChartData.ts

- [103:22] (MessageAPI) Message API call: error(): `[useProgressiveChartData] Failed computing emotion distribution`
  - context: `rkStepDone('emotionDistribution'); } catch (error) { logger.error('[useProgressiveChartData] Failed computing emotion distribution', error);`
- [125:24] (MessageAPI) Message API call: error(): `[useProgressiveChartData] Failed computing sensory responses`
  - context: `kStepDone('sensoryResponses'); } catch (error) { logger.error('[useProgressiveChartData] Failed computing sensory responses', error);`
- [163:24] (MessageAPI) Message API call: error(): `[useProgressiveChartData] Failed computing emotion trends`
  - context: `markStepDone('emotionTrends'); } catch (error) { logger.error('[useProgressiveChartData] Failed computing emotion trends', error); s`

### src/hooks/useRealtimeData.ts

- [255:21] (MessageAPI) Message API call: info(): `Real-time data connection would be established here`
  - context: `simulateDataStream, options.updateInterval); } else { logger.info('Real-time data connection would be established here'); } //`

### src/hooks/useStudentData.ts

- [79:20] (MessageAPI) Message API call: error(): `Failed to load student data:`
  - context: `catch (e) { setError('Failed to load student data.'); logger.error('Failed to load student data:', e); } finally { setIsLoading(false);`

### src/hooks/useStudentExport.ts

- [38:19] (MessageAPI) Message API call: error(): `No student data available to export`
  - context: `ync (format: 'pdf' | 'csv' | 'json') => { if (!student) { toast.error('No student data available to export'); return; } try { con`
- [38:19] (MessageAPI) sonner toast.error(): `No student data available to export`
  - context: `ync (format: 'pdf' | 'csv' | 'json') => { if (!student) { toast.error('No student data available to export'); return; } try { con`
- [88:19] (MessageAPI) Message API call: info(): `Data exported`
  - context: `ta exported successfully as ${format.toUpperCase()}\`); logger.info('Data exported', { format, studentId: student.id }); } catch (error: unknown`
- [90:20] (MessageAPI) Message API call: error(): `Export error`
  - context: `at, studentId: student.id }); } catch (error: unknown) { logger.error('Export error', { error, format }); const errorMessage = error instanceof`
- [101:19] (MessageAPI) Message API call: error(): `No student data available to backup`
  - context: `dleBackupData = useCallback(async () => { if (!student) { toast.error('No student data available to backup'); return; } try { con`
- [101:19] (MessageAPI) sonner toast.error(): `No student data available to backup`
  - context: `dleBackupData = useCallback(async () => { if (!student) { toast.error('No student data available to backup'); return; } try { con`
- [120:21] (MessageAPI) Message API call: success(): `Backup created successfully`
  - context: `')}.json\`; downloadBlob(backupBlob, filename); toast.success('Backup created successfully'); logger.info('Backup created', { studentId:`
- [120:21] (MessageAPI) sonner toast.success(): `Backup created successfully`
  - context: `')}.json\`; downloadBlob(backupBlob, filename); toast.success('Backup created successfully'); logger.info('Backup created', { studentId:`
- [121:19] (MessageAPI) Message API call: info(): `Backup created`
  - context: `); toast.success('Backup created successfully'); logger.info('Backup created', { studentId: student.id }); } catch (error) { logger`
- [123:20] (MessageAPI) Message API call: error(): `Backup error`
  - context: `created', { studentId: student.id }); } catch (error) { logger.error('Backup error', { error }); toast.error('Backup failed. Please try again.'`
- [124:19] (MessageAPI) Message API call: error(): `Backup failed. Please try again.`
  - context: `atch (error) { logger.error('Backup error', { error }); toast.error('Backup failed. Please try again.'); } }, [student, options]); return {`
- [124:19] (MessageAPI) sonner toast.error(): `Backup failed. Please try again.`
  - context: `atch (error) { logger.error('Backup error', { error }); toast.error('Backup failed. Please try again.'); } }, [student, options]); return {`

### src/lib/alertSystem.ts

- [160:20] (MessageAPI) Message API call: error(): `Error saving alerts:`
  - context: `= error instanceof Error ? error : new Error(String(error)); logger.error('Error saving alerts:', err); // Actionable hint for POC/demo users`
- [177:22] (MessageAPI) Message API call: error(): `Failed to save alerts even after cleanup:`
  - context: `anceof Error ? retryError : new Error(String(retryError)); logger.error('Failed to save alerts even after cleanup:', err2); // In demo mode, we`
- [205:20] (MessageAPI) Message API call: error(): `Error loading alerts:`
  - context: `= error instanceof Error ? error : new Error(String(error)); logger.error('Error loading alerts:', err); return []; } } /** * Retrieves`
- [254:20] (MessageAPI) Message API call: error(): `Error marking alert as viewed:`
  - context: `= error instanceof Error ? error : new Error(String(error)); logger.error('Error marking alert as viewed:', err); } } /** * Resolves a specifi`
- [282:20] (MessageAPI) Message API call: error(): `Error resolving alert:`
  - context: `= error instanceof Error ? error : new Error(String(error)); logger.error('Error resolving alert:', err); } } /** * Deletes a specific alert f`
- [298:20] (MessageAPI) Message API call: error(): `Error deleting alert:`
  - context: `= error instanceof Error ? error : new Error(String(error)); logger.error('Error deleting alert:', err); } } /** * Retrieves the current alert`
- [315:20] (MessageAPI) Message API call: error(): `Error loading alert settings:`
  - context: `= error instanceof Error ? error : new Error(String(error)); logger.error('Error loading alert settings:', err); return this.defaultSettings; }`
- [332:20] (MessageAPI) Message API call: error(): `Error updating alert settings:`
  - context: `= error instanceof Error ? error : new Error(String(error)); logger.error('Error updating alert settings:', err); } } /** * Provides a summary`
- [393:20] (MessageAPI) Message API call: error(): `Error cleaning up old alerts:`
  - context: `= error instanceof Error ? error : new Error(String(error)); logger.error('Error cleaning up old alerts:', err); } } /** * Exports alerts to a`

### src/lib/analyticsConfig.ts

- [386:20] (MessageAPI) Message API call: error(): `Failed to import configuration:`
  - context: `turn true; } return false; } catch (error) { logger.error('Failed to import configuration:', error); return false; } } priv`
- [405:20] (MessageAPI) Message API call: error(): `Failed to load analytics configuration:`
  - context: `return parsed; } } } catch (error) { logger.error('Failed to load analytics configuration:', error); } return { ...DEFAULT`
- [422:24] (MessageAPI) Message API call: error(): `Failed to save analytics configuration:`
  - context: `// Silent fail if unable to remove key } logger.error('Failed to save analytics configuration:', err); } } } catch (`
- [426:20] (MessageAPI) Message API call: error(): `Failed to save analytics configuration:`
  - context: `nfiguration:', err); } } } catch (error) { logger.error('Failed to save analytics configuration:', error); } } private notifyLi`

### src/lib/analyticsConfigOverride.ts

- [9:15] (MessageAPI) Message API call: info(): `Applying development analytics configuration for better pattern detection`
  - context: `less data */ export function applyDevelopmentAnalyticsConfig() { logger.info('Applying development analytics configuration for better pattern detection');`
- [70:18] (MessageAPI) Message API call: error(): `Failed to apply development analytics config (non-fatal):`
  - context: `ANALYSIS_PERIOD_DAYS: 30, }, }); } catch (error) { logger.error('Failed to apply development analytics config (non-fatal):', error); } } // A`

### src/lib/analyticsConfigValidation.ts

- [51:18] (MessageAPI) Message API call: error(): `[analyticsConfigValidation] Invalid analytics configuration detected. Falling back to defaults.`
  - context: `} } catch (err) { // fall through to default } try { logger.error('[analyticsConfigValidation] Invalid analytics configuration detected. Falling b`

### src/lib/analyticsExport.ts

- [284:24] (MessageAPI) Message API call: error(): `Error adding chart export to PDF:`
  - context: `Width, imgHeight); } } catch (error) { logger.error('Error adding chart export to PDF:', error); } } } else if (ex`
- [312:24] (MessageAPI) Message API call: error(): `Error adding chart to PDF:`
  - context: `urrentY, imgWidth, imgHeight); } catch (error) { logger.error('Error adding chart to PDF:', error); } } } // Save the P`

### src/lib/analyticsManager.ts

- [77:18] (MessageAPI) Message API call: error(): `[analyticsManager] ensureUniversalAnalyticsInitialization failed`
  - context: `ated during initialization saveProfiles(); } catch (e) { logger.error('[analyticsManager] ensureUniversalAnalyticsInitialization failed', e); } };`
- [256:20] (MessageAPI) Message API call: error(): `[analyticsManager] initializeStudentAnalytics failed`
  - context: `entId, profile); saveProfiles(); } catch (error) { logger.error('[analyticsManager] initializeStudentAnalytics failed', { error, studentId });`
- [333:20] (MessageAPI) Message API call: error(): `[analyticsManager] generateAnalytics: invalid student`
  - context: `y guard for invalid input if (!student || !student.id) { logger.error('[analyticsManager] generateAnalytics: invalid student', { student }); ret`
- [466:20] (MessageAPI) Message API call: error(): `[analyticsManager] triggerAnalyticsForStudent failed`
  - context: `ait this.getStudentAnalytics(student); } catch (error) { logger.error('[analyticsManager] triggerAnalyticsForStudent failed', { error, studentId: stud`
- [533:58] (MessageAPI) Message API call: error(): `Error saving analytics profiles:`
  - context: `rofiles.saveProfiles() try { saveProfiles(); } catch (error) { logger.error('Error saving analytics profiles:', error); } } } /** * Singleton instance o`
- [613:18] (MessageAPI) Message API call: error(): `[analyticsManager.orchestrator] getInsights failed`
  - context: `inputs.goals?.length ?? 0, }, }; } catch (error) { logger.error('[analyticsManager.orchestrator] getInsights failed', { error }); const cach`

### src/lib/analyticsManagerLite.ts

- [26:20] (MessageAPI) Message API call: error(): `[analyticsManagerLite] Failed to initialize student`
  - context: `Student initialized', { studentId }); } catch (error) { logger.error('[analyticsManagerLite] Failed to initialize student', { error, studentId });`

### src/lib/analyticsProfiles.ts

- [40:18] (MessageAPI) Message API call: error(): `[analyticsProfiles] Failed to load profiles`
  - context: `lyzedAt) : null, }); } } } catch (error) { logger.error('[analyticsProfiles] Failed to load profiles', { error }); } return map; }`
- [62:18] (MessageAPI) Message API call: error(): `[analyticsProfiles] Failed to save profiles`
  - context: `ticsProfiles, JSON.stringify(data)); } } catch (error) { logger.error('[analyticsProfiles] Failed to save profiles', { error }); } } export functio`

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

- [362:20] (MessageAPI) Message API call: error(): `Failed to parse student data from localStorage`
  - context: `}; } return null; } catch (error) { logger.error('Failed to parse student data from localStorage', error); return null;`
- [431:9] (MessageAPI) Message API call: error(): `Failed to parse tracking entries from localStorage`
  - context: `e() - a.timestamp.getTime()); } catch (error) { logger.error( 'Failed to parse tracking entries from localStorage', error );`
- [749:20] (MessageAPI) Message API call: error(): `Error deleting student:`
  - context: `this.saveStorageIndex(); } catch (error) { logger.error('Error deleting student:', error); throw error; } } } // Export sin`

### src/lib/diagnostics.ts

- [160:18] (MessageAPI) Message API call: error(): `[DIAGNOSTIC] Worker Timeout!`
  - context: `timeout: number) { if (!this.diagnosticMode) return; logger.error('[DIAGNOSTIC] Worker Timeout!', { workerName, timeout, timesta`

### src/lib/enhancedPatternAnalysis.ts

- [93:20] (MessageAPI) Message API call: error(): `Failed to initialize ML models:`
  - context: `this.mlModelsInitialized = true; } catch (error) { logger.error('Failed to initialize ML models:', error); this.mlModelsInitialized = fals`
- [183:22] (MessageAPI) Message API call: error(): `ML emotion prediction failed:`
  - context: `}); } } } catch (error) { logger.error('ML emotion prediction failed:', error); } } // Statistical senso`
- [248:22] (MessageAPI) Message API call: error(): `ML sensory prediction failed:`
  - context: `}); } } } catch (error) { logger.error('ML sensory prediction failed:', error); } } // Goal achievement`
- [927:20] (MessageAPI) Message API call: error(): `Baseline clustering failed:`
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

### src/lib/inlineWorker.ts

- [46:18] (MessageAPI) Message API call: error(): `Failed to create inline worker:`
  - context: `if (workerUrl) { URL.revokeObjectURL(workerUrl); } logger.error('Failed to create inline worker:', error as Error); return null; } }`

### src/lib/insights/unified.ts

- [45:18] (MessageAPI) Message API call: error(): `[insights/unified] computeInsights: invalid inputs`
  - context: `ay(inputs.emotions) || !Array.isArray(inputs.sensoryInputs)) { logger.error('[insights/unified] computeInsights: invalid inputs', { inputsType: typeof input`
- [99:18] (MessageAPI) Message API call: error(): `[insights/unified] computeInsights failed`
  - context: `confidence, } as AnalyticsResults; } catch (error) { logger.error('[insights/unified] computeInsights failed', { error: error instanceof Error ? {`

### src/lib/mockData.ts

- [268:17] (MessageAPI) Message API call: info(): `seedMinimalDemoData: seeded enhanced demo data`
  - context: `alEntries = dataStorage.getEntriesForStudent(studentId).length; logger.info("seedMinimalDemoData: seeded enhanced demo data", { studentId, studentName: stud`
- [270:18] (MessageAPI) Message API call: error(): `seedMinimalDemoData: failed to seed demo data`
  - context: `udent.name, entriesCount: totalEntries }); } catch (error) { logger.error("seedMinimalDemoData: failed to seed demo data", { studentId, error }); thro`

### src/lib/mockDataGenerator.ts

- [55:18] (MessageAPI) Message API call: error(): `Generated invalid emotion entry:`
  - context: `alidateEmotionEntry(entry); if (!validationResult.isValid) { logger.error('Generated invalid emotion entry:', entry, validationResult.errors); throw n`
- [87:18] (MessageAPI) Message API call: error(): `Generated invalid sensory entry:`
  - context: `alidateSensoryEntry(entry); if (!validationResult.isValid) { logger.error('Generated invalid sensory entry:', entry, validationResult.errors); throw n`
- [348:22] (MessageAPI) Message API call: error(): `Generated invalid tracking entry for scenario`
  - context: `kingEntry(entry); if (!trackingValidation.isValid) { logger.error('Generated invalid tracking entry for scenario', { scenario, entry, errors: trac`
- [354:18] (MessageAPI) Message API call: error(): `Failed to load scenario data`
  - context: `ataStorage.saveTrackingEntry(entry); } } catch (error) { logger.error('Failed to load scenario data', error); throw new Error('Failed to initializ`
- [376:18] (MessageAPI) Message API call: error(): `Failed to load mock data:`
  - context: `aStorage.saveTrackingEntry(entry); }); } catch (error) { logger.error('Failed to load mock data:', error); throw new Error('Failed to initialize m`
- [397:18] (MessageAPI) Message API call: error(): `Failed to clear mock data:`
  - context: `=> dataStorage.saveTrackingEntry(entry)); } catch (error) { logger.error('Failed to clear mock data:', error); throw new Error('Failed to clear mock`

### src/lib/modelEvaluation.ts

- [164:24] (MessageAPI) Message API call: error(): `[modelEvaluation] onupgradeneeded failed`
  - context: `{ keyPath: 'id' }); } } catch (err) { logger.error('[modelEvaluation] onupgradeneeded failed', err); } }; requ`

### src/lib/sessionManager.ts

- [146:17] (MessageAPI) Message API call: info(): `[SessionManager] Created new session`
  - context: `sessionId, sessionData); this.persistSession(sessionData); logger.info('[SessionManager] Created new session', { sessionId, studentId }); return se`
- [256:17] (MessageAPI) Message API call: info(): `[SessionManager] Completed session`
  - context: `it analyticsManager.triggerAnalyticsForStudent(student); } logger.info('[SessionManager] Completed session', { sessionId, entryId: tracki`
- [279:17] (MessageAPI) Message API call: info(): `[SessionManager] Abandoned session`
  - context: `.delete(sessionId); this.clearPersistedSession(sessionId); logger.info('[SessionManager] Abandoned session', { sessionId }); } /** * Pause a se`
- [292:17] (MessageAPI) Message API call: info(): `[SessionManager] Paused session`
  - context: `.metadata.status = 'paused'; this.persistSession(session); logger.info('[SessionManager] Paused session', { sessionId }); return true; } /**`
- [306:17] (MessageAPI) Message API call: info(): `[SessionManager] Resumed session`
  - context: `.metadata.status = 'active'; this.persistSession(session); logger.info('[SessionManager] Resumed session', { sessionId }); return true; } /**`
- [344:22] (MessageAPI) Message API call: error(): `[SessionManager] Failed to recover session`
  - context: `veItem(key); } } } catch (error) { logger.error('[SessionManager] Failed to recover session', { key, error }); localStor`
- [351:19] (MessageAPI) Message API call: info(): `[SessionManager] Recovered sessions`
  - context: `if (recovered.length > 0) { this.saveSessionHistory(); logger.info('[SessionManager] Recovered sessions', { count: recovered.length }); }`
- [574:20] (MessageAPI) Message API call: error(): `[SessionManager] Failed to persist session`
  - context: `setItem(key, JSON.stringify(session)); } catch (error) { logger.error('[SessionManager] Failed to persist session', { sessionId: session.sess`
- [603:20] (MessageAPI) Message API call: error(): `[SessionManager] Failed to load session history`
  - context: `ime) : undefined, })); } } catch (error) { logger.error('[SessionManager] Failed to load session history', { error }); this.sessio`
- [615:20] (MessageAPI) Message API call: error(): `[SessionManager] Failed to save session history`
  - context: `JSON.stringify(this.sessionHistory)); } catch (error) { logger.error('[SessionManager] Failed to save session history', { error }); } } /**`
- [640:17] (MessageAPI) Message API call: info(): `[SessionManager] Updated validation rules`
  - context: `this.validationRules = { ...this.validationRules, ...rules }; logger.info('[SessionManager] Updated validation rules', { rules }); } /** * Get val`
- [664:17] (MessageAPI) Message API call: info(): `[SessionManager] Cleared all sessions`
  - context: `); keys.forEach(key => localStorage.removeItem(key)); logger.info('[SessionManager] Cleared all sessions'); } } // Export singleton instance ex`

### src/lib/storageUtils.ts

- [55:20] (MessageAPI) Message API call: error(): `Error clearing old data:`
  - context: `ON.stringify(filteredAlerts)); } } catch (error) { logger.error('Error clearing old data:', error); } }, /** * Compress data before`

### src/lib/universalAnalyticsInitializer.ts

- [45:20] (MessageAPI) Message API call: error(): `Error initializing universal analytics:`
  - context: `this.initialized = true; } catch (error) { logger.error('Error initializing universal analytics:', error); } } /** * Ensure`
- [101:92] (MessageAPI) Message API call: error(): `Auto-initialization failed:`
  - context: `alyticsInitializer.initializeUniversalAnalytics().catch((error) => logger.error('Auto-initialization failed:', error));`

### src/lib/utils.ts

- [29:18] (MessageAPI) Message API call: error(): `downloadBlob called in a non-browser environment`
  - context: `f window === 'undefined' || typeof document === 'undefined') { logger.error('downloadBlob called in a non-browser environment'); return; } const sa`
- [47:18] (MessageAPI) Message API call: error(): `downloadBlob failed`
  - context: `lick(); document.body.removeChild(link); } catch (err) { logger.error('downloadBlob failed', err); } finally { if (url) { // Defer revocat`

### src/lib/validation/dataLeakage.ts

- [166:21] (MessageAPI) Message API call: info(): `[DataLeakageDetector] Potential leakage risk`
  - context: `, payload); } else if (issue.severity === 'medium') { logger.info('[DataLeakageDetector] Potential leakage risk', payload); } else {`
- [176:20] (MessageAPI) Message API call: error(): `[DataLeakageDetector] Strict mode abort due to leakage`
  - context: `h-risk data leakage detected: \n- ${summary.join('\n- ')}\`); logger.error('[DataLeakageDetector] Strict mode abort due to leakage', { summary }); th`

### src/pages/AddStudent.tsx

- [55:20] (MessageAPI) Message API call: error(): `Error adding student:`
  - context: `dent.success'))); navigate('/'); } catch (error) { logger.error('Error adding student:', error); const errorMessage = error instanceof Err`

### src/pages/Dashboard.tsx

- [39:22] (MessageAPI) Message API call: error(): `Dashboard: Error loading students`
  - context: `(); setStudents(students); } catch (error) { logger.error('Dashboard: Error loading students', { error }); setStudents([]);`
- [116:20] (MessageAPI) Message API call: error(): `Dashboard: Error calculating statistics`
  - context: `tries: entriesTrend } }; } catch (error) { logger.error('Dashboard: Error calculating statistics', { error }); return { todayEntri`
- [168:116] (JSXText) Static JSX text node: `K`
  - context: `ame="text-3xl font-bold text-white motion-safe:group-hover:animate-bounce-slow">K</div> </div> </div>`
- [310:66] (JSXText) Static JSX text node: `from last week`
  - context: `ive">5%</span> <span className="ml-1 text-muted-foreground">from last week</span> </div> </Card>`

### src/pages/DevTools.tsx

- [25:24] (JSXText) Static JSX text node: `Developer Tools`
  - context: `-auto px-4 py-12"> <Card> <CardHeader> <CardTitle>Developer Tools</CardTitle> </CardHeader> <CardContent>`
- [28:58] (JSXText) Static JSX text node: `This section is not available in production.`
  - context: `<CardContent> <p className="text-sm text-muted-foreground">This section is not available in production.</p> </CardContent>`
- [48:13] (JSXText) Static JSX text node: `Developer Tools`
  - context: `ter gap-2"> <Wrench className="h-6 w-6 text-primary" /> Developer Tools </h1> </header> {/* Reuse existing Te`
- [60:15] (JSXText) Static JSX text node: `Storage Management`
  - context: `p-2"> <Database className="h-5 w-5 text-primary" /> Storage Management </CardTitle> </CardHeader> <C`
- [65:15] (JSXText) Static JSX text node: `Inspect and manage local data storage. Clear old or non-essential data safely.`
  - context: `t> <p className="text-sm text-muted-foreground mb-4"> Inspect and manage local data storage. Clear old or non-essential data safely.`
- [71:19] (JSXText) Static JSX text node: `Open Storage Manager`
  - context: `ull"> <Database className="h-4 w-4 mr-2" /> Open Storage Manager </Button> </DialogTrigger>`
- [76:32] (JSXText) Static JSX text node: `Storage Management`
  - context: `overflow-y-auto"> <DialogHeader> <DialogTitle>Storage Management</DialogTitle> </DialogHeader>`
- [78:88] (JSXText) Static JSX text node: `Loading…`
  - context: `<Suspense fallback={<div className="p-4 text-sm text-muted-foreground">Loading…</div>}> <StorageManager /> </Suspense`
- [91:15] (JSXText) Static JSX text node: `Model Diagnostics`
  - context: `"> <Stethoscope className="h-5 w-5 text-primary" /> Model Diagnostics </CardTitle> </CardHeader> <Ca`
- [96:15] (JSXText) Static JSX text node: `Run time-series cross-validation and inspect recent evaluation runs. Loaded on demand to keep main bundle small.`
  - context: `t> <p className="text-sm text-muted-foreground mb-4"> Run time-series cross-validation and inspect recent evaluation runs. Loaded on d`
- [102:19] (JSXText) Static JSX text node: `Open Diagnostics Panel`
  - context: `"> <Stethoscope className="h-4 w-4 mr-2" /> Open Diagnostics Panel </Button> </DialogTrigger>`
- [107:32] (JSXText) Static JSX text node: `Model Diagnostics`
  - context: `overflow-y-auto"> <DialogHeader> <DialogTitle>Model Diagnostics</DialogTitle> </DialogHeader>`
- [109:88] (JSXText) Static JSX text node: `Loading diagnostics…`
  - context: `<Suspense fallback={<div className="p-4 text-sm text-muted-foreground">Loading diagnostics…</div>}> <ModelDiagnosticsPanel />`

### src/pages/EnhancedTrackStudent.tsx

- [45:21] (MessageAPI) Message API call: error(): `Student not found`
  - context: `new Date(foundStudent.createdAt) }); } else { toast.error('Student not found'); navigate('/'); return; } }`
- [45:21] (MessageAPI) sonner toast.error(): `Student not found`
  - context: `new Date(foundStudent.createdAt) }); } else { toast.error('Student not found'); navigate('/'); return; } }`
- [107:19] (MessageAPI) Message API call: error(): `Please add at least one emotion or sensory input before saving.`
  - context: `Emotions.length === 0 && sessionSensoryInputs.length === 0) { toast.error("Please add at least one emotion or sensory input before saving."); return`
- [107:19] (MessageAPI) sonner toast.error(): `Please add at least one emotion or sensory input before saving.`
  - context: `Emotions.length === 0 && sessionSensoryInputs.length === 0) { toast.error("Please add at least one emotion or sensory input before saving."); return`
- [138:21] (MessageAPI) Message API call: success(): `Session saved successfully!`
  - context: `lyticsManager.triggerAnalyticsForStudent(student); } toast.success("Session saved successfully!"); navigate(\`/student/${student.id}\`); }`
- [138:21] (MessageAPI) sonner toast.success(): `Session saved successfully!`
  - context: `lyticsManager.triggerAnalyticsForStudent(student); } toast.success("Session saved successfully!"); navigate(\`/student/${student.id}\`); }`
- [141:20] (MessageAPI) Message API call: error(): `Save session error`
  - context: `navigate(\`/student/${student.id}\`); } catch (error) { logger.error('Save session error', { error }); toast.error("Failed to save session. Ple`
- [142:19] (MessageAPI) Message API call: error(): `Failed to save session. Please try again.`
  - context: `error) { logger.error('Save session error', { error }); toast.error("Failed to save session. Please try again."); } }; const handleCancel =`
- [142:19] (MessageAPI) sonner toast.error(): `Failed to save session. Please try again.`
  - context: `error) { logger.error('Save session error', { error }); toast.error("Failed to save session. Please try again."); } }; const handleCancel =`
- [148:19] (MessageAPI) Message API call: confirm(): `You have unsaved data. Are you sure you want to cancel?`
  - context: `sionEmotions.length > 0 || sessionSensoryInputs.length > 0) { if (confirm("You have unsaved data. Are you sure you want to cancel?")) { navigate(\``
- [169:42] (JSXText) Static JSX text node: `Loading student data...`
  - context: `tring(tCommon('status.loading'))}</h1> <div className="animate-pulse">Loading student data...</div> </div> </div> ); } const se`
- [190:15] (JSXText) Static JSX text node: `Back to Profile`
  - context: `> <ArrowLeft className="h-4 w-4 mr-2" /> Back to Profile </Button> <div> <h1 classN`
- [193:49] (JSXText) Static JSX text node: `Tracking Session:`
  - context: `</Button> <div> <h1 className="text-xl font-bold">Tracking Session: {student.name}</h1> <div className="flex items-c`
- [196:17] (JSXText) Static JSX text node: `Session duration:`
  - context: `uted-foreground"> <Clock className="h-3 w-3" /> Session duration: {sessionDuration} minutes </div> </d`
- [196:53] (JSXText) Static JSX text node: `minutes`
  - context: `lock className="h-3 w-3" /> Session duration: {sessionDuration} minutes </div> </div> </div> <div`
- [203:15] (JSXText) Static JSX text node: `Cancel`
  - context: `lick={handleCancel}> <X className="h-4 w-4 mr-2" /> Cancel </Button> <Button onClick={handleS`
- [210:15] (JSXText) Static JSX text node: `Save Session`
  - context: `0} > <Save className="h-4 w-4 mr-2" /> Save Session </Button> </div> </div> </heade`
- [222:15] (JSXText) Static JSX text node: `Current Session Summary`
  - context: `"> <CheckCircle className="h-5 w-5 text-primary" /> Current Session Summary </CardTitle> </CardHeader>`
- [229:64] (JSXText) Static JSX text node: `Emotions Tracked`
  - context: `ns.length}</div> <div className="text-sm text-muted-foreground">Emotions Tracked</div> </div> <div className="text-c`
- [233:64] (JSXText) Static JSX text node: `Sensory Inputs`
  - context: `ts.length}</div> <div className="text-sm text-muted-foreground">Sensory Inputs</div> </div> <div className="text-cen`
- [236:83] (JSXText) Static JSX text node: `m`
  - context: `<div className="text-2xl font-bold text-primary">{sessionDuration}m</div> <div className="text-sm text-muted-foreground">Session T`
- [237:64] (JSXText) Static JSX text node: `Session Time`
  - context: `Duration}m</div> <div className="text-sm text-muted-foreground">Session Time</div> </div> </div> {sessionE`
- [242:17] (JSXText) Static JSX text node: `Start tracking by adding emotions or sensory inputs below`
  - context: `p-3 bg-muted/50 rounded-lg text-center text-muted-foreground"> Start tracking by adding emotions or sensory inputs below </div>`
- [261:26] (JSXText) Static JSX text node: `Session Data Review`
  - context: `th > 0) && ( <Card> <CardHeader> <CardTitle>Session Data Review</CardTitle> </CardHeader> <CardConte`
- [267:52] (JSXText) Static JSX text node: `Emotions This Session`
  - context: `0 && ( <div> <h4 className="font-medium mb-2">Emotions This Session</h4> <div className="space-y-2">`
- [274:29] (JSXText) Static JSX text node: `Intensity:`
  - context: `<div className="text-sm text-muted-foreground"> Intensity: {emotion.intensity}/5 </div>`
- [278:31] (JSXText) Static JSX text node: `Context:`
  - context: `<div className="text-sm text-muted-foreground"> Context: {emotion.context} </div>`
- [301:52] (JSXText) Static JSX text node: `Sensory Inputs This Session`
  - context: `0 && ( <div> <h4 className="font-medium mb-2">Sensory Inputs This Session</h4> <div className="space-y-2">`
- [312:31] (JSXText) Static JSX text node: `Context:`
  - context: `<div className="text-sm text-muted-foreground"> Context: {sensory.context} </div>`
- [338:24] (JSXText) Static JSX text node: `Session Notes`
  - context: `General Notes */} <Card> <CardHeader> <CardTitle>Session Notes</CardTitle> </CardHeader> <CardContent>`
- [342:46] (JSXText) Static JSX text node: `General observations or notes`
  - context: `<div className="space-y-2"> <Label htmlFor="general-notes">General observations or notes</Label> <Textarea id`
- [347:29] (JSXAttribute) Static placeholder attribute: `Add any additional observations, environmental factors, or context about this session...`
  - context: `onChange={(e) => setGeneralNotes(e.target.value)} placeholder="Add any additional observations, environmental factors, or context about this s`

### src/pages/NotFound.tsx

- [14:18] (MessageAPI) Message API call: error(): `404 Error: User attempted to access non-existent route`
  - context: `; const { tCommon } = useTranslation(); useEffect(() => { logger.error("404 Error: User attempted to access non-existent route", { path: location`

### src/pages/ReportsClean.tsx

- [96:20] (MessageAPI) Message API call: error(): `Reports: failed to load data for export`
  - context: `ts, trackingEntries, goals } as const; } catch (error) { logger.error('Reports: failed to load data for export', { error }); return { students:`
- [127:20] (MessageAPI) Message API call: error(): `System CSV export failed`
  - context: `tSettings('dataExport.success_csv'))); } catch (error) { logger.error('System CSV export failed', { error }); toast.error(tSettings('dataExport.`
- [160:20] (MessageAPI) Message API call: error(): `System JSON export failed`
  - context: `Settings('dataExport.success_json'))); } catch (error) { logger.error('System JSON export failed', { error }); toast.error(tSettings('dataExport`
- [192:20] (MessageAPI) Message API call: error(): `System backup failed`
  - context: `ttings('dataExport.success_backup'))); } catch (error) { logger.error('System backup failed', { error }); toast.error(tSettings('dataExport.erro`

### src/pages/ReportsHub.tsx

- [50:34] (JSXAttribute) Static aria-labelledby attribute: `reports-templates-heading`
  - context: `</Link> </div> </header> <section aria-labelledby="reports-templates-heading" className="space-y-4"> <h2 id="reports-tem`
- [70:19] (JSXText) Static JSX text node: `Link to=`
  - context: `sCount', { count: card.sections })} </span> Link to={\`/reports/builder?template=${card.id}\`} className="inline-block">`
- [70:69] (JSXText) Static JSX text node: `className="inline-block">
                    Button>
                      FileText className="h-4 w-4 mr-2" /`
  - context: `</span> Link to={\`/reports/builder?template=${card.id}\`} className="inline-block"> Button> `
- [74:21] (JSXText) Static JSX text node: `/Button
                  /Link`
  - context: `/ {tCommon('reports.createReport')} /Button /Link </CardContent>`

### src/pages/Settings.tsx

- [26:65] (JSXAttribute) Static aria-label attribute: `Settings navigation`
  - context: `-cols-4 gap-6"> <aside className="md:col-span-1 space-y-2" aria-label="Settings navigation"> <ul className="text-sm"> <li> <`

### src/pages/StudentProfile.original.tsx

- [178:21] (MessageAPI) Message API call: info(): `Auto-seeding minimal demo data for mock route`
  - context: `.current = true; setIsSeedingData(true); try { logger.info('Auto-seeding minimal demo data for mock route', { studentId });`
- [194:22] (MessageAPI) Message API call: error(): `Failed to auto-seed mock data`
  - context: `reloadData(); } } catch (error) { logger.error('Failed to auto-seed mock data', { error, studentId }); toast.error(Stri`
- [243:24] (MessageAPI) Message API call: error(): `Error generating insights`
  - context: `} } catch (error) { if (!signal.aborted) { logger.error('Error generating insights', { error }); setInsights(null);`
- [273:26] (MessageAPI) Message API call: error(): `[SAFE] analyticsManager.triggerAnalyticsForStudent failed`
  - context: `} }) .catch((err) => { logger.error('[SAFE] analyticsManager.triggerAnalyticsForStudent failed', { error: err, stude`
- [285:24] (MessageAPI) Message API call: error(): `[SAFE] analyticsManager.initializeStudentAnalytics failed`
  - context: `entAnalytics done'); } } catch (err) { logger.error('[SAFE] analyticsManager.initializeStudentAnalytics failed', { error: err, stude`
- [290:20] (MessageAPI) Message API call: error(): `[SAFE] analyticsManager outer try/catch caught error`
  - context: `/ Extra safety net; never rethrow from analytics side-effect logger.error('[SAFE] analyticsManager outer try/catch caught error', { error: err }); }`
- [357:20] (MessageAPI) Message API call: error(): `Export error`
  - context: `(tCommon('status.success'))); } catch (error: unknown) { logger.error('Export error', { error }); const errorMessage = error instanceof Error ?`
- [381:20] (MessageAPI) Message API call: error(): `Backup error`
  - context: `ss(String(tCommon('status.success'))); } catch (error) { logger.error('Backup error', { error }); toast.error(String(tCommon('error.title')));`

### src/pages/StudentProfile.tsx

- [178:21] (MessageAPI) Message API call: info(): `Auto-seeding minimal demo data for mock route`
  - context: `.current = true; setIsSeedingData(true); try { logger.info('Auto-seeding minimal demo data for mock route', { studentId });`
- [187:23] (MessageAPI) Message API call: success(): `Demo data created successfully`
  - context: `); // Show non-intrusive success message toast.success('Demo data created successfully', { description: 'Sample data has been`
- [187:23] (MessageAPI) sonner toast.success(): `Demo data created successfully`
  - context: `); // Show non-intrusive success message toast.success('Demo data created successfully', { description: 'Sample data has been`
- [196:22] (MessageAPI) Message API call: error(): `Failed to auto-seed mock data`
  - context: `reloadData(); } } catch (error) { logger.error('Failed to auto-seed mock data', { error, studentId }); toast.error('Fai`
- [197:21] (MessageAPI) Message API call: error(): `Failed to create demo data`
  - context: `ror('Failed to auto-seed mock data', { error, studentId }); toast.error('Failed to create demo data', { description: 'Please try loading mock`
- [197:21] (MessageAPI) sonner toast.error(): `Failed to create demo data`
  - context: `ror('Failed to auto-seed mock data', { error, studentId }); toast.error('Failed to create demo data', { description: 'Please try loading mock`
- [247:24] (MessageAPI) Message API call: error(): `Error generating insights`
  - context: `} } catch (error) { if (!signal.aborted) { logger.error('Error generating insights', { error }); setInsights(null);`
- [249:23] (MessageAPI) Message API call: error(): `Failed to generate insights`
  - context: `ating insights', { error }); setInsights(null); toast.error('Failed to generate insights'); } } finally { if (!signal.`
- [249:23] (MessageAPI) sonner toast.error(): `Failed to generate insights`
  - context: `ating insights', { error }); setInsights(null); toast.error('Failed to generate insights'); } } finally { if (!signal.`
- [277:26] (MessageAPI) Message API call: error(): `[SAFE] analyticsManager.triggerAnalyticsForStudent failed`
  - context: `} }) .catch((err) => { logger.error('[SAFE] analyticsManager.triggerAnalyticsForStudent failed', { error: err, stude`
- [289:24] (MessageAPI) Message API call: error(): `[SAFE] analyticsManager.initializeStudentAnalytics failed`
  - context: `entAnalytics done'); } } catch (err) { logger.error('[SAFE] analyticsManager.initializeStudentAnalytics failed', { error: err, stude`
- [294:20] (MessageAPI) Message API call: error(): `[SAFE] analyticsManager outer try/catch caught error`
  - context: `/ Extra safety net; never rethrow from analytics side-effect logger.error('[SAFE] analyticsManager outer try/catch caught error', { error: err }); }`
- [361:20] (MessageAPI) Message API call: error(): `Export error`
  - context: `as ${format.toUpperCase()}\`); } catch (error: unknown) { logger.error('Export error', { error }); const errorMessage = error instanceof Error ?`
- [383:21] (MessageAPI) Message API call: success(): `Backup created successfully`
  - context: `]/g, '-')}.json\`; downloadBlob(backupBlob, filename); toast.success('Backup created successfully'); } catch (error) { logger.error('Backup`
- [383:21] (MessageAPI) sonner toast.success(): `Backup created successfully`
  - context: `]/g, '-')}.json\`; downloadBlob(backupBlob, filename); toast.success('Backup created successfully'); } catch (error) { logger.error('Backup`
- [385:20] (MessageAPI) Message API call: error(): `Backup error`
  - context: `uccess('Backup created successfully'); } catch (error) { logger.error('Backup error', { error }); toast.error('Backup failed. Please try again.'`
- [386:19] (MessageAPI) Message API call: error(): `Backup failed. Please try again.`
  - context: `atch (error) { logger.error('Backup error', { error }); toast.error('Backup failed. Please try again.'); } }, [student, trackingEntries, allEm`
- [386:19] (MessageAPI) sonner toast.error(): `Backup failed. Please try again.`
  - context: `atch (error) { logger.error('Backup error', { error }); toast.error('Backup failed. Please try again.'); } }, [student, trackingEntries, allEm`

### src/pages/StudentProfileOptimized.tsx

- [123:23] (MessageAPI) Message API call: success(): `Demo data created successfully`
  - context: `window.dispatchEvent(new CustomEvent('mockDataLoaded')); toast.success('Demo data created successfully'); if (reloadData) reloadData(); }`
- [123:23] (MessageAPI) sonner toast.success(): `Demo data created successfully`
  - context: `window.dispatchEvent(new CustomEvent('mockDataLoaded')); toast.success('Demo data created successfully'); if (reloadData) reloadData(); }`
- [126:22] (MessageAPI) Message API call: error(): `Failed to auto-seed mock data`
  - context: `if (reloadData) reloadData(); } catch (error) { logger.error('Failed to auto-seed mock data', { error, studentId }); toast.error('Fai`
- [127:21] (MessageAPI) Message API call: error(): `Failed to create demo data`
  - context: `ror('Failed to auto-seed mock data', { error, studentId }); toast.error('Failed to create demo data'); } finally { setIsSeedingData(false)`
- [127:21] (MessageAPI) sonner toast.error(): `Failed to create demo data`
  - context: `ror('Failed to auto-seed mock data', { error, studentId }); toast.error('Failed to create demo data'); } finally { setIsSeedingData(false)`
- [154:26] (MessageAPI) Message API call: error(): `Failed to get insights`
  - context: `ewInsights); } } catch (error) { logger.error('Failed to get insights', { error }); } finally { setIsLoa`
- [212:20] (MessageAPI) Message API call: error(): `Export error`
  - context: `essfully as ${format.toUpperCase()}\`); } catch (error) { logger.error('Export error', { error }); toast.error(\`Export failed: ${error instanceof`

### src/pages/TrackStudent.tsx

- [48:19] (MessageAPI) Message API call: success(): `Emotion recorded!`
  - context: `| 'timestamp'>) => { setEmotions([...emotions, emotion]); toast.success("Emotion recorded!"); }; const handleSensoryAdd = (sensory: Omit<SensoryEnt`
- [48:19] (MessageAPI) sonner toast.success(): `Emotion recorded!`
  - context: `| 'timestamp'>) => { setEmotions([...emotions, emotion]); toast.success("Emotion recorded!"); }; const handleSensoryAdd = (sensory: Omit<SensoryEnt`
- [53:19] (MessageAPI) Message API call: success(): `Sensory input recorded!`
  - context: `mp'>) => { setSensoryInputs([...sensoryInputs, sensory]); toast.success("Sensory input recorded!"); }; const handleEnvironmentalAdd = (environmenta`
- [53:19] (MessageAPI) sonner toast.success(): `Sensory input recorded!`
  - context: `mp'>) => { setSensoryInputs([...sensoryInputs, sensory]); toast.success("Sensory input recorded!"); }; const handleEnvironmentalAdd = (environmenta`
- [58:19] (MessageAPI) Message API call: success(): `Environmental conditions recorded!`
  - context: `| 'timestamp'>) => { setEnvironmentalData(environmental); toast.success("Environmental conditions recorded!"); }; const handleSaveSession = async (`
- [58:19] (MessageAPI) sonner toast.success(): `Environmental conditions recorded!`
  - context: `| 'timestamp'>) => { setEnvironmentalData(environmental); toast.success("Environmental conditions recorded!"); }; const handleSaveSession = async (`
- [108:20] (MessageAPI) Message API call: error(): `Failed to save tracking session`
  - context: `navigate(\`/student/${student.id}\`); } catch (error) { logger.error('Failed to save tracking session', { error }); toast.error(String(tTrackin`
- [155:13] (JSXText) Static JSX text node: `Record emotions and sensory responses for this session`
  - context: `</div> <p className="text-muted-foreground"> Record emotions and sensory responses for this session </p> </`

### src/workers/analytics.worker.ts

- [405:18] (MessageAPI) Message API call: error(): `[analytics.worker] error`
  - context: `'complete', percent: 100 } }); } catch (error) { try { logger.error('[analytics.worker] error', error); } catch (e) { /* noop */ }`
- [409:18] (MessageAPI) Message API call: error(): `Error in analytics worker:`
  - context: `rker] error', error); } catch (e) { /* noop */ } logger.error('Error in analytics worker:', error); // Post an error message back to the m`

### src/workers/hyperparameterOptimization.worker.ts

- [125:18] (MessageAPI) Message API call: error(): `Error in hyperparameter optimization worker:`
  - context: `the main thread postMessage(result); } catch (error) { logger.error('Error in hyperparameter optimization worker:', error); // Post error messag`
- [297:18] (MessageAPI) Message API call: error(): `Grid search failed:`
  - context: `r strategy: 'gridSearch' }; } catch (error) { logger.error('Grid search failed:', error); throw new Error(\`Grid search optimization fai`
- [426:18] (MessageAPI) Message API call: error(): `Random search failed:`
  - context: `strategy: 'randomSearch' }; } catch (error) { logger.error('Random search failed:', error); throw new Error(\`Random search optimization`

