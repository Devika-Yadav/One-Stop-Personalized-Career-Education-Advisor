import { Link } from "react-router-dom";
import "./Header.css";

function HeaderBeforeLogin() {
  return (
    <header className="header">
      <div className="logo">Career and Education Advisor</div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/institutions">Institutions</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/about">About us</Link>
        <Link to="/register" className="btn-register">Register</Link>
      </nav>
    </header>
  );
}

export default HeaderBeforeLogin;
