import React from 'react';
import _ from 'lodash';

const DesignSpot = React.createClass({
  propTypes: {
    onSpotClick: React.PropTypes.func.isRequired,
    spot: React.PropTypes.object.isRequired
  },

  render: function() {
    let {onSpotClick, spot} = this.props;
    let classes = 'design-spot';
    if (spot.isPresent) {
      classes += ' is-present';
    }
    return (
      <div
        className={classes}
        data-orientation={_.get(spot, ['type', 'orientation', 'id'])}
        data-type={spot.type.id}
        onClick={spot.type.id === 'JUNCTION' ? undefined : onSpotClick}
      >
        {spot.type.icon ? (
          <i className="material-icons" style={{color: spot.type.color}}>
            {spot.type.icon}
          </i>
        ) : null}
      </div>
    );
  }
});

export default DesignSpot;
