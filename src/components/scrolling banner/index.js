import React from 'react'

import './_styles.scss'

const Divider = ({color = '#1A3635'}) => {

  return (
    <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='scrolling-banner__divider'>
      <path d="M1.08726 12.6856L6.98117 2.38995C7.08503 2.21104 7.27002 2.09965 7.468 2.09965H9.34393C9.5419 2.09965 9.7269 2.20767 9.83076 2.3832L15.6857 12.6823C15.9843 13.192 16.7405 12.9726 16.7405 12.3751V0.037132C16.7405 0.037132 16.7405 0.0135026 16.7438 0H0C0 0 0.00324555 0.0236295 0.00324555 0.037132L0.0324555 12.3852C0.0324555 12.9861 0.795159 13.2021 1.0905 12.6856" fill={color}/>
      <path d="M16.4712 23.2648L8.68185 9.00946C8.55203 8.76979 8.22099 8.76979 8.09116 9.00946L7.94836 9.26939L0.78544 22.3804L0.301854 23.2648L0.0130005 23.7948H16.76L16.4712 23.2648Z" fill={color}/>
    </svg>
  )
}


export default function ScrollingBanner({reverse = false}) {
  const phrases = [
    'Soy, porque somos',
    'Somos aliados tempranos de fundadores y equipos increíbles construyendo empresas que impactan',
    'Círculos virtuosos de desarrollo',
    'Somos una comunidad de apoyo al crecimiento',
    'Catapultando empresas en etapa temprana',
    'Llevamos tu emprendimiento donde tiene que llegar'
  ]

  return (
    <div className='scrolling-banner' style={{
      '--duration': `${50000}ms`,
      '--direction': reverse ? 'reverse' : 'normal',
    }}>
      <div className="scrolling-banner__inner">
        {
          phrases.concat(phrases).map((phrase, i) =>
            <React.Fragment key={`${phrase}-${i}`}>
              <div className="scrolling-banner__phrase">
                <p>{ phrase }</p>
              </div>
              <Divider/>
            </React.Fragment>
          )
        }
      </div>
    </div>
  )
}
