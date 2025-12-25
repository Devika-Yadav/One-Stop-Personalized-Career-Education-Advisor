// Register.js
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles.css";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: handle registration here
    navigate("/"); // go to Login page after successful register
  };

  return (
    <div className="page">
      {/* LEFT SIDE IMAGE */}
      <div className="left-panel">
        <img src="/register.jpg" alt="Career professionals" />
      </div>


      {/* RIGHT SIDE FORM CARD */}
      <div className="right-panel">
        <div className="card">
          <h2>Register</h2>

          <form onSubmit={handleRegister}>
            <label>Full Name:</label>
            <input type="text" required />

            <label>Email:</label>
            <input type="email" required />

            <label>Enter Password:</label>
            <input type="password" required />

            <label>Confirm Password:</label>
            <input type="password" required />
          {/* Role Selection */}
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
              Create account
            </button>
          </form>

          <div className="small-text center">
              Already have an account?{" "}
              <Link to="/login">Login</Link>   {/* <- change "/" to "/login" */}
          </div>
        </div>
      </div>
    </div>
  );
}
