import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  return (
    <div>
      <h1>Produtos:</h1>
      <ul>
        {global.dados &&
          global.dados.map((dado) => {
            return <li key={dado.id}>{dado.nome}</li>;
          })}
      </ul>

      <button onClick={global.limpaDados}>Limpar</button>
    </div>
  );
};

export default Produto;
