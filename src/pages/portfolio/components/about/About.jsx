import React from 'react'
import './about.css'
import {CgGames} from 'react-icons/cg'


const About = () => {
  return (
    <section id='about'>
      <h5>Portfolio Projects</h5>
      <h2>Projects</h2>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <CgGames className='about__icon'/>
              <h4>Your Name experience and projects</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vitae, illum temporibus ad dolor cumque quisquam qui dolorum expedita modi, maiores recusandae, aliquam dolore amet saepe illo nostrum ut quam?</p>
            </article>
          </div>
        </div>
    </section>
  )
}

export default About