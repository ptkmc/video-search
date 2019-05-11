import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  static propTypes = {
    default: PropTypes.string,
    onTermSubmit: PropTypes.func,
    loadingStatus: PropTypes.string
  };

  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className={`ui ${this.props.loadingStatus} search`}>
          <div className="ui icon input" style={{ width: '100%' }}>
            <input
              className="prompt"
              type="text"
              placeholder={`${this.props.default}`}
              onChange={this.onInputChange}
            />
            <i className="search icon" />
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
