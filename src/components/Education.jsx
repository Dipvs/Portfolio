import React from 'react'

function Education({ t }) {
  return (
    <section className="section">
      <h2>{t.educationTitle}</h2>
      <h3>{t.infoSystems}</h3>
      <p>UNIESP Centro Universitário</p>
      <p>{t.semester}</p>
      <p><strong>{t.relevantCourses}:</strong> {t.coursesDesc}</p>
    </section>
  )
}

export default Education