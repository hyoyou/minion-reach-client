import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Game extends Component {
    state = {
        alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }

    render() {
        const { alphabet } = this.state;
        const { wrongGuesses, gameState, checkGuess, restart, lives, difficulty, user } = this.props;
   
        return (
            <div className="game">
                <p className="directions">
                    <span className="red-underline">YOUR MISSION:</span> The minions locked us out of our banana farm! It only takes 6 minions to /REACH/ the bananas. Decipher the code to stop them!
                </p>
                <div className="game-board">
                    <div className="game-stats">
                        <span className="replay-game">
                            <button onClick={restart}>&#8634; New Game</button>
                        </span>
                        <span className="lives-left">Lives Left: {lives}</span>
                    </div>
                    <div className="game-guess">
                        PASSCODE:
                        <div className={lives !== 0 ? "passcode" : "passcode-miss"}>
                            {gameState.length > 1 && gameState.join(' ')}
                        </div>
                        
                        <div className="wrong-guess">Wrong Guesses: {wrongGuesses.join(', ')}</div>
                        <br />
                        
                        <ul className="keyboard">
                            {alphabet.map((letter, id) =>
                                <li key={id}>
                                    {/* Change color of keyboard for letters that have already been guessed */}
                                    <button 
                                        type="button" 
                                        className={`btn btn-${wrongGuesses.includes(letter) || gameState.includes(letter) ? "secondary" : "primary"}`} 
                                        onClick={(event) => checkGuess(event.target.innerText)}
                                    >
                                        {letter}
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="difficulty">
                    difficulty: {difficulty} <NavLink to='/'>change?</NavLink>
                </div>
                { user.id &&
                    <div className="user-score">
                        your score: {user.score}
                    </div>
                }
            </div>
        );
    }
}