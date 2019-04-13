import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/card'

const Solution = () => (
  <Layout>
    <SEO title="Page two" />
    <p>Alternative Plastics</p>
    <div style={{display:`flex`, justifyContent: `space-between`, flexWrap: `wrap` }}>
            <Card title='hello'/>
            <Card title='hello world'/>
            <Card title='hello 2'/>
          </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Solution
