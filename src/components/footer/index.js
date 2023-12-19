import React from 'react'

import './_styles.scss'

import LogoIMG from '../../images/minga_footer.svg'

export default function Footer() {
  return (
    <section className="footer">
      <div className='pattern-bg'></div>
      <div className="container d-flex align-items-center justify-content-between">

          <img src={LogoIMG} alt="Minga Ventures Logo Alt"/>
          <p>Minga Ventures© 2023-2024</p>

        {/* <div className='footer__links'>
          <a href="#a" className="footer__link">Press Kit</a>
          <a href="#b" className="footer__link">Newsletter</a>
          <a href="#c" className="footer__link">Trabajos</a>
          <a href="#d" className="footer__link">Legal</a>
        </div> */}
      </div>
    </section>
  )
}
