import React from 'react'
import './work.css'




const data = [
  {
    id: 1,
    title: 'ESPC – Tampa, FL - Programming Instructor and Game Developer',
    subheading: 'Coding/programming academy specializing in web and game development',
    time: '2022-present',
    description1: 'Assisted the web development team in the creation and maintenance of the company website.',
    description2: 'Curated curriculum to teach computer science concepts and techniques such as object oriented programming, code optimization.',
    description3: 'Used Javascript inside of Google Sheets to automate various processes to maximize efficiency in the work environment.',
  },
  {
    id: 2,
    title: 'Mathnasium – Tampa, FL - Assistant Center Director',
    subheading: 'Tutoring center and franchise  specializing in K-12 mathematics education.',
    time: '2021-2022',
    description1: 'Organized customer information in Excel and microsoft office to be used in various business functions.',
    description2: 'Developed strong communication and teaching skills, and the ability to explain complex concepts in a simple way.',
    description3: 'Worked with a marketing specialist to innovate strategies and techniques for customer acquisition.',
  },
  {
    id: 3,
    title: 'Mission Capital – Tampa, FL – Collateral Analyst',
    subheading: 'Mortgage service business specializing in assignment chain verification.',
    time: '2019-2021',
    description1: 'Examined and verified assignment chains of mortgages for a variety of counties and states.',
    description2: 'Prepared gap, corrective, and rescission assignments of mortgage to correct assignment chains.',
    description3: 'Utilized Javascript and Python to organize and automate processes to cure collateral files for clients.',
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