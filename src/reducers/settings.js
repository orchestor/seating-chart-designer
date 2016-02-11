import {fromJS} from 'immutable';
import initialState from '../store/initial_state';

/**
 * Reducer for the "settings" portion of state
 *
 * @param {Immutable.Map} state - The current state
 * @param {object} action - The action to apply
 * @return {Immutable.Map} - The new state
 */
function settingsReducer(state = initialState.get('settings'), action) {
  switch (action.type) {
    case 'SET_ACTIVE_TYPE':
      return setActiveType(state, action);
    case 'ZOOM_IN':
      return zoomIn(state);
    case 'ZOOM_OUT':
      return zoomOut(state);
    default:
      return state;
  }
}

export default settingsReducer;

/**
 * Set active type
 *
 * @param {Immutable.Map} state - The current state
 * @param {object} action - The action object
 * @return {Immutable.Map} - The new state
 */
function setActiveType(state, action) {
  let nextState = state.toJS();
  nextState.activeType = action.payload.spotType;
  return fromJS(nextState);
}

/**
 * Zoom in
 *
 * @param {Immutable.Map} state - The current state
 * @return {Immutable.Map} - The new state
 */
function zoomIn(state) {
  return state.set('zoom', state.get('zoom') + 1);
}

/**
 * Zoom out
 *
 * @param {Immutable.Map} state - The current state
 * @return {Immutable.Map} - The new state
 */
function zoomOut(state) {
  return state.set('zoom', state.get('zoom') - 1);
}
