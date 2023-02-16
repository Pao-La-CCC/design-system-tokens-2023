import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
import { TextField } from '../../atoms/TextField/TextField';
import { LoadingSpinner } from '../../atoms/Spinner/LoadingSpinner';

export const Button = ({ primary, backgroundColor, size, label, onClick, isLoading, ...props }) => {
  const mode = primary ? 'btn-bg--primary' : 'storybook-button--secondary';
  // const isLoading = false;

  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      // style={backgroundColor && { backgroundColor }}
      {...props}
    >
        <TextField  tag='standardText' sizeElement="simple" text={ !isLoading && label} /> 
        {isLoading && <LoadingSpinner className="spinner-size" />}
    </button> 
  );
};




Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  // backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  isLoading: PropTypes.bool
};

Button.defaultProps = {
  // backgroundColor: undefined,
  primary: false,
  size: "medium",
  onClick: undefined,
  isLoading: false
};
