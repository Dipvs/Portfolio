import React from 'react'

const Skills = ({ t }) => {
  return (
    <section className="section">
      <h2>{t.skillsTitle}</h2>
      <p><strong>{t.languages}:</strong></p>
      <div>
        <span className="tag">Java</span>
        <span className="tag">C#</span>
        <span className="tag">JavaScript</span>
        <span className="tag">SQL</span>
        <span className="tag">Python</span>
      </div>
      <p><strong>{t.frameworks}:</strong></p>
      <div>
        <span className="tag">Spring Boot</span>
        <span className="tag">Node.js</span>
        <span className="tag">Django</span>
        <span className="tag">React</span>
        <span className="tag">.NET</span>
      </div>
      <p><strong>{t.databases}:</strong></p>
      <div>
        <span className="tag">OracleDB</span>
        <span className="tag">PostgreSQL</span>
        <span className="tag">SQLServer</span>
        <span className="tag">MongoDB</span>
      </div>
      <p><strong>{t.methods}:</strong></p>
      <div>
        <span className="tag">Git</span>
        <span className="tag">Agile</span>
        <span className="tag">Scrum</span>
      </div>
    </section>
  )
}

export default Skills