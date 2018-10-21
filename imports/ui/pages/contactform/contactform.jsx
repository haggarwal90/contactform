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
      'emailErrorMsg': undefined,
      'telephoneErrorMsg': undefined,
      'zipErrorMsg': undefined,
    }
    this.submitForm = this.submitForm.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
  }
  submitForm() {
    const { firstname, lastname, email, telephone, address, city, state, zip, comments } = this.state;
    
    if (!validateEmail(email) || !validateTelephone(telephone) || !validateZIP(zip)) {
      console.log('***Invalid form****')
      return;
    }


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
    this.props.submitForm(param);
  }
  onStateChange(key, value) {
    const error = {
      'emailErrorMsg': undefined,
      'telephoneErrorMsg': undefined,
      'zipErrorMsg': undefined,
    };

    if (key === 'email' && !validateEmail(value)) { 
      error.emailErrorMsg = "Invalid email";
    } else if (key === 'telephone' && !validateTelephone(value)) {
      error.telephoneErrorMsg = "Invalid telephone";
    } else if (key === 'zip' && !validateZIP(value)) {
      error.zipErrorMsg = "Invalid zip";
    }

    this.setState({
      [key]: value,
      ...error,
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
      emailErrorMsg,
      telephoneErrorMsg,
      zipErrorMsg,
    } = this.state;
    return (
      <div className="contact-form">
        <TextField
          className="contact-form__field--left"
          hintText="First name"
          floatingLabelText="First name"
          value={firstname}
          onChange={(event) => this.onStateChange('firstname', event.target.value)}
        /><br />
        <TextField
          className="contact-form__field--right"
          hintText="Last name"
          floatingLabelText="Last name"
          value={lastname}
          onChange={(event) => this.onStateChange('lastname', event.target.value)}
        /><br />
        <TextField
          className="contact-form__field--left"
          hintText="Email"
          floatingLabelText="Email"
          value={email}
          onChange={(event) => this.onStateChange('email', event.target.value)}
          errorText={emailErrorMsg}
        /><br />
        <TextField
          className="contact-form__field--right"
          hintText="Telephone"
          floatingLabelText="Telephone"
          value={telephone}
          onChange={(event) => this.onStateChange('telephone', event.target.value)}
          errorText={telephoneErrorMsg}
        /><br />
        <TextField
          className="contact-form__field--left"
          hintText="Address"
          floatingLabelText="Address"
          value={address}
          onChange={(event) => this.onStateChange('address', event.target.value)}
        /><br />
        <TextField
          className="contact-form__field--right"
          hintText="City"
          floatingLabelText="City"
          value={city}
          onChange={(event) => this.onStateChange('city', event.target.value)}
        /><br />
        <TextField
          className="contact-form__field--left"
          hintText="State"
          floatingLabelText="State"
          value={state}
          onChange={(event) => this.onStateChange('state', event.target.value)}
        /><br />
        <TextField
          className="contact-form__field--right"
          hintText="Zip"
          floatingLabelText="Zip"
          value={zip}
          onChange={(event) => this.onStateChange('zip', event.target.value)}
          errorText={zipErrorMsg}
        /><br />
        <TextField
          className="contact-form__field--left"
          hintText="Comments"
          floatingLabelText="Comments"
          value={comments}
          onChange={(event) => this.onStateChange('comments', event.target.value)}
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