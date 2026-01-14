import { Navigate } from "react-router-dom";
import { isTokenExpired } from "./utils/jwt";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const isAuthenticated =
    localStorage.getItem("isAuthenticated") === "true";
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Token expired
  if (isTokenExpired(token)) {
    localStorage.clear();
    return <Navigate to="/login" replace />;
  }

  // Role mismatch
  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
