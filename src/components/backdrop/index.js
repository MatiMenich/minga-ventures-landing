import React from 'react'

import './_styles.scss'

const Backdrop = ({show, onClick}) =>
  <div
    className={`backdrop ${show ? 'backdrop--active': ''}`}
    onClick={onClick}
  />

export default Backdrop
