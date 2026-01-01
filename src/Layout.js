import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import IntitutionInfo from "./components/InstitutionInfo";
import ResourceInfo from "./components/ResourceInfo";

function Layout() {
  const [openIntitutionInfo, setOpenIntitutionInfo] = useState(false);
  const [openResourceInfo, setOpenResourceInfo] = useState(false);

  const location = useLocation(); // get current URL

  // hide header/footer on About, Register, and Login pages
  const hideHeaderFooter = 
     location.pathname === "/register" ||
    location.pathname === "/login";

  return (
    <>
      {/* BLUE HEADER */}
      {!hideHeaderFooter && (
        <header className="top-bar">
          <div className="logo">Career and Education Advisor</div>

          <nav>
            <Link to="/" className="link-btn">Home</Link>

            <button
              className="link-btn"
              onClick={() => setOpenIntitutionInfo(prev => !prev)}
            >
              Institutions
            </button>

            <button
              className="link-btn"
              onClick={() => setOpenResourceInfo(prev => !prev)}
            >
              Resources
            </button>

            <Link to="/about" className="link-btn">About us</Link>

            {!hideHeaderFooter && (
              <Link to="/register" className="nav-register-btn">Register</Link>
            )}
          </nav>

          {openIntitutionInfo && <IntitutionInfo />}
          {openResourceInfo && <ResourceInfo />}
        </header>
      )}

      {/* PAGE CONTENT */}
      <Outlet />

      {/* BLACK FOOTER */}
      {!hideHeaderFooter && (
        <footer className="footer">
          <div className="footer-left">
            <p><strong>Contact us:</strong></p>
            <p>Email: support@careeradvisor.com</p>
            <p>Phone: +91-8309214468</p>
          </div>

          <div className="footer-right">
            <p className="guidance">For guidance purposes only</p>
            <p className="copyright">
              © 2025 Career & Education Advisor | Academic Project | All Rights Reserved
            </p>
          </div>
        </footer>
      )}
    </>
  );
}


export default Layout;
