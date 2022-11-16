import React from 'react'
import './about.css'
import me from '../../../../assets/Assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src = {me} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <p>Web development</p>
              <p>Mortgage Analyst</p>
              <p>Game development</p>
              <p>Education</p>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Education</h5>
              <p>University of Tampa</p>
              <p>B.S in Mathematics</p>
              <p>Minor in physics</p>
              <p>GPA: 3.42</p>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Achievements</h5>
              <p>Actuarial Exam P</p>
              <p>Actuarial Exam FM</p>
              <p>Phi Mu Epsilon</p>
              <p>Kappa Kappa Psi</p>
            </article>
          </div>

          <h3>
           Mathematics graduate with knowledge of actuarial science, software engineering, and statistical analysis. Has experience in the financial and mortgage profession, with a background in customer care and education.
          </h3>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About