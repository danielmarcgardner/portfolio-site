/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import useDarkMode from '../hooks/useDarkMode'
import Header from "./header"
import styles from '../styles/layout.module.scss'


const Layout = ({ children }) => {
const { theme, toggleDark } = useDarkMode()


return (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} toggleProps={ { theme, toggleDark } } />
        <div
          className={styles.layout}
          style={{
            background: theme === 'dark' ? '#2f4562' : '#fcfcfc',
            color: theme ==='dark' ? '#fcfcfc' :'#2f4562'
          }}
        >
          <main>{children}</main>
        </div>
      </>
    )}
  />
)
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
