import React from 'react';
import {connect} from 'react-redux';
import DesignControls from '../components/DesignControls';
import DesignGrid from '../components/DesignGrid';
import DesignHeading from '../components/DesignHeading';
import {modifySpot, setName} from '../action_creators/design';
import {setActiveType, zoomIn, zoomOut} from '../action_creators/settings';

const DesignCanvas = React.createClass({
  propTypes: {
    activeType: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired,
    name: React.PropTypes.string,
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
    let {activeType, dispatch, name, spots, zoom} = this.props;
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
            name={name}
            onNameChange={val => dispatch(setName(val))}
            onZoomIn={() => dispatch(zoomIn())}
            onZoomOut={() => dispatch(zoomOut())}
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
    name: state.getIn(['design', 'name']),
    spots: state.getIn(['design', 'spots']).toJS(),
    zoom: state.getIn(['settings', 'zoom'])
  };
}

// wrap component to inject dispatch and state into it
export default connect(mapStateToProps)(DesignCanvas);
