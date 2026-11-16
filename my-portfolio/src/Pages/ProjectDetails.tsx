
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";

const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="shell portfolio-not-found">
        <h1>Project not found.</h1>
        <Link to="/">Return to portfolio</Link>
      </main>
    );
  }

  return (
    <main className="portfolio-case-study">
      <div className="shell">

        <Link to="/#projects" className="portfolio-back-link">
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        <header className="portfolio-case-header">
          <p className="eyebrow">PROJECT</p>

          <h1>{project.name}</h1>

          <p className="portfolio-case-subtitle">
            {project.subtitle}
          </p>

          <div className="portfolio-case-tags">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </header>

        <figure className="portfolio-case-image">
          <img
            src={project.image}
            alt={`${project.name} application screenshot`}
          />

          <figcaption>
            {project.name} — Application screenshot
          </figcaption>
          <section className="portfolio-screenshots">
                <p className="eyebrow">APPLICATION SCREENSHOTS</p>

                <h2>Inside the application.</h2>

                <div className="portfolio-screenshots-grid">
                    {project.screenshots.map((screenshot, index) => (
                        <figure
                            key={screenshot}
                            className="portfolio-screenshot-card"
                        >
                            <img
                                src={screenshot}
                                alt={`${project.name} screenshot ${index + 1}`}
                                loading="lazy"
                            />

                            <figcaption>
                                Screenshot {index + 1}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </section>
        </figure>

        <div className="portfolio-case-layout">

          
        <aside className="portfolio-case-aside">
            <p className="eyebrow">PROJECT OVERVIEW</p>

            <h2>Behind the build.</h2>
        </aside>


          <div className="portfolio-case-content">

            <section>
              <p className="eyebrow">DESCRIPTION</p>

              <h2>About the project</h2>

              <p>{project.description}</p>
            </section>

            <section>
              <p className="eyebrow">PROBLEM</p>

              <h2>Problem resolved</h2>

              <p>{project.problem}</p>
            </section>

            <section>
              <p className="eyebrow">FEATURES</p>

              <h2>Key features</h2>

              <ul className="portfolio-feature-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>

            <section>
              <p className="eyebrow">TECHNOLOGIES</p>

              <h2>Tools and technologies</h2>

              <div className="portfolio-case-tags">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </section>

            <section>
              <p className="eyebrow">LESSONS LEARNED</p>

              <h2>What I learned</h2>

              <p>{project.lessons}</p>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
