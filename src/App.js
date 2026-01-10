import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

/* ===== COMMON / STUDENT ===== */
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import QuizStart from "./QuizStart";
import Quiz10th from "./Quiz10th";
import QuizIntermediate from "./QuizIntermediate";
import QuizCollege from "./QuizCollege";
import Profile from "./Profile";
import InstitutionInfom from "./components/InstitutionInfom";
import ResourceInfom from "./components/ResourceInfom";

/* ===== ADMIN ===== */
import AdminDashboard from "./AdminDashboard";
import AdminProfile from "./AdminProfile";

function App() {
  return (
    <Routes>
      {/* ================= STUDENT / NORMAL APP ================= */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/quiz" element={<QuizStart />} />
        <Route path="/quiz/10th" element={<Quiz10th />} />
        <Route path="/quiz/intermediate" element={<QuizIntermediate />} />
        <Route path="/quiz/college" element={<QuizCollege />} />

        {/* STUDENT PROFILE */}
        <Route path="/profile" element={<Profile />} />

        <Route path="/institutions" element={<InstitutionInfom />} />
        <Route path="/resources" element={<ResourceInfom />} />
      </Route>

      {/* ================= ADMIN (NO LAYOUT) ================= */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/profile" element={<AdminProfile />} />
    </Routes>
  );
}

export default App;
