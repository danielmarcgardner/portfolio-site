import React from 'react';
import * as styles from '../styles/toggle.module.scss';

const Toggle = ({ active, onCheck, activeLogo, inactiveLogo, isDarkMode }) => {
  const hasLogos = activeLogo && inactiveLogo;
  const logo = active => (active ? activeLogo : inactiveLogo);
  return (
    <div
      tabIndex="1"
      className={`${styles.toggle} ${active ? `${styles.isActive}` : ''} ${
        isDarkMode ? `${styles.isDarkmode}` : ''
      }`}
      onClick={onCheck}
    >
      <div className={styles['toggle__button']}>
        {hasLogos && (
          <img
            src={logo(active)}
            alt={`${active ? 'active image' : 'inactive image'}`}
          />
        )}{' '}
      </div>
    </div>
  );
};

export default Toggle;
