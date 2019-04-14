import React from "react"
import Solutions from "../components/solutions"
import Layout from "../components/layout"
import SEO from "../components/seo"

const DisposePage = () => (
  <Layout>
    <SEO title="Dispose" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <h2> DISPOSE</h2>
      <div className="card-container">
        <Solutions type="dispose" />
      </div>
    </div>
  </Layout>
)

export default DisposePage