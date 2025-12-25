// Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Home() {
  return (
    <div className="home-page">
      {/* TOP BAR LIKE FIGMA */}
      <header className="top-bar">
        <div className="logo">Career and Education Advisor</div>
        <nav>
          <button className="link-btn">Institutions</button>
          <button className="link-btn">Resources</button>
          <button className="link-btn">About us</button>

          {/* Register navigates to /register */}
          <Link to="/register" className="nav-register-btn">
            Register
          </Link>
        </nav>
      </header>

      <main className="home-content">
        <h1>One-Stop Personalized Career &amp; Education Advisor</h1>
        <p>
          A smart platform that helps 10th, intermediate, and college students choose
          the right career path by analyzing their interests, skills, and academic
          background.
        </p>
        <button className="primary-btn">START QUIZ</button>

        {/* Why Career Advisor */}
        <section className="why-section">
          <h3>Why Career Advisor?</h3>
          <div className="why-row">
            <div className="why-box green">
              Many students choose careers without understanding their interests,
              skills, or academic strengths.
            </div>
            <div className="why-box pink">
              Poor career choices at the 10th or intermediate level can affect
              long‑term growth and opportunities.
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="services-section">
          <h3>Our Services</h3>
          <div className="services-row">
            <div className="service-card blue">
              <img src="/careerIcon.jpeg" alt="Career Path Recommendation" />
              <h4>Career Path Recommendation</h4>
              <p>
                Provides personalized career guidance by analyzing the student’s
                interests, skills, and academic background through a quiz‑based
                assessment.
              </p>
            </div>

            <div className="service-card orange">
              <img src="/courseIcon.jpeg" alt="Course & Skill Recommendation" />
              <h4>Course &amp; Skill Recommendation</h4>
              <p>
                Suggests suitable degree programs, certifications, and skill‑based
                courses aligned with the recommended career path.
              </p>
            </div>

            <div className="service-card green">
              <img src="/collegeIcon.jpeg" alt="College & Institution Guidance" />
              <h4>College &amp; Institution Guidance</h4>
              <p>
                Offers information about colleges and institutions that provide
                the recommended courses, helping students choose the right place
                to study.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="how-section">
          <h3>How it works?</h3>
          <div className="how-box">
            <p>Step 1: Take Career Assessment Quiz</p>
            <p>Step 2: System analyzes your responses</p>
            <p>Step 3: Get career, course &amp; college recommendations</p>
          </div>
        </section>

        {/* Bottom stats row */}
        <section className="stats-row">
          <div>
            <strong>50+</strong>
            <span>Career Options</span>
          </div>
          <div>
            <strong>45+</strong>
            <span>Courses</span>
          </div>
          <div>
            <strong>78+</strong>
            <span>Colleges/Institutions</span>
          </div>
        </section>
      </main>
    </div>
  );
}
