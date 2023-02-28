import React from 'react'

export default function Alert({type, text}) {
  return (
  <h1 className={`alert alert-${type}`}>{text}</h1>
  )
}
