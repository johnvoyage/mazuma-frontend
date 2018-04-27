import React from 'react'
import { connect } from 'react-redux';
import { Button, Popup } from 'semantic-ui-react'
import api from '../API/api';
import UserHomeStats from './UserHomeStats';
// import fetchUsersInformation from '../UserAccount/FetchUsersData';


class UserAccountPage extends React.Component {

  // console.log(this.props)
  componentDidMount = () => {
    api.accounts.allUsersAccounts(this.props.id)
      .then(json => this.props.setUsersAccounts(this.mapAccountNames(json)))
    // fetchUsersInformation(this.props.id)
    api.entries.allUsersEntries(this.props.id)
      .then(json => this.props.setUsersEntries(json))
  }

  mapAccountNames = (accounts) => {
    return accounts.map((account) => account.name)
  }

  handleDelete = (event) => {
    api.auth
    .deleteUserAccount(this.props.id)
    .then(json => {
      if (json.error) {
        console.log("ERROR")
      } else {
        // console.log('here')
        this.props.deleteAccount()
      }
    })
  }

  handleEdit = (event) => {
    api.auth
    .editUserAccount(this.props.id)
    .then(json => {
      if (json.error) {
        console.log("ERROR")
      } else {
        // console.log('here')
        // this.props.deleteAccount()
      }
    })
  }

  render() {
    return(
      <div>
        <h3>Email address: { this.props.email }</h3>
        <h3>Your numbers:</h3>
        <UserHomeStats />

        <Button.Group attached='bottom'>
          <Button onClick={ () => {
            // this.handleEdit
            console.log('edit!')}
          }>Edit Account</Button>
          <Popup
            trigger={<Button color='red' content='Delete Account' />}
            content={<Button
              onClick={
                this.handleDelete
              }
              color='red'
              content='Click to Confirm'
            />}
            on='click'
            position='top center'
          />
        </Button.Group>
      </div>
    )
  }
  // export default UserAccountPage
}


const mapStateToProps = (state) => {
  return {
    id: state.userInfo.id,
    email: state.userInfo.email,
    // userId: state.userInfo.id

    // ticker: state.userInfo.tickerSymbol
    // agreedToTerms: state.formValidity.signUpForm
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAccount: () => {
      dispatch({ type: 'LOG_USER_OUT' })
    },
    setUsersAccounts: (accounts) => {
      dispatch({ type: 'SET_USERS_ACCOUNTS', accounts })
    },
    setUsersEntries: (entries) => {
      dispatch({ type: 'SET_USERS_ENTRIES', entries })
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  // null
)(UserAccountPage)
