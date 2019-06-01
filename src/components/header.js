import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Toggle from '../components/toggle';
import styles from "../styles/header.module.scss";

const Header = ({ toggleProps }) => {
  const routes = [
    {
      link: '/',
      title: 'About',
    },
    {
      link: '/skills',
      title: 'Skills',
    },
    {
      link: '/work',
      title: 'Work',
    }
  ]
  return (
  <header className={styles.header} style={ {
    color: toggleProps.theme === 'dark' ?  '#fcfcfc' : '#081b33',
    background: toggleProps.theme === 'dark' ?  '#081b33' : '#f2f2f2'
  } }>
    <div className={styles['header__item']}>
      <h2 className={styles['header__itemName']}>Daniel Gardner</h2>
    </div>
    <div className={styles['header__item']}>
      {routes.map(route =>
        <Link
          to={route.link}
          key={`${route.title}--link`}
          className={styles['header__itemLink']}
          style={ { color: toggleProps.theme === 'dark' ?  '#fcfcfc' : '#081b33' } }
          >{route.title}
        </Link>
      )}
      <Toggle
        active={toggleProps.theme === 'dark'}
        onCheck={toggleProps.toggleDark}
        isDarkMode={true}
      />
    </div>
  </header>
)
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
