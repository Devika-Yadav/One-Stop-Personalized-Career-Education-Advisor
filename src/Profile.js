import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { deleteUser } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      navigate("/login");
      return;
    }

    setUser({
      name: currentUser.displayName,
      email: currentUser.email,
    });
  }, [navigate]);

  const handleDeleteAccount = async () => {
    try {
      const currentUser = auth.currentUser;

      if (currentUser) {
        await deleteUser(currentUser);

        // Clear local storage
        localStorage.clear();

        // Go to before-login home page
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
          <span>{localStorage.getItem("userRole")}</span>
        </div>

        <div className="profile-buttons">
          <button className="delete-btn" onClick={() => setShowConfirm(true)}>
            Delete Account
          </button>

          <button className="back-btn" onClick={() => navigate(-1)}>
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
              <button className="confirm-delete" onClick={handleDeleteAccount}>
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
