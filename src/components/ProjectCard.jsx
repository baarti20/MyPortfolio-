export default function ProjectCard({ project }) {
  if (!project) return null
  const { title, description, tech, liveUrl, githubUrl, image } = project

  return (
    <article className="project-card">
      {image && (
        <img src={image} alt={title} className="project-card__image" />
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      {tech && tech.length > 0 && (
        <ul className="project-card__tech">
          {tech.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      )}
      <div className="project-card__links">
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noreferrer">Live Demo</a>
        )}
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
        )}
      </div>
    </article>
  )
}
