/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Header from './header';
import { resetState } from '../redux/actions';

const Layout = connect()(props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const handleClick = () => {
    props.dispatch(resetState());
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Header
            siteTitle={
              data &&
              data.site &&
              data.site.siteMetadata &&
              data.site.siteMetadata.title
            }
            onClick={handleClick}
          />
        </div>
        <Typography component="div">
          <main>{props.children ? props.children : []}</main>
        </Typography>
        <Typography component="div">
          <Link to="/" onClick={handleClick}>
            Go back to the homepage
          </Link>
        </Typography>
        <Typography component="div">
          <footer
            style={{
              position: 'relative',
              width: '100vw',
              bottom: '0',
              marginTop: '10px',
            }}
          >
            © {new Date().getFullYear()}, John Holman & Xavi Labs LLC
          </footer>
        </Typography>
      </Container>
    </React.Fragment>
  );
});

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
