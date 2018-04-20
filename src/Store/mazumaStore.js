import initialState from './initialState';

const reducer = (state = initialState, action) => {
  console.log('current state: ', state);
  console.log('action: ', action);
  switch (action.type) {
    case 'SOMETHING':
      return { something: state.something + 1};
    case 'SOMETHING_ELSE':
      return { something: state.something - 1};
    default:
      return state;
  }
};

export default reducer;
