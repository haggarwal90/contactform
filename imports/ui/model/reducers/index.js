import { combineReducers } from 'redux';
import contactform from './contactform/contactform.reducer';
import login from './login/login.reducer';

export default combineReducers({
  contactform,
  login,
});
