import {
  GET_GOALS,
  ADD_GOAL,
  DELETE_GOAL,
  GOALS_LOADING,
  OPEN_GOAL_DRAWER,
  CLOSE_GOAL_DRAWER,
  UPDATE_GOAL_PROPS,
} from "./types";
import axios from 'axios';

// Vars
const server = "http://192.168.1.74:4000/api/goals/";
const debug = true;

// GET habit actions
export const getGoals = () => dispatch => {
  //Set loading to True
  dispatch(setGoalsLoading());
  // GET habits from server
  axios.get(server)
    .then((res) => {
      //handle success
      dispatch({
        type: GET_GOALS,
        payload: res.data
      })
      console.log(res);
    })
    .catch((err) => {
      //handle error
      console.log(err);
    })
};

export const setGoalsLoading = () => {
  if(debug){
    console.log("setHabitsLoading() has run")
  }
  return {
    type: GOALS_LOADING
  }
}

// ADD habit actions
export const addGoal = goal => dispatch => {
  axios.post(server, goal)
    .then((res) => {
      dispatch({
        type: ADD_GOAL,
        payload: res.data
      })
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  return{
    type: ADD_GOAL,
    payload: goal
  }
}


export const updateGoalProp = 
(
  title,
  description,
  reward,
  specific,
  measurable,
  achievable,
  timely,
  habits
) => dispatch => {
  dispatch({
    type: UPDATE_GOAL_PROPS,
    payload: 
      {
        title: title,
        description: description,
        reward: reward,
        complete: false,
        specific: specific,
        measurable: measurable,
        achievable: achievable,
        timely: timely,
        habits: habits
      }
  })
}
export const openGoalDrawer = () => dispatch => {
  if(debug){
    console.log("openGoalDrawer() has run")
  }
  dispatch({
    type: OPEN_GOAL_DRAWER,
  })
}

export const closeGoalDrawer = () => dispatch => {
  if(debug){
    console.log("closeGoalDrawer() has run");
  }
  dispatch({
    type: CLOSE_GOAL_DRAWER,
  })
}

// DELETE habit actions
export const deleteGoal = id => dispatch => {
  console.log(server + id)
  axios.delete(server + id)
    .then((res) => {
      //Handle successful delete
      dispatch({
        type: DELETE_GOAL,
        payload: res
      })
      console.log(res);
    })
    .catch((err) => {
      // Handle Error
      console.log(err);
    })
};
