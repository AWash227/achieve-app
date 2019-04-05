import { GET_HABITS, ADD_HABIT, DELETE_HABIT } from "./types";

export const getHabits = () => {
  return {
    type: GET_HABITS
  };
};

export const deleteHabit = id => {
  return {
    type: DELETE_HABIT,
    payload: id
  };
};
