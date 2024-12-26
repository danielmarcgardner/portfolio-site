import React from 'react';
import TimeLineRow from './timelinerow'
import Transition from './transition'

export const TimeLine = ({timelineItems}) => {
  return (
    <div>
      {timelineItems.map((item, i) => {
        if (item.type === "job") {
          return <TimeLineRow {...item} key={`timeline-item-${i}`} />
        } else if (item.type === "transition") {
          return <Transition {...item} key={`timeline-item-${i}`} />
        }
        return null;
      }
      )}
    </div>
  )
}

export default TimeLine
