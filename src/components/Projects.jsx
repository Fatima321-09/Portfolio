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
            <div
              className={`project-status ${
                project.status === "Live" ? "status-live" : "status-wip"
              }`}
            >
              {project.status}
            </div>
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
