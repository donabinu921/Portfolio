import React, { useState, useEffect, useCallback } from 'react';
import "../styles/Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = useCallback(() => {
    if (isScrolling) return;

    const sections = ['home', 'about', 'skills', 'projects', 'contactme'];
    let currentSection = 'home';

    for (let section of sections) {
      const element = document.getElementById(section);
      const rect = element.getBoundingClientRect();
      if (rect.top <= 50 && rect.bottom >= 50) {
        currentSection = section;
        break;
      }
    }

    setActiveSection(currentSection);
  }, [isScrolling]);

  const handleClick = (section) => {
    setIsScrolling(true);
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      setIsScrolling(false);
    }, 800); // Adjust timeout duration based on your smooth scroll duration
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav>
      <ul>
        <li className={activeSection === 'home' ? 'active' : ''}>
          <button onClick={() => handleClick('home')}>HOME</button>
        </li>
        <li className={activeSection === 'about' ? 'active' : ''}>
          <button onClick={() => handleClick('about')}>ABOUT</button>
        </li>
        <li className={activeSection === 'skills' ? 'active' : ''}>
          <button onClick={() => handleClick('skills')}>SKILLS</button>
        </li>
        <li className={activeSection === 'projects' ? 'active' : ''}>
          <button onClick={() => handleClick('projects')}>PROJECTS</button>
        </li>
        <li className={activeSection === 'contactme' ? 'active' : ''}>
          <button onClick={() => handleClick('contactme')}>CONTACT ME</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
