from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np
import joblib

# ================= LOAD TRAINED ARTIFACTS =================

model = joblib.load("model.pkl")
edu_encoder = joblib.load("edu_encoder.pkl")
feature_columns = joblib.load("feature_columns.pkl")

app = FastAPI(title="Career Prediction ML Service")

# ================= INPUT SCHEMA =================

class CareerInput(BaseModel):
    education: str

    interest_math: int = 0
    interest_physics: int = 0
    interest_chemistry: int = 0
    interest_biology: int = 0
    interest_commerce: int = 0

    logical_thinking: int = 0
    memorization: int = 0
    practical_learning: int = 0
    exam_tolerance: int = 0
    long_study: int = 0

    coding_interest: int = 0
    statistics_interest: int = 0
    management_interest: int = 0
    hands_on: int = 0
    research_interest: int = 0

    communication: int = 0
    leadership: int = 0
    risk_taking: int = 0
    business_interest: int = 0
    govt_job_interest: int = 0

    patient_care: int = 0
    lab_work: int = 0
    ethics_empathy: int = 0
    field_work: int = 0
    stress_tolerance: int = 0


# ================= PREDICTION ENDPOINT =================

@app.post("/predict")
def predict_career(data: CareerInput):

    # Validate education
    if data.education not in edu_encoder.classes_:
        return {
            "suggestion": "Invalid education input",
            "confidence": 0.0
        }

    # Encode education
    edu_encoded = edu_encoder.transform([data.education])[0]

    # Convert input to feature vector
    input_dict = data.dict()
    input_dict["education_encoded"] = edu_encoded
    input_dict.pop("education")

    X = np.array([[input_dict.get(col, 0) for col in feature_columns]])

    # ML prediction
    probs = model.predict_proba(X)[0]
    classes = model.classes_

    best_idx = int(np.argmax(probs))
    suggestion = classes[best_idx]
    confidence = probs[best_idx] * 100

    return {
        "suggestion": suggestion,
        "confidence": round(confidence, 2)
    }


# ================= HEALTH CHECK =================

@app.get("/")
def root():
    return {"status": "Career ML service running"}
