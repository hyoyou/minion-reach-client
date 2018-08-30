import React, { Component } from 'react';

export default class Minions extends Component {
    stackMinions = () => {
        let minion6 = 'https://s3.amazonaws.com/minionreach/MinionFinal.png';
        let minion5 = 'https://s3.amazonaws.com/minionreach/Minion1.png';
        let minion4 = 'https://s3.amazonaws.com/minionreach/Minion3.png';
        let minion3 = 'https://s3.amazonaws.com/minionreach/Minion4.png';
        let minion2 = 'https://s3.amazonaws.com/minionreach/Minion5.png';
        let minion1 = 'https://s3.amazonaws.com/minionreach/Minion2.png';

        switch (this.props.lives) {
            case 6:
                return (<div className='minions'></div>);
            case 5:
                return (
                    <div className='minions'>
                        <img className='minion1' src={ minion1 } alt='minion stack' />
                    </div>
                );
            case 4:
                return (
                    <div className='minions'>
                        <img className='minion2' src={ minion2 } alt='minion stack' />
                        <img className='minion1' src={ minion1 } alt='minion stack' />
                    </div>
                );
            case 3:
                return (
                    <div className='minions'>
                        <img className='minion3' src={ minion3 } alt='minion stack' />
                        <img className='minion2' src={ minion2 } alt='minion stack' />
                        <img className='minion1' src={ minion1 } alt='minion stack' />
                    </div>
                );
            case 2:
                return (
                    <div className='minions'>
                        <img className='minion4' src={ minion4 } alt='minion stack' />
                        <img className='minion3' src={ minion3 } alt='minion stack' />
                        <img className='minion2' src={ minion2 } alt='minion stack' />
                        <img className='minion1' src={ minion1 } alt='minion stack' />
                    </div>
                );
            case 1:
                return (
                    <div className='minions'>
                        <img className='minion5' src={ minion5 } alt='minion stack' />
                        <img className='minion4' src={ minion4 } alt='minion stack' />
                        <img className='minion3' src={ minion3 } alt='minion stack' />
                        <img className='minion2' src={ minion2 } alt='minion stack' />
                        <img className='minion1' src={ minion1 } alt='minion stack' />
                    </div>
                );
            case 0:
                return (
                    <div className='minions'>
                        <img className='minion6' src={ minion6 } alt='minion stack' />
                        <img className='minion5' src={ minion5 } alt='minion stack' />
                        <img className='minion4' src={ minion4 } alt='minion stack' />
                        <img className='minion3' src={ minion3 } alt='minion stack' />
                        <img className='minion2' src={ minion2 } alt='minion stack' />
                        <img className='minion1' src={ minion1 } alt='minion stack' />
                    </div>
                );
            default:
                return <div></div>;
        }
    }

    render() {
        return (
            <div className='minions-container'>
                { this.stackMinions() }
            </div>
        );
    }
}