let nextId = 1;
export function addTodos(text) {
  // console.log('lalala')
  return {
    type: 'ADD_TODO',
    id: nextId++,
    text
  }
}