import React, { Component } from 'react';
import './css/SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // State stores search text
    this.state = { value: '' };
       
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) { console.log("Search request for: " + this.state.value); }

  render() {
    return (
      <div className="search-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value}
                 placeholder="Search Twitter" className="search-inp"
                 onChange={this.handleTextChange} />
          <i className="search-btn fa fa-search" />
        </form>
      </div>
    )
  }
} 

export default SearchBar;
