import {fromJS} from 'immutable';
import {initSpots, spotTypes} from '../models/spot';
import _ from 'lodash';

export const defaultRows = 8;
export const defaultCols = 14;

const currDesign = _.get(window, ['ISC', 'initialState', 'design']);
const readOnly = _.get(window, ['ISC', 'initialState', 'settings', 'readOnly']);

const initialDesign = () => {
  if (currDesign) {
    if (!currDesign.spots) {
      currDesign.spots = initSpots(currDesign.rows, currDesign.cols);
    }
    return currDesign;
  }
  return {
    cols: defaultCols,
    name: 'New Design',
    rows: defaultRows,
    spots: initSpots(defaultRows, defaultCols)
  };
};

const initialState = fromJS({
  design: initialDesign(),
  settings: {
    activeType: spotTypes.DESK,
    readOnly: readOnly === undefined ? false : readOnly,
    zoom: 3
  }
});

console.log('initialState', initialState);

export default initialState;
