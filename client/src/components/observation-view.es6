import React from  'react'
import Radium from 'radium'
import { e } from  'functions/react.es6'
import Text  from  'components/observations/text.es6'
import _     from  'lodash'

@Radium
export default class ObservationView extends React.Component {
  style() {
    return {
      background: 'blue',
      flex:       '1 1',
    }
  }

  render() {
    return e('div', {
        style: [this.style()],
      },
      e('div', {
          style: [{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }]
        },
        _.map(_.range(20), (i) => e(Text, { key: i })),
      )
    )
  }
}
