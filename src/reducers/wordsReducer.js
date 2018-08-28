import * as types from '../actions/actionTypes';

export default function wordsReducer(state = {
    word: '',
    gameState: [],
    difficulty: 3
}, action) {
    switch (action.type) {
        case types.FETCH_WORD:
            return {
                ...state,
                word: action.payload
            }
        case types.SET_GAME_STATE:
            return {
                ...state,
                gameState: action.payload
            }
        default:
            return state;
    }
}