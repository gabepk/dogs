import React from 'react';

const baseUrl = 'https://ranekapi.origamid.dev/json/api/produto/';

const Button = ({ text, setMessage, setItem }) => {
  const url = baseUrl + text;

  console.log('button');

  async function fetchInformation() {
    console.log('fetchInformation');
    setMessage('Loading...');
    await fetch(url)
      .then((response) => {
        response
          .json()
          .then((data) => {
            setItem(data);
            setMessage('');
          })
          .catch((error) => {
            console.log(error);
            setMessage('Erro 1');
          });
      })
      .catch((error) => {
        console.log(error);
        setMessage('Erro 2');
      });
  }

  return <button onClick={fetchInformation}>{text}</button>;
};

export default Button;
