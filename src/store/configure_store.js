import {createStore, applyMiddleware} from 'redux';
import {apiMiddleware} from 'redux-api-middleware';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger';
import reducer from '../reducers/index';

// define application middleware
const middleware = [
  thunkMiddleware,
  apiMiddleware,
  promiseMiddleware
];

if (!window.ISC) {
  middleware.push(createLogger({
    // log as plain JS, not Immutable.Map
    stateTransformer: state => state.toJS()
  }));
}

/**
 * Configure store with initial state
 *
 * @param {Immutable.Map} initialState - The initial state
 * @return {object} - The configured store
 */
export default function configureStore(initialState) {
  return applyMiddleware(...middleware)(createStore)(reducer, initialState);
}
