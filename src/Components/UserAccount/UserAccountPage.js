import React from 'react'
import { connect } from 'react-redux';
import { Button, Popup } from 'semantic-ui-react'
import api from '../API/api';
import UserHomeStats from './UserHomeStats';




const UserAccountPage = (props) => {

  console.log(props)

  const handleDelete = (event) => {
    api.auth
    .deleteUserAccount(props.id)
    .then(json => {
      if (json.error) {
        console.log("ERROR")
      } else {
        // console.log('here')
        props.deleteAccount()
      }
    })
  }

  const handleEdit = (event) => {
    api.auth
    .editUserAccount(props.id)
    .then(json => {
      if (json.error) {
        console.log("ERROR")
      } else {
        // console.log('here')
        // props.deleteAccount()
      }
    })
  }

  return(
    <div>
      <h3>Email address: { props.email }</h3>
      <h3>Ticker symbol: { props.tickerSymbol }</h3>
      <h3>Your numbers:</h3>
      <UserHomeStats />

      <Button.Group attached='bottom'>
        <Button onClick={ handleEdit }>Edit Account</Button>
        <Popup
          trigger={<Button color='red' content='Delete Account' />}
          content={<Button
            onClick={
              handleDelete
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

  // export default UserAccountPage
}


const mapStateToProps = (state) => {
  return {
    id: state.userInfo.id,
    email: state.userInfo.email,
    // ticker: state.userInfo.tickerSymbol
    // agreedToTerms: state.formValidity.signUpForm
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAccount: () => {
      dispatch({ type: 'LOG_USER_OUT' })
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  // null
)(UserAccountPage)
