import api from "../Components/API/api";

export const fetchUserData = userId => {
  return dispatch => {
    dispatch({ type: "ASYNC_START" });
    return api.accounts.allUsersAccounts(userId).then(accounts => {
      dispatch({ type: "SET_USERS_ACCOUNTS", accounts });
      fetchUsersEntries(userId, accounts, dispatch);
    });
  };
};

const fetchUsersEntries = (userId, accounts, dispatch) => {
  return api.entries.allUsersEntries(userId).then(entries => {
    dispatch({ type: "SET_USERS_ENTRIES", entries });
    getAllTransactions(entries, accounts, dispatch);
  });
};

const getAllTransactions = (entries, accounts, dispatch) => {
  entries.forEach((entry, index) => {
    api.transactions.allEntrysTransactions(entry.id).then(transactions => {
      transactions.forEach(transaction => {
        accounts.forEach(account => {
          if (account.id === transaction.account_id) {
            transaction.accountName = account.name;
          }
        });
      });
      dispatch({ type: "ASSIGN_TRANSACTIONS_TO_ENTRY", transactions, index });
      if (index === entries.length - 1) {
        setTimeout(() => dispatch({ type: "ASYNC_STOP" }), 500);
      }
    });
  });
};
