# backend-TheCatAPI

API REST construida con Node.js y Express que consume TheCatAPI.

## Requisitos
- Node.js 18+
- Una API key de [thecatapi.com](https://thecatapi.com)

## Instalación

1. Clona el repositorio
2. Instala dependencias:
   npm install
3. Crea tu archivo .env basado en .env.example:
   PORT=4000
   THECAT_API_KEY=tu_api_key
   THECAT_API_BASE_URL=https://api.thecatapi.com/v1
4. Corre el servidor:
   npm run dev

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /api/cats/random | Gatos aleatorios |
| GET | /api/cats/random?limit=5 | N gatos aleatorios |
| GET | /api/cats/breeds | Lista de razas |
| GET | /api/cats/breed/:breedId | Gatos por raza |
| GET | /health | Estado del servidor |