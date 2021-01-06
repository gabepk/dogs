import React from 'react';
import styles from './css/Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink activeClassName={styles.activeLink} to="/" end>
        Produtos
      </NavLink>
      <NavLink activeClassName={styles.activeLink} to="/contato">
        Contato
      </NavLink>
    </header>
  );
};

export default React.memo(Header);
