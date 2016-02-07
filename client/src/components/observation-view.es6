import React, { PropTypes } from 'react'
import Radium               from 'radium'
import _                    from 'lodash'
import Text                 from 'components/observations/text.es6'
import DragMonitor          from 'components/drag-monitor.es6'

const CardWidth  = 250;
const CardHeight = 200;
const CardMargin = 10;

@Radium
export default class ObservationView extends React.Component {
  static PropTypes = {
    moveObservation: PropTypes.func.isRequired,
    observations:    PropTypes.array.isRequired,
  };

  render() {
    const sortedObs = _.sortBy(this.props.observations.toArray(), o => o.get('order'))
    const boxes     = sortedObs.map(o => {
      return (
        <Text key     = {o.get('id')}
              id      = {o.get('id')}
              order   = {o.get('order')}
              width   = {CardWidth}
              height  = {CardHeight}
              content = {o.get('content')}
              margin  = {CardMargin}
        />
      )
    })

    const cardsPerRow = 4
    const columnWidth = CardWidth  + (CardMargin * 2)
    const rowHeight   = CardHeight + (CardMargin * 2)

    return (
      <div style={[ContainerStyle(columnWidth * cardsPerRow)]}>
        {boxes}
        <DragMonitor
          columnWidth     = {columnWidth}
          rowHeight       = {rowHeight}
          columns         = {cardsPerRow}
          moveObservation = {this.props.moveObservation}
        />
      </div>
    )
  }
}

function ContainerStyle(width) {
  return {
    display:        'flex',
    flexWrap:       'wrap',
    justifyContent: 'center',
    flex:           '1 1',
    margin:         'auto',
    width:          width,
  }
}
