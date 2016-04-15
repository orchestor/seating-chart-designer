import React from 'react';

const DesignName = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    onNameChange: React.PropTypes.func.isRequired,
    readOnly: React.PropTypes.bool.isRequired
  },

  render: function() {
    const {name, onNameChange, readOnly} = this.props;
    return (
      <div className="design-name">
        <input
          autoFocus={true}
          onChange={readOnly ? undefined : e => onNameChange(e.target.value)}
          readOnly={readOnly}
          type="text"
          value={name}
        />
      </div>
    );
  }
});

export default DesignName;
