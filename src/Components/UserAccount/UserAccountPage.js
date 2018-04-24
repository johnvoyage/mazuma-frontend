import React from 'react'
import { connect } from 'react-redux';
import { Button, Popup } from 'semantic-ui-react'


const UserAccountPage = (props) => {
  // console.log(props)
  return(
    <div>
      <h3>Email address: { props.email }</h3>
      <h3>Ticker symbol: { props.tickerSymbol }</h3>
      <h3>Recent Transactions:</h3>

      <Button.Group attached='bottom'>
        <Button>Edit Account</Button>
        <Popup
          trigger={<Button color='red' content='Delete Account' />}
          content={<Button color='red' content='Click to Confirm' />}
          on='click'
          position='top center'
        />
      </Button.Group>
    </div>
  )
}

// export default UserAccountPage

const mapStateToProps = (state) => {
  return {
    email: state.userInfo.email,
    ticker: state.userInfo.tickerSymbol
    // agreedToTerms: state.formValidity.signUpForm
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
    // termsAgreementInit: () => {
    //   dispatch({ type: 'TERMS_AGREEMENT_INIT' })
    // },
    // toggleTermsAgreement: () => {
    //   dispatch({ type: 'TOGGLE_TERMS_AGREEMENT' })
    // },
    // signUserUp: (userInfo) => {
    //   console.log(userInfo)
    //   dispatch({ type: 'SIGN_USER_UP', userInfo })
    // }
//   }
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  null
)(UserAccountPage)
