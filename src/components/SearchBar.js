import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onLoading();
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
          <div className="results" />
        </div>
      </form>
    );
  }
}

export default SearchBar;
