import React, { Component } from 'react';

import SearchBar from '../containers/searchBar';
import ArticleList from '../containers/articleList';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ArticleList />
      </div>
    );
  }
}
