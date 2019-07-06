import { Component, h } from 'preact';
import './styles/style.scss';
import Todo from './components/todo';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Todo />
      </div>
    );
  }
}

export default App;