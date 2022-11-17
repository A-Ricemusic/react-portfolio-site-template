import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import './Header.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'> Socials
    <a href='https://www.linkedin.com' target= '__blank' >  Linkedin <BsLinkedin/></a>
    <a href='https://github.com' target= '__blank' > Github <BsGithub/></a>
    </div>
  )
}

export default HeaderSocials