import initialState from './initialState';

const reducer = (state = initialState, action) => {
  console.log('current state: ', state);
  console.log('action: ', action);
  switch (action.type) {
    case 'CHANGE_LOG_IN_STATUS':
      return { ...state, loggedIn: !state.loggedIn };
    case 'CHANGE_ACTIVE_MENU_ITEM':
      return { ...state, activeMenuItem: action.activeMenuItem }
    default:
      return state;
  }
};



export default reducer;
