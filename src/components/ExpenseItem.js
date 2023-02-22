import React, {useEffect, useState} from 'react'
import {MdEdit, MdDelete, MdDeleteOutline} from "react-icons/md"

export default function ExpenseItem({expense}) {
    const {id, charge, amount} = expense
  
    return ( 
    <li className='item'>
      <div className='info'>
        <span className='expense'>{charge}</span>
        <span className='amount'>{amount}</span>
      </div>
      <div>
        <button className='edit-btn' aria-label='edit-btn'>{<MdEdit />}</button>
        <button className='clear-btn' aria-label='delete-btn'>{<MdDeleteOutline />}</button>
        
      </div>
    </li>
  )
}
