import React, { createContext } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import useDarkMode from '../hooks/useDarkMode'
import Header from "./header"
import DarkModeContext from '../context/darkmodecontext'
import Footer from './footer'
import styles from '../styles/layout.module.scss'


const Layout = ({ children }) => {
const { theme, toggleDark } = useDarkMode()

  return (
    <DarkModeContext.Provider value={{theme, toggleDark}}>
      <Header />
      <div
        className={styles.layout}
        style={{
          background: theme === 'dark' ? '#2f4562' : '#fcfcfc',
          color: theme ==='dark' ? '#fcfcfc' :'#2f4562'
        }}
      >
        <main className={styles['layout__main']}>
          {children}
        </main>
      </div>
      <Footer theme={theme}/>
    </DarkModeContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
