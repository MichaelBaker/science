import React from 'react'
import Immutable from 'immutable'

export default React.createClass({

  getInitialState() {
    return {
      collectingObservation : false,
      currentObservation    : null,
      observations          : [
        'haha', 'hehe'
      ]
    }
  },

  onKeyUp(evt) {
    this.receiveKey(evt.keyIdentifier)
  },

  componentDidMount() {
    window.addEventListener('keyup', this.onKeyUp)
  },

  receiveKey(lastKey) {
    const alreadyCollecting = this.state.collectingObservation

    switch (lastKey) {

      case 'U+004E': // 'n'
        if (!alreadyCollecting) this.setState({
          collectingObservation : true,
          currentObservation    : '',
        })
        break;

      case 'Enter':
        const newObservations = Immutable.fromJS(this.state.observations).push(this.state.currentObservation).toArray()
        this.setState({
          collectingObservation : false,
          currentObservation    : null,
          observations          : newObservations
        })
        break;

      default:
        break;
    }
  },

  observations() {
    return this.state.observations.map((obs) => {
      return <div key={obs}>{obs}</div>
    })
  },

  handleTextChange(e) {
    this.setState({currentObservation: e.target.value})
  },

  observationInput() {
    return (
      <input
        ref='myInput'
        type='text'
        autoFocus
        placeholder='Say something...'
        value={this.state.currentObservation}
        onChange={this.handleTextChange}></input>
    )
  },

  render() {
    return (
      <div>
        {this.state.collectingObservation && this.observationInput()}
        {this.observations()}
      </div>
    )
  }
})
