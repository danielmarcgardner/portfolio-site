import React from 'react';
import TimeLineRow from './timelinerow'
import styles from '../styles/timeline.module.scss';

export const TimeLine = ({timelineItems}) => {
  return (
    <div className={styles.timeline}>
      {timelineItems.map((item, i) => <TimeLineRow {...item} key={`timeline-item-${i}`} />)}
    </div>
  )
}

export default TimeLine
