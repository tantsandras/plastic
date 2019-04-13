import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HaveSolutionButton from "../components/HaveSolution"
import NeedSolutionButton from "../components/NeedSolution"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HaveSolutionButton />
    <NeedSolutionButton />
    {/* <Link to="/solution/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
