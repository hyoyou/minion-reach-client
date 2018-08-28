import * as types from '../actions/actionTypes';

export default function wordsReducer(state = {
    word: '',
    difficulty: 'normal'
}, action) {
    switch (action.type) {
        case types.FETCH_WORD:
            return {
                ...state,
                word: action.payload
            }
        case types.SET_DIFFICULTY:
            return {
                ...state,
                difficulty: action.payload
            }
        default:
            return state;
    }
}