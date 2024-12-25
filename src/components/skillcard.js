import React from 'react';
import * as styles from '../styles/skillcard.module.scss';

export const SkillCard = ({img, name, text}) => (
  <div className={styles.skillcard}>
    {console.log("img",img)}
    <img src={img.default} alt={name} className={styles[`skillcard__img`]}/>
    <h3 className={styles['skillcard__header']}>{name}</h3>
    {text && <p>{text}</p>}
  </div>
)

export default SkillCard;
