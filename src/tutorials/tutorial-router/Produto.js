import React from 'react';
import styles from './css/Produto.module.css';
import Head from './Head';
import { useParams } from 'react-router-dom';

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://ranekapi.origamid.dev/json/api/produto/${id}`,
        );
        const json = await response.json();
        setProduto(json);
      } catch (err) {
        throw new Error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduto();
  }, []);

  if (loading) return <div className={styles.loader}></div>;
  if (!produto) return null;
  return (
    <>
      <Head title={`Loja | ${produto.nome}`}></Head>
      <div className={styles.container}>
        <div className={styles.image}>
          {produto.fotos.map((foto) => {
            return <img key={foto.src} src={foto.src} alt={foto.titulo} />;
          })}
        </div>
        <div>
          <p className={styles.title}>{produto.nome}</p>
          <p className={styles.preco}>R$ {produto.preco}</p>
          <p className={styles.descricao}>{produto.descricao}</p>
        </div>
      </div>
    </>
  );
};

export default Produto;
