import pandas as pd
import numpy as np
import joblib

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# ---------------- LOAD DATA ----------------

df = pd.read_csv("career_dataset_final.csv")

# ---------------- ENCODE EDUCATION ----------------

edu_encoder = LabelEncoder()
df["education_encoded"] = edu_encoder.fit_transform(df["education"])

# ---------------- HANDLE MISSING FEATURES ----------------
# Fill missing feature values with 0 (because not all questions apply to all users)

df = df.fillna(0)

# ---------------- FEATURES & TARGET ----------------

FEATURE_COLUMNS = [col for col in df.columns 
                   if col not in ["education", "target"]]

X = df[FEATURE_COLUMNS]
y = df["target"]

# ---------------- SPLIT ----------------

X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.25,
    random_state=42,
    stratify=y
)

# ---------------- MODEL ----------------

model = RandomForestClassifier(
    n_estimators=350,
    max_depth=16,
    min_samples_split=4,
    random_state=42,
    n_jobs=-1
)

model.fit(X_train, y_train)

# ---------------- EVALUATION ----------------

y_pred = model.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)
print(f"\n✅ Accuracy: {accuracy:.4f}\n")
print(classification_report(y_test, y_pred))

# ---------------- SAVE ----------------

joblib.dump(model, "model.pkl")
joblib.dump(edu_encoder, "edu_encoder.pkl")
joblib.dump(FEATURE_COLUMNS, "feature_columns.pkl")

print("\n✅ model.pkl saved")
print("✅ edu_encoder.pkl saved")
print("✅ feature_columns.pkl saved")
