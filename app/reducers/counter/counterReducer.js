import * as types from '../../actions/counter/actionTypes';

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case types.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case types.ADD:
      return { ...state, counter: state.counter + action.value };
    case types.SUBTRACTION:
      return { ...state, counter: state.counter - action.value };
    default:
      return state;
  }
};

export default counterReducer;
