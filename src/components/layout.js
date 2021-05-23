import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

import { motion } from 'framer-motion';
import { pageAnimation } from '../animation/animation';

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        variants={pageAnimation}
      >

      <header className="global-header">

      </header>

      <main>{children}</main>

      </motion.div>
    </div>
  )
}

export default Layout
