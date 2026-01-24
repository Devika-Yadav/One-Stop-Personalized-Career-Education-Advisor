import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import './HeaderAfterAdminLogin.css';
function HeaderAfterAdminLogin() {
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
            <img
    src="/profileIcon.png"   
    alt="Profile"
    className="logo-img"
  />
          </span>

          <button className='btn-register' onClick={logout}>Logout</button>
        </div>
      </header>

      {/* ✅ ADMIN SIDEBAR */}
      <AdminSidebar isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default HeaderAfterAdminLogin