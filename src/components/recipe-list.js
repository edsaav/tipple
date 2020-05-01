import React from 'react'
import Recipe from "../components/recipe"
import "./recipe-list.css"

import { useStaticQuery, graphql } from "gatsby"

const RecipeList = (props) => {
  const data = useStaticQuery(
    graphql`
      query {
        allRecipesJson {
          nodes {
            directions
            garnish
            glass
            id
            ingredients {
              name
              quantity
              unit
            }
            name
            tags
          }
        }
      }
    `
  )

  let filteredData = data.allRecipesJson.nodes.filter((node) => {
    return props.activeFilters.filter(value => node.tags.includes(value)).length !== 0
  })

  return (
    <ul className='recipe-list'>
      {filteredData.map(node => {
        return (
          <Recipe key={node.id} recipe={node} />
        )
      })}
    </ul>
  )
}

export default RecipeList