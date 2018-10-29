import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { submitForm } from '../../model/reducers/contactform/actions';

import './contactform.style.scss';

const validateEmail= (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
const validateTelephone = (telephone) => {
  const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return re.test(telephone);
}
const validateZIP = (zip) => {
  const regex = /^[0-9]{5}(?:-[0-9]{4})?$/;
  return regex.test(zip);
}

const validateString = (str) => {
  return str != null && !!str.length;
}

const validationMethodMap = (key) => {
  switch(key) {
    case 'email': 
      return validateEmail;
    case 'zip': 
      return validateZIP;
    case 'telephone':  
      return validateTelephone;
    default:
      return validateString;
  }
}

class ContactForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      'firstname': '',
      'lastname': '',
      'email': '',
      'telephone': '',
      'address': '',
      'city': '',
      'state': '',
      'zip': '',
      'comments': '',
      'errorFields': [],
    }
    this.submitForm = this.submitForm.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
    this.validateAndSetState = this.validateAndSetState.bind(this);
  }
  submitForm() {
    const { firstname, lastname, email, telephone, address, city, state, zip, comments } = this.state;

    const param = {
      data: {
        firstname,
        lastname,
        email,
        telephone,
        address,
        city,
        state,
        zip,
        comments
      }
    }

    if(!this.validateAndSetState(param && param.data)) {
      console.log('***Invalid form****')
      return;
    }
    this.props.submitForm(param);
  }

  validateAndSetState(param) {
    const { errorFields } = this.state;
    const keys = Object.keys(param);
    let isParamValid = true;
  
    keys.forEach(key => {
      const value = param[key];
      const index = errorFields.indexOf(key);

      if (validationMethodMap(key)(value)) {
        if ( index > -1) {
          errorFields.splice(index, 1);
        }
      } else {
        if ( index < 0) {
          errorFields.push(key);
        }
        isParamValid = false;
      }

      this.onStateChange(key, value);
    });

    this.onStateChange({
      errorFields,
    }, () => {
      this.forceUpdate();
    });

    return isParamValid;  
  }

  onStateChange(key, value) {
    this.setState({
      [key]: value,
    })
  }

  render() {
    const { 
      firstname,
      lastname,
      email,
      telephone,
      address,
      city,
      state,
      zip,
      comments ,
      errorFields,
    } = this.state;
    return (
      <div className="contact-form">
        <TextField
          className="contact-form__field--left"
          hintText="First name"
          floatingLabelText="First name"
          value={firstname}
          onChange={(event) => this.validateAndSetState({'firstname': event.target.value})}
          errorText={errorFields.indexOf('firstname') > -1 ? "Invalid first name" : ""}
        /><br />
        <TextField
          className="contact-form__field--right"
          hintText="Last name"
          floatingLabelText="Last name"
          value={lastname}
          onChange={(event) => this.validateAndSetState({'lastname': event.target.value})}
          errorText={errorFields.indexOf('lastname') > -1 ? "Invalid last name" : ""}
        /><br />
        <TextField
          className="contact-form__field--left"
          hintText="Email"
          floatingLabelText="Email"
          value={email}
          onChange={(event) => this.validateAndSetState({'email': event.target.value})}
          errorText={errorFields.indexOf('email') > -1 ? "Invalid email" : ""}
        /><br />
        <TextField
          className="contact-form__field--right"
          hintText="Telephone"
          floatingLabelText="Telephone"
          value={telephone}
          onChange={(event) => this.validateAndSetState({'telephone': event.target.value})}
          errorText={errorFields.indexOf('telephone') > -1 ? "Invalid telephone" : ""}
        /><br />
        <TextField
          className="contact-form__field--left"
          hintText="Address"
          floatingLabelText="Address"
          value={address}
          onChange={(event) => this.validateAndSetState({'address': event.target.value})}
          errorText={errorFields.indexOf('address') > -1 ? "Invalid address" : ""}
        /><br />
        <TextField
          className="contact-form__field--right"
          hintText="City"
          floatingLabelText="City"
          value={city}
          onChange={(event) => this.validateAndSetState({'city': event.target.value})}
          errorText={errorFields.indexOf('city') > -1 ? "Invalid city" : ""}
        /><br />
        <TextField
          className="contact-form__field--left"
          hintText="State"
          floatingLabelText="State"
          value={state}
          onChange={(event) => this.validateAndSetState({'state': event.target.value})}
          errorText={errorFields.indexOf('state') > -1 ? "Invalid state" : ""}
        /><br />
        <TextField
          className="contact-form__field--right"
          hintText="Zip"
          floatingLabelText="Zip"
          value={zip}
          onChange={(event) => this.validateAndSetState({'zip': event.target.value})}
          errorText={errorFields.indexOf('zip') > -1 ? "Invalid zip" : ""}
        /><br />
        <TextField
          className="contact-form__field--left"
          hintText="Comments"
          floatingLabelText="Comments"
          value={comments}
          onChange={(event) => this.validateAndSetState({'comments': event.target.value})}
          errorText={errorFields.indexOf('comments') > -1 ? "Invalid comments" : ""}
        /><br />
        <div className="contact-form__submit">
          <RaisedButton label="Submit" onClick={() => this.submitForm()}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  'submitForm': param => dispatch(submitForm(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);