export interface GemmaGenerateOptions {
	maxTokens?: number;
	temperature?: number;
	topP?: number;
	repetitionPenalty?: number;
}

export async function generateWithGemma(
	prompt: string,
	options: GemmaGenerateOptions = {},
	baseUrl: string = (import.meta.env.VITE_GEMMA_BASE_URL as string) || 'http://127.0.0.1:8000'
): Promise<string> {
	const body = {
		prompt,
		max_tokens: options.maxTokens ?? 512,
		temperature: options.temperature ?? 0.3,
		top_p: options.topP ?? 0.95,
		repetition_penalty: options.repetitionPenalty ?? 1.05,
	};

	const res = await fetch(`${baseUrl}/generate`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body),
	});

	if (!res.ok) {
		throw new Error(`Gemma generate failed: ${res.status}`);
	}

	const data = await res.json();
	return data.text as string;
}

export async function gemmaHealth(
	baseUrl: string = (import.meta.env.VITE_GEMMA_BASE_URL as string) || 'http://127.0.0.1:8000'
): Promise<{ status: string; model: string; loaded: boolean }> {
	const res = await fetch(`${baseUrl}/health`);
	if (!res.ok) throw new Error('Gemma health check failed');
	return res.json();
}


