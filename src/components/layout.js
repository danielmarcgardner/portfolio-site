import React from 'react';
import PropTypes from 'prop-types';
import useDarkMode from '../hooks/useDarkMode';
import Header from './header';
import Hero from './hero';
import DarkModeContext from '../context/darkmodecontext';
import Footer from './footer';
import * as styles from '../styles/layout.module.scss';

const Layout = ({ children }) => {
  const { theme, toggleDark } = useDarkMode();

  return (
    <DarkModeContext.Provider value={{ theme, toggleDark }}>
      <Header />
      <div
        className={styles.layout}
        style={{
          background: theme === 'dark' ? '#2f4562' : '#fcfcfc',
          color: theme === 'dark' ? '#fcfcfc' : '#2f4562',
        }}
      >
        <main className={styles['layout']}>
          <Hero />
          {children}
        </main>
      </div>
      <Footer theme={theme} />
    </DarkModeContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
