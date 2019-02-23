import {
  Add,
  RemoveAll,
  RemoveOne,
  TodoActions
} from "./todo.actions"

interface ITodoState {
  todos: string[]
}

function todoReducer (
  action: TodoActions,
  state: ITodoState = {todos : []}
) : ITodoState {
  switch (action.type){
    case "Add": {
      return {
        todos: [...state.todos, action.payload]
      }
    }
    case "Remove All": {
      return {
        todos: []
      };
    }
    case "Remove One": {
      return {
        todos: state.todos.slice().splice(action.payload, 1)
      };
    }
    default: {
      // this never is to ensure all
      // case switch that defined has been handled
      const x: never = action;
    }
  }
  return state
}
