import React from 'react';
import Titulo from './Titulo';
import './AppTutorial01.css';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

// Componente de cada produto
const Produto = ({ nome, propriedades }) => {
  return (
    <li key={nome}>
      <p>{nome}</p>
      <ul id="propriedades">
        {propriedades.map((prop) => (
          <li key={prop}>{prop}</li>
        ))}
      </ul>
    </li>
  );
};

const Produtos = () => {
  return (
    <div>
      <Titulo label="Produtos" />
      <ul id="produtos">
        {produtos.map((produto) => (
          <Produto {...produto} />
        ))}
      </ul>
    </div>
  );
};

export default Produtos;
