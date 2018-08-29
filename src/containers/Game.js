import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Game extends Component {
    state = {
        alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }

    render() {
        let { wrongGuesses, gameState } = this.props;
        console.log("Passed in wrong:", wrongGuesses)
        console.log("Passed in state:", gameState)
        return (
            <div className="game">
                <p className="directions"><span className="red-underline">YOUR MISSION:</span> The minions locked us out of our banana farm! It only takes 6 minions to /REACH/ the bananas. Decipher the code to stop them!</p>
                <div className="game-board">
                    <div className="game-stats">
                        <span className="replay-game">
                            <button onClick={this.props.restart}>&#8634; New Game</button>
                        </span>
                        <span className="lives-left">Lives Left: {this.props.lives}</span>
                    </div>
                    <div className="game-guess">
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
                    </div>
                </div>
                <div className="difficulty">
                    difficulty: {this.props.difficulty} <NavLink to='/'>change?</NavLink>
                </div>
                { this.props.user.id &&
                    <div className="user-score">
                        your score: {this.props.user.score}
                    </div>
                }
            </div>
        )
    }
}

export default Game;