import React from 'react'
import './work.css'




const data = [
  {
    id: 1,
    title: 'job title- job description 1',
    subheading: 'description of the company',
    time: 'time worked there ',
    description1: 'job tasks performed 1',
    description2: 'job tasks performed 2',
    description3: 'job tasks performed 3',
  },
  {
    id: 2,
    title: 'job title- job description 2',
    subheading: 'description of the company',
    time: 'time worked there ',
    description1: 'job tasks performed 1',
    description2: 'job tasks performed 2',
    description3: 'job tasks performed 3',
  },
  {
    id: 3,
    title: 'job title- job description 3',
    subheading: 'description of the company',
    time: 'time worked there ',
    description1: 'job tasks performed 1',
    description2: 'job tasks performed 2',
    description3: 'job tasks performed 3',
  },
  
 
]


const Work = () => {
  return (
    <section id='work'>
      <h5>My Work Experience</h5>
      <h2>Work</h2>

      <div className="container work__container">
        {
          data.map(({id, title,subheading,time, description1, description2,description3}) => {
            return (
              <article key={id} className='work__item'>
              <h2 className="work__time">{time}</h2>
              <ul>
              <li className='work__title'>{title}</li>
              <br></br>
              <li className="work__subheading">{subheading}</li>
              </ul>
              <div>
                <h4 className="description">{description1}</h4>
                <br></br>
                <h4 className="description">{description2}</h4>
                <br></br>
                <h4 className="description">{description3}</h4>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Work