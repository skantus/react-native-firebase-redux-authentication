import * as types from './actionTypes';

export const Increment = () => dispatch => {
  dispatch(increment());
};

export const Decrement = () => dispatch => {
  dispatch(decrement());
};

export const Add = val => dispatch => {
  dispatch(add(val));
};

export const Subtration = val => dispatch => {
  dispatch(subtraction(val));
};

const increment = () => ({
  type: types.INCREMENT
});

const decrement = () => ({
  type: types.DECREMENT
});

const add = value => ({
  type: types.ADD,
  value
});

const subtraction = value => ({
  type: types.SUBTRACTION,
  value
});
