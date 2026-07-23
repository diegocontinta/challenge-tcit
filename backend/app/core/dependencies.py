from fastapi import Depends
from sqlalchemy.orm import Session

from app.db.database import DB, get_db
from app.repositories.post_repository import PostRepository
from app.services.post_service import PostService

def get_post_repository(db: Session = DB) -> PostRepository:
   return PostRepository(db)


def get_post_service(repo: PostRepository = Depends(get_post_repository)) -> PostService:
   return PostService(repo)

 



