import os
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

from mlx_lm import load, generate
from mlx_lm.sample_utils import make_sampler, make_logits_processors


class GenerateRequest(BaseModel):
	prompt: str
	max_tokens: Optional[int] = 512
	temperature: Optional[float] = 0.3
	top_p: Optional[float] = 0.95
	repetition_penalty: Optional[float] = 1.05


app = FastAPI(title="Kreativium MLX Backend", version="1.0.0")

# CORS for local frontend
app.add_middleware(
	CORSMiddleware,
	allow_origins=[
		"http://localhost:5173",
		"http://127.0.0.1:5173",
	],
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"],
)


MODEL_ID = os.getenv("GEMMA3_MODEL_ID", "mlx-community/gemma-3-4b-it-4bit")


_model = None
_tokenizer = None


@app.on_event("startup")
def _load_model():
	global _model, _tokenizer
	if _model is None:
		_model, _tokenizer = load(MODEL_ID)


@app.get("/health")
def health():
	return {"status": "ok", "model": MODEL_ID, "loaded": _model is not None}


@app.post("/generate")
def generate_text(req: GenerateRequest):
	# Build sampler and logits processors to match mlx-lm API
	temp = req.temperature if req.temperature is not None else 0.3
	top_p = req.top_p if req.top_p is not None else 0.95
	sampl = make_sampler(temp=temp, top_p=top_p)
	logits_processors = make_logits_processors(
		repetition_penalty=(req.repetition_penalty if req.repetition_penalty and req.repetition_penalty != 1.0 else None)
	)

	text = generate(
		_model,
		_tokenizer,
		prompt=req.prompt,
		max_tokens=req.max_tokens,
		sampler=sampl,
		logits_processors=logits_processors,
		verbose=False,
	)
	return {"text": text}


if __name__ == "__main__":
	uvicorn.run("app:app", host="0.0.0.0", port=int(os.getenv("PORT", 8000)))


