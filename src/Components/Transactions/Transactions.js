import React from 'react'
// import { Icon, Table } from 'semantic-ui-react'
import { connect } from 'react-redux';
import SelectedFilters from './SelectedFilters';
import TransactionsTable from './TransactionsTable';
import NewTransactionForm from './NewTransactionForm';
import NewAccountForm from './NewAccountForm';

import QuickFilters from './QuickFilters';
import CustomFilters from './CustomFilters';

// import api from '../API/api';


class Transactions extends React.Component {


  // componentDidMount = () => {
  //   api.accounts.allUsersAccounts(this.props.userId)
  // }

  renderFilter = (filterSelected) => {
    switch (filterSelected) {
      case 'none':
        return null
      case 'quick':
        return <QuickFilters />
      case 'custom':
        return <CustomFilters />
      default:
        return "Bug in Transactions > renderFilter"

    }
  }

  render() {
    return(
      <div>
        <SelectedFilters />

        <br />
        <br />
        {
          this.props.newAccount ?
          <NewAccountForm /> :
          null
        }
        {
          this.props.newTransaction ?
          <NewTransactionForm /> :
          null
        }

        <br />
        <br />

        {
          this.renderFilter(this.props.filterSelected)
        }


        <br />
        <br />
        <TransactionsTable />



      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    newTransaction: state.transactionContainer.newTransaction,
    newAccount: state.transactionContainer.newAccount,

    filterSelected: state.transactionContainer.filterSelected,
    // userId: state.userInfo.id
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
