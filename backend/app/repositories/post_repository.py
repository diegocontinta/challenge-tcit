from uuid import UUID, uuid4

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.post import Post
from app.schemas.post import CreatePostRequest, UpdatePostRequest


class PostRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_all(self) -> list[Post]:
        return list(self.db.scalars(select(Post)).all())

    def get_by_id(self, post_id: UUID) -> Post | None:
        return self.db.get(Post, post_id)

    def create(self, data: CreatePostRequest) -> Post:
        post = Post(
            id=uuid4(),
            name=data.name,
            description=data.description,
        )
        self.db.add(post)
        self.db.commit()
        self.db.refresh(post)
        return post

    def update(self, post: Post, data: UpdatePostRequest) -> Post:
        payload = data.model_dump(exclude_unset=True)
        for key, value in payload.items():
            setattr(post, key, value)
        self.db.commit()
        self.db.refresh(post)
        return post

    def delete(self, post: Post) -> None:
        self.db.delete(post)
        self.db.commit()
