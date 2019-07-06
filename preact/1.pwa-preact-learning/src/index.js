import { h, render } from "preact";
import App from './app';
import store from './store';
import { Provider } from 'preact-redux';
// console.log('Hello World')
let root = document.body.firstElementChild;
render(
    (<div id='outer'>
      <Provider store={store}>
        <App />
      </Provider>
    </div>),document.body);


store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs'
})

store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs2'
})

store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs3'
})

console.log(store.getState())