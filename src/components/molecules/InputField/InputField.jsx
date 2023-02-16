import React from 'react';
import PropTypes from 'prop-types';
import './InputField.scss';
import Input from '../../atoms/Input/Input';


export const InputField = ({ id, size, label, placeholder, type, ...props }) => {
  return (
    <div>
        <label id = {id} className="block">{label}</label>
        <Input
            type={type}
            placeholder={placeholder}
            id={id}
        />
    </div> 
  );
};


InputField.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    id: PropTypes.string,
 
    type: PropTypes.string,
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
    label: PropTypes.string,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
    // isLoading: PropTypes.bool
  };
  
  InputField.defaultProps = {
    // backgroundColor: undefined,
    id: null,
    label: "InputField",
    size: "medium",
    isLoading: false,
    type: null
  };
  