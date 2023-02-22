import React from 'react'
import ExpenseItem from "./ExpenseItem"
import {MdDelete} from "react-icons/md"

export default function ExpenseList(props) {
  
    const expensesElements = props.expenses.map(expense => {
        return <ExpenseItem key={expense.id}id={expense.id} charge={expense.charge} amount={expense.amount}/> 
    })

    return (
        <>
            <ul className="list">
                {expensesElements}
            </ul>
            {props.expenses.length>0 && <button className='btn'>Clear Expenses <MdDelete className='btn-icon'/></button>}
        </>
    )
}
