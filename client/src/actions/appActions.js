import {
  OPEN_DRAWER,
  CLOSE_DRAWER,
  OPEN_MODAL,
  CLOSE_MODAL,
  GET_HABITS
} from './types';

const debug = true;

export const openDrawer = (formType) => dispatch => {
  if(debug){
    console.log("Opening Drawer with a formType of: " + formType);
  }
  dispatch({
    type: OPEN_DRAWER,
    payload: formType
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

export const openModal = () => dispatch => {
 console.log("Opening modal");
 if(debug){
   console.log("Opening Modal"); 
 } 
 dispatch({
    type: OPEN_MODAL,
 })
}

export const closeModal = () => dispatch => {
  if(debug){
    console.log("Closing Modal");
  }
  dispatch({
    type: CLOSE_MODAL,
  })
}
