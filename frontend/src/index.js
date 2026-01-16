// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import ForgotPassword from "./ForgotPassword";
import AboutUs from "./components/AboutUs";
import Layout from "./Layout";
import AdminDashboard from "./components/AdminDashboard";
import ProtectedRoute from "./ProtectedRoute";
import Institutions from "./components/Institutions";
import Resources from "./components/Resources";
import Profile from "./Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>

      {/* PAGES WITH HEADER & FOOTER */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/profile" element={<Profile/>}/>

        <Route
          path="/institutions"
          element={
            <ProtectedRoute allowedRoles={["STUDENT"]}>
              <Institutions />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resources"
          element={
            <ProtectedRoute allowedRoles={["STUDENT"]}>
              <Resources />
            </ProtectedRoute>
          }
        />

      </Route>

      {/* AUTH PAGES */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* ADMIN */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* STUDENT DASHBOARD (OPTIONAL) */}
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
