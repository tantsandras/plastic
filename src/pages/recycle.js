import React from "react"
import Solutions from "../components/solutions"
import Layout from "../components/layout"
import SEO from "../components/seo"

const RecyclePage = () => (
  <Layout>
    <SEO title="Recycle" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <h2> RECYCLE</h2>
      <div className="card-container">
        <Solutions type="recycle" />
      </div>
    </div>
  </Layout>
)

export default RecyclePage