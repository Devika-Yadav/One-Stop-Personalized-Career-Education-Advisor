import pandas as pd
import random

# ================= CONFIG =================

N = 12000

def r(a=1, b=5):
    return random.randint(a, b)

rows = []

# ✅ Allowed careers per education (CRITICAL FIX)
ALLOWED_TARGETS = {
    "10th": [
        "Intermediate_MPC",
        "Intermediate_BiPC",
        "Commerce",
        "Diploma",
        "Arts"
    ],
    "Intermediate_BiPC": [
        "Doctor",
        "Pharmacist",
        "Biotech Research",
        "Nursing",
        "Public Health"
    ],
    "Intermediate_MPC": [
        "Software Engineer",
        "Data Scientist",
        "Mechanical Engineer",
        "Civil Engineer",
        "Research Scientist",
        "Business Analyst"
    ],
    "Engineering": [
        "Software Engineer",
        "Data Scientist",
        "Govt Engineer",
        "Startup Founder",
        "Product Manager",
        "Research Engineer",
        "Core Engineer"
    ]
}

# ================= DATA GENERATION =================

for _ in range(N):
    edu = random.choice(list(ALLOWED_TARGETS.keys()))

    # Base row (only education)
    row = {"education": edu}

    # ====================== 10th ======================
    if edu == "10th":
        row.update({
            "interest_math": r(),
            "interest_physics": r(),
            "interest_chemistry": r(),
            "interest_biology": r(),
            "interest_commerce": r(),
            "logical_thinking": r(),
            "memorization": r(),
            "practical_learning": r(),
            "exam_tolerance": r(),
            "long_study": r()
        })

        scores = {
            "Intermediate_MPC": (
                row["interest_math"] +
                row["interest_physics"] +
                row["logical_thinking"] +
                row["exam_tolerance"]
            ),
            "Intermediate_BiPC": (
                row["interest_biology"] +
                row["interest_chemistry"] +
                row["memorization"] +
                row["long_study"]
            ),
            "Commerce": (
                row["interest_commerce"] +
                row["logical_thinking"] +
                row["exam_tolerance"]
            ),
            "Diploma": (
                row["practical_learning"] +
                (6 - row["exam_tolerance"])
            ),
            "Arts": (
                (6 - row["exam_tolerance"]) +
                (6 - row["long_study"]) +
                (6 - row["logical_thinking"])
            )
        }

    # ====================== BiPC ======================
    elif edu == "Intermediate_BiPC":
        row.update({
            "biology_interest": r(),
            "patient_care": r(),
            "lab_work": r(),
            "stress_tolerance": r(),
            "research_interest": r(),
            "field_work": r(),
            "ethics_empathy": r(),
            "memorization": r(),
            "long_study": r(),
            "govt_exam": r()
        })

        scores = {
            "Doctor": (
                row["patient_care"] +
                row["stress_tolerance"] +
                row["long_study"]
            ),
            "Pharmacist": (
                row["lab_work"] +
                row["memorization"] +
                row["biology_interest"]
            ),
            "Biotech Research": (
                row["research_interest"] +
                row["biology_interest"] +
                row["long_study"]
            ),
            "Nursing": (
                row["patient_care"] +
                row["ethics_empathy"]
            ),
            "Public Health": (
                row["field_work"] +
                row["govt_exam"] +
                row["ethics_empathy"]
            )
        }

    # ====================== MPC ======================
    elif edu == "Intermediate_MPC":
        row.update({
            "coding_interest": r(),
            "math_strength": r(),
            "physics_interest": r(),
            "problem_solving": r(),
            "statistics_interest": r(),
            "design_interest": r(),
            "hands_on": r(),
            "research_interest": r(),
            "management_interest": r(),
            "govt_exam": r()
        })

        scores = {
            "Software Engineer": (
                row["coding_interest"] +
                row["problem_solving"] +
                row["math_strength"]
            ),
            "Data Scientist": (
                row["statistics_interest"] +
                row["math_strength"] +
                row["problem_solving"]
            ),
            "Mechanical Engineer": (
                row["hands_on"] +
                row["physics_interest"]
            ),
            "Civil Engineer": (
                row["hands_on"] +
                row["physics_interest"] +
                row["govt_exam"]
            ),
            "Research Scientist": (
                row["research_interest"] +
                row["math_strength"]
            ),
            "Business Analyst": (
                row["management_interest"] +
                row["problem_solving"]
            )
        }

    # ====================== Engineering ======================
    else:
        row.update({
            "coding_level": r(),
            "core_interest": r(),
            "data_interest": r(),
            "research_interest": r(),
            "govt_job_interest": r(),
            "business_interest": r(),
            "leadership": r(),
            "risk_taking": r(),
            "communication": r(),
            "long_term_goal": r(),
            "hands_on": r(),
            "problem_solving": r()
        })

        scores = {
            "Software Engineer": (
                row["coding_level"] +
                row["problem_solving"]
            ),
            "Data Scientist": (
                row["data_interest"] +
                row["coding_level"]
            ),
            "Govt Engineer": (
                row["govt_job_interest"] +
                row["long_term_goal"]
            ),
            "Startup Founder": (
                row["business_interest"] +
                row["risk_taking"] +
                row["leadership"]
            ),
            "Product Manager": (
                row["leadership"] +
                row["communication"]
            ),
            "Research Engineer": (
                row["research_interest"] +
                row["long_term_goal"]
            ),
            "Core Engineer": (
                row["core_interest"] +
                row["hands_on"]
            )
        }

    # ====================== TARGET SELECTION (SAFE) ======================

    # 🔒 Enforce allowed careers per education
    filtered_scores = {
        k: v for k, v in scores.items()
        if k in ALLOWED_TARGETS[edu]
    }

    row["target"] = max(filtered_scores, key=filtered_scores.get)
    rows.append(row)

# ====================== SAVE ======================

df = pd.DataFrame(rows)
df.to_csv("career_dataset_final.csv", index=False)
df.to_excel("career_dataset_final.xlsx", index=False)

print("✅ Dataset generated with STRICT education-based career eligibility")
