import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const defaultImage = (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "default.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)

const Card = ({ title }) => {
  return (
    <div style={{ minWidth: `15rem`, marginBottom: `1.5rem`, backgroundColor: `white`, borderRadius: `5px`, boxShadow: `0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)` }}>
      <h2>{title}</h2> 
      {defaultImage}
      <p>test</p>
    </div>
  )
}

export default Card
