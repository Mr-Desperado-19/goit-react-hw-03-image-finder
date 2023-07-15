import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Searchbar.scss"

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const { query } = this.state;

    if (query.trim()) {
      this.props.onSubmit(query);
      this.setState({ query: '' });
    }
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { query } = this.state;

    return (
      <header className='searchbar'>
        <form onSubmit={this.handleSubmit} className='search-form'>
          <input
            className='search-form_input'
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
          <button type="submit" className='search-form_btn'>
            <span className='search-form_btn-label'>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;