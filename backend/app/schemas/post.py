from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field

class PostBase(BaseModel):
   name: str = Field(..., min_length=1, max_length=50)
   description: str | None = None

class CreatePostRequest(PostBase):
   pass

class UpdatePostRequest(BaseModel):
   name: str = Field(None, min_length=1, max_length=50)
   description: str | None = None

class GetPost(PostBase):
   id:UUID
   model_config = ConfigDict(from_attributes=True)
