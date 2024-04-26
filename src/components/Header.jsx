import React from 'react'
import styled from 'styled-components'

export const Header = (props) => {
  return (
    <Headdiv>
      {/* <h1>LOGO</h1> */}
      <button onClick={props.onShowFormHandler}>ДОБАВИТЬ РАСХОДЫ</button>
    </Headdiv>
  )
}

// export default Header


const Headdiv = styled.header`
border: 2px solid purple;
background-color:blue;
width: 100%;
height:150px ;
margin:auto;
margin-top: 25px;
display: flex;
align-items: center;
justify-content:center;
border-radius: 10px;
button{
  border-radius: 15px;
  width: 250px;
height:70px ;
font-size:large;
color:green;
background-color:aqua;
}

h1{
  font-size:50px;
  color:green;
}


`