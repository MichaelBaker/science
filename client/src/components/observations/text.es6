import React, { PropTypes } from 'react'
import Radium               from 'radium'
import { DragSource }       from 'react-dnd'

const dropSpec = {
  beginDrag(props) {
    return { id: props.id }
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging:        monitor.isDragging(),
    candidatePosition: monitor.getClientOffset(),
  }
}

@DragSource('observation', dropSpec, collect)
@Radium
export default class Text extends React.Component {
  static propTypes = {
    id:                PropTypes.number.isRequired,
    content:           PropTypes.string.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    isDragging:        PropTypes.bool.isRequired,
    candidatePosition: PropTypes.object,
  };

  render() {
    const { connectDragSource, isDragging } = this.props
    return connectDragSource(
      <span style={[Style, { background: isDragging ? 'red' : 'green' }]}>
        #{this.props.id}: {this.props.content}
      </span>
    )
  }
}


const Style = {
  flex:       '0 0 auto',
  width:      '250px',
  height:     '200px',
  margin:     '10px',
}
