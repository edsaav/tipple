import React from 'react';
import './search.css';

class Search extends React.Component {
  render() {
    return (
      <input
        type='text'
        id={this.props.searchId}
        name={this.props.searchId}
        className='search-input'
        onChange={this.props.handleInputChange}
        onClick={this.props.handleSearchClick}
        placeholder={this.props.placeholderText}
        value={this.props.searchString}
      />
    )
  }
}

export default Search;