import React from "react"
import Solutions from "../components/solutions"
import Header from "../components/Header"

const ReplacePage = () => (
    <div>
      <h2> REPLACE</h2>
      <Header />
      <div className="card-container">
        <Solutions type="replace" />
      </div>
    </div>
)

export default ReplacePage