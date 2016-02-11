import {combineReducers} from 'redux-immutablejs';
import design from './design';
import settings from './settings';

export default combineReducers({
  design,
  settings
});
