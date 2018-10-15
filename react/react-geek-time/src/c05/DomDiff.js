import React from 'react'
import ReactDOM from 'react-dom'
import Wrapper from './Wrapper'

export default class DomDiff extends React.Component {
  constructor (props){
    super(props)
    this.wrapper = this.wrapper.bind(this)
  }
  wrapper (event) {
    console.log(event.target.id)
    ReactDOM.render(<Wrapper shape={event.target.id}/>,
      document.getElementById('diff-root'))
  }

  render() {
    return (
      <div>
        <button id='shape1' onClick={this.wrapper}>Shape 1</button>
        <button id='shape2' onClick={this.wrapper}>Shape 2</button>
        <button id='shape3' onClick={this.wrapper}>Shape 3</button>
        <button id='shape4' onClick={this.wrapper}>Shape 4</button>
        <button id='shape5' onClick={this.wrapper}>Shape 5</button>
        <button id='shape6' onClick={this.wrapper}>Shape 6</button>
        <div id='diff-root' />
      </div>
    )
  }
}