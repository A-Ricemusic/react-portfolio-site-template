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
              <p>--1</p>
              <p>--2</p>
              <p>--3</p>
              <p>--4</p>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Education</h5>
              <p>university ...</p>
              <p>major</p>
              <p>minor</p>
              <p>GPA: ...</p>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Achievements</h5>
              <p>Earned ...</p>
              <p>Certified ...</p>
              <p>Awarded ...</p>
              <p>Did ...</p>
            </article>
          </div>

          <h3>
          Summary and description of skills and talents here
          </h3>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )};
export default About