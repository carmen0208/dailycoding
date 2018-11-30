import React from 'react'

export default class AdvancedTabSelectior extends React.Component {
  render () {
    return (
      <div>
        <h2>{this.props.time.toLocaleString()}</h2>
      </div>
    )
  }
}
