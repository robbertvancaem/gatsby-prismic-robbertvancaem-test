/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Sneaker Town 20 - A Gatsby/Prismic experiment",
  },
  plugins: [
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "robbertvancaem-test", // (REQUIRED, replace with your own)
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Kanit", "Open Sans"],
        display: "swap",
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
