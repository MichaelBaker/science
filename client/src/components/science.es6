import React               from 'react'
import HTML5Backend        from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import { e }               from 'functions/react.es6'
import ObservationView     from 'components/observation-view.es6'

@DragDropContext(HTML5Backend)
class Science extends React.Component {
  style() {
    return {
      display:       'flex',
      flexDirection: 'column'
    }
  }

  render() {
    return e('div', { style: this.style() },
      e('h1', {}, 'Board'),
      e(ObservationView, { observations: this.props.data.observations})
    )
  }
}

export default Science;
