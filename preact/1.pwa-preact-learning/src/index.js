import { h, render } from "preact";
import App from './app';
import store from './store';
import { Provider } from 'preact-redux';
import { initDevTools } from 'preact/devtools';
// // console.log('Hello World')

// let root = document.body.firstElementChild;
// const renderring = Component => {
//   root = render(
//     (<div id="outer">
//       <Provider store={store}>
//         <Component />
//       </Provider>
//     </div>)
//     ,document.body, root)
// }
const root = document.getElementById('root')
render(
  (<div id="outer">
      <Provider store={store}>
        <App />
      </Provider>
    </div>),root);

// store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Read the docs'
// })

// store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Read the docs2'
// })

// store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Read the docs3'
// })

// console.log(store.getState())