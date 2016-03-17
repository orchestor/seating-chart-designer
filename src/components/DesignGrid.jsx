import React from 'react';
import DesignSpot from './DesignSpot';

const spotSizes = {
  1: {
    spot: 55,
    wall: 6
  },
  2: {
    spot: 65,
    wall: 7
  },
  3: {
    spot: 75,
    wall: 8
  },
  4: {
    spot: 85,
    wall: 9
  },
  5: {
    spot: 95,
    wall: 10
  }
};

const DesignGrid = React.createClass({
  propTypes: {
    onSpotClick: React.PropTypes.func.isRequired,
    spots: React.PropTypes.array.isRequired,
    zoom: React.PropTypes.number.isRequired
  },

  handleSpotClick: function(spotId) {
    this.props.onSpotClick(spotId);
  },

  render: function() {
    const {spots, zoom} = this.props;
    const gridHeight = (
      Math.ceil(spots.length / 2) * spotSizes[zoom].spot +
      Math.floor(spots.length / 2) * spotSizes[zoom].wall
    );
    const gridWidth = (
      Math.ceil(spots[0].length / 2) * spotSizes[zoom].spot +
      Math.floor(spots[0].length / 2) * spotSizes[zoom].wall
    );
    let rowKey = 0;
    return (
      <div
        className="design-grid-container"
        style={{
          // window height minus nav height
          height: $(window).height() - 64 + 'px',
          overflow: 'scroll'
        }}
      >
        <div
          className="design-grid clearfix"
          data-zoom={zoom}
          style={{
            height: gridHeight + 'px',
            width: gridWidth + 'px'
          }}
        >
          {spots.map(row => (
            <div className="design-grid-row" key={`grid-row-${rowKey++}`}>
              {row.map(col => (
                <DesignSpot
                  key={col.id.str}
                  onSpotClick={() => this.handleSpotClick(col.id)}
                  spot={col}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
});

export default DesignGrid;
