import fetch from 'isomorphic-fetch';
import * as types from '../actions/actionTypes';

const APIURL = `https://minion-reach-server.herokuapp.com/api/words`;

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