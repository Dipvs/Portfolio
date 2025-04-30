import React from 'react'

const Languages = ({ t }) => {
  return (
    <section className="section">
      <h2>{t.languagesTitle}</h2>
      <p><strong>{t.portuguese}:</strong> {t.native}</p>
      <p><strong>{t.english}:</strong> {t.advanced}</p>
      <p><strong>{t.french}:</strong> {t.intermediate}</p>
      <p><strong>{t.spanish}:</strong> {t.intermediate}</p>
    </section>
  )
}

export default Languages