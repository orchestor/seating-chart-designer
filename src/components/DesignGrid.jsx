import React from 'react';
import DesignSpot from './DesignSpot';

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
            height: spots.length * 75 + 'px',
            width: spots[0].length * 75 + 'px'
          }}
        >
          {spots.map(row => (
            <div className="design-grid-row" key={`grid-row-${rowKey++}`}>
              {row.map(col => (
                <DesignSpot
                  key={col.id}
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
