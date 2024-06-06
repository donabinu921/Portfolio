import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';

function App() {
  return (
    <div className='main-page'>
      <Navbar />
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <ContactMe/>
    </div>
  );
}

export default App;