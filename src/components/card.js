import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import { ProgressBars} from './ProgressBars'
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


class Card extends React.Component {

  state = {
    data: [{title: 'cost', value: 600, fullBarValue: 1200}, {title: 'co2', value: 300, fullBarValue: 2000} , {title: 'other', value: 600, fullBarValue: 2000}]
  }

  render(){
    const {title} = this.props
  return (
    <div style={{ width: `6rem`, marginBottom: `1.5rem`, backgroundColor: `white`, borderRadius: `5px`, boxShadow: `0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)` }}>
      <h2>{title}</h2>
      {defaultImage}
      <div style={{width: '10px'}}>

          <ProgressBars data={this.state.data} cardTile={title}/>

        </div>

    </div>
  )
}
}


export default Card
