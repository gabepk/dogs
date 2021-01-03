import React from 'react';

const Checkbox = ({ id, label, options, ...props }) => {
  return (
    <fieldset id={id}>
      <b>{label}</b>

      {options.map((option) => {
        return (
          <label key={'labelCheckbox' + option}>
            {option}
            <input
              key={'checkbox' + option}
              type="checkbox"
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

export default Checkbox;
