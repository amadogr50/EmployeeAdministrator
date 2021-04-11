import {SOLICITUDES} from '../actions/solicitudes';

const initialState = [];

const solicitudesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOLICITUDES.ADD_SOLICITUDE:
      return [...state, action.solicitude];
    default:
      return state;
  }
};

export default solicitudesReducer;
