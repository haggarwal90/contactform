import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from '../imports/ui/app.jsx';

import './main.html';

Meteor.startup(() => {
  render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('main'));
});