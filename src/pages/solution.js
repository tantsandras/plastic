import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/card'
import buttonStyle from "../components/button.css"

const Solution = () => (
  <Layout>
    <SEO title="Page two" />
    <p>Alternative Plastics</p>
    <button style={buttonStyle}><Link to="/replace/">I want to stop using plastic!</Link></button> <button style={buttonStyle}><Link to="/recycle/">I want to figure out how to recycle plastic!</Link></button> <button style={buttonStyle}><Link to="/dispose/">I want to dispose of the plastic!</Link></button>
    <div style={{display:`flex`, justifyContent: `space-between`, flexWrap: `wrap` }}>
            <Card title='hello'/>
            <Card title='hello world'/>
            <Card title='hello 2'/>
          </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Solution
