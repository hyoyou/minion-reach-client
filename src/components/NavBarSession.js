import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarSession = () => {
    return (
        <div className="navi">
            <NavLink to="/leaderboard">Leaderboard</NavLink>
            <NavLink to="/logout">Log Out</NavLink>
        </div>
    );
}

export default NavBarSession;