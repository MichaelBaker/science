import React from 'react'

let e = React.createElement

class View extends React.Component {
    render() {
        return e('div', {}, "hello")
    }
}

export default View
