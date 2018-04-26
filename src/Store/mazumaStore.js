import initialState from './initialState';

const reducer = (state = initialState, action) => {
  // console.log('current state: ', state);
  // console.log('action: ', action);
  switch (action.type) {

    /* USER ACCOUNT INFO */
    case 'SIGN_USER_UP':
      return {
        ...state,
        userInfo: {
          id: action.userInfo.id,
          email: action.userInfo.email,
        },
        activeMenuItem: action.userInfo.email
      }
    case 'LOG_USER_IN':
      return {
        ...state,
        userInfo: {
          id: action.userInfo.id,
          email: action.userInfo.email,
        },
        activeMenuItem: 'Account'
      };
    case 'LOG_USER_OUT':
      return {
        ...state,
        userInfo: {
          id: null,
          email: null,
        },
        activeMenuItem: 'Mazuma'
      };
    case 'EDIT_USER_ACCOUNT':
      return {
        ...state
      }


    /* STATE OF THE NAVBAR */
    case 'CHANGE_ACTIVE_MENU_ITEM':
      return {
        ...state,
        activeMenuItem: action.activeMenuItem
      }

    /* STATE OF THE TRANSACTIONS TABLE */
    case 'CHANGE_TRANSACTION_FORM_FIELDS':
      console.log(action)
      return {
        ...state,
        transactionContainer: {
          ...state.transactionContainer,
          [action.whichForm]: state.transactionContainer[action.whichForm] = state.transactionContainer[action.whichForm] + action.amount
        }
      }
    case 'TOGGLE_TRANSACTION_DESCRIPTION':
      return {
        ...state,
        transactionContainer: {
          ...state.transactionContainer,
          descriptionToggle: !state.transactionContainer.descriptionToggle
        }
      }
      case 'TOGGLE_TRANSACTION_FILTER':
        return {
          ...state,
          transactionContainer: {
            ...state.transactionContainer,
            filterSelected: action.filterSelected
          }
        }
      case 'TOGGLE_NEW_TRANSACTION':
        return {
          ...state,
          transactionContainer: {
            ...state.transactionContainer,
            newTransaction: !state.transactionContainer.newTransaction
          }
        }
      case 'TOGGLE_NEW_ACCOUNT':
        return {
          ...state,
          transactionContainer: {
            ...state.transactionContainer,
            newAccount: !state.transactionContainer.newAccount
          }
        }
      // case 'ADD_NEW_ACCOUNT_ON':
      //   return {
      //     ...state,
      //     transactionContainer: {
      //       ...state.transactionContainer,
      //       newAccount: true
      //     }
      //   }
      // case 'CHANGE_TRANSACTION_FORM_INPUT':
      //   return {
      //     ...state
      //   }

    /* DONE */
    default:
      return state;
  }
};



export default reducer;
