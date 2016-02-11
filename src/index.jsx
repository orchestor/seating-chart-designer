import './_assets/index.pcss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store/configure_store';
import AppContainer from './containers/App';

// configure store
const store = configureStore();

// render to document
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={AppContainer} path="/" />
    </Router>
  </Provider>,
  document.getElementById('react-dom')
);
