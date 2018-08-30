import React, { Component } from 'react';
import { connect } from 'react-redux';

import Game from '../components/Game';
import Minions from '../components/Minions';
import Modal from '../components/Modal';

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
        const { fetchWord, difficulty, findUser } = this.props;
        const token = localStorage.getItem('Token');

        fetchWord(difficulty).then(() =>  this.startGame());

        if (token) { findUser(token) };
    }

    startGame = () => {	
        const { word } = this.props;
        const gameStart = [];

        for (let i = 0; i < word.length; i++) {	
            gameStart.push('_');	
        }	
        
        this.setState({	gameState: gameStart });
    }

    restartGame = () => {
        const { fetchWord, difficulty } = this.props;

        this.setState({
            gameState: [],
            wrongGuesses: [],
            lives: 6,
            toggle: false,
            win: false,
        })

        fetchWord(difficulty).then(() => this.startGame());
    }

    handleInput = event => {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            let key = event.key.toUpperCase();
            this.checkGuess(key);
        } 
    }
    
    checkGuess = key => {
        const { gameState, wrongGuesses, win, lives } = this.state;
        const { word } = this.props;

        let updatedGameState = gameState;

        if (!win && wrongGuesses.indexOf(key) < 0) {
            if (word.indexOf(key) > -1) {
                let indices = [];
                let index = word.indexOf(key);

                while (index !== -1) {
                    indices.push(index);
                    index = word.indexOf(key,index+1);
                }

                for (let i = 0; i <= indices.length; i++) {
                    updatedGameState[indices[i]] = key;
                }
                
                this.setState({ gameState: updatedGameState });

                this.checkWin();
            } else if (lives > 1 ) {
                this.setState({ 
                    wrongGuesses: [...wrongGuesses, key],
                    lives: lives - 1
                });
            } else {
                this.setState({ lives: 0 });
                this.gameOver();
            }
        }
    }

    checkWin = () => {
        const { gameState } = this.state;
        const { word, user, difficulty, updateScore } = this.props;

        if (gameState.join('') === word) {
            this.setState({ win: true });
            
            if (user.id) {
                let currentScore = user.score;
                switch(difficulty) {
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
                updateScore(currentScore, user);
            }

            setTimeout(this.toggleModal, 1500);
        }
    }

    gameOver = () => {
        let reveal = this.props.word.split('');
        
        this.setState({ 
            gameState: reveal,
            win: false
         });

        setTimeout(this.toggleModal, 1500);
    }

    toggleModal = () => {
        this.setState((prevState) => ({
            toggle: !prevState.toggle
        }))
    }

    render() {
        const { lives, gameState, wrongGuesses, toggle, win } = this.state;
        const { difficulty, user } = this.props;
 
        return (
            <div className="game-container" tabIndex="0" onKeyDown={this.handleInput}>
                <Game 
                    lives={lives} 
                    gameState={gameState} 
                    wrongGuesses={wrongGuesses} 
                    checkGuess={this.checkGuess} 
                    restart={this.restartGame} 
                    difficulty={difficulty}
                    user={user}
                />
                <Minions lives={lives} />
                <Modal 
                    toggle={toggle} 
                    toggleModal={this.toggleModal} 
                    win={win} 
                    restart={this.restartGame} 
                />
            </div>
        );
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