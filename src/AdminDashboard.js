import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "./components/AdminHeader";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  /* ================== STATES ================== */

  const [career, setCareer] = useState({
    name: "",
    skills: "",
    category: "",
    salary: ""
  });

  const [course, setCourse] = useState({
    name: "",
    skills: "",
    link: "",
    platform: ""
  });

  const [college, setCollege] = useState({
    name: "",
    location: "",
    courses: ""
  });

  const [quiz, setQuiz] = useState({
    question: "",
    options: "",
    mapping: ""
  });

  const [users] = useState([
    {
      id: 1,
      name: "Student 1",
      education: "Intermediate",
      quizStatus: "Completed"
    }
  ]);

  /* ================== GENERIC HANDLER ================== */

  const handleChange = (setter, state) => (e) =>
    setter({ ...state, [e.target.name]: e.target.value });

  /* ================== ACTION HELPERS ================== */

  const reset = (setter, initialState) => setter(initialState);

  const notify = (msg) => alert(msg);

  /* ================== ACTIONS ================== */

  // CAREER
  const addCareer = () => {
    notify("Career added successfully");
    reset(setCareer, { name: "", skills: "", category: "", salary: "" });
  };

  const editCareer = () => notify("Career updated");
  const deleteCareer = () => {
    notify("Career deleted");
    reset(setCareer, { name: "", skills: "", category: "", salary: "" });
  };

  // COURSE
  const addCourse = () => {
    notify("Course added successfully");
    reset(setCourse, { name: "", skills: "", link: "", platform: "" });
  };

  const editCourse = () => notify("Course updated");
  const deleteCourse = () => {
    notify("Course deleted");
    reset(setCourse, { name: "", skills: "", link: "", platform: "" });
  };

  // COLLEGE
  const addCollege = () => {
    notify("College added successfully");
    reset(setCollege, { name: "", location: "", courses: "" });
  };

  const editCollege = () => notify("College updated");
  const deleteCollege = () => {
    notify("College deleted");
    reset(setCollege, { name: "", location: "", courses: "" });
  };

  // QUIZ
  const addQuiz = () => {
    notify("Quiz question added");
    reset(setQuiz, { question: "", options: "", mapping: "" });
  };

  const editQuiz = () => notify("Quiz question updated");
  const deleteQuiz = () => {
    notify("Quiz question deleted");
    reset(setQuiz, { question: "", options: "", mapping: "" });
  };

  /* ================== UI ================== */

  return (
    <>
      <AdminHeader />

      <div className="admin-body">
        <h3>Dashboard Overview</h3>

        {/* OVERVIEW */}
        <div className="stats">
          <div><b>130</b><br />Users</div>
          <div><b>67</b><br />Career Options</div>
          <div><b>45</b><br />Courses</div>
          <div><b>39</b><br />Colleges</div>
        </div>

        {/* MANAGE CAREERS */}
        <section className="admin-card careers-card">
          <h4 className="card-title">Manage Careers</h4>
          <div className="card-content">
            <div className="form-left">
              <div className="form-row">
                <label>Career Name:</label>
                <input name="name" value={career.name}
                  onChange={handleChange(setCareer, career)} />
              </div>
              <div className="form-row">
                <label>Required Skills:</label>
                <input name="skills" value={career.skills}
                  onChange={handleChange(setCareer, career)} />
              </div>
              <div className="form-row">
                <label>Category:</label>
                <input name="category" value={career.category}
                  onChange={handleChange(setCareer, career)} />
              </div>
              <div className="form-row">
                <label>Salary Range:</label>
                <input name="salary" value={career.salary}
                  onChange={handleChange(setCareer, career)} />
              </div>
            </div>

            <div className="form-actions">
              <button className="btn-edit" onClick={editCareer}>Edit</button>
              <button className="btn-delete" onClick={deleteCareer}>Delete</button>
              <button className="btn-add" onClick={addCareer}>+ Add Career</button>
            </div>
          </div>
        </section>

        {/* MANAGE COURSES */}
        <section className="admin-card courses-card">
          <h4 className="card-title">Manage Courses</h4>
          <div className="card-content">
            <div className="form-left">
              {["name", "skills", "link", "platform"].map((field) => (
                <div className="form-row" key={field}>
                  <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                  <input
                    name={field}
                    value={course[field]}
                    onChange={handleChange(setCourse, course)}
                  />
                </div>
              ))}
            </div>

            <div className="form-actions">
              <button className="btn-edit" onClick={editCourse}>Edit</button>
              <button className="btn-delete" onClick={deleteCourse}>Delete</button>
              <button className="btn-add" onClick={addCourse}>+ Add Course</button>
            </div>
          </div>
        </section>

        {/* MANAGE COLLEGES */}
        <section className="admin-card colleges-card">
          <h4 className="card-title">Manage Colleges / Institutions</h4>
          <div className="card-content">
            <div className="form-left">
              {["name", "location", "courses"].map((field) => (
                <div className="form-row" key={field}>
                  <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                  <input
                    name={field}
                    value={college[field]}
                    onChange={handleChange(setCollege, college)}
                  />
                </div>
              ))}
            </div>

            <div className="form-actions">
              <button className="btn-edit" onClick={editCollege}>Edit</button>
              <button className="btn-delete" onClick={deleteCollege}>Delete</button>
              <button className="btn-add" onClick={addCollege}>+ Add College</button>
            </div>
          </div>
        </section>

        {/* MANAGE QUIZ */}
        <section className="admin-card quiz-card">
          <h4 className="card-title">Manage Quiz Questions</h4>
          <div className="card-content">
            <div className="form-left">
              {["question", "options", "mapping"].map((field) => (
                <div className="form-row" key={field}>
                  <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                  <input
                    name={field}
                    value={quiz[field]}
                    onChange={handleChange(setQuiz, quiz)}
                  />
                </div>
              ))}
            </div>

            <div className="form-actions">
              <button className="btn-edit" onClick={editQuiz}>Edit</button>
              <button className="btn-delete" onClick={deleteQuiz}>Delete</button>
              <button className="btn-add" onClick={addQuiz}>+ Add Question</button>
            </div>
          </div>
        </section>

        {/* MANAGE USERS */}
        <section className="admin-card users-card">
          <h4 className="card-title">Manage Users</h4>
          <table className="users-table">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Education Level</th>
                <th>Quiz Status</th>
                <th>View Profile</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.name}</td>
                  <td>{u.education}</td>
                  <td>{u.quizStatus}</td>
                  <td>
                    <button className="btn-view" onClick={() => navigate("/profile")}>
                      Click
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default AdminDashboard;
