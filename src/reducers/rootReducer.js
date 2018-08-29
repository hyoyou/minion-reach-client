import { combineReducers } from 'redux';
import session from './sessionReducer';
import words from './wordsReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
    session,
    words,
    error
});

export default rootReducer;