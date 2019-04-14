import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

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
    render={data => <Img className="tile-img" fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)


class Card extends React.Component {
  state = {
    data: [{ title: 'cost', value: 600, fullBarValue: 1200 }, { title: 'co2', value: 300, fullBarValue: 2000 }, { title: 'other', value: 600, fullBarValue: 2000 }]
  }

  render() {
    const { title = "", solutionType = "", imageUrl = "", description = "" } = this.props
    return (
      <Link to='/organisation-page/' state={{ title, solutionType }}>
        <div className="card">
          {imageUrl ? <img src={imageUrl} className="tile-img" alt="image here" /> : defaultImage}
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    )
  }
}


export default Card
