import React from 'react';
import useForm from './Hooks/useForm';
import Input from './Form/Input';
import Radio from './Form/Radio';
import Checkbox from './Form/Checkbox';
import Select from './Form/Select';

const App = () => {
  const initialValues = {
    nome: '',
    cor: '',
    descricao: '',
    paises: [],
    profissao: '',
  };

  const {
    form,
    error,
    handleSingleChange,
    handleMultipleChange,
    validatesInput,
  } = useForm(initialValues);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="nome"
        label="Nome"
        type="text"
        onChange={handleSingleChange}
        onBlur={validatesInput}
        placeholder="Enter Password"
        required
        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
        title="Text must contain: Minimum 8 characters, at least 1 Alphabet and 1 Number"
        autoComplete="off"
      />
      <p>Nome: {form.nome}</p>
      <p>Erros: {error}</p>
      <hr />
      <Radio
        id="cor"
        label="Cor"
        options={['Vermelho', 'Amarelo', 'Azul']}
        onChange={handleSingleChange}
      />
      <p>Chosen: {form.cor}</p>
      <hr />
      <Input
        id="descricao"
        label="Descricao"
        type="textarea"
        onChange={handleSingleChange}
        rows="5"
        cols="50"
      />
      <p>Descricao: {form.descricao}</p>
      <hr />
      <Checkbox
        id="paises"
        label="Países"
        options={['Brasil', 'Luxembourg', 'Etats Unids']}
        onChange={handleMultipleChange}
      />
      <p>Chosen: {form.paises.map((p) => p)}</p>
      <hr />
      <Select
        id="profissao"
        label="Profissao"
        options={['Pedreiro', 'Dentista', 'Faxineira de Casa']}
        onChange={handleSingleChange}
      />
      <p>Chosen: {form.profissao}</p>
      <hr />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
