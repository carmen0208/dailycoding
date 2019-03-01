
### Gatsby setup
```sh
npm install --global gatsby@next gatsby-cli@next
gatsby new ninja-carmen https://github.com/gatsbyjs/gatsby-starter-hello-world
yarn
gatsby develop
```

### Markdown enable
* install plugin
```sh
npm install --save gatsby-source-filesystem@next gatsby-transformer-remark@next
```
* create [gatsby-config](./ninja-carmen/gatsby-config.js) js file to enable markdown plugin

#### Use GraphQL to get the data
using Doc from graphQL
example:
```graphQL
{
  site {
    siteMetadata {
      title
      description
    }
  }
}
```

```
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          path
          date
        }
      }
    }
  }
}
```

#### use [Netlify](https://www.netlify.com/pricing/) to build the site