import React, { Component } from 'react';

export default class Game extends Component {
    state = {
        alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }

    render() {
        let { wrongGuesses, gameState } = this.props;

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
                    PASSCODE: 
                    <div className={this.props.lives !== 0 ? "passcode" : "passcode-miss"}>
                        {gameState.length > 1 && gameState.join(' ')}
                    </div>
                    <br />
                    <ul className="keyboard">
                        {this.state.alphabet.map((letter, id) =>
                            <li key={id}><button type="button" className={`btn btn-${wrongGuesses.includes(letter) || gameState.includes(letter) ? "secondary" : "primary"}`} onClick={(event) => this.props.checkGuess(event.target.innerText)}>{letter}</button></li>
                        )}
                    </ul>
                    {/* Wrong Guesses: {wrongGuesses && wrongGuesses.join(' ')} */}
                </div>
            </div>
        )
    }
}