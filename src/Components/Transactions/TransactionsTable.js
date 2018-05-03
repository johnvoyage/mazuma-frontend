import React from "react";
import { Icon, Table } from "semantic-ui-react";
import { connect } from "react-redux";

const TransactionsTable = props => {
  // console.log(props)

  const entries = props.entries
    .map((entry, index) => {
      // debugger
      // console.log(entry)
      return {
        number: index + 1,
        date: entry.date.slice(5, 10) + "-" + entry.date.slice(0, 4),
        transactions: entry.transactions.map(transaction => {
          return {
            account: transaction.accountName,
            amount: transaction.amount
          };
        }),
        description: entry.description ? entry.description : "No description"
      };
    })
    .reverse();

  const renderTransactions = () => {
    let keyCounter = 1;
    let tableRows = [];
    entries.forEach((entry, index) => {
      // debugger
      tableRows.push(
        <Table.Row key={`${keyCounter++}`}>
          <Table.Cell textAlign="center" rowSpan={entry.transactions.length}>
            Transaction: {entry.number}
            <br />
            Date: {entry.date}
          </Table.Cell>

          <Table.Cell textAlign="center">
            {entry.transactions[0].account}
          </Table.Cell>
          <Table.Cell textAlign="center">
            {entry.transactions[0].amount}
          </Table.Cell>
          <Table.Cell
            onClick={() => console.log("edit entry!")}
            rowSpan={entry.transactions.length}
            selectable
            textAlign="center"
          >
            <Icon name="pencil" />
          </Table.Cell>
          <Table.Cell
            onClick={() => console.log("delete entry!")}
            rowSpan={entry.transactions.length}
            selectable
            textAlign="center"
          >
            <Icon name="remove" />
          </Table.Cell>
        </Table.Row>
      );

      entry.transactions.forEach((transaction, index) => {
        if (index !== 0) {
          tableRows.push(
            <Table.Row key={`${keyCounter++}`}>
              <Table.Cell textAlign="center">{transaction.account}</Table.Cell>
              <Table.Cell textAlign="center">{transaction.amount}</Table.Cell>
            </Table.Row>
          );
        }
      });

      if (props.showDescriptions) {
        tableRows.push(
          <Table.Row key={`${keyCounter++}`}>
            <Table.Cell colSpan={5}>{entry.description}</Table.Cell>
          </Table.Row>
        );
      }
    });
    return tableRows;
  };

  // render() {
  // console.log()
  return (
    <Table celled structured>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={3} textAlign="center">
            Transaction
          </Table.HeaderCell>
          <Table.HeaderCell width={8} textAlign="center">
            Account
          </Table.HeaderCell>
          <Table.HeaderCell width={3} textAlign="center">
            Amount
          </Table.HeaderCell>
          <Table.HeaderCell width={1} />
          <Table.HeaderCell width={1} />
        </Table.Row>
      </Table.Header>
      <Table.Body>{renderTransactions()}</Table.Body>
    </Table>
  );
  // }
};

const mapStateToProps = state => {
  return {
    showDescriptions: state.transactionContainer.showDescriptions,
    entries: state.userInfo.entries
    // ticker: state.userInfo.tickerSymbol
    // agreedToTerms: state.formValidity.signUpForm
  };
};

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  null
)(TransactionsTable);
