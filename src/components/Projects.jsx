import { projects } from "../data/Projects"

export default function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="card">
            {project.image && (
              <img src={project.image} alt={project.title} className="card-image" />
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.tech && project.tech.length > 0 && (
              <ul className="card-tech">
                {project.tech.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            )}
            <div className="card-links">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">Live Demo</a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
