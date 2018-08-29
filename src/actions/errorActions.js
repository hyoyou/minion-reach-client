import * as types from './actionTypes';

export const loadError = (error) => {
    return {
        type: types.LOAD_ERROR,
        payload: error
    }
}

export const clearError = () => {
    return {
        type: types.CLEAR_ERROR
    }
}
