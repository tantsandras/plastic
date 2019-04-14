import React from "react"

function videoPlayback(sourceUrl) {
  return { __html: `<iframe width="560" height="315" src=${sourceUrl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` };
}

const Video = ({ sourceUrl = "" }) => (
  <div dangerouslySetInnerHTML={videoPlayback(sourceUrl)} />
)

export default Video