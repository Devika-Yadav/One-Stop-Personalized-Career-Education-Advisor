import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function HeaderAfterLogin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="logo">Career and Education Advisor</div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/institutions">Institutions</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/about">About us</Link>

        <div className="profile-icon">👤</div>
        <button onClick={handleLogout} className="btn-logout">
          Logout
        </button>
      </nav>
    </header>
  );
}

export default HeaderAfterLogin;
