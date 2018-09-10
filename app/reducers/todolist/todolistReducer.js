import * as types from '../../actions/todolist/actionTypes';

const initialState = {
  todos: ['Learn React', 'Learn Redux', 'Learn Firebase', 'Learn Graphql']
};

const todolistReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD:
      return {
        ...state,
        todos: [action.todo, ...state.todos]
      };
    case types.REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo, i) => i !== action.index)
      };
    default:
      return state;
  }
};

export default todolistReducer;
