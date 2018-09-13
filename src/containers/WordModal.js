import React, { Component } from 'react';

export default class WordModal extends Component {
    state = {
        input: ''
    }

    handleInput = event => {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.setWord(this.state.input.toUpperCase());
        this.props.toggleWordModal();
    }

    render() {
        const display = { display: 'block' };
        const hide = { display: 'none' };

        const { toggleWordModal, wordToggle } = this.props;

        return (
            <div className="modal-overlay" style={wordToggle ? display : hide}>
                <div className="modal-content">
                    <a className="btn-close" onClick={(event) => toggleWordModal(event)}>X</a>
                    
                    <h3>Asker, Enter the secret word:</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="secretWord" value={this.state.input} onChange={this.handleInput} />
                        <button className="btn btn-primary" type="submit" value="Submit">Submit</button>
                    </form>

                    <h3 className="red-underline">Guesser, No peeking!!</h3>
                    <img src="https://s3.amazonaws.com/minionreach/Minion_No_See.png" alt="No peeking" />
                </div>
            </div>
        );
    }
}