import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Languages from './components/Languages'
import Footer from './components/Footer'
import { translations } from './translations'

function App() {
  const [language, setLanguage] = useState('pt')
  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'pt' ? 'en' : 'pt')
  }

  return (
    <>
      <div className="language-toggle" onClick={toggleLanguage}>
        <span className="lang-pt">PT</span>
        <span className="lang-switch">|</span>
        <span className="lang-en">EN</span>
      </div>
      
      <Header language={language} t={t} />
      
      <div className="container">
        <About t={t} />
        <Experience t={t} />
        <Projects t={t} />
        
        <div className="skills-container">
          <Skills t={t} />
          <Education t={t} />
          <Languages t={t} />
        </div>
      </div>
      
      <Footer t={t} />
    </>
  )
}

export default App