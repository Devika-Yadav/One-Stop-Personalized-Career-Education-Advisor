// Layout.js
import { Outlet, Navigate, useLocation } from "react-router-dom";
import Header from "./Header";
import HeaderAfterLogin from "./components/HeaderAfterLogin";
import Footer from "./Footer";

export default function Layout() {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const role = localStorage.getItem("role");
  const location = useLocation();

  // 🔴 AUTO-REDIRECT ADMIN (on refresh / reopen)
  if (
    isAuthenticated &&
    role === "ADMIN" &&
    !location.pathname.startsWith("/admin")
  ) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const renderHeader = () => {
    if (!isAuthenticated) return <Header />;
    return <HeaderAfterLogin />; // STUDENT header
  };

  return (
    <div className="app-layout">
      {renderHeader()}
      <main className="app-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
