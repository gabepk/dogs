import React from 'react';

const Button = ({ text, setNomeProduto }) => {
  console.log('button');

  function handleClick() {
    setNomeProduto(text);
  }

  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
