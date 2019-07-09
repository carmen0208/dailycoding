import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { bindActionCreators } from 'redux';
//Option 3
import linkState from 'linkstate';
import { bind } from 'decko';
import { addTodos } from '../actions';

class Todo extends Component {

  addTodo = () => {
    this.props.addTodos(this.state.text);
    this.setState({text: ''});
  }
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
  updateText = (e) => {
    console.log(e.target.value);
		this.setState({ text: e.target.value });
  };

  //Option 3 linkState
//  <input value={text} onInput={linkState(this, 'text')} placeholder="New Todo..." />

  render({ todos, addTodos }, { text }) {
    return (
      <div id="app">
        <form onSubmit={this.addTodo} action="javascript:">
          <input value={text} onInput={this.updateText} placeholder="New Todo..." />
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

/**
 * [mapStateToProps(state, [ownProps]): stateProps] (Function)
 *
 * 解释：
 * mapStateToProps 是一个函数，将 redux state 对象映射到 UI 组件的 props
 *
 * @prop state 是当前的 state 对象
 * @prop ownProps 是当前组件的 props 对象
 * @returns 返回 stateProps 类型的对象
 *
 * 组件会自动监听 redux store 的更新
 * 无论是 state / ownProps 有变化时 mapStateToProps 都会被触发
 * 返回值只能是简单对象，会自动合并到组件的 props
 *
 */
const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  }
}

/**
 * [mapDispatchToProps(dispatch, [ownProps]): dispatchProps] (Object or Function)
 *
 * 解释：
 * mapDispatchToProps 可以是一个函数，也可以是一个对象
 *
 * @param dispatch 由 Store 提供的 dispatch
 * @returns {function | object}
 *
 * 在 ownProps 变化的时候，mapDispatchToProps 就会被触发
 * 同样的也会自动合并到组件的 props
 * 组件上需要哪个 action 的时候就才返回哪个
 */


// A. 使用 bindActionCreators：
/**
 * bindActionCreators 由 redux 提供，可以把 actions 包装成可以直接被调用的函数
 *
 * bindActionCreators(actionCreators, dispatch): object
 * @prop {object} 将 action creators 转成拥有同名 keys 的对象
 * @prop {function} 由 Store 实例提供的 dispatch 函数
 * @returns {object} 跟原对象结构类似的对象，只不过里面的每个函数都可以直接调用了
 */
function mapDispatchToProp(dispatch, ownProps) {
  return bindActionCreators({
    addTodos
  }, dispatch)
}

// B. 不使用 bindActionCreators 的写法（其实跟 bindActionCreators 的实现一样）：
function mapDispatchToProps2(dispatch, ownProps) {
  return {
    // 普通工厂函数写法：
    addTodos: text => dispatch(addTodos(text))
  };
}

// C. 直接返回 object 的写法：
// 是的没错，mapDispatchToProps 可以直接返回 object 的
// key 是对应 UI 组件的同名 prop
// value 是 Action creator，redux 会自动 dispatch 的，好方便
const mapDispatchToProps3 = {
  addTodos
};

export default connect(mapStateToProps, mapDispatchToProps2)(Todo);