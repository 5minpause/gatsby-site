require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;
const siteUrl = process.env.URL || `https://holgerfrohloff.de`

module.exports = {
  siteMetadata: {
    siteTitle: `Holger Frohloff`,
    siteTitleAlt: `Holger Frohloff`,
    siteHeadline: "Freelance Software Engineer from Berlin",
    siteDescription:
      "I am a freelance software engineer from Berlin occupied with family life, web development, teaching & mentoring and sports.",
    siteLanguage: "en",
    author: "Holger Frohloff",
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Impressum`,
            slug: `/impressum`,
          },
          {
            title: `Training`,
            slug: `/trainings`,
          },
          {
            title: `Workshops`,
            slug: `/workshops`,
          },
        ],
        externalLinks: [
          {
            name: `GitHub`,
            url: `https://www.github.com/5minpause/`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/holger-frohloff/`
          },
          {
            name: `Twitter`,
            url: `https://twitter.com/5minpause`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Holger Frohloff`,
        short_name: `holger-frohloff`,
        description: `I am a freelance software engineer from Berlin occupied with family life, web development, teaching & mentoring and sports.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
