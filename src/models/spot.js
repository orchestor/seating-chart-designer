import _ from 'lodash';

/**
 * @var {object} wallOrientations - Possible wall orientations
 */
export const wallOrientations = {
  HORIZONTAL: {
    desc: 'Horizontal',
    id: 'HORIZONTAL'
  },
  VERTICAL: {
    desc: 'Vertical',
    id: 'VERTICAL'
  }
};

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
  INVISIBLE: {
    id: 'INVISIBLE'
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
  },
  WALL: orientation => {
    return {
      desc: 'Wall',
      id: 'WALL',
      orientation: wallOrientations[orientation]
    };
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
  for (let i = 0; i < (2 * rows - 1); i++) {
    spots[i] = [];
    // spot row with walls in between
    if (i % 2 === 0) {
      for (let j = 0; (j < 2 * cols - 1); j++) {
        if (j % 2 === 0) {
          spots[i][j] = createSpot(i, j, 'EMPTY');
        } else {
          spots[i][j] = createSpot(i, j, 'WALL', 'VERTICAL');
        }
      }
    // wall-only row (empty spots in between)
    } else {
      for (let j = 0; (j < 2 * cols - 1); j++) {
        if (j % 2 === 0) {
          spots[i][j] = createSpot(i, j, 'WALL', 'HORIZONTAL');
        } else {
          spots[i][j] = createSpot(i, j, 'INVISIBLE');
        }
      }
    }
  }
  return spots;
}

/**
 * Factory function for spot object
 *
 * @param {number} row - The row index
 * @param {number} col - The column index
 * @param {string} type - The spot type
 * @param {string} orientation - The spot orientation (where applicable)
 * @return {object} - The blank spot
 */
export function createSpot(row, col, type, orientation) {
  // spot id source (shared)
  const spotIdSource = {
    id: {
      col,
      row,
      str: `${row}-${col}`
    }
  };
  // if it's a wall spot, behave differently
  if (type === 'WALL') {
    return _.assign({}, spotIdSource, {
      isPresent: false,
      type: spotTypes[type](orientation)
    });
  }
  // otherwise, return a normal spot
  return _.assign({}, spotIdSource, {
    meta: {},
    type: spotTypes[type],
    userId: null
  });
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
