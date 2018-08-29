import * as types from '../actions/actionTypes';

export default function errorReducer(state = {
    error: ''
}, action) {
    switch(action.type) {
        case types.LOAD_ERROR:
            return {
                error: action.payload.message
            }
        case types.CLEAR_ERROR:
            return {
                error: ''
            }
        default:
            return state;
    }
}