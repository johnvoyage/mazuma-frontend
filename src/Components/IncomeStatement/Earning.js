import React from "react";
import { connect } from "react-redux";
import { subcategoryIdToName } from "../../StaticOptions/subcategories";
import financialStatementHelpers from "../../HelperFunctions/financialStatementHelpers";
import { Table } from "semantic-ui-react";
import formatNumber from "../../HelperFunctions/formatNumber";

const tableHeader = "Income";

const subcategories = [8];

const Earning = props => {
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
          {amountOfEntriesGivenSubcategories([subcategoryId])}
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

  const amountOfEntriesGivenSubcategories = arrayOfSubcategoryIds => {
    const accountIdsOfSubcategoriesArray = financialStatementHelpers.filterAccountIdsOfSubcategories(
      arrayOfSubcategoryIds,
      props.accounts
    );
    return formatNumber.standard(
      financialStatementHelpers
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
        }, 0)
    );
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
              {formatNumber.withoutCents(
                numberOfEntriesGivenAccount(account.id)
              )}
            </Table.Cell>
            <Table.Cell textAlign="center">
              {formatNumber.standard(amountOfEntriesGivenAccount(account.id))}
            </Table.Cell>
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
            {tableHeader}
          </Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell width={6} textAlign="center">
            Account
          </Table.HeaderCell>
          <Table.HeaderCell width={5} textAlign="center">
            # of Entries
          </Table.HeaderCell>
          <Table.HeaderCell width={5} textAlign="center">
            Amount
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {subcategories.map(subcategory => renderRows(subcategory))}
      </Table.Body>
      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell textAlign="right" colSpan="2">
            Subtotal:
          </Table.HeaderCell>
          <Table.HeaderCell>
            {amountOfEntriesGivenSubcategories(subcategories, props.accounts)}
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
    beginDate: state.netIncomeContainer.beginDate,
    endDate: state.netIncomeContainer.endDate
  };
};

export default connect(mapStateToProps, null)(Earning);
