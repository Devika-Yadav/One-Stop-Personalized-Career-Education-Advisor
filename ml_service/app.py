from flask import Flask, request, jsonify
import joblib
import numpy as np
import pandas as pd

app = Flask(__name__)

model = joblib.load("career_model.pkl")
scaler = joblib.load("scaler.pkl")
stream_encoder = joblib.load("stream_encoder.pkl")
label_encoder = joblib.load("label_encoder.pkl")


@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    # Convert input to DataFrame
    df = pd.DataFrame([data])

    # Encode & scale
    df["stream"] = stream_encoder.transform(df["stream"])
    X_scaled = scaler.transform(df)

    # Predict probabilities
    probs = model.predict_proba(X_scaled)[0]

    results = []
    for i, p in enumerate(probs):
        results.append({
            "career": label_encoder.inverse_transform([i])[0],
            "probability": float(p)
        })

    # Sort descending
    results = sorted(results, key=lambda x: x["probability"], reverse=True)

    return jsonify(results)
if __name__ == "__main__":
    app.run(port=5000, debug=True)
