import React from 'react';
import styles from '../styles/confirmation.module.scss';

export const Confirmation = () => (
  <div className={styles.confirmation}>
    <h3>Sent!</h3>
    <p>
      Thank you so much for contacting me! I will respond as soon as possible to
      your email.
    </p>
  </div>
);

export default Confirmation;
