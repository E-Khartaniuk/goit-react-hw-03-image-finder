import React, { Component } from 'react';
import css from './Button.module.css';
export class Button extends Component {
  render() {
    const { images, loading } = this.props.loadMore;
    return (
      images.length > 0 &&
      !loading && (
        <button className={css.loadMore} onClick={this.props.loadMoreImages}>
          Load more
        </button>
      )
    );
  }
}
