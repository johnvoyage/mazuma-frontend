import initialState from './initialState';

const reducer = (state = initialState, action) => {
  // console.log('current state: ', state);
  // console.log('action: ', action);
  switch (action.type) {
    case 'SIGN_USER_UP':
      return {
        ...state,
        userInfo: {
          id: action.userInfo.id,
          email: action.userInfo.email,
          ticker: 'comeback',
        }
      }
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
      return {
        ...state,
        formValidity: { ...state.formValidity, signUpForm: !state.formValidity.signUpForm } }
    // case 'TERMS_AGREEMENT_INIT':
    //   return {
    //     ...state,
    //     formValidity: { ...state.formValidity, signUpForm: false }
    //   }
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
