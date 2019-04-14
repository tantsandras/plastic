import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Card from "../components/card"
import buttonStyle from "../components/button.css"
import {Button} from './SolucationStylying';

const Solution = ({ location }) => {
  return (
    <div>
      <h2> CHOOSE A SOLUTION</h2>
      <div style={{display: `flex`, flexDirection: `column`, fontSize: `2.5rem`}}>
        <Button>
          <Link to="/replace/">I want to stop using plastic</Link>
        </Button>
        <Button style={{ border: `none`, background: `none`, margin: `60px`, fontWeight: `bolder` }}>
          <Link to="/recycle/">
            I want to figure out how to recycle plastic
          </Link>
        </Button>
        <Button style={{ border: `none`, background: `none`, margin: `60px`, fontWeight: `bolder`  }}>
          <Link to="/dispose/">I want to dispose of the plastic</Link>
        </Button>
      </div>
      // </div>
      // <div
      //   style={{
      //     display: `flex`,
      //     justifyContent: `space-between`,
      //     flexWrap: `wrap`,
      //   }}
      // />
    // </div>
  )
}

export default Solution
