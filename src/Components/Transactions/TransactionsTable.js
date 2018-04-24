import React from 'react'
import { Icon, Table } from 'semantic-ui-react'
import { connect } from 'react-redux';
// import SelectedFilters from './SelectedFilters';
// import SelectedFilters from '.TransactionsTable';

// import QuickFilters from './QuickFilters';
const entries = [
  {
    number: 1,
    date: '1/1/15',
    transactions: [
      {
        account: 1001,
        amount: 750
      },{
        account: 1002,
        amount: -750
      }
    ],
    description: 'this is description uno'
  },
  {
    number: 1,
    date: '1/1/15',
    transactions: [
      {
        account: 1003,
        amount: 1000
      }
    ],
    description: 'this is description dos'
  }
]

class TransactionsTable extends React.Component {

  renderDescriptions = () => {

  }

  renderEntries = (transactions) => {
    return transactions.map((transaction) => {
      return (
        <div>
          <Table.Cell>
            {transaction.account}
          </Table.Cell>
          <Table.Cell>
            {transaction.amount}
          </Table.Cell>
        </div>
      )
    })
  }

  renderTransactions = () => {
    debugger
    return entries.map((entry) => {
      console.log(entry)
      return (
        <Table.Body>
          <Table.Row>
            <Table.Cell rowSpan={entry.transactions.length}>
              Transaction:   {entry.number}
              <br />
              Date:   {entry.date}
            </Table.Cell>
            {
              this.renderEntries(entry.transactions)
            }
            <Table.Cell>1001</Table.Cell>
            <Table.Cell>750</Table.Cell>
            <Table.Cell rowSpan={entry.transactions.length} selectable textAlign='center'>
              <Icon name='pencil' />
            </Table.Cell>
            <Table.Cell rowSpan={entry.transactions.length} selectable textAlign='center'>
              <Icon name='remove' />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      )
    })
  }

  render() {
    return(

      <Table celled compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign='center'>Transaction</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Account</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Amount</Table.HeaderCell>
            <Table.HeaderCell />
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        {
          this.renderTransactions
        }



      </Table>
    )
  }
}

// export default UserAccountPaccount

const mapStateToProps = (state) => {
  return {
    descriptionToggle: state.transactionContainer.descriptionToggle,
    // ticker: state.userInfo.tickerSymbol
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
)(TransactionsTable)

// <Table.Body>
//   <Table.Row>
//     <Table.Cell rowSpan={2}>
//       Transaction: 1
//       <br/>
//       Date: 1/15/16
//     </Table.Cell>
//     <Table.Cell>1001</Table.Cell>
//     <Table.Cell>750</Table.Cell>
//     <Table.Cell rowSpan={2} selectable textAlign='center'>
//       <Icon name='pencil' />
//     </Table.Cell>
//     <Table.Cell rowSpan={2} selectable textAlign='center'>
//       <Icon name='remove' />
//     </Table.Cell>
//   </Table.Row>
//
//
//   <Table.Row>
//     <Table.Cell>1007</Table.Cell>
//     <Table.Cell>750</Table.Cell>
//   </Table.Row>
//
//   <Table.Row>
//
//     <Table.Cell colSpan={5}>
//       The description of this transaction hereeee
//     </Table.Cell>
//
//   </Table.Row>
//
//   <Table.Row>
//     <Table.Cell>
//       Transaction:2
//       <br/>
//       Date: 1/16/16
//     </Table.Cell>
//     <Table.Cell>1006</Table.Cell>
//     <Table.Cell>1,500</Table.Cell>
//     <Table.Cell selectable textAlign='center'>
//       <Icon name='pencil' />
//     </Table.Cell>
//     <Table.Cell selectable textAlign='center'>
//       <Icon name='remove' />
//     </Table.Cell>
//
//   </Table.Row>
//   <Table.Row>
//
//     <Table.Cell colSpan={5}>
//       The description of this transaction hereeee
//     </Table.Cell>
//
//   </Table.Row>
//
// </Table.Body>
