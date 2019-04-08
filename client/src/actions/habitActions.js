import {
  GET_HABITS,
  ADD_HABIT,
  DELETE_HABIT,
  HABITS_LOADING,
  OPEN_HABIT_DRAWER,
  CLOSE_HABIT_DRAWER,
  UPDATE_HABIT_PROPS
} from "./types";
import axios from 'axios';

// Vars
const server = "http://192.168.1.74:4000/api/habits/";
const debug = true;

// GET habit actions
export const getHabits = () => dispatch => {
  //Set loading to True
  dispatch(setHabitsLoading());
  // GET habits from server
  axios.get(server)
    .then((res) => {
      //handle success
      dispatch({
        type: GET_HABITS,
        payload: res.data
      })
      console.log(res);
    })
    .catch((err) => {
      //handle error
      console.log(err);
    })
};

export const setHabitsLoading = () => {
  if(debug){
    console.log("setHabitsLoading() has run")
  }
  return {
    type: HABITS_LOADING
  }
}

// ADD habit actions
export const addHabit = habit => dispatch => {
  axios.post(server, habit)
    .then((res) => {
      dispatch({
        type: ADD_HABIT,
        payload: res.data
      })
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  return{
    type: ADD_HABIT,
    payload: habit
  }
}

export const openHabitDrawer = () => dispatch => {
  if(debug){
    console.log("openHabitDrawer() has run")
  }
  dispatch({
    type: OPEN_HABIT_DRAWER,
  })
}

export const closeHabitDrawer = () => dispatch => {
  if(debug){
    console.log("closeHabitDrawer() has run");
  }
  dispatch({
    type: CLOSE_HABIT_DRAWER,
  })
}

export const updateHabitProp = (title, description, reward, linkObj, connector ) => dispatch => {
  dispatch({
    type: UPDATE_HABIT_PROPS,
    payload: 
      {
        title: title,
        description: description,
        reward: reward,
        complete: false,
        link: {
          linkObj: linkObj,
          connector: connector
        }
      }
  })
}

// DELETE habit actions
export const deleteHabit = id => dispatch => {
  console.log(server + id)
  axios.delete(server + id)
    .then((res) => {
      //Handle successful delete
      dispatch({
        type: DELETE_HABIT,
        payload: res
      })
      console.log(res);
    })
    .catch((err) => {
      // Handle Error
      console.log(err);
    })
};
