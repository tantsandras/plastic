import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Card from '../components/card'
import buttonStyle from "../components/button.css"


const Solution = ({ location }) => {


  return (
    <div>
        <h2> CHOOSE A SOLUTION</h2>
      <button style={buttonStyle}><Link to="/replace/">I want to stop using plastic!</Link></button>
      <button style={buttonStyle}><Link to="/recycle/">I want to figure out how to recycle plastic!</Link></button>
      <button style={buttonStyle}><Link to="/dispose/">I want to dispose of the plastic!</Link></button>
      <div style={{ display: `flex`, justifyContent: `space-between`, flexWrap: `wrap` }}>
      </div>
    </div>
  )
}

export default Solution
