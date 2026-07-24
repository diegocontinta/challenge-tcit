from uuid import UUID

from app.exceptions.post import PostNotFoundException
from app.models.post import Post
from app.repositories.post_repository import PostRepository
from app.schemas.post import CreatePostRequest, UpdatePostRequest


class PostService:
    def __init__(self, repo: PostRepository):
        self.repo = repo

    def list_posts(self) -> list[Post]:
        return self.repo.get_all()

    def get_post(self, post_id: UUID) -> Post:
        post = self.repo.get_by_id(post_id)
        if post is None:
            raise PostNotFoundException(post_id)
        return post

    def create_post(self, data: CreatePostRequest) -> Post:
        return self.repo.create(data)

    def update_post(self, post_id: UUID, data: UpdatePostRequest) -> Post:
        post = self.get_post(post_id)
        return self.repo.update(post, data)

    def delete_post(self, post_id: UUID) -> Post:
        post = self.get_post(post_id)
        return self.repo.delete(post)
