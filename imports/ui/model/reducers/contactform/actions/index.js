import { contactFormREST } from '../../../../config';

export const SUBMIT_FORM = '@@rest/SUBMIT_FORM';
export const SUBMIT_FORM_COMPLETED = '@@rest/SUBMIT_FORM_COMPLETED';
export const SUBMIT_FORM_FAILED = '@@rest/SUBMIT_FORM_FAILED';

export const FETCH_FORMS = '@@rest/FETCH_FORMS';
export const FETCH_FORMS_COMPLETED = '@@rest/FETCH_FORMS_COMPLETED';
export const FETCH_FORMS_FAILED = '@@rest/FETCH_FORMS_FAILED';

export const submitForm = param => async (dispatch) => {
  try {
    const response = await contactFormREST.post('/form', param.data);
    dispatch({
      'type': SUBMIT_FORM_COMPLETED,
    });
    console.log('***Form submitted successfully***');
  } catch(error) {
    console.log('***Form submittion failed***');
    dispatch({
      'type': SUBMIT_FORM_FAILED,
    });
  }
}

export const fetchForms = () => async(dispatch) => {
  try {
    const response = await contactFormREST.get('/admin/forms',{
      'headers': {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    dispatch({
      'type': FETCH_FORMS_COMPLETED,
      'payload': response.data && response.data.forms,
    });
  } catch(error) {
    dispatch({
      'type': FETCH_FORMS_FAILED,
      'payload': [],
    });
  }
}