import React, { Component } from 'react';
import { connect } from 'react-redux';

import Game from './Game';
import Minions from './Minions';
import Modal from './Modal';

import { fetchWord } from '../actions/wordsActions';
import { findUser, updateScore } from '../actions/sessionActions';

class GameContainer extends Component {
    state = {
        gameState: [],
        wrongGuesses: [],
        lives: 6,
        toggle: false,
        win: false,
    }

    componentDidMount() {
        this.props.fetchWord(this.props.difficulty).then(() => {
            this.startGame()
        })

        const token = localStorage.getItem('Token');
        if (token) {
            this.props.findUser(token);
        }
    }

    startGame = () => {	
        let gameStart = [];	
        for (let i = 0; i < this.props.word.length; i++) {	
            gameStart.push('_');	
        }	
         this.setState({	
            gameState: gameStart	
        })
    }

    restartGame = () => {
        this.setState({
            gameState: [],
            wrongGuesses: [],
            lives: 6,
            toggle: false,
            win: false,
        })

        this.props.fetchWord(this.props.difficulty).then(() => {
            this.startGame()
        })
    }

    handleInput = (event) => {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            let key = event.key.toUpperCase();
            this.checkGuess(key);
        } 
    }
    
    checkGuess = (key) => {
        let updatedGameState = this.state.gameState;

        if (this.state.wrongGuesses.indexOf(key) < 0) {
            if (this.props.word.indexOf(key) > -1) {
                let indices = [];
                let index = this.props.word.indexOf(key);

                while (index !== -1) {
                    indices.push(index);
                    index = this.props.word.indexOf(key,index+1);
                }

                for (let i = 0; i <= indices.length; i++) {
                    updatedGameState[indices[i]] = key;
                }
                
                this.setState({ gameState: updatedGameState })
                console.log("Current state:", updatedGameState)
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
        if (this.state.gameState.join('') === this.props.word) {
            this.setState({ win: true });
            
            if (this.props.user.id) {
                let currentScore = this.props.user.score;
                switch(this.props.difficulty) {
                    case "easy":
                        currentScore += 10;
                        break;
                    case "normal":
                        currentScore += 30;
                        break;
                    case "hard":
                        currentScore += 50;
                        break;
                    case "bananas":
                        currentScore += 100;
                        break;
                    default:
                        currentScore;
                        break;
                }
                this.props.updateScore(currentScore, this.props.user);
            }

            setTimeout(this.toggleModal, 1500);
        }
    }

    gameOver = () => {
        let reveal = this.props.word.split('');
        
        this.setState({
            gameState: reveal
        })

        this.setState({ win: false });
        setTimeout(this.toggleModal, 1500);
    }

    toggleModal = () => {
        this.setState((prevState) => ({
            toggle: !prevState.toggle
        }))
    }

    render() {
        return (
            <div className="game-container" tabIndex="0" onKeyDown={this.handleInput}>
                <Game 
                    lives={this.state.lives} 
                    gameState={this.state.gameState} 
                    wrongGuesses={this.state.wrongGuesses} 
                    checkGuess={this.checkGuess} 
                    restart={this.restartGame} 
                    difficulty={this.props.difficulty}
                    user={this.props.user}
                />
                <Minions lives={this.state.lives} />
                <Modal toggle={this.state.toggle} toggleModal={this.toggleModal} win={this.state.win} restart={this.restartGame} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        word: state.words.word,
        difficulty: state.words.difficulty,
        user: state.session.user
    }
}

export default connect(mapStateToProps, { fetchWord, findUser, updateScore })(GameContainer);