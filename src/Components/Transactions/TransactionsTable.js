import React from "react";
import { Icon, Table } from "semantic-ui-react";
import { connect } from "react-redux";
import formatNumber from "../../HelperFunctions/formatNumber";
import dateHelpers from "../../HelperFunctions/dateHelpers";
import filterTest from "../../HelperFunctions/transactionFilterTests";

const TransactionsTable = props => {
  const entries = props.entries
    .map((entry, index) => {
      return {
        number: index + 1,
        date: entry.date.slice(5, 10) + "-" + entry.date.slice(0, 4),
        transactions: entry.transactions.map(transaction => {
          return {
            account: transaction.accountName,
            amount: formatNumber.accounting(transaction.amount)
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
      if (
        filterTest.passesTransactionFilterTests(entry, props.transactionFilters)
      ) {
        tableRows.push(
          <Table.Row key={`${keyCounter++}`}>
            <Table.Cell
              textAlign="center"
              colSpan={2}
              rowSpan={
                props.showEditDelete
                  ? entry.transactions.length - 1
                  : entry.transactions.length
              }
            >
              Transaction: {entry.number}
              <br />
              Date: {dateHelpers.dateSymbolReplace(entry.date, "-", "/")}
            </Table.Cell>

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
                {index === entry.transactions.length - 1 &&
                props.showEditDelete ? (
                  <Table.Cell
                    onClick={() => console.log("edit entry!")}
                    selectable
                    textAlign="center"
                  >
                    <Icon name="pencil" />
                  </Table.Cell>
                ) : null}
                {index === entry.transactions.length - 1 &&
                props.showEditDelete ? (
                  <Table.Cell
                    onClick={() => console.log("delete entry!")}
                    selectable
                    textAlign="center"
                  >
                    <Icon name="remove" />
                  </Table.Cell>
                ) : null}
                <Table.Cell textAlign="center">
                  {transaction.account}
                </Table.Cell>
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
      }
    });
    return tableRows;
  };

  return (
    <Table celled structured>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            colSpan={2}
            rowSpan={2}
            width={4}
            textAlign="center"
          >
            Transaction
          </Table.HeaderCell>
          <Table.HeaderCell textAlign="center" rowSpan={2} width={9}>
            Account
          </Table.HeaderCell>
          <Table.HeaderCell textAlign="center" rowSpan={2} width={3}>
            Amount
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{renderTransactions()}</Table.Body>
    </Table>
  );
};

const mapStateToProps = state => {
  return {
    showDescriptions: state.transactionContainer.showDescriptions,
    showEditDelete: state.transactionContainer.showEditDelete,
    entries: state.userInfo.entries,
    transactionFilters: state.transactionContainer.transactionFilters,
    accounts: state.userInfo.accounts
  };
};

export default connect(mapStateToProps, null)(TransactionsTable);
