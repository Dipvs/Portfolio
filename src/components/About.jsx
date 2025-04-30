import React from 'react'

const About = ({ t }) => {
  return (
    <section className="section">
      <h2>{t.aboutTitle}</h2>
      <p>{t.aboutText}</p>
    </section>
  )
}

export default About