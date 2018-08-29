import * as types from '../actions/actionTypes';

export default function sessionReducer(state = {
    session: !!localStorage.Token,
    user: {}
}, action) {
    switch(action.type) {
        case types.LOAD_USER_SUCCESS:
            return {
                ...state,
                session: !!localStorage.Token,
                user: action.payload
            }
        case types.LOGOUT:
            return {
                session: !!localStorage.Token,
                user: {}
            }
        case types.UPDATE_USER_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}