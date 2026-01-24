import random
import pandas as pd

# -----------------------------
# Utility functions
# -----------------------------
def clamp(x):
    return max(0, min(100, int(x)))

def normal(mean, std=7):
    return clamp(random.gauss(mean, std))

# -----------------------------
# Career paths grouped by domain
# -----------------------------
CAREER_PATHS = {

    # ========= ENGINEERING (MPC) =========
    "Software_Developer": {
        "stream": "MPC",
        "logical": 80, "numerical": 70, "verbal": 60, "creative": 50,
        "interest_coding": 90, "interest_design": 30,
        "interest_ai": 65, "interest_data": 55
    },

    "Data_Analyst": {
        "stream": "MPC",
        "logical": 75, "numerical": 85, "verbal": 65, "creative": 45,
        "interest_coding": 55, "interest_design": 25,
        "interest_ai": 60, "interest_data": 90
    },

    "AI_ML_Engineer": {
        "stream": "MPC",
        "logical": 85, "numerical": 80, "verbal": 60, "creative": 45,
        "interest_coding": 70, "interest_design": 20,
        "interest_ai": 95, "interest_data": 70
    },

    "UI_UX_Designer": {
        "stream": "MPC",
        "logical": 65, "numerical": 55, "verbal": 75, "creative": 90,
        "interest_coding": 35, "interest_design": 95,
        "interest_ai": 30, "interest_data": 25
    },

    # ========= MEDICAL (BiPC) =========
    "MBBS": {
        "stream": "BiPC",
        "logical": 65, "numerical": 55, "verbal": 70, "creative": 50,
        "interest_healthcare": 95
    },

    "BDS": {
        "stream": "BiPC",
        "logical": 60, "numerical": 50, "verbal": 68, "creative": 55,
        "interest_healthcare": 85
    },

    "Pharmacy": {
        "stream": "BiPC",
        "logical": 65, "numerical": 60, "verbal": 60, "creative": 45,
        "interest_healthcare": 75
    },

    "Biotechnology": {
        "stream": "BiPC",
        "logical": 70, "numerical": 65, "verbal": 60, "creative": 50,
        "interest_healthcare": 65
    },

    # ========= LAW (HEC) =========
    "Corporate_Law": {
        "stream": "HEC",
        "logical": 70, "numerical": 65, "verbal": 85, "creative": 50,
        "interest_law": 95
    },

    "Civil_Law": {
        "stream": "HEC",
        "logical": 65, "numerical": 55, "verbal": 80, "creative": 55,
        "interest_law": 85
    },

    "Judiciary": {
        "stream": "HEC",
        "logical": 75, "numerical": 60, "verbal": 90, "creative": 50,
        "interest_law": 90
    },

    # ========= GOVERNMENT (HEC / ANY) =========
    "UPSC": {
        "stream": "HEC",
        "logical": 78, "numerical": 65, "verbal": 80, "creative": 50,
        "interest_government": 95, "value_stability": 90
    },

    "State_PSC": {
        "stream": "HEC",
        "logical": 70, "numerical": 60, "verbal": 75, "creative": 50,
        "interest_government": 85, "value_stability": 80
    },

    "Banking": {
        "stream": "HEC",
        "logical": 68, "numerical": 75, "verbal": 65, "creative": 45,
        "interest_government": 70, "value_stability": 75
    },

    "Defense": {
        "stream": "HEC",
        "logical": 65, "numerical": 55, "verbal": 60, "creative": 45,
        "interest_government": 80, "value_stability": 70
    },

    # ========= ARTS (HEC) =========
    "Journalism": {
        "stream": "HEC",
        "logical": 60, "numerical": 50, "verbal": 85, "creative": 90,
        "interest_arts": 95
    },

    "Psychology": {
        "stream": "HEC",
        "logical": 65, "numerical": 55, "verbal": 80, "creative": 70,
        "interest_arts": 85
    },

    "Fine_Arts": {
        "stream": "HEC",
        "logical": 55, "numerical": 45, "verbal": 70, "creative": 95,
        "interest_arts": 98
    }
}

# -----------------------------
# Dataset generation
# -----------------------------
ROWS_PER_PATH = 90   # 90 × ~18 paths ≈ 1600 rows
rows = []

for career, cfg in CAREER_PATHS.items():
    for _ in range(ROWS_PER_PATH):
        row = {
            "stream": cfg["stream"],

            # aptitude
            "logical": normal(cfg.get("logical", 0)),
            "numerical": normal(cfg.get("numerical", 0)),
            "verbal": normal(cfg.get("verbal", 0)),
            "creative": normal(cfg.get("creative", 0)),

            # interests
            "interest_coding": normal(cfg.get("interest_coding", 0)),
            "interest_data": normal(cfg.get("interest_data", 0)),
            "interest_design": normal(cfg.get("interest_design", 0)),
            "interest_ai": normal(cfg.get("interest_ai", 0)),
            "interest_healthcare": normal(cfg.get("interest_healthcare", 0)),
            "interest_law": normal(cfg.get("interest_law", 0)),
            "interest_government": normal(cfg.get("interest_government", 0)),
            "interest_arts": normal(cfg.get("interest_arts", 0)),

            # values
            "value_stability": normal(cfg.get("value_stability", 0)),

            # label
            "career_path": career
        }

        rows.append(row)

# -----------------------------
# Save CSV
# -----------------------------
df = pd.DataFrame(rows)
df.to_csv("final_career_training_dataset.csv", index=False)

print("✅ FINAL DATASET GENERATED")
print("Rows:", df.shape[0])
print("Columns:", df.shape[1])
