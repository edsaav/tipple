import React from 'react'
import Ingredient from "../components/ingredient"
import "./recipe.css"

const Recipe = ({ recipe }) => {

  return (
    <li className='recipe-card'>
      <h2 className='recipe-name'>{recipe.name}</h2>
      <ul className='ingredients-list'>
      {recipe.ingredients.map(ingredient => {
        return (
          <Ingredient key={recipe.id + '-' + ingredient.name} ingredient={ingredient} />
        )
      })}
      </ul>
      <p className='directions'>{recipe.directions}</p>
    </li>
  )
}

export default Recipe