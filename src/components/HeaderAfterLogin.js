import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function HeaderAfterLogin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userRole");

    navigate("/", { replace: true });

    // ✅ ensure UI resets
    window.location.reload();
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <img src="/logo.png" alt="C&E Logo" className="logo-img" />
        <span className="logo-text">Career and Education Advisor</span>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/institutions">Institutions</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/about">About us</Link>

        <span
  className="profile-icon clickable"
  title="Profile"
  onClick={() => navigate("/profile")}
>
  👤
</span>


        <button onClick={handleLogout} className="btn-logout">
          Logout
        </button>
      </nav>
    </header>
  );
}

export default HeaderAfterLogin;
