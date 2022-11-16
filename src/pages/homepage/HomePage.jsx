import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Work  from './components/work/Work'



const HomePage = () => {
  return ( 
  <>
 <Header />
    <Nav />
    <About />
    <Experience />
    <Work />
    <Portfolio />
    <Contact />
    <Footer />
  </>
  )
}

export default HomePage