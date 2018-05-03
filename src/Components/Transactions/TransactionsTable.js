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
          <Table.Cell
            textAlign="center"
            colSpan={2}
            rowSpan={entry.transactions.length - 1}
          >
            Transaction: {entry.number}
            <br />
            Date: {entry.date}
          </Table.Cell>
          {index === entries.length - 1 ? (
            <div>
              <Table.Cell
                onClick={() => console.log("edit entry!")}
                selectable
                textAlign="center"
              >
                <Icon name="pencil" />
              </Table.Cell>
              <Table.Cell
                onClick={() => console.log("delete entry!")}
                selectable
                textAlign="center"
              >
                <Icon name="remove" />
              </Table.Cell>
            </div>
          ) : null}

          <Table.Cell textAlign="center">
            {entry.transactions[0].account}
          </Table.Cell>
          <Table.Cell textAlign="center">
            {entry.transactions[0].amount}
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
          <Table.Header width={2} />
          <Table.Header width={2} />
          <Table.Header width={9} />
          <Table.Header width={3} />
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell colSpan={2} textAlign="center">
            Transaction
          </Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Account</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Amount</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{renderTransactions()}</Table.Body>
    </Table>
  );
  // }
};

// <Table.HeaderCell width={1} />
// <Table.HeaderCell width={1} />
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
