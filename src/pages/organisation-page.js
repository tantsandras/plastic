import React from "react"
import { Link } from "gatsby"
import Video from "../components/video"
import OrganisationDescription from "../components/organisation-description";


const dummyData = [{name: 'Kyoto Institute of Technology, Japan', imageUrl: "bla"}]

const organisationPage = () => (
        <div>
            <Video />
            <OrganisationDescription />
        </div>

)

export default organisationPage