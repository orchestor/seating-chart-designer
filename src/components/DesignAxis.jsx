import React from 'react';

const DesignAxis = React.createClass({
  propTypes: {
    defaultValue: React.PropTypes.number.isRequired,
    desc: React.PropTypes.string,
    onAxisChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.number.isRequired
  },

  getInitialState: function() {
    return {
      value: this.props.value
    };
  },

  componentDidMount: function() {
    if (this.props.desc) {
      $(this.input).tooltip();
    }
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value
      });
    }
  },

  handleChange: function(newVal) {
    newVal = newVal.replace(/[^\d]/g, '');
    if (!newVal || newVal < 1) {
      newVal = this.props.defaultValue;
    }
    this.props.onAxisChange(newVal);
  },

  handleKeyUp: function(e) {
    if (e.keyCode === 13) {
      this.handleChange(this.state.value);
    }
  },

  render: function() {
    const {desc} = this.props;
    return (
      <div className="design-axis">
        <input
          className="square"
          data-delay={desc ? '50' : undefined}
          data-position={desc ? 'bottom' : undefined}
          data-tooltip={desc}
          onBlur={() => this.handleChange(this.state.value)}
          onChange={e => this.setState({value: e.target.value})}
          onKeyUp={this.handleKeyUp}
          ref={ref => this.input = ref}
          type="text"
          value={this.state.value}
        />
      </div>
    );
  }
});

export default DesignAxis;
