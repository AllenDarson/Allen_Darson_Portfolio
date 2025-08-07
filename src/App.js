// import './App.css';
// import Basic from './Components/Basic';
// import Home from './Components/Home';
// import About from './Components/About';
// import Skills from './Components/Skills';
// import Projects from './Components/Projects';
// import Contact from './Components/Contact';

// function App() {
//   return (
//     <div className="App">
//       <Basic />
//       <Home />
//       <About />
//       <Skills />
//       <Projects />
//       <Contact />
//     </div>
//   );
// }

// export default App;
// 
import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Button } from 'react-bootstrap';

import Basic from './Components/Basic';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  useEffect(() => {
    document.body.classList.toggle('light-mode', !darkMode);
  }, [darkMode])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className="loading-screen">
        <span>Loading</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
      </div>
    );
  }

  return (
    <div>
      {/* Pass darkMode and toggle function to Home */}
      <button className="theme-toggle-btn" onClick={toggleDarkMode} title="Toggle theme">
        {darkMode ? '🌙' : '☀️'}
      </button>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

