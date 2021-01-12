import React from 'react';

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Invalid email',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  /*
  This function uses the custom validator 'types'. This could be usefull for uncommon inputs (not emails as above).
  For common inputs, we can use HTML5 validation, with :invalid css pseudo-class.
  For regex, we can use the pattern attribute.
  For custom validation, the js func setCustomValidity() only triggers onSubmit, so it's bad for customer xp.
  TODO: Improve common field validation with HTML5 and I18N/L10N
  https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
  */
  function validate(value) {
    if (type === false) return true;

    if (value.length === 0) {
      setError('Mandatory field');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    // Check if error exists, otherwise it will show error while user is typing
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
