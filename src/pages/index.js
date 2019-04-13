import React from "react"
import { Link } from "gatsby"



import "./index.css"

const IndexPage = () => (
  <div>
        <h2> HOME</h2>

    <button>
        <Link to="/register/">I have a Solution</Link>
    </button>
		<button>
			<Link to="/solution/">I need a Solution</Link>
		</button>
  </div>
)

export default IndexPage
