import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./styles.css";

function QuizStart() {
  const [level, setLevel] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!level) {
      alert("Please select your education level");
      return;
    }

    // Navigate based on selected level
    if (level === "10th") {
      navigate("/quiz/10th");
    } else if (level === "intermediate") {
      navigate("/quiz/intermediate");
    } else if (level === "college") {
      navigate("/quiz/college");
    }
  };

  return (
    <div className="quiz-container">
      <h3>Select Your Education Level</h3>

      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="level"
            value="10th"
            onChange={(e) => setLevel(e.target.value)}
          />
          10th Standard
        </label>

        <label>
          <input
            type="radio"
            name="level"
            value="intermediate"
            onChange={(e) => setLevel(e.target.value)}
          />
          Intermediate (11th–12th)
        </label>

        <label>
          <input
            type="radio"
            name="level"
            value="college"
            onChange={(e) => setLevel(e.target.value)}
          />
          B.Tech / College
        </label>
      </div>

      <button className="continue-btn" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}

export default QuizStart;
