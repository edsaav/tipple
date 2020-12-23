import React from 'react';
import RecipeList from "../components/recipe-list"
import FiltersList from "../components/filters-list"
import Switch from "../components/switch"
import Search from "../components/search"
import "./filter-controls.css"
import { debounce } from "../utils/debounce"

class RecipeBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilters: [],
      inclusiveFilter: false ,
      searchString:'',
      filtersHidden: true
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

  toggleFiltersHidden = () => {
    console.log('Toggling')
    this.setState(prevState => ({
      filtersHidden: !prevState.filtersHidden
    }));
    console.log(this.state.filtersHidden)
  }

  updateSearch = debounce((newSearchString) => {
    this.setState({ searchString: newSearchString });
    console.log('updating')
  }, 250)

  debouncedUpdateSearch = (e) => {
    this.updateSearch(e.target.value);
  }

  render() {
    return (
      <>
      <div className='search-controls'>
        <Search
          searchId='main-search'
          handleInputChange={this.debouncedUpdateSearch}
          placeholderText='Search for a cocktail'
        />
        <button
          className={`show-filters ${this.state.filtersHidden && 'inactive'}`}
          onClick={this.toggleFiltersHidden}
        />
      </div>
      <div className={`filter-controls ${this.state.filtersHidden && 'closed'}`}>
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
        searchString={this.state.searchString}
        filtersHidden={this.state.filtersHidden}
      />
      </>
    );
  }
}

export default RecipeBrowser;