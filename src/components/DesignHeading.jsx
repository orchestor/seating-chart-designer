import React from 'react';
import DesignName from './DesignName';

const DesignHeading = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    onNameChange: React.PropTypes.func.isRequired,
    onZoomIn: React.PropTypes.func.isRequired,
    onZoomOut: React.PropTypes.func.isRequired
  },

  render: function() {
    let {name, onNameChange, onZoomIn, onZoomOut} = this.props;
    return (
      <nav>
        <div className="nav-wrapper design-heading blue-grey lighten-2">
          <DesignName name={name} onNameChange={onNameChange} />
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="#!" onClick={onZoomOut}>
                <i className="material-icons">{'zoom_out'}</i>
              </a>
            </li>
            <li>
              <a href="#!" onClick={onZoomIn}>
                <i className="material-icons">{'zoom_in'}</i>
              </a>
            </li>
            <li>
              <a href="#!" onClick={onZoomIn}>
                <i className="material-icons">{'settings'}</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
});

export default DesignHeading;
