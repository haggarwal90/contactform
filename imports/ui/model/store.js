import { createStore, applyMiddleware } from 'redux'; 

import reducers from './reducers';

// @TODO Use react-redux-i18n

/* Redux middlewares */
import thunk from 'redux-thunk';

/* Redux Devtools */
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export default () => {
  return createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk)),
  );
};
