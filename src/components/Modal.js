import React, { Component } from 'react';

export default class Modal extends Component {
    render() {
        const display = { display: 'block' };
        const hide = { display: 'none' };
        
        const winImg = 'https://s3.amazonaws.com/minionreach/BadMinions.png';
        const loseImg = 'https://s3.amazonaws.com/minionreach/MinionWin.png';

        const winMessage = "Great work! The minions will be back though. They aren't ones to give up easily..";
        const lossMessage = "Better luck next time! The minions ate all the bananas :( ...but look how happy they are! Awww!!!";

        const { toggle, win, restart, toggleModal } = this.props;

        return (
            <div className="modal-overlay" style={toggle ? display : hide}>
                <div className="modal-content">
                    <a className="btn-close" onClick={(event) => toggleModal(event)}>X</a>
                    <h4 className="mission-state">MISSION: {win ? <span className="blue-underline">CLEARED</span> : <span className="red-underline">FAILED</span>}</h4>
                    <img className='game-over-img' src={win ? winImg : loseImg} alt='minions win or lose' />
                    <p>{win ? winMessage : lossMessage}</p>
                    <button className="replay btn btn-primary" onClick={restart}>Play Again</button>
                </div>
            </div>
        );
    }
}