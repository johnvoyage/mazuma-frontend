import initialState from './initialState';

const reducer = (state = initialState, action) => {
  console.log('current state: ', state);
  console.log('action: ', action);
  switch (action.type) {
    case 'LOG_USER_IN':
      return {
        userInfo: {
          id: action.userInfo.id,
          email: action.userInfo.email,
          ticker: 'comeback',
        }
      };
    case 'LOG_USER_OUT':
      return {
        userInfo: {
          id: null,
          email: null,
          ticker: null,
        }
      };
    case 'CHANGE_ACTIVE_MENU_ITEM':
      return { ...state, activeMenuItem: action.activeMenuItem }
    default:
      return state;
  }
};



export default reducer;
