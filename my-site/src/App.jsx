import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import headshot from './assets/headshot.jpg'
import sunset from './imgs/sunset2.webp'
import Header from './header/Header.jsx'
import About from './about/About.jsx'
import Experiences from './experiences/Experiences.jsx'
import Projects from './projects/Projects.jsx'
import './App.css'
import './Contact.css'

// npm run dev
const THEMES = [
      { id: 'dark', label: 'Forest (Dark)' },
      { id: 'light', label: 'Sage (Light)' },
      { id: 'sand', label: 'Sand (Warm)' },
    ];


function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [themeOpen, setThemeOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);


  return (
    <>
      <Header />
    
      <img src={sunset} className="sunset" alt="background" />
      
      <div className='home'>

        <div className='title-container'>
          <img src={headshot} className="headshot" alt="Me" />
          <div className='title'>
            <h1>Muhammad Alafifi</h1>
            <h1>Software Engineer</h1>
            <div className='home-quick-access'> 
              <a href='https://www.linkedin.com/in/muhammad-alafifi/' target='_blank' className='home-quick-access-buttons'>LinkedIn</a>
              <a href='https://github.com/al3afifi' target='_blank' className='home-quick-access-buttons'>GitHub</a>
              <a href='/Muhammad Alafifi resume.pdf' target='_blank' className='home-quick-access-buttons'>Resume</a>
            </div>
            
          </div>
        </div>
      </div>
      <div className="sunset-credit">
        Photo by Me! @ The Mojave Desert
      </div>
      {/* TODO: make transition smoother */}
      {/* TODO: Make background color easier to look at */}
      {/* TODO: Add projects page */}
          {/* TODO: make projects page include skills that are selectable and highlightable (filters) */}

      <About/>
      <Experiences/>
      <Projects theme={theme}/>

      <div id="contact_page">
        <hr className="contact-divider" />
        <h2 className="contact-header">Contact</h2>
        <span className="contact-section">
          <p className="contact-item">Email: <a href="mailto:alafifiofficial@gmail.com">alafifiofficial@gmail.com</a></p>
          <p className="contact-item">LinkedIn: <a href='https://www.linkedin.com/in/muhammad-alafifi/' target='_blank'>linkedin.com/in/muhammad-alafifi/</a></p>  
        </span>        
      </div>

      <div className="card bottom-controls">
        <button onClick={() => setCount((count) => count + 1)}>
          ADHD fidget button {count}
        </button>
        <div className="theme-dropup">
          {themeOpen && (
            <div className="theme-menu">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  className={`theme-option ${theme === t.id ? 'active' : ''}`}
                  onClick={() => {
                    setTheme(t.id);
                    setThemeOpen(false);
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          )}
          <button
            className="theme-toggle-btn"
            onClick={() => setThemeOpen((prev) => !prev)}
          >
            Theme: {THEMES.find((t) => t.id === theme)?.label} ▲
          </button>
        </div>
      </div>
    </>
  )
}

export default App
