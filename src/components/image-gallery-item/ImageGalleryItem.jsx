import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
  };

  handleClick = () => {
    const { webformatURL, tags } = this.props;
    this.props.onSelect({ largeImageURL: webformatURL, tags });
  };

  render() {
    const { webformatURL, tags } = this.props;

    return (
      <li className="ImageGalleryItem">
        <img
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
          onClick={this.handleClick}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;