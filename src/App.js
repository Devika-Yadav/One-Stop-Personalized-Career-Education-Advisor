import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
}

export default App;
