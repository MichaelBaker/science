import React               from 'react'
import HTML5Backend        from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import ObservationView     from 'components/observation-view.es6'

@DragDropContext(HTML5Backend)
export default class Science extends React.Component {
  style() {
    return {
      display:       'flex',
      flexDirection: 'column'
    }
  }

  render() {
    return (
      <div style={this.style()}>
        <h1>Board</h1>
        <ObservationView observations={this.props.data.observations} />
      </div>
    )
  }
}
