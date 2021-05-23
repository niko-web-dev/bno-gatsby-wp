import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ProductArchive = ({
  pageContext: { products },
}) => {

  // const products = data.products.nodes

  if (!products.length) {
    return (
      <Layout isHomePage>
        <Seo title="All products" />
        <Bio />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout isHomePage>
      <Seo title="All products" />

      <ol style={{ listStyle: `none` }}>
        {products.map(({ product }) => {
          // const title = product.title
          return (
            <li key={product.id}>
              <article
                className="products-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={`/products/${product.slug}`} itemProp="url">
                      <span itemProp="headline">{parse(product.title)}</span>
                    </Link>
                  </h2>
                  {/*<small>{product.date}</small>*/}
                </header>
                {/*<section itemProp="description">{parse(product.excerpt)}</section>*/}
              </article>
            </li>
          )
        })}
      </ol>

      {/*{previousPagePath && (*/}
      {/*  <>*/}
      {/*    <Link to={previousPagePath}>Previous page</Link>*/}
      {/*    <br />*/}
      {/*  </>*/}
      {/*)}*/}
      {/*{nextPagePath && <Link to={nextPagePath}>Next page</Link>}*/}
    </Layout>
  )
}

export default ProductArchive

// export const pageQuery = graphql`
//   query WordPressProductArchive($offset: Int!, $productsPerPage: Int!) {
//     products: allWpPost(
//       sort: { fields: [date], order: DESC }
//       limit: $productsPerPage
//       skip: $offset
//     ) {
//       nodes {
//         id
//         excerpt
//         slug
//         uri
//         date(formatString: "MMMM DD, YYYY")
//         title
//         excerpt
//       }
//     }
//   }
// `
