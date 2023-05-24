import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

import coverImg from './Cover.png'

// eslint-disable-next-line react/jsx-pascal-case
export default function SEO({children, title, description}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title ? `${title} - ${site.siteMetadata.title}` : `${site.siteMetadata.title} - Aliados tempranos de fundadores increíbles`

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription}/>
      <meta property="og:title" content={metaTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta property="og:image" content={coverImg} />
      <meta property="og:description" content={metaDescription}/>
      <meta property="og:site_name" content={site.siteMetadata.title}/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:image:alt" content={site.siteMetadata.title}/>

      {children}
    </>
  )
}
