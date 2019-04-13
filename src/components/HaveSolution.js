import React from "react"
import { Link } from "gatsby"

const HaveSolutionButton = () => (
    <button style={{background: `#589C9A`, border: `none` , borderRadius: `100px`, padding:`10px`, height: `10rem`, width: `10rem`, margin: `50px` , fontFamily: "Oswald", outline: `none`}}>
        <Link style={{ textDecoration: `none`, color: `black`, fontSize: `2rem`, color: `white`}}to="/register/">I have a Solution</Link>
    </button>

)

export default HaveSolutionButton