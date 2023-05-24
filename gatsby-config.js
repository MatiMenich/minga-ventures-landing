/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Minga Ventures`,
    siteUrl: `https://minga.ventures`,
    description: `Llevamos tu empresa donde tiene que llegar.`,
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-netlify`,
    // "gatsby-plugin-google-gtag",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-T5ZLDMP",
        includeInDevelopment: false,
        enableWebVitalsTracking: true,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};
