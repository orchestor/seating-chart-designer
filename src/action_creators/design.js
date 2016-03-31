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
 * Set design cols
 *
 * @param {object} cols - The new cols
 * @return {object} - The action object
 */
export function setCols(cols) {
  return {
    type: 'SET_DIMENSIONS',
    payload: {
      cols
    }
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

/**
 * Set design rows
 *
 * @param {object} rows - The new rows
 * @return {object} - The action object
 */
export function setRows(rows) {
  return {
    type: 'SET_DIMENSIONS',
    payload: {
      rows
    }
  };
}
