import fetch from 'isomorphic-fetch';
import * as types from '../actions/actionTypes';

const APIURL = `http://localhost:3001/api/words`;

export const fetchWord = (difficulty) => {
    return function(dispatch) {
        return fetch(`${APIURL}/${difficulty}`)
        .then(response => response.text())
        .then(result => {
            let secretWord = result.toUpperCase();
            
            dispatch({
                type: types.FETCH_WORD,
                payload: secretWord
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

export const setWord = (word) => {
    return {
        type: types.SET_WORD,
        payload: word
    }
}