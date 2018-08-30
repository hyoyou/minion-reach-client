import * as types from './actionTypes';
import { loadError, clearError } from './errorActions';

const loadUserSuccess = (user) => {
    return {
        type: types.LOAD_USER_SUCCESS,
        payload: user
    }
}

const updateUserSuccess = (user) => {
    return {
        type: types.UPDATE_USER_SUCCESS,
        payload: user
    }
}

export const loginUser = (credentials) => {
    return dispatch => {
        return fetch('https://minion-reach-server.herokuapp.com/api/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then(result => {
            if (result.errors) {
                dispatch(loadError(result.errors))
            } else {
                localStorage.setItem('Token', result.token)
                dispatch(loadUser(result.user.id))
                dispatch(clearError())
            }
        })
        .catch(error => console.log(error))
    }
}

export const signupUser = (userInfo) => {
    return dispatch => {
        return fetch('https://minion-reach-server.herokuapp.com/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: userInfo })
        })
        .then(response => response.json())
        .then(result => {
            if (result.errors) {
                dispatch(loadError(result.errors))
            } else {
                localStorage.setItem('Token', result.token)
                dispatch(findUser(result.token))
                dispatch(clearError())
            }
        })
        .catch(error => console.log(error))
    }
}

// Send JWT token to server to find the correct user and dispatch loadUser with data returned
export const findUser = (token) => {
    return dispatch => {
        return fetch('https://minion-reach-server.herokuapp.com/api/find', {
            method: 'POST',
            headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
        })
        .then(response => response.json())
        .then(result => {
            dispatch(loadUser(result.user[0].user.id))
        })
        .catch(error => console.log(error))
    }
}

// When server sends back information about the user, dispatch action to set user data in reducer
export const loadUser = (userId) => {
    return dispatch => {
        return fetch(`https://minion-reach-server.herokuapp.com/api/users/${userId}`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(result => {
            dispatch(loadUserSuccess(result))
        })
        .catch(error => console.log(error))
    }
}

export const updateScore = (score, user) => {
    return dispatch => {
        return fetch(`https://minion-reach-server.herokuapp.com/api/users/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                score,
                id: user.id
            })
        })
        .then(response => response.json())
        .then(result => {
            dispatch(updateUserSuccess(result))
        })
        .catch(error => console.log(error))
    }
}

export const logout = () => {
    return dispatch => {
        localStorage.clear();
        dispatch({type: types.LOGOUT});
    }
}