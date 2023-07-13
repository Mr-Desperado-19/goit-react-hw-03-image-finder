import PropTypes from 'prop-types';

const Button = ({ onClick }) => (
  <button type="button" className="btn" onClick={onClick}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;

// import PropTypes from 'prop-types';

// const ImageGalleryItem = ({ src, alt, largeImage, onClick }) => (
//   <li className="ImageGalleryItem">
//     <img
//       src={src}
//       alt={alt}
//       className="ImageGalleryItem-image"
//       onClick={onClick}
//     />
//   </li>
// );

// ImageGalleryItem.propTypes = {
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
//   largeImage: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

// export default ImageGalleryItem;