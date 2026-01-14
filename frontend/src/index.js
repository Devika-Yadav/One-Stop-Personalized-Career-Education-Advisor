// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import ForgotPassword from "./ForgotPassword"
import AboutUs from "./components/AboutUs.js";
import Layout from "./Layout.js";
import AdminDashboard from "./components/AdminDashboard.js";
import ProtectedRoute from "./ProtectedRoute.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Home />} />     
           {/* Home first */}
        <Route path="/about" element={<AboutUs />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute allowedRoles={["ADMIN"]}>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/student/dashboard"
  element={
    <ProtectedRoute allowedRoles={["STUDENT"]}>
      {/* <StudentDashboard /> */}
    </ProtectedRoute>
  }
/>

<Route path="/unauthorized" element={<h1>403 - Unauthorized</h1>} />

      
    </Routes>
  </BrowserRouter>
);
