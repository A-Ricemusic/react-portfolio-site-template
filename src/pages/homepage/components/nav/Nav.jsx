import React from 'react'
import './Nav.css'
import {AiTwotoneHome} from 'react-icons/ai' 
import {FcAbout} from 'react-icons/fc'
import {AiFillExperiment} from 'react-icons/ai'
import {GoProject} from 'react-icons/go'
import {FcServices} from 'react-icons/fc'
import {FcContacts} from 'react-icons/fc'
import {MdWork} from 'react-icons/md'
//import {MdCastForEducation} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav className='nav'>
    <a href = '#' onClick={() => setActiveNav="#"}  className={activeNav === '#' ? 'active' : ''}> Home <AiTwotoneHome/></a>
    <a href = '#about' onClick={() => setActiveNav("#about")} className={activeNav === '#about' ? 'active' : ''}>About <FcAbout/></a>
    <a href = '#experience' onClick={() => setActiveNav("#experience")}  className={activeNav === '#experience' ? 'active' : ''}>Experience <FcServices/></a>
    <a href = '#work' onClick={() => setActiveNav("#work")}  className={activeNav === '#work' ? 'active' : ''}>Work History<MdWork/></a>
    <a href = '#portfolio' onClick={() => setActiveNav("#portfolio")}  className={activeNav === '#portfolio' ? 'active' : ''}>Portfolio <GoProject /></a>
    <a href = '#contact' onClick={() => setActiveNav("#contact")}  className={activeNav === '#contact' ? 'active' : ''}>Contact <FcContacts/></a>

    </nav>
  )
}

export default Nav