import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';
import React, { Component } from 'react';
import css from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = {
    showModal: false,
    selectedImage: null,
  };

  getSelectedImg = img => {
    console.log(img.largeImageURL);
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      selectedImage: img,
    }));
  };

  closeModal = event => {
    event.stopPropagation();
    if (event.target !== event.currentTarget && this.state.showModal) {
      return;
    }
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { showModal, selectedImage } = this.state;
    const { getSelectedImg, closeModal } = this;
    return (
      <ul className={css.galleryItem}>
        <ImageGalleryItem
          imgArr={this.props.imgArr}
          getSelectedImg={getSelectedImg}
        />
        {showModal && selectedImage && (
          <Modal
            bigImg={selectedImage.largeImageURL}
            onClose={closeModal}
            alt={selectedImage.tags}
          />
        )}
      </ul>
    );
  }
}
