import React from 'react'
import Chartbar from './Chartbar'
import styled from 'styled-components'

const Chart = (props) => {

  const months = [
    {
      month:"january",
      rashod:0,
    },
    {
      month:"february",
      rashod:0,
    },
    {
      month:"march",
      rashod:0,
    },
    {
      month:"april",
      rashod:0,
    },
    {
      month:"may",
      rashod:0,
    },
    {
      month:"june",
      rashod:0,
    },
    {
      month:"july",
      rashod:0,
    },
    {
      month:"august",
      rashod:0,
    },
    {
      month:"september",
      rashod:0,
    },
    {
      month:"october",
      rashod:0,
    },
    {
      month:"november",
      rashod:0,
    },
    {
      month:"december",
      rashod:0,
    },
  ]

  props.expense.map((el)=>{
    const month = el.date.getMonth()
    months[month].rashod = +el.price + months[month].rashod
  })


  return (
    <Chartstyle>
      {
        months.map((el)=>{
          return <Chartbar month={el.month} rashod={el.rashod}/>
        })
      }
     </Chartstyle>
  )
}

export default Chart

const Chartstyle = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #5a5454;
`