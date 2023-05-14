import React, { Component } from 'react';
import { ProgressBar } from 'react-loader-spinner';

export default class Loader extends Component {
  render() {
    const { loading } = this.props.loadingMsg;
    return (
      loading && (
        <div style={{ marginLeft: 880 }}>
          {' '}
          <ProgressBar
            height="100"
            width="100"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="black"
            barColor="black"
          />
        </div>
      )
    );
  }
}
