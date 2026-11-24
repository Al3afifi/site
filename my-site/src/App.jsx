import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import headshot from './assets/headshot.jpg'
import sunset from './imgs/sunset2.webp'
import Header from './header/Header.jsx'
import About from './about/About.jsx'
import Experiences from './experiences/Experiences.jsx'
import Projects from './projects/Projects.jsx'
import './App.css'
// npm run dev

function App() {
  const [count, setCount] = useState(0)

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
      <Projects/>

      <div id="contact_page">

      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          ADHD fidget button {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
