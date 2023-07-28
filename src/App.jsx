import React from 'react';
import Welcome from './components/Welcome';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'

function App() {
  return (

    <div className='mainContainer'>
      <div className='welcomeSection' id="Welcome">
        <Welcome />
      </div>
      <div className='experienceSection' id="Experience">
        <Experience />
      </div>
      <div className='projectsSection' id="Projects">
        <Projects />
      </div>
      <div className='contactSection' id="Contact">
        <Contact />
      </div>

    </div>

  );
}

export default App
