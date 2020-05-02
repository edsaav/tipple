import React from 'react';
import RecipeList from "../components/recipe-list"
import FiltersList from "../components/filters-list"
import Switch from "../components/switch"
import "./filter-controls.css"

class RecipeBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilters: [],
      inclusiveFilter: true 
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

  toggleFilter = () => {
    this.setState(prevState => ({
      inclusiveFilter: !prevState.inclusiveFilter
    }));
  }

  render() {
    return (
      <>
      <div className='filter-controls'>
        <div className='filter-mode-switch'>
          <span className='filter-switch-label filter-mode-and'>AND</span>
          <Switch
            switchId='filter-mode-switch'
            switchOn={this.state.inclusiveFilter}
            onSwitchToggle={this.toggleFilter}
          />
          <span className='filter-switch-label filter-mode-or'>OR</span>
        </div>
        <FiltersList
          addFilter={this.addFilter}
          removeFilter={this.removeFilter}
        />
      </div>
      <RecipeList
        activeFilters={this.state.activeFilters}
        inclusiveFilter={this.state.inclusiveFilter}
      />
      </>
    );
  }
}

export default RecipeBrowser;