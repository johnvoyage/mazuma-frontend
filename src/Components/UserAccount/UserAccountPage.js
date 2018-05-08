import React from "react";
import { connect } from "react-redux";
import { Button, Popup } from "semantic-ui-react";
import api from "../API/api";
import UserHomeStats from "./UserHomeStats";
import UserInfo from "./UserInfo";
import UserAccounts from "./UserAccounts";
import CurrentGoals from "./CurrentGoals";

// import NewGoal from "./NewGoal";

// import fetchUsersInformation from '../UserAccount/FetchUsersData';

class UserAccountPage extends React.Component {
  // let entries
  /*
  componentDidMount = () => {
    // console.log(this.props.firstTimeLoaded);
    if (!this.props.firstTimeLoaded) {
      // console.log(this.props.firstTimeLoaded);
      api.accounts
        .allUsersAccounts(this.props.id)
        .then(json => this.props.setUsersAccounts(json));
      // this.mapAccountNames(json)))
      // fetchUsersInformation(this.props.id)
      api.entries.allUsersEntries(this.props.id).then(json => {
        this.props.setUsersEntries(json);
        // entries = this.props.entries
        // console.log(this.props.entries)
        this.getAllTransactions(this.props.entries);
      });
      this.props.firstTimeLoadedTrue();

      // api.transactions.allEntriesTransactions
    }
  };

  // mapAccountNames = (accounts) => {
  //   return accounts.map((account) => account.name)
  // }

  getAllTransactions = entries => {
    entries.forEach((entry, index) => {
      // console.log(entry)
      api.transactions.allEntrysTransactions(entry.id).then(transactions => {
        // console.log(entry)
        // console.log(transactions)
        transactions.forEach(transaction => {
          this.props.accounts.forEach(account => {
            if (account.id === transaction.account_id) {
              transaction.accountName = account.name;
            }
          });
        });
        // this.assignTransactionsToEntry(transactions, entry, index)
        this.props.assignTransactionsToEntry(transactions, index);
      });
    });
  };
*/

  // getTransactionAccountName = (accountId) => {
  //   api.accounts.readAccount(accountId)
  //     .then()
  // }

  // assignTransactionsToEntry = (transactionsArray, entry, index) => {
  // console.log('leggooo')
  // console.log(transactionsArray)
  // console.log(entry)
  // entry.transactions = transactionsArray
  // console.log(entry)
  // this.props.assignTransactionsToEntry(transactionsArray, index)
  // }

  handleDelete = event => {
    api.auth.deleteUserAccount(this.props.id).then(json => {
      if (json.error) {
        console.log("ERROR");
      } else {
        // console.log('here')
        this.props.logOutAccount();
      }
    });
  };

  handleEdit = event => {
    api.auth.editUserAccount(this.props.id).then(json => {
      if (json.error) {
        console.log("ERROR");
      } else {
        console.log("edit!");
        // this.props.logOutAccount()
      }
    });
  };

  render() {
    return (
      <div>
        <UserHomeStats />
        <UserInfo />
        <CurrentGoals />
        <UserAccounts />

        <Button.Group attached="bottom">
          <Popup
            trigger={<Button color="red" content="Delete Account" />}
            content={
              <Button
                onClick={this.handleDelete}
                color="red"
                content="Click to Confirm"
              />
            }
            on="click"
            position="top left"
          />
        </Button.Group>
      </div>
    );
  }
  // export default UserAccountPage
}

// <Button
//   onClick={() => {
//     // this.handleEdit
//     console.log("edit!");
//   }}
// >
//   Edit Account
// </Button>

const mapStateToProps = state => {
  return {
    id: state.userInfo.id,
    email: state.userInfo.email,
    firstTimeLoaded: state.userInfo.firstTimeLoaded,
    accounts: state.userInfo.accounts,
    entries: state.userInfo.entries
    // ticker: state.userInfo.tickerSymbol
    // agreedToTerms: state.formValidity.signUpForm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOutAccount: () => {
      dispatch({ type: "LOG_USER_OUT" });
    },
    setUsersAccounts: accounts => {
      dispatch({ type: "SET_USERS_ACCOUNTS", accounts });
    },
    setUsersEntries: entries => {
      dispatch({ type: "SET_USERS_ENTRIES", entries });
    },
    assignTransactionsToEntry: (transactions, index) => {
      dispatch({ type: "ASSIGN_TRANSACTIONS_TO_ENTRY", transactions, index });
    },
    firstTimeLoadedTrue: () => {
      dispatch({ type: "FIRST_TIME_LOADED_TRUE" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  // null
)(UserAccountPage);
