import React from 'react';
import TelefoneImg from './img/telefone.png';
import Head from './Head';
import styles from './css/Contato.module.css';

const Contato = () => {
  const contato = {
    email: 'gabriella@teste.com',
    cep: '00000-000',
    endereco: 'BSB SQN',
    img: TelefoneImg,
  };

  return (
    <>
      <Head title="Loja | Contato"></Head>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={contato.img} alt="Foto de um telefone antigo" />
        </div>
        <div>
          <p className={styles.title}> Entre em contato.</p>
          <ul className={styles.info}>
            <li>{contato.email}</li>
            <li>{contato.cep}</li>
            <li>{contato.endereco}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contato;
