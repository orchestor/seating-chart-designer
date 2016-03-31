import React from 'react';
import DesignControl from './DesignControl';
import {flatten} from '../models/collection';
import {spotTypes} from '../models/spot';

const DesignControls = React.createClass({
  propTypes: {
    activeType: React.PropTypes.object.isRequired,
    onControlClick: React.PropTypes.func.isRequired,
    onJsonClick: React.PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {
      activeControl: 'desktop_mac'
    };
  },

  render: function() {
    let {activeType, onControlClick, onJsonClick} = this.props;
    return (
      <div className="design-controls">
        <ul>
          {flatten(spotTypes).filter(t => t.icon).map(spotType => (
            <DesignControl
              isActive={activeType.id === spotType.id}
              key={spotType.id}
              onControlClick={() => onControlClick(spotType)}
              spotType={spotType}
            />
          ))}
          <li style={{marginTop: '25px'}}>
            <a className="waves-effect waves-light btn light-blue">
              {'Save'}
            </a>
          </li>
          <li>
            <a
              className="waves-effect waves-light btn grey lighten-2 grey-text text-darken-2"
              onClick={onJsonClick}
            >
              {'JSON'}
            </a>
          </li>
        </ul>
      </div>
    );
  }
});

export default DesignControls;
