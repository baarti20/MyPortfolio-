export default function Skills() {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <h3>Frontend</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>Python</li>
            <li>PHP</li>
            <li>REST APIs</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Database</h3>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>DevOps</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
