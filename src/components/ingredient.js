import React from 'react'
import "./ingredient.css"

const Ingredient = (props) => {
  let { ingredient } = props
  let quantity
  if (ingredient.quantity && ingredient.unit) {
    quantity = <><span className='quantity'>{ingredient.quantity}</span> <span className='unit'>{ingredient.unit} </span></>
  } else {
    quantity = null
  }

  return (
    <li className='ingredient'>{quantity && <span className='amount'>{quantity}</span>}<span className='ingredient-name'>{ingredient.name}</span></li>
  )
}

export default Ingredient