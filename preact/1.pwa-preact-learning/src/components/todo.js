import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { bindActionCreators } from 'redux';
//Option 3
import linkState from 'linkstate';
import { bind } from 'decko';
class Todo extends Component {

  // addTodo() {
  //   this.props.addTodo(this.state.text);
  //   this.setState({text: ''});
  // }
  // Option 1
  // [ "@babel/plugin-proposal-decorators", { "legacy": true }],
  // <input value={text} onInput={this.updateText} placeholder="New Todo..." />
  // @bind
  // updateText(e) {
  //   console.log(e.target.value);
  //   this.setState({ text: e.target.value })
  // }

  // Option 2
  // [ "@babel/plugin-proposal-class-properties", { "loose": true }],
  // <input value={text} onInput={this.updateText} placeholder="New Todo..." />
  // updateText = (e) => {
  //   console.log(e.target.value);
	// 	this.setState({ text: e.target.value });
  // };


  render({ todos}, { text }) {
    return (
      <div id="app">
        <form onSubmit={this.addTodo} action="javascript:">
          <input value={text} onInput={linkState(this, 'text')} placeholder="New Todo..." />
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