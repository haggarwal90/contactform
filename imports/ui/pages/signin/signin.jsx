import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './signin.style.scss';

class SignIn extends React.PureComponent {
  render() {
    return (
      <div className="sign-in">
        <i 
          className="material-icons"
        >
          close
        </i>
        <TextField
          hintText="Email"
          floatingLabelText="Email"
        /><br />
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password"
        /><br />
        <div className="sign-in__login">
          <RaisedButton label="Log in" className="login" />
        </div>
      </div>
    );
  }
}

export default SignIn;