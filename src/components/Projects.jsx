import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-header">
        <div>
          <div className="section-label">Selected Work</div>
          <h2 className="section-title">Projects</h2>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            {project.live && <div className="project-status status-live">Live</div>}
            <div className="project-thumb" aria-hidden="true">
              {project.symbol}
            </div>
            <div className="project-body">
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-links">
                {project.github && <a className="btn-outline" href={project.github} target="_blank" rel="noreferrer">GitHub</a>}
                {project.live && <a className="btn-primary" href={project.live} target="_blank" rel="noreferrer">Live</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
