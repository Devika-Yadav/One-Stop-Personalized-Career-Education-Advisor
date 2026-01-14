import { useNavigate, Link } from "react-router-dom";
import api from "./api/axios";
import "./styles.css";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await api.post("/api/auth/signup", {
        email,
        password,
      });

      alert("Registration successful");
      
      navigate("/login");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="page">
      <div className="left-panel">
        <img src="/register.jpg" alt="Career professionals" />
      </div>

      <div className="right-panel">
        <div className="card">
          <h2>Register</h2>

          <form onSubmit={handleRegister}>
            <label>Email:</label>
            <input name="email" type="email" required />

            <label>Enter Password:</label>
            <input name="password" type="password" required />

            <label>Confirm Password:</label>
            <input name="confirmPassword" type="password" required />

            <button type="submit" className="primary-btn">
              Create account
            </button>
          </form>

          <div className="small-text center">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
