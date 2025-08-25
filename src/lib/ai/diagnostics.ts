import { gemmaHealth, generateWithGemma } from '@/lib/ai/gemmaClient';
import { logger } from '@/lib/logger';

/**
 * Comprehensive AI system diagnostics
 */
export async function runAIDiagnostics() {
  const results: Record<string, any> = {};
  
  console.group('🔍 AI System Diagnostics');
  
  // 1. Environment Check
  console.log('📋 Environment Variables:');
  const baseUrl = (import.meta.env.VITE_GEMMA_BASE_URL as string) || 'http://127.0.0.1:8000';
  console.log('  VITE_GEMMA_BASE_URL:', baseUrl);
  console.log('  VITE_ENABLE_BIGSTIAN_AI:', import.meta.env.VITE_ENABLE_BIGSTIAN_AI);
  console.log('  NODE_ENV:', import.meta.env.NODE_ENV);
  console.log('  MODE:', import.meta.env.MODE);
  results.environment = { baseUrl, env: import.meta.env };
  
  // 2. Server Health Check
  console.log('🏥 Server Health Check:');
  try {
    const health = await gemmaHealth(baseUrl);
    console.log('  ✅ Server Status:', health);
    results.serverHealth = { status: 'ok', data: health };
  } catch (error) {
    console.error('  ❌ Server Health Failed:', error);
    results.serverHealth = { status: 'failed', error: error instanceof Error ? error.message : String(error) };
  }
  
  // 3. Basic Generation Test
  console.log('🧪 Basic Generation Test:');
  try {
    const testPrompt = 'Return only this JSON: {"test": "success", "number": 42}';
    const response = await generateWithGemma(testPrompt, { maxTokens: 100, temperature: 0.1 }, baseUrl);
    console.log('  📤 Sent:', testPrompt);
    console.log('  📥 Raw Response:', response);
    
    // Try parsing
    try {
      const parsed = JSON.parse(response);
      console.log('  ✅ JSON Parse Success:', parsed);
      results.basicTest = { status: 'ok', response, parsed };
    } catch (parseError) {
      console.error('  ❌ JSON Parse Failed:', parseError);
      results.basicTest = { status: 'parse_failed', response, error: parseError instanceof Error ? parseError.message : String(parseError) };
    }
  } catch (error) {
    console.error('  ❌ Generation Failed:', error);
    results.basicTest = { status: 'generation_failed', error: error instanceof Error ? error.message : String(error) };
  }
  
  // 4. Network Diagnostics
  console.log('🌐 Network Diagnostics:');
  try {
    const response = await fetch(`${baseUrl}/health`);
    console.log('  Status:', response.status, response.statusText);
    console.log('  Headers:', Object.fromEntries(response.headers.entries()));
    results.network = { status: response.status, headers: Object.fromEntries(response.headers.entries()) };
  } catch (error) {
    console.error('  ❌ Network Failed:', error);
    results.network = { status: 'failed', error: error instanceof Error ? error.message : String(error) };
  }
  
  console.groupEnd();
  
  // Log to application logger as well
  logger.info('AI Diagnostics Complete', results);
  
  return results;
}

/**
 * Test the actual narrative generation pipeline with debugging
 */
export async function testNarrativeGeneration(input: any) {
  console.group('🤖 Narrative Generation Test');
  
  try {
    const { buildNarrativePrompt } = await import('./bigstian/prompts');
    const { generateNarrative } = await import('./bigstian/orchestrator');
    
    // Build prompt
    const prompt = buildNarrativePrompt(input, 'professional_iep');
    console.log('📝 Generated Prompt:');
    console.log(prompt);
    
    // Test generation
    console.log('🎯 Testing Generation...');
    const result = await generateNarrative({ input, maxTokens: 768, temperature: 0.2 });
    console.log('✅ Generation Success:', result);
    
    console.groupEnd();
    return { status: 'success', result, prompt };
  } catch (error) {
    console.error('❌ Generation Failed:', error);
    console.groupEnd();
    return { status: 'failed', error: error instanceof Error ? error.message : String(error) };
  }
}
