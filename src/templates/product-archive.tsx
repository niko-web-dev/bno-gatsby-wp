import React, {FC} from "react"
import { Link} from "gatsby"
import parse from "html-react-parser"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {TProductsWP } from '../types/index'

export type TPageContext = {
    pageContext: TProductsWP
}

const ProductArchive: FC<TPageContext> = ( { pageContext: { products } }) => {

  return (
    <Layout isHomePage>
      <Seo title="All products" />

      <ol style={{ listStyle: `none` }}>
        {products.map(( product) => {
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
                </header>
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
