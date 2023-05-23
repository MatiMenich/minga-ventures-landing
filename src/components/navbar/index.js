import React from 'react'

import './_styles.scss'

import logo from '../../images/Logo.svg'

export default function Navbar() {
  return (
    <div className='container navbar'>
      <img src={logo} alt="Minga Ventures logo" className='navbar__logo'/>
      <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='navbar__hamburger-menu'>
        <path d="M5 8H13.75M5 12H19M10.25 16L19 16" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <div className='navbar__links'>
        <a href="#mission" className="navbar__link">Misión</a>
        <a href="#founders" className="navbar__link">Fundadores</a>
        <a href="#partners" className="navbar__link">Partners</a>
        <a href="#portfolio" className="navbar__link">Portafolio</a>
      </div>
    </div>
  )
}
