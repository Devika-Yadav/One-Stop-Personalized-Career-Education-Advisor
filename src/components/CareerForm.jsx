import { useState } from "react";
import questionsData from "../data/questions.json";
import CareerResult from "./CareerResult";

export default function CareerForm() {
  const [education, setEducation] = useState(null);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const educationOptions = Object.keys(questionsData);

  const handleEducationSelect = (edu) => {
    setEducation(edu);
    setAnswers({});
  };

  const handleRatingChange = (key, value) => {
    setAnswers((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const submitForm = async () => {
    setLoading(true);
    try {
      const payload = {
        education,
        ...answers
      };

      const res = await fetch("http://localhost:8081/api/career/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      console.log("Backend response:", data);
      setResult(data);
    } catch (err) {
      alert("Prediction failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.card}>
      {!result ? (
        !education ? (
          <>
            <h3>Select your education</h3>
            {educationOptions.map((edu) => (
              <button
                key={edu}
                onClick={() => handleEducationSelect(edu)}
                style={styles.button}
              >
                {edu}
              </button>
            ))}
          </>
        ) : (
          <>
            <h3>{education} – Answer the following</h3>

            {questionsData[education].questions.map((q) => (
              <div key={q.key} style={styles.questionBlock}>
                <label>{q.label}</label>

                <input
                  type="range"
                  min="1"
                  max="5"
                  value={answers[q.key] || 3}
                  onChange={(e) =>
                    handleRatingChange(q.key, Number(e.target.value))
                  }
                />

                <div>Rating: {answers[q.key] || 3}</div>
              </div>
            ))}

            <button onClick={submitForm} style={styles.submit}>
              {loading ? "Predicting..." : "Predict"}
            </button>
          </>
        )
      ) : (
        <CareerResult result={result} />
      )}
    </div>
  );
}

const styles = {
  card: {
    width: "500px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "10px",
    background: "#f9f9f9",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  },
  button: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    cursor: "pointer"
  },
  questionBlock: {
    marginBottom: "15px"
  },
  submit: {
    marginTop: "20px",
    width: "100%",
    padding: "12px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer"
  }
};
