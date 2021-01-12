import React from 'react';
import styles from './Input.module.css';

/*
This Component can become too large as we add more attribute to the input field.
1. TODO: Improve way to add default input fields (props?).
2. TODO: Add aria labels for i18n
3. TODO: Add localization lib to translate texts on the webpage
*/
const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={styles.input}
      ></input>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
