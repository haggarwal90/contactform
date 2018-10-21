import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { submitForm } from '../../model/reducers/contactform/actions';

import './contactform.style.scss';

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
    }
    this.submitForm = this.submitForm.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
  }
  submitForm() {
    const { firstname, lastname, email, telephone, address, city, state, zip, comments } = this.state;
    
    // validate email

    // validate telephone


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
      comments } = this.state;
    return (
      <div className="contact-form">
        <TextField
          hintText="First name"
          floatingLabelText="First name"
          value={firstname}
          onChange={(event) => this.onStateChange('firstname', event.target.value)}
        /><br />
        <TextField
          hintText="Last name"
          floatingLabelText="Last name"
          value={lastname}
          onChange={(event) => this.onStateChange('lastname', event.target.value)}
        /><br />
        <TextField
          hintText="Email"
          floatingLabelText="Email"
          value={email}
          onChange={(event) => this.onStateChange('email', event.target.value)}
        /><br />
        <TextField
          hintText="Telephone"
          floatingLabelText="Telephone"
          value={telephone}
          onChange={(event) => this.onStateChange('telephone', event.target.value)}
        /><br />
        <TextField
          hintText="Address"
          floatingLabelText="Address"
          value={address}
          onChange={(event) => this.onStateChange('address', event.target.value)}
        /><br />
        <TextField
          hintText="City"
          floatingLabelText="City"
          value={city}
          onChange={(event) => this.onStateChange('city', event.target.value)}
        /><br />
        <TextField
          hintText="State"
          floatingLabelText="State"
          value={state}
          onChange={(event) => this.onStateChange('state', event.target.value)}
        /><br />
        <TextField
          hintText="Zip"
          floatingLabelText="Zip"
          value={zip}
          onChange={(event) => this.onStateChange('zip', event.target.value)}
        /><br />
        <TextField
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