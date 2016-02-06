import React from 'react'

export default React.createClass({

  getInitialState() {
    return {
      listeningForCommands : true,
      lastKey              : null,
      tasks                : [
        'haha', 'hehe'
      ]
    }
  },

  onKeyUp(evt) {
    this.setState({ 'lastKey': evt.keyIdentifier })
  },

  componentDidMount() {
    window.addEventListener('keyup', this.onKeyUp)
  },

  inputReceiver(lastKey) {
    const newTask = lastKey === 'U+004E'
    if (newTask) return <input></input>
  },

  tasks() {
    return this.state.tasks.map((task) => {
      return <div key={task}>{task}</div>
    })
  },

  render() {
    return (
      <div>
        {this.inputReceiver(this.state.lastKey)}
        {this.tasks()}
      </div>
    )
  }
})
