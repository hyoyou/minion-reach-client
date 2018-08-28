import * as types from './actionTypes';

const loadUserSuccess = (user) => {
    return {
      type: types.LOAD_USER_SUCCESS,
      payload: user
    }
  }

export const loginUser = (credentials) => {
    return dispatch => {
      return fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
      .then(response => response.json())
      .then(result => {
        //   debugger
          localStorage.setItem('Token', result.token)
          dispatch(loadUser(result.user.id))
      })
      .catch(error => console.log(error))
    }
  }

export const signupUser = (userInfo) => {
    return dispatch => {
        return fetch('http://localhost:3001/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: userInfo })
        })
        .then(response => response.json())
    .then(result => {
            localStorage.setItem('Token', result.token)
            dispatch(findUser(result.token))
        })
        .catch(error => console.log(error))
    }
}

export const findUser = (token) => {
    return dispatch => {
        return fetch('http://localhost:3001/api/find', {
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

export const loadUser = (userId) => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/users/${userId}`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(result => {
            dispatch(loadUserSuccess(result))
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