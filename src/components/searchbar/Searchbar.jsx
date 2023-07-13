import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <header>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;