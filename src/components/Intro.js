import React, { Component } from 'react';

export default class Intro extends Component {
    gameStart = event => {
        event.preventDefault();

        this.props.history.push('/play');
    }

    render() {
        return (
            <div className="intro-container">
                <div className="intro">
                    <button type="button" className="start btn btn-primary" onClick={this.gameStart}>start game</button>
                    <div className="difficulty">
                        mode: 
                        <button type="button" className="level btn btn-warning">easy</button> 
                        <button type="button" className="level btn btn-primary">normal</button> 
                        <button type="button" className="level btn btn-warning">hard</button> 
                        <button type="button" className="level btn btn-warning">bananas</button>
                    </div>
                    <img src="https://imgur.com/x9ltqQC.jpg" alt="Minions love bananas" />
                </div>
            </div>
        )
    }
}