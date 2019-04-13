import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/card'

const Solution = ({ location }) => {
  const [solutions, setSolution] = useState([{ name: 'helen two' }]);

  useEffect(() => {
    solutions.push(location.state.formData);
    setSolution(solutions)
  }, [location.state.formData, solutions, setSolution])

  return (
    <Layout>
      <SEO title="Page two" />
      <p>Alternative Plastics</p>
      <div style={{ display: `flex`, justifyContent: `space-between`, flexWrap: `wrap` }}>
        {solutions.map(solution => <Card key={solution.name} title={solution.name} />)}
      </div>
      <Link to="/register">Go back to the form</Link>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Solution
