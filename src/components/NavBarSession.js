import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarSession = () => {
    return (
        <div className="navi">
            <NavLink to="/leaderboard">leaderboard</NavLink>
            <NavLink to="/logout">log out</NavLink>
        </div>
    );
}

export default NavBarSession;