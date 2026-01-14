import "./AdminSidebar.css";

const AdminSidebar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };

  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <span>Admin Panel</span>
        <button onClick={onClose}>✖</button>
      </div>

      <ul>
        <li onClick={() => scrollTo("dashboard")}>Dashboard</li>
        <li onClick={() => scrollTo("careers")}>Careers</li>
        <li onClick={() => scrollTo("courses")}>Courses</li>
        <li onClick={() => scrollTo("colleges")}>Colleges</li>
        <li onClick={() => scrollTo("quiz")}>Quiz Questions</li>
        <li onClick={() => scrollTo("users")}>Users</li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
