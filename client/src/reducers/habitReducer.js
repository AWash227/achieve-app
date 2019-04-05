import { GET_HABITS, ADD_HABIT, DELETE_HABIT } from '../actions/types';
const initialState = {
  habits: [
    { title: "Hello",
      description: "Hello",
      reward: "Hello",
      complete: "False",
      link: "Hello",
      simplify: "Hello" },
    { title: "Hello",
      description: "Hello",
      reward: "Hello",
      complete: "False",
      link: "Hello",
      simplify: "Hello" }
  ]
}

export default function(state = initialState, action) {
  switch(action.type){
    case GET_HABITS:
      return {
        ...state
      }
    case DELETE_HABIT:
      return{
        ...state,
        habits: state.habits.filter(habit => habit.id !== action.payload)
      }
    default:
      return state;
  }
}