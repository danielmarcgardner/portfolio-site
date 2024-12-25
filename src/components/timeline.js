import React from 'react';
import TimeLineRow from './timelinerow'

export const TimeLine = ({timelineItems}) => {
  return (
    <div>
      {timelineItems.map((item, i) => <TimeLineRow {...item} key={`timeline-item-${i}`} />)}
    </div>
  )
}

export default TimeLine
