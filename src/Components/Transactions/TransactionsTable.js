import React from 'react'
import { Icon, Table } from 'semantic-ui-react'
import { connect } from 'react-redux';

const TransactionsTable = (props) => {

  // console.log(props)

  const entries =
  props.entries.map((entry, index) => {
    // debugger
    // console.log(entry)
    return {
      number: index + 1,
      date: entry.date.slice(5, 10) + "-" + entry.date.slice(0, 4),
      transactions: entry.transactions.map((transaction) => {
        return {
          account: transaction.accountName,
          amount: transaction.amount,
        }
      }),
      description: entry.description ? entry.description : "No description",
    }

  }).reverse()
  // [
  //   {
  //     number: 1,
  //     date: '1/1/15',
  //     transactions: [
  //       {
  //         account: 1001,
  //         amount: 750
  //       },{
  //         account: 1002,
  //         amount: -750
  //       }
  //     ],
  //     description: 'this is description uno'
  //   },
  //   {
  //     number: 2,
  //     date: '1/1/17',
  //     transactions: [
  //       {
  //         account: 1003,
  //         amount: 1000
  //       },{
  //         account: 1004,
  //         amount: -850
  //       },{
  //         account: 1005,
  //         amount: -150
  //       }
  //     ],
  //     description: 'this is description dos'
  //   }, {
  //     number: 3,
  //     date: '2/2/17',
  //     transactions: [
  //       {
  //         account: 1003,
  //         amount: 250
  //       },{
  //         account: 1007,
  //         amount: 350
  //       },{
  //         account: 1004,
  //         amount: -200
  //       },{
  //         account: 1005,
  //         amount: -400
  //       }
  //     ],
  //     description: 'this is description tres'
  //   }
  // ]

  const renderTransactions = () => {
    let keyCounter = 1
    let tableRows = []
    entries.forEach((entry, index) => {
      // debugger
      tableRows.push(
        <Table.Row key={`${keyCounter++}`}>
          <Table.Cell rowSpan={entry.transactions.length}>
            Transaction:   {entry.number}
            <br />
            Date:   {entry.date}
          </Table.Cell>

          <Table.Cell>{entry.transactions[0].account}</Table.Cell>
          <Table.Cell>{entry.transactions[0].amount}</Table.Cell>
          <Table.Cell onClick={() => console.log('edit entry!')} rowSpan={entry.transactions.length} selectable textAlign='center'>
            <Icon name='pencil' />
          </Table.Cell>
          <Table.Cell onClick={() => console.log('delete entry!')} rowSpan={entry.transactions.length} selectable textAlign='center'>
            <Icon name='remove' />
          </Table.Cell>
        </Table.Row>
      )

      entry.transactions.forEach((transaction, index) => {
        if (index !== 0) {
          tableRows.push(
            <Table.Row key={`${keyCounter++}`}>
              <Table.Cell>{transaction.account}</Table.Cell>
              <Table.Cell>{transaction.amount}</Table.Cell>
            </Table.Row>
          )
        }
      })

      if (props.descriptionToggle) {
        tableRows.push(
          <Table.Row key={`${keyCounter++}`}>
            <Table.Cell colSpan={5}>
              {entry.description}
            </Table.Cell>
          </Table.Row>
        )
      }
    })
    return tableRows
  }


  // render() {
    // console.log()
    return(
      <Table celled structured>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign='center'>Transaction</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Account</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Amount</Table.HeaderCell>
            <Table.HeaderCell />
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {renderTransactions()}
        </Table.Body>
      </Table>
    )
  // }
}

const mapStateToProps = (state) => {
  return {
    descriptionToggle: state.transactionContainer.descriptionToggle,
    entries: state.userInfo.entries
    // ticker: state.userInfo.tickerSymbol
    // agreedToTerms: state.formValidity.signUpForm
  };
};


export default connect(
  mapStateToProps,
  // mapDispatchToProps
  null
)(TransactionsTable)
