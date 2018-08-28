import { combineReducers } from 'redux';
import session from './sessionReducer';
import words from './wordsReducer';

const rootReducer = combineReducers({
  session,
  words
});

export default rootReducer;