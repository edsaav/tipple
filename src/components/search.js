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
        onInput={this.props.handleInputChange}
        placeholder={this.props.placeholderText}
      />
    )
  }
}

export default Search;