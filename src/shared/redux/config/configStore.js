import { createStore } from 'redux';
import { combineReducers } from 'redux';
import userDataController from '../modules/userDataController';

const rootReducer = combineReducers({
  userDataController
});

const store = createStore(rootReducer);

export default store;
