import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = props => (
  <header
    style={{
      background: `transparent`,
      color: `#000`,
      fontSize: `42px`,
      letterSpacing: `-7.5px`,
      lineHeight: `initial`,
    }}
    data-automation-id="freshlocal__header"
  >
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `#000`,
          textDecoration: `none`,
        }}
        onClick={props.onClick}
      >
        {props.siteTitle}
      </Link>
    </h1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
