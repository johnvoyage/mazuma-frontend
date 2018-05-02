import React from "react";
import { connect } from "react-redux";
import { subcategoryIdToName } from "../../StaticOptions/subcategories";
import financialStatementHelpers from "../../HelperFunctions/financialStatementHelpers";
import { Table } from "semantic-ui-react";

const Asset = props => {
  const filterEntriesWithinDateRange = () => {
    return financialStatementHelpers.filterEntriesWithinDateRange(
      props.entries,
      props.beginDate,
      props.endDate
    );
  };
  const subtotalHeader = subcategoryId => {
    return (
      <Table.Row key={-1}>
        <Table.Cell textAlign="center" colSpan="3">
          {subcategoryIdToName(subcategoryId)}
        </Table.Cell>
      </Table.Row>
    );
  };

  const subtotalFooter = subcategoryId => {
    return (
      <Table.Row key={-2}>
        <Table.Cell textAlign="right" colSpan="2">
          Subtotal:
        </Table.Cell>
        <Table.Cell>
          {amountOfEntriesGivenSubcategories([subcategoryId], props.accounts)}
        </Table.Cell>
      </Table.Row>
    );
  };

  const accountsToDisplay = subcategoryId => {
    return financialStatementHelpers.filterAccountsOfSubcategoryId(
      subcategoryId,
      financialStatementHelpers.mapArrayOfAccountIdsToAccountObjects(
        financialStatementHelpers.reduceNestedArrayOfAccountIds(
          financialStatementHelpers.mapAccountIdsUsedInEntries(
            filterEntriesWithinDateRange()
          )
        ),
        props.accounts
      )
    );
  };

  const amountOfEntriesGivenSubcategories = (
    arrayOfSubcategoryIds,
    arrayOfAccounts
  ) => {
    const accountIdsOfSubcategoriesArray = financialStatementHelpers.filterAccountIdsOfSubcategories(
      arrayOfSubcategoryIds,
      arrayOfAccounts
    );
    return financialStatementHelpers
      .mapTransactionsOfEntries(filterEntriesWithinDateRange())
      .reduce((aggr, arrayOfTransactions) => {
        arrayOfTransactions.forEach(transaction => {
          return accountIdsOfSubcategoriesArray.indexOf(
            transaction.account_id
          ) > -1
            ? (aggr += parseFloat(transaction.amount))
            : null;
        });
        return aggr;
      }, 0);
  };

  const amountOfEntriesGivenAccount = accountId => {
    return financialStatementHelpers.reduceNestedArrayOfTransactionsToAmount(
      accountId,
      financialStatementHelpers.mapTransactionsOfEntries(
        filterEntriesWithinDateRange()
      )
    );
  };

  const numberOfEntriesGivenAccount = accountId => {
    return financialStatementHelpers.reduceNestedArrayOfTransactionsToNumber(
      accountId,
      financialStatementHelpers.mapTransactionsOfEntries(
        filterEntriesWithinDateRange()
      )
    );
  };

  const renderRows = subcategoryId => {
    const arrayOfRows = accountsToDisplay(subcategoryId).map(
      (account, index) => {
        return (
          <Table.Row key={index}>
            <Table.Cell textAlign="center">{account.name}</Table.Cell>
            <Table.Cell textAlign="center">
              {numberOfEntriesGivenAccount(account.id)}
            </Table.Cell>
            <Table.Cell>{amountOfEntriesGivenAccount(account.id)}</Table.Cell>
          </Table.Row>
        );
      }
    );
    arrayOfRows.unshift(subtotalHeader(subcategoryId));
    arrayOfRows.push(subtotalFooter(subcategoryId));
    return arrayOfRows;
  };

  return (
    <Table celled structured>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="center" colSpan="3">
            Asset
          </Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell textAlign="center">Account</Table.HeaderCell>
          <Table.HeaderCell textAlign="center"># of Entries</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Amount</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {renderRows(1)}
        {renderRows(2)}
        {renderRows(3)}
        {renderRows(4)}
      </Table.Body>
      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell textAlign="right" colSpan="2">
            Subtotal:
          </Table.HeaderCell>
          <Table.HeaderCell>
            {amountOfEntriesGivenSubcategories([1, 2, 3, 4], props.accounts)}
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

const mapStateToProps = state => {
  return {
    accounts: state.userInfo.accounts,
    entries: state.userInfo.entries,
    beginDate: 0,
    endDate: state.netWorthContainer.asOfDate
  };
};

export default connect(mapStateToProps, null)(Asset);
