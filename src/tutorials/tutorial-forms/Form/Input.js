import React from 'react';

const Input = ({ id, label, type, ...props }) => {
  return (
    <label htmlFor={id}>
      {label}
      <input id={id} name={id} {...props} />
    </label>
  );
};

export default Input;
