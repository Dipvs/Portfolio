import React from 'react'

const Projects = ({ t }) => {
  return (
    <section className="section">
      <h2>{t.projectsTitle}</h2>
      <div style={styles.projectItem}>
        <div style={styles.projectHeader}>
          <h3>{t.projectPython}</h3>
        </div>
        <p>{t.projectPythonDesc}</p>
      </div>
      <div style={styles.projectItem}>
        <div style={styles.projectHeader}>
          <h3>{t.projectSales}</h3>
        </div>
        <p>{t.projectSalesDesc}</p>
      </div>
    </section>
  )
}

const styles = {
  projectItem: {
    marginBottom: '1.5rem',
    borderLeft: '3px solid var(--accent-color)',
    paddingLeft: '1rem'
  },
  projectHeader: {
    marginBottom: '0.5rem'
  }
}

export default Projects