import { GET_HABITS, ADD_HABIT, DELETE_HABIT, HABITS_LOADING } from '../actions/types';
const initialState = {
  habits: [],
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type){
    case GET_HABITS:
      return {...state, habits: action.payload, loading: false};
    case DELETE_HABIT:
      return{
        ...state,
        habits: state.habits.filter(habit => habit.id !== action.payload)
      }
    case ADD_HABIT:
      return{
        ...state
      }
    case HABITS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}