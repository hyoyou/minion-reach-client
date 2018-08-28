import React from 'react';

const LeaderboardTable = ({ users }) => {
    return (
        <div className="leaderboard-container">
            <h2>Current Leaderboard</h2>
            { users.length > 0 &&
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, id) =>
                            <tr key={user.id}>
                                <td className="rank">{id + 1}</td>
                                <td className="username">{user.username}</td>
                                <td className="score">{user.score}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default LeaderboardTable