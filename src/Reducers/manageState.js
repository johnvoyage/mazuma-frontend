export default function manageState(state = {
  something: [],
}, action) {

  switch (action.type) {
    case 'DO_SOMETHING':
      return {
        ...state,
        something: [
          ...state.something,
          action.something
        ]
      }

    default:
      return state;

  }
};
