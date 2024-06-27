import React from 'react';
import '../styles/About.css';
import "../styles/BouncingBall.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>Get to know me!</h2>
      <p className='about-p'>Hey there, I'm a passionate Front-End Developer and Designer based in Kerala, India. With a
keen focus on creating captivating user experiences, I'm 
experienced in developing simple but efficient
solutions using technologies including HTML, CSS,
JavaScript, React.js and Figma. I'm eagerly seeking opportunities to collaborate
with like-minded professionals and contribute to
projects prioritizing innovation and personal and
professional development.</p>
      <div className="bouncing-ball"></div>
    </section>
  );
};

export default About;
