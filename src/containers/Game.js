import React, { Component } from 'react';

export default class Game extends Component {
    render() {
        return (
            <div className="game-container">
                {/* <button type="button" className="btn btn-primary">Start Game</button>
                <div className="difficulty">
                    Difficulty: 
                    <button type="button" className="btn btn-warning">Easy</button> 
                    <button type="button" className="btn btn-primary">Normal</button> 
                    <button type="button" className="btn btn-warning">Hard</button> 
                    <button type="button" className="btn btn-warning">BANANAS</button>
                </div> */}
                <div className="lives-left">
                    Lives Left: {this.props.lives}
                </div>
                <div className="game">
                    {this.props.gameState.length > 1 && this.props.gameState.join(' ')}
                    <br />
                    Wrong Guesses: {this.props.wrongGuesses && this.props.wrongGuesses.join(' ')}
                </div>
            </div>
        )
    }
}