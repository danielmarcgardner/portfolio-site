import React from 'react';
import * as styles from '../styles/timeline.module.scss';

export const TimeLineRow = ({ title, time, company, bulletPoints, image}) => {  
  return (
    <div className={styles.timelinerow}>
      <div className={styles.timelinerowLeft}>
        {image && <img src={image.default} alt={company} className={styles.timelinerowImage}/>}
        <div classNames={image ? styles.timelinerowLeftText : styles.timelinerowLeftTextNoImage}>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p>{time}</p>
        </div>
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
