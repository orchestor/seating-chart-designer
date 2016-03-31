import React from 'react';
import {connect} from 'react-redux';
import DesignControls from '../components/DesignControls';
import DesignGrid from '../components/DesignGrid';
import DesignHeading from '../components/DesignHeading';
import {modifySpot, setCols, setName, setRows} from '../action_creators/design';
import {setActiveType, zoomIn, zoomOut} from '../action_creators/settings';

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

  handleJsonClick: function(e) {
    e.preventDefault();
    window.prompt(
      'Copy to clipboard: Ctrl+C, Enter',
      JSON.stringify(this.props.spots)
    );
  },

  render: function() {
    const {activeType, cols, dispatch, name, rows, spots, zoom} = this.props;
    return (
      <div className="design">
        <div className="design-left">
          <DesignControls
            activeType={activeType}
            onControlClick={type => dispatch(setActiveType(type))}
            onJsonClick={this.handleJsonClick}
          />
        </div>
        <div className="design-right">
          <DesignHeading
            cols={cols}
            name={name}
            onColsChange={val => dispatch(setCols(val))}
            onNameChange={val => dispatch(setName(val))}
            onRowsChange={val => dispatch(setRows(val))}
            onZoomIn={() => dispatch(zoomIn())}
            onZoomOut={() => dispatch(zoomOut())}
            rows={rows}
            zoom={zoom}
          />
          <DesignGrid
            onSpotClick={spotId => dispatch(modifySpot(spotId, activeType))}
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
    rows: state.getIn(['design', 'rows']),
    spots: state.getIn(['design', 'spots']).toJS(),
    zoom: state.getIn(['settings', 'zoom'])
  };
}

// wrap component to inject dispatch and state into it
export default connect(mapStateToProps)(DesignCanvas);
