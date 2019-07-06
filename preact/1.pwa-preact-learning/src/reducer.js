export default (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          {
          text: action.text,
          id: action.id
        }]
      }
    default:
      return state
  }
}