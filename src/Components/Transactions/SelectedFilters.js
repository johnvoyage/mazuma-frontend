import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {resetTransactions} from './NewTransactionSubmitted';


const SelectedFilters = (props) => {


  return(
    <Button.Group attached='top'>
      <Button
        toggle
        active={props.descriptionToggle}
        onClick={props.toggleTransactionDescription}
        content="Descriptions"
      />
      <Button
        toggle
        name='none'
        active={props.filterSelected === 'none'}
        content='No Filters'
        onClick={props.toggleTransactionFilter}
      />
      <Button
        toggle
        name='quick'
        active={props.filterSelected === 'quick'}
        content='Quick Filters'
        onClick={props.toggleTransactionFilter}
      />
      <Button
        toggle
        name='custom'
        active={props.filterSelected === 'custom'}
        content='Custom Filters'
        onClick={props.toggleTransactionFilter}
      />
      <Button
        toggle
        active={props.newTransaction}
        onClick={
          (event) => {
            props.toggleNewTransaction()
            props.updateTransactionBalance(0)
            resetTransactions()
        }}
        content='New Transaction'
      />
      <Button
        toggle
        active={props.newAccount}
        onClick={props.toggleNewAccount}
        content='New Account'
      />
    </Button.Group>
  )


};

const mapStateToProps = (state) => {
  return {
    descriptionToggle: state.transactionContainer.descriptionToggle,
    newTransaction: state.transactionContainer.newTransaction,
    newAccount: state.transactionContainer.newAccount,
    filterSelected: state.transactionContainer.filterSelected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTransactionDescription: () => {
      dispatch({ type: 'TOGGLE_TRANSACTION_DESCRIPTION' })
    },
    toggleTransactionFilter: (event) => {
      dispatch({ type: 'TOGGLE_TRANSACTION_FILTER', filterSelected: event.target.name })
    },
    toggleNewTransaction: () => {
      dispatch({ type: 'TOGGLE_NEW_TRANSACTION' })
    },
    toggleNewAccount: () => {
      dispatch({ type: 'TOGGLE_NEW_ACCOUNT' })
    },

    updateTransactionBalance: (transactionBalance) => {
      // debugger
      // console.log(transactionBalance)
      dispatch({ type: 'UPDATE_TRANSACTION_BALANCE', transactionBalance })
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedFilters);
