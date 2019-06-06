import React from 'react';
import SkillCard from './skillcard';
import styles from '../styles/skillscontainer.module.scss';

export const SkillsContainer = ({skills, sectionTitle}) => (
  <div className={styles.skillscontainer}>
    <h3>{sectionTitle}</h3>
    <div className={styles.skillscontainer__content}>
      {skills.map((skill, i) => (<SkillCard {...skill} key={`skill-${skill.name}-${i}`}/>))}
    </div>
  </div>
)

export default SkillsContainer;
