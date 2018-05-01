import api from "../Components/API/api";

export const fetchTransactions = userId => {
  return dispatch => {
    dispatch({ type: "ASYNC_START" });
    api.account.allUsersAccounts(userId).then(accountsJson => {
      console.log(accountsJson);
      //RENAME
      dispatch({ type: "SET_USERS_ACCOUNTS", accountsJson });
    });
  };
};

// const
//
// // api.accounts
// //   .allUsersAccounts(this.props.id)
// //   .then(json => this.props.setUsersAccounts(json));
// // // this.mapAccountNames(json)))
// // // fetchUsersInformation(this.props.id)
// // api.entries.allUsersEntries(this.props.id).then(json => {
// //   this.props.setUsersEntries(json);
// //   // entries = this.props.entries
// //   // console.log(this.props.entries)
// //   this.getAllTransactions(this.props.entries);
// // });
//
// // let entries
// componentDidMount = () => {
//   // console.log(this.props.firstTimeLoaded);
//   if (!this.props.firstTimeLoaded) {
//     console.log(this.props.firstTimeLoaded);
//     api.accounts
//       .allUsersAccounts(this.props.id)
//       .then(json => this.props.setUsersAccounts(json));
//     // this.mapAccountNames(json)))
//     // fetchUsersInformation(this.props.id)
//     api.entries.allUsersEntries(this.props.id).then(json => {
//       this.props.setUsersEntries(json);
//       // entries = this.props.entries
//       // console.log(this.props.entries)
//       this.getAllTransactions(this.props.entries);
//     });
//     this.props.firstTimeLoadedTrue();
//
//     // api.transactions.allEntriesTransactions
//   }
// };
//
// // mapAccountNames = (accounts) => {
// //   return accounts.map((account) => account.name)
// // }
//
// getAllTransactions = entries => {
//   entries.forEach((entry, index) => {
//     // console.log(entry)
//     api.transactions.allEntrysTransactions(entry.id).then(transactions => {
//       // console.log(entry)
//       // console.log(transactions)
//       transactions.forEach(transaction => {
//         this.props.accounts.forEach(account => {
//           if (account.id === transaction.account_id) {
//             transaction.accountName = account.name;
//           }
//         });
//       });
//       // this.assignTransactionsToEntry(transactions, entry, index)
//       this.props.assignTransactionsToEntry(transactions, index);
//     });
//   });
// };
