import React from 'react';
import RecipeList from "../components/recipe-list"
import FiltersList from "../components/filters-list"

class RecipeBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilters: []
    };
  }

  addFilter = (filter) => {
    let currentFilters = this.state.activeFilters.slice();
    if (currentFilters.indexOf(filter) === -1) { currentFilters.push(filter); }
    this.setState({ activeFilters: currentFilters });
  }

  removeFilter = (filterToRemove) => {
    let currentFilters = this.state.activeFilters.slice().filter((filter) => {
      return filter !== filterToRemove;
    });
    this.setState({ activeFilters: currentFilters });
  }

  render() {
    return (
      <>
      <FiltersList addFilter={this.addFilter} removeFilter={this.removeFilter}/>
      <RecipeList activeFilters={this.state.activeFilters}/>
      </>
    );
  }
}

export default RecipeBrowser;