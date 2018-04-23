import initialState from './initialState';

const reducer = (state = initialState, action) => {
  console.log('current state: ', state);
  console.log('action: ', action);
  switch (action.type) {
    case 'LOG_USER_IN':
      return {
        ...state,
        userInfo: {
          id: action.userInfo.id,
          email: action.userInfo.email,
          ticker: 'comeback',
        },
        activeMenuItem: action.userInfo.email
      };
    case 'LOG_USER_OUT':
      return {
        ...state,
        userInfo: {
          id: null,
          email: null,
          ticker: null,
        },
        activeMenuItem: 'Mazuma'
      };
    case 'TOGGLE_TERMS_AGREEMENT':
      return {...state, userInfo: { ...state.userInfo, agreedToTerms: !state.userInfo.agreedToTerms } }
    case 'CHANGE_ACTIVE_MENU_ITEM':
      return {
        ...state,
        activeMenuItem: action.activeMenuItem
      }
    default:
      return state;
  }
};



export default reducer;
