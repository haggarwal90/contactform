import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import moment from 'moment';

import './header.style.scss';

const Header = (props) => {
  const token = props.token || localStorage.getItem('token');
  const lastLoginDate = props.lastLoginDate || localStorage.getItem('lastLoginDate');

  const isLoggedIn = token !== '' && lastLoginDate == moment().format('MM/DD/YYYY');

  return (
    <div className="app-header">
      <Link to="/">Home</Link>
      <Link to="/contactform">Contact form</Link>
      { isLoggedIn && <Link to="/administration">Administration</Link> }
      { !isLoggedIn && <Link to="/signin">Login</Link> }        
    </div>
  );
}

const mapStateToProps = state => ({
  'lastLoginDate': state.login.toJS().lastLoginDate,
  'token': state.login.toJS().token,
});



export default connect(mapStateToProps, undefined)(Header);