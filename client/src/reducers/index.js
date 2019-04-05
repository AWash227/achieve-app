import { combineReducers } from 'redux';
import habitReducer from './habitReducer';

export default combineReducers({
  habit: habitReducer,
})