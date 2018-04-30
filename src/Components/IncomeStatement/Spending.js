import React from 'react'
import { connect } from 'react-redux'
import { filterAccountsOfSubcategoryId } from '../MainSegment/TransactionFunctions'

import { Table } from 'semantic-ui-react'




const Spending = (props) => {

  const renderSpendingRows = () => {
    return filterAccountsOfSubcategoryId(props.accounts, 9).map((account, index) => {
      return (
        <Table.Row key={index}>
          <Table.Cell>
            {account.name}
          </Table.Cell>
          <Table.Cell>
            'test'
          </Table.Cell>
          <Table.Cell>
            'sup'
          </Table.Cell>
        </Table.Row>
      )
    })
  }

  return(
    <Table celled structured>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign='center' colSpan='3'>Spending</Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell textAlign='center'>Account</Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>Number of Entries</Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>Amount</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        { renderSpendingRows() }
        {/* renderSubtotalRow() */}
      </Table.Body>
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

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spending)
