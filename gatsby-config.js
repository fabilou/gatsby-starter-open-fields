/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Open Fields`,
    titleTemplate: `%s · Open Fields`,
    author: `You`,
    description: `This will be a really nice gatsby site`,
    url: `example.com`,
    logo: `/icon.png`,
    lang: `en`
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Open Fields`,
        short_name: `OpenFields`,
        start_url: `/`,
        background_color: `#f9fcf2`,
        theme_color: `#eefcc7`,
        display: `minimal-ui`,
        icon: `./static/icon.png`
      }
    },
    `gatsby-plugin-offline`
  ]
}
