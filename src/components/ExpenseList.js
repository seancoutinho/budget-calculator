import React from "react";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

export default function ExpenseList(props) {
  const expensesElements = props.expenses.map((expense) => {
    return <ExpenseItem key={expense.id} expense={expense} />;
  });

  return (
    <>
      <ul className="list">{ expensesElements }</ul>
        <button className="btn" onClick={props.clearExpenses}>
          Clear Expenses <MdDelete className="btn-icon" />
        </button>
    </>
  );
}
