import React from 'react'

const Experience = ({ t }) => {
  return (
    <section className="section">
      <h2>{t.experienceTitle}</h2>
      <div style={styles.experienceItem}>
        <div style={styles.experienceHeader}>
          <h3>Ébano Distribuidora</h3>
          <p>Jun/2024 - Atual</p>
        </div>
        <p><strong>{t.juniorDev}</strong></p>
        <ul>
          {t.expDescription.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const styles = {
  experienceItem: {
    marginBottom: '1.5rem',
    borderLeft: '3px solid var(--accent-color)',
    paddingLeft: '1rem'
  },
  experienceHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem'
  }
}

export default Experience