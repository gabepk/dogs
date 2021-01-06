import React from 'react';
import styles from './Produtos.module.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    async function fetchProdutos() {
      const response = await fetch(
        'https://ranekapi.origamid.dev/json/api/produto',
      );
      const json = await response.json();
      console.log(json);

      setProdutos(json);
    }
    fetchProdutos();
  }, []);

  if (!produtos) return null;
  return (
    <CardDeck className={styles.container}>
      {produtos.map((produto, index) => (
        <Card key={index} className={styles.item}>
          <Card.Img variant="top" src={produto.fotos[0].src}></Card.Img>
          <Card.Title className={styles.title}>{produto.nome}</Card.Title>
        </Card>
      ))}
    </CardDeck>
  );
};

export default Produtos;
