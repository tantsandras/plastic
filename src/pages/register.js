import React from "react"
import { Link } from "gatsby"
import RegisterForm from "../components/registerForm"

import Layout from "../components/layout"
import SEO from "../components/seo"

const RegisterPage = () => (
    <Layout>
      <SEO title="Register" keywords={[`gatsby`, `application`, `react`]} />
        <RegisterForm />
    </Layout>
  )

export default RegisterPage