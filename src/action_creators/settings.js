/**
 * Set the active control type
 *
 * @param {object} spotType - The new active control
 * @return {object} - The action object
 */
export function setActiveType(spotType) {
  return {
    payload: {
      spotType
    },
    type: 'SET_ACTIVE_TYPE'
  };
}

/**
 * Zoom in
 *
 * @return {object} - The action object
 */
export function zoomIn() {
  return {
    type: 'ZOOM_IN'
  };
}

/**
 * Zoom out
 *
 * @return {object} - The action object
 */
export function zoomOut() {
  return {
    type: 'ZOOM_OUT'
  };
}
