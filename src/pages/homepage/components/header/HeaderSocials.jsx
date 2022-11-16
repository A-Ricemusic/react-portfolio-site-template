import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import './Header.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'> Socials
    <a href='https://www.linkedin.com/in/anthonyricemusic/' target= '__blank' >  Linkedin <BsLinkedin/></a>
    <a href='https://github.com/A-Ricemusic' target= '__blank' > Github <BsGithub/></a>
    </div>
  )
}

export default HeaderSocials