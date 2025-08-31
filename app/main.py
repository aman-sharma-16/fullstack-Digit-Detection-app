from fastapi import FastAPI, Response, status
from fastapi.middleware.cors import CORSMiddleware
from classifierModel import predict
import numpy as np
from .schemas import userImageInput

app = FastAPI()
predict_digit = predict.predict_Digit

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def get_name():
    return {"message": "api is ok", "success": True}


@app.post("/classify")
async def detect_digit(userInput: userImageInput):
    result = await predict_digit(userInput.image)
    return {"message": str(result), "success": True}
