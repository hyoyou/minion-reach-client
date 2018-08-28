import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setDifficulty } from '../actions/wordsActions';

class Intro extends Component {
    gameStart = event => {
        event.preventDefault();

        this.props.history.push('/play');
    }

    changeDifficulty = event => {
        this.props.setDifficulty(event.target.value);
    }

    render() {
        return (
            <div className="intro-container">
                <div className="intro">
                    <button type="button" className="start btn btn-primary" onClick={this.gameStart}>start game</button>
                    <div className="difficulty">
                        MODE: 
                        <button 
                            type="button" 
                            value="easy"
                            className={this.props.difficulty === "easy" ? "level btn btn-primary" : "level btn btn-warning"} 
                            onClick={this.changeDifficulty}
                        >
                            easy
                        </button> 
                        <button 
                            type="button"
                            value="normal"
                            className={this.props.difficulty === "normal" ? "level btn btn-primary" : "level btn btn-warning"} 
                            onClick={this.changeDifficulty}
                        >
                            normal
                        </button> 
                        <button 
                            type="button"
                            value="hard"
                            className={this.props.difficulty === "hard" ? "level btn btn-primary" : "level btn btn-warning"} 
                            onClick={this.changeDifficulty}
                        >
                            hard
                        </button> 
                        <button 
                            type="button"
                            value="bananas"
                            className={this.props.difficulty === "bananas" ? "level btn btn-primary" : "level btn btn-warning"} 
                            onClick={this.changeDifficulty}
                        >
                            bananas
                        </button>
                    </div>
                    <img src="https://imgur.com/x9ltqQC.jpg" alt="Minions love bananas" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        difficulty: state.words.difficulty
    }
}

export default connect(mapStateToProps, { setDifficulty })(Intro);