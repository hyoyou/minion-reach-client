import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navi">
      <NavLink
        style={{ marginRight: '10px' }}
        to="/leaderboard"
      >
        leaderboard
      </NavLink>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/login"
      >
        log in
      </NavLink>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/signup"
      >
        sign up
      </NavLink>
    </div>
  );
}

export default NavBar;