import React, { PropTypes } from 'react'
import Radium               from 'radium'
import { DragLayer }        from 'react-dnd'

function collect(monitor) {
  return {
    item:          monitor.getItem(),
    itemType:      monitor.getItemType(),
    currentOffset: monitor.getDifferenceFromInitialOffset(),
    isDragging:    monitor.isDragging(),
  }
}

@DragLayer(collect)
export default class DragMonitor extends React.Component {
  static propTypes = {
    columnWidth:     PropTypes.number.isRequired,
    rowHeight:       PropTypes.number.isRequired,
    columns:         PropTypes.number.isRequired,
    moveObservation: PropTypes.func.isRequired,
  };

  render() {
    if (this.props.isDragging) {
      const { x, y }       = this.props.currentOffset

      const currentRow     = Math.floor(this.props.item.order / this.props.columns)
      const currentColumn  = Math.floor(this.props.item.order % this.props.columns)

      const top    = y - (this.props.rowHeight / 2.0)
      const bottom = y + (this.props.rowHeight / 2.0)
      const left   = x - (this.props.columnWidth / 2.0)
      const right  = x + (this.props.columnWidth / 2.0)

      const relativeRow    = y < 0 ? Math.ceil(top / this.props.rowHeight)    : Math.floor(bottom / this.props.rowHeight)
      const relativeColumn = x < 0 ? Math.ceil(left / this.props.columnWidth) : Math.floor(right / this.props.columnWidth)

      const newRow         = currentRow + relativeRow
      const newColumn      = currentColumn + relativeColumn

      const newOrder       = Math.max(newRow * this.props.columns, 0) + Math.max(newColumn, 0)
      const oldOrder       = this.props.item.order

      this.props.moveObservation(this.props.item.id, oldOrder, newOrder)
    }
    return null
  }
}
