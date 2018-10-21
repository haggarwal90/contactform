import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { login } from '../../model/reducers/login/actions';

import './signin.style.scss';

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      'email': '',
      'password': '',
    }
    this.onLogin = this.onLogin.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
  }
  onLogin() {
    const { email, password } = this.state;
    const param = {
      'data': {
        email,
        password,
      }
    }
    this.props.login(param);
  }
  onStateChange(key, value) {
    this.setState({
      [key]: value,
    })
  }
  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <TextField
          hintText="Email"
          floatingLabelText="Email"
          value={email}
          onChange={(event) => this.onStateChange('email', event.target.value)}
        /><br />
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password"
          value={password}
          onChange={(event) => this.onStateChange('password', event.target.value)}
        /><br />
        <div className="sign-in__login">
          <RaisedButton label="Log in" className="login" onClick={() => this.onLogin()}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  'login': param => dispatch(login(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);