import React from 'react';

const useForm = (initialValues) => {
  const [form, setForm] = React.useState({ ...initialValues });

  function handleSingleChange({ target }) {
    const { id, name, value } = target;
    const key = id || name;
    setForm({ ...form, [key]: value });
  }

  function handleMultipleChange({ target }) {
    const { id, name, value, checked } = target;
    const key = id || name;

    const checkedValues = form[key];
    if (checked) {
      checkedValues.push(value);
    } else {
      const targetIndex = checkedValues.indexOf(value);
      checkedValues.splice(targetIndex, 1);
    }
    setForm({ ...form, [key]: checkedValues });
  }

  return { form, handleSingleChange, handleMultipleChange };
};

export default useForm;
