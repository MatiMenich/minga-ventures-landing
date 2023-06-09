import React from 'react'

import './_styles.scss'

export default function Blob({className}) {
  return (
    <>
      <svg width="0" height="0" className='svgblob'>
        <filter id="grainy-blur" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="39" result="blur"></feGaussianBlur>
          <feTurbulence type="fractalNoise" baseFrequency=".537"></feTurbulence>
          <feComposite in="blur"></feComposite>
          <feComposite in="blur" operator="in"></feComposite>
        </filter>
      </svg>
      <div className={`blob ${className}`}/>
    </>
  )
}
