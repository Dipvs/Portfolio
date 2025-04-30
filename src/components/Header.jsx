import React from 'react'

const Header = ({ t }) => {
  return (
    <header style={styles.header}>
      <div style={styles.profile}>
        <div style={styles.profileImg}>VS</div>
        <div style={styles.profileInfo}>
          <h1>Victor Silva</h1>
          <p>{t.role}</p>
          <div style={styles.contactInfo}>
            <div style={styles.contactItem}>
              <i className="fas fa-map-marker-alt"></i>
              <span>João Pessoa - PB</span>
            </div>
            <div style={styles.contactItem}>
              <i className="fas fa-phone"></i>
              <span>(83) 98733-4562</span>
            </div>
            <div style={styles.contactItem}>
              <i className="fas fa-envelope"></i>
              <span>victorsilva948@outlook.com</span>
            </div>
          </div>
          <div style={styles.socialLinks}>
            <a href="https://linkedin.com/in/victor-silva-8b34212b7" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Dipvs" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

const styles = {
  header: {
    backgroundColor: 'var(--secondary-dark)',
    padding: '2rem 0',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '3rem'
  },
  profileImg: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid var(--accent-color)',
    marginBottom: '1.5rem',
    backgroundColor: 'var(--secondary-dark)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    color: 'var(--text-primary)'
  },
  profileInfo: {
    textAlign: 'center'
  },
  contactInfo: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '1.5rem'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginTop: '1rem'
  }
}

export default Header