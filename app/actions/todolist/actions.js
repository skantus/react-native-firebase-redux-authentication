import * as types from './actionTypes';

export const Add = item => dispatch => {
  dispatch(add(item));
};

export const Remove = index => dispatch => {
  dispatch(remove(index));
};

export const add = item => ({
  type: types.ADD,
  todo: item
});

export const remove = index => ({
  type: types.REMOVE,
  index: index
});
