const WpProducts = `
query WpProducts {
  allProducts: allWpPost(sort: { fields: [date], order: DESC }) {
    edges {
      previous {
        id
      }
      product: node {
        id
        slug
        uri
        title
      }
      next {
        id
      }
    }
  }
}
`

module.exports = async ({ graphql, reporter }) => {
    const graphqlResult = await graphql(WpProducts)

    if (graphqlResult.errors) {
        reporter.panicOnBuild(
            `There was an error loading your blog products`,
            graphqlResult.errors
        )
        return
    }

    return graphqlResult.data.allProducts.edges
}
