import React, { Component } from 'react';

const APIURL = `http://localhost:3001/api/words`;

export default class GameContainer extends Component {
    state = {
        word: '',
        gameState: [],
        wrongGuesses: [],
        lives: 6,
        difficulty: 3
    }

    componentDidMount() {
        fetch(`${APIURL}`)
            .then(response => response.json())
            .then(result => {
                let secretWord = result[Math.floor(Math.random()*result.length)];
                this.setState({
                    word: secretWord
                })

                this.startGame(secretWord);
            })
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
        let key = event.key.toLowerCase();

        if (this.state.wrongGuesses.indexOf(key) < 0) {
            if (this.state.word.indexOf(key) > -1) {
                let indices = [];
                let index = this.state.word.indexOf(key);

                while (index !== -1) {
                    indices.push(index);
                    index = this.state.word.indexOf(key,index+1);
                }

                for (let i = 0; i <= indices.length; i++) {
                    updatedGameState[indices[i]] = key;
                }
                
                this.setState({ gameState: updatedGameState })
                
                this.checkWin();
            } else if (this.state.lives >= 1 ) {
                this.setState({ 
                    wrongGuesses: [...this.state.wrongGuesses, key],
                    lives: this.state.lives - 1
                });
            } else {
                this.gameOver();
            }
        }
    }

    checkWin = () => {
        if (this.state.gameState.join('') === this.state.word) {
            setTimeout(function() {alert('You Won!')}, 500);
        }
    }

    gameOver = () => {
        alert('The minions got all the bananas')
        this.setState({
            word: '',
            gameState: [],
            wrongGuesses: [],
            lives: 6
        })
    }

    render() {
        return (
            <div className="game-container" tabIndex="0" onKeyDown={this.handleInput}>
                {/* <button type="button" className="btn btn-primary">Start Game</button>
                <div className="difficulty">
                    Difficulty: 
                    <button type="button" className="btn btn-warning">Easy</button> 
                    <button type="button" className="btn btn-primary">Normal</button> 
                    <button type="button" className="btn btn-warning">Hard</button> 
                    <button type="button" className="btn btn-warning">BANANAS</button>
                </div> */}
                <div className="lives-left">
                    Lives Left: {this.state.lives}
                </div>
                <div className="game">
                    {this.state.gameState.length > 1 && this.state.gameState.join(' ')}
                    <br />
                    Wrong Guesses: {this.state.wrongGuesses.join(' ')}
                </div>
            </div>
        )
    }
}