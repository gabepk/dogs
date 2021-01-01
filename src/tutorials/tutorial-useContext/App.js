import React from 'react';
import { GlobalStorage } from './GlobalContext';
import Produto from './Produto';

const App = () => {
  // Eh necessario criar um novo componente (Produto) para usar o useContext,
  // pois o App não é filho de GlobalStorage
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default App;
