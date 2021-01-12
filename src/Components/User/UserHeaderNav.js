import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as FeedSVG } from '../../Assets/feed.svg';
import { ReactComponent as StatsSVG } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddSVG } from '../../Assets/adicionar.svg';
import { ReactComponent as LogoutSVG } from '../../Assets/sair.svg';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav>
      <NavLink to="/account">
        <FeedSVG /> My photos
      </NavLink>
      <NavLink to="/account/stats">
        <StatsSVG /> Stats
      </NavLink>
      <NavLink to="/account/post">
        <AddSVG /> Add photo
      </NavLink>
      <button onClick={userLogout}>
        <LogoutSVG /> Log out
      </button>
    </nav>
  );
};

export default UserHeaderNav;
