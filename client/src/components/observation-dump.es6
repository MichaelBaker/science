import React from 'react'

export default React.createClass({
  onKeyUp(evt) {
    this.setState({ 'last_event': evt.keyIdentifier })
  },

  componentDidMount() {
    window.addEventListener('keyup', this.onKeyUp)
  },

  render() {
    console.log('newState', this.state)
    return (
      <div></div>
    )
  }
})
