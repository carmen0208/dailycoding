module.exports = {
  siteMetadata: {
    title: 'Carmen\'s blog',
    description: 'I want this be my replacement of my orgnial blog'
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    }
  ]
}