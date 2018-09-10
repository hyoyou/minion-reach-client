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

        this.props.setWord(this.state.input);
    }

    render() {
        const display = { display: 'block' };
        const hide = { display: 'none' };

        const { toggleWordModal, wordToggle } = this.props;

        return (
            <div className="modal-overlay" style={wordToggle ? display : hide}>
                <div className="modal-content">
                    <a className="btn-close" onClick={(event) => toggleWordModal(event)}>X</a>
        
                    <p>Player 1, Enter the secret word:</p>

                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="secretWord" value={this.state.input} onChange={this.handleInput} />
                        <input type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        );
    }
}