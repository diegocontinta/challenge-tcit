
from fastapi import FastAPI

app = FastAPI(title="Posts API")

@app.get("/health")
def health():   
        return {"status": "ok"}