import React from 'react'

export const Date = (props) => {

    const year = props.date.getFullYear()
    const month = props.date.getMonth()+1
    const day = props.date.getDate()

  return (
    <div>
        <span>{day}/</span>
        <span>{month}/</span>
        <span>{year}</span>
    </div>
  )
}

// export default Date