import React from 'react'
import './portfolio.css'
import IMG1 from '../../../../assets/Assets/portfolio1.png'


// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: null,
    title: '',
    link: '',
    isLink: false
  },
  {
    id: 2,
    image: IMG1,
    title: 'Projects',
    link: '/Projects',
    isLink: true
  }
 
 
]


const Portfolio = () => {

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title,link, isLink}) => {
            return (
              <article key={id} className='portfolio-item'>
              <div className="portfolio__item-image"> 
              {isLink &&  <img src={image} alt={title} />}
              </div>
              <h3 className='text'>{title}</h3>
              <nav className="portfolio__item-cta">
               {isLink && <a href={link} className='btn'>View Projects</a>}
              </nav>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}


export default Portfolio