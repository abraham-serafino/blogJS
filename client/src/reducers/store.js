// @flow
import { createStore, combineReducers } from 'redux';
import AppReducer from './AppReducer.js';

export default createStore(combineReducers({
  appState: AppReducer
}));
