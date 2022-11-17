import React from 'react'
import './portfolio.css'


const data = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rerum voluptates labore dolorum iusto impedit adipisci veniam asperiores magni temporibus quisquam minima accusantium, voluptate nesciunt animi. Nulla molestiae a aliquid.',
    videoLink: "https://www.youtube.com/embed/bMknfKXIFA8",
    isVideo: true,
    demo: '',
    isDemo: true,
    code: '',
    isCode: true
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rerum voluptates labore dolorum iusto impedit adipisci veniam asperiores magni temporibus quisquam minima accusantium, voluptate nesciunt animi. Nulla molestiae a aliquid.',
    videoLink: "https://www.youtube.com/embed/bMknfKXIFA8",
    isVideo: true,
    demo: '',
    isDemo: false,
    code: '',
    isCode: true
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rerum voluptates labore dolorum iusto impedit adipisci veniam asperiores magni temporibus quisquam minima accusantium, voluptate nesciunt animi. Nulla molestiae a aliquid.',
    videoLink: "https://www.youtube.com/embed/bMknfKXIFA8",
    isVideo: true,
    demo: '',
    isDemo: false,
    code: '',
    isCode: true
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rerum voluptates labore dolorum iusto impedit adipisci veniam asperiores magni temporibus quisquam minima accusantium, voluptate nesciunt animi. Nulla molestiae a aliquid.',
    videoLink: "https://www.youtube.com/embed/bMknfKXIFA8",
    isVideo: true,
    demo: '',
    isDemo: true,
    code: '',
    isCode: false
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rerum voluptates labore dolorum iusto impedit adipisci veniam asperiores magni temporibus quisquam minima accusantium, voluptate nesciunt animi. Nulla molestiae a aliquid.',
    videoLink: "https://www.youtube.com/embed/bMknfKXIFA8",
    isVideo: true,
    demo: '',
    isDemo: true,
    code: '',
    isCode: true
  },
 
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, title, description, videoLink, isVideo, demo, isDemo, code, isCode}) => {
            return (
              <article key={id} className='portfolio__item'>
              <h5 className='portfolio__title'>{title}</h5>
              <p className='portfolio__description'>{description}</p>
              <div className="portfolio__item-cta">
               {isVideo && <iframe width="560" height="315" src={videoLink} title="Video breakdown" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>}
               {isDemo && <a rel="noreferrer"  href={demo} className='btn' target='_blank'>Try Demo</a>}
               {isCode && <a rel="noreferrer"  href={code} className='btn' target='_blank'>Source Code</a>}
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio