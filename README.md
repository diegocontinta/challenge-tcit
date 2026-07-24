# Challenge TCIT

CRUD de posts — FastAPI + React (Vite) + Redux Toolkit + PostgreSQL.

## Stack

| Capa | Tecnología |
|------|------------|
| Frontend | React, TypeScript, Vite, Redux Toolkit, Tailwind/shadcn |
| Backend | FastAPI, SQLAlchemy, Alembic, Pydantic |
| DB | PostgreSQL 17 |
| Infra | Docker Compose |

## Requisitos

- Docker Desktop / Docker Compose
- (Opcional) Node 22+ y Python 3.13 si corrés algo fuera de Docker

## Configuración

```bash
cp backend/.env-example backend/.env
```
Contenido de backend/.env para Docker:
```ENV
DATABASE_URL=postgresql+psycopg://postgres:postgres@db:5432/posts
```

## Levantar 
```bash
docker compose up --build
```

## Servicios

| Capa | Tecnología |
|------|------------|
| Frontend | http://localhost:5173 |
| Backend | http://localhost:8000/docs |
| Health | http://localhost:8000/health |
| Postgres | `localhost:5432` (user/pass/db: `postgres` / `postgres` / `posts`) |


## Detener
```bash
docker compose down
```
# Migraciones
Con la DB arriba, aplicar esquema:

```bash
# desde el host (usa localhost en DATABASE_URL)
cd backend && source venv/bin/activate
# DATABASE_URL=postgresql+psycopg://postgres:postgres@localhost:5432/posts
alembic upgrade head
```

O dentro del contenedor (host db):

```bash
docker compose exec backend alembic upgrade head
```

## API principal
- GET `/api/v1/posts/`
- POST `/api/v1/posts/` → retorna el post creado
- DELETE `/api/v1/posts/{id}` → retorna el post eliminado

## Estructura
```bash
backend/app/     # API, services, repositories, models
frontend/src/    # UI, Redux store, API client
docker-compose.yml
```

## Notas
El frontend llama a http://localhost:8000/api/v1 (browser → host).