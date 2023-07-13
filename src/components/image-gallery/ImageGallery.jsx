import PropTypes from 'prop-types';
import ImageGalleryItem from '../image-gallery-item';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className="ImageGallery">
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        src={webformatURL}
        alt={id}
        largeImage={largeImageURL}
        onClick={() => onImageClick(largeImageURL)}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;