import { contactFormREST } from '../../../../config';
import moment from 'moment';

import history from '../../../../history';

export const LOGIN_COMPLETED = '@@rest/LOGIN_COMPLETED';
export const LOGIN_FAILED = '@@rest/LOGIN_FAILED';

export const login = param => async (dispatch) => {
  try {
    const response = await contactFormREST.post('/login', param.data);
    const lastLoginDate = moment().format('MM/DD/YYYY');

    // Set token and login date to local storage
    localStorage.setItem('token', response.data && response.data.token);
    localStorage.setItem('lastLoginDate', lastLoginDate);

    // Goto Home on success login
    history.replace('/');
    location.reload();

    console.log('***Login successful*** ', response.data.email);
    dispatch({
      'type': LOGIN_COMPLETED,
      'payload': response.data && response.data.token,
      'date': lastLoginDate,
    });
  } catch(error) {
    console.log('***Login failed***', error && error.response && error.response.data && error.response.data.error);
    dispatch({
      'type': LOGIN_FAILED,
      'payload': error && error.response && error.response.data && error.response.data.error,
    });
  }
}
