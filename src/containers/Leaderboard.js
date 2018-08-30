import React, { Component } from 'react';

import LeaderboardTable from '../components/LeaderboardTable';

export default class Leaderboard extends Component {
    state = {
        users: []
    }

    // Fetch leaderboard data from API, save to React state
    componentDidMount() {
        fetch('http://localhost:3001/api/users/leaderboard')
            .then(response => response.json())
            .then(result => {
                this.setState({ users: result.users})
            })
            .catch(error => console.log(error))
    }

    render() {
        const { users } = this.state;

        return  <LeaderboardTable users={users} />;
    }
}