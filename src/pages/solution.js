import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/card'
import buttonStyle from "../components/button.css"

const Solution = ({ location }) => {
  const [solutions, setSolution] = useState([{ name: 'helen two' }]);

  useEffect(() => {
    solutions.push(location.state.formData);
    setSolution(solutions)
  }, [location.state.formData, solutions, setSolution])

  return (
    <Layout>
      <SEO title="Solutions" />
      <p>Alternative Plastics</p>
      <button style={buttonStyle}><Link to="/replace/">I want to stop using plastic!</Link></button>
      <button style={buttonStyle}><Link to="/recycle/">I want to figure out how to recycle plastic!</Link></button>
      <button style={buttonStyle}><Link to="/dispose/">I want to dispose of the plastic!</Link></button>
      <div style={{ display: `flex`, justifyContent: `space-between`, flexWrap: `wrap` }}>
        {solutions.map(solution => <Card key={solution.name} title={solution.name} />)}
      </div>
      <Link to="/register">Go back to the form</Link>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Solution
