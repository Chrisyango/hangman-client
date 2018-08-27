import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import wordsReducer from './reducers/words';

const store = createStore(
  combineReducers({
    words: wordsReducer
  }), 
  applyMiddleware(thunk));

export default store;