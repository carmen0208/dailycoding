import React from 'react'
export default class Class extends React.Component {
  constructor(props) {
    super(props);
    console.log('Clock constructed')
    this.state = {date: new Date()};
  }

  componentDidMount() {
    console.log('Clock did mount')
    this.timeID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log('Clock will unMount')
    clearInterval(this.timeId)
  }

  // New props, setState(), forceUpdate()
  componentDidUpdate() {
    console.log('Clock did update')
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return(
      <div>
        <h1>Hello, How are you</h1>
        <h2> It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}