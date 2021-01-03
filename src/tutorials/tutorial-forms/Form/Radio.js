import React from 'react';

const Radio = ({ id, label, options, ...props }) => {
  return (
    <fieldset id={id}>
      <b>{label}</b>

      {options.map((option) => {
        return (
          <label key={'labelRadio' + option}>
            {option}
            <input
              key={'radio' + option}
              type="radio"
              name={id}
              value={option.replaceAll(' ', '').toLowerCase()}
              {...props}
            />
          </label>
        );
      })}
    </fieldset>
  );
};

export default Radio;
