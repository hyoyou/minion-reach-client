import React, { Component } from 'react';
import { connect } from 'react-redux';

import Game from '../components/Game';
import Minions from '../components/Minions';
import Modal from '../components/Modal';
import WordModal from './WordModal';

import { fetchWord, setWord } from '../actions/wordsActions';
import { findUser, updateScore } from '../actions/sessionActions';

class GameContainer extends Component {
    state = {
        gameState: [],
        wrongGuesses: [],
        lives: 6,
        toggle: false,
        win: false,
        wordToggle: false
    }

    // Call fetchWord action creator to set word in application state then call startGame()
    // If there is a token in local storage, call findUser action creator to save user to application state
    componentDidMount() {
        const { fetchWord, difficulty, findUser } = this.props;
        const token = localStorage.getItem('Token');

        if (difficulty === "multiplayer") {
            this.setState((prevState) => ({
                wordToggle: !prevState.wordToggle
            }));
        } else {
            fetchWord(difficulty).then(() =>  this.startGame());
        }

        if (token) { findUser(token) };
    }

    // Prepare the game by creating an array of '_' for each letter of the word saved in application state
    // This array will hold our initial game state (this.state.gameState)
    startGame = () => {	
        const { word } = this.props;
        const gameStart = [];

        for (let i = 0; i < word.length; i++) {	
            gameStart.push('_');	
        }	
        
        this.setState({	gameState: gameStart });
    }

    // Reset the initial state and call fetchWord action creator to fetch a new word & save to application state
    restartGame = () => {
        const { fetchWord, difficulty } = this.props;

        this.setState({
            gameState: [],
            wrongGuesses: [],
            lives: 6,
            toggle: false,
            win: false,
        });

        fetchWord(difficulty).then(() => this.startGame());
    }

    // When input is via keyboard, validate that it is an A-Z letter, capitalize, and send to checkGuess()
    handleInput = event => {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            let key = event.key.toUpperCase();
            this.checkGuess(key);
        } 
    }

    setWord = word => {
        const { setWord } = this.props;

        setWord(word).then(() => this.startGame());
    }

    // Take in user's guess and check against secret word
    checkGuess = key => {
        const { gameState, wrongGuesses, win, lives } = this.state;
        const { word } = this.props;

        // A new array set to current game state
        let updatedGameState = gameState;

        // Make sure the game is not over and user has not already guessed this letter
        if (!win && wrongGuesses.indexOf(key) < 0) {
            // The letter is part of the word: Check for all occurrences
            if (word.indexOf(key) > -1) {
                let indices = [];
                let index = word.indexOf(key);

                while (index !== -1) {
                    indices.push(index);
                    index = word.indexOf(key,index+1);
                }

                // Update the updatedGameState array to replace the '_' with the letter in all occurrences
                for (let i = 0; i <= indices.length; i++) {
                    updatedGameState[indices[i]] = key;
                }
                
                this.setState({ gameState: updatedGameState });

                // Check to see if the game is won
                this.checkWin();    

            // The letter is not part of the word: Check that player has lives remaining and decrement, update wrong guesses array
            } else if (lives > 1 ) {
                this.setState({ 
                    wrongGuesses: [...wrongGuesses, key],
                    lives: lives - 1
                });

            // The letter is not part of the word: Player has no lives remaining and game is over
            } else {
                this.setState({ 
                    wrongGuesses: [...wrongGuesses, key],
                    lives: 0 
                });

                this.gameOver();
            }
        }
    }

    // Take gameState array and convert to a string to compare to secret word
    // If game is won, toggle state to show modal
    // If user exists, update user's score according to game's level of difficulty
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

    // Reveal the secret word since game is over, and toggle to show modal
    gameOver = () => {
        let reveal = this.props.word.split('');
        
        this.setState({ 
            gameState: reveal,
            win: false
         });

        setTimeout(this.toggleModal, 1500);
    }

    // Toggle between true and false state depending on game status
    toggleModal = () => {
        this.setState((prevState) => ({
            toggle: !prevState.toggle
        }));
    }

    toggleWordModal = () => {
        this.setState((prevState) => ({
            wordToggle: !prevState.wordToggle
        }));
    }

    render() {
        const { lives, gameState, wrongGuesses, toggle, win } = this.state;
        const { difficulty, user } = this.props;
 
        return (
            <div className="game-container" tabIndex="0">
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
                <WordModal
                    toggleWordModal={this.toggleWordModal}
                    wordToggle={this.state.wordToggle}
                    setWord={this.setWord}
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

export default connect(mapStateToProps, { fetchWord, setWord, findUser, updateScore })(GameContainer);