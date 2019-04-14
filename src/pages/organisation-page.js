import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"
import OrganisationDescription from "../components/organisation-description";

const organisationPage = () => (
    <Layout>
        <div>
            <Video />
            <OrganisationDescription />
        </div>
    </Layout>

)

export default organisationPage