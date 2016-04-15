import React from 'react';
import {connect} from 'react-redux';
import DesignControls from '../components/DesignControls';
import DesignGrid from '../components/DesignGrid';
import DesignHeading from '../components/DesignHeading';
import {modifySpot, setCols, setName, setRows} from '../action_creators/design';
import {setActiveType, zoomIn, zoomOut} from '../action_creators/settings';
import _ from 'lodash';

const DesignCanvas = React.createClass({
  propTypes: {
    activeType: React.PropTypes.object.isRequired,
    cols: React.PropTypes.number.isRequired,
    dispatch: React.PropTypes.func.isRequired,
    name: React.PropTypes.string,
    rows: React.PropTypes.number.isRequired,
    spots: React.PropTypes.array.isRequired,
    zoom: React.PropTypes.number.isRequired
  },

  handleDoneClick: function(e) {
    e.preventDefault();
    if (_.has(window, ['ISC', 'onDone'])) {
      return window.ISC.onDone();
    }
    console.log('window.ISC.onDone()');
  },

  handleSaveClick: function(e) {
    e.preventDefault();
    const {cols, name, rows, spots} = this.props;
    const newDesign = {cols, name, rows, spots};
    if (_.has(window, ['ISC', 'onSave'])) {
      return window.ISC.onSave(newDesign);
    }
    console.log('window.ISC.onSave(newDesign)', newDesign);
  },

  render: function() {
    const {activeType, cols, dispatch, name, readOnly,
      rows, spots, zoom} = this.props;
    return (
      <div className="design">
        <div className="design-left">
          {readOnly ? null : (
            <DesignControls
              activeType={activeType}
              onControlClick={type => dispatch(setActiveType(type))}
              onDoneClick={this.handleDoneClick}
              onSaveClick={this.handleSaveClick}
            />
          )}
        </div>
        <div className="design-right">
          <DesignHeading
            cols={cols}
            name={name}
            onColsChange={val => dispatch(setCols(parseInt(val, 10)))}
            onNameChange={val => dispatch(setName(val))}
            onRowsChange={val => dispatch(setRows(parseInt(val, 10)))}
            onZoomIn={() => dispatch(zoomIn())}
            onZoomOut={() => dispatch(zoomOut())}
            readOnly={readOnly}
            rows={rows}
            zoom={zoom}
          />
          <DesignGrid
            onSpotClick={spotId => dispatch(modifySpot(spotId, activeType))}
            readOnly={readOnly}
            spots={spots}
            zoom={zoom}
          />
        </div>
      </div>
    );
  }
});

/**
 * Which props do we want to inject, given the global state?
 *
 * @param {Immutable.Map} state - The store
 * @return {object} - The store->props map
 */
function mapStateToProps(state) {
  return {
    activeType: state.getIn(['settings', 'activeType']).toJS(),
    cols: state.getIn(['design', 'cols']),
    name: state.getIn(['design', 'name']),
    readOnly: state.getIn(['settings', 'readOnly']),
    rows: state.getIn(['design', 'rows']),
    spots: state.getIn(['design', 'spots']).toJS(),
    zoom: state.getIn(['settings', 'zoom'])
  };
}

// wrap component to inject dispatch and state into it
export default connect(mapStateToProps)(DesignCanvas);
