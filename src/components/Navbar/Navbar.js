import React from 'react'
import './Navbar.css'
import {FaGithub,FaLinkedin,FaHome} from 'react-icons/fa'


const Navbar = () => {
  return (
    <div id="navbar">
      <ul>
        <li><a href="/"><FaHome size="40px" style={{backgroundColor:'white'}}/></a></li>
        <li><a href="https://github.com/carlosslimajr/Covid19painel"><FaGithub size="40px"style={{backgroundColor:'white'}}/></a></li>
        <li><a href="https://www.linkedin.com/in/carlos-s%C3%A9rgio-lima-1b3a0017a/"><FaLinkedin size="40px"style={{backgroundColor:'white'}}/></a></li>
      </ul>
    </div>
  )
}

export default Navbar
