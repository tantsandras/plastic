import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/card'

const Solution = () => (
  <Layout>
    <SEO title="Page two" />
    <h2 style={{ textAlign: `center`, margin: `80px`}}>Alternative Plastics</h2>
    <div style={{display:`flex`, justifyContent: `space-between`, flexWrap: `wrap` }}>
            <Card title='alternative1'/>
            <Card title='alternative2'/>
            <Card title='alternative3'/>
          </div>
    {/* <Link to="/" style={{}}>Go back to the homepage</Link> */}
  </Layout>
)

export default Solution
