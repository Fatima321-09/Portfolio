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
                {project.github && <a className="btn-outline" href={project.github} target="_blank" rel="noreferrer" aria-label={`Code on GitHub: ${project.title}`}><svg className="github-icon" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.77 2.33 3.16 1.66.1-.72.39-1.21.7-1.49-2.47-.28-5.06-1.24-5.06-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.56 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.22-5.08 5.49.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg><span>Code</span></a>}
                {project.live && <a className="btn-primary" href={project.live} target="_blank" rel="noreferrer">Live</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
