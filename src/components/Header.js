import React, { Component } from 'react';

import NavBar from './NavBar';

export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">
                    <span className="minion">minion</span> 
                    <span className="reach">/REACH/</span>
                </h1>
                <NavBar />
            </header>
        )
    }
}