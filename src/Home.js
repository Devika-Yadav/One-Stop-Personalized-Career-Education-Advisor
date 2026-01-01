import React from "react";
import "./styles.css";

export default function Home() {
  return (
    <main className="home-content">
      <h1>One-Stop Personalized Career &amp; Education Advisor</h1>

      <p>
        A smart platform that helps 10th, intermediate, and college students
        choose the right career path by analyzing their interests, skills, and
        academic background.
      </p>

      <button className="primary-btn">START QUIZ</button>

      {/* WHY SECTION */}
      <section className="why-section">
        <h3>Why Career Advisor?</h3>

        <div className="why-row">
          <div className="why-box green">
            Many students choose careers without understanding their interests,
            skills, or academic strengths.
          </div>

          <div className="why-box pink">
            Poor career choices at the 10th or intermediate level can affect
            long-term growth and opportunities.
          </div>
        </div>
      </section>

      {/* SERVICES */}
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
              Provides information about colleges offering recommended courses.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <h3>How it works?</h3>

        <div className="how-box">
          <p>Step 1: Take Career Assessment Quiz</p>
          <p>Step 2: System analyzes your responses</p>
          <p>Step 3: Get career, course &amp; college recommendations</p>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-row">
        <div className="stat-box">
          <strong>50+</strong>
          <span>Career Options</span>
        </div>

        <div className="divider"></div>

        <div className="stat-box">
          <strong>45+</strong>
          <span>Courses</span>
        </div>

        <div className="divider"></div>

        <div className="stat-box">
          <strong>78+</strong>
          <span>Colleges/Institutions</span>
        </div>
      </section>
    </main>
  );
}
