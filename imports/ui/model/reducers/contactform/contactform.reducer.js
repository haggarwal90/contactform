import * as action from './actions';
import { fromJS } from 'immutable';
const initialState = fromJS({
  forms: fromJS([]),
});

export default (state = initialState, {type, payload, query}) => {
  switch (type) {
    case action.FETCH_FORMS_COMPLETED:
    case action.FETCH_FORMS_FAILED:
      return state.set('forms', fromJS(payload));
    default:
      return state;
  }
}