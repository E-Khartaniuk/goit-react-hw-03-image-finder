import React, { Component } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import css from '../Modal/Modal.module.css';

export class Modal extends Component {
  state = {
    imageLoaded: false,
  };
  handleImageLoad = () => {
    this.setState(prevState => ({
      imageLoaded: !prevState.imageLoaded,
    }));
  };
  render() {
    const { imageLoaded } = this.state;
    const { bigImg, onClose, alt } = this.props;
    // console.log(this.props.img);
    return (
      <div className={css.overlay} onClick={event => onClose(event)}>
        <div className={css.modal}>
          <img
            src={bigImg}
            alt={alt}
            className={css.bigImg}
            onLoad={this.handleImageLoad}
          />
          {!imageLoaded && (
            <ProgressBar
              height="80"
              width="380"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass="progress-bar-wrapper"
              borderColor="black"
              barColor="black"
            />
          )}
        </div>
      </div>
    );
  }
}
