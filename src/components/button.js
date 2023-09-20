import PropTypes from 'prop-types';

function Button({
  value, handleClick, className,
}) {
  return (
    <button type="button" className={className} onClick={() => handleClick(value)}>{value}</button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export function handleButtonClick(value) {
  console.log(`Button ${value} clicked`);
}

export default Button;
