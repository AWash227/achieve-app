import { combineReducers } from 'redux';
import habitReducer from './habitReducer';
import goalReducer from './goalReducer';
import appReducer from './appReducer';

export default combineReducers({
  habit: habitReducer,
  goal: goalReducer,
  app: appReducer
})
