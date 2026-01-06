import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function HeaderBeforeLogin() {
  const [showInstitution, setShowInstitution] = useState(false);
  const [showResource, setShowResource] = useState(false);

  // ✅ close all popups (single source of truth)
  const closePopups = () => {
    setShowInstitution(false);
    setShowResource(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <img src="/logo.png" alt="C&E Logo" className="logo-img" />
          <span className="logo-text">Career and Education Advisor</span>
        </div>

        <nav>
          {/* HOME */}
          <Link to="/" onClick={closePopups}>
            Home
          </Link>

          {/* INSTITUTIONS (toggle) */}
          <span
            className="nav-link"
            onClick={() => {
              setShowInstitution(prev => !prev);
              setShowResource(false);
            }}
          >
            Institutions
          </span>

          {/* RESOURCES (toggle) */}
          <span
            className="nav-link"
            onClick={() => {
              setShowResource(prev => !prev);
              setShowInstitution(false);
            }}
          >
            Resources
          </span>

          {/* ABOUT */}
          <Link to="/about" onClick={closePopups}>
            About us
          </Link>

          {/* REGISTER */}
          <Link
            to="/register"
            className="btn-register"
            onClick={closePopups}
          >
            Register
          </Link>
        </nav>
      </header>

      {/* INSTITUTIONS POPUP */}
      {showInstitution && (
        <div className="dropDownDesc">
          Provides detailed information about colleges, universities,
          and educational institutions offering various courses and
          programs. This section helps students explore institution
          details such as available courses, location, and academic
          focus to support informed decision-making.
        </div>
      )}

      {/* RESOURCES POPUP */}
      {showResource && (
        <div className="dropdown-wrapper">
        <div className="dropDownDescR">
          Offers curated learning materials, references, and guidance
          resources related to different career paths and courses.
          These resources help users understand skill requirements,
          learning paths, and preparation strategies for their chosen
          careers.
        </div>
        </div>
      )}
    </>
  );
}

export default HeaderBeforeLogin;
