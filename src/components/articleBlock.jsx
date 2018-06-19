import React, { PureComponent } from 'react';

export default class ArticleBlock extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      imageFailed: false,
    };

    this.handleError = this.handleError.bind(this);
  }

  handleError() {
    this.setState({ imageFailed: true });
  }

  render() {
    const { image, title, description, url } = this.props;
    return !this.state.imageFailed && (
      <div className="col-sm-12 col-md-6" >
        <div className="article__block">
          <div className="article__image-section">
            <img className="article__image" src={image} onError={this.handleError} />
          </div>
          <div className="article__content">
            <h3 className="article__title multilineTruncate">{title}</h3>
            <p className="article__description multilineTruncate">{description}</p>
            <a
              href={url}
              className="btn btn-dark article__button"
              role="button"
              aria-pressed="true"
              rel="noopener noreferrer"
              target="_blank"
            >Read More</a>
          </div>
        </div>
      </div>
    );
  }

}
