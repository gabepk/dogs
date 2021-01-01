import React from 'react';

const Button = ({ text, setNomeProduto }) => {
  console.log('button');

  function handleClick() {
    console.log(text);
    setNomeProduto(text);
  }

  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
