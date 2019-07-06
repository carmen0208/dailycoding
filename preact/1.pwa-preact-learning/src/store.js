import { createStore } from "redux";
import reducer from './reducer';

const INITIAL = {
  todos: [{
    text: 'Initialization'
  }]
}

export default createStore(reducer,
  INITIAL, // https://github.com/zalmoxisus/redux-devtools-extension
  window.devToolsExtension && window.devToolsExtension() );