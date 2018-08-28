import React, { Component } from 'react';

import NavBar from './NavBar';

export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">
                    <a href="/">
                        <span className="minion">minion</span> 
                        <span className="reach">/REACH/</span>
                    </a>
                </h1>
                <NavBar />
            </header>
        )
    }
}