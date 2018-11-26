import React from 'react'
import logComponent from './logComponent'
import './Wrapper.css'

const Root = logComponent('Root')
const A = logComponent('A')
const B = logComponent('B')
const C = logComponent('C')
const D = logComponent('D')
// const E = logComponent('E')

export default class Wrapper extends React.Component {
  shape1 () {
    return (
      <Root>
        <A>
          <B />
          <C />
        </A>
        <D />
      </Root>
    )
  }

  shape2 () {
    return (
      <Root>
        <A>
          <B />
        </A>
        <D>
          <C />
        </D>
      </Root>
    )
  }

  shape3 () {
    return (
      <Root>
        <A>
          <B>
            <C />
          </B>
        </A>
        <D />
      </Root>
    )
  }

  shape4 () {
    return (
      <Root>
        <A>
          <B />
          <D>
            <C />
          </D>
        </A>
      </Root>
    )
  }

  shape5 () {
    return (
      <Root>
        <A>
          <B key='B' />
          <C key='C' />
        </A>
      </Root>
    )
  }

  shape6 () {
    return (
      <Root>
        <A>
          <C key='C' />
          <B key='B' />
        </A>
      </Root>
    )
  }

  render () {
    return this[this.props.shape]()
  }
}
