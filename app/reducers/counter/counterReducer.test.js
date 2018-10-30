import counterReducer from './counterReducer';

describe('CounterReducer', () => {
  describe('counter', () => {
    it('Should provide the initial state', () => {
      let initialState = { counter: 0 };
      expect(counterReducer(undefined, {})).toMatchSnapshot(initialState);
    });

    it('Should handle INCREMENT action', () => {
      let state = { counter: 1 };
      expect(counterReducer(state, { type: 'INCREMENT' })).toMatchSnapshot({
        counter: 2
      });
    });

    it('Should handle DECREMENT action', () => {
      let state = { counter: 1 };
      expect(counterReducer(state, { type: 'DECREMENT' })).toMatchSnapshot({
        counter: 0
      });
    });

    it('Should handle unknown action', () => {
      let initialState = { counter: 0 };
      expect(counterReducer(initialState, { type: 'unknown' })).toMatchSnapshot({ counter: 0 });
    });
  });
});
