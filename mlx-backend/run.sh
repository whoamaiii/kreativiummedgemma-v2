#!/bin/bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

if [ ! -d venv ]; then
	python3 -m venv venv

fi

"$SCRIPT_DIR/venv/bin/pip" install -r requirements.txt

export GEMMA3_MODEL_ID=${GEMMA3_MODEL_ID:-mlx-community/gemma-3-4b-it-4bit}
export PORT=${PORT:-8000}

exec "$SCRIPT_DIR/venv/bin/uvicorn" app:app --host 0.0.0.0 --port "$PORT"


