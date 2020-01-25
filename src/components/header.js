import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `transparent`,
      color: `#000`,
      fontSize: `48px`,
      letterSpacing: `-7.5px`
    }}
  >

    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `#000`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
