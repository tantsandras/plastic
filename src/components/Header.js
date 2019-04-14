import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        marginLeft: `60%`,
        marginTop: `1rem`,
        maxWidth: 960,
      }}
    >
      <Link to='/'>
        <div style={{ width: `40%`, margin: `1em` }}>
          <Image />
        </div>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
