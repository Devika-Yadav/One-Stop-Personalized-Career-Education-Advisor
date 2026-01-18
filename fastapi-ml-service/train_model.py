import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

# ================= LOAD DATA =================

df = pd.read_csv("career_dataset_final.csv")

# ================= REMOVE RARE CLASSES =================
# (prevents stratify crash)

min_samples = 20
valid_targets = df["target"].value_counts()
valid_targets = valid_targets[valid_targets >= min_samples].index
df = df[df["target"].isin(valid_targets)]

# ================= FEATURES / TARGET =================

X = df.drop(columns=["target"])
y = df["target"]

# Encode education
edu_encoder = LabelEncoder()
X["education"] = edu_encoder.fit_transform(X["education"])

# Encode target
target_encoder = LabelEncoder()
y_encoded = target_encoder.fit_transform(y)

# ================= TRAIN / TEST =================

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y_encoded,
    test_size=0.25,
    random_state=42,
    stratify=y_encoded
)

# ================= MODEL =================

model = RandomForestClassifier(
    n_estimators=300,
    max_depth=18,
    min_samples_split=6,
    class_weight="balanced",
    random_state=42
)

model.fit(X_train, y_train)

# ================= EVALUATION =================

y_pred = model.predict(X_test)

print("\nAccuracy:", model.score(X_test, y_test))
print(
    classification_report(
        y_test,
        y_pred,
        target_names=target_encoder.classes_
    )
)

# ================= SAVE MODEL BUNDLE =================
# 🔴 THIS IS THE CRITICAL FIX 🔴

joblib.dump(
    {
        "model": model,
        "edu_encoder": edu_encoder,
        "target_encoder": target_encoder,
        "features": list(X.columns)
    },
    "model.pkl"
)

print("\n✅ model.pkl saved as DICTIONARY bundle")
