import React from 'react';
import * as styles from '../styles/section.module.scss';

export const Section = ({ children }) => (
  <section className={styles.section}>{children}</section>
);

export default Section;
