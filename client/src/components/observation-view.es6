import React, { PropTypes } from 'react'
import Radium               from 'radium'
import _                    from 'lodash'
import Text                 from 'components/observations/text.es6'
import DragMonitor          from 'components/drag-monitor.es6'

@Radium
export default class ObservationView extends React.Component {
  static PropTypes = {
    moveObservation: PropTypes.func.isRequired,
    observations:    PropTypes.array.isRequired,
  };

  render() {
    const sortedObs = _.sortBy(this.props.observations.toArray(), o => o.get('order'))
    const boxes     = sortedObs.map(o => <Text key={o.get('id')} id={o.get('id')} content={o.get('content')} />)
    return (
      <div style={[ContainerStyle]}>
        {boxes}
        <DragMonitor moveObservation={this.props.moveObservation} />
      </div>
    )
  }
}

const ContainerStyle = {
  display:        'flex',
  flexWrap:       'wrap',
  justifyContent: 'center',
  background:     'blue',
  flex:           '1 1',
}
