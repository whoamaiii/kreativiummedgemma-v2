# Kreativium MLX Backend

This is an Apple Silicon-optimized backend for running Gemma 3 locally using MLX.

## Quickstart

```
cd mlx-backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# (optional) export a different model id
# export GEMMA3_MODEL_ID=mlx-community/gemma-3-4b-it-4bit

uvicorn app:app --host 0.0.0.0 --port 8000
```

## Test

```
curl -s http://localhost:8000/health | jq
curl -s -X POST http://localhost:8000/generate \
  -H 'Content-Type: application/json' \
  -d '{"prompt":"Explain sensory processing in simple terms for parents.","max_tokens":128}' | jq
```

## Notes
- Default model: `mlx-community/gemma-3-4b-it-4bit` (fits within 24GB unified memory)
- Change the model via `GEMMA3_MODEL_ID`
