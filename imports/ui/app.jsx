import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './componenets/header';
import Footer from './componenets/footer';
import Home from './pages/home';
import ContactForm from './pages/contactform';
import Admin from './pages/admin';

import './app.style.scss';

const App = (props) => {
  return (
    <MuiThemeProvider>
      <div className="container">
        <Header />
        <div className="app-content">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/administration' component={Admin}/>
            <Route path='/contactform' component={ContactForm}/>
          </Switch>
        </div>
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}

export default App;