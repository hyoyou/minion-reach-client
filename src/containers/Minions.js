import React, { Component } from 'react';

export default class Minions extends Component {
    stackMinions = () => {
        let minion6 = 'https://imgur.com/MP4tcmz.png';
        let minion5 = 'https://imgur.com/mieOImG.png';
        let minion4 = 'https://imgur.com/m68M2Pm.png';
        let minion3 = 'https://imgur.com/H3O04L6.png';
        let minion2 = 'https://imgur.com/2HfRHoC.png';
        let minion1 = 'https://imgur.com/DsCkDGy.png';
        // let minionWin = 'https://imgur.com/gSFNcwK';

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
                return (<div>HI</div>);
        }
    }

    render() {
        return (
            <div className='minions-container'>
                { this.stackMinions() }
            </div>
        )
    }
}