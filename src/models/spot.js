/**
 * @var {object} spotTypes - A map of spot types
 */
export const spotTypes = {
  AC_UNIT: {
    color: '#546e7a',
    desc: 'AC Unit',
    icon: 'ac_unit',
    id: 'AC_UNIT'
  },
  CONFERENCE: {
    color: '#546e7a',
    desc: 'Conference',
    icon: 'phone',
    id: 'CONFERENCE'
  },
  DESK: {
    color: '#546e7a',
    desc: 'Desk',
    icon: 'desktop_mac',
    id: 'DESK'
  },
  EMPTY: {
    id: 'EMPTY'
  },
  KITCHEN: {
    color: '#546e7a',
    desc: 'Kitchen',
    icon: 'kitchen',
    id: 'KITCHEN'
  },
  RESTROOM: {
    color: '#546e7a',
    desc: 'Restroom',
    icon: 'wc',
    id: 'RESTROOM'
  }
};

/**
 * Initialize a two-dimensional spots array
 *
 * @param {number} rows - The y axis
 * @param {number} cols - The x axis
 * @return {number} - The two-dimensional array
 */
export function initSpots(rows, cols) {
  let spots = [];
  for (let i = 0; i < rows; i++) {
    spots[i] = [];
    for (let j = 0; j < cols; j++) {
      spots[i][j] = createSpot(`${i}-${j}`);
    }
  }
  return spots;
}

/**
 * Factory function for spot object
 *
 * @param {string} id - A unique identifier
 * @return {object} - The blank spot
 */
export function createSpot(id) {
  return {
    id,
    meta: {},
    type: spotTypes.EMPTY,
    userId: null
  };
}

/**
 * Set the spot's type
 *
 * @param {object} spot - The spot to modify
 * @param {object} type - The type to assign
 */
export function setSpotType(spot, type) {
  if (spot.type.id === type.id) {
    spot.type = spotTypes.EMPTY;
  } else {
    spot.type = type;
  }
}
