from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import pandas as pd

# ================= LOAD MODEL BUNDLE =================

bundle = joblib.load("model.pkl")

model = bundle["model"]
edu_encoder = bundle["edu_encoder"]
target_encoder = bundle["target_encoder"]
FEATURES = bundle["features"]

# ================= APP =================

app = FastAPI(title="Career Prediction ML Service")

# ================= REQUEST SCHEMA =================

class CareerRequest(BaseModel):
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

    biology_interest: int = 0
    patient_care: int = 0
    lab_work: int = 0
    stress_tolerance: int = 0
    research_interest: int = 0
    field_work: int = 0
    ethics_empathy: int = 0
    govt_exam: int = 0

    coding_interest: int = 0
    math_strength: int = 0
    physics_interest: int = 0
    problem_solving: int = 0
    statistics_interest: int = 0
    design_interest: int = 0
    hands_on: int = 0
    management_interest: int = 0

    coding_level: int = 0
    core_interest: int = 0
    data_interest: int = 0
    govt_job_interest: int = 0
    business_interest: int = 0
    leadership: int = 0
    risk_taking: int = 0
    communication: int = 0
    long_term_goal: int = 0


@app.post("/predict")
def predict(data: CareerRequest):

    edu_encoded = edu_encoder.transform([data.education])[0]

    row = {"education": edu_encoded}
    for f in FEATURES:
        if f != "education":
            row[f] = getattr(data, f, 0)

    X = pd.DataFrame([row])[FEATURES]

    probs = model.predict_proba(X)[0]
    classes = target_encoder.inverse_transform(range(len(probs)))

    best_idx = probs.argmax()

    return {
        "career": classes[best_idx],
        "confidence": round(probs[best_idx] * 100, 2)
    }
