import React from 'react'
import "../styles/Skills.css"
import { FaDatabase } from "react-icons/fa6";
import { IoLogoFigma, IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoPython } from "react-icons/io5";

const Skills = () => {
  return (
    <section id='skills' className='skills-page'>
      <div className='skills-container'>
        <div className='skill'>
          <IoLogoHtml5 className='skills-icon'/>
          <h3>HTML5</h3>
        </div>
        <div className='skill'>
          <IoLogoCss3 className='skills-icon'/>
          <h3>CSS3</h3>
        </div>
        <div className='skill'>
          <IoLogoJavascript className='skills-icon'/>
          <h3>JS</h3>
        </div>
        <div className='skill'>
          <IoLogoReact className='skills-icon'/>
          <h3>REACT</h3>
        </div>
        <div className='skill'>
          <IoLogoPython className='skills-icon'/>
          <h3>PYTHON</h3>
        </div>
        <div className='skill'>
          <IoLogoFigma className='skills-icon'/>
          <h3>FIGMA</h3>
        </div> 
        <div className='skill'>
          <FaDatabase className='skills-icon'/>
          <h3>DBMS</h3>
        </div> 
      </div>
    </section>
  )
}

export default Skills