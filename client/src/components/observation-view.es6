import React, { PropTypes } from 'react'
import Radium               from 'radium'
import Text                 from 'components/observations/text.es6'
import _                    from 'lodash'

@Radium
export default class ObservationView extends React.Component {
  static PropTypes = {
    observations: PropTypes.array.isRequired,
  };

  render() {
    const boxes = this.props.observations.map(o => <Text key={o.get('id')} content={o.get('content')} />)
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
