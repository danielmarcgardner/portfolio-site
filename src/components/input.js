import React from 'react';
import styles from '../styles/input.module.scss';

export const Input = ({ labelText, type, name, onChange, hidden}) => {
  const props = {
    name,
    onChange,
    className: styles['input__input']
  }
  return (
    <div className={styles.input} hidden={hidden}>
      <label className={styles[`input__label`]}>{labelText}</label> <br />
      { type === 'textarea' ? <textarea {...props} /> : <input type={type} {...props} /> }
    </div>
  )
}

export default Input
