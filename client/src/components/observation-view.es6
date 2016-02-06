import React from  'react'
import Radium from 'radium'
import Text  from  'components/observations/text.es6'
import _     from  'lodash'

@Radium
export default class ObservationView extends React.Component {
  render() {
    const boxes = _.map(_.range(20), (i) => <Text key={i} />)

    return (
      <div style={[ContainerStyle]}>
        {boxes}
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
