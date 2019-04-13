import React from "react"
import { Link } from "gatsby"
import Card from "../components/card"

import Layout from "../components/layout"
import SEO from "../components/seo"

const RecyclePage = () => (
    <Layout>
      <SEO title="Recycle" keywords={[`gatsby`, `application`, `react`]} />
        <Card />
    </Layout>
  )

export default RecyclePage