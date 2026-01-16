from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np
import joblib

# ---------------- LOAD MODEL ----------------

model = joblib.load("model.pkl")
edu_encoder = joblib.load("edu_encoder.pkl")
feature_columns = joblib.load("feature_columns.pkl")

app = FastAPI(title="Career Guidance ML Service")

# ---------------- INPUT SCHEMA ----------------

class CareerInput(BaseModel):
    education: str

    # 10th
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

    # BiPC
    biology_interest: int = 0
    patient_care: int = 0
    lab_work: int = 0
    stress_tolerance: int = 0
    research_interest: int = 0
    field_work: int = 0
    ethics_empathy: int = 0
    govt_exam: int = 0

    # MPC
    coding_interest: int = 0
    math_strength: int = 0
    physics_interest: int = 0
    problem_solving: int = 0
    statistics_interest: int = 0
    design_interest: int = 0
    hands_on: int = 0
    management_interest: int = 0

    # Engineering
    coding_level: int = 0
    core_interest: int = 0
    data_interest: int = 0
    govt_job_interest: int = 0
    business_interest: int = 0
    leadership: int = 0
    risk_taking: int = 0
    communication: int = 0
    long_term_goal: int = 0


# ---------------- PREDICT ----------------

@app.post("/predict")
def predict(data: CareerInput):

    # Encode education
    edu_encoded = edu_encoder.transform([data.education])[0]

    # Build feature dict dynamically
    feature_dict = data.dict()
    feature_dict["education_encoded"] = edu_encoded
    feature_dict.pop("education")

    # Align feature order
    X = np.array([[feature_dict.get(col, 0) for col in feature_columns]])

    # Predict probabilities
    probs = model.predict_proba(X)[0]
    classes = model.classes_

# Convert to dict
    prob_map = dict(zip(classes, probs))

    suggestion = max(prob_map, key=prob_map.get)
    confidence = prob_map[suggestion] * 100

# 🔴 POST-ML ADJUSTMENT FOR 10th
    if data.education == "10th":
        commerce_score = data.interest_commerce
        math_score = data.interest_math
        physics_score = data.interest_physics
        chemistry_score = data.interest_chemistry
    # Strong commerce preference & weak science
    if commerce_score >= 4 and math_score >= 4 and physics_score <= 3 and chemistry_score <= 3:
        suggestion = "Commerce"
        confidence = max(confidence, 65.0)

    return {
        "suggestion": suggestion,
        "confidence": round(confidence, 2)
    }