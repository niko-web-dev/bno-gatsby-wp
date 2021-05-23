require('dotenv').config()

// require('path).path

module.exports = {

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `dominantColor`,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {}
        }
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL || `${process.env.WORDPRESS_URL}/graphql`,
        verbose: true,
        develop: {
          nodeUpdateInterval: 3000,
          hardCacheMediaFiles: true,
        },
        production: {
          hardCacheMediaFiles: false,
        },
        debug: {
          graphql: {
            showQueryVarsOnError: true,
            showQueryOnError: true,
            copyQueryOnError: false,
            panicOnError: true,
            onlyReportCriticalErrors: true,
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `public`,
        path: `${__dirname}/public`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter WordPress Theme`,
        short_name: `GatsbyJS & WP`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
  ],
}
