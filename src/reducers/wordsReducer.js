import * as types from '../actions/actionTypes';

export default function wordsReducer(state = {
    word: '',
    difficulty: 3
}, action) {
    switch (action.type) {
        case types.FETCH_WORD:
            return {
                ...state,
                word: action.payload
            }
        default:
            return state;
    }
}