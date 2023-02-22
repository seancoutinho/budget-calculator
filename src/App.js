import './App.css';
import React, {useState, useEffect} from 'react';
import { nanoid } from 'nanoid';
import ExpenseList from "./components/ExpenseList"
import Alert from "./components/Alert"
import ExpenseForm from './components/ExpenseForm';

function App() {

  const [expenses, setExpenses] = useState([
    {id: nanoid(), charge: "rent", amount: 1600},
    {id: nanoid(), charge: "car payment", amount: 2000},
    {id: nanoid(), charge: "credit card bill", amount: 1200}
  ])
  
  console.log(expenses, setExpenses);
  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList expenses={expenses}/>
      </main>
      <h1>Total Spending: <span className="total">
        $ {expenses.reduce((acc, curr) => {
          return acc+=curr.amount
        }, 0)}</span></h1>
    </>
  )
}

export default App;
