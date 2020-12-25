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
      searchInput:'',
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
    this.setState(prevState => ({
      filtersHidden: !prevState.filtersHidden
    }));
    this.setState({ searchInput: '' });
    this.setState({ searchString: '' });
  }

  updateSearch = debounce((newSearchString) => {
    this.setState({ searchString: newSearchString });
  }, 250)

  handleSearchClick = () => {
    this.setState({ filtersHidden: true });
  }

  debouncedUpdateSearch = (e) => {
    this.setState({ searchInput: e.target.value });
    this.updateSearch(e.target.value.trim());
  }

  render() {
    return (
      <>
      <div className={`controls-wrapper ${!this.state.filtersHidden && 'filters-active'}`}>
        <div className={`search-controls ${!this.state.filtersHidden && 'inactive'}`}>
          <Search
            searchId='main-search'
            handleInputChange={this.debouncedUpdateSearch}
            toggleSearch={this.toggleFiltersHidden}
            placeholderText='Search for a cocktail'
            handleSearchClick={this.handleSearchClick}
            searchString={this.state.searchInput}
          />
          <div className='filter-mode-switch'>
            <span className={`filter-switch-label filter-mode-and ${!this.state.inclusiveFilter && 'active'}`}>AND</span>
            <Switch
              switchId='filter-mode-switch'
              switchOn={this.state.inclusiveFilter}
              onSwitchToggle={this.toggleFilter}
            />
            <span className={`filter-switch-label filter-mode-or ${this.state.inclusiveFilter && 'active'}`}>OR</span>
          </div>
          <button
            className={`show-filters ${this.state.filtersHidden && 'inactive'}`}
            onClick={this.toggleFiltersHidden}
          >
            Browse
          </button>
        </div>
        <div className={`filter-controls ${this.state.filtersHidden && 'closed'}`}>
          <FiltersList
            addFilter={this.addFilter}
            removeFilter={this.removeFilter}
          />
        </div>
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