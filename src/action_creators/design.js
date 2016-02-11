/**
 * Modify spot (on click)
 *
 * @param {object} spotId - The id of the spot
 * @param {object} newType - The new type to assign
 * @return {object} - The action object
 */
export function modifySpot(spotId, newType) {
  return {
    type: 'MODIFY_SPOT',
    payload: {
      newType,
      spotId
    }
  };
}

/**
 * Set design dimensions
 *
 * @param {object} payload - The new dimensions (cols/rows)
 * @return {object} - The action object
 */
export function setDimensions(payload) {
  return {
    type: 'SET_DIMENSIONS',
    payload
  };
}

/**
 * Set design name
 *
 * @param {object} name - The new name
 * @return {object} - The action object
 */
export function setName(name) {
  return {
    type: 'SET_NAME',
    payload: {
      name
    }
  };
}
