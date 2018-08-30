import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setDifficulty } from '../actions/wordsActions';

class Intro extends Component {
    // Navigate to game play page when "Start Game" button is clicked
    gameStart = event => {
        const { history } = this.props;
        event.preventDefault();

        history.push('/play');
    }

    // Call setDifficulty action creator to change difficulty level of game in application state
    changeDifficulty = event => {
        const { setDifficulty } = this.props;

        setDifficulty(event.target.value);
    }

    render() {
        const { difficulty } = this.props;

        return (
            <div className="intro-container">
                <div className="intro">
                    <button type="button" className="start btn btn-primary" onClick={this.gameStart}>start game</button>
                    <div className="difficulty">
                        MODE: 
                        <button 
                            type="button" 
                            value="easy"
                            className={difficulty === "easy" ? "level btn btn-primary" : "level btn btn-warning"} 
                            onClick={this.changeDifficulty}
                        >
                            easy
                        </button> 
                        <button 
                            type="button"
                            value="normal"
                            className={difficulty === "normal" ? "level btn btn-primary" : "level btn btn-warning"} 
                            onClick={this.changeDifficulty}
                        >
                            normal
                        </button> 
                        <button 
                            type="button"
                            value="hard"
                            className={difficulty === "hard" ? "level btn btn-primary" : "level btn btn-warning"} 
                            onClick={this.changeDifficulty}
                        >
                            hard
                        </button> 
                        <button 
                            type="button"
                            value="bananas"
                            className={difficulty === "bananas" ? "level btn btn-primary" : "level btn btn-warning"} 
                            onClick={this.changeDifficulty}
                        >
                            bananas
                        </button>
                    </div>
                    <img src="https://s3.amazonaws.com/minionreach/MinionLovesBananas.jpg" alt="Minions love bananas" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        difficulty: state.words.difficulty
    }
}

export default connect(mapStateToProps, { setDifficulty })(Intro);