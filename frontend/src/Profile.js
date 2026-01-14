import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { deleteUser } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles.css";

function Profile() {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  // 🔑 Detect admin viewing a student
  const isAdminView = location.state?.viewUser === true;
  const viewedUser = location.state?.user;

  useEffect(() => {
    // ADMIN viewing STUDENT
    if (isAdminView && viewedUser) {
      setUser({
        name: viewedUser.name,
        email: viewedUser.email || "student@example.com",
        role: "student",
      });
      return;
    }

    // NORMAL logged-in user (admin or student)
    const currentUser = auth.currentUser;

    if (!currentUser) {
      navigate("/login");
      return;
    }

    setUser({
      name: currentUser.displayName || "User",
      email: currentUser.email,
      role: localStorage.getItem("userRole"),
    });
  }, [navigate, isAdminView, viewedUser]);

  // ❌ Admin must NOT delete student accounts from here
  const handleDeleteAccount = async () => {
    if (isAdminView) return;

    try {
      const currentUser = auth.currentUser;

      if (currentUser) {
        await deleteUser(currentUser);
        localStorage.clear();
        navigate("/", { replace: true });
      }
    } catch (error) {
      alert("Please re-login to delete account.");
    }
  };

  if (!user) return null;

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h2>Profile</h2>

        <div className="profile-row">
          <span className="label">Full Name:</span>
          <span>{user.name}</span>
        </div>

        <div className="profile-row">
          <span className="label">Email:</span>
          <span>{user.email}</span>
        </div>

        <div className="profile-row">
          <span className="label">Role:</span>
          <span>{user.role}</span>
        </div>

        <div className="profile-buttons">
          {/* ❌ Hide delete button when admin views student */}
          {!isAdminView && (
            <button
              className="delete-btn"
              onClick={() => setShowConfirm(true)}
            >
              Delete Account
            </button>
          )}

          <button
            className="back-btn"
            onClick={() =>
              isAdminView ? navigate("/admin") : navigate(-1)
            }
          >
            Back
          </button>
        </div>
      </div>

      {/* CONFIRMATION POPUP */}
      {showConfirm && (
        <div className="confirm-overlay">
          <div className="confirm-box">
            <p>Are you sure you want to delete your account?</p>

            <div className="confirm-actions">
              <button
                className="confirm-delete"
                onClick={handleDeleteAccount}
              >
                Delete
              </button>
              <button
                className="confirm-cancel"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
