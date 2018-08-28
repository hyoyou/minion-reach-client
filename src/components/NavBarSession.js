import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarSession = () => {
  return (
    <div className="navi">
      <NavLink
        style={{ marginRight: '10px' }}
        to="/leaderboard"
      >
        Leaderboard
      </NavLink>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/logout"
      >
        Log Out
      </NavLink>
    </div>
  );
}

export default NavBarSession;