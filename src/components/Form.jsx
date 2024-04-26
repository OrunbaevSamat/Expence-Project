import React, { useState } from 'react'
import styled from 'styled-components'

export const Form = (props) => {

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [date, setDate] = useState("")


  const titleHandler = (event) => {
    setTitle(event.target.value)
  }


  const priceHandler = (e) => {
    setPrice(e.target.value)
  }


  const dateHandler = (e) => {
    setDate(e.target.value)
  }


  const addHandler = () => {
    const exp = {
      title: title,
      price: +price,
      id: Math.random(),
      date: new Date(date)
    }
    props.onSave(exp)
    // setPrice("")
  }

  return (
    
      <Formokno>

        <input onChange={titleHandler} type="text" />
        <input onChange={priceHandler} type="number" />
        <input onChange={dateHandler} type="date" />
        <button onClick={addHandler}>ADD</button>
        <button onClick={props.onCloseFormHandler}>Cancel</button>

      </Formokno>

   
  )
}

export default Form


const Formokno = styled.div`
border: 2px solid gold;
margin: auto;
margin-top: 25px;
display: flex;
justify-content:space-between;
align-items: center;
border-radius: 15px;
width: 40%;
height:270px ;
button{
  width:80px;
height:60px ;
border-radius: 15px;
}

input{
  width:180px;
  height:30px ;
  color: green;
  border-color:blue;
  border-radius: 15px;
}


`