import React, { Component } from 'react';
import logo from './decorative_bananas.png';
import './App.css';
import GameContainer from './containers/GameContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Minion /REACH/</h1>
          <p>Leaderboard Login Sign Up</p>
        </header>
        <p className="App-intro">
          <button type="button" class="btn btn-primary">Start Game</button>
          <br />
          Difficulty: <button type="button" className="btn btn-warning">Easy</button> <button type="button" class="btn btn-primary">Normal</button> <button type="button" className="btn btn-warning">Hard</button> <button type="button" className="btn btn-warning">BANANAS</button>
        </p>
        <GameContainer />
      </div>
    );
  }
}

export default App;
