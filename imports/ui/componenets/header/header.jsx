import React from 'react';
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';

import Modal from '../modal';
import SignIn from '../../pages/signin';

import './header.style.scss';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showLoginModal: false,
    }
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange(key, value) {
    this.setState({
      [key]: value,
    })
  }
  
  render() {
    const { showLoginModal } = this.state;
    return (
      <div className="app-header">
        <div className="app-header__menu">
          <Link to="/">Home</Link>
          <Link to="/contactform">Contact form</Link>
          <Link to="/administration">Administration</Link>
          <RaisedButton label="Signin" className="signin" onClick={() => this.handleStateChange('showLoginModal', true)}/>
        </div>
        {showLoginModal ? (
          <Modal>
            <SignIn />
          </Modal>
        ) : ''}
      </div>
    );
  }
}

export default Header;