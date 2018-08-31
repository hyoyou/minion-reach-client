import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signupUser } from '../actions/sessionActions';

class SignUp extends Component {
	state = {
		username: '',
		password: ''
	};

	onInput = ({ target: { name, value } }) => {
        this.setState({ [name]: value })
    }

	// Sign up user then navigate to game play page
	onSignup = event => {
		const { signupUser, user, history } = this.props;
		event.preventDefault();

		signupUser(this.state);
		
		if (user.id) {
            history.push('/play');
        }
	}

	render() {
		const { username, password } = this.state;

		return (
			<div className="user-container">
				<h2>Sign Up</h2>
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

					<button type="submit" className="btn btn-primary btn-margin" onClick={this.onSignup}>Sign Up</button>
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

export default withRouter(connect(mapStateToProps, { signupUser })(SignUp));