import { Link } from "react-router-dom";
import "./Header.css";

function HeaderBeforeLogin() {
  return (
    <header className="header">
      {/* LEFT SECTION */}
      <div className="header-left">
        {/* HAMBURGER MENU */}

        {/* LOGO */}
        <img src="/logo.png" alt="Logo" className="logo-img" />
        <span className="logo-text">Career and Education Advisor</span>
      </div>

      {/* RIGHT NAV */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/institutions">Institutions</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/about">About us</Link>
        <Link to="/register" className="btn-register">
          Register
        </Link>
      </nav>
    </header>
  );
}

export default HeaderBeforeLogin;
