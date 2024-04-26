import React from 'react'
import {Date} from './Date'
import styled from 'styled-components'

export const Expenceitem = (props) => {
  return (
    <Divokno>
        <h1>{props.title}</h1>
        <span>{props.price}</span>
        <Date date={props.date}/>
    </Divokno>
  )
}

// export default Expenceitem


const Divokno = styled.div`
border: 2px solid red;
margin: auto;
margin-top: 25px;
display: flex;
justify-content: space-around;
align-items: center;
border-radius: 15px;
width: 70%;

`