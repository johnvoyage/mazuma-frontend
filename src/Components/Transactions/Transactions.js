import React from 'react'
// import { Icon, Table } from 'semantic-ui-react'
import { connect } from 'react-redux';
import SelectedFilters from './SelectedFilters';
import TransactionsTable from './TransactionsTable';
import NewTransactionForm from './NewTransactionForm';

import QuickFilters from './QuickFilters';


const Transactions = (props) => {

  const renderFilter = (filterSelected) => {
    switch (filterSelected) {
      case 'none':
        return null
      case 'quick':
        return <QuickFilters />
      case 'custom':
        return "Custom Filters"
      default:
        return "Bug in Transactions > renderFilter"

    }
  }

  // render() {
  return(
    <div>
      <SelectedFilters />

      <br />
      <br />
      {
        props.newTransaction ?
        <NewTransactionForm /> :
        null
      }

      <br />
      <br />

      {
        renderFilter(props.filterSelected)
      }


      <br />
      <br />
      <TransactionsTable />



    </div>
  )
  // }
}


const mapStateToProps = (state) => {
  return {
    newTransaction: state.transactionContainer.newTransaction,
    filterSelected: state.transactionContainer.filterSelected,
    // ticker: state.userInfo.tickerSymbol
    // agreedToTerms: state.formValidity.signUpForm
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // termsAgreementInit: () => {
//     //   dispatch({ type: 'TERMS_AGREEMENT_INIT' })
//     // },
//     toggleTransactionDescription: () => {
//       dispatch({ type: 'TOGGLE_TRANSACTION_DESCRIPTION' })
//     },
//     // signUserUp: (userInfo) => {
//     //   console.log(userInfo)
//     //   dispatch({ type: 'SIGN_USER_UP', userInfo })
//     // }
//   }
// }

export default
connect(
  mapStateToProps,
  // mapDispatchToProps
  null
)(Transactions)
