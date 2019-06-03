import React, { useContext } from 'react';
import Image from "gatsby-image"
import styles from '../styles/hero.module.scss';
import DarkModeContext from '../context/darkmodecontext'

export default ({profile}) => {
  const { theme } = useContext(DarkModeContext);
  return (
    <div className={styles.hero}>
      <Image
        className={styles['hero__img']}
        fixed={profile}
        style={{ borderColor: theme === 'dark' ? '#2f4562' : '#161616'}}
      />
      <h2 className={styles['hero__text']} style={{ color: '#2f4562'}}>Daniel Gardner</h2>
      <h3 className={styles['hero__text']} style={{ color: '#2f4562'}}>Full Stack Engineer</h3>
    </div>
  )
}
