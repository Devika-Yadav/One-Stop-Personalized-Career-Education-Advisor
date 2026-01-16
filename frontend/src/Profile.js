import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api/axios";
import "./styles.css";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const email = localStorage.getItem("email"); // saved at login

  useEffect(() => {
    if (!email) {
      setError("No logged-in user found.");
      return;
    }

    // Fetch user details via API
    api.post("/api/auth/profile", { email })
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.error(err);
        setError("Failed to load profile. Stay on this page.");
      });
  }, [email]);

  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete your account?")) return;

    api.delete(`/api/auth/delete?email=${email}`)
      .then(() => {
        alert("Account deleted successfully!");
        localStorage.clear();
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.error(err);
        alert("Could not delete account. Try again.");
      });
  };

  if (!user && !error) return <p>Loading profile...</p>;

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h2>Profile</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {user && (
          <>
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
          </>
        )}

        <div className="profile-buttons">
          <button className="delete-btn" onClick={handleDelete}>
            Delete Account
          </button>
          <button className="back-btn" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
