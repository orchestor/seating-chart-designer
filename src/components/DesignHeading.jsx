import React from 'react';
import DesignName from './DesignName';

const DesignHeading = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    onNameChange: React.PropTypes.func.isRequired,
    onZoomIn: React.PropTypes.func.isRequired,
    onZoomOut: React.PropTypes.func.isRequired,
    zoom: React.PropTypes.number.isRequired
  },

  render: function() {
    const {name, onNameChange, onZoomIn, onZoomOut, zoom} = this.props;
    const isSmallestZoom = zoom === 1;
    const isLargestZoom = zoom === 5;
    return (
      <nav>
        <div className="nav-wrapper design-heading blue-grey lighten-2">
          <DesignName name={name} onNameChange={onNameChange} />
          <ul className="right hide-on-med-and-down">
            <li className={isSmallestZoom ? 'disabled' : null}>
              <a href="#!" onClick={isSmallestZoom ? undefined : onZoomOut}>
                <i className="material-icons">{'zoom_out'}</i>
              </a>
            </li>
            <li className={isLargestZoom ? 'disabled' : null}>
              <a href="#!" onClick={isLargestZoom ? undefined : onZoomIn}>
                <i className="material-icons">{'zoom_in'}</i>
              </a>
            </li>
            {
              /*
              <li>
                <label>
                  <input
                    type="text"
                  />
                  {'Rows'}
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="text"
                  />
                  {'Columns'}
                </label>
              </li>
              */
            }
            {
              /*
              <li>
                <a href="#!" onClick={onZoomIn}>
                  <i className="material-icons">{'settings'}</i>
                </a>
              </li>
              */
            }
          </ul>
        </div>
      </nav>
    );
  }
});

export default DesignHeading;
