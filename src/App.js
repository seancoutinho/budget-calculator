import './App.css';
import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import ExpenseList from "./components/ExpenseList"
import Alert from "./components/Alert"
import ExpenseForm from './components/ExpenseForm';

function App() {
//**********************STATE VARIABLES****************

const [expenses, setExpenses] = useState([
    {id: nanoid(), charge: "rent", amount: 1600},
    {id: nanoid(), charge: "car payment", amount: 2000},
    {id: nanoid(), charge: "credit card bill", amount: 1200}
  ])

  const [charge, setCharge] = useState('')
  const [amount, setAmount] = useState(0)
  const [alert, setAlert] = useState({show:false})

    //Handles the capturing of the charge
  function captureCharge(event) {
    setCharge(event.target.value)
  }

   //handles the capture of the expense amount
  function captureAmount(event) {
    setAmount(event.target.value)
  }

    //handles the alert display 
  function handleAlert(type, text) {
    setAlert({show: true,type,text});
    setTimeout(() => {
      setAlert({show: false})
    }, 4000)
    }
   
  //This function adds a new expense to the expenses array
  function onSubmit(event) {
    event.preventDefault()
    if (charge !== "" && amount >0) {
      setExpenses(prevExpenses => {
        return [
          ...prevExpenses,
          {
            id: nanoid(),
            charge,
            amount: parseInt(amount)
          }
        ]
      })
      setCharge("")
      setAmount("")
      handleAlert({type:'success', text:'Item Added'})
    } else {
      handleAlert({type:'danger', text:"Amount should be greater than zero and Charge should not be empty"})
    } 
    
  }

  function clearExpenses() {
    setExpenses([])
  }
  
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm charge={charge} amount={amount} captureCharge={captureCharge} captureAmount={captureAmount} onSubmit ={onSubmit}/>
        <ExpenseList clearExpenses={clearExpenses} expenses={expenses}/>
      </main>
      <h1>Total Spending: <span className="total">
        $ {expenses.reduce((acc, curr) => {
          return acc+=curr.amount
        }, 0)}</span></h1>
    </>
  )
}

export default App;
