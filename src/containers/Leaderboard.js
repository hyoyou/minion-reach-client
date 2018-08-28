import React, { Component } from 'react';

import LeaderboardTable from '../components/LeaderboardTable';

export default class Leaderboard extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/users/leaderboard')
            .then(response => response.json())
            .then(result => {
                this.setState({ users: result.users})
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <LeaderboardTable users={this.state.users} />
        )
    }
}