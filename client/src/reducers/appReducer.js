import {
  OPEN_DRAWER,
  CLOSE_DRAWER,
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/types';

const initialState = {
  drawerOpen: false,
  modalOpen: false,
  formType: "Goal",
}

export default function(state=initialState, action) {
  switch(action.type){
    case OPEN_DRAWER:
      return{
        ...state,
        drawerOpen: true,
        formType: action.payload
    }
    case CLOSE_DRAWER:
      return{
        ...state,
        drawerOpen: false,
    }
    case OPEN_MODAL:
      return{
        ...state,
        modalOpen: true 
    }
    case CLOSE_MODAL:
      return{
        ...state,
        modalOpen: false 
    }
    default:
      return state;
  }
}
