import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as FeedSVG } from '../../Assets/feed.svg';
import { ReactComponent as StatsSVG } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddSVG } from '../../Assets/adicionar.svg';
import { ReactComponent as LogoutSVG } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/account" end activeClassName={styles.active}>
        <FeedSVG /> {mobile && 'My photos'}
      </NavLink>
      <NavLink to="/account/stats" activeClassName={styles.active}>
        <StatsSVG /> {mobile && 'Stats'}
      </NavLink>
      <NavLink to="/account/post" activeClassName={styles.active}>
        <AddSVG /> {mobile && 'Add photo'}
      </NavLink>
      <button onClick={userLogout}>
        <LogoutSVG /> {mobile && 'Log out'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
