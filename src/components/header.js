import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Toggle from '../components/toggle';
import DarkModeContext from '../context/darkmodecontext';
import * as styles from '../styles/header.module.scss';

const Header = () => {
  const { theme, toggleDark } = useContext(DarkModeContext);
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
    },
  ];
  return (
    <header
      className={styles.header}
      style={{
        color: theme === 'dark' ? '#fcfcfc' : '#081b33',
        background: theme === 'dark' ? '#081b33' : '#f2f2f2',
      }}
    >
      <div className={styles['header__item']}>
        <h2 className={styles['header__itemName']}>Daniel Gardner</h2>
      </div>
      <div className={styles['header__item']}>
        {routes.map(route => (
          <Link
            to={route.link}
            key={`${route.title}--link`}
            className={styles['header__itemLink']}
            style={{ color: theme === 'dark' ? '#fcfcfc' : '#081b33' }}
          >
            {route.title}
          </Link>
        ))}
        <Toggle
          active={theme === 'dark'}
          onCheck={toggleDark}
          isDarkMode={true}
        />
      </div>
    </header>
  );
};
Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
