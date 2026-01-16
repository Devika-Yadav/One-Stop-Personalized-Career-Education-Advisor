import { useState } from "react";

const QuizAdmin = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const [quiz, setQuiz] = useState({
    question: "",
    options: "",
    mapping: ""
  });

  const handleChange = (e) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value });
  };

  // SELECT QUESTION
  const handleSelect = (e) => {
    const id = Number(e.target.value);
    if (!id) return;

    const q = questions.find(q => q.id === id);
    if (!q) return;

    setSelectedId(id);
    setIsEdit(true);
    setQuiz({
      question: q.question,
      options: q.options,
      mapping: q.mapping
    });
  };

  // ADD
  const addQuestion = () => {
    const newQuestion = {
      id: Date.now(), // frontend-generated ID
      ...quiz
    };

    setQuestions([...questions, newQuestion]);
    alert("Quiz question added");
    resetForm();
  };

  // UPDATE
  const updateQuestion = () => {
    if (!selectedId) return alert("Select a question first");

    const updated = questions.map(q =>
      q.id === selectedId ? { ...q, ...quiz } : q
    );

    setQuestions(updated);
    alert("Quiz question updated");
    resetForm();
  };

  // DELETE
  const deleteQuestion = () => {
    if (!selectedId) return alert("Select a question first");
    if (!window.confirm("Delete this question?")) return;

    setQuestions(questions.filter(q => q.id !== selectedId));
    alert("Quiz question deleted");
    resetForm();
  };

  const resetForm = () => {
    setQuiz({ question: "", options: "", mapping: "" });
    setSelectedId(null);
    setIsEdit(false);
  };

  return (
    <section className="admin-card quiz-card">
      <h4 className="card-title">Manage Quiz Questions</h4>

      {/* SELECT QUESTION */}
      <div className="form-row">
        <label>Select Question:</label>
        <select onChange={handleSelect} value={selectedId || ""}>
          <option value="">-- Select --</option>
          {questions.map(q => (
            <option key={q.id} value={q.id}>
              {q.question.slice(0, 40)}...
            </option>
          ))}
        </select>
      </div>

      <div className="card-content">
        {/* FORM */}
        <div className="form-left">
          <div className="form-row">
            <label>Question:</label>
            <input
              name="question"
              value={quiz.question}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>Options:</label>
            <input
              name="options"
              value={quiz.options}
              onChange={handleChange}
              // placeholder="Option1, Option2, Option3"
            />
          </div>

          <div className="form-row">
            <label>Mapping:</label>
            <input
              name="mapping"
              value={quiz.mapping}
              onChange={handleChange}
              // placeholder="Career/Skill mapping"
            />
          </div>
        </div>

        {/* ACTIONS */}
        <div className="form-actions">
          {!isEdit ? (
            <button className="btn-add" onClick={addQuestion}>
              + Add Question
            </button>
          ) : (
            <>
              <button className="btn-edit" onClick={updateQuestion}>
                Update
              </button>
              <button className="btn-delete" onClick={deleteQuestion}>
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizAdmin;
