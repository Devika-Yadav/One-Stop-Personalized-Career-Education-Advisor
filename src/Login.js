// Login.js
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles.css"; // optional

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/"); // instead of "/home"
  };

  return (
    <div className="page">
      {/* LEFT SIDE IMAGE */}
      <div className="left-panel">
        <img src="/login.jpg" alt="Login illustration" />
      </div>

      {/* RIGHT SIDE FORM CARD */}
      <div className="right-panel">
        <div className="card">
          <h2>Login</h2>

          <form onSubmit={handleLogin}>
            <label>Email:</label>
            <input type="email" required />

            <label>Password:</label>
            <input type="password" required />

            <div className="small-text">
              Forget Password? <Link to="/forgot-password">Click here</Link>
            </div>
              <div className="role-section">
    <label>
      <input type="radio" name="role" value="admin" />
      Admin
    </label>

    <label>
      <input type="radio" name="role" value="student" />
      Student
    </label>
  </div>
 

            <button type="submit" className="primary-btn">
              Login
            </button>
          </form>

          <div className="small-text center">
            Create account? <Link to="/register">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
