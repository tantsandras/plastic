import React from "react"
import { Link } from "gatsby"

const NeedSolutionButton = () => (
		<button style={{background: `#589C9A`, border: `none`, padding:`10px`, borderRadius: `100px`, height: `10rem`, width: `10rem`, fontFamily: "Oswald", outline: `none`}}>
			<Link style={{textDecoration: `none`, color: `black`, fontSize: `2rem`, color: `white`}}to="/solution/">I need a Solution</Link>
		</button>

	)

export default NeedSolutionButton