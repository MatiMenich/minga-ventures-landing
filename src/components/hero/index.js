import React from 'react'

import ScrollingBanner from '../scrolling banner'
import Blob from '../blob'

import './_styles.scss'

export default function Hero() {
  return (
    <section className='hero' id='hero'>
      <div className="container">

        <h1>Aliados tempranos de <i className='underline'>fundadores increíbles</i></h1>
        <div>
        <a className='button-cta' href="mailto:contacto@minga.ventures">Contáctanos &gt;</a>&nbsp;
          {/* <a className='button-cta' href="https://google.com">Postula ahora &gt;</a> */}
        </div>
      </div>

      <div className='pattern-bg'/>
      <Blob/>
      <ScrollingBanner/>
    </section>
  )
}
