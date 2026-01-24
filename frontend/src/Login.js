import { useNavigate, Link } from "react-router-dom";
import api from "./api/axios";
import "./styles.css";
import { decodeToken } from "./utils/jwt";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await api.post("/api/auth/login", {
        email,
        password,
      });

      const token = res.data.token;

      // Store token
      localStorage.setItem("token", token);

      // Decode JWT
      const decoded = decodeToken(token);
      const role = decoded.role;
      const userEmail = decoded.sub;
      localStorage.setItem("isAuthenticated", "true");
      // Store user info
      localStorage.setItem("role", role);
      localStorage.setItem("email", userEmail);

      // Navigate by role
      if (role === "ADMIN") {
        navigate("/admin/dashboard");
      } else if (role === "STUDENT") {
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="page">
      <div className="left-panel">
        <img src="/login.jpg" alt="Login illustration" />
      </div>

      <div className="right-panel">
        <div className="card">
          <h2>Login</h2>

          <form onSubmit={handleLogin}>
            <label>Email:</label>
            <input name="email" type="email" required />

            <label>Password:</label>
            <input name="password" type="password" required />

            <div className="small-text">
              Forget Password? <Link to="/forgot-password">Click here</Link>
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
