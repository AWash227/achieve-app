import {
  GET_GOALS,
  ADD_GOAL,
  DELETE_GOAL,
  GOALS_LOADING,
  OPEN_GOAL_DRAWER,
  CLOSE_GOAL_DRAWER,
  UPDATE_GOAL_PROPS
} from '../actions/types';
const initialState = {
  goals: [],
  newHabit: {
    title: "",
    description: "",
    reward: "",
    complete: false,
    specific: false,
    measurable: false,
    achievable: false,
    timely: false
  },
  loading: false,
  drawerOpen: false
}

const debug = true;

export default function(state = initialState, action) {
  switch(action.type){
    // GET HABIT REDUCTIONS
    case GET_GOALS:
      return {
        ...state, goals: action.payload, loading: false
      }
    case GOALS_LOADING:
      return {
        ...state,
        loading: true
      }

    // DELETE HABIT REDUCTIONS
    case DELETE_GOAL:
      return{
        ...state,
        goals: state.goals.filter(goal => goal._id !== action.payload)
      }

    // ADD HABIT REDUCTIONS
    case ADD_GOAL:
      if(debug){
        console.log("ADD_GOAL reducer has run")
      }
      return{
        ...state,
        habits: [action.payload, ...state.habits]
      }
    case OPEN_GOAL_DRAWER:
      if(debug){
        console.log("OPEN_GOAL_DRAWER reducer has run")
      }
      return{
        ...state, drawerOpen: true
      }
    case CLOSE_GOAL_DRAWER:
      if(debug){
        console.log("CLOSE_GOAL_DRAWER reducer has run")
      }
      return{
        ...state, drawerOpen: false
      }
    case UPDATE_GOAL_PROPS:
      return{
        ...state, newGoal: action.payload
      }
    // DEFAULT
    default:
      return state;
  }
}