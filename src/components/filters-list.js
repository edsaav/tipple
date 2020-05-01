import React from 'react'
import FilterItem from "../components/filter-item"
import "./filters-list.css"

import { useStaticQuery, graphql } from "gatsby"

const FiltersList = (props) => {
  const data = useStaticQuery(
    graphql`
      query {
        allRecipesJson {
          nodes {
            tags  
          }
        }
      }
    `
  )

  function onClickInactiveFilter(node) {
    props.addFilter(node)
  }

  function onClickAtiveFilter(node) {
    props.removeFilter(node)
  }

  const availableFilters = [...new Set([].concat.apply([],  data.allRecipesJson.nodes.map(n => n.tags)))]

  return (
    <ul className='filters-list'>
      {availableFilters.map(node => {
        return (
          <FilterItem key={node} filter={node} clickActive={onClickAtiveFilter} clickInactive={onClickInactiveFilter}/>
        )
      })}
    </ul>
  )
}

export default FiltersList