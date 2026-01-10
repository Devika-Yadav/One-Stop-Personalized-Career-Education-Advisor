import { Outlet, useLocation } from "react-router-dom";
import HeaderBeforeLogin from "./components/HeaderBeforeLogin";
import HeaderAfterLogin from "./components/HeaderAfterLogin";
import "./components/Footer.css";

function Layout() {
  const location = useLocation();

  // ✅ always get a real boolean
  const isAuthenticated =
    localStorage.getItem("isAuthenticated") === "true";

  // ❌ Pages without header & footer
  const authPages = ["/login", "/register"];
  const hideLayout = authPages.includes(location.pathname);

  return (
    <div className="page-wrapper">
      {/* HEADER */}
      {!hideLayout &&
        (isAuthenticated ? <HeaderAfterLogin /> : <HeaderBeforeLogin />)}

      {/* MAIN CONTENT */}
      <main className="page-content">
        <Outlet />
      </main>

      {/* FOOTER */}
      {!hideLayout && <Footer />}
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p><strong>Contact us:</strong></p>
        <p>Email: support@careeredvisor.com</p>
        <p>Phone: +91-8309214468</p>
      </div>

      <div className="footer-right">
        <p className="guidance-text">For guidance purposes only</p>
        <p className="copyright-text">
          © 2025 Career & Education Advisor | Academic Project | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Layout;