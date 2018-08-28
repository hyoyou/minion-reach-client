import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { signupUser } from '../actions/sessionActions';

class SignUp extends Component {
  state = {
    username: '',
    password: ''
  };

  onInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSignup = event => {
    event.preventDefault();

    this.props.signupUser(this.state)
  }

  render() {
    if (this.props.user.id) {
      return (
        <Redirect to='/play' />
      )
    }

    return (
      <div style={{ marginTop: '50px' }}>
        <form>
          <label className="col-sm-2 col-form-label" htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={(event) => this.onInput(event)}
          />
          <br />

          <label className="col-sm-2 col-form-label" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(event) => this.onInput(event)}
          />
          <br />

          <button type="submit" className="btn btn-primary btn-margin" onClick={this.onSignup}>Sign Up</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.session.user
  }
}

export default withRouter(connect(mapStateToProps, { signupUser })(SignUp));