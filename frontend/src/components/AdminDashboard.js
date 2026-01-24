import { useState } from "react";
import AdminHeader from "./HeaderAfterAdminLogin";
import AdminSidebar from "./AdminSidebar";
import CareersAdmin from "./CareersAdmin";

import InstitutionsAdmin from "./InstitutionsAdmin";
import QuizAdmin from "./QuizAdmin";
import UsersAdmin from "./UsersAdmin";
import ResourcesAdmin from "./ResourcesAdmin";
import AdminDataViewer from "./AdminDataViewer";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="admin-body">
        {/* Dashboard Overview */}
        <div id="dashboard" className="section">
          <h3>Dashboard Overview</h3>
          <div className="stats">
            <div>
              <b>130</b>
              <br />Users
            </div>
            <div>
              <b>67</b>
              <br />Career Options
            </div>
            <div>
              <b>45</b>
              <br />Courses
            </div>
            <div>
              <b>39</b>
              <br />Colleges
            </div>
          </div>
        </div>

        {/* Careers Section */}
        <div id="careers" className="section">
          <CareersAdmin />
        </div>

        {/* Courses/Resources Section */}
        <div id="courses" className="section">
          <ResourcesAdmin />
        </div>

        {/* Colleges Section */}
        <div id="colleges" className="section">
          <InstitutionsAdmin />
        </div>

        {/* Quiz Section */}
        <div id="quiz" className="section">
          <QuizAdmin />
        </div>

        {/* Users Section */}
        <div id="users" className="section">
          <UsersAdmin />
        </div>

        {/* Admin Data Viewer */}
        <div id="data-viewer" className="section">
          <AdminDataViewer />
        </div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
};

export default AdminDashboard;
