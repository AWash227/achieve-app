import {
  OPEN_DRAWER,
  CLOSE_DRAWER
} from './types';

const debug = true;

export const openDrawer = (isHabit) => dispatch => {
  if(debug){
    console.log("Opening Drawer with isHabit=: " + isHabit);
  }
  dispatch({
    type: OPEN_DRAWER,
    payload: isHabit
  })
}

export const closeDrawer = () => dispatch => {
  if(debug){
    console.log("Closing Drawer"); 
  }
  dispatch({
    type: CLOSE_DRAWER 
  })
}
