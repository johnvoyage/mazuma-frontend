// import api from "../Components/API/api";
//
// // get all of the user's accounts
//
// // get all of the user's entries
//
// // get each entry's transactions
//
// export const fetchUserData = userId => {
//   console.log("here");
//   let accountsForTransactions;
//   return dispatch => {
//     dispatch({ type: "ASYNC_START" });
//     return api.accounts.allUsersAccounts(userId).then(accounts => {
//       console.log(accounts);
//       accountsForTransactions = accounts;
//       dispatch({ type: "SET_USERS_ACCOUNTS", accounts });
//       api.entries.allUsersEntries(userId).then(entries => {
//         console.log(entries);
//         dispatch({ type: "SET_USERS_ENTRIES", entries });
//         entries.forEach((entry, index) => {
//           api.transactions
//             .allEntrysTransactions(entry.id)
//             .then(transactions => {
//               transactions.forEach(transaction => {
//                 accountsForTransactions.forEach(account => {
//                   if (account.id === transaction.account_id) {
//                     transaction.accountName = account.name;
//                   }
//                 });
//               });
//               dispatch({
//                 type: "ASSIGN_TRANSACTIONS_TO_ENTRY",
//                 transactions,
//                 index
//               });
//             });
//         });
//       });
//     });
//     // dispatch({ type: "ASYNC_STOP" });
//   };
// };
// console.log(this.props.firstTimeLoaded);
// mapAccountNames = (accounts) => {
//   return accounts.map((account) => account.name)
// }

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
