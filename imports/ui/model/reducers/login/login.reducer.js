import * as action from './actions';
import moment from 'moment';
import { fromJS } from 'immutable';
const initialState = fromJS({
  'lastlogindate': undefined,
  'token': '',
});

export default (state = initialState, {type, payload, date}) => {
  switch (type) {
    case action.LOGIN_COMPLETED:
      return state.set('lastlogindate', date)
        .set('token', payload);
    case action.LOGIN_FAILED:
      return state;
    default:
      return state;
  }
}