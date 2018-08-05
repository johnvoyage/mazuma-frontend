import rootReducer from '../Store/mazumaStore.js';

const add = (a, b) => a + b;

test('should add two numbers', () => {
  const result = add(3, 4)

  // if (result !== 7) {
  //   throw new Error(`You added 4 and 3. The result was ${result}. Expected 7`)
  // }

  expect(result).toBe(7)
});

test('should start async loading for Thunk', () => {
  const action = { type: 'ASYNC_START'}
  const state = rootReducer(action)
  expect(state.loading).toBe(true)
});

// test('should stop async loading for Thunk', () => {
//   const action = { type: 'ASYNC_STOP'}
// })
//
// case "ASYNC_START":
//   return { ...state, loading: true };
// case "ASYNC_STOP":
//   return { ...state, loading: false };
