import React, { Component } from 'react';

export default class GameContainer extends Component {
    state = {
        word: '',
        gameState: [],
        wrongGuesses: [],
        lives: 6,
        difficulty: 3
    }

    componentDidMount() {
        // send Get request with difficulty level to get a new word
        let secretWord = "banana";

        this.setState({
            word: secretWord
        })

        this.startGame(secretWord);
    }

    startGame = (secretWord) => {
        let gameStart = [];
        for (let i = 0; i < secretWord.length; i++) {
            gameStart.push('_');
        }

        this.setState({
            gameState: gameStart
        })
    }

    handleInput = (event) => {
        // console.log(event.key)
        let updatedGameState = this.state.gameState;

        if (this.state.word.indexOf(event.key) > -1) {
            updatedGameState[this.state.word.indexOf(event.key)] = event.key
            this.setState({ gameState: updatedGameState })
        } else {
            this.setState({ wrongGuesses: [...this.state.wrongGuesses, event.key] })
        }
    }

    render() {
        return (
            <div className="container" tabIndex="0" onKeyDown={this.handleInput}>
                <button type="button" className="btn btn-primary">Start Game</button>
                <div className="difficulty">
                    Difficulty: 
                    <button type="button" className="btn btn-warning">Easy</button> 
                    <button type="button" className="btn btn-primary">Normal</button> 
                    <button type="button" className="btn btn-warning">Hard</button> 
                    <button type="button" className="btn btn-warning">BANANAS</button>
                </div>
                <div className="livesLeft">
                    Lives Left: {this.state.lives}
                </div>
                <div className="game">
                    Game:

                    {this.state.gameState.length > 1 && this.state.gameState.join(' ')}
                    <br />
                    Wrong Guesses: {this.state.wrongGuesses.join(' ')}
                </div>
            </div>
        )
    }
}