import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    const { imgArr } = this.props;

    return imgArr.map(img => (
      <li key={img.id} onClick={event => this.props.getSelectedImg(img, event)}>
        {imgArr && (
          <img className={css.previeImg} src={img.webformatURL} alt={img.alt} />
        )}
      </li>
    ));
  }
}
