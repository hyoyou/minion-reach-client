import React, { Component } from 'react';
import './App.css';
import GameContainer from './containers/GameContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title"><span className="minion">minion</span> <span className="reach">/REACH/</span></h1>
          <p>Leaderboard Login Sign Up</p>
        </header>
        <GameContainer />
      </div>
    );
  }
}

export default App;
