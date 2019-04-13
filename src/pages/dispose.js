import React from "react"
import { Link } from "gatsby"
import Card from "../components/card"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DisposePage = () => (
    <Layout>
      <SEO title="Dispose" keywords={[`gatsby`, `application`, `react`]} />
        <Card />
    </Layout>
  )

export default DisposePage