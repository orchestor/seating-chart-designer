import React from 'react';

const DesignSpot = React.createClass({
  propTypes: {
    onSpotClick: React.PropTypes.func.isRequired,
    spot: React.PropTypes.object.isRequired
  },

  render: function() {
    let {onSpotClick, spot} = this.props;
    return (
      <div className="design-spot" onClick={onSpotClick}>
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
