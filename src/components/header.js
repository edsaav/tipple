import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className='site-header'>
    <h1 style={{ margin: 0 }}>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    <Link to="/about" className="about">about</Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
