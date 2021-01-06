import React from 'react';
import styles from './css/Produtos.module.css';
import Head from './Head';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { Link } from 'react-router-dom';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchProdutos() {
      setLoading(true);
      try {
        const response = await fetch(
          'https://ranekapi.origamid.dev/json/api/produto',
        );
        const json = await response.json();
        setProdutos(json);
      } catch (err) {
        throw new Error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProdutos();
  }, []);

  if (loading) return <div className={styles.loader}></div>;
  if (!produtos) return <div>Nenhum produto no momento.</div>;
  return (
    <>
      <Head title="Loja | Produtos"></Head>
      <CardDeck className={styles.container}>
        {produtos.map((produto, index) => (
          <Card key={index} className={styles.item}>
            <Link key={index} to={`produto/${produto.id}`}>
              <Card.Img variant="top" src={produto.fotos[0].src}></Card.Img>
              <Card.Title className={styles.title}>{produto.nome}</Card.Title>
            </Link>
          </Card>
        ))}
      </CardDeck>
    </>
  );
};

export default Produtos;
