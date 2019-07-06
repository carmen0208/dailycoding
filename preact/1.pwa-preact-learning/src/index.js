import { h, render } from "preact";
import App from './components/app';
import store from './store';
import { Provider } from 'preact-redux';
// console.log('Hello World')
let root = document.body.firstElementChild;
const rendering = Component => {
  root = render(
    (<div id='outer'>
      <Provider store={store}>
        <Component/>
      </Provider>
    </div>),
    document.body, root);
};

rendering(App);
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