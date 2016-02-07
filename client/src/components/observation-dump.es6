import React, { PropTypes } from 'react'
import Radium               from 'radium'

@Radium
export default class ObservationDump extends React.Component {
  static PropTypes = {
    addObservation: PropTypes.func.isRequired,
    observations:   PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props)
    this.state = {
      collectingObservation : false,
      currentObservation    : null,
    }
  }

  onKeyUp(evt) {
    this.receiveKey(evt.keyIdentifier)
  }

  componentDidMount() {
    window.addEventListener('keyup', this.onKeyUp.bind(this))
  }

  receiveKey(lastKey) {
    const alreadyCollecting = this.state.collectingObservation

    switch (lastKey) {
      case 'U+004E': // 'n'
        if (alreadyCollecting) return
        this.setState({ collectingObservation: true, currentObservation: '',})
        break
      case 'Enter':
        if (!alreadyCollecting) return
        const content = this.state.currentObservation
        this.setState({ collectingObservation: false, currentObservation: null })
        this.props.addObservation(content)
        break
      default:
        break
    }
  }

  handleTextChange(e) {
    this.setState({ currentObservation: e.target.value })
  }

  observationInput() {
    return (
      <input
        autoFocus
        ref         = 'myInput'
        type        = 'text'
        placeholder = 'Say something...'
        value       = {this.state.currentObservation}
        onChange    = {this.handleTextChange.bind(this)}
        style       = {[InputStyle]}
      />
    )
  }

  render() {
    const visibility = this.state.collectingObservation ? {} : { display: 'none' }
    return (
      <div style={[ContainerStyle, visibility]}>
        <div style={[AlignmentStyle]} />
        <div style={[AlignmentStyle, { display: 'flex', flexDirection: 'column' }]}>
          <div style={[AlignmentStyle]} />
          {this.state.collectingObservation && this.observationInput()}
          <div style={[AlignmentStyle]} />
        </div>
        <div style={[AlignmentStyle]} />
      </div>
    )
  }
}

const ContainerStyle = {
  position: 'fixed',
  display:  'flex',
  top:      0,
  bottom:   0,
  left:     0,
  right:    0,
}

const AlignmentStyle = {
  flex: '1 1',
}

const InputStyle = {
  flex:         '1 1',
  fontSize:     48,
  textAlign:    'center',
  outline:      'none',
  borderRadius: '4px',
  boxShadow:    '2px 2px 2px gray',
}
