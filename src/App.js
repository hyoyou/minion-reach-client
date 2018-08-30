import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import GameContainer from './containers/GameContainer';
import Header from './components/Header';
import Intro from './containers/Intro';
import Leaderboard from './containers/Leaderboard';
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
                        { this.props.error ? <p className="page-error">{ this.props.error }</p> : '' }
                        <Switch>
                            <Route exact path='/' component={Intro} />
                            <Route exact path='/play' component={GameContainer} />
                            <Route exact path='/leaderboard' component={Leaderboard} />
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

const mapStateToProps = (state) => {
    return {
        error: state.error.error
    }
}

export default connect(mapStateToProps)(App);
