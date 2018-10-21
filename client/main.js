import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from '../imports/ui/model/store';

const appStore = store();

import App from '../imports/ui/app.jsx';

import './main.html';

Meteor.startup(() => {
  render((
    <Provider store={appStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ), document.getElementById('main'));
});