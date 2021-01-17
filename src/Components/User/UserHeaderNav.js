import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as FeedSVG } from '../../Assets/feed.svg';
import { ReactComponent as StatsSVG } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddSVG } from '../../Assets/adicionar.svg';
import { ReactComponent as LogoutSVG } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width:40rem)');

  // Hides menu when url changes
  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
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
    </>
  );
};

export default UserHeaderNav;
