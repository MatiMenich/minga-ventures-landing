import React from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'

import './_styles.scss'

import logo from '../../images/Logo.svg'

const NavLinks = ({className, onLinkClick}) =>
  <div className={`navbar__links ${className}`}>
    <a href="#mission" className="navbar__link" onClick={onLinkClick}>Misión</a>
    <a href="#founders" className="navbar__link" onClick={onLinkClick}>Fundadores</a>
    <a href="#partners" className="navbar__link" onClick={onLinkClick}>Partners</a>
    <a href="#portfolio" className="navbar__link" onClick={onLinkClick}>Portafolio</a>
    <a href="#faq" className="navbar__link" onClick={onLinkClick}>FAQ</a>
  </div>

export default function Navbar({toggleMobileSidebar, isMobileSidebarOpen}) {

  return (
    <Flipper flipKey={isMobileSidebarOpen} spring={{stiffness: 300, damping: 30 }}>

        <div className={`container navbar ${isMobileSidebarOpen ? 'navbar--active' : ''}`}>
          <Flipped flipId="navbar">
            <div className='navbar__bg'/>
          </Flipped>
          <div className='navbar__inner'>
            <a href="#hero" className='navbar__logo'><img src={logo} alt="Minga Ventures logo"/></a>

            <svg onClick={toggleMobileSidebar} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='navbar__hamburger-menu'>
              <path d="M5 8H13.75M5 12H19M10.25 16L19 16" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <NavLinks/>
          </div>

          <Flipped flipId="navbar-link">
            <div className='navbar__mobile-menu' style={{height: isMobileSidebarOpen ? '220px' : 0}}>
              <NavLinks className='navbar__mobile-menu-links' onLinkClick={toggleMobileSidebar}/>

              {/* <a href="https://google.com" className="button-cta" target='_blank'>Postula ahora &gt;</a> */}
            </div>
          </Flipped>

        </div>

    </Flipper>
  )
}
