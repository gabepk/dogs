import React from 'react';

const Select = ({ id, label, options, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={id} {...props}>
        <option disabled value="">
          Select one {label}
        </option>
        {options.map((option) => {
          return (
            <option
              key={'select' + option}
              value={option.replaceAll(' ', '').toLowerCase()}
            >
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
