import React from 'react'
import "../styles/ContactMe.css"
import { AiFillLinkedin, AiFillMail, AiFillGithub, AiFillFile } from "react-icons/ai";

const ContactMe = () => {
  return (
    <section id='contactme'>
      <div className='socials-container'>
      <a href="https://www.linkedin.com/in/donabinu" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin className='socials-icon' />
        </a>
        <a href="mailto:donabinu06@gmail.com" target="_blank" rel="noopener noreferrer">
          <AiFillMail className='socials-icon' />
        </a>
        <a href="https://github.com/donabinu921" target="_blank" rel="noopener noreferrer">
          <AiFillGithub className='socials-icon' />
        </a>
        <a href="https://flowcv.com/resume/suv5ffmgcd" target="_blank" rel="noopener noreferrer">
          <AiFillFile className='socials-icon' />
        </a>
      </div>
      <p className='copyright'>© {new Date().getFullYear()} Dona Binu. All rights reserved.</p>
    </section>
  )
}

export default ContactMe