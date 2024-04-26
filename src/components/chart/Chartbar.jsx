import React from 'react'
import styled from 'styled-components'

const Chartbar = (props) => {

  const expense = 20000


  const prosent = props.rashod*100/expense
  return (
    <Shkalabar>
        <Shkala>
          <InnerShkala style={{height:prosent +"%" }}>
          </InnerShkala>
        </Shkala>
        <span>{props.month}</span>
    </Shkalabar>
  )
}

export default Chartbar


const Shkalabar = styled.div`
margin-top:50px;
display: inline-block;
color: aliceblue;
border-radius: 20px;
`

const Shkala = styled.div`
border:1px solid;
width: 50px;
height: 250px;
border-radius: 40px;
display: flex;
flex-direction: column-reverse;
overflow: hidden;
background-color: white;
`

const InnerShkala = styled.div`
  background-color: red;
  height: 100px;

`