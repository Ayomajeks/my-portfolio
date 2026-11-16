import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="portfolio-projects">
      <div className="shell">

        <div className="projects-heading">
          <div>
            <p className="eyebrow">PROJECTS</p>

            <h2>
              Completed <span>works.</span>
            </h2>
          </div>

          <p>
            These are a few applications i've developed
            while exploring different areas of software
            engineering.
          </p>
        </div>

        <div className="portfolio-projects-grid">
          {projects.map((project, index) => (
            <article className="portfolio-project-card" key={project.slug}>

              <Link
                to={`/projects/${project.slug}`}
                className="portfolio-project-image"
                aria-label={`View ${project.name} project details`}
              >
                <img
                  src={project.image}
                  alt={`${project.name} application screenshot`}
                  loading="lazy"
                />
                <span className="portfolio-image-arrow">
                  <ArrowUpRight size={20} />
                </span>
              </Link>

              <div className="portfolio-project-content">
                <p className="eyebrow">
                  PROJECT 0{index + 1}
                </p>

                <h3>{project.name}</h3>

                <p className="portfolio-project-subtitle">
                  {project.subtitle}
                </p>

                <p className="portfolio-project-description">
                  {project.description}
                </p>

                <div className="tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="portfolio-project-actions">
                    <Link
                        to={`/projects/${project.slug}`}
                        className="portfolio-project-link"
                    >
                        View Project Details
                        <ArrowUpRight size={17} />
                    </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;