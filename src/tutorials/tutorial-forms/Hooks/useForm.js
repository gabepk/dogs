import React from 'react';

const useForm = (initialValues) => {
  const [form, setForm] = React.useState({ ...initialValues });
  const [error, setError] = React.useState(null);

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

  function validatesInput({ target }) {
    const { id, value, required, pattern, title } = target;
    if (required && !value) {
      setError('Preencha o campo obrigatório: ' + id);
    } else if (value && pattern) {
      const regex = new RegExp(pattern);
      regex.test(value)
        ? setError(null)
        : setError(title || 'Entrada inválida no campo: ' + id);
    } else {
      setError(null);
    }
  }

  return {
    form,
    error,
    handleSingleChange,
    handleMultipleChange,
    validatesInput,
  };
};

export default useForm;
