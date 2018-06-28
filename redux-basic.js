const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return { ...state, counter: state.counter + 1 }
    case 'ADD':
      return { ...state, counter: state.counter + action.value }
    default:
      return state;
  }
  return state;
}

// Store
const store = createStore(rootReducer);

// Susbcription
store.subscribe(() => {
  console.log('[Susbcription]', store.getState());
});

// Actions (dispatch)
store.dispatch( { type: 'INC' } );
store.dispatch( { type: 'ADD', value: 10 } );
