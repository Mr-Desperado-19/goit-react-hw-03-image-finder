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
    const { src, tags } = this.props;

    return (
      <li className="Image-Gallery_Item">
        <img
          src={src}
          alt={tags}
          className="ImageGalleryItem-image"
          onClick={this.handleClick}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;