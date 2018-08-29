import fetch from 'isomorphic-fetch';
import * as types from '../actions/actionTypes';

const APIURL = `http://localhost:3001/api/words`;

export const fetchWord = (difficulty) => {
    return function(dispatch) {
        return fetch(`${APIURL}/${difficulty}`)
        .then(response => response.json())
        .then(result => {
            let secretWord = result[Math.floor(Math.random()*result.length)];
            
            let gameStart = [];
            for (let i = 0; i < secretWord.length; i++) {
                gameStart.push('_');
            }

            dispatch({
                type: types.FETCH_WORD,
                payload: secretWord.toUpperCase()
            })
        })
    }
}

export const setDifficulty = (difficulty) => {
    return {
        type: types.SET_DIFFICULTY,
        payload: difficulty
    }
}