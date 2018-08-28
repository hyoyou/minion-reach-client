import React, { Component } from 'react';
import { connect } from 'react-redux';

import Game from './Game';
import Minions from './Minions';
import Modal from './Modal';

import { fetchWord } from '../actions/wordsActions';

const APIURL = `http://localhost:3001/api/words`;

class GameContainer extends Component {
    state = {
        gameState: [],
        wrongGuesses: [],
        lives: 6,
        difficulty: 3,
        toggle: false,
        win: false,
    }

    componentDidMount() {
        this.props.fetchWord().then(() => {
            this.setState({
                word: this.props.word,
                gameState: this.props.gameState
            });
        })
    }

    handleInput = (event) => {
        // console.log(event.key)
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            let key = event.key.toUpperCase();
            this.checkGuess(key);
        } 
    }
    
    checkGuess = (key) => {
        // console.log(key)
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
        if (this.props.gameState.join('') === this.props.word) {
            this.setState({ win: true });
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
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }))
    }

    render() {
        return (
            <div className="game-container" tabIndex="0" onKeyDown={this.handleInput}>
                <Game lives={this.state.lives} gameState={this.state.gameState} wrongGuesses={this.state.wrongGuesses} checkGuess={this.checkGuess} />
                <Minions lives={this.state.lives} />
                <Modal toggle={this.state.toggle} toggleModal={this.toggleModal} win={this.state.win}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log(state.words)
    return {
        word: state.words.word,
        gameState: state.words.gameState
    }
}

export default connect(mapStateToProps, { fetchWord })(GameContainer)