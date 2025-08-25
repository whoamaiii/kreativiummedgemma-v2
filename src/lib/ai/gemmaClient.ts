export interface GemmaGenerateOptions {
	maxTokens?: number;
	temperature?: number;
	topP?: number;
	repetitionPenalty?: number;
	/** Optional timeout for the request in milliseconds (default 30000) */
	timeoutMs?: number;
	/** Optional stop sequences to terminate generation */
	stop?: string[];
}

export async function generateWithGemma(
	prompt: string,
	options: GemmaGenerateOptions = {},
	baseUrl: string = (import.meta.env.VITE_GEMMA_BASE_URL as string) || 'http://127.0.0.1:8000'
): Promise<string> {
	const body = {
		prompt,
		max_tokens: options.maxTokens ?? Number(import.meta.env.VITE_GEMMA_MAX_TOKENS ?? 512),
		temperature: options.temperature ?? Number(import.meta.env.VITE_GEMMA_TEMPERATURE ?? 0.3),
		top_p: options.topP ?? Number(import.meta.env.VITE_GEMMA_TOP_P ?? 0.95),
		repetition_penalty: options.repetitionPenalty ?? Number(import.meta.env.VITE_GEMMA_REP_PENALTY ?? 1.05),
		stop: options.stop ?? ['</JSON>'],
	};

	const controller = new AbortController();
	const timeout = options.timeoutMs ?? 30000;
	const timer = setTimeout(() => controller.abort(), timeout);
	try {
		const res = await fetch(`${baseUrl}/generate`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
			signal: controller.signal,
		});

		if (!res.ok) {
			throw new Error(`Gemma generate failed: ${res.status}`);
		}

		const data = await res.json();
		return data.text as string;
	} catch (err) {
		if ((err as any)?.name === 'AbortError') {
			throw new Error('Gemma request timed out');
		}
		throw err as Error;
	} finally {
		clearTimeout(timer);
	}
}

export async function gemmaHealth(
	baseUrl: string = (import.meta.env.VITE_GEMMA_BASE_URL as string) || 'http://127.0.0.1:8000'
): Promise<{ status: string; model: string; loaded: boolean }> {
	const res = await fetch(`${baseUrl}/health`);
	if (!res.ok) throw new Error('Gemma health check failed');
	return res.json();
}


