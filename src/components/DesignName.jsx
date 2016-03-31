import React from 'react';

const DesignName = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    onNameChange: React.PropTypes.func.isRequired
  },

  render: function() {
    const {name, onNameChange} = this.props;
    return (
      <div className="design-name">
        <input
          autoFocus={true}
          onChange={e => onNameChange(e.target.value)}
          type="text"
          value={name}
        />
      </div>
    );
  }
});

export default DesignName;
