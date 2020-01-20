/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <div style={{display: "flex", justifyContent: 'space-between'}}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <MenuIcon fontSize="large" style={{marginTop: '50px'}}/>
      </div>
      <Typography component="div">
        <main>{children}</main>
        <footer style={{position: 'relative', width: '100vw', bottom: '0', marginTop: '10px'}}>
          © {new Date().getFullYear()}, John Holman & Xavi Labs LLC
        </footer>
      </Typography>
      </Container>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
