import React, { Component } from 'react';

export default class Intro extends Component {
    render() {
        return (
            <div className="intro-container">
                <div className="intro">
                    <button type="button" className="start btn btn-primary">start game</button>
                    <div className="difficulty">
                        Difficulty: 
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