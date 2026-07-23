from uuid import UUID

from fastapi import APIRouter, Depends, status

from app.core.dependencies import get_post_service
from app.schemas.post import CreatePostRequest, GetPost, UpdatePostRequest
from app.services.post_service import PostService

router = APIRouter(prefix="/posts", tags=["posts"])

@router.get("/", response_model=list[GetPost])
def list_posts(service: PostService = Depends(get_post_service)):
    return service.list_posts()


@router.get("/{post_id}", response_model=GetPost)
def get_post(post_id: UUID, service: PostService = Depends(get_post_service)):
    return service.get_post(post_id)


@router.post("/", response_model=GetPost, status_code=status.HTTP_201_CREATED)
def create_post(
    payload: CreatePostRequest,
    service: PostService = Depends(get_post_service),
):
    return service.create_post(payload)


@router.patch("/{post_id}", response_model=GetPost)
def update_post(
    post_id: UUID,
    payload: UpdatePostRequest,
    service: PostService = Depends(get_post_service),
):
    return service.update_post(post_id, payload)


@router.delete("/{post_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_post(post_id: UUID, service: PostService = Depends(get_post_service)):
    service.delete_post(post_id)
