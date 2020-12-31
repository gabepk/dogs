import React from 'react';

const Produto = ({ nomeProduto }) => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const BASE_URL = 'https://ranekapi.origamid.dev/json/api/produto/';

    if (nomeProduto) {
      const url = BASE_URL + nomeProduto;
      fetch(url)
        .then((response) => response.json())
        .then((data) => setProduto(data));
    }
  }, [nomeProduto]);

  if (!produto) return null;
  return (
    <div>
      <h1>{produto.nome}</h1>
      <p>R$ {produto.preco}</p>
    </div>
  );
};

export default Produto;
