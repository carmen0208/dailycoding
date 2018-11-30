import React from 'react'
import withTimer from './withTimer'

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
class HOCExample extends React.Component {
  render () {
    return (
      <div>
        <h2>{this.props.time.toLocaleDateString('en-US', options)}</h2>
        <h2>{this.props.time.toLocaleDateString('zh', options)}</h2>
      </div>
    )
  }
}

export default withTimer(HOCExample)
