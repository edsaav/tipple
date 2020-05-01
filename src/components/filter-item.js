import React from 'react';
import "./filter-item.css"

class FilterItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  toggleState = () => {
    if (this.state.active) {
      this.props.clickActive(this.props.filter);
    } else {
      this.props.clickInactive(this.props.filter);
    }
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  render() {
    return (
      <li><button className={`filter-item ${this.state.active && 'active'}`} onClick={this.toggleState}>{this.props.filter}</button></li>
    )
  }
}

export default FilterItem;