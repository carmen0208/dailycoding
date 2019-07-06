import { createStore } from "redux";

function todos(state=[], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

const INITIAL = [
  'User Redux'
]

export default createStore(todos,
  INITIAL, // https://github.com/zalmoxisus/redux-devtools-extension
  window.devToolsExtension && window.devToolsExtension() );