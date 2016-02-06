import React, { PropTypes } from 'react'
import Radium               from 'radium'
import { DragSource }       from 'react-dnd'

const dropSpec = {
  beginDrag(props) {
    return { key: props.key }
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging:        monitor.isDragging(),
  }
}

@DragSource('observation', dropSpec, collect)
@Radium
export default class Text extends React.Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging:        PropTypes.bool.isRequired,
  };

  render() {
    const { connectDragSource, isDragging } = this.props
    return connectDragSource(
      <span style={[Style, { background: isDragging ? 'red' : 'green'}]}>
        "This is a text block"
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