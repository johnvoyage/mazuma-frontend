import React from 'react'
import { connect } from 'react-redux'
import { totalForSubcategory, filterAccountsOfSubcategoryId, totalGivenAccountId, numberOfEntriesGivenAccountId } from '../MainSegment/TransactionFunctions'
import { Table } from 'semantic-ui-react'


const Earning = (props) => {

  // const totalNetIncome = (entries) => {
  //   return entries.reduce((aggr, entry) => {
  //     return netIncomeOfTransaction(entry.transactions)
  //   }, 0)
  // }
  //
  // const netIncomeOfTransaction = (arrayOfTransactions) => {
  //   return arrayOfTransactions.reduce((aggr, transaction) => {
  //     if (trueIfIncomeAccount(transaction.account_id) && trueIfInTimeframe()) {
  //       return aggr + parseFloat(transaction.amount)
  //     } else {
  //       return aggr
  //     }
  //   }, 0)
  // }
  //
  // const trueIfIncomeAccount = (accountId) => {
  //   for (const account of props.accounts) {
  //     if (account.id === accountId && account.subcategory_id >= 8) {
  //       return true
  //     }
  //   }
  //   return false
  // }
  //
  // const trueIfInTimeframe = () => {
  //   return true
  // }



  // debugger

  // const netIncome = () => {
  //   props.entries.reduce((aggr, entry) => {
  //
  //   })
  // }


  const renderEarningRows = () => {
    return filterAccountsOfSubcategoryId(props.accounts, 8).map((account, index) => {
      return (
        <Table.Row key={index}>
          <Table.Cell>
            {account.name}
          </Table.Cell>
          <Table.Cell>
            {numberOfEntriesGivenAccountId(props.entries, account.id)}
          </Table.Cell>
          <Table.Cell>
            {totalGivenAccountId(props.entries, account.id)}
          </Table.Cell>
        </Table.Row>
      )
    })
  }

  return(
    <Table celled structured>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign='center' colSpan='3'>Earning</Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell textAlign='center'>Account</Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>Number of Entries</Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>Amount</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        { renderEarningRows() }
      </Table.Body>
      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell textAlign='right' colSpan='2'>Subtotal:</Table.HeaderCell>
          <Table.HeaderCell>{totalForSubcategory(props.entries, props.accounts, [8])}</Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}

const mapStateToProps = (state) => {
  return {
    // showLiquid
    accounts: state.userInfo.accounts,
    entries: state.userInfo.entries
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // termsAgreementInit: () => {
    //   dispatch({ type: 'TERMS_AGREEMENT_INIT' })
  //   // },
  //   toggleTermsAgreement: () => {
  //     dispatch({ type: 'TOGGLE_TERMS_AGREEMENT' })
  //   },
  //   signUserUp: (userInfo) => {
  //     console.log(userInfo)
  //     dispatch({ type: 'SIGN_USER_UP', userInfo })
  //   }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Earning)
