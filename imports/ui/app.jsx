import React from 'react';
import { Switch, Route, withRouter  } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import moment from 'moment';

import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import ContactForm from './pages/contactform';
import Admin from './pages/admin';
import SignIn from  './pages/signin';

import './app.style.scss';

class App extends React.PureComponent {
  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      console.log("***Menu Changed****", location.pathname);
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }
  render() {
    const token = localStorage.getItem('token');
    const lastLoginDate = localStorage.getItem('lastLoginDate');
  
    const isLoggedIn = token !== '' && lastLoginDate == moment().format('MM/DD/YYYY');
    return (
      <MuiThemeProvider>
        <div className="container">
          <Header />
          <div className="app-content">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/contactform' component={ContactForm}/>
              {
                isLoggedIn && <Route path='/administration' component={Admin}/>
              }
              {
                !isLoggedIn && <Route path='/signin' component={SignIn}/>
              }
            </Switch>
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);