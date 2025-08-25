import { useCallback, useEffect, useState } from 'react';
import { gemmaHealth, generateWithGemma, GemmaGenerateOptions } from '@/lib/ai/gemmaClient';

export function useGemma(baseUrl?: string) {
	const [ready, setReady] = useState(false);
	const [model, setModel] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const refresh = useCallback(async () => {
		try {
			setError(null);
			const h = await gemmaHealth(baseUrl);
			setReady(h.loaded);
			setModel(h.model);
		} catch (e) {
			setReady(false);
			setModel(null);
			setError(e instanceof Error ? e.message : 'Health check failed');
		}
	}, [baseUrl]);

	useEffect(() => {
		void refresh();
	}, [refresh]);

	const generate = useCallback(
		async (prompt: string, options?: GemmaGenerateOptions) => {
			try {
				setLoading(true);
				setError(null);
				return await generateWithGemma(prompt, options, baseUrl);
			} catch (e) {
				setError(e instanceof Error ? e.message : 'Generate failed');
				throw e;
			} finally {
				setLoading(false);
			}
		},
		[baseUrl]
	);

	return { ready, model, loading, error, refresh, generate };
}


