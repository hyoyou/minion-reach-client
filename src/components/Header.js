import React, { Component } from 'react';
import { connect } from 'react-redux'

import NavBar from './NavBar';
import NavBarSession from './NavBarSession';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">
                    <a href="/">
                        <span className="minion">minion</span> 
                        <span className="reach">/REACH/</span>
                    </a>
                </h1>
                { this.props.session ? <NavBarSession /> : <NavBar /> }
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        session: state.session.session
    }
}

export default connect(mapStateToProps)(Header);