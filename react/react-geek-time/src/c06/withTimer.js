import React from 'react'

export default function withTimer (WrapperComponent) {
  return class extends React.Component {

    constructor (props) {
      super(props)
      this.state = {time: new Date()}
    }

    componentDidMount () {
      console.log('Clock did mount')
      this.timeID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount () {
      console.log('Clock will unMount')
      clearInterval(this.timeId)
    }

    // New props, setState(), forceUpdate()
    componentDidUpdate () {
      console.log('Clock did update')
    }

    tick () {
      this.setState({
        time: new Date()
      })
    }
    render () {
      return <WrapperComponent time={this.state.time} {...this.props} />
    }
  }
}
