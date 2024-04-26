import React,{useState} from 'react'
import {Expenceitem} from './Expenceitem'
import {Header} from './Header'
import {Form} from './Form'
import Chart from './chart/Chart';
import styled from 'styled-components';

const expenses = [
    {
        title: "Taxi",
        price: 500,
        id: "1a",
        date: new Date("2023,4,19")
    },

    {
        title: "Obed",
        price: 300,
        id: "2a",
        date: new Date()
    }
];

const Expense = ()=>{
  const [form,setForm] = useState(false)

  const [expensesState,setExpensesState] = useState(expenses)

  const [filterDate,setFilterDate] = useState("")

  const save = (data)=>{
     setExpensesState(()=>{
      return [...expensesState, data]
     })
  }


const showFormHandler = ()=>{
  setForm(true)
};

const closeFormHandler = ()=>{
  setForm(false)
};


const selectValue = (e)=> {
  setFilterDate(e.target.value)
}

const filterByYear = expensesState.filter((el)=>{
  const year = el.date.getFullYear()
  return year === +filterDate
})


const totalExpense = expensesState.reduce((a,el)=>{
  return a + el.price;
}, 0);



  return (
    <div>
      <Header onShowFormHandler = {showFormHandler}/>
      {form === true ? <Form onSave = {save} onCloseFormHandler={closeFormHandler} /> : ""}
      <Chart/>
      <Select onChange={selectValue}>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
      </Select>
        {
            filterByYear.map((el)=>{
              return  <Expenceitem key={el.id} title = {el.title} price = {el.price} date = {el.date}/>
            })
        }
        <h1>Итого: {totalExpense}</h1>


    </div>
  )
}

export default Expense


const Select = styled.select`
  padding: 10px 30px;
  font-size: 20px;
  margin-top: 20px;
`