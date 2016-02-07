import React, { PropTypes } from 'react'
import HTML5Backend         from 'react-dnd-html5-backend'
import { DragDropContext }  from 'react-dnd'
import ObservationView      from 'components/observation-view.es6'
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
        <ObservationDump addObservation={this.props.actions.addObservation} />
        <h1>Board</h1>
        <ObservationView
          moveObservation = {this.props.actions.moveObservation}
          observations    = {this.props.data.get('observations')}
        />
      </div>
    )
  }
}
