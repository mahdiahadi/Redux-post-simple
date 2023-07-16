import { formatDistanceToNow, parseISO } from 'date-fns';
import React from 'react'

const TimeAgo = ({timeStamp}) => {
    let timeAgo ='';
    if(timeStamp){
        const date = parseISO(timeStamp);
        const time = formatDistanceToNow(date)
        timeAgo = `${time} age`
    }
  return (
    <>
        {timeAgo}
    </>
  )
}

export default TimeAgo