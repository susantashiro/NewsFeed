import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticleBlock from '../components/articleBlock';

class ArticleList extends Component {
  renderArticle(articleData, index) {
    const { urlToImage, title, description, url } = articleData;
    return urlToImage && (
      <ArticleBlock
        image={urlToImage}
        title={title}
        description={description}
        url={url}
        key={`${articleData.title}-${index}`}
      />
    )
  }

  render() {
    return (
      <div className="main-width article-section">
        <div className="row">
            {this.props.articles.map(this.renderArticle)}
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ articles }) {
  return { articles };
}

export default connect(mapStateToProps)(ArticleList);
