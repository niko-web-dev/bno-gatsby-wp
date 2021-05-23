import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import StartWindow from '../components/startWindow'
import GallerySlider from '../components/gallerySlider'
import Details from '../components/details'
import Footer from "../components/footer"

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />

      <StartWindow />
      <GallerySlider />
      <Details />
      <Footer/>
    </Layout>
)

export default IndexPage
