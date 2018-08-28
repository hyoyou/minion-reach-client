import React, { Component } from 'react';

const display = {
    display: 'block'
};

const hide = {
    display: 'none'
};

const winImg = 'https://imgur.com/lIgomDF.png';
const loseImg = 'https://imgur.com/s93T23V.png';

export default class Modal extends Component {
    render() {
        let winMessage = "Great work! The minions will be back though. They aren't ones to give up easily..";
        let lossMessage = "Better luck next time! The minions ate all the bananas :( ...but look how happy they are! Awww!!!";

        return (
            <div className="modal-overlay" style={this.props.toggle ? display : hide}>
                <div className="modal-content">
                    <a className="btn-close" onClick={(event) => this.props.toggleModal(event)}>X</a>
                    <h4 className="mission-state">MISSION: {this.props.win ? <span className="game-won">CLEARED</span> : <span className="game-lost">FAILED</span>}</h4>
                    <img className='game-over-img' src={this.props.win ? winImg : loseImg} alt='minions win or lose' />
                    <p>{this.props.win ? winMessage : lossMessage}</p>
                    <button className="replay btn btn-primary" onClick={this.props.restart}>Play Again</button>
                </div>
            </div>
        );
    }
}