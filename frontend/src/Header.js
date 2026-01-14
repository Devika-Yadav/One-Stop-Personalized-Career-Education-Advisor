// Header.js
import { Link } from "react-router-dom";
import { useState } from "react";
import IntitutionInfo from "./components/InstitutionInfo";
import ResourceInfo from "./components/ResourceInfo";
import "./Header.css";
// import "./styles.css";
export default function Header() {
  const [openInstitutionInfo, setOpenInstitutionInfo] = useState(false);
  const [openResourceInfo, setOpenResourceInfo] = useState(false);

  const closePopups = () => {
    setOpenInstitutionInfo(false);
    setOpenResourceInfo(false);
  };

  return (
    <header className="header">
      <div className="header-left">
          <img src="/logo.png" alt="C&E Logo" className="logo-img" />
          <span className="logo-text">Career and Education Advisor</span>
        </div>
      <nav>
        <Link to="/" className="link-btn" onClick={closePopups}>
          Home
        </Link>
        <button
          className="link-btn"
          onClick={() => {
            setOpenInstitutionInfo((p) => !p);
            setOpenResourceInfo(false);
          }}
        >
          Institutions
        </button>

        <button
          className="link-btn"
          onClick={() => {
            setOpenResourceInfo((p) => !p);
            setOpenInstitutionInfo(false);
          }}
        >
          Resources
        </button>

        <Link to="/about" className="link-btn" onClick={closePopups}>
          About us
        </Link>

        <Link to="/register" className="btn-register" onClick={closePopups}>
          Register
        </Link>
      </nav>

      {openInstitutionInfo && <IntitutionInfo />}
      {openResourceInfo && <ResourceInfo />}
    </header>
  );
}
