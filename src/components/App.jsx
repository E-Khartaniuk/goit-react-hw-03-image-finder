import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import Loader from './Loader/Loader';

import { getFeth, loadMore } from './services/loadMoreImages';

export class App extends Component {
  state = {
    inputValue: '',
    images: [],
    page: 1,
    loading: false,
  };
  // togleModal = () => {
  //   this.setState(prevState => ({ showModal: !prevState.showModal }));
  // };

  componentDidUpdate(prevProps, prevState) {
    const query = this.state.inputValue.trim();
    if (query === '') {
      return;
    }

    if (prevState.inputValue !== this.state.inputValue) {
      getFeth(query)
        .then(data => {
          this.setState({ images: data.hits });
        })
        .catch(error => {
          console.log('Error fetching images from Pixabay:', error);
        });
    }
  }

  loadMoreImages = () => {
    const { inputValue, page } = this.state;
    const nextPage = page + 1;

    this.setState({ loading: true });

    loadMore(inputValue, nextPage)
      .then(data => {
        const newImages = [...this.state.images, ...data.hits];
        this.setState({
          images: newImages,
          page: nextPage,
          loading: false,
        });
      })
      .catch(error => {
        console.log('Error fetching images from Pixabay:', error);
        this.setState({ loading: false });
      });
  };

  hendleSubmit = inputValue => {
    this.setState({
      inputValue: inputValue,
    });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.hendleSubmit} />
        <ImageGallery imgArr={this.state.images}>
          <ImageGalleryItem />
        </ImageGallery>
        <Loader loadingMsg={this.state} />
        <Button loadMore={this.state} loadMoreImages={this.loadMoreImages} />
      </div>
    );
  }
}
