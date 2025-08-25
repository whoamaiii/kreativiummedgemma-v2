# Kreativium Beta v2

A comprehensive sensory tracking and analytics platform for special education professionals.

## About

This project was imported from the kreativiumbeta2 local development environment. It contains:

- **Dist folder**: Built application artifacts ready for deployment
- **MLX Backend**: Python backend for machine learning inference
- **Public folder**: Static assets and model configurations

## Project Structure

```
kreativiumbeta2/
├── dist/              # Built application
│   ├── assets/        # Bundled JavaScript and CSS
│   ├── models/        # Model configuration files
│   └── index.html     # Main application entry
├── mlx-backend/       # Python ML backend
│   └── models/        # MLX model files
└── public/            # Static assets
    └── models/        # Public model files
```

## Features

- **Sensory Tracking**: Comprehensive sensory input monitoring
- **Emotion Analytics**: Advanced emotion pattern analysis
- **AI Integration**: Gemma 3 270M model for insights
- **Report Generation**: Automated PDF reports
- **Real-time Analytics**: Live pattern detection

## Deployment

The `dist` folder contains the production-ready build that can be deployed to any static hosting platform.

## Configuration

Model configurations are stored in `dist/models/gemma3-270m-it/` with:
- `config.json` - Model configuration
- `tokenizer_config.json` - Tokenizer settings

## Notes

- Large binary files (*.onnx, *.bin, *.safetensors) are excluded from git
- WASM files are excluded due to size constraints
- Python virtual environment is excluded from git

## Original Project

This is a continuation of the KreativiumV17 project, representing the beta v2 iteration with enhanced ML capabilities and improved analytics.

---

## Local Gemma (MLX) Quickstart

Run Gemma 3 locally on Apple Silicon using MLX.

1) Backend (FastAPI + MLX):

```
cd mlx-backend
bash ./run.sh
# First run will download the model (defaults to mlx-community/gemma-3-4b-it-4bit)
```

2) Frontend:

```
npm run dev
```

3) Optional demo route (off by default):

Create `.env` in project root:

```
VITE_ENABLE_GEMMA_DEMO=true
VITE_GEMMA_BASE_URL=http://127.0.0.1:8000
```

Then visit `http://localhost:5173/dev/gemma-demo`.

If port 8000 is in use, stop the previous backend or change `PORT` before launching:

```
PORT=8001 bash ./mlx-backend/run.sh
```
