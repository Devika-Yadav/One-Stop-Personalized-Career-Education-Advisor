import { useState } from "react";
import quizQuestionsCollege from "./quizQuestionsCollege";
import "./styles.css";

function QuizCollege() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questionData = quizQuestionsCollege[currentQuestion];
  const totalQuestions = quizQuestionsCollege.length;

  const handleOptionClick = (option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = option;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (!answers[currentQuestion]) {
      alert("Please select an option");
      return;
    }

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("B.Tech Quiz Completed!");
      console.log("B.Tech Answers:", answers);
    }
  };

  return (
    <div className="quiz-page">
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

        {/* NEXT / FINISH button inside box */}
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

      {/* Question count below the box */}
      <div className="question-count">
        Question {currentQuestion + 1} of {totalQuestions}
      </div>
    </div>
  );
}

export default QuizCollege;
