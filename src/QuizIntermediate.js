import { useState } from "react";
import quizQuestionsIntermediate from "./quizQuestionsIntermediate";
import "./styles.css";

function QuizIntermediate() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const totalQuestions = quizQuestionsIntermediate.length;
  const questionData = quizQuestionsIntermediate[currentQuestion];

  const handleOptionClick = (option) => {
    const updated = [...answers];
    updated[currentQuestion] = option;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (!answers[currentQuestion]) {
      alert("Please select an option");
      return;
    }

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("Intermediate Quiz Completed!");
      console.log("Intermediate Answers:", answers);
    }
  };

  return (
    <div className="quiz-page">
      {/* QUESTION BOX */}
      <div className="quiz-container">
        <h4>{questionData.question}</h4>

        <div className="options-grid">
          {questionData.options.map((option, index) => (
            <button
              key={index}
              className={`option-btn ${
                answers[currentQuestion] === option ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* NEXT / FINISH BUTTON (RIGHT INSIDE BOX) */}
        <div className="quiz-actions">
          <button
            className={`next-btn ${
              currentQuestion === totalQuestions - 1 ? "finish-btn" : ""
            }`}
            onClick={handleNext}
          >
            {currentQuestion === totalQuestions - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>

      {/* QUESTION COUNT OUTSIDE BOX */}
      <div className="question-count">
        Question {currentQuestion + 1} of {totalQuestions}
      </div>
    </div>
  );
}

export default QuizIntermediate;
