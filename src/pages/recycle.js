import React from "react"
import Solutions from "../components/solutions"
import Header from "../components/Header"

const RecyclePage = () => (
    <div>
      <h2> RECYCLE</h2>
      <Header />
      <div className="card-container">
        <Solutions type="recycle" />
      </div>
    </div>
)

export default RecyclePage