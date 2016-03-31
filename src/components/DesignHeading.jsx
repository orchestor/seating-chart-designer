import React from 'react';
import DesignAxis from './DesignAxis';
import DesignName from './DesignName';
import {defaultCols, defaultRows} from '../store/initial_state';

const DesignHeading = React.createClass({
  propTypes: {
    cols: React.PropTypes.number.isRequired,
    name: React.PropTypes.string,
    onColsChange: React.PropTypes.func.isRequired,
    onNameChange: React.PropTypes.func.isRequired,
    onRowsChange: React.PropTypes.func.isRequired,
    onZoomIn: React.PropTypes.func.isRequired,
    onZoomOut: React.PropTypes.func.isRequired,
    rows: React.PropTypes.number.isRequired,
    zoom: React.PropTypes.number.isRequired
  },

  render: function() {
    const {cols, name, onNameChange, onColsChange, onRowsChange,
      onZoomIn, onZoomOut, rows, zoom} = this.props;
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
            <li>
              <DesignAxis
                defaultValue={defaultRows}
                desc="rows"
                onAxisChange={onRowsChange}
                value={rows}
              />
            </li>
            <li>
              <DesignAxis
                defaultValue={defaultCols}
                desc="columns"
                onAxisChange={onColsChange}
                value={cols}
              />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
});

export default DesignHeading;
