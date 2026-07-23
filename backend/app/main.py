from fastapi import Depends, FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from sqlalchemy import text
from sqlalchemy.orm import Session

from app.api.v1 import posts as posts_router
from app.core.config import settings
from app.db.database import get_db
from app.exceptions.post import PostNotFoundException

app = FastAPI(title=settings.PROJECT_NAME, version=settings.VERSION)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(posts_router.router, prefix=settings.API_V1_STR)


@app.get("/health")
def health():
    return {"status": "ok"}


@app.get("/health/db")
def health_db(db: Session = Depends(get_db)):
    db.execute(text("SELECT 1"))
    return {"database": "up"}


@app.exception_handler(PostNotFoundException)
async def post_not_found_exception_handler(
    request: Request, exc: PostNotFoundException
):
    return JSONResponse(
        status_code=404,
        content={"detail": str(exc)},
    )
