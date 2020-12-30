import React from 'react';
import Header from './Header';
import './AppTutorial01.css';
import Home from './Home';
import Produtos from './Produtos';

const AppTutorial01 = () => {
  return (
    <>
      <Header />
      {window.location.href.indexOf('produtos') < 0 ? <Home /> : <Produtos />}
    </>
  );
};

export default AppTutorial01;
