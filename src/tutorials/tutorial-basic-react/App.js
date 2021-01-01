import React from 'react';
import Header from './Header';
import './App.css';
import Home from './Home';
import Produtos from './Produtos';

const App = () => {
  return (
    <>
      <Header />
      {window.location.href.indexOf('produtos') < 0 ? <Home /> : <Produtos />}
    </>
  );
};

export default App;
