import React from "react"
import { Link, graphql } from "gatsby"
// import Image from "gatsby-image"
import parse from "html-react-parser"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SingleProduct = ({ data: { product } }) => {
  // const featuredImage = {
  //   fluid: product.featuredImage?.node?.localFile?.childImageSharp?.fluid,
  //   alt: product.featuredImage?.node?.alt || ``,
  // }
  
  console.log(product)

  return (
    <Layout>
      <Seo title={product.title} description={product.excerpt} />

      <article
        className="product"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{parse(product.title)}</h1>
          <p>{product.date}</p>

          {/* if we have a featured image for this post let's display it */}
          {/*{featuredImage?.fluid && (*/}
          {/*  <Image*/}
          {/*    fluid={featuredImage.fluid}*/}
          {/*    alt={featuredImage.alt}*/}
          {/*    style={{ marginBottom: 50 }}*/}
          {/*  />*/}
          {/*)}*/}
        </header>

        {!!product.content && (
          <section itemProp="articleBody">{parse(product.content)}</section>
        )}

        <hr />

        <footer>
        </footer>
      </article>

      {/*<nav className="product-nav">*/}
      {/*  <ul*/}
      {/*    style={{*/}
      {/*      display: `flex`,*/}
      {/*      flexWrap: `wrap`,*/}
      {/*      justifyContent: `space-between`,*/}
      {/*      listStyle: `none`,*/}
      {/*      padding: 0,*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    /!*<li>*!/*/}
      {/*    /!*  {previous && (*!/*/}
      {/*    /!*    <Link to={`/product/${previous.slug}`} rel="prev">*!/*/}
      {/*    /!*      ← {parse(previous.title)}*!/*/}
      {/*    /!*    </Link>*!/*/}
      {/*    /!*  )}*!/*/}
      {/*    /!*</li>*!/*/}

      {/*    /!*<li>*!/*/}
      {/*    /!*  {next && (*!/*/}
      {/*    /!*    <Link to={`/product/${next.slug}`} rel="next">*!/*/}
      {/*    /!*      {parse(next.title)} →*!/*/}
      {/*    /!*    </Link>*!/*/}
      {/*    /!*  )}*!/*/}
      {/*    /!*</li>*!/*/}
      {/*  </ul>*/}
      {/*</nav>*/}
    </Layout>
  )
}

export default SingleProduct

export const pageQuery = graphql`
  query BlogPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousProductId: String
    $nextProductId: String
  ) {
    # selecting the current post by id
    product: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")

      #featuredImage {
       # node {
        #  altText
         # localFile {
          #  childImageSharp {
           #   fluid(maxWidth: 1000, quality: 100) {
            #    ...GatsbyImageSharpFluid_tracedSVG
             # }
            #}
          #}
        #}
      #}
    }

    # this gets us the previous post by id (if it exists)
    previous: wpPost(id: { eq: $previousProductId }) {
      slug
      title
    }

    # this gets us the next post by id (if it exists)
    next: wpPost(id: { eq: $nextProductId }) {
      slug
      title
    }
  }
`
