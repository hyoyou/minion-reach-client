import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Intro from './components/Intro';
import GameContainer from './containers/GameContainer';
import Login from './containers/Login';
import Logout from './containers/Logout';
import Signup from './containers/Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={Intro} />
              <Route exact path='/play' component={GameContainer} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/logout' component={Logout} />
              <Route exact path='/signup' component={Signup} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
