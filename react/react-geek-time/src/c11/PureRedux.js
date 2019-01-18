import React from 'react'
import { createStore, combineReducers, bindActionCreators } from 'redux'

function run () {
  // console.log('this is redux function')
  const initialState = { count: 0 }
  // Create Reducer
  const counter = (state = initialState, action) => {
    switch (action.type) {
      case 'PLUS_ONE':
        return { count: state.count + 1 }
      case 'MINUS_ONE':
        return { count: state.count - 1 }
      case 'CUSTOM_COUNT':
        return { count: state.count + action.payload.count }
      default:
        break
    }
    return state
  }

  const todos = (state ={}) => {
    return state
  }

  // Create Store

  const store = createStore(combineReducers({
    counter,
    todos
  }))

  // Action Creator
  function plusOne () {
    // action
    return { type: 'PLUS_ONE' }
  }

  function minusOne () {
    return { type: 'MINUS_ONE' }
  }

  function customCount (count) {
    return { type: 'CUSTOM_COUNT', payload: { count } }
  }


  store.subscribe(() => console.log(store.getState()))
  const dispatchedPlusOne = bindActionCreators(plusOne, store.dispatch)
  dispatchedPlusOne()
  // store.dispatch(plusOne(5))
  store.dispatch(minusOne())

  const dispatchedCustomCount = bindActionCreators(customCount, store.dispatch)
  dispatchedCustomCount(5)
  // store.dispatch(customCount(5))
}
export default () => (
  <div>
    <button onClick={run}>Run</button>
    <p>* 请打开控制台查看运行结果</p>
  </div>
)
