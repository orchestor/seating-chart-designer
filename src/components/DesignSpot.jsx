import React from 'react';
import {spotNotEmpty} from '../models/spot';
import _ from 'lodash';

const DesignSpot = React.createClass({
  propTypes: {
    onSpotClick: React.PropTypes.func.isRequired,
    spot: React.PropTypes.object.isRequired
  },

  componentDidMount: function() {
    this.showTooltipForUser();
  },

  componentDidUpdate: function() {
    this.showTooltipForUser();
  },

  showTooltipForUser: function() {
    const {spot} = this.props;
    const hasUser = spot.userId !== null && spotNotEmpty(spot.type.id);
    if (hasUser) {
      $(this.spot).tooltip();
    }
  },

  render: function() {
    const {onSpotClick, spot} = this.props;
    const hasIcon = spotNotEmpty(spot.type.id);
    const hasUser = spot.userId !== null && hasIcon;
    let classes = 'design-spot';
    if (spot.isPresent) {
      classes += ' is-present';
    }
    if (hasUser) {
      classes += ' has-user';
    }
    return (
      <div
        className={classes}
        data-delay={hasUser ? '50' : undefined}
        data-orientation={_.get(spot, ['type', 'orientation', 'id'])}
        data-position={hasUser ? 'bottom' : undefined}
        data-tooltip={hasUser ? spot.userName ? spot.userName : 'No Name' : undefined}
        data-type={spot.type.id}
        onClick={spot.type.id === 'JUNCTION' ? undefined : onSpotClick}
        ref={ref => this.spot = ref}
      >
        {hasUser && hasIcon ? (
          <i className="material-icons user-icon">
            {'face'}
          </i>
        ) : hasIcon ? (
          <i className="material-icons spot-type-icon" style={{color: spot.type.color}}>
            {spot.type.icon}
          </i>
        ) : null}
      </div>
    );
  }
});

export default DesignSpot;
