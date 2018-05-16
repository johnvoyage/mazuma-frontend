import React from "react";
import { connect } from "react-redux";
import { Button, Popup } from "semantic-ui-react";
import api from "../API/api";
import UserHomeStats from "./UserHomeStats";
import UserInfo from "./UserInfo";
import UserAccounts from "./UserAccounts";
import CurrentGoals from "./CurrentGoals";

class UserAccountPage extends React.Component {
  handleDelete = event => {
    api.auth.deleteUserAccount(this.props.id).then(json => {
      if (json.error) {
        console.log("ERROR");
      } else {
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
}

const mapStateToProps = state => {
  return {
    id: state.userInfo.id,
    email: state.userInfo.email,
    firstTimeLoaded: state.userInfo.firstTimeLoaded,
    accounts: state.userInfo.accounts,
    entries: state.userInfo.entries
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

export default connect(mapStateToProps, mapDispatchToProps)(UserAccountPage);
