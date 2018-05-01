import api from "../Components/API/api";

export const fetchAccounts = userId => {
  return dispatch => {
    dispatch({ type: "ASYNC_START" });
    api.account.allUsersAccounts(userId).then(accountsJson => {
      console.log(accountsJson);
      //RENAME
      dispatch({ type: "SET_USERS_ACCOUNTS", accountsJson });
    });
  };
};
