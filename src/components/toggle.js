import React, { useState } from 'react';
import PropTypes from "prop-types";
import styles from '../styles/toggle.module.scss';

const Toggle = ({ active, onCheck, activeLogo, inactiveLogo, isDarkMode }) => {
  const hasLogos = activeLogo && inactiveLogo;
  const logo = (active) => active ? activeLogo : inactiveLogo;
  return (
    <div className={ `${styles.toggle} ${active ? `${styles.isActive}` : ''} ${isDarkMode ? `${styles.isDarkmode}` : ''}` } onClick={ onCheck }>
        <div className={styles['toggle__button']}>{ hasLogos && <img src={logo(active)} alt={`${active ? 'active image' : 'inactive image'}`}/>} </div>
    </div>
  );
}

export default Toggle
