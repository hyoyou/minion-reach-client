import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';

import NavBar from './NavBar';
import NavBarSession from './NavBarSession';

class Header extends Component {
    render() {
        const { session } = this.props;
        
        return (
            <header className="App-header">
                <h1 className="App-title">
                    <NavLink to="/">
                        <span className="minion">minion</span> 
                        <span className="reach">/REACH/</span>
                    </NavLink>
                </h1>
                {/* Display navbar according to whether user has logged in or not */}
                { session ? <NavBarSession /> : <NavBar /> }
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        session: state.session.session
    }
}

export default connect(mapStateToProps)(Header);