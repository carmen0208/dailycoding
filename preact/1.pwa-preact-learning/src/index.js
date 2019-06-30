import { h, render } from "preact";
import App from './components/app'
// console.log('Hello World')
let root = document.body.firstElementChild;
const rendering = Component => {
  root = render(<Component/>, document.body, root);
};

rendering(App);