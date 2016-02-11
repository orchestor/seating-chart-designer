import {fromJS} from 'immutable';
import {initSpots, spotTypes} from '../models/spot';

const defaultRows = 10;
const defaultCols = 25;

const initialState = fromJS({
  design: {
    cols: defaultCols,
    name: 'New Design',
    rows: defaultRows,
    spots: initSpots(defaultRows, defaultCols)
  },
  settings: {
    activeType: spotTypes.DESK,
    zoom: 3
  }
});

export default initialState;
