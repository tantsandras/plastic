import React from "react"
import { Link } from "gatsby"
import Video from "../components/video"
import Layout from "../components/layout"

const organisationPage = ({ location }) => {
  const { title = '', solutionType = '' } = location.state;
  const storedSolutions = window.localStorage.getItem(solutionType) || [];

  const solutionData = storedSolutions ? JSON.parse(storedSolutions).find(item => item.name === title) : {}

  const { videoUrl, description, longDescription, email, imageUrl, name, ...otherFields } = solutionData
  const otherFieldsToMap = otherFields && Object.keys(otherFields).map(key => {
    if (!otherFields[key]) return;
    return (<div key={key}><h4>{key}</h4>
      <p>{otherFields[key]}</p></div>)
  })
  return (
    <Layout>
      <h1>{title}</h1>
      <div>
        {!!videoUrl && <Video sourceUrl={solutionData.videoUrl} />}
        {!!description && <p>{description}</p>}
        {!!longDescription && <p>{longDescription}</p>}
        {!!imageUrl && <img src={imageUrl} alt="image here" />}
        {otherFieldsToMap}
        <div>
          <button><a href={`mailto:${email}`}>Contact The Solution masters</a>  </button>
        </div>
      </div>
    </Layout >

  )
}

export default organisationPage