import { combineReducers } from 'redux';
import habitReducer from './habitReducer';
import goalReducer from './goalReducer';

export default combineReducers({
  habit: habitReducer,
  goal: goalReducer
})