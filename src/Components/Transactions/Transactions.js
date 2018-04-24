import React from 'react'
// import { Icon, Table } from 'semantic-ui-react'
import { connect } from 'react-redux';
import SelectedFilters from './SelectedFilters';
import TransactionsTable from './TransactionsTable';

import QuickFilters from './QuickFilters';


class Transactions extends React.Component {

  render() {
    return(
      <div>
        <SelectedFilters />
        <QuickFilters />


        <br />
        <br />
        <TransactionsTable />



      </div>
    )
  }
}

// export default UserAccountPaccount

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
)(Transactions)
