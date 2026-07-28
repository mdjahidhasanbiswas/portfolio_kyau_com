export default function Projects({ projects }) {
  return (
    <section className="section projects" id="projects">
      <div className="section__head">
        <p className="eyebrow reveal">02</p>
        <h2 className="reveal">
          <span className="section__title">Projects</span>
        </h2>
        <div className="section__rule" aria-hidden="true" />
      </div>

      <ul className="project-list">
        {projects.map((project, index) => (
          <li className="project" key={project.title}>
            <span className="project__index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="project__content">
              <div className="project__top">
                <h3>{project.title}</h3>
                <span className="project__year">{project.year}</span>
              </div>
              <p>{project.description}</p>
              <div className="project__footer">
                <ul className="project__tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project__links">
                  <a href={project.url} target="_blank" rel="noreferrer">
                    Live
                  </a>
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </div>
              </div>
            </div>
            <span className="project__rail" aria-hidden="true" />
          </li>
        ))}
      </ul>
    </section>
  )
}
