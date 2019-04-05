import { GET_HABITS, ADD_HABIT, DELETE_HABIT, HABITS_LOADING } from "./types";
import axios from 'axios';

const server = "http://192.168.1.74:4000/api/habits";

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

export const addHabit = habit => dispatch => {
  axios.post(server, habit)
  return{
    type: ADD_HABIT,
    payload: habit
  }
}

export const deleteHabit = id => {
  return {
    type: DELETE_HABIT,
    payload: id
  };
};


export const setHabitsLoading = () => {
  return {
    type: HABITS_LOADING
  }
}