import React, { useState } from 'react';
import "../styles/Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleClick = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <nav>
        <ul>
          <li className={activeSection === 'home' ? 'active' : ''}><button onClick={() => handleClick('home')}>HOME</button></li>
          <li className={activeSection === 'about' ? 'active' : ''}><button onClick={() => handleClick('about')}>ABOUT</button></li>
          <li className={activeSection === 'skills' ? 'active' : ''}><button onClick={() => handleClick('skills')}>SKILLS</button></li>
          <li className={activeSection === 'projects' ? 'active' : ''}><button onClick={() => handleClick('projects')}>PROJECTS</button></li>
          <li className={activeSection === 'contactme' ? 'active' : ''}><button onClick={() => handleClick('contactme')}>CONTACT ME</button></li>
        </ul>
      </nav>
  );
};

export default Navbar;