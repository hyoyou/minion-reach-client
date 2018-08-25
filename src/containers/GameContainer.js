import React, { Component } from 'react';

export default class GameContainer extends Component {
    render() {
        return (
            <div className="container">
                Guesses Left: 6
                <br />
                Game:

                _ _ _ _ _
                <br />
                Wrong Guesses: 
            </div>
        )
    }
}