import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  static propTypes = {
    default: PropTypes.string,
    onTermSubmit: PropTypes.func,
    loadingStatus: PropTypes.string
  };

  state = { term: '', placeholder: this.props.default };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    if (this.state.term === '') {
      this.props.onTermSubmit(this.state.placeholder);
    } else {
      this.setState({ placeholder: this.state.term });
      this.props.onTermSubmit(this.state.term);
    }
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className={`ui ${this.props.loadingStatus} search`}>
          <div className="ui icon input" style={{ width: '100%' }}>
            <input
              className="prompt"
              type="text"
              placeholder={`${this.state.placeholder}`}
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
