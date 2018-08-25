import React, { Component } from 'react';
import logo from './decorative_bananas.png';
import './App.css';
import GameContainer from './containers/GameContainer';
import Minions from './containers/Minions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Minion /REACH/</h1>
          <p>Leaderboard Login Sign Up</p>
        </header>
        <GameContainer />
        <Minions />
      </div>
    );
  }
}

export default App;
