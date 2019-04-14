import React from "react"
import { Link } from "gatsby"
import Video from "../components/video"
import OrganisationDescription from "../components/organisation-description";
import Layout from "../components/layout"

const dummyData = [{ name: 'Kyoto Institute of Technology, Japan', imageUrl: "bla" }]

const organisationPage = () => (
  <Layout>
    <div>
      <Video />
      <OrganisationDescription />
    </div>
  </Layout>

)

export default organisationPage