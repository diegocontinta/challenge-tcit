from fastapi import Depends
from typing import List, Optional, Union, Annotated
from pydantic import field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
        PROJECT_NAME: str = "PostAPI"
        VERSION: str = "1.0.0"
        API_V1_STR: str = "/api/v1"
        DATABASE_URL: str

        CORS_ORIGINS: List[str] = [
                "http://localhost:5173",
        ]

        model_config = SettingsConfigDict(
                env_file=".env",
                env_file_encoding="utf-8",
                extra="ignore"
        )

        @field_validator('CORS_ORIGINS', mode='before')
        def assemble_cors_origins(cls, v: Union[str, List[str]]) -> List[str]:
                if isinstance(v, str) and not v.startswith("["):
                        return [item.strip() for item in v.split(",")]
                elif isinstance(v, (list, str)):
                        return v
                raise ValueError(v)                     

settings = Settings()