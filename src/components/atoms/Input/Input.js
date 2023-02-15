import React from 'react';

const Input = ({ className,type, name, placeholder, onChange }) => {
  return (
    <input
    className={className}
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    ></input>
  )
}

export default Input ;