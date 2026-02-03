"""Main FastAPI application for DraftAutoFlow."""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI(
    title="DraftAutoFlow API",
    description="Backend API for DraftAutoFlow application",
    version="0.1.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure appropriately for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class HealthResponse(BaseModel):
    """Health check response model."""
    status: str
    message: str
    version: str


@app.get("/", response_model=HealthResponse)
async def root():
    """Root endpoint - health check."""
    return {
        "status": "ok",
        "message": "DraftAutoFlow API is running",
        "version": "0.1.0"
    }


@app.get("/health", response_model=HealthResponse)
async def health_check():
    """Health check endpoint."""
    return {
        "status": "healthy",
        "message": "Service is operational",
        "version": "0.1.0"
    }


@app.get("/api/v1/test")
async def test_endpoint():
    """Test endpoint for initial testing."""
    return {
        "message": "Test endpoint working correctly",
        "data": {
            "service": "DraftAutoFlow",
            "environment": "development"
        }
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
