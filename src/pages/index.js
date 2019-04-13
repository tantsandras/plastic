import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HaveSolutionButton from "../components/HaveSolution"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1></h1>
    <HaveSolutionButton />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
