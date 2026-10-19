// import React from 'react'
import './styles.css'
const Card = (props) => {
    console.log(props)
  return (
    <div className="card">
      <div className="card-name">{props.school}</div>
      <div className="card-age">{props.age}</div>
    </div>
  )
}

export default Card
