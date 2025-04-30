import React from 'react'

const Footer = ({ t }) => {
  return (
    <footer style={styles.footer}>
      <p>{t.copyright}</p>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: 'var(--secondary-dark)',
    textAlign: 'center',
    padding: '1.5rem 0',
    marginTop: '2rem'
  }
}

export default Footer