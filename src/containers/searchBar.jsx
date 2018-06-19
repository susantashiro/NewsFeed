import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../redux/articles/actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      sortBy: 'publishedAt',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onSelectChange(event) {
    this.setState( { sortBy: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchArticles(this.state.term, this.state.sortBy);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div className="search-bar">
        <form className="search-bar__form main-width" onSubmit={this.onFormSubmit}>
          <div className="form-row">
            <div className="col-md-6 col-lg-8 search-bar__item">
              <input
                className="form-control search-bar__term-input"
                placeholder="Some search term"
                value={this.state.term}
                onChange={this.onInputChange}
              />
            </div>
            <div className="col-md-3 col-lg-2 search-bar__item">
              <select className="form-control search-bar__sort" onChange={this.onSelectChange}>
                <option>Sort Articles</option>
                <option value="publishedAt">Newest</option>
                <option value="popularity">Most Popular</option>
                <option value="relevancy">Most Relevant</option>
              </select>
            </div>
            <div className="col-md-3 col-lg-2 search-bar__item">
              <span>
                <button type="submit" className="btn btn-secondary form-control search-bar__submit-btn">Search</button>
              </span>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { fetchArticles })(SearchBar);
