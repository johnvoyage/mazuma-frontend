import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';


const GraphOptions = (props) => {



  return(
    <Button.Group attached='top'>
      <Button
        toggle
        // active={props.descriptionToggle}
        // onClick={props.toggleTransactionDescription}
        content="Net Worth over time"
      />
      <Button
        toggle
        // name='none'
        // active={props.filterSelected === 'none'}
        content='Earning over time'
        // onClick={props.toggleTransactionFilter}
      />
      <Button
        toggle
        // name='quick'
        // active={props.filterSelected === 'quick'}
        content='Spending over time'
        // onClick={props.toggleTransactionFilter}
      />
      <Button
        toggle
        // name='custom'
        // active={props.filterSelected === 'custom'}
        content='Spending by category'
        // onClick={props.toggleTransactionFilter}
      />
      <Button
        toggle
        // active={props.newAccount}
        // onClick={props.toggleNewAccount}
        content='Turn ON Goal Comparison'
      />
    </Button.Group>
  )


};

const mapStateToProps = (state) => {
  return {
    // descriptionToggle: state.transactionContainer.descriptionToggle,
    // newTransaction: state.transactionContainer.newTransaction,
    // newAccount: state.transactionContainer.newAccount,
    // filterSelected: state.transactionContainer.filterSelected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // toggleTransactionDescription: () => {
    //   dispatch({ type: 'TOGGLE_TRANSACTION_DESCRIPTION' })
    // },
    // toggleTransactionFilter: (event) => {
    //   dispatch({ type: 'TOGGLE_TRANSACTION_FILTER', filterSelected: event.target.name })
    // },
    // toggleNewTransaction: () => {
    //   dispatch({ type: 'TOGGLE_NEW_TRANSACTION' })
    // },
    // toggleNewAccount: () => {
    //   dispatch({ type: 'TOGGLE_NEW_ACCOUNT' })
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphOptions);
