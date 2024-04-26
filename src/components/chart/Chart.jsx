import React from 'react'
import Chartbar from './Chartbar'
import styled from 'styled-components'

const Chart = () => {

  const months = [
    {
      month:"january",
      rashod:2000,
    },
    {
      month:"february",
      rashod:12000,
    },
    {
      month:"march",
      rashod:3000,
    },
    {
      month:"april",
      rashod:7000,
    },
    {
      month:"may",
      rashod:12000,
    },
    {
      month:"july",
      rashod:6000,
    },
    {
      month:"june",
      rashod:2000,
    },
    {
      month:"august",
      rashod:15000,
    },
    {
      month:"september",
      rashod:8000,
    },
    {
      month:"october",
      rashod:200,
    },
    {
      month:"november",
      rashod:7000,
    },
    {
      month:"december",
      rashod:11000,
    },
  ]
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