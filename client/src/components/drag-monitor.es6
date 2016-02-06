import React, { PropTypes } from 'react'
import Radium               from 'radium'
import { DragLayer }        from 'react-dnd'

function collect(monitor) {
  return {
    item:          monitor.getItem(),
    itemType:      monitor.getItemType(),
    currentOffset: monitor.getClientOffset(),
    isDragging:    monitor.isDragging(),
  }
}

@DragLayer(collect)
export default class DragMonitor extends React.Component {
  static propTypes = {
    moveObservation: PropTypes.func.isRequired,
  };

  render() {
    if (this.props.isDragging) {
      const { x, y } = this.props.currentOffset
      console.log(y)
      console.log(document.body.scrollTop)
      console.log(y + document.body.scrollTop)
      const order = Math.floor((y - 37.0 + (document.body.scrollTop * 1.0)) / 220.0) * 3 + Math.floor(x / 270.0)
      this.props.moveObservation(this.props.item.id, order)
    }
    return null
  }
}
