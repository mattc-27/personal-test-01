import React from 'react';
import Welcome from './Welcome';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
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
