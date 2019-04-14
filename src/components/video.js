import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

function videoPlayback() {
    return {__html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4l-T_nwGnrU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
}

const Video = () => (
    <div dangerouslySetInnerHTML={videoPlayback()} />
)

export default Video