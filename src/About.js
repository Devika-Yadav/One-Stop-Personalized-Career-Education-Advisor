import "./About.css";

function About() {
  return (
    <div className="about-page">
      {/* TITLE */}
      <h1 className="about-title">About us</h1>

      {/* DESCRIPTION */}
      <p className="about-description">
        One-Stop Personalized Career &amp; Education Advisor is a web-based
        platform designed to support students and job seekers in making informed
        career and educational decisions. The platform acts as a digital career
        guide by combining career assessment, course recommendations, and
        college suggestions in a single system.
      </p>

      {/* PROBLEM */}
      <h3 className="section-title">The Problem We Address</h3>

      <div className="problem-grid">
        <div className="problem-box green">
          Lack of personalized career guidance
        </div>
        <div className="problem-box red">
          Scattered and overwhelming information about courses and colleges
        </div>
        <div className="problem-box red">
          Difficulty in understanding skill requirements for different careers
        </div>
        <div className="problem-box green">
          Limited access to professional career counseling
        </div>
      </div>

      {/* INFO CARDS */}
      <div className="card-grid">
        <div className="info-card">
          <h4>⚠️ Disclaimer</h4>
          <p>
            The recommendations provided by this platform are intended for
            guidance purposes only. Users are encouraged to verify course and
            college details independently before making final decisions.
          </p>
        </div>

        <div className="info-card yellow">
          <h4>🚀 Mission</h4>
          <p>
            To simplify career planning by providing a centralized platform that
            integrates career guidance, educational resources, and institutional
            information through intelligent recommendations.
          </p>
        </div>

        <div className="info-card green">
          <h4>🎯 Vision</h4>
          <p>
            To empower students and professionals with accessible, reliable, and
            personalized career guidance that supports confident and informed
            decision-making.
          </p>
        </div>
      </div>

      {/* SOLUTION */}
      <div className="solution-box">
        <h3>Our Solution</h3>
        <ul>
          <li>Assesses user interests, aptitude, and skills</li>
          <li>Recommends suitable career paths</li>
          <li>Suggests relevant educational courses and certifications</li>
          <li>
            Provides information about colleges and institutions offering those
            courses
          </li>
        </ul>
        <p>
          All recommendations are delivered through a single, centralized
          platform.
        </p>
      </div>

      {/* FOOT NOTE */}
      <p className="academic-note">
        This platform is developed as an academic project to demonstrate the
        application of software engineering concepts such as system design, data
        management, and recommendation logic.
      </p>
    </div>
  );
}

export default About;
