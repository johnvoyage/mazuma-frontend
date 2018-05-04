import initialState from "./initialState";
import dateHelpers from "../HelperFunctions/dateHelpers";

const rootReducer = (state = initialState.whole, action) => {
  // console.log('current state: ', state);
  // console.log('action: ', action);
  switch (action.type) {
    case "ASYNC_START":
      return { ...state, loading: true };
    case "ASYNC_STOP":
      return { ...state, loading: false };
    case "SIGN_USER_IN":
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          id: action.userInfo.id,
          email: action.userInfo.email,
          dateCreated: action.userInfo.created_at
        },
        activeMenuItem: "Account"
      };
    // case "LOG_USER_IN":
    //   // debugger
    //   return {
    //     ...state,
    //     userInfo: {
    //       ...state.userInfo,
    //       id: action.userInfo.id,
    //       email: action.userInfo.email
    //     },
    //     activeMenuItem: "Account"
    //   };
    case "LOG_USER_OUT":
      return {
        ...state,
        userInfo: {
          id: null,
          email: null
        },
        activeMenuItem: "Mazuma"
        // initialState
      };
    case "EDIT_USER_ACCOUNT":
      return {
        ...state
      };
    case "SET_USERS_ACCOUNTS":
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          accounts: action.accounts
        }
      };
    case "SET_USERS_ENTRIES":
      // const updatedState = {...state}
      // updatedState.userInfo.entries = action.entries
      // return updatedState

      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          entries: action.entries
        }
      };
    case "ASSIGN_TRANSACTIONS_TO_ENTRY":
      // , transactions, index:
      let updatedState = { ...state };
      updatedState.userInfo.entries[action.index].transactions =
        action.transactions;
      return updatedState;

    /* STATE OF THE NAVBAR */
    case "CHANGE_ACTIVE_MENU_ITEM":
      return {
        ...state,
        activeMenuItem: action.activeMenuItem
      };

    /* STATE OF THE TRANSACTIONS TABLE */
    case "CHANGE_TRANSACTION_FORM_FIELDS":
      // console.log(action)
      return {
        ...state,
        transactionContainer: {
          ...state.transactionContainer,
          [action.whichForm]: (state.transactionContainer[action.whichForm] =
            state.transactionContainer[action.whichForm] + action.amount)
        }
      };
    case "TOGGLE_TRANSACTION_DESCRIPTION":
      return {
        ...state,
        transactionContainer: {
          ...state.transactionContainer,
          descriptionToggle: !state.transactionContainer.descriptionToggle
        }
      };
    // case "TOGGLE_TRANSACTION_FILTER":
    //   return {
    //     ...state,
    //     transactionContainer: {
    //       ...state.transactionContainer,
    //       filterSelected: action.filterSelected
    //     }
    //   };
    // case "TOGGLE_NEW_TRANSACTION":
    //   return {
    //     ...state,
    //     transactionContainer: {
    //       ...state.transactionContainer,
    //       newTransaction: !state.transactionContainer.newTransaction,
    //       newAccount: false
    //     }
    //   };
    case "NEW_ACCOUNT":
      debugger;
      return { ...state };
    case "TRANSACTION_SUBMITTED":
      return {
        ...state,
        // userInfo: {
        //   ...state.userInfo,
        //   userInfo.accounts: {
        //     ...state.userInfo.accounts,
        //     []
        //   }
        // },
        transactionContainer: {
          ...state.transactionContainer,
          newTransaction: false
        }
      };
    // case "TOGGLE_NEW_ACCOUNT":
    //   return {
    //     ...state,
    //     transactionContainer: {
    //       ...state.transactionContainer,
    //       newAccount: !state.transactionContainer.newAccount,
    //       newTransaction: false
    //     }
    //   };
    case "UPDATE_TRANSACTION_BALANCE":
      return {
        ...state,
        transactionContainer: {
          ...state.transactionContainer,
          transactionBalance: action.transactionBalance
        }
      };
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
    case "TOGGLE_TRANSACTION_PRIMARY_ROW":
      return {
        ...state,
        transactionContainer: {
          ...state.transactionContainer,
          topRow: action.topRow
        }
      };
    case "TOGGLE_TRANSACTION_SECONDARY_ROW":
      // console.log(action);
      return {
        ...state,
        transactionContainer: {
          ...state.transactionContainer,
          [action.checkBox]: !state.transactionContainer[action.checkBox]
        }
      };
    /* GENERIC FORM UPDATE */
    case "UPDATE_DATE":
      return {
        ...state,
        [action.container]: {
          ...state[action.container],
          [action.whichDate]: action.newDate
            ? action.newDate
            : dateHelpers.dateHelpersJavaScript(new Date())
        }
      };

    case "UPDATE_CHART_TYPE":
      return {
        ...state,
        chartContainer: {
          ...state.chartContainer,
          chartType: action.chartType,
          showSubcategories: []
        }
      };

    case "UPDATE_CHART_SUBCATEGORIES":
      return {
        ...state,
        chartContainer: {
          ...state.chartContainer,
          showSubcategories: action.arrayOfSubcategories
        }
      };
    /* DONE */

    default:
      return state;
  }
};

export default rootReducer;
