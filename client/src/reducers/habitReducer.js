import {
  GET_HABITS,
  ADD_HABIT,
  DELETE_HABIT,
  HABITS_LOADING,
  OPEN_HABIT_DRAWER,
  CLOSE_HABIT_DRAWER
} from '../actions/types';
const initialState = {
  habits: [],
  loading: false,
  drawerOpen: false
}

const debug = true;

export default function(state = initialState, action) {
  switch(action.type){
    // GET HABIT REDUCTIONS
    case GET_HABITS:
      return {
        ...state, habits: action.payload, loading: false
      }
    case HABITS_LOADING:
      return {
        ...state,
        loading: true
      }

    // DELETE HABIT REDUCTIONS
    case DELETE_HABIT:
      return{
        ...state,
        habits: state.habits.filter(habit => habit._id !== action.payload)
      }

    // ADD HABIT REDUCTIONS
    case ADD_HABIT:
      if(debug){
        console.log("ADD_HABIT reducer has run")
      }
      return{
        ...state
      }
    case OPEN_HABIT_DRAWER:
      if(debug){
        console.log("OPEN_HABIT_DRAWER reducer has run")
      }
      return{
        ...state, drawerOpen: true
      }
    case CLOSE_HABIT_DRAWER:
      if(debug){
        console.log("CLOSE_HABIT_DRAWER reducer has run")
      }
      return{
        ...state, drawerOpen: false
      }

    // DEFAULT
    default:
      return state;
  }
}