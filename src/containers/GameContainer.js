import React, { Component } from 'react';
import Game from './Game';
import Minions from './Minions';

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
        // extract to actions
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
        let key = event.key.toLowerCase();
        this.checkGuess(key);
    }
    
    checkGuess = (key) => {
        // console.log(key)
        // debugger
        let updatedGameState = this.state.gameState;

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
            } else if (this.state.lives > 1 ) {
                this.setState({ 
                    wrongGuesses: [...this.state.wrongGuesses, key],
                    lives: this.state.lives - 1
                });
            } else {
                this.setState({ lives: 0 })
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
        let reveal = this.state.word.split('');
        
        this.setState({
            gameState: reveal
        })

        setTimeout(function() {alert('The minions got all the bananas')}, 500);
    }

    render() {
        return (
            <div className="game" tabIndex="0" onKeyDown={this.handleInput}>
                <Game lives={this.state.lives} gameState={this.state.gameState} wrongGuesses={this.state.wrongGuesses} checkGuess={this.checkGuess} />
                <Minions lives={this.state.lives} />
            </div>
        )
    }
}