import React from 'react'
import Rive from '@rive-app/react-canvas'

import animation from './404.riv'

export default function NotFound() {
  return (
    <Rive src={animation}
      style={{
        height: "620px",
      }}/>
  )
}
