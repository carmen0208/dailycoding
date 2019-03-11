// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import React from "react"
import { render } from "react-dom"
import { Observable } from "rxjs"
import config from "recompose/rxjsObservableConfig"
import {
  setObservableConfig,
  componentFromStream
} from "recompose"

setObservableConfig(config)


const App = props => (
  <div>
    <h1>{props.message}</h1>
  </div>
)

const createTypewriter = (message, speed) =>
  Observable.zip(
    Observable.from(message),
    Observable.interval(speed),
    letter => letter
  ).scan((acc, curr) => acc + curr)

const StreamingApp = componentFromStream(props$ =>
  props$
    .switchMap(props =>
      createTypewriter(props.message, props.speed)
    )
    .map(message => ({ message }))
    .map(App)
)

render(
  <StreamingApp
    message="I'm a streaming App!"
    speed={1000}
  />,
  document.getElementById("root")
)

serviceWorker.unregister();