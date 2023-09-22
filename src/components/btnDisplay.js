import React from 'react';
import PropTypes from 'prop-types';

function ButtonDisplay({ result }) {
  console.log(result);
  return <div>{result}</div>;
}

ButtonDisplay.defaultProps = {
  result: 0,
};

ButtonDisplay.propTypes = {
  result: PropTypes.string,
};

export default ButtonDisplay;
