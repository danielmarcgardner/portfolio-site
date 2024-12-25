import React from 'react';
import * as styles from '../styles/timeline.module.scss';

export const TimeLineRow = ({ title, time, company, bulletPoints}) => {

  return (
    <div className={styles.timelinerow}>
      <div className={styles.timelinerowLeft}>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p>{time}</p>
      </div>
      <div className={styles.timelinerowRight}>
        <ul className={styles.timelinerowRightList}>
          {bulletPoints.map((bulletpoint, i) => <li key={`${company}-bulletpoint-#${i}`} className={styles.timelinerowRightListItem}>{bulletpoint}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default TimeLineRow;
