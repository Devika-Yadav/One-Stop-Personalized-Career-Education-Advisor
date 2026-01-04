// Login.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; // ✅ correct path
import "./styles.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!role) {
      setError("Please select a role");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Save auth + role
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userRole", role);
      localStorage.setItem("userEmail", userCredential.user.email);

      navigate("/"); // redirect after login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="page">
      {/* LEFT IMAGE */}
      <div className="left-panel">
        <img src="/login.jpg" alt="Login illustration" />
      </div>

      {/* RIGHT FORM */}
      <div className="right-panel">
        <div className="card">
          <h2>Login</h2>

          {error && <p className="error-text">{error}</p>}

          <form onSubmit={handleLogin}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="small-text">
              Forget Password? <Link to="/forgot-password">Click here</Link>
            </div>

            {/* ROLE SELECTION */}
            <div className="role-section">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  onChange={(e) => setRole(e.target.value)}
                />
                Admin
              </label>

              <label>
                <input
                  type="radio"
                  name="role"
                  value="student"
                  onChange={(e) => setRole(e.target.value)}
                />
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
