import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"
import "./index.css"
import { HomeButtons } from "../components/styled"

const IndexPage = () => (
  <div>
    <h2> HOME</h2>
    <Header />
    <HomeButtons>
      <Link to="/register/">
        <button
          style={{
            fontSize: `1rem`,
            fontWeight: `bold`,
            textTransform: `uppercase`,
            color: `rgb(255, 247, 242)`,
            backgroundColor: `rgb(77, 87, 127)`,
            borderRadius: `10px`,
            padding: `0.5rem`
          }}
        >
          I have a Solution
        </button>
      </Link>
      <Link to="/solution/">
        <button
          style={{
            fontSize: `1rem`,
            fontWeight: `bold`,
            textTransform: `uppercase`,
            color: `rgb(255, 247, 242)`,
            backgroundColor: `rgb(77, 87, 127)`,
            borderRadius: `10px`,
            padding: `0.5rem`
          }}
        >
          I need a Solution
        </button>
      </Link>
      </HomeButtons>
  </div>
)

export default IndexPage
