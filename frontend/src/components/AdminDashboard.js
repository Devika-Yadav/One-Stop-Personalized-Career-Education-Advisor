import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "./HeaderAfterAdminLogin";
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

  const reset = (setter, initialState) => setter(initialState);
  const notify = (msg) => alert(msg);

  /* ================== ACTIONS ================== */

  const addCareer = () => {
    notify("Career added successfully");
    reset(setCareer, { name: "", skills: "", category: "", salary: "" });
  };
  const editCareer = () => notify("Career updated");
  const deleteCareer = () => {
    notify("Career deleted");
    reset(setCareer, { name: "", skills: "", category: "", salary: "" });
  };

  const addCourse = () => {
    notify("Course added successfully");
    reset(setCourse, { name: "", skills: "", link: "", platform: "" });
  };
  const editCourse = () => notify("Course updated");
  const deleteCourse = () => {
    notify("Course deleted");
    reset(setCourse, { name: "", skills: "", link: "", platform: "" });
  };

  const addCollege = () => {
    notify("College added successfully");
    reset(setCollege, { name: "", location: "", courses: "" });
  };
  const editCollege = () => notify("College updated");
  const deleteCollege = () => {
    notify("College deleted");
    reset(setCollege, { name: "", location: "", courses: "" });
  };

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

      {/* DASHBOARD */}
      <div className="admin-body" id="dashboard">
        <h3>Dashboard Overview</h3>

        <div className="stats">
          <div><b>130</b><br />Users</div>
          <div><b>67</b><br />Career Options</div>
          <div><b>45</b><br />Courses</div>
          <div><b>39</b><br />Colleges</div>
        </div>

        {/* CAREERS */}
        <section id="careers" className="admin-card careers-card">
          <h4 className="card-title">Manage Careers</h4>
          <div className="card-content">
            <div className="form-left">
              {["name", "skills", "category", "salary"].map((field) => (
                <div className="form-row" key={field}>
                  <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                  <input
                    name={field}
                    value={career[field]}
                    onChange={handleChange(setCareer, career)}
                  />
                </div>
              ))}
            </div>
            <div className="form-actions">
              <button className="btn-edit" onClick={editCareer}>Edit</button>
              <button className="btn-delete" onClick={deleteCareer}>Delete</button>
              <button className="btn-add" onClick={addCareer}>+ Add Career</button>
            </div>
          </div>
        </section>

        {/* COURSES */}
        <section id="courses" className="admin-card courses-card">
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

        {/* COLLEGES */}
        <section id="colleges" className="admin-card colleges-card">
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

        {/* QUIZ */}
        <section id="quiz" className="admin-card quiz-card">
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

        {/* USERS */}
        <section id="users" className="admin-card users-card">
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
                    <button
                      className="btn-view"
                      onClick={() =>
                        navigate("/admin/profile", {
                          state: { viewUser: true, user: u }
                        })
                      }
                    >
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
