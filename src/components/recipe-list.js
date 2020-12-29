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
    let textMatch = !props.filtersHidden
    if (props.searchString.length > 0) {
      textMatch = node.name.toLowerCase().includes(props.searchString.toLowerCase())
    }
    if (props.filtersHidden) {
      return textMatch
    }
    if (props.inclusiveFilter) {
      return props.activeFilters.filter(value => node.tags.includes(value)).length !== 0 || (props.searchString.length > 0 && textMatch)
    } else {
      return props.activeFilters.filter(value => node.tags.includes(value)).length === props.activeFilters.length && textMatch && props.activeFilters.length > 0
    }
  })

  let activeSearch = (props.activeFilters.length !== 0 && !props.filtersHidden) || props.searchString.length !== 0;

  return (
    <div className={`results ${filteredData.length === 0 && 'empty'} ${activeSearch && 'active-search'}`}>
      <div className='help-text'>
        <p className='default'>
          Use the search bar to find a particular cocktail recipe. Have some gin and don't know what to make? Click browse to explore recipes by ingredient and style.
        </p>
        <p className='no-results'>
          Hm. No results for that search. Try something else!
        </p>
      </div>
      <ul className='recipe-list'>
        {filteredData.map(node => {
          return (
            <Recipe key={node.id} recipe={node} />
          )
        })}
      </ul>
    </div>
  )
}

export default RecipeList