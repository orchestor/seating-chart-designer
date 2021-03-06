import {fromJS} from 'immutable';
import _ from 'lodash';

import {initSpots, setSpotType} from '../models/spot';
import initialState from '../store/initial_state';

/**
 * Reducer for the "design" portion of state
 *
 * @param {Immutable.Map} state - The current state
 * @param {object} action - The action to apply
 * @return {Immutable.Map} - The new state
 */
function designReducer(state = initialState.get('design'), action) {
  switch (action.type) {
    case 'MODIFY_SPOT':
      return modifySpot(state, action);
    case 'SET_DIMENSIONS':
      return setDimensions(state, action);
    case 'SET_NAME':
      return setName(state, action);
    default:
      return state;
  }
}

export default designReducer;

/**
 * Modify a spot's state
 *
 * @param {Immutable.Map} state - The current state
 * @param {object} action - The action object
 * @return {Immutable.Map} - The new state
 */
function modifySpot(state, action) {
  let nextState = state.toJS();
  let {newType, spotId} = action.payload;
  const spot = _.get(nextState.spots, [spotId.row, spotId.col]);
  // outer: for (let i = 0; i < nextState.spots.length; i++) { // eslint-disable-line no-labels
  //   for (let j = 0; j < nextState.spots[i].length; j++) {
  //     if (nextState.spots[i][j].id === spotId) {
  //       spot = nextState.spots[i][j];
  //       break outer; // eslint-disable-line no-labels
  //     }
  //   }
  // }
  if (spot) {
    if (spot.type.id === 'WALL') {
      spot.isPresent = !spot.isPresent;
    } else {
      setSpotType(spot, newType);
    }
  }
  return fromJS(nextState);
}

/**
 * Modify the design dimensions
 *
 * @param {Immutable.Map} state - The current state
 * @param {object} action - The action object
 * @return {Immutable.Map} - The new state
 */
function setDimensions(state, action) {
  let nextState = state.toJS();
  if (action.payload.cols) {
    nextState.cols = action.payload.cols;
  }
  if (action.payload.rows) {
    nextState.rows = action.payload.rows;
  }
  nextState.spots = initSpots(nextState.rows, nextState.cols, nextState.spots);
  return fromJS(nextState);
}

/**
 * Modify the design name
 *
 * @param {Immutable.Map} state - The current state
 * @param {object} action - The action object
 * @return {Immutable.Map} - The new state
 */
function setName(state, action) {
  return state.set('name', action.payload.name);
}
