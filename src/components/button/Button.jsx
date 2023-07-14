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