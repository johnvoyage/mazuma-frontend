import React from "react";
import { connect } from "react-redux";
import {
  //   // subcategoryIdToName,
  totalForSubcategory
  //   filterAccountsOfSubcategoryId,
  //   totalGivenAccountId,
  //   numberOfEntriesGivenAccountId
} from "../MainSegment/TransactionFunctions";
import { subcategoryIdToName } from "../../StaticOptions/subcategories";
import entriesFilter from "../../HelperFunctions/entriesFilter";
import { Table } from "semantic-ui-react";

const Asset = props => {
  const filterEntriesWithinDateRange = () => {
    return entriesFilter.filterEntriesWithinDateRange(
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
    // console.log(
    return entriesFilter.filterAccountsOfSubcategoryId(
      subcategoryId,
      entriesFilter.mapArrayOfAccountIdsToAccountObjects(
        entriesFilter.reduceNestedArrayOfAccountIds(
          entriesFilter.mapAccountIdsUsedInEntries(
            filterEntriesWithinDateRange()
          )
        ),
        props.accounts
      )
    );
    // );
  };

  const amountOfEntriesGivenSubcategories = (
    arrayOfSubcategoryIds,
    arrayOfAccounts
  ) => {
    entriesFilter.filterAccountsOfSubcategories(
      arrayOfSubcategoryIds,
      arrayOfAccounts
    );
    // console.log(
    //   entriesFilter.mapTransactionsOfEntries(filterEntriesWithinDateRange())
    // );
  };

  const amountOfEntriesGivenAccount = accountId => {
    // console.log(
    return entriesFilter.reduceNestedArrayOfTransactionsToAmount(
      accountId,
      entriesFilter.mapTransactionsOfEntries(filterEntriesWithinDateRange())
    );
    // );
  };

  const numberOfEntriesGivenAccount = accountId => {
    // console.log(
    return entriesFilter.reduceNestedArrayOfTransactionsToNumber(
      accountId,
      entriesFilter.mapTransactionsOfEntries(filterEntriesWithinDateRange())
    );
    // );
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
    // arrayOfSubcategoryIds.forEach(subcategoryId => {
    // console.log(
    //   entriesFilter.filterAccountsOfSubcategoryId(
    //     1,
    //     entriesFilter.mapArrayOfAccountIdsToAccountObjects(
    //       entriesFilter.reduceNestedArrayOfAccountIds(
    //         entriesFilter.mapAccountIdsUsedInEntries(
    //           entriesFilter.filterEntriesWithinDateRange(
    //             usersEntries,
    //             beginDate,
    //             endDate
    //           )
    //         )
    //       ),
    //       usersAccounts
    //     )
    //   )
    // );
    // // });
    // return;
  };

  // const filterEntriesWithinDateRange = (usersEntries, beginDate, endDate) => {
  //   return entriesFilter.filterEntriesWithinDateRange(
  //     usersEntries,
  //     beginDate,
  //     endDate
  //   );
  // };

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
          <Table.HeaderCell>total for subcat</Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );

  // const renderRows = (subcategoryId)
  // const renderRows = subcategoryId => {
  //   const arrayOfRows = filterAccountsOfSubcategoryId(
  //     props.accounts,
  //     subcategoryId,
  //     props.asOfDate
  //   ).map((account, index) => {
  //     return (
  //       <Table.Row key={index}>
  //         <Table.Cell textAlign="center">{account.name}</Table.Cell>
  //         <Table.Cell textAlign="center">
  //           {numberOfEntriesGivenAccountId(
  //             props.entries,
  //             account.id
  //             // props.asOfDate
  //           )}
  //         </Table.Cell>
  //         <Table.Cell textAlign="center">
  //           {totalGivenAccountId(props.entries, account.id, props.asOfDate)}
  //         </Table.Cell>
  //       </Table.Row>
  //     );
  //   });
  //   arrayOfRows.unshift(
  //     <Table.Row key={-1}>
  //       <Table.Cell textAlign="center" colSpan="3">
  //         {subcategoryIdToName(subcategoryId)}
  //       </Table.Cell>
  //     </Table.Row>
  //   );
  //   arrayOfRows.push(
  //     <Table.Row key={-2}>
  //       <Table.Cell textAlign="right" colSpan="2">
  //         Subtotal:
  //       </Table.Cell>
  //       <Table.Cell>
  //         {totalForSubcategory(
  //           props.entries,
  //           props.accounts,
  //           [subcategoryId],
  //           props.asOfDate
  //         )}
  //       </Table.Cell>
  //     </Table.Row>
  //   );
  //   return arrayOfRows;
  // };
  //
  // return (
  //   <Table celled structured>
  //     <Table.Header>
  //       <Table.Row>
  //         <Table.HeaderCell textAlign="center" colSpan="3">
  //           Asset
  //         </Table.HeaderCell>
  //       </Table.Row>
  //       <Table.Row>
  //         <Table.HeaderCell textAlign="center">Account</Table.HeaderCell>
  //         <Table.HeaderCell textAlign="center"># of Entries</Table.HeaderCell>
  //         <Table.HeaderCell textAlign="center">Amount</Table.HeaderCell>
  //       </Table.Row>
  //     </Table.Header>
  //     <Table.Body>
  //       {renderRows(1)}
  //       {renderRows(2)}
  //       {renderRows(3)}
  //       {renderRows(4)}
  //     </Table.Body>
  //     <Table.Footer fullWidth>
  //       <Table.Row>
  //         <Table.HeaderCell textAlign="right" colSpan="2">
  //           Subtotal:
  //         </Table.HeaderCell>
  //         <Table.HeaderCell>
  //           {totalForSubcategory(props.entries, props.accounts, [1, 2, 3, 4])}
  //         </Table.HeaderCell>
  //       </Table.Row>
  //     </Table.Footer>
  //   </Table>
  // );
};

const mapStateToProps = state => {
  return {
    // showLiquid
    accounts: state.userInfo.accounts,
    entries: state.userInfo.entries,
    beginDate: 0,
    endDate: state.netWorthContainer.asOfDate
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Asset);
