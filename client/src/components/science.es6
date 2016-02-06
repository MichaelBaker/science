import React, { PropTypes } from 'react'
import HTML5Backend         from 'react-dnd-html5-backend'
import { DragDropContext }  from 'react-dnd'
import ObservationDump      from 'components/observation-dump.es6'

@DragDropContext(HTML5Backend)
export default class Science extends React.Component {
  static PropTypes = {
    actions:      PropTypes.object.isRequired,
    observations: PropTypes.array.isRequired,
  };

  style() {
    return {
      display:       'flex',
      flexDirection: 'column'
    }
  }

  render() {
    return (
      <div style={this.style()}>
        <ObservationDump/>
      </div>
    )
  }
}
