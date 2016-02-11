import React from 'react';
import {connect} from 'react-redux';
import DesignCanvas from './DesignCanvas';

const App = React.createClass({
  displayName: 'AppContainer',
  propTypes: {
    children: React.PropTypes.object,
    dispatch: React.PropTypes.func.isRequired
  },

  render: function() {
    return (
      <DesignCanvas />
    );
  }
});

/**
 * Which props do we want to inject, given the global state?
 *
 * @param {Immutable.Map} state - The store
 * @return {object} - The store->props map
 */
function mapStateToProps(state) {
  return {
    zoom: state.get('zoom')
  };
}

// wrap component to inject dispatch and state into it
export default connect(mapStateToProps)(App);
