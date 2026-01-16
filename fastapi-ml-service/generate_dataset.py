import pandas as pd
import random

N = 12000
rows = []

def r(a=1, b=5):
    return random.randint(a, b)

for _ in range(N):
    edu = random.choice(["10th", "Intermediate_BiPC", "Intermediate_MPC", "Engineering"])
    row = {"education": edu}

    # ================== 10th ==================
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

        # --- STREAM SCORES ---
        score_mpc = (
            row["interest_math"] * 2 +
            row["interest_physics"] +
            row["logical_thinking"] +
            row["exam_tolerance"]
        )

        score_bipc = (
            row["interest_biology"] * 2 +
            row["interest_chemistry"] +
            row["memorization"] +
            row["long_study"]
        )

        score_commerce = (
            row["interest_commerce"] * 2 +
            row["logical_thinking"] +
            row["exam_tolerance"]
        )

        score_diploma = (
            row["practical_learning"] * 2 +
            (6 - row["exam_tolerance"])
        )

        score_arts = (
            (6 - row["exam_tolerance"]) +
            (6 - row["long_study"])
        )

        scores = {
            "Intermediate_MPC": score_mpc,
            "Intermediate_BiPC": score_bipc,
            "Commerce": score_commerce,
            "Diploma": score_diploma,
            "Arts": score_arts
        }

        row["target"] = max(scores, key=scores.get)

    # ================== BiPC ==================
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
                row["patient_care"] * 2 +
                row["stress_tolerance"] +
                row["long_study"]
            ),
            "Pharmacist": (
                row["lab_work"] * 2 +
                row["memorization"] +
                row["biology_interest"]
            ),
            "Biotech Research": (
                row["research_interest"] * 2 +
                row["biology_interest"] +
                row["long_study"]
            ),
            "Nursing": (
                row["patient_care"] +
                row["ethics_empathy"] * 2
            ),
            "Public Health": (
                row["field_work"] +
                row["govt_exam"] +
                row["ethics_empathy"]
            )
        }

        row["target"] = max(scores, key=scores.get)

    # ================== MPC ==================
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
                row["coding_interest"] * 2 +
                row["problem_solving"] +
                row["math_strength"]
            ),
            "Data Scientist": (
                row["statistics_interest"] * 2 +
                row["math_strength"] +
                row["problem_solving"]
            ),
            "Mechanical Engineer": (
                row["hands_on"] * 2 +
                row["physics_interest"]
            ),
            "Civil Engineer": (
                row["hands_on"] +
                row["physics_interest"] +
                row["govt_exam"]
            ),
            "Research Scientist": (
                row["research_interest"] * 2 +
                row["math_strength"]
            ),
            "Business Analyst": (
                row["management_interest"] * 2 +
                row["problem_solving"]
            )
        }

        row["target"] = max(scores, key=scores.get)

    # ================== Engineering ==================
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
            "long_term_goal": r()
        })

        scores = {
            "Software Engineer": (
                row["coding_level"] * 2 +
                row["problem_solving"] if "problem_solving" in row else row["coding_level"]
            ),
            "Data Scientist": (
                row["data_interest"] * 2 +
                row["coding_level"]
            ),
            "Govt Engineer": (
                row["govt_job_interest"] * 2 +
                row["long_term_goal"]
            ),
            "Startup Founder": (
                row["business_interest"] * 2 +
                row["risk_taking"] +
                row["leadership"]
            ),
            "Product Manager": (
                row["leadership"] * 2 +
                row["communication"]
            ),
            "Research Engineer": (
                row["research_interest"] * 2 +
                row["long_term_goal"]
            ),
            "Core Engineer": (
                row["core_interest"] * 2 +
                row["hands_on"] if "hands_on" in row else row["core_interest"]
            )
        }

        row["target"] = max(scores, key=scores.get)

    rows.append(row)

# ================== SAVE ==================

df = pd.DataFrame(rows)
df.to_csv("career_dataset_final.csv", index=False)
df.to_excel("career_dataset_final.xlsx", index=False)

print("✅ Realistic dataset generated with multi-feature scoring")
