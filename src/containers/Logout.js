import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { logout } from '../actions/sessionActions';

class Logout extends Component {
    // Redirect to game play page upon logout
    onLogout = event => {
        const { logout, history } = this.props;
        event.preventDefault();

        logout();
        history.push('/play');
    }

    render() {
        const { user } = this.props;

        if (user) {
            return (
                <div className="user-container">
                    <h2>Are you sure you want to log out?</h2>
                    <button className="btn btn-primary btn-margin" onClick={(event) => this.onLogout(event)}>Logout</button>
                </div>
            );
        }

        return <Redirect to='/play' />;
    }
}

const mapStateToProps = state => {
    return {
        user: state.session.user
    }
}

export default withRouter(connect(mapStateToProps, { logout })(Logout));