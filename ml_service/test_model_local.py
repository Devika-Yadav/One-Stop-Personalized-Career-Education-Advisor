import joblib
import pandas as pd
import numpy as np

# Load model & preprocessors
model = joblib.load("D:\\Career and Education advisor project\\dataset\\ml_service\\career_model.pkl")
scaler = joblib.load("D:\\Career and Education advisor project\\dataset\\ml_service\\scaler.pkl")
stream_encoder = joblib.load("stream_encoder.pkl")
label_encoder = joblib.load("label_encoder.pkl")

print("✅ Model files loaded successfully")

# Sample test input (Engineering student)
sample_input = {
    "stream": "MPC",
    "logical": 80,
    "numerical": 72,
    "verbal": 65,
    "creative": 55,
    "interest_coding": 90,
    "interest_data": 60,
    "interest_design": 40,
    "interest_ai": 70,
    "interest_healthcare": 0,
    "interest_law": 0,
    "interest_government": 0,
    "interest_arts": 0,
    "value_stability": 60
}

# Convert to DataFrame
df = pd.DataFrame([sample_input])

# Encode + scale
df["stream"] = stream_encoder.transform(df["stream"])
X_scaled = scaler.transform(df)

# Predict
probs = model.predict_proba(X_scaled)[0]

# Show Top 3
top_indices = np.argsort(probs)[-3:][::-1]

print("\n===== TOP 3 CAREER PREDICTIONS =====")
for idx in top_indices:
    career = label_encoder.inverse_transform([idx])[0]
    confidence = probs[idx] * 100
    print(f"{career} → {confidence:.2f}%")
