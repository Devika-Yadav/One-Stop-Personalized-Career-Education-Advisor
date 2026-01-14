// Layout.js
import { Outlet } from "react-router-dom";
import Header from "./Header"; // before login
import HeaderAfterLogin from "./components/HeaderAfterLogin";
import HeaderAfterAdminLogin from "./components/HeaderAfterAdminLogin";
import Footer from "./Footer";

export default function Layout() {
  const isAuthenticated =
    localStorage.getItem("isAuthenticated") === "true";

  const userRole = localStorage.getItem("userRole"); // "user" | "admin"

  const renderHeader = () => {
    if (!isAuthenticated) return <Header />;

    if (userRole === "admin") return <HeaderAfterAdminLogin />;

    return <HeaderAfterLogin />;
  };

  return (
    <>
      {renderHeader()}
      <Outlet />
      <Footer />
    </>
  );
}
