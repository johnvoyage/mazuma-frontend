import React from "react";
import { connect } from "react-redux";
import {
  subcategoryIdToName,
  totalForSubcategory,
  filterAccountsOfSubcategoryId,
  totalGivenAccountId,
  numberOfEntriesGivenAccountId
} from "../MainSegment/TransactionFunctions";
import { Table } from "semantic-ui-react";

const Asset = props => {
  const renderRows = subcategoryId => {
    const arrayOfRows = filterAccountsOfSubcategoryId(
      props.accounts,
      subcategoryId
    ).map((account, index) => {
      return (
        <Table.Row key={index}>
          <Table.Cell textAlign="center">{account.name}</Table.Cell>
          <Table.Cell textAlign="center">
            {numberOfEntriesGivenAccountId(props.entries, account.id)}
          </Table.Cell>
          <Table.Cell textAlign="center">
            {totalGivenAccountId(props.entries, account.id)}
          </Table.Cell>
        </Table.Row>
      );
    });
    arrayOfRows.unshift(
      <Table.Row key={-1}>
        <Table.Cell textAlign="center" colSpan="3">
          {subcategoryIdToName(subcategoryId)}
        </Table.Cell>
      </Table.Row>
    );
    arrayOfRows.push(
      <Table.Row key={-2}>
        <Table.Cell textAlign="right" colSpan="2">
          Subtotal:
        </Table.Cell>
        <Table.Cell>
          {totalForSubcategory(props.entries, props.accounts, [subcategoryId])}
        </Table.Cell>
      </Table.Row>
    );
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
          <Table.HeaderCell textAlign="center">
            Number of Entries
          </Table.HeaderCell>
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
            {totalForSubcategory(props.entries, props.accounts, [8])}
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

const mapStateToProps = state => {
  return {
    // showLiquid
    accounts: state.userInfo.accounts,
    entries: state.userInfo.entries,
    asOfDate: state.netWorthContainer.asOfDate
  };
};

const mapDispatchToProps = dispatch => {
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Asset);
