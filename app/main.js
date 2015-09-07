import React from 'react';
import Router from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import routes from './routes';
import { Provider } from 'react-redux';
import Root from "root"
import store from 'store'

const history = new BrowserHistory();
const element = (
  <Provider store={store}>
    {() => <Router history={history} routes={routes} /> }
  </Provider>
);
React.render(element, document.body);
