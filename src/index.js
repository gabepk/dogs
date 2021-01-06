import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  // O modo estrito invoca duas vezes a renderização do componente, quando o estado é atualizado.
  // Assim é possível identificarmos funções com efeitos coláterais (side effects) e eliminarmos as mesmas.
  // Efeito colateral: quando +1 sets estão encadeados. Exemplo: setItem(() => setMessage("Item is ready"));
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
