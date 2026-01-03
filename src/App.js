import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import QuizIntermediate from "./QuizIntermediate";
import QuizStart from "./QuizStart";
import Quiz10th from "./Quiz10th";
import QuizCollege from "./QuizCollege";
import Profile from "./Profile";


function App() {
  return (
    <Routes>
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
        <Route path="/profile" element={<Profile />} />

      </Route>
    </Routes>
  );
}

export default App;
