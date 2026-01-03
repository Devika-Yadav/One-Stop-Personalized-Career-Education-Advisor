import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SelectEducationLevel() {
  const [level, setLevel] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!level) {
      alert("Please select an education level");
      return;
    }

    navigate("/quiz", { state: { level } });
  };

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <h4>Select Your Education Level</h4>

        <div className="options-grid">
          <button
            className={`option-btn ${level === "10th" ? "selected" : ""}`}
            onClick={() => setLevel("10th")}
          >
            10th Standard
          </button>

          <button
            className={`option-btn ${level === "intermediate" ? "selected" : ""}`}
            onClick={() => setLevel("intermediate")}
          >
            Intermediate (11th–12th)
          </button>

          <button
            className={`option-btn ${level === "college" ? "selected" : ""}`}
            onClick={() => setLevel("college")}
          >
            B.Tech / College
          </button>
        </div>

        <div className="quiz-actions">
          <button className="next-btn" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectEducationLevel;
