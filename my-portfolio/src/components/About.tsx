import { Code2, Database, Server } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="shell">
        <div className="about-layout">
          <div className="about-intro">
            <p className="eyebrow"> ABOUT ME</p>
            <h2 className="about-title">
              Who I
              <br />
               <span>am.</span>
            </h2>
            <p className="about-subtitle">
              Full Stack Developer . Aspiring data analyst . Low-code development
              <br />
            </p>
          </div>
          <div className="about-content">
                <p className="about-lead">
                   I'm <span>Ayomipo Majekodunmi.</span> Currently a software
                   engineering student with interest in building problem solving systems.
                </p>
                <div className="about-detail">
                    <h3>My Interests</h3>
                    <p>
                     Web development, low-code applications, database
                     design, and data analytics. I enjoy exploring
                     new technologies and learning new skills.
                    </p>
                </div>
                <div className="about-detail">
                    <h3>My experience</h3>
                    <p>
                      I've worked with React, Python, FastAPI,
                      PostgreSQL, and Java through academic
                      projects and practical experience.
                    </p>
                </div>
            </div>
        </div>
        <div className="about-focus">
          <div className="focus-heading">
            <span>MY TECHNICAL COMPETENCIES</span>
          </div>
          <div className="focus-grid">
            <article className="focus-card">
              <div className="focus-icon">
                <Code2 size={24} />
              </div>
              <h3>Frontend Development</h3>
              <p>
                I have had hands of experience with creating interactive web designs using modern frontend
                frameworks.
              </p>
              <span>React · TypeScript · CSS</span>
            </article>
            <article className="focus-card">
              <div className="focus-icon">
                <Server size={24} />
              </div>
              <h3>Backend Development</h3>
              <p>
                My primary interest where i create backend logic, REST APIs,
                and services that support
                functional applications.
              </p>
              <span>Python · FastAPI </span>
            </article>
            <article className="focus-card">
              <div className="focus-icon">
                <Database size={24} />
              </div>
              <h3>Database Management</h3>
              <p>
                Designing for backends with defined schemas and relational databases to
                organize, store, and manage
                application data.
              </p>
              <span>PostgreSQL · Prisma</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;