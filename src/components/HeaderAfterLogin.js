import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function HeaderAfterLogin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1️⃣ Clear authentication
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userRole"); // optional

    // 2️⃣ Go to FIRST (landing) page
    navigate("/", { replace: true });
  };

  return (
    <header className="header">
        <div className="header-left">
        {/* HAMBURGER MENU */}
        <div className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img src="/logo.png" alt="Logo" className="logo-img" />
        <span className="logo-text">Career and Education Advisor</span>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/institutions">Institutions</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/about">About us</Link>

        <span className="profile-icon clickable">👤</span>

        <button onClick={handleLogout} className="btn-logout">
          Logout
        </button>
      </nav>
    </header>
  );
}

export default HeaderAfterLogin;
