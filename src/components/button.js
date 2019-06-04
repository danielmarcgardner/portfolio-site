import React, {useState} from 'react';
import styles from '../styles/button.module.scss';

export const Button = ({onClick, additionalClass, children, type}) => {
  return (
    <button className={`${styles.button} ${styles[additionalClass]}`} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
