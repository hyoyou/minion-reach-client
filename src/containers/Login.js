import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { loginUser } from '../actions/sessionActions';

class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    onInput = ({ target: { name, value } }) => {
        this.setState({ [name]: value })
    }

    // Log in user then navigate to game play page
    onLogin = event => {
        const { loginUser, user, history } = this.props;
        event.preventDefault();

        loginUser(this.state);
        history.push('/play');
    }

    render() {
        const { username, password } = this.state;
        
        return (
            <div className="user-container">
                <h2>Log In</h2>
                <form>
                    <label className="col-sm-2 col-form-label" htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={(event) => this.onInput(event)}
                    />
                    <br />

                    <label className="col-sm-2 col-form-label" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => this.onInput(event)}
                    />
                    <br />

                    <button type="submit" className="btn btn-primary btn-margin" onClick={this.onLogin}>Log In</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.session.user
    }
}

export default withRouter(connect(mapStateToProps, { loginUser })(Login));