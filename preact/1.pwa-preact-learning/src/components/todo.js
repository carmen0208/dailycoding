import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { bindActionCreators } from 'redux';

class Todo extends Component {
  render({ todos}) {
    return (
      <div id="app">
        <form>
          <input placeholder="New Todo..." />
        </form>
        <ul>
          {
            todos.map((todo) => (
              <li> { todo.text }</li>
            )
          )}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProp) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(Todo);