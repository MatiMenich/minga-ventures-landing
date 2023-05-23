import React from 'react'

import './_styles.scss'

import logo from '../../images/Logo.svg'

export default function Navbar() {
  return (
    <div className='container navbar'>
      <img src={logo} alt="Minga Ventures logo" className='navbar__logo'/>
      <div className='navbar__links'>
        <a href="#mission" className="navbar__link">Misión</a>
        <a href="#founders" className="navbar__link">Nuestros fundadores</a>
        <a href="#portfolio" className="navbar__link">Portafolio</a>
      </div>
    </div>
  )
}
