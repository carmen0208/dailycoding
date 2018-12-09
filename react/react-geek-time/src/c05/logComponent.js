import React from 'react'

export default function logComponent (name) {
  class _LogNode extends React.Component {
    constructor (props) {
      super(props)
      console.log(name + ' in created. ')
    }

    componentDidMount () {
      console.log(name + ' in componentDidMount.')
    }
    componentWillMount () {
      console.log(name + ' in componentWillMount.')
    }
    componentDidUpdate () {
      console.log(name + ' in componentDidUpdate.')
    }
    componentWillUnmount () {
      console.log(name + ' in componentWillUnmount.')
    }

    render () {
      return (
        <div className={'node ' + name} data-name={name}>
          {this.props.children}
        </div>
      )
    }
  }
  return _LogNode
}
