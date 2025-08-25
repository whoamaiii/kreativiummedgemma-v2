import React, { useState } from 'react';
import { useGemma } from '@/hooks/useGemma';

const GemmaDemo: React.FC = () => {
	const { ready, model, loading, error, generate, refresh } = useGemma();
	const [prompt, setPrompt] = useState('Write a short parent-friendly summary about sensory processing.');
	const [output, setOutput] = useState('');

	const onRun = async () => {
		setOutput('');
		const text = await generate(prompt, { maxTokens: 256, temperature: 0.3 });
		setOutput(text);
	};

	return (
		<div className="p-6 space-y-4">
			<h1 className="text-2xl font-semibold">Gemma 3 (MLX) Demo</h1>
			<div className="text-sm text-muted-foreground">Model: {model ?? 'loading...'} | Ready: {ready ? 'yes' : 'no'}</div>
			{error && <div className="text-red-600">{error}</div>}
			<div className="space-y-2">
				<textarea
					className="w-full h-32 p-3 border rounded"
					value={prompt}
					onChange={(e) => setPrompt(e.target.value)}
				/>
				<div className="flex gap-2">
					<button className="px-4 py-2 bg-black text-white rounded disabled:opacity-50" disabled={!ready || loading} onClick={onRun}>Generate</button>
					<button className="px-4 py-2 border rounded" onClick={() => refresh()}>Refresh</button>
				</div>
			</div>
			<div>
				<h2 className="text-lg font-medium mb-2">Output</h2>
				<pre className="whitespace-pre-wrap bg-gray-50 p-3 rounded border min-h-24">{output}</pre>
			</div>
		</div>
	);
};

export default GemmaDemo;


