// Home.js
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  const handleStartQuiz = () => {
    navigate(isAuthenticated ? "/quiz" : "/register");
  };

  return (
    <div className="home-page">

      <main className="home-content fade-in">
        <h1>Personalized Career & Education Advisor for Intermediate Students</h1>
        <p>
          A smart platform designed exclusively for Intermediate students to help
          them choose the right career path by analyzing their interests, skills,
          and academic strengths.
        </p>

        <button className="primary-btn bounce" onClick={handleStartQuiz}>
          START QUIZ
        </button>

        {/* Why Career Advisor */}
        <section className="why-section slide-up">
          <h3>Why Career Advisor?</h3>
          <div className="why-row">
            <div className="why-box green">
              Many Intermediate students struggle to identify the right career
              direction after completing their studies.
            </div>
            <div className="why-box pink">
              Choosing an unsuitable course after Intermediate can limit future
              academic and professional opportunities.
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="services-section slide-up">
          <h3>Our Services</h3>
          <div className="services-row">
            <div className="service-card blue zoom-in">
              <img src="/careerIcon.jpeg" alt="Career Path Recommendation" />
              <h4>Career Path Recommendation</h4>
              <p>
                Provides personalized career guidance for Intermediate students
                through an interest- and aptitude-based assessment.
              </p>
            </div>

            <div className="service-card orange zoom-in">
              <img src="/courseIcon.jpeg" alt="Course & Skill Recommendation" />
              <h4>Course &amp; Skill Recommendation</h4>
              <p>
                Suggests suitable degree programs, entrance exams, and skill-based
                courses aligned with your chosen career path.
              </p>
            </div>

            <div className="service-card green zoom-in">
              <img src="/collegeIcon.jpeg" alt="College & Institution Guidance" />
              <h4>College &amp; Institution Guidance</h4>
              <p>
                Helps Intermediate students identify colleges and institutions
                offering the recommended courses.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="how-section slide-up">
          <h3>How it works?</h3>
          <div className="how-box">
            <p>Step 1: Take the Intermediate Career Assessment Quiz</p>
            <p>Step 2: System analyzes your interests and strengths</p>
            <p>Step 3: Get career, course &amp; college recommendations</p>
          </div>
        </section>

        {/* Bottom stats row */}
        <section className="stats-row fade-in">
          <div className="stat-box">
            <strong>40+</strong>
            <span>Career Paths</span>
          </div>

          <div className="divider"></div>

          <div className="stat-box">
            <strong>35+</strong>
            <span>Degree Courses</span>
          </div>

          <div className="divider"></div>

          <div className="stat-box">
            <strong>60+</strong>
            <span>Colleges</span>
          </div>
        </section>

      </main>
    </div>
  );
}
