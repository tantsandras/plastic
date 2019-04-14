import React from "react"
import Solutions from "../components/solutions"
import Header from "../components/Header"

const DisposePage = () => (
    <div>
      <h2> DISPOSE</h2>
      <Header />
      <div className="card-container">
        <Solutions type="dispose" />
    </div>
    </div>
)

export default DisposePage