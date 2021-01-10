import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Produtos from './Produtos';
import Produto from './Produto';
import Contato from './Contato';
import Footer from './Footer';
import Page404 from './Page404';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Produtos />}></Route>
        <Route path="/produto/:id" element={<Produto />}></Route>
        <Route path="/contato" element={<Contato />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
