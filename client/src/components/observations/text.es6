import React, { PropTypes } from 'react'
import Radium               from 'radium'
import { DragSource }       from 'react-dnd'

const dropSpec = {
  beginDrag(props) {
    return { id: props.id, order: props.order }
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
    order:             PropTypes.number.isRequired,
    width:             PropTypes.number.isRequired,
    height:            PropTypes.number.isRequired,
    margin:            PropTypes.number.isRequired,
    content:           PropTypes.string.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    isDragging:        PropTypes.bool.isRequired,
    candidatePosition: PropTypes.object,
  };

  render() {
    const { connectDragSource, isDragging } = this.props
    const style = Style(this.props.width, this.props.height, this.props.margin)

    return connectDragSource(
      <span style={[style, { background: isDragging ? 'red' : 'green' }]}>
        #{this.props.id}: {this.props.content}
      </span>
    )
  }
}


function Style(width, height, margin) {
  return {
    flex:       '0 0 auto',
    width:      width,
    height:     height,
    margin:     margin,
  }
}
