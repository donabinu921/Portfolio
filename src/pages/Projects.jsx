import React from 'react'
import "../styles/Projects.css"
import ExpenseTracker from "../assets/expensetracker.png"
import OnlineExam from "../assets/onlineexamapp.png"

const Projects = () => {
  return (
    <section id='projects'>
      <h2>Here are some stuff I tried out!</h2>
      <div className='projects-container'>
      <a href="https://github.com/donabinu921/Online-Examination-Portal" class="project-link">
        <div className='project'>
          <img className='project-img' src={OnlineExam} alt="Online Examination Portal" />
          <h3 className='project-name'>Online Examination Portal</h3>
          <p className='project-desc'>Featuring a login page, seperate student and faculty dashboards with additional utilities like test creation, test scheduling and automated evaluation. Implemented using ReactJS, NodeJS and MongoDB.</p>
        </div>
      </a>
      <a href="https://donabinu921.github.io/Expense-Tracker/" class="project-link">
        <div className='project'>
          <img className='project-img' src={ExpenseTracker} alt="Expense Tracker Website" />
          <h3 className='project-name'>Expense Tracker</h3>
          <p className='project-desc'>A basic Expense Tracker Website using html-css-javascript, utilising APIs to provide currency conversion functionality as well.</p>
        </div>
      </a>
      </div>
    </section>
  )
}

export default Projects