import React from 'react';

const Input = (props) => {
  return (
    <input className={props.className} name={props.name} type={props.type} placeholder={props.placeholder} />
  )
}

export default Input ;