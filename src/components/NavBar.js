import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navi">
            <NavLink to="/leaderboard">leaderboard</NavLink>
            <NavLink to="/login">log in</NavLink>
            <NavLink to="/signup">sign up</NavLink>
        </div>
    );
}

export default NavBar;