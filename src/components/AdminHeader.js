import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminHeader.css";

import AdminSidebar from "./AdminSidebar";

const AdminHeader = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false); // ✅ sidebar state

  const logout = () => {
  localStorage.clear();
  window.location.href = "/"; // ✅ forces re-render
};


  return (
    <>
      <header className="admin-header">
        <div className="admin-left">
          {/* ☰ MENU ICON */}
          <span className="menu-icon" onClick={() => setOpen(true)}>
            ☰
          </span>

          <img src="/logo.png" alt="C&E Logo" className="logo-img" />
          <span className="logo-text">Career and Education Advisor</span>
        </div>

        <div className="admin-right">
          <span
            className="profile-icon clickable"
            title="Profile"
            onClick={() => navigate("/admin/profile")}
          >
            👤
          </span>

          <button onClick={logout}>Logout</button>
        </div>
      </header>

      {/* ✅ ADMIN SIDEBAR */}
      <AdminSidebar isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default AdminHeader;
