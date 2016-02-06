import React from 'react'

export default class ObservationDump extends React.Component {
  onKeyUp(evt) {
    console.log(evt)
  }

  componentDidMount() {
    window.addEventListener('keyup', this.onKeyUp)
  }

  render() {
    return (
      <div></div>
    )
  }
}
