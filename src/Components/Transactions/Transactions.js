import React from "react";
// import { Icon, Table } from 'semantic-ui-react'
import { connect } from "react-redux";
import TransactionsTopRow from "./TransactionsTopRow";
import TransactionsTable from "./TransactionsTable";
import NewTransactionForm from "./NewTransactionForm";
import NewAccountForm from "./NewAccountForm";
// import api from '../API/api';

// import QuickFilters from "./QuickFilters";
// import CustomFilters from "./CustomFilters";

// import api from '../API/api';

const Transactions = props => {
  // componentDidMount = () => {
  //   api.accounts.allUsersAccounts(this.props.id)
  //     .then(json => this.props.setUsersAccounts(json))
  //       // this.mapAccountNames(json)))
  //   // fetchUsersInformation(this.props.id)
  //   api.entries.allUsersEntries(this.props.id)
  //     .then(json => {
  //       this.props.setUsersEntries(json)
  //       // entries = this.props.entries
  //       // console.log(this.props.entries)
  //       this.getAllTransactions(this.props.entries)
  //     })
  //   // api.transactions.allEntriesTransactions
  // }
  //
  // // mapAccountNames = (accounts) => {
  // //   return accounts.map((account) => account.name)
  // // }
  //
  // getAllTransactions = (entries) => {
  //   entries.forEach((entry, index) => {
  //     // console.log(entry)
  //     api.transactions.allEntrysTransactions(entry.id)
  //       .then(transactions => {
  //         // console.log(entry)
  //         // console.log(transactions)
  //         transactions.forEach((transaction) => {
  //           this.props.accounts.forEach((account) => {
  //             if (account.id === transaction.account_id) {
  //               transaction.accountName = account.name
  //             }
  //           })
  //         })
  //         // this.assignTransactionsToEntry(transactions, entry, index)
  //         this.props.assignTransactionsToEntry(transactions, index)
  //
  //       })
  //     // return entry
  //   })
  // }

  const renderFilter = filterSelected => {
    switch (filterSelected) {
      case "view transactions":
        return (
          <div>
            <TransactionsFilter />
            <TransactionsTable />
          </div>
        );

      case "new transaction":
        return <NewTransactionForm />;
      case "new account":
        return <NewAccountForm />;
      default:
        return "Bug in Transactions > renderFilter";
    }
  };

  // render() {
  return (
    <div>
      <TransactionsTopRow />
      <br />
      {renderFilter(props.topRow)}
    </div>
  );
  // }
};

const mapStateToProps = state => {
  return {
    // newTransaction: state.transactionContainer.newTransaction,
    // newAccount: state.transactionContainer.newAccount,
    //
    // filterSelected: state.transactionContainer.filterSelected,
    // id: state.userInfo.id,
    // email: state.userInfo.email,
    // // userId: state.userInfo.id
    // accounts: state.userInfo.accounts,
    // entries: state.userInfo.entries,
    topRow: state.transactionContainer.topRow
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // logOutAccount: () => {
//     //   dispatch({ type: 'LOG_USER_OUT' })
//     // },
//     setUsersAccounts: (accounts) => {
//       dispatch({ type: 'SET_USERS_ACCOUNTS', accounts })
//     },
//     setUsersEntries: (entries) => {
//       dispatch({ type: 'SET_USERS_ENTRIES', entries })
//     },
//     assignTransactionsToEntry: (transactions, index) => {
//       dispatch({ type: 'ASSIGN_TRANSACTIONS_TO_ENTRY', transactions, index })
//     },
//   }
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  null
)(Transactions);
