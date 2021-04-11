import {combineReducers} from 'redux';
import themeReducer from './theme';
import solicitudesReducer from './solicitudes';

export default combineReducers({
  theme: themeReducer,
  solicitudes: solicitudesReducer,
});
