import React from 'react';
import { e } from 'functions/react.es6';

class ObservationView extends React.Component {
  style() {
    return {
      background: 'blue',
      flex:       '1 1',
    }
  }

  render() {
    return e('div', { style: this.style() },
      e('h2', {}, "Observations")
    )
  }
}

export default ObservationView;
