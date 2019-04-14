import React from "react"
import Video from "../components/video"
import Layout from "../components/layout"
import { ProgressBars } from '../components/ProgressBars'

const generateTitle = (key) => {
  const titles = {
    bestUse: "Best Use",
    typeOfPlastic: "Type of Plastic",
    timeRequired: "Time required",
    institute: "Institute",
    patented: "Patented?"
  }
  return titles[key]
}

const solutionTypeTitle = {
  replace: 'Stage 1: Start of Life',
  recycle: 'Stage 2: Mid-Life/Recycling',
  dispose: 'Stage 3: End of Life'
}

const organisationPage = ({ location }) => {
  const { title = '', solutionType = '' } = location.state;
  const storedSolutions = window.localStorage.getItem(solutionType) || [];

  const solutionData = storedSolutions.length > 0 ? JSON.parse(storedSolutions).find(item => item.name === title) : {}

  const { videoUrl, description, longDescription, email, imageUrl, name, ...otherFields } = solutionData
  const otherFieldsToMap = otherFields && Object.keys(otherFields).map(key => {
    if (key === 'solutionType') return;
    const value = otherFields[key]
    if (!value) return;
    return (<div key={key}><h6>{generateTitle(key, value)}</h6>
      <p>{value}</p></div>)
  })
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{solutionTypeTitle.solutionType}</p>

      {!!imageUrl && <img src={imageUrl} alt="image here" />}

      <ProgressBars data={[{ title: 'cost', value: 600, fullBarValue: 1200 }, { title: 'co2', value: 300, fullBarValue: 2000 }, { title: 'other', value: 600, fullBarValue: 2000 }]} />

      <h4>Description</h4>
      {!!description && <p>{description}</p>}
      {!!longDescription && <p>{longDescription}</p>}

      <h4>Useful Information</h4>
      {otherFieldsToMap}

      <h4>Media</h4>
      {!!videoUrl && <Video sourceUrl={solutionData.videoUrl} />}

      <div>
        <button><a href={`mailto:${email}`}>Contact The Solution masters!</a>  </button>
      </div>
    </Layout >

  )
}

export default organisationPage