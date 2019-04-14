import React, { useEffect, useState } from "react"

import Card from './card'

const Solutions = ({ type = 'replace' }) => {
  const [solutions, setSolution] = useState([]);

  useEffect(() => {
    const storedSolutions = window.localStorage.getItem(type)
    if (!storedSolutions) return
    setSolution(JSON.parse(storedSolutions))
  }, [setSolution, window.localStorage])

  return (
    <div style={{ display: `flex`, justifyContent: `space-between`, flexWrap: `wrap` }}>
      {solutions.map(solution => <Card key={solution.name} title={solution.name} {...solution} />)}
    </div>
  )
}

export default Solutions
