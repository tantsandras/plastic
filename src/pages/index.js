import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"
import "./index.css"
import { HomeButtons, Slogan } from "../components/styled"

const IndexPage = () => (
  <div>
    <Header />
    <div >
      <Slogan>We have the solution<br></br> to your plastic problem.</Slogan>
      <HomeButtons>
        <Link to="/register/">
          <button>
            I have a Solution
        </button>
        </Link>
        <div></div>
        <Link to="/solution/">
          <button>
            I need a Solution
        </button>
        </Link>
      </HomeButtons>
    </div>
  </div>
)

export default IndexPage
