import React from 'react'
import Recipe from "../components/recipe"

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
    let textMatch = true
    if (props.searchString.length > 0) {
      textMatch = node.name.toLowerCase().includes(props.searchString.toLowerCase())
    }
    if (props.inclusiveFilter) {
      return props.activeFilters.filter(value => node.tags.includes(value)).length !== 0 && textMatch
    } else {
      return props.activeFilters.filter(value => node.tags.includes(value)).length === props.activeFilters.length && textMatch
    }
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