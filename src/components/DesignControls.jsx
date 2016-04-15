import React from 'react';
import DesignControl from './DesignControl';
import {flatten} from '../models/collection';
import {spotTypes} from '../models/spot';

const DesignControls = React.createClass({
  propTypes: {
    activeType: React.PropTypes.object.isRequired,
    onControlClick: React.PropTypes.func.isRequired,
    onDoneClick: React.PropTypes.func.isRequired,
    onExitClick: React.PropTypes.func.isRequired,
    onSaveClick: React.PropTypes.func.isRequired,
    readOnly: React.PropTypes.bool.isRequired
  },

  getInitialState: function() {
    return {
      activeControl: 'desktop_mac'
    };
  },

  render: function() {
    const {activeType, onControlClick, onDoneClick, onExitClick, onSaveClick, readOnly} = this.props;
    return (
      <div className="design-controls">
        {readOnly ? (
          <ul>
            <li>
              <a
                className="waves-effect waves-light btn grey lighten-2 grey-text text-darken-2"
                onClick={onExitClick}
              >{'Exit'}</a>
            </li>
          </ul>
        ) : (
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
              <a
                className="waves-effect waves-light btn light-blue"
                onClick={onSaveClick}
              >{'Save'}</a>
            </li>
            <li>
              <a
                className="waves-effect waves-light btn grey lighten-2 grey-text text-darken-2"
                onClick={onDoneClick}
              >{'Done'}</a>
            </li>
          </ul>
        )}
      </div>
    );
  }
});

export default DesignControls;
