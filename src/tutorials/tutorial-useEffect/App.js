import React from 'react';
import Button from './Button';
import Produto from './Produto';

const App = () => {
  const [nomeProduto, setNomeProduto] = React.useState(null);

  React.useEffect(() => {
    const nomeProdutoLocal = window.localStorage.getItem('produto');
    if (nomeProdutoLocal) setNomeProduto(nomeProdutoLocal);
  }, []);

  React.useEffect(() => {
    if (nomeProduto) window.localStorage.setItem('produto', nomeProduto);
  }, [nomeProduto]);

  return (
    <>
      <Button text="Tablet" setNomeProduto={setNomeProduto} />
      <Button text="Smartphone" setNomeProduto={setNomeProduto} />
      <Button text="Notebook" setNomeProduto={setNomeProduto} />

      <Produto nomeProduto={nomeProduto} />
    </>
  );
};

export default App;
