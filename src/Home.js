import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ ADDED
import "./styles.css";

export default function Home() {
  const navigate = useNavigate(); // ✅ ADDED

  const isAuthenticated =
    localStorage.getItem("isAuthenticated") === "true";

  const [showInstitutionPopup, setShowInstitutionPopup] = useState(false);
  const [showResourcePopup, setShowResourcePopup] = useState(false);

  // ✅ ONLY NEW LOGIC (navigation)
  const handleStartQuiz = () => {
    if (isAuthenticated) {
      navigate("/quiz");      // after login
    } else {
      navigate("/register");  // before login
    }
  };

  return (
    <main className="home-content">
      {isAuthenticated ? (
        /* ================= AFTER LOGIN (NO UI CHANGE) ================= */
        <>
          <p className="welcome-text">Welcome, User</p>

          <h1 className="main-title">
            One-Stop Personalized Career &amp;<br />
            Education Advisor
          </h1>

          <p className="main-desc">
            A smart platform that helps 10th, intermediate, and college students
            choose the right career path by analyzing their interests, skills,
            and academic background. Get personalized career, course, and
            college recommendations—all in one place.
          </p>

          {/* ✅ SAME BUTTON – ONLY onClick added */}
          <button className="start-quiz-btn" onClick={handleStartQuiz}>
            START QUIZ →
          </button>

          <h2 className="section-heading">
            How the Career Assessment Works
          </h2>

          <div className="steps-container">
            <div className="step-box">
              <strong>Step 1: Provide Your Background</strong>
              <p>
                Answer a few questions about your academic background,
                including your education level and subjects studied.
              </p>
            </div>

            <div className="step-box">
              <strong>Step 2: Share Your Interests</strong>
              <p>
                Select options that reflect your interests and the type
                of work you enjoy doing.
              </p>
            </div>

            <div className="step-box">
              <strong>Step 3: Evaluate Your Skills</strong>
              <p>
                Choose responses that best represent your current skills
                and strengths.
              </p>
            </div>

            <div className="step-box">
              <strong>Step 4: Complete the Assessment</strong>
              <p>
                Submit the quiz after answering all questions.
              </p>
            </div>

            <div className="step-box">
              <strong>Step 5: Get Personalized Recommendations</strong>
              <p>
                Based on your responses, the system generates personalized
                career paths, relevant courses, and suitable colleges.
              </p>
            </div>
          </div>
        </>
      ) : (
        /* ================= BEFORE LOGIN (NO UI CHANGE) ================= */
        <>
          <h1>One-Stop Personalized Career &amp; Education Advisor</h1>

          <p>
            A smart platform that helps 10th, intermediate, and college students
            choose the right career path by analyzing their interests, skills,
            and academic background.
          </p>

          {/* ✅ SAME BUTTON – ONLY onClick added */}
          <button className="primary-btn" onClick={handleStartQuiz}>
            START QUIZ
          </button>

          <div className="info-links">
            <span
              className="info-link"
              onClick={() => {
                setShowInstitutionPopup(!showInstitutionPopup);
                setShowResourcePopup(false);
              }}
            >
            </span>

            <span
              className="info-link"
              onClick={() => {
                setShowResourcePopup(!showResourcePopup);
                setShowInstitutionPopup(false);
              }}
            >
            </span>
          </div>

          {showInstitutionPopup && (
            <div className="info-popup">
              Provides detailed information about colleges, universities,
              and educational institutions offering various courses and
              programs. This section helps students explore institution
              details such as available courses, location, and general
              academic focus to support informed decision-making.
            </div>
          )}

          {showResourcePopup && (
            <div className="info-popup">
              Offers curated learning materials, references, and guidance
              resources related to different career paths and courses.
              These resources help users understand skill requirements,
              learning paths, and preparation strategies for their chosen
              careers.
            </div>
          )}

          <section className="why-section">
            <h3>Why Career Advisor?</h3>

            <div className="why-row">
              <div className="why-box green">
                Many students choose careers without understanding their
                interests, skills, or academic strengths.
              </div>

              <div className="why-box pink">
                Poor career choices at the 10th or intermediate level can affect
                long-term growth and opportunities.
              </div>
            </div>
          </section>

          <section className="services-section">
            <h3>Our Services</h3>

            <div className="services-row">
              <div className="service-card blue">
                <img src="/careerIcon.jpeg" alt="Career Path Recommendation" />
                <h4>Career Path Recommendation</h4>
                <p>
                  Personalized career guidance based on interests, skills, and
                  academics.
                </p>
              </div>

              <div className="service-card orange">
                <img src="/courseIcon.jpeg" alt="Course Recommendation" />
                <h4>Course &amp; Skill Recommendation</h4>
                <p>
                  Suggests suitable degree programs, certifications, and skills.
                </p>
              </div>

              <div className="service-card green">
                <img src="/collegeIcon.jpeg" alt="College Guidance" />
                <h4>College &amp; Institution Guidance</h4>
                <p>
                  Provides information about colleges offering recommended
                  courses.
                </p>
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
