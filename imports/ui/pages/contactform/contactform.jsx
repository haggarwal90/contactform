import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './contactform.style.scss';

class ContactForm extends React.PureComponent {
  render() {
    return (
      <div className="contact-form">
        <TextField
          hintText="First name"
          floatingLabelText="First name"
        /><br />
        <TextField
          hintText="Last name"
          floatingLabelText="Last name"
        /><br />
        <TextField
          hintText="Email"
          floatingLabelText="Email"
        /><br />
        <TextField
          hintText="Telephone"
          floatingLabelText="Telephone"
        /><br />
        <TextField
          hintText="Address"
          floatingLabelText="Address"
        /><br />
        <TextField
          hintText="City"
          floatingLabelText="City"
        /><br />
        <TextField
          hintText="State"
          floatingLabelText="State"
        /><br />
        <TextField
          hintText="Zip"
          floatingLabelText="Zip"
        /><br />
        <TextField
          hintText="Comments"
          floatingLabelText="Comments"
        /><br />
        <div className="contact-form__submit">
          <RaisedButton label="Submit" />
        </div>
      </div>
    )
  }
}

export default ContactForm;