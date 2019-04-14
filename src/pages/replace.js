import React from "react"
import Solutions from "../components/solutions"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ReplacePage = () => (
  <Layout>
    <SEO title="Recycle" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <h2> REPLACE</h2>
      <div className="card-container">
        <Solutions type="replace" />
      </div>
    </div>
  </Layout>

)

export default ReplacePage