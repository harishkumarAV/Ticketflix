import React from 'react'

export default function Message(props) {
  return (
    <div>
        <h3>Name: {props.name}</h3>
        <h3>Age: {props.age}</h3>
    </div>
  )
}
