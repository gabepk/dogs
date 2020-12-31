import React from 'react';

const Item = ({ item, setMessage }) => {
  //if (!Object.keys(item).length) return null;

  // A verificacao acima foi substituida por:
  // {item && <Item item={item} />} no App.js

  console.log('item');

  return (
    <div>
      <p>{item.nome}</p>
      <p>Preço: {item.preco}</p>
      <p>Descrição: {item.descricao}</p>
      <p>{item.vendido ? 'Produto não está em estoque' : 'Em estoque'}</p>
      <p>Email do vendedor: {item.usuario_id}</p>
      <ul>
        {item.fotos.map((foto, index) => {
          const key = item.id + '_image_' + index;
          return (
            <li key={key}>
              <img alt={foto.titulo} src={foto.src} width="100" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Item;
